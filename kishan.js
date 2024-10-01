const music = new Audio("./artist/kishan_mahipal/4.mp3");
// music.play();

const songs = [
    {
        id: "1",
        songName: 'Ae Jaanu Re <br><div class= "subtitle"> Kishan Mahipal</div>',
        poster: "artist/kishan_mahipal/poster/1.jpeg"
    },
    {
        id: "2",
        songName: 'Ghughuti <br><div class= "subtitle">Kishan Mahipla</div>',
        poster: "artist/kishan_mahipal/poster/2.jpeg"
    },
    {
        id: "3",
        songName: 'O Bhana Rangili <br><div class= "subtitle">Kishan Mahipal</div>',
        poster: "artist/kishan_mahipal/poster/3.jpeg"
    },
    {
        id: "4",
        songName: ' Reshmi Chori <br><div class= "subtitle">Kishan Mahipal</div>',
        poster: "artist/kishan_mahipal/poster/4.jpeg"
    },
    {
        id: "5",
        songName: ' Surya Surya <br><div class= "subtitle">Kishan Mahipal</div>',
        poster: "artist/kishan_mahipal/poster/5.jpeg"
    }
];
// music click main logic.............and wave .....
Array.from(document.getElementsByClassName('songItem')).forEach((e, i) => {
    e.getElementsByTagName('img')[0].src = songs[i].poster;
    e.getElementsByTagName('h5')[0].innerHTML = songs[i].songName;
});

let masterPlay = document.getElementById('masterPlay');
let wave = document.getElementById("wave");

masterPlay.addEventListener("click", () => {
    if (music.paused || music.currentTime <= 0) {
        music.play();
        wave.classList.add("active1");
        masterPlay.classList.remove("bi-play-fill");    
        masterPlay.classList.add("bi-pause-fill");
    } else {
        music.pause();
        wave.classList.remove("active1");
        masterPlay.classList.add("bi-play-fill");
        masterPlay.classList.remove("bi-pause-fill");
    }
});
const makeAllplay = () => {
    Array.from(document.getElementsByClassName("playListPlay")).forEach((el) => {
        el.classList.add("bi-play-circle-fill");
        el.classList.remove("bi-pause-circle-fill");
    });
}

const makeAllBackground = () => {
    Array.from(document.getElementsByClassName("songItem")).forEach((el) => {
        el.style.background = "rgb(105, 105, 105, .0)";
    });
}
// cotinue and poster change button logic.............click to play any music
let poster_master_play = document.getElementById("poster_master_play");
let download_music = document.getElementById("download_music");
let title = document.getElementById("title");

let index = 0;

Array.from(document.getElementsByClassName('playListPlay')).forEach((e) => {
    e.addEventListener('click', (el) => {
        index = el.target.id;
        // console.log(index);
        // most frustating line ..................
        music.src = `./artist/kishan_mahipal/${index}.mp3`;
        // .......................................
        poster_master_play.src = `./artist/kishan_mahipal/poster/${index}.jpeg`;
        music.play();
        masterPlay.classList.remove("bi-play-fill");
        masterPlay.classList.add("bi-pause-fill");
        download_music.href = `./artist/kishan_mahipal/${index}.mp3`;

        let songTitle = songs.filter((els) => {
            return els.id == index;
        });

        songTitle.forEach(elss => {
            let { songName } = elss;
            title.innerHTML = songName;
            download_music.setAttribute("download", songName);
        });

        makeAllBackground();
        Array.from(document.getElementsByClassName("songItem"))[index - 1].style.background = "rgb(105, 105, 105, .1)"

        makeAllplay();
        el.target.classList.remove("bi-play-circle-fill");
        el.target.classList.add("bi-pause-circle-fill");
        // wave.classList.add("active1");

    });
});
// slider slide button.....

let pop_song_left = document.getElementById("pop_song_left");
let pop_song_right = document.getElementById("pop_song_right");
let pop_song = document.getElementsByClassName("pop_song")[0];

pop_song_right.addEventListener("click", () => {
    pop_song.scrollLeft += 320;
});
pop_song_left.addEventListener("click", () => {
    pop_song.scrollLeft -= 320;
});

let pop_art_left = document.getElementById("pop_art_left");
let pop_art_right = document.getElementById("pop_art_right");
let Artist = document.getElementsByClassName("Artist")[0];

pop_art_right.addEventListener("click", () => {
    Artist.scrollLeft += 320;
});
pop_art_left.addEventListener("click", () => {
    Artist.scrollLeft -= 320;
});

