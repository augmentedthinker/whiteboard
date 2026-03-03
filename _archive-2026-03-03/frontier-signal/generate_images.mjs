import fs from 'node:fs/promises';
import fsSync from 'node:fs';
import path from 'node:path';
import os from 'node:os';

function tryLoadGeminiKey() {
  if (process.env.GEMINI_API_KEY) return process.env.GEMINI_API_KEY;

  try {
    const secretsPath = path.join(os.homedir(), '.config', 'openclaw', 'secrets.env');
    if (fsSync.existsSync(secretsPath)) {
      const txt = fsSync.readFileSync(secretsPath, 'utf8');
      const m = txt.match(/^\s*GEMINI_API_KEY\s*=\s*["']?([^"'\n\r]+)["']?\s*$/m);
      if (m?.[1]) return m[1].trim();
    }
  } catch {}

  try {
    const authPath = path.join(os.homedir(), '.openclaw', 'agents', 'atlas-signal-desk', 'agent', 'auth-profiles.json');
    if (fsSync.existsSync(authPath)) {
      const data = JSON.parse(fsSync.readFileSync(authPath, 'utf8'));
      const key = data?.profiles?.['google:default']?.key;
      if (key) return key;
    }
  } catch {}

  return '';
}

const API_KEY = tryLoadGeminiKey();
if (!API_KEY) {
  console.error('Error: GEMINI_API_KEY is not set (env/secrets/auth profile).');
  process.exit(1);
}

const [, , model, prompt, outPath] = process.argv;
if (!model || !prompt || !outPath) {
  console.error('Usage: node generate_images.mjs <model> <prompt> <output_path>');
  process.exit(1);
}

async function generateImage() {
  const url = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${API_KEY}`;
  const payload = {
    contents: [{ parts: [{ text: prompt }] }],
    generationConfig: { responseModalities: ['TEXT', 'IMAGE'] }
  };

  const res = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload)
  });

  if (!res.ok) {
    const err = await res.text();
    console.error(`API Error (${res.status}): ${err}`);
    process.exit(1);
  }

  const data = await res.json();
  const parts = data?.candidates?.[0]?.content?.parts || [];
  const imgPart = parts.find(p => p.inlineData?.data || p.inline_data?.data);
  const b64 = imgPart?.inlineData?.data || imgPart?.inline_data?.data;

  if (!b64) {
    console.error('No base64 image data returned:', JSON.stringify(data).slice(0, 1500));
    process.exit(1);
  }

  const buf = Buffer.from(b64, 'base64');
  if (buf.length < 10240) {
    console.error(`Generated image is too small (${buf.length} bytes), rejecting.`);
    process.exit(1);
  }

  await fs.mkdir(path.dirname(outPath), { recursive: true });
  await fs.writeFile(outPath, buf);
  console.log(`Image successfully generated and saved to ${outPath}`);
}

generateImage().catch((e) => {
  console.error('Fetch/Execution error:', e.message);
  process.exit(1);
});
