const music = new Audio("audio/3.mp3");
// music.play();

const songs = [
    {
        id: "1",
        songName: 'Launda Chandra<br><div class= "subtitle">Meena Rana</div>',
        poster: "images/1.jpg"
    },
    {
        id: "2",
        songName: 'O Sahiba <br><div class= "subtitle">Meena Rana</div>',
        poster: "images/2.jpg"
    },
    {
        id: "3",
        songName: 'Humnawa Mere <br><div class= "subtitle">Jubin Nautiyal</div>',
        poster: "images/3.jpg"
    },
    {
        id: "4",
        songName: 'Naa Muh Chupa ke Jiyo <br><div class= "subtitle">Mahendra Kapoor</div>',
        poster: "images/4.jpg"
    },
    {
        id: "5",
        songName: 'No Gravity<br><div class= "subtitle">Dakait Shady</div>',
        poster: "images/5.jpg"
    },
    {
        id: "6",
        songName: 'Meethi Meethi Baaten <br><div class= "subtitle">Honey Negi</div>',
        poster: "images/6.jpg"
    },
    {
        id: "7",
        songName: 'Main Chala <br><div class= "subtitle">Guru Randhawa</div>',
        poster: "images/7.jpg"
    },
    {
        id: "8",
        songName: 'Suit Are Sildi Lagi - Ho Sarla<br><div class= "subtitle">Dimple Thakur</div>',
        poster: "images/8.jpg"
    },
    {
        id: "9",
        songName: 'ICONIC<br><div class= "subtitle">King</div>',
        poster: "images/9.jpg"
    },
    {
        id: "10",
        songName: 'Karwaan <br><div class= "subtitle">Mantramugdh</div>',
        poster: "images/10.jpg"
    },
    {
        id: "11",
        songName: 'Sanyasi <br><div class= "subtitle">Hansraj Raghuwanshi</div>',
        poster: "images/11.jpg"
    },
    {
        id: "12",
        songName: 'Har Har Gange<br><div class= "subtitle">Arjit Singh</div>',
        poster: "images/12.jpg"
    },
    {
        id: "13",
        songName: 'Kun Faya Kun <br><div class= "subtitle">Mohit Chauhan</div>',
        poster: "images/13.jpg"
    },
    {
        id: "14",
        songName: 'falak Tu Garaj Tu <br><div class= "subtitle">Suchetha Basrur & Ravi Basrur</div>',
        poster: "images/14.jpg"
    },
    {
        id: "15",
        songName: 'Aise Naa Chhoro <br><div class= "subtitle">Guru Randhawa</div>',
        poster: "images/15.jpg"
    },
    {
        id: "16",
        songName: 'Tesri Manzil<br><div class= "subtitle">Divine</div>',
        poster: "images/16.jpg"
    },
    {
        id: "17",
        songName: 'Gunehar <br><div class= "subtitle">Divine</div>',
        poster: "images/17.jpg"
    },
    {
        id: "18",
        songName: 'Orfrned Spirit<br><div class= "subtitle">Unknown</div>',
        poster: "images/18.jpg"
    },
    {
        id: "19",
        songName: 'Space Music <br><div class= "subtitle">Andromeda</div>',
        poster: "images/19.jpg"
    },
    {
        id: "20",
        songName: 'Vande Maatram <br><div class= "subtitle">A.R. Rahman</div>',
        poster: "images/20.jpg"
    }
];

// serach result show in search bar logic .....

// search data start...........
let search_result = document.getElementsByClassName("search_result")[0];
songs.forEach(element => {
    const { id, songName, poster } = element;
    // console.log(poster);
    let card = document.createElement("a");
    card.classList.add('card');
    card.href = "#" + id;
    card.innerHTML = `
         <img src="${poster}" alt="">
        <div class="content">
        ${songName}
        </div>
    `;
    search_result.appendChild(card);
});

let input = document.getElementsByTagName("input")[0];