// seek time update logic...........
let currentStart = document.getElementById("currentStart");
let currentEnd = document.getElementById("currentEnd");
let seek = document.getElementById("seek");
let bar2 = document.getElementById("bar2");
let dot = document.getElementsByClassName("dot")[0];


music.addEventListener("timeupdate", () => {
    let music_curr = music.currentTime;
    let music_dur = music.duration;

    console.log(music_dur);

    let min1 = Math.floor(music_dur / 60);
    let sec1 = Math.floor(music_dur % 60);
    // console.log(min1);
    if (sec1 < 10) {
        sec1 = `0${sec1}`;
    }

    currentEnd.innerText = `${min1}:${sec1}`;

    let min2 = Math.floor(music_curr / 60);
    let sec2 = Math.floor(music_curr % 60);

    if (sec2 < 10) {
        sec2 = `0${sec2}`;
    }

    currentStart.innerText = `${min2}:${sec2}`;

    let progressBar = parseInt((music_curr / music_dur) * 100);
    seek.value = progressBar;
    // console.log(seek.value);
    let seekBar = seek.value;
    bar2.style.width = `${seekBar}%`;
    dot.style.left = `${seekBar}%`;
});

// seek bar icon change logic..........
seek.addEventListener("change", () => {
    music.currentTime = seek.value * music.duration / 100;
});

let vol_icon = document.getElementById("vol_icon");
let vol = document.getElementById("vol");
let vol_bar = document.getElementsByClassName("vol_bar")[0];
let vol_dot = document.getElementById("vol_dot");


vol.addEventListener("change", () => {
    if (vol.value == 0) {
        vol_icon.classList.remove("bi-volume-up-fill");
        vol_icon.classList.remove("bi-volume-down-fill");
        vol_icon.classList.add("bi-volume-off-fill");
    }
    if (vol.value > 0) {
        vol_icon.classList.remove("bi-volume-up-fill");
        vol_icon.classList.add("bi-volume-down-fill");
        vol_icon.classList.remove("bi-volume-off-fill");
    }
    if (vol.value > 50) {
        vol_icon.classList.add("bi-volume-up-fill");
        vol_icon.classList.remove("bi-volume-down-fill");
        vol_icon.classList.remove("bi-volume-off-fill");
    }

    let volA = vol.value;
    vol_bar.style.width = `${volA}%`;
    vol_dot.style.left = `${volA}%`;
    music.volume = volA / 100;

});

let back = document.getElementById("back");
let next = document.getElementById("next");

// back button logic.....
back.addEventListener("click", (el) => {
    index -= 1;
    if (index < 1) {
        index = Array.from(document.getElementsByClassName("songItem")).length;
    }
    music.src = `./artist/kishan_mahipal/${index}.mp3`;
    // .......................................
    poster_master_play.src = `./artist/kishan_mahipal/poster/${index}.jpeg`;
    music.play();
    masterPlay.classList.remove("bi-play-fill");
    masterPlay.classList.add("bi-pause-fill");

    let songTitle = songs.filter((els) => {
        return els.id == index;
    });

    songTitle.forEach(elss => {
        let { songName } = elss;
        title.innerHTML = songName;
    });

    makeAllBackground();
    Array.from(document.getElementsByClassName("songItem"))[index - 1].style.background = "rgb(105, 105, 105, .1)"

    makeAllplay();
    el.target.classList.remove("bi-play-circle-fill");
    el.target.classList.add("bi-pause-circle-fill");
    // wave.classList.add("active1");
});

// next button login.....
next.addEventListener("click", (el) => {
    index++;
    if (index > Array.from(document.getElementsByClassName("songItem")).length) {
        index = 1;
    }
    music.src = `./artist/kishan_mahipal/${index}.mp3`;
    // .......................................
    poster_master_play.src = `./artist/kishan_mahipal/poster/${index}.jpeg`;
    music.play();
    masterPlay.classList.remove("bi-play-fill");
    masterPlay.classList.add("bi-pause-fill");

    let songTitle = songs.filter((els) => {
        return els.id == index;
    });

    songTitle.forEach(elss => {
        let { songName } = elss;
        title.innerHTML = songName;
    });

    makeAllBackground();
    Array.from(document.getElementsByClassName("songItem"))[index - 1].style.background = "rgb(105, 105, 105, .1)"

    makeAllplay();
    el.target.classList.remove("bi-play-circle-fill");
    el.target.classList.add("bi-pause-circle-fill");
    // wave.classList.add("active1");
});

