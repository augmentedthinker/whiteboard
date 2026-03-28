(function(){
  if(window.__rvFloatingNavInitialized) return;
  window.__rvFloatingNavInitialized = true;

  const marker='/remote-viewer/';
  const path=location.pathname;
  const idx=path.indexOf(marker);
  const href=idx>=0?path.slice(0,idx+marker.length):'/';

  const root=document.documentElement;
  const body=document.body;
  if(!body) return;

  let fab=document.getElementById('rvComboFab');
  if(!fab){
    fab=document.createElement('div');
    fab.id='rvComboFab';
    fab.className='rv-combo-fab';
    fab.innerHTML='<a id="rvHomeFab" class="rv-combo-half" href="#" aria-label="Back to menu page" title="Back to menu page">⌂</a><button id="rvFullscreenFab" class="rv-combo-half" type="button" aria-label="Toggle fullscreen" title="Toggle fullscreen">⛶</button>';
    body.appendChild(fab);
  }

  const home=fab.querySelector('#rvHomeFab');
  const fs=fab.querySelector('#rvFullscreenFab');
  if(!home || !fs) return;
  home.setAttribute('href', href);

  const clamp=(v,min,max)=>Math.max(min,Math.min(max,v));
  const WANT_KEY='rvWantFullscreen';
  const POS_KEY='rvComboFabPos';
  const isNativeFs=()=>!!(document.fullscreenElement||document.webkitFullscreenElement);
  const wanted=()=>localStorage.getItem(WANT_KEY)==='1';
  const applyAppFs=(on)=>{root.classList.toggle('rv-app-fullscreen',on);body.classList.toggle('rv-app-fullscreen',on);};
  const sync=()=>{fs.textContent=(wanted()||isNativeFs())?'🡼':'⛶';applyAppFs(wanted());};
  const enterNativeFs=async()=>{const t=document.documentElement;if(t.requestFullscreen)return t.requestFullscreen();if(t.webkitRequestFullscreen)return t.webkitRequestFullscreen();};
  const exitNativeFs=async()=>{if(document.exitFullscreen)return document.exitFullscreen();if(document.webkitExitFullscreen)return document.webkitExitFullscreen();};
  const toggleFs=async()=>{
    try{
      if(!wanted()&&!isNativeFs()){
        localStorage.setItem(WANT_KEY,'1');
        applyAppFs(true);
        try{ await enterNativeFs(); }catch(_){ }
      }else{
        localStorage.setItem(WANT_KEY,'0');
        applyAppFs(false);
        if(isNativeFs()) try{ await exitNativeFs(); }catch(_){ }
      }
    }catch(_){ }
    sync();
  };

  const place=()=>{
    try{
      const raw=localStorage.getItem(POS_KEY);
      if(!raw) return;
      const pos=JSON.parse(raw);
      const maxLeft=window.innerWidth-fab.offsetWidth-6;
      const maxTop=window.innerHeight-fab.offsetHeight-6;
      fab.style.left=clamp(pos.left??10,6,maxLeft)+'px';
      fab.style.top=clamp(pos.top??10,6,maxTop)+'px';
      fab.style.right='auto';
      fab.style.bottom='auto';
    }catch(_){ }
  };
  const save=()=>{
    try{localStorage.setItem(POS_KEY,JSON.stringify({left:fab.offsetLeft,top:fab.offsetTop}))}catch(_){ }
  };

  let d=null,m=false;
  fab.addEventListener('pointerdown',e=>{
    if(e.target && e.target.closest && e.target.closest('.rv-combo-half')) return;
    d={id:e.pointerId,startX:e.clientX,startY:e.clientY,left:fab.offsetLeft,top:fab.offsetTop};
    m=false;
    fab.classList.add('dragging');
    fab.setPointerCapture(e.pointerId);
    e.preventDefault();
  });
  fab.addEventListener('pointermove',e=>{
    if(!d||e.pointerId!==d.id) return;
    const dx=e.clientX-d.startX,dy=e.clientY-d.startY;
    if(Math.abs(dx)>3||Math.abs(dy)>3) m=true;
    const maxLeft=window.innerWidth-fab.offsetWidth-6;
    const maxTop=window.innerHeight-fab.offsetHeight-6;
    fab.style.left=clamp(d.left+dx,6,maxLeft)+'px';
    fab.style.top=clamp(d.top+dy,6,maxTop)+'px';
    fab.style.right='auto';
    fab.style.bottom='auto';
  });
  fab.addEventListener('pointerup',e=>{
    if(!d||e.pointerId!==d.id) return;
    fab.classList.remove('dragging');
    try{fab.releasePointerCapture(e.pointerId)}catch(_){ }
    d=null;
    save();
    setTimeout(()=>{m=false;},0);
  });
  fab.addEventListener('click',e=>{
    if(m){e.preventDefault();e.stopPropagation();m=false;}
  });
  const stopInner=(e)=>{ e.stopPropagation(); };
  ['pointerdown','mousedown','touchstart'].forEach(type=>{
    home.addEventListener(type,stopInner,{passive:true});
    fs.addEventListener(type,stopInner,{passive:true});
  });
  let lastActionAt=0;
  const shouldIgnoreFollowup=()=>{
    const now=Date.now();
    if(now-lastActionAt<350) return true;
    lastActionAt=now;
    return false;
  };
  const goHome=(e)=>{
    if(e){ e.preventDefault(); e.stopPropagation(); }
    if(shouldIgnoreFollowup()) return;
    location.href=href;
  };
  const onFs=async(e)=>{
    if(e){ e.preventDefault(); e.stopPropagation(); }
    if(m||shouldIgnoreFollowup()) return;
    await toggleFs();
  };
  home.addEventListener('click',goHome);
  fs.addEventListener('click',onFs);
  home.addEventListener('pointerup',goHome);
  fs.addEventListener('pointerup',onFs);
  document.addEventListener('fullscreenchange',()=>{if(!isNativeFs()&&!wanted()) applyAppFs(false); sync();});
  window.addEventListener('pageshow',()=>{applyAppFs(wanted());sync();});

  place();
  applyAppFs(wanted());
  sync();
})();
