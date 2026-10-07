const songs=[
["كان يا مكان","audio/kan-ya-makan.mp3"],
["يا جدع","audio/ya-gada3.mp3"],
["تنين","audio/teneen.mp3"],
["شعرك شاب","audio/sha3rak-shab.mp3"],
["أنا راجع","audio/ana-rage3.mp3"],
["ناس كدابة","audio/nas-kadaba.mp3"],
["أجمل أيام حياتنا","audio/agma3-ayam.mp3"]
];
const list=document.querySelector("#songList"),audio=document.querySelector("#audio"),play=document.querySelector("#playBtn"),bar=document.querySelector("#bar"),time=document.querySelector("#time"),title=document.querySelector("#nowTitle");
const fmt=s=>isFinite(s)?Math.floor(s/60)+":"+String(Math.floor(s%60)).padStart(2,"0"):"0:00";
songs.forEach(s=>{let e=document.createElement("article");e.className="song";e.innerHTML=`<div class="cover">MB</div><div><h3>${s[0]}</h3><p>Mahmoud Boghdady</p></div><div><a class="download" href="${s[1]}" download>تحميل</a><button>▶</button></div>`;e.querySelector("button").onclick=()=>{audio.src=s[1];title.textContent=s[0];audio.play();play.textContent="Ⅱ"};list.appendChild(e)});
play.onclick=()=>{if(!audio.src)return;audio.paused?(audio.play(),play.textContent="Ⅱ"):(audio.pause(),play.textContent="▶")};
audio.ontimeupdate=()=>{bar.style.width=(audio.currentTime/(audio.duration||1)*100)+"%";time.textContent=fmt(audio.currentTime)};
audio.onended=()=>play.textContent="▶";