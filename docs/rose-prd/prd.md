# PRD: Rose Citation Assistant (Bluebook Citation App POC)

## Document Info
- Version: 0.1
- Status: Draft POC PRD
- Prepared for: Rose (attorney, Washington, DC)
- Prepared by: Christopher
- Purpose: Define a proof-of-concept application that helps generate accurate Bluebook-style citations for high-frequency legal research sources, especially in data breach litigation and enforcement contexts.

## 1. Executive Summary
Rose needs a faster way to turn legal research sources into properly formatted Bluebook citations. Today, the work is manual, repetitive, and error-prone. The core pain is not legal reasoning itself. The pain is the formatting workflow: identifying what kind of source she has, finding the right source metadata, and converting that information into the correct citation format.

This product is a focused citation assistant. It is not intended to replace legal judgment, legal research platforms, or substantive legal analysis. Its job is narrower and more practical:

1. Accept a messy, plain-English description of a source.
2. Determine what kind of legal source it is.
3. Retrieve or confirm the relevant source details.
4. Apply citation rules using a Bluebook-style rules engine informed by permissible reference materials.
5. Output a clean, copyable citation, along with source details and confidence indicators.

The proof of concept should target three high-frequency use cases drawn directly from the discovery conversation:

- Attorney General enforcement actions against companies after data breaches
- Class action lawsuits following data breaches
- Attorney General guidance pages on breach notification obligations

These three scenarios are ideal for a first version because they cover three distinct source types:

- Court cases and filed actions
- Enforcement announcements and settlements
- Government guidance webpages and reporting portals

That makes them strong test cases for the app's most important capability: source classification before citation generation.

## 2. Problem Statement
Rose regularly needs to cite legal and quasi-legal sources tied to data breach matters. The source may be:

- A lawsuit filed in court
- A settlement or enforcement action announced by a state Attorney General
- A government guidance page describing notification obligations
- A class action settlement notice or approval order
- A court opinion or pleading

The current workflow is inefficient because:

- The source often starts as a rough description, not a clean citation-ready record.
- Different source types require different citation formats.
- The same real-world matter may have multiple possible citeable sources (complaint, press release, order, settlement, guidance page, agency form, etc.).
- Citation formatting rules are strict, detail-sensitive, and time-consuming.
- The official Bluebook is paywalled, which complicates direct in-app reference to the underlying rule text.

The main product challenge is not simply formatting text. It is converting an ambiguous legal reference into a structured source record that can be cited correctly.

## 3. Product Vision
Build a practical legal workflow tool that acts like a citation co-pilot.

A user should be able to type something like:

> "NY AG settlement with Blackbaud data breach"

And the app should translate that into:

- Source type: AG enforcement action / settlement announcement
- Likely source: New York or California AG page, settlement document, or official release
- Required fields: agency name, document title, docket if available, court if available, date, URL, last visited date (for web sources)
- Output: a clean Bluebook-style citation

The product should save time, reduce citation formatting errors, and provide enough transparency that a lawyer can trust but verify.

## 4. Goals

### Primary Goals
- Reduce the time required to produce a correct Bluebook-style citation for common source types.
- Support source-type detection from messy plain-English input.
- Surface the underlying source details used to generate the citation.
- Provide copy-ready citations that a lawyer can drop into motions, memos, briefs, or research notes.
- Demonstrate a credible proof of concept for Rose's most common use cases.

### Secondary Goals
- Build a reusable architecture that can expand into more source types later.
- Create an internal rules framework that can be updated as citation guidance evolves.
- Make the app understandable to both lawyers and non-lawyer builders.

## 5. Non-Goals (for POC)
- Replacing Westlaw, Lexis, PACER, or full legal research platforms
- Giving legal advice or evaluating the legal merits of a source
- Guaranteeing final legal correctness without lawyer review
- Covering every Bluebook rule in the first release
- Supporting law review citations, legislative history, or advanced academic citation edge cases in MVP
- Automatically filing or integrating with courts in MVP

