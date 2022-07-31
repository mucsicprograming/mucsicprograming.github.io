// btn
// const btnHome = document.querySelector(".go-home");
// const btnPlayList = document.querySelector(".play-list");
const btnPlay = document.querySelector(".play-song");
const btnBack = document.querySelector(".back");
const btnForward = document.querySelector(".forward");
const btnRandom = document.querySelector(".random");
//
const audio = document.querySelector("#audio");
// const progress = document.querySelector(".progress");
// const playListBox = document.querySelector(".playlist-box");
const songs = document.querySelector(".list-song");
// const thumbnailSong = document.querySelector(".thumbnail-song img");
const nameSong = document.querySelector(".son-name");
const lyricSong = document.querySelector(".eon-name");

// const author = document.querySelector(".info-song .author");
const timeSong = document.querySelector(".duration-time");
const musicContent = document.querySelector(".music-content");
// const progressBar = document.querySelector(".progress-bar");
const currentTimeDisplay = document.querySelector(".current-time");
const nameSon = document.querySelector(".son-name");

const loop_music = document.querySelector(".loop");


const listMusic = [
  ["y2mate.com - Vietsub  Lyrics I Love You 3000  Stephanie Poetri","I Love You 3000","Baby, take my hand I want you to be my husband 'Cause you're my Iron Man And I love you 3000 Baby, take a chance 'Cause I want this to be something Straight out of a Hollywood movie I see you standing there In your hulk outerwear And all I can think Is where is the ring 'Cause I know you wanna ask Scared the moment will pass I can see it in your eyes Just take me by surprise And all my friends they tell me they see You're planning to get on one knee But I want it to be out of the blue So make sure I have no clue When you ask Baby, take my hand I want you to be my husband 'Cause you're my Iron Man And I love you 3000 Baby, take a chance 'Cause I want this to be something Straight out of a Hollywood movie Now we're having dinner And baby you're my winner I see the way you smile You're thinking about the aisle You reach in your pocket Emotion unlocking And before you could ask I answer too fast And all my friends they tell me they see You're planning to get on one knee So now I can't stop thinking about you I figured out all the clues So now I ask Baby, take my hand I want you to be my husband 'Cause you're my Iron Man And I love you 3000 Baby, take a chance 'Cause I want this to be something Straight out of a Hollywood movie Pa da da da da dam No spoilers please Pa da da da da dam No spoilers please Baby, take my hand I want you to be my husband 'Cause you're my Iron Man And I love you 3000 Baby, take a chance 'Cause I want this to be something Straight out of a Hollywood movie, baby Pa da da da da dam No spoilers please Pa da da da da dam No spoilers please Pa da da da da dam No spoiler please Pa da da da da dam And I love you 3000"],
  ["y2mate.com - Powfu  death bed Christian Lalama Remix","death bed","Don't stay awake for too long, don't go to bed I'll make a cup of coffee for your head It'll get you up and going out of bed Yeah, I don't wanna fall asleep, I don't wanna pass away I been thinking of our future, 'cause I'll never see those days I don't know why this has happened, but I probably deserve it I tried to do my best, but you know that I'm not perfect I been praying for forgiveness, you've been praying for my health When I leave this Earth, hoping you'll find someone else 'Cause, yeah, we still young, there's so much we haven't done Getting married, start a family, watch your husband with his son I wish it could be me, but I won't make it out this bed I hope I go to Heaven, so I see you once again My life was kinda short, but I got so many blessings Happy you were mine, it sucks that it's all ending Don't stay awake for too long, don't go to bed I'll make a cup of coffee for your head It'll get you up and going out of bed (yeah, ayy, ayy) Don't stay awake for too long, don't go to bed I'll make a cup of coffee for your head It'll get you up and going out of bed (ayy, yeah) I'm happy that you here with me, I'm sorry if I tear up When me and you were younger, you would always make me cheer up Taking goofy videos and walking through the park You would jump into my arms every time you heard a bark Cuddle in your sheets, sing me sound asleep And sneak out through your kitchen at exactly 1:03 Sundays, went to church, on Mondays, watched a movie Soon you'll be alone, sorry that you have to lose me Don't stay awake for too long, don't go to bed I'll make a cup of coffee for your head It'll get you up and going out of bed Don't stay awake for too long, don't go to bed I'll make a cup of coffee for your head It'll get you up and going out of bed Don't stay awake for too long, don't go to bed I'll make a cup of coffee for your head It'll get you up and going out of bed Don't stay awake for too long, don't go to bed I'll make a cup of coffee for your head It'll get you up and going out of bed Don't stay awake for too long, don't go to bed I'll make a cup of coffee for your head It'll get you up and going out of bed"],
  ["y2mate.com - Nothing On You  Barry Brizzy  Vietsub  Lyric","Nothing On You","Beautiful girls all over the world I could be chasing, but my time would be wasted They got nothing on you, baby Nothing on you, baby They might say hi, and I might say hey But you shouldn't worry, about what they say 'Cause they got nothing on you, baby Nothing on you, baby B.O.B I know you feel where I'm coming from So baby regardless of the things in my past every thing I've done Most of really was for the hell of the fun On the carousel, so around I spun With no directions just tryna get some Tryna chase skirts, living in the summer sun This is how I lost more than I had ever won And honestly I ended up with none There's no much nonsense, it's on my conscience I'm thinking baby, I should get it out And I don't wanna sound redundant, but I was wondering If there was something that you wanna know But never mind that, we should let it go 'Cause we don't wanna be a TV episode And all the bad thoughts, just let them go Go, go Beautiful girls all over the world I could be chasing, but my time would be wasted They got nothing on you, baby Nothing on you, baby They might say hi, and I might say hey But you shouldn't worry about what they say 'Cause they got nothing on you, baby Nothing on you, baby Hands down, there will never be another one I been around, and I never seen another one Look at your style, they ain't really got nothing on And you out, and you ain't got nothing on Baby, you the whole package, plus you pay your taxes And you keep it real while them other stay plastic You're my Wonder Woman, call me Mr. Fantastic Stop, now think about it I've been to London, I've been to Paris Even went out there to Tokyo Back home down in Georgia to New Orleans But you always steal the show And just like that girl you got me froze Like a Nintendo 64 If you never knew, well, now you know Know, know Beautiful girls all over the world I could be chasing, but my time would be wasted They got nothing on you, baby Nothing on you, baby They might say hi, and I might say hey But you shouldn't worry about what they say 'Cause they got nothing on you, baby Nothing on you, baby Everywhere I go, I'm always hearing your name And no matter where I'm at, girl, you make me wanna sing Whether a bus or a plane or a car or a train No other girls on my brain, and you the one to blame Beautiful girls all over the world I could be chasing, but my time would be wasted They got nothing on you, baby Nothing on you, baby They might say hi, and I might say hey But you shouldn't worry about what they say 'Cause they got nothing on you, baby Nothing on you, baby Yeah, and that's just how we do it And I'ma let this ride B.o.B and Bruno Mars"],
["y2mate.com - BTS 방탄소년단 Savage Love Laxed  Siren Beat BTS Remix Lyric Video","Savage Love","Jason Derulo, oh! Savage love (Trixy Cloth baby) If I woke up without ya I don't know what I would do Thought I could be single forever 'Til I met you Usually don't be fallin', be fallin', fallin' fast You got a way of keeping me comin' back to back I just found out, the only reason that you lovin' me Was to get back at your ex-lover but before you leave Usually I would never, would never even care Baby I know she creepin', I feel it in the air Every night and every day I try to make you stay But your Savage love Did somebody, did somebody Break your heart? Lookin' like an angel But your savage love When you kiss me I know you don't give two fucks But I still want that Your savage love Your savage love-love-love Your savage love-love-love You could use me 'Cause I still want that (your savage) Baby I hope that this ain't karma 'cause I get around You wanna run it up, I wanna lock it down Usually don't be fallin', be fallin', fallin' fast You got a way of making me spend up all my cash Every night and every day I try to make you stay But your Savage love Did somebody, did somebody Break your heart? Lookin' like an angel But your savage love When you kiss me I know you don't give two fucks But I still want that Your savage love Your savage love-love-love Your savage love-love-love You could use me 'Cause I still want that your savage love Your savage love-love-love Your savage love-love-love You could use me Baby Savage love (oh girl) Did somebody, did somebody Break your heart? Lookin' like an angel But your savage love When you kiss me I know you don't give two fucks But I still want that Your savage love (savage love) Your savage love-love-love (ooh yeah) Your savage love-love-love Girl you could use me 'Cause I still want that your savage love"],
["y2mate.com - At My Worst  Pink Sweat  Lyrics  Vietsub ","At My Worst","Can I call you baby? Can you be my friend? Can you be my lover up until the very end? Let me show you love, oh, I don't pretend Stick by my side even when the world is givin' in, yeah Oh, oh, oh, don't Don't you worry I'll be there, whenever you want me I need somebody who can love me at my worst No, I'm not perfect, but I hope you see my worth 'Cause it's only you, nobody new, I put you first And for you, girl, I swear I'll do the worst If you stay forever, let me hold your hand I can fill those places in your heart no else can Let me show you love, oh, I don't pretend, yeah I'll be right here, baby, you know I'll sink or swim Oh, oh, oh, don't Don't you worry I'll be there, whenever you want me I need somebody who can love me at my worst No, I'm not perfect, but I hope you see my worth, yeah 'Cause it's only you, nobody new, I put you first (put you first) And for you, girl, I swear I'll do the worst I need somebody who can love me at my worst No, I'm not perfect, but I hope you see my worth 'Cause it's only you, nobody new, I put you first And for you, girl, I swear I'll do the worst"],
["y2mate.com - AnneMarie  2002 Official Video","2002","I will always remember the day you kissed my lips, light as a feather. And it went just like this. No it's never been better than the summer of Two Thousand and Two. Ooh. We were only eleven, but acting like grown ups, like we are in the present. Drinking from plastic cups, singing love is forever and ever. Well I guess that was true. Ooh. Dancing on the hood in the middle of the woods on an old Mustang, where we sang songs with all of our childhood friends. And it went like this, say: Oops, I got ninety-nine problems singing bye, bye, bye. Hold up, if you wanna go and take a ride with me, better hit me baby one more time. Ah. Paint a picture for you and me, of the days when we were young. Singing at the top of both our lungs. Now we're under the covers. Fast-forward to eighteen. We are more than lovers. Yeah, we are all we need. When we're holding each other I'm taken back to Two Thousand and Two. Ooh. Dancing on the hood in the middle of the woods, on an old Mustang, where we sang songs with all of our childhood friends. And it went like this, say: Oops, I got ninety-nine problems singing bye, bye, bye. Hold up, if you wanna go and take a ride with me, better hit me baby one more time. Ah. Paint a picture for you and me, of the days when we were young. Singing at the top of both our lungs. On the day we fell in love. Ooh, ooh. Ooh, ooh. On the day we fell in love. Ooh, ooh. Ooh, ooh. Dancing on the hood in the middle of the woods, on an old Mustang where we sang songs with all of our childhood friends. Oh, no. Oops, I got ninety-nine problems singing bye, bye, bye. Hold up, if you wanna go and take a ride with me, better hit me baby one more time. Paint a picture for you and me, of the days when we were young. Singing at the top of both our lungs. On the day we fell in love. Ooh, ooh. Ooh, ooh. On the day we fell in love. Ooh, ooh. Ooh, ooh. On the day we fell in love. Ooh, ooh. Ooh, ooh. On the day we fell in love. Ooh, ooh. Ooh, ooh. On the day we fell in love, love, love."],
]

