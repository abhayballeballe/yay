const febHolidays = [
    "Dear pillu, kuch toh hai ye ",
    " ye kuch  ktoh  cycle hai, enjoy",
    "dil tu jaan tu  😊",
    " Dil toh har kisi ke paas hota hai, lekin sab Dilwale nahi hote isliye mera dhyan rakha kar🤩",
    "dukh me tum aur khushi me tum 🤨",
    "Jindagi ke safar me kaafi ho tum ❤",
    "Maine shiddat se chaha hai tumhe, I love you❤️",
    "You're my mumma ✔",
    "You are my kumbkaran ✨💕",
    "And of course... wait .....",
    "My honeyplum🤭",
    "mein hoon humesa hu aaj bhi kal bhi parso bhi 10 saal baad bhi",
    "agar 10 ocean dur bhi hui fhir bi🥰",
    "u are my mhaiye jinha sona ",
    "You're the prettiest, cutest, funniest,",
    "sweetest girl alive. 🤞✍",
    "In one word, you're just perfect.😍",
    "I'm the happiest man alive🥰",
    "I'm so grateful I met you❤️",
    "I'll always do my best to keep you happy🥺",
    "tere ishq mein jaana ranjha pagal hogaya✔",
    "kabhi khud ko akela mat samjhna💓",
    "You are the most special person in my life🥰",
    "I don't want to lose you 😒",
    "And trust me I dont want anyone else 🥰",
    "There's no one better than you❤️",
    "You're the best cutipie!! 💖",
    "Or should I say, I miss you when",
    "something really good happens 🤨",
    "Acche lagte hai wo pal jo tumhare",
    "sath bitaye hain virtually or offline💓",
    "There's some hardships, 😢",
    "but we overcame most of them 🥰",
    "and it made me realised how",
    "important you are in my life❤️",
    "This complete cycle is just for you, 😘",
    "my unconditional love,my private variable💖",
    "Please take care of love who really loves you❤",
    "i love u eternal ",
    "Teri aankhon ki namkeen mastiyaan, teri hansi ki beparwah gustakhiyaan, teri zulfon ki lehraati angdaaiyaan, nahi bhoolunga main, jab tak hai jaan, Jab tak hai jaan.",
    "Pyaar toh bahut log karte hain, lekin mere jaisa pyar koi nahi kar sakta kyun ki kisi ke paas tum joh nahi ho,",
    "Yaad rakhna ki duniya ke kisi kone mein koi khush hai, kyun ki tum khush ho.❤️"
  ];
  const ulEl = document.querySelector("ul");
  const d = new Date();
  let daynumber = d.getMonth() == 1 ? d.getDate() - 1 : 0;
  let activeIndex = daynumber;
  const rotate = -360 / febHolidays.length;
  init();
  function init() {
    febHolidays.forEach((holiday, idx) => {
      const liEl = document.createElement("li");
      liEl.style.setProperty("--day_idx", idx);
      liEl.innerHTML = `<time datetime="2022-02-${idx + 1}">${idx + 1
        }</time><span>${holiday}</span>`;
      ulEl.append(liEl);
    });
    ulEl.style.setProperty("--rotateDegrees", rotate);
    adjustDay(0);
  }
  function adjustDay(nr) {
    daynumber += nr;
    ulEl.style.setProperty("--currentDay", daynumber);
    const activeEl = document.querySelector("li.active");
    if (activeEl) activeEl.classList.remove("active");
    activeIndex = (activeIndex + nr + febHolidays.length) % febHolidays.length;
    const newActiveEl = document.querySelector(
      `li:nth-child(${activeIndex + 1})`
    );
    document.body.style.backgroundColor = window.getComputedStyle(
      newActiveEl
    ).backgroundColor;
    newActiveEl.classList.add("active");
  }
  window.addEventListener("keydown", (e) => {
    switch (e.key) {
      case "ArrowUp":
        adjustDay(-1);
        break;
      case "ArrowDown":
        adjustDay(1);
        break;
      default:
        return;
    }
  });
  