## 6. Target Users

### Primary User
**Rose**
- Attorney in Washington, DC
- Works on litigation, including data breach-related matters
- Needs accurate citations quickly
- Likely starts from imperfect memory or rough references rather than complete source records
- Needs a tool that reduces friction, not a tool that forces more manual data entry

### Secondary User
**Christopher**
- Non-lawyer builder / product owner
- Needs the workflow explained in plain English
- Needs a product design that is technically achievable for a proof of concept
- May use NotebookLM, RAG, or LLM-based systems to prototype the citation logic

### Future Users
- Litigation associates
- Paralegals
- Compliance professionals
- Legal operations staff

## 7. Core Product Insight
The most important product function is **classification**, not formatting.

All legal citations look intimidating because of tradition and formatting conventions. Underneath that, they are structured records. The app's first and most important job is to answer:

> What kind of source is this?

Once the source is classified, the citation template becomes much easier to apply.

For the POC, the classification layer should decide whether the input is primarily:

- A court case / filed lawsuit
- An enforcement action / settlement without a formal court citation available
- A government guidance webpage or portal

That classification controls everything that follows.

## 8. POC Scope: Three Primary Use Cases

### Use Case 1: Attorney General Enforcement Actions

#### User Need
Rose wants to cite an enforcement matter involving a state Attorney General and a company tied to a data breach or notification failure.

#### Example Inputs
- "NY AG v. Allstate data breach"
- "Blackbaud AG settlement"
- "Wojeski NY AG settlement for late notice"

#### Why This Matters
These matters are common in data breach work, but they can be messy because the citeable source may be:

- A filed complaint in court
- A settlement agreement
- An AG press release
- An enforcement page

The same matter can exist both as a legal proceeding and as a public-facing agency announcement.

#### App Behavior
The app should:
- Recognize the input as an enforcement matter
- Search for official sources first
- Determine whether there is a case caption and docket number
- If a case exists, prefer a case-style citation when appropriate
- If no formal filing is available, fall back to an agency or web citation
- Show the user what source it used and why

#### Output Types
- Case citation (if court filing is available)
- Agency / internet citation (if only a press release, settlement page, or guidance page is available)

#### Core POC Success Criteria
- Correctly distinguishes between a lawsuit and a non-docketed agency source
- Produces a citation that is structurally appropriate for the selected source type

### Use Case 2: Class Actions After Data Breaches

#### User Need
Rose wants to cite a class action lawsuit or settlement involving a company that experienced a data breach.

#### Example Inputs
- "AT&T data breach class action"
- "RIBridges Deloitte class action settlement"
- "McLaren Health Care data breach litigation"

#### Why This Matters
These are more likely to be conventional lawsuits, which makes them strong candidates for court-style citations. They also introduce important distinctions such as:

- "In re" consolidated litigation vs. standard plaintiff-v-defendant style
- Settlement approval orders vs. original complaints
- Federal court abbreviations and docket numbers

#### App Behavior
The app should:
- Recognize the input as litigation
- Identify the best citeable litigation source (complaint, order, or settlement approval order)
- Extract case name, docket number, court, and year
- Determine whether the case caption uses "In re" formatting
- Generate a lawsuit-style citation

#### Output Types
- Case citation for complaint, order, or other court document

#### Core POC Success Criteria
- Pulls the correct case title format
- Uses the correct court abbreviation field
- Avoids converting court cases into generic website citations unless no better source exists

### Use Case 3: Attorney General Guidance on Data Breach Notification

#### User Need
Rose wants to cite state AG guidance explaining how to notify after a data breach.

#### Example Inputs
- "New York AG SHIELD Act guidance"
- "Connecticut AG data breach reporting form"
- "Pennsylvania AG breach portal"

#### Why This Matters
These are not court cases. They are usually official web pages, submission portals, or agency guidance pages. That means they require a different citation format altogether.

