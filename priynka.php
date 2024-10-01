<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css">
    <link rel="stylesheet" href="./style.css">
    <title>Music Website</title>
    <style>
        header .song_side::before {
            content: "";
            position: absolute;
            width: 100%;
            height: 250px;
            background: url('./artist/priynka_meher/poster/priynka_bg.png');
            z-index: -1;
            background-repeat: no-repeat;
            background-position: center;
            background-size: 250px;
        }
    </style>
</head>

<body>
    <header>
        <div class="menu_side">
            <h1>Playlist</h1>
            <div class="Playlist">
                <h4 class="active"><span></span><i class="bi bi-music-note-beamed"></i>Playlist</h4>
                <h4><span></span><i class="bi bi-music-note-beamed"></i>Last Listening</h4>
                <h4><span></span><i class="bi bi-music-note-beamed"></i>Recommended</h4>
            </div>
            <div class="menu_song">
                <li class="songItem">
                    <span>01</span>
                    <img src="./images/30.jpg" alt="">
                    <h5>On My Way <br>
                        <div class="subtitle">
                            Alon Walker
                        </div>
                    </h5>
                    <i class="bi playListPlay bi-play-circle-fill" id="1"></i>
                </li>
                <li class="songItem">
                    <span>02</span>
                    <img src="./images/1.jpg" alt="">
                    <h5>Uttarakhand Naati <br>
                        <div class="subtitle">
                            Sachin Panwar
                        </div>
                    </h5>
                    <i class="bi playListPlay bi-play-circle-fill" id="2"></i>
                </li>
                <li class="songItem">
                    <span>03</span>
                    <img src="./images/23.jpg" alt="">
                    <h5>On My Way <br>
                        <div class="subtitle">
                            Alon Walker
                        </div>
                    </h5>
                    <i class="bi playListPlay bi-play-circle-fill" id="3"></i>
                </li>
                <li class="songItem">
                    <span>04</span>
                    <img src="./images/23.jpg" alt="">
                    <h5>On My Way <br>
                        <div class="subtitle">
                            Alon Walker
                        </div>
                    </h5>
                    <i class="bi playListPlay bi-play-circle-fill" id="4"></i>
                </li>
            </div>
        </div>

        <div class="song_side">
            <nav>
                <ul>
                    <li>Discover <span></span></li>
                    <li>MY LIBRARY</li>
                    <li>RADIO</li>
                </ul>
                <div class="search">
                    <i class="bi bi-search"></i>
                    <input type="text" placeholder="Search Music...">
                </div>
                <div class="user">
                    <img src="./images/science_station.jpeg" alt="">
                </div>
            </nav>
            <div class="content">
                <p>You were the shadow to my light did you feel us Another start you fade <br> Away Afraid our aim is
                    out of sight Wanna see us Alive</p>
                <h1>Priynka Meher - BaaJo re Muruli</h1>
                <div class="buttons">
                    <button>PLAY</button>
                    <button>FOLLOW</button>
                </div>
            </div>
            <div class="popular_song">
                <div class="h4">
                    <h4>Popular Song</h4>
                    <div class="btn_s">
                        <i class="bi bi-arrow-left-short" id="pop_song_left"></i>
                        <i class="bi bi-arrow-right-short" id="pop_song_right"></i>
                    </div>
                </div>
                <div class="pop_song">
                    <li class="songItem">
                        <div class="img_play">
                            <img src="./images/23.jpg" alt="">
                            <i class="bi playListPlay bi-play-circle-fill" id="5"></i>
                        </div>

                        <h5>On My Way <br>
                            <div class="subtitle">
                                Alon Walker
                            </div>
                        </h5>

                    </li>
                </div>
            </div>
            <div class="popular_artist">
                <div class="h4">
                    <h4>Popular Artist </h4>
                    <div class="btn_s">
                        <i class="bi bi-arrow-left-short" id="pop_art_left"></i>
                        <i class="bi bi-arrow-right-short" id="pop_art_right"></i>
                    </div>
                </div>
                <div class="item Artist">
                    <li>
                        <a href="narendra.html"><img src="./artist/narendra_negi_ji/poster/negi.jpeg"
                                alt=""></a>
                    </li>
                    <li>
                       <a href="pritam_bhartwaan.php"></a> <img src="./artist/preetam_bharatwan/poster/pritam_bartwaan.jpeg" alt="">
                    </li>
                    <li>
                        <a href="meena_rana.php"></a> <img src="./artist/meena_rana/poster/meena rana.jpeg" alt="">
                     </li>
                     <li>
                        <a href="kishan.php"><img src="./artist/kishan_mahipal/poster/kishan mahipal.jpg" alt=""></a>
                    </li>
                    <li>
                        <a href="priynka.php"><img src="./artist/priynka_meher/poster/priynka meher.jpeg" alt=""></a>
                    </li>
                    <li>
                        <img src="./images/20.jpg" alt="">
                    </li>
                    <li>
                        <img src="./images/20.jpg" alt="">
                    </li>
                    <li>
                        <img src="./images/20.jpg" alt="">
                    </li>
                    <li>
                        <img src="./images/20.jpg" alt="">
                    </li>
                    <li>
                        <img src="./images/20.jpg" alt="">
                    </li>
                    <li>
                        <img src="./images/20.jpg" alt="">
                    </li>
                    <li>
                        <img src="./images/20.jpg" alt="">
                    </li>
                    <li>
                        <img src="./images/20.jpg" alt="">
                    </li>
                    <li>
                        <img src="./images/20.jpg" alt="">
                    </li>
                    <li>
                        <img src="./images/20.jpg" alt="">
                    </li>
                    <li>
                        <img src="./images/20.jpg" alt="">
                    </li>
                    <li>
                        <img src="./images/20.jpg" alt="">
                    </li>
                    <li>
                        <img src="./images/20.jpg" alt="">
                    </li>
                </div>
            </div>
        </div>


        <div class="master_play">
            <div class="wave" id="wave">
                <div class="wave1"></div>
                <div class="wave1"></div>
                <div class="wave1"></div>
            </div>
            <img src="./images/20.jpg" alt="" id="poster_master_play">
            <h5 id="title">Vande Mataram
                <div class="subtitle">Vakim Chandra </div>
            </h5>
            <div class="icons">
                <i class="bi shuffle bi-music-note-beamed">next</i>
                <i class="bi bi-skip-start-fill" id="back"></i>
                <i class="bi bi-play-fill" id="masterPlay"></i>
                <i class="bi bi-skip-end-fill" id="next"></i>
                <a href="" download id="download_music"><i class="bi bi-cloud-arrow-down-fill"></i></a>
            </div>
            <span id="currentStart">0:00</span>
            <div class="bar">
                <input type="range" id="seek" min="0" max="100">
                <div class="bar2" id="bar2"></div>
                <div class="dot"></div>
            </div>
            <span id="currentEnd">0:30</span>
            <div class="vol">
                <i class="bi bi-volume-up-fill" id="vol_icon"></i>
                <input type="range" min="0" max="100" id="vol">
                <div class="vol_bar"></div>
                <div class="dot" id="vol_dot"></div>
            </div>
        </div>

    </header>

    <script src="priynka.js"></script>
</body>

</html>