// Shuffle and auto next play music logic.....
let shuffle = document.getElementsByClassName("shuffle")[0];


shuffle.addEventListener("click", () => {
    let a = shuffle.innerHTML;

    switch (a) {
        case "next":
            shuffle.classList.add('bi-arrow-repeat');
            shuffle.classList.remove('bi-music-note-beamed');
            shuffle.classList.remove('bi-shuffle');
            shuffle.innerHTML = 'repeat';
            break;

        case "repeat":
            shuffle.classList.remove('bi-arrow-repeat');
            shuffle.classList.remove('bi-music-note-beamed');
            shuffle.classList.add('bi-shuffle');
            shuffle.innerHTML = 'random';
            break;

        case "random":
            shuffle.classList.remove('bi-arrow-repeat');
            shuffle.classList.add('bi-music-note-beamed');
            shuffle.classList.remove('bi-shuffle');
            shuffle.innerHTML = 'next';
            break;
    }
});

// shuffle: random, next or repeat button logic.....

const next_music = () => {
    if (index == songs.length) {
        index = 1;
    } else {
        index++;
    }
    music.src = `./artist/kishan_mahipal/${index}.mp3`;
    // .......................................
    poster_master_play.src = `./artist/kishan_mahipal/poster/${index}.jpeg`;
    music.play();
    masterPlay.classList.remove("bi-play-fill");
    masterPlay.classList.add("bi-pause-fill");
    download_music.href = `./artist/kishan_mahipal/${index}.mp3`;

    let songTitle = songs.filter((els) => {
        return els.id == index;
    });

    songTitle.forEach(elss => {
        let { songName } = elss;
        title.innerHTML = songName;
        download_music.setAttribute("download", songName);
    });

    makeAllBackground();
    Array.from(document.getElementsByClassName("songItem"))[index - 1].style.background = "rgb(105, 105, 105, .1)"

    makeAllplay();
    el.target.classList.remove("bi-play-circle-fill");
    el.target.classList.add("bi-pause-circle-fill");
    // wave.classList.add("active1");
}
const repeat_music = () => {
    index;
    music.src = `./artist/kishan_mahipal/${index}.mp3`;
    // .......................................
    poster_master_play.src = `./artist/kishan_mahipal/poster/${index}.jpeg`;
    music.play();
    masterPlay.classList.remove("bi-play-fill");
    masterPlay.classList.add("bi-pause-fill");
    download_music.href = `./artist/kishan_mahipal/${index}.mp3`;

    let songTitle = songs.filter((els) => {
        return els.id == index;
    });

    songTitle.forEach(elss => {
        let { songName } = elss;
        title.innerHTML = songName;
        download_music.setAttribute("download", songName);
    });

    makeAllBackground();
    Array.from(document.getElementsByClassName("songItem"))[index - 1].style.background = "rgb(105, 105, 105, .1)"

    makeAllplay();
    el.target.classList.remove("bi-play-circle-fill");
    el.target.classList.add("bi-pause-circle-fill");
    // wave.classList.add("active1");
}
const random_music = () => {
    if (index == songs.length) {
        index = 1;
    } else {
        index = Math.floor((Math.random() * songs.length + 1));
    }
    music.src = `./artist/kishan_mahipal/${index}.mp3`;
    // .......................................
    poster_master_play.src = `./artist/kishan_mahipal/poster/${index}.jpeg`;
    music.play();
    masterPlay.classList.remove("bi-play-fill");
    masterPlay.classList.add("bi-pause-fill");
    download_music.href = `./artist/kishan_mahipal/${index}.mp3`;

    let songTitle = songs.filter((els) => {
        return els.id == index;
    });

    songTitle.forEach(elss => {
        let { songName } = elss;
        title.innerHTML = songName;
        download_music.setAttribute("download", songName);
    });

    makeAllBackground();
    Array.from(document.getElementsByClassName("songItem"))[index - 1].style.background = "rgb(105, 105, 105, .1)"

    makeAllplay();
    el.target.classList.remove("bi-play-circle-fill");
    el.target.classList.add("bi-pause-circle-fill");
    // wave.classList.add("active1");
}

music.addEventListener("ended", () => {
    let b = shuffle.innerHTML;

    switch (b) {
        case "repeat":
            repeat_music();
            break;
        case "next":    
            next_music();
            break;
        case "random":
            random_music();
            break;

    }
});