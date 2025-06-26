/* element refs */
const pages=document.querySelectorAll('.page'),
      container=document.querySelector('.container'),
      bgMusic=document.getElementById('bgMusic'),
      playBtn=document.getElementById('playBtn'),
      muteBtn=document.getElementById('muteBtn'),
      letter=document.getElementById('tapLetter'),
      profile=document.getElementById('profileImg');

let currentPage=0;

/* slide helper */
function goToPage(i){
  if(i<0||i>=pages.length)return;
  currentPage=i;
  container.style.transform=`translateX(-${i*100}vw)`;
  pages.forEach((p,idx)=>p.classList.toggle('active',idx===i));
}

/* typewriter */
function typeWriter(txt,id,spd=50){
  const el=document.getElementById(id);el.textContent='';
  [...txt].forEach((ch,i)=>setTimeout(()=>el.textContent+=ch,i*spd));
}

/* texts */
const texts={
  typing2:'WELCOME HOME SAYANG ❤️',
  typing4:`✨ Why I Say Today is Your Special Day 🌟\n\nBecause today… you came home. 🏡 …`,
  typing5:`💌 From Me to You, Sayang\n\nI don’t know if I’ve said this enough…`,
  typing6:`Sayang, nanti tengok account ML sayang. Ada surprise lagi satu tau! 😚❤️\n\nWELCOME HOME AGAIN MY BABY GIRL 💕`
};

/* --- interactions --- */
/* surat: go to page2 + typing */
letter.addEventListener('click',()=>{ goToPage(1); typeWriter(texts.typing2,'typing2',60); });

/* play music button (mobile-safe) */
playBtn.addEventListener('click',()=>{
  bgMusic.play().catch(()=>{});          // some browsers still need catch
  playBtn.style.display='none';
  muteBtn.style.display='block';
});

/* mute/unmute toggle */
muteBtn.addEventListener('click',()=>{
  bgMusic.muted=!bgMusic.muted;
  muteBtn.textContent=bgMusic.muted?'🔇':'🔊';
});

/* next / prev */
document.querySelectorAll('.next-btn').forEach(btn=>btn.onclick=()=>{
  goToPage(currentPage+1);
  if(currentPage===1) typeWriter(texts.typing2,'typing2',60);
  if(currentPage===4) typeWriter(texts.typing5,'typing5',28);
  if(currentPage===5) typeWriter(texts.typing6,'typing6',30);
});
document.querySelectorAll('.prev-btn').forEach(btn=>btn.onclick=()=>goToPage(currentPage-1));

/* profile click page4 */
profile.addEventListener('click',()=>typeWriter(texts.typing4,'typing4',28));
