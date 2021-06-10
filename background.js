var imgs = [
    "0d6687ac010dbf527132404f5a1cab5a.png",
    "1abb523af69516d077ca7f126836b9bb.png",
    "2fde4ca20392f64d7bd3e5443230fcab.png",
    "3c2aa53b9b80f8eef2f1f4e1bb3ebf4b.png",
    "57fe2a6abae0bd16b8ea3ec078b73892.jpg",
    "6854420178f425974a99023cb25b824e.jpg",
    "20201011073804.1261548.jpg",
    "총기수여식.png",
    "ac50076635e6e24396c8988ab57b8d6c.jpg",
    "ad7214c8b8be8b1a82d23964d05aca54.png",
    "b6771431e9c855f03cc4610a955c7c42.png",
    "d8eee962524679d583d42519892a3a5c.jpg",
    'f719bee348fc1f1ede3d4eab9a816ef6.jpg',
    "xlQ1qisYopymlvwxY9AK62odo1_1280.jpg"
];
function switchBG() {
    var fn = parseInt(Math.random() * imgs.length);

    var tag = "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('./backgrounds/"+ imgs[fn] +"')";
    document.getElementById("background").style.backgroundImage = tag;
    document.getElementById("blur-background").style.backgroundImage = tag;
    
    setTimeout(switchBG, 6000);
}