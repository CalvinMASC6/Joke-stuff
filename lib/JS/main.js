var likeButton = document.getElementById("like");
var dislikeButton = document.getElementById("dislike");
dislikeButton.addEventListener("click", getActivity);
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
var num = Math.ceil(Math.random()*10);
if(num < 2)
    num = 2;
num /= 10;
const boredUrl = `https://www.boredapi.com/api/activity/?accessibility=${num}`;

function getActivity()
{
    fetch(boredUrl)
    .then( (resp) => resp.json())
    .then( function(data){
        console.log(data + boredUrl);

        setActivity(data);
    });
}
function setActivity(KILLAQUEEN_BITESZADUSTO)
{
    const mainConainer = document.getElementById("main_container");
    mainConainer.innerHTML = "";

    const activity = KILLAQUEEN_BITESZADUSTO.activity;
    var sassDiv = document.getElementById("sassCOde");
    var sassText = document.createElement("h2");
    sassText.innerHTML = `Fine! Then ${unCapitalizeFirstchar(activity)}`;
    sassDiv.appendChild(sassText); 
}
function unCapitalizeFirstchar(string)  //because i want a perfect sentence
{
    var firstLetter = string.charAt(0).toLowerCase();
    var slicedString = string.slice(1)
    return firstLetter + slicedString;
}

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~calvin
const initialJoke = document.getElementById("joke");
let jokeUrl = `https://official-joke-api.appspot.com/random_joke`;

function createNode(element) {
    return document.createElement(element);
  }

  function append(parent, el) {
    return parent.appendChild(el);
  }
 
fetch(jokeUrl)
.then((resp) => resp.json())
.then(function(data) {
    let jokeSetup = data.setup;
    let jokePunchline = data.punchline;

    var blub = document.getElementById("joke_text");
    blub.innerHTML = jokeSetup + jokePunchline;
    
    console.log(joke);

})