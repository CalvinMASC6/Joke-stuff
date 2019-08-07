var likeButton = document.getElementById("like");
var dislikeButton = document.getElementById("dislike");
likeButton.addEventListener("click", getPositiveFeedback);
dislikeButton.addEventListener("click", getActivity);
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
var num = Math.ceil(Math.random()*10);
const boredUrl = `https://www.boredapi.com/api/activity/?minaccessibility=0.3&maxaccessibility=1`;
const catUrl = "https://api.thecatapi.com/v1/images/search";

function getActivity()
{
    document.getElementById("main_container").innerHTML = "";

    fetch(boredUrl)
    .then( (resp) => resp.json())
    .then( function(data){
        console.log(data);
        setActivity(data);
    });
}
function setActivity(Killer_Queen_has_already_touched_this_function)
{
    const activity = Killer_Queen_has_already_touched_this_function.activity;
    var sassDiv = document.createElement("div");
    sassDiv.setAttribute("id", "sassCOde");
    var sassText = document.createElement("h2");

    sassText.innerHTML = `Fine! Then ${unCapitalizeFirstchar(activity)}. Like you could!`;
    sassDiv.appendChild(sassText);

    document.body.appendChild(sassDiv);
}
function getPositiveFeedback()
{
    fetch(catUrl)
    .then( (resp) => resp.json())
    .then( function(data){
        setPositiveFeedback(data);
    });
}
function setPositiveFeedback(DAISAN_NO_BAKUDAN_BITESZADUSTO)
{
    const feedbackContainer = document.getElementById("feedback_container");
    feedbackContainer.innerHTML = "";

    const src = DAISAN_NO_BAKUDAN_BITESZADUSTO[0].url;
    console.log(src);
    console.log(DAISAN_NO_BAKUDAN_BITESZADUSTO);
    var img = document.createElement("img");
    img.setAttribute("src", src);
    feedbackContainer.appendChild(img);

    var tyNote = document.createElement("h2");
    tyNote.innerText = "Thank You for the like!";
    feedbackContainer.appendChild(tyNote);
}
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~calvin
const initialJoke = document.getElementById("joke");
let jokeUrl = `https://official-joke-api.appspot.com/random_joke`;
 
fetch(jokeUrl)
.then((resp) => resp.json())
.then(function(data) {
    let jokeSetup = data.setup;
    let jokePunchline = data.punchline;

    var blub = document.getElementById("joke_text");

    blub.innerHTML = jokeSetup + "<br>" + jokePunchline;
})











// ~~~~~~~~~~~~~~~ useful funcions
function unCapitalizeFirstchar(string)  //because i want a perfect sentence
{
    var firstLetter = string.charAt(0).toLowerCase();
    var slicedString = string.slice(1)
    return firstLetter + slicedString;
}