#### App Behavior
The app should:
- Recognize that the input is guidance, not litigation
- Prefer official agency websites
- Extract agency name, title, URL, and access date
- Format the result as a web citation rather than a case citation

#### Output Types
- Internet / agency citation

#### Core POC Success Criteria
- Does not invent docket numbers or case captions where none exist
- Produces a clean, properly structured web citation

## 9. User Journey (Plain English)

### Step 1: User Enters a Rough Description
The user starts with a plain-English prompt, not a clean legal record.

Examples:
- "Connecticut AG data breach guidance"
- "Allstate NY AG complaint"
- "AT&T data breach class action settlement"

### Step 2: App Classifies the Source Type
The app determines whether the source is most likely:
- Litigation
- Enforcement
- Guidance / web source

### Step 3: App Finds the Best Available Source
The app searches in priority order:
- Official court filing or court order
- Official government source
- Official settlement or administrator page
- Trusted secondary source only as a fallback (with clear labeling)

### Step 4: App Extracts Metadata
The app pulls the fields needed for citation generation.

Examples of needed fields:
- Case name
- Docket number
- Court
- Year / full date
- Agency name
- Page title
- URL
- Last visited date

### Step 5: App Applies the Correct Template
The app chooses a citation format based on the source type and fills the required fields.

### Step 6: User Reviews and Copies
The app shows:
- Final citation
- Source link
- Source type detected
- Confidence level
- Editable fields if something needs correction

## 10. Functional Requirements

### 10.1 Input Handling
- Accept natural-language input describing a legal source.
- Support short, messy descriptions and partial references.
- Allow optional manual refinement (state, court, company, year, source preference).

### 10.2 Source Classification Engine
- Detect the likely source category before citation generation.
- Initial supported categories:
  - Court case / filed litigation
  - AG enforcement action / settlement
  - AG guidance / agency webpage
- Return classification confidence.
- Allow manual override if the user disagrees.

### 10.3 Source Retrieval Layer
- Search for the most authoritative source available.
- Prefer official sources over secondary summaries.
- Support URL input directly when the user already has the source.
- For POC, retrieval can rely on web search plus URL validation.
- Future versions may support court databases, PACER, and internal firm knowledge sources.

### 10.4 Metadata Extraction
The system must extract or request the following, depending on source type:

**Case / Litigation Fields**
- Case name / caption
- Docket number
- Court
- Date or year
- Document type (complaint, order, settlement approval, opinion)

**Agency / Web Fields**
- Agency name
- Page or document title
- Publication year if available
- URL
- Last visited date

### 10.5 Citation Generation Engine
- Generate Bluebook-style citations for supported source types.
- Select the correct template based on classification.
- Normalize abbreviations and punctuation.
- Preserve editable fields for lawyer review.
- Display the citation as copy-ready text.

### 10.6 Transparency and Review
- Show the source used to create the citation.
- Show structured metadata fields.
- Flag uncertain fields (for example, missing docket number).
- Label when a citation is based on a fallback source.
- Allow quick correction before copy/export.

### 10.7 Output and Export
- One-click copy to clipboard
- Optional save to note / citation list
- Optional export to Markdown or plain text for research memos
- For POC, simple copy and download are sufficient

## 11. Recommended UX for the POC

### Primary Screen
A single, simple workflow:

- Input box: "Describe the source you want to cite"
- Optional dropdown: source type (Auto, Court Case, Enforcement Action, Guidance Page)
- Button: "Find and Cite"

### Results Panel
Display:
- Final citation
- Source type detected
- Source used (clickable)
- Extracted fields
- Confidence / warnings
- Editable field controls
- Button: "Copy Citation"

### Example UX Behavior
If the app is uncertain whether a matter is a court filing or an AG press release, it should say so in plain English:

> "We found an official AG press release but did not confirm a public docketed filing. This citation is formatted as a government web source."

That kind of transparency builds trust.

## 12. Citation Logic Model (Simplified)

### Decision Tree
1. Is this a court-filed matter with a case caption and docket?
   - Yes: use case citation template
   - No: continue