songs.textContent = ''
for (let i = 0; i < listMusic.length; ++i) {
  temp = `<p class="name-song${i} char btnchar" data-path="${listMusic[i][0]}" data-index="${i}">[${listMusic[i][1]}]</p>`
  songs.insertAdjacentHTML(
    "beforeend",
    temp
  );
}

songs_event = []
for (let i = 0; i < listMusic.length; i++)
  songs_event.push(songs.querySelector('.name-song' + i))

class UI {
  constructor() {
    this.songIndex = 0
    this.loop = false
  }

  // get duration
  getDuration(music) {
    return new Promise(function (resolve) {
      music.addEventListener("loadedmetadata", function () {
        const time = formatTime(music.duration);
        resolve(time);
      });
    });
  }

  // load detail song when page loaded
  loadSong(music) {
    audio.src = `MP3/${music[0]}.mp3`;

    this.getDuration(audio).then((time) => {
    	nameSong.textContent =music[1];
	lyricSong.textContent =music[2];
      timeSong.textContent = time;
    });
  }

  // play song
  playSong() {
    musicContent.classList.add("playing");
    btnPlay.textContent = '[Stop]'
    audio.play();
  }

  // pause song
  pauseSong() {
    musicContent.classList.remove("playing");
    btnPlay.textContent = '[Play]'
    audio.pause();
  }