input.addEventListener("keyup", () => {
    let input_value = input.value.toUpperCase();
    let items = search_result.getElementsByTagName("a");

    for (let index = 0; index < items.length; index++) {
        let as = items[index].getElementsByClassName("content")[0];
        let text_value = as.textContent || as.innerHTML;

        if (text_value.toUpperCase().indexOf(input_value) > -1) {
            items[index].style.display = "flex";
        } else {
            items[index].style.display = "none";
        }
        if (input.value == 0) {
            search_result.style.display = "none";
        } else {
            search_result.style.display = "";
        }
    }
})
// search data end...........

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
        music.src = `./audio/${index}.mp3`;
        // .......................................
        poster_master_play.src = `./images/${index}.jpg`;
        music.play();
        masterPlay.classList.remove("bi-play-fill");
        masterPlay.classList.add("bi-pause-fill");
        download_music.href = `./audio/${index}.mp3`;

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
    music.src = `./audio/${index}.mp3`;
    // .......................................
    poster_master_play.src = `./images/${index}.jpg`;
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
    music.src = `./audio/${index}.mp3`;
    // .......................................
    poster_master_play.src = `./images/${index}.jpg`;
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
    music.src = `./audio/${index}.mp3`;
    // .......................................
    poster_master_play.src = `./images/${index}.jpg`;
    music.play();
    masterPlay.classList.remove("bi-play-fill");
    masterPlay.classList.add("bi-pause-fill");
    download_music.href = `audio/${index}.mp3`;

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
    music.src = `./audio/${index}.mp3`;
    // .......................................
    poster_master_play.src = `./images/${index}.jpg`;
    music.play();
    masterPlay.classList.remove("bi-play-fill");
    masterPlay.classList.add("bi-pause-fill");
    download_music.href = `audio/${index}.mp3`;

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
    music.src = `./audio/${index}.mp3`;
    // .......................................
    poster_master_play.src = `./images/${index}.jpg`;
    music.play();
    masterPlay.classList.remove("bi-play-fill");
    masterPlay.classList.add("bi-pause-fill");
    download_music.href = `audio/${index}.mp3`;

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

let menu_list_active_button = document.getElementById("menu_list_active_button");
let menu_side = document.getElementsByClassName("menu_side")[0];
let song_side = document.getElementsByClassName("song_side")[0];

const mediaQuery = window.matchMedia("(min-width: 100px) and (max-width: 950px)");
const mediaQuery1 = window.matchMedia("(min-width: 950px) and  (max-width: 2000px)");

function handleViewportChange1(e) {
    if (e.matches) {
        song_side.addEventListener("click", () => {
            menu_side.style.transform = "unset";
            menu_list_active_button.style.opacity = 0;
        });
    } else {
        console.log("some eror occured");
    }
}
function handleViewportChange(e) {
    if (e.matches) {
        menu_list_active_button.addEventListener("click", () => {
            menu_side.style.transform = "unset";
            menu_list_active_button.style.opacity = 0;
        });
        song_side.addEventListener("click", () => {
            menu_side.style.transform = "translateX(-100%)";
            menu_list_active_button.style.opacity = 1;
        });

    } else {
        menu_side.style.transform = "unset";
    }
}

// Initial check
handleViewportChange1(mediaQuery);
handleViewportChange(mediaQuery);

// Listen for changes in the viewport size
mediaQuery.addListener(handleViewportChange);
mediaQuery1.addListener(handleViewportChange1);


// *********************** Fetch - API(DEEZER) ****************************************************

// Fetch music data based on the search query...................

let searchButton = document.getElementById("searchButton");
let searchInput = document.getElementById("searchInput");
let musicResults = document.getElementById("musicResults");


let currentAudio = null; // Global reference for the currently playing audio
let currentPlayButton = null; // Global reference for the play button associated with the current audio

const fetchData = async (query) => {
    const url = `https://deezerdevs-deezer.p.rapidapi.com/search?q=${query}`;
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': 'a0a79f75bbmsh6f7d7ec8021a77bp1ab421jsn7b99d0a30f95',
            'x-rapidapi-host': 'deezerdevs-deezer.p.rapidapi.com',
        }
    };

    try {
        const response = await fetch(url, options);
        const data = await response.json();
        displayResults(data); // Call function to display results
    } catch (error) {
        console.error('Error fetching music results:', error);
    }
};

