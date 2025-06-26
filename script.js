const pages = document.querySelectorAll(".page");
const container = document.querySelector(".container");
const music = document.getElementById("bgMusic");
const playBtn = document.getElementById("playMusicBtn");
let currentPage = 0;

function goToPage(index) {
  if (index >= 0 && index < pages.length) {
    currentPage = index;
    container.style.transform = `translateX(-${index * 100}vw)`;
    pages.forEach((page, i) => {
      page.classList.toggle("active", i === index);
    });
  }
}

// Manual play button
playBtn.addEventListener("click", () => {
  music.play();
  playBtn.style.display = "none";
});

// Page 1: tap letter
document.getElementById("tapLetter").addEventListener("click", () => {
  goToPage(1);
  typeWriterEffect(texts.typing2, "typing2", 60);
});

// Next buttons
document.querySelectorAll(".next-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    goToPage(currentPage + 1);
    if (currentPage === 1) typeWriterEffect(texts.typing2, "typing2", 60);
    if (currentPage === 4) typeWriterEffect(texts.typing5, "typing5", 28);
    if (currentPage === 5) typeWriterEffect(texts.typing6, "typing6", 30);
  });
});

// Previous buttons
document.querySelectorAll(".prev-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    goToPage(currentPage - 1);
  });
});

// Page 4: click profile
document.getElementById("profileImg").addEventListener("click", () => {
  typeWriterEffect(texts.typing4, "typing4", 28);
});

// Typing effect
function typeWriterEffect(text, elementId, speed = 50) {
  const el = document.getElementById(elementId);
  el.textContent = "";
  let i = 0;
  (function typing() {
    if (i < text.length) {
      el.textContent += text.charAt(i);
      i++;
      setTimeout(typing, speed);
    }
  })();
}

// Texts
const texts = {
  typing2: "WELCOME HOME SAYANG ❤️",

  typing4: `✨ Why I Say Today is Your Special Day 🌟

Because today… you came home. 🏡
After everything you’ve been through, you’re finally back — stronger than ever. 💪
I know it wasn’t easy. I know there were moments you felt tired, maybe scared… but you made it through. 🥹
And today, I finally get to see your smile again — the one I’ve missed so much. 😊

You know, sayang… 💖
Even when you were in pain, even when you were fighting silently —
you never once made me feel like you were a burden. 🫶
You never disappointed me.
Not when you were sick, and definitely not when you’re healthy.

If anything, you showed me how strong and beautiful you truly are. ✨
And I just want to say…
I’m so proud of you. 🥰
I’m so thankful for you. 🙏
And I love you more than words can say. ❤️`,

  typing5: `💌 From Me to You, Sayang

I don’t know if I’ve said this enough…
but having you in my life is one of the best things that ever happened to me. 🥰
You’re not just someone I care about 
you’re someone I pray for, someone I cherish, and someone I always want to see happy. 😊

No matter what we go through, I want you to always remember this:
I’m here. I’m not going anywhere. 🤗

You know… I still remember when I bought you that thing you really wanted. 🎁
You looked so happy and honestly, that’s all I ever wanted to see. 😍
Even when your kakak joked that you “pau-ed” me… I just smiled. 😆

Because the truth is 
It’s nothing compared to the love, peace, and happiness you gave me. ✨

And what makes me smile more is how you selalu macam takut nak minta benda,
takut susahkan I…
Padahal dalam hati ni, I dah siap nak bagi pun 😌

You don’t ever have to feel guilty, sayang.
You’ve given me more than enough 
through your strength, your care, your smile, and just by being you. 💕

If you ask for it, I’ll find a way.
If you want something, I’ll do my best.
Not because I have to but because I want to. 🫶

So please, never feel like you’re asking for too much.
With you, even giving everything feels light. 🎈

Welcome home again, sayang. 🏠
I missed you more than I can ever explain.
Let’s create new memories just us, slowly, beautifully, together. 💖`,

  typing6: "Sayang, nanti tengok account ML sayang. Ada surprise lagi satu tau! 😚❤️\n\nWELCOME HOME AGAIN MY BABY GIRL 💕"
};
