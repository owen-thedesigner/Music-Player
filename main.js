// Selecting all elements
let btn = document.querySelectorAll('.song #play_btn');
let song = document.querySelectorAll('#music');

/* Popup music player part */
let p_m_player = document.querySelector('.popup_music_player');
let down_player = document.querySelector('#down_player');
let current_track_name = document.querySelector('#current_track_name');
let current_singer_name = document.querySelector('#current_singer_name');
let song_img = document.querySelector('.song_img');

/* Controls part */
let play_pause_btn = document.querySelector('#play_pause_btn');
let slider = document.querySelector('#slider');
let forward_btn = document.querySelector('#forward_btn');
let backward_btn = document.querySelector('#backward_btn');

/* Songs duration */
let current_duration = document.querySelector('.controlls .progress_part #current_duration');
let total_duration = document.querySelector('.controlls .progress_part #total_duration');

/* Small music player part */
let s_m_player = document.querySelector('.small_music_player');
let playing_img = document.querySelector('.playing_img');
let wave_animation = document.querySelector('.wave_animation');
let up_player = document.querySelector('#up_player');
let song_name = document.querySelector('#song_name');
let artist_name = document.querySelector('#artist_name');

/* Default values */
let is_song_played = false;
let song_status = false;
let index_no = 0;

//Define the togglePlayback function to play or pause a song
function togglePlayback(action, index) {
    if(action === "play"){
        song[index].play();
        song_status = true;
        wave_animation.style.opacity = '1';
        play_pause_btn.innerHTML = '<i class="fa fa-pause" aria-hidden="true"></i>';
    }else if(action === "pause"){
        song[index].pause();
        song_status = false
        clearInterval(update_second);//***creating function later */
        wave_animation.style.opacity = 0;
        play_pause_btn.innerHTML = '<i class="fa fa-play" aria-hidden="true"></i>';
    }
}

//set up event listener for play buttons to handle individuel song selection
btn.forEach((btn, index) => {
    btn.addEventListener('click', function(){
        s_m_player.style.transform = 'translateY(0px)';//show small music player

        //stop previous song if a different song is selected
        if(song_status && index !== index_no){
            togglePlayback("pause", index_no)
            song[index_no].classList.remove("active_song");
        }

        index_no = index; //update the index for the selected song
        song[index_no].currentTime = 0; //reset song time 

        play_song(); //play selected song
            });
});

//define play_song functons to start a song and update the UI
function play_song(){
    if(document.querySelector(".active_song")){
        document.querySelector(".active_song").pause(); //pause the current active song
        document.querySelector(".active_song").classList.remove("active_song"); //remove active class
    }

    togglePlayback("play", index_no); //play the selected play
    song[index_no].classList.add("active_song"); //add active class to the song

    //Update song details in UI
    song_img.innerHTML = `<img src="${All_song[index_no].img}" />`;
    playing_img.innerHTML = `<img src="${All_song[index_no].img}" />`;
    song_name.innerHTML = All_song[index_no].name;
    artist_name.innerHTML = All_song[index_no].singer;
    current_track_name.innerHTML = All_song[index_no].name;
    current_singer_name.innerHTML =  All_song[index_no].singer;

    setInterval(update_second, 1000); //Start updating song progress every second 
    p_m_player.style.transform = 'translateY(0%)'; //show popup player
}

//define the update_second function to handle the song progress and display duration
function update_second() {
    let position = 0

    if(!isNaN(song[index_no].duration)){
        position = song[index_no].currentTime * (100 / song[index_no].duration);
        slider.value = position; //update slider position
    }

    //display total duration 
    let durationMinutes = Math.floor(song[index_no].duration /60);
    let durationSeconds = Math.floor(song[index_no].duration - durationMinutes * 60);
    total_duration.textContent = `${durationMinutes}:${durationSeconds < 10 ? '0' : ''}${durationSeconds}`;

    //display current playback time
        //display total duration 
        let curr_minutes = Math.floor(song[index_no].currentTime /60);
        let curr_seconds = Math.floor(song[index_no].currentTime - curr_minutes * 60);
        current_duration.textContent = `${curr_minutes}:${curr_seconds < 10 ? '0' : ''}${curr_seconds}`;

        if (song[index_no].ended) {
            clearInterval(update_second) //reset when song ends
            wave_animation.style.opacity = '0';
            play_pause_btn.innerHTML = '<i class="fa fa-play" aria-hidden="true"></i>';
        }
}

//add event listener for the pop up player
up_player.addEventListener('click', function ( ){
    p_m_player.style.transform = 'tranlateY(0%)'; //show popup player
});

down_player.addEventListener('click', function(){
    p_m_player.style.transform = 'translateY(110%)'; //hide popup player
});

//add event Listener for the play/pause button

play_pause_btn.addEventListener("click", function(){
    if(song_status){
        togglePlayback("pause", index_no);
    }else{
        togglePlayback("play", index_no);
    }
});

// define the change duration

function change_duration(){
    let slider_position = song[index_no].duration * (slider.value / 100);
    song[index_no].currentTime = slider_position;
}

//add functionallity to foward and back arrows
forward_btn.addEventListener('click', function (){
    index_no = (index_no +1) % All_song.length; //move to next song
    song[index_no].currentTime = 0;
    play_song ();
})

backward_btn.addEventListener('click', function(){
    index_no = (index_no -1) % All_song.length; //move to previous song
    song[index_no].currentTime = 0;
    play_song ();
})

//start song progress
setInterval(update_second, 1000);

  