// Display results in list format with a play button for each song
const displayResults = (data) => {
    const musicResults = document.getElementById("musicResults");
    musicResults.innerHTML = ""; // Clear previous results

    data.data.forEach(track => {
        const trackItem = document.createElement("div");
        trackItem.classList.add("track-item");

        // Create play button
        const playButton = document.createElement("button");
        playButton.classList.add("play-button");
        playButton.innerHTML = "▶"; // Play icon

        // Time display elements
        const timeDisplay = document.createElement("div");
        timeDisplay.classList.add("time-display");
        timeDisplay.innerHTML = "00:00"; // Default duration (30 seconds preview)

        // Create progress bar container
        const progressBarContainer = document.createElement("div");
        progressBarContainer.classList.add("track-progress");

        // Create progress bar
        const progressBar = document.createElement("div");
        progressBar.classList.add("progress-bar");

        progressBarContainer.appendChild(progressBar);

        // Play the track when the play button is clicked
        playButton.addEventListener("click", () => {
            playTrack(track.preview, playButton, progressBar, timeDisplay);
        });

        trackItem.innerHTML = `
            <img src="${track.album.cover_small}" alt="Album cover">
            <div class="track-info">
                <p class="track-title">${track.title}</p>
                <p class="track-artist">${track.artist.name}</p>
            </div>
        `;

        // Append the play button, progress bar, and time display to each track item
        trackItem.appendChild(playButton);
        trackItem.appendChild(progressBarContainer);
        trackItem.appendChild(timeDisplay);

        musicResults.appendChild(trackItem);
    });
};

// Play the selected track and toggle play/pause icon, update progress bar and time
const playTrack = (trackUrl, playButton, progressBar, timeDisplay) => {
    // If the same song is clicked again, toggle between play and pause
    if (currentAudio && currentAudio.src === trackUrl) {
        if (currentAudio.paused) {
            currentAudio.play();
            playButton.innerHTML = "⏸"; // Show pause icon when playing
        } else {
            currentAudio.pause();
            playButton.innerHTML = "▶"; // Show play icon again when paused
        }
        return; // Exit the function so we don't reset the audio
    }

    // Pause and reset previous audio if another track is played
    if (currentAudio) {
        currentAudio.pause();
        currentPlayButton.innerHTML = "▶"; // Reset play icon of the previous button
        currentAudio.currentTime = 0; // Reset progress of previous audio
        currentAudio.remove(); // Remove previous audio from DOM
    }

    // Create a new audio player
    const audio = new Audio(trackUrl);
    document.body.appendChild(audio);
    audio.play();

    // Set the current audio and play button globally
    currentAudio = audio;
    currentPlayButton = playButton;

    // Change play button to pause when audio starts
    playButton.innerHTML = "⏸"; // Show pause icon

    // Event listener for when the track ends
    audio.addEventListener('ended', () => {
        playButton.innerHTML = "▶"; // Reset to play icon when audio ends
        progressBar.style.width = '0%'; // Reset progress bar
        timeDisplay.innerHTML = "00:00"; // Reset time display
        currentAudio = null; // Reset current audio
    });

    // Update the progress bar and time display while audio is playing
    audio.addEventListener('timeupdate', () => {
        const currentTime = audio.currentTime;
        const duration = audio.duration;
        const percentage = (currentTime / duration) * 100;

        progressBar.style.width = `${percentage}%`; // Update progress bar

        // Update time display (mm:ss format)
        const minutes = Math.floor(currentTime / 60);
        const seconds = Math.floor(currentTime % 60).toString().padStart(2, '0');
        timeDisplay.innerHTML = `${minutes}:${seconds}`;
    });
};

// Handle search button click
document.getElementById("searchButton").addEventListener("click", () => {
    const query = document.getElementById("searchInput").value;
    fetchData(query); // Fetch and display results
});