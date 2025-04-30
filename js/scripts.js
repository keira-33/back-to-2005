
// RETURN TO TOP BUTTON
// When the user scrolls down 800px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 800 || document.documentElement.scrollTop > 800) {
    document.getElementById("cornerbtn").style.display = "block";
    } else {
    document.getElementById("cornerbtn").style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}


// RANDOM MUSIC GENERATOR //
function generateSong() {
    const songs = [
        {
            song: "Since U Been Gone", 
            artist: "Kelly Clarkson",
            image: "../images/song-images/since-u-been-gone.jpg"
        },
        {
            song: "Gold Digger", 
            artist: "Kanye West ft. Jamie Foxx",
            image: "../images/song-images/gold-digger.jpg"
        },
        {
            song: "Boulevard of Broken Dreams", 
            artist: "Green Day",
            image: "../images/song-images/blvd-of-broken-dreams.jpg"
        },
        {
            song: "Pon de Replay",
            artist: "Rihanna",
            image: "../images/song-images/pon-de-replay.jpg"
        },
        {
            song: "Mr. Brightside",
            artist: "The Killers",
            image: "../images/song-images/mr-brightside.jpg"
        }
    ];
    //math.floor returns a whole number version of the Math.random number
    let arrayIndex = Math.floor(Math.random() * songs.length)
    //math.random gives random num from 0-.99999
    //math.floor returns nearest whole integer (rounding down)--> ex 2.97 becomes 2
    // console.log(arrayIndex)
    document.getElementById("song").innerHTML = songs[arrayIndex].song;
    document.getElementById("artist").innerHTML = "By: "+songs[arrayIndex].artist;
    document.getElementById("image").src = songs[arrayIndex].image;
    document.getElementById("image").alt = "Album of " + songs[arrayIndex].song;
}

//when this window loads, do this...
window.onload = function () {
    generateSong();
    document.getElementById("generate").addEventListener('click', generateSong)
}


// SLIDESHOW FUNCTION
// slideshow function
let intIndex = 0;

function showImage() {
    intIndex ++;

    let images = document.getElementsByClassName("image");
    let dots = document.getElementsByClassName("dot");
// for loop loops trhough all of our images and makes them not visible 
    for(n=0; n<images.length; n++) {
        images[n].style.display = "none";
        // we're removing the active class name from the dots with this next line
        dots[n].className = dots[n].className.replace(" active", "");
    }
    // fixes out of bound indexing:
    if(intIndex > images.length -1){
        intIndex = 0;
    }
    if(intIndex < 0){
        intIndex = images.length -1;
    }

    images[intIndex].style.display = "block";
    // appends a name to the dots class name
    dots[intIndex].className += " active";
}

// add setInterval function here--> we did this already for reference
setInterval(()=> {
    showImage();
},3000);