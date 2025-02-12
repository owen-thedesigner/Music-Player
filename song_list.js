//song list
let All_song = [
   {
     name: "Up To Sky",
     path: "1.mp3",
     img: "images/1.jpg",
     singer: "BoDleasons"
   },
   {
     name: "Beautiful women",
     path: "2.mp3",
     img: "images/2.jpg",
     singer: "Kamoflowz"
   },
   {
     name: "Future Bass",
     path: "3.mp3",
     img: "images/3.jpg",
     singer: "Lowtone Music"
   },
   {
     name: "It is Spring",
     path: "4.mp3",
     img: "images/4.jpg",
     singer: "Lowtone Music"
   },
   {
     name: "blip blop",
     path: "5.mp3",
     img: "images/5.jpg",
     singer: "lamento del solipsista"
   },
   {
    name: "Your Motivation",
    path: "6.mp3",
    img: "images/1.jpg",
    singer: "Lowtone Music"
   },
   {
    name: "Way Home",
    path: "Way-Home.mp3",
    img: "images/6.png",
    singer: "Tokyo Music Walker"
   },
   {
    name: "The Epic Hero",
    path: "7.mp3",
    img: "images/7.jpg",
    singer: "Keys Of Moon"
   },
   {
    name: "Infinity",
    path: "8.mp3",
    img: "images/8.jpg",
    singer: "LEMMiNO"
   },
   {
    name: "Flying High",
    path: "music/9.mp3",
    img: "images/9.jpg",
    singer: "Fredji"
   },
];
/*you can add more song & images from you computer*/


/*tracks*/
let tracks = document.querySelector('.tracks');

//creating a list or generating Html
for (let i = 0; i < All_song.length; i++) {

  let Html = ` <div class="song">
      <div class="img">
      <img src="${All_song[i].img}"/>
      </div>
      <div class="more">
      <audio src="${All_song[i].path}" id="music"></audio>
      <div class="song_info">
         <p id="title">${All_song[i].name}</p>
         <p>${All_song[i].singer}</p>
      </div>
      <button id="play_btn"><i class="fa fa-angle-right" aria-hidden="true"></i></button>
      </div>
    </div>`;

  tracks.insertAdjacentHTML("beforeend", Html);
};