2. Is this an official government enforcement or guidance page?
   - Yes: use agency / web citation template
   - No: continue
3. Is this a settlement administrator or trusted public source?
   - Yes: use best-available web citation with warning
   - No: ask user for more detail or show low-confidence result

### Key Product Principle
The app should prefer the **most authoritative citeable source** available, not just the easiest source to find.

## 13. Technical Approach for POC

### Suggested POC Stack
- Front end: lightweight web app (simple form + result panel)
- Orchestration: LLM-assisted workflow
- Retrieval: web search + URL fetching
- Rules source: internal citation rules knowledge base informed by open educational or open reference materials
- Storage: minimal, possibly stateless in MVP

### RAG / NotebookLM-Style Design
Christopher's instinct here is directionally right: this can be prototyped with a retrieval-augmented setup. But the RAG layer should be used for the **citation rules reference and source-type guidance**, not as a substitute for verifying the actual legal source.

Recommended split:

**A. Rules Knowledge Base**
- Holds structured citation guidance for supported source types
- Based on permissible reference materials and internalized formatting logic
- Acts as the rules engine's reference layer

**B. Source Retrieval Layer**
- Finds the actual source to be cited
- Pulls source metadata from the live source
- Avoids hallucinating details from summaries

**C. Formatting Layer**
- Takes structured metadata and applies the correct citation template

This separation matters. If rules and source retrieval are mixed together carelessly, the app will become unreliable.

## 14. Open-Source Bluebook Clone Strategy
The conversation notes that the official Bluebook is paywalled, while open or public reference materials may exist that explain citation patterns. For product design purposes:

- Treat open reference materials as **implementation aids**, not as the product's only source of truth.
- Avoid copying proprietary content into the app unless licensing is confirmed.
- Focus the system on **rule patterns, templates, abbreviations, and supported source types**.
- Build an internal rules schema rather than hardcoding scattered prose from reference sites.

### Important Legal / Product Caveat
Before shipping beyond a private prototype, confirm:
- Licensing and permissible use of any reference materials used to build the rules layer
- Whether the final output should be labeled "Bluebook-style" rather than represented as officially Bluebook-authoritative
- Whether Rose is comfortable positioning the tool as an internal productivity assistant rather than an authoritative citation oracle

For the POC, the safest framing is:

> "Generates Bluebook-style citations for lawyer review."

## 15. Data Model (Minimal)

### Source Record
- `input_query`
- `source_type_detected`
- `source_type_confidence`
- `source_url`
- `source_authority_level` (official court, official agency, official settlement page, secondary source)
- `document_title`
- `agency_name`
- `case_name`
- `docket_number`
- `court`
- `document_type`
- `publication_date`
- `last_visited_date`
- `jurisdiction`

### Citation Record
- `citation_text`
- `citation_template_used`
- `warnings`
- `editable_fields`
- `generated_at`

## 16. Validation Rules
- Never fabricate a docket number.
- Never fabricate a court if it is not confirmed.
- Never treat a guidance page as a court case.
- Prefer official sources whenever possible.
- If required metadata is missing, either:
  - produce a partial citation with a warning, or
  - ask for user confirmation / manual completion
- Clearly label fallback citations built from non-primary sources.

## 17. Success Metrics for the POC

### User-Centered Metrics
- Rose can generate a usable citation from a rough input in under 60 seconds.
- Rose can handle all three target use cases without changing tools.
- Rose reports that the app reduces manual formatting time.

### Output Quality Metrics
- Correct source-type classification for the three POC categories
- Structurally correct citation template selection
- Low hallucination rate on required fields
- Clear warning behavior when metadata is incomplete

### Demo Metrics
- Successfully processes at least 3 example inputs for each of the three supported use cases
- Demonstrates editable output rather than black-box output

## 18. Risks and Failure Modes

### Risk 1: Wrong Source Classification
If the app misclassifies a source, the citation format will likely be wrong even if the text looks polished.