  // prev song
  prevSong() {
    this.songIndex--;
    if (this.songIndex < 0)
      this.songIndex = listMusic.length - 1;
    this.loadSong(listMusic[this.songIndex]);

 
  }

  // next song
  nextSong() {
    this.songIndex++;
    if (this.songIndex > listMusic.length - 1)
      this.songIndex = 0;
    this.loadSong(listMusic[this.songIndex]);
  }

  // update progress
  updateProgress(e) {
    const { currentTime, } = e.srcElement;
    const time = formatTime(currentTime);
    currentTimeDisplay.textContent = time;
  }

  // select song in playlist
  selectSong(index) {
    this.songIndex = index
   this.loadSong(listMusic[index]);

    this.playSong();
  }

 //randomsong
 	ranDom(index) {
	index = Math.floor(Math.random() * 6);
	this.songIndex = index;
	 this.loadSong(listMusic[index]);
 }
		
}

document.addEventListener("DOMContentLoaded", eventListeners);

function eventListeners() {
  const ui = new UI();

  // load song
  ui.loadSong(listMusic[ui.songIndex]);

  for(let i = 0; i < listMusic.length; ++i){
      songs_event[i].addEventListener("click", function() {
        index = parseInt(songs_event[i].getAttribute('data-index'))
        ui.selectSong(index)
      })
    }

  loop_music.addEventListener("click", function(){
    if(ui.loop)
      loop_music.textContent = '[Loop]'
    else
      loop_music.textContent = '[>Loop<]'
    ui.loop = !ui.loop
  })

  // play/pause song
  btnPlay.addEventListener("click", function () {
    if (musicContent.classList.contains("playing")) {
      ui.pauseSong();
    } else {
      ui.playSong();
    }
  });

  // update progress
  audio.addEventListener("timeupdate", function (e) {
    ui.updateProgress(e);
  });
  
  btnBack.addEventListener("click", function () {
    ui.prevSong();
    ui.playSong();
  });
  btnRandom.addEventListener("click", function () {
    ui.ranDom();
    ui.playSong();
  });

  
  btnForward.addEventListener("click", function () {
    ui.nextSong();
    ui.playSong();
  });

  // end song
  audio.addEventListener("ended", function () {
    if(ui.loop === false)
      ui.nextSong();
    ui.playSong();
  });

  // select song
  // songs.addEventListener("click", function (e) {
  //   ui.selectSong(e);
  // });
}

function formatTime(sec_num) {
  let hours = Math.floor(sec_num / 3600);
  let minutes = Math.floor((sec_num - hours * 3600) / 60);
  let seconds = Math.floor(sec_num - hours * 3600 - minutes * 60);

  hours = hours < 10 ? (hours > 0 ? "0" + hours : 0) : hours;

  if (minutes < 10) {
    minutes = "0" + minutes;
  }
  if (seconds < 10) {
    seconds = "0" + seconds;
  }
  return (hours !== 0 ? hours + ":" : "") + minutes + ":" + seconds;
}