**Mitigation:** Make classification explicit and user-overridable.

### Risk 2: Hallucinated Metadata
An LLM may invent a docket number, court, or year if not grounded.

**Mitigation:** Separate retrieval from generation; require field-level confirmation from actual sources.

### Risk 3: Overclaiming Authority
The app may imply that it is applying the official Bluebook directly when it is actually using an internalized rules layer.

**Mitigation:** Use careful product language. Position as Bluebook-style citation generation for lawyer review.

### Risk 4: Secondary Source Drift
The app may cite news articles or summaries instead of primary sources when better sources exist.

**Mitigation:** Rank sources by authority and clearly label fallbacks.

### Risk 5: Too Much Scope Too Early
Trying to support every legal source type will slow delivery and weaken the demo.

**Mitigation:** Stay tightly focused on the three agreed use cases.

## 19. Recommended MVP Build Order

### Phase 1: POC Demo (Now)
Build only what is necessary to prove value in Rose's daily workflow.

Deliver:
- Simple input form
- Source-type auto-detection for the 3 target categories
- Retrieval of a best available source
- Structured field extraction
- Bluebook-style citation output
- Manual edit capability

### Phase 2: Reliability Layer
Add:
- Source ranking
- Confidence scoring
- Better field validation
- Saved citation history

### Phase 3: Expanded Legal Coverage
Potential additions:
- Court opinions
- Motions and pleadings
- Regulatory guidance beyond AG pages
- Multi-citation batch generation
- Firm knowledge base integration

## 20. Example POC Scenarios to Demo for Rose

### Scenario A: Enforcement Action
**Input:** "NY AG v. Allstate data breach"

**Expected System Behavior:**
- Detects enforcement action
- Finds official AG source and any available filed matter
- Chooses case citation if a docketed filing is available, otherwise cites the AG source
- Shows confidence and source selection explanation

### Scenario B: Class Action
**Input:** "AT&T data breach class action settlement"

**Expected System Behavior:**
- Detects litigation
- Finds case caption and court details
- Outputs a case-style citation
- Notes if citation is to an order versus the overall litigation

### Scenario C: AG Guidance
**Input:** "Connecticut AG data breach reporting guidance"

**Expected System Behavior:**
- Detects guidance page
- Finds official Connecticut AG page
- Extracts agency name, page title, URL, and access date
- Outputs a web-style citation

## 21. Acceptance Criteria for POC Sign-Off
The proof of concept is successful if:

- Rose can input rough source descriptions for the 3 target use cases.
- The app correctly identifies the source type in most ordinary examples.
- The app returns a citation in the correct general format for that source type.
- The app surfaces the underlying source details used.
- The app does not silently invent key metadata.
- Rose can quickly edit and copy the citation.
- Rose agrees the tool is useful enough to justify a second iteration.

## 22. Product Positioning
This should be framed as a focused legal productivity tool, not a broad "AI lawyer" product.

Recommended positioning:

> A citation assistant that helps litigators turn rough source references into review-ready Bluebook-style citations.

That positioning is narrow, believable, and useful.

## 23. Final Recommendation
The best first move is to build a narrow proof of concept centered on Rose's three recurring source categories. That keeps the scope realistic while still proving the core insight:

**If the app can correctly classify the source type, retrieve the right metadata, and apply the right template, it can remove a real daily pain point.**

This is a strong niche workflow because it does not try to replace legal judgment. It automates a repetitive, detail-sensitive formatting task that lawyers already dislike and still need to do.

That is exactly the kind of job a good software tool should take off a human's plate.

## 24. Appendix: Plain-English Summary for Christopher
This app is basically a smart formatting machine.

Rose types in a rough description of a legal source.
The app figures out what kind of thing it is.
Then it finds the important details.
Then it fills in the right citation template.
Then Rose reviews it and copies it.

The hardest part is not commas and italics.
The hardest part is correctly answering:

> "What kind of source am I looking at?"

Once that part works, the rest becomes much more manageable.
