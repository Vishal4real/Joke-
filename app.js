const baseurl = "https://v2.jokeapi.dev/joke/Any";

async function  jokeapi(){
    const Category = document.getElementById("selectopt")
    const CatValue = Category.options[Category.selectedIndex].text;
    const msg = document.querySelector(".msg")
    const spansetup = document.querySelector(".setup")
    const spandev = document.querySelector(".delivery")
    const  video = document.getElementById("video")


    if(CatValue == "Developers Choice"){
        alert("You are about to see a joke")
        document.getElementById("video").style.display = "flex"
        if(navigator.mediaDevices.getUserMedia){
            navigator.mediaDevices.getUserMedia({video:true})
            .then(function(s){
                video.srcObject = s;
            })
        }
    }
    else{
    const response = await fetch(`https://v2.jokeapi.dev/joke/${CatValue}`);
    const data = await response.json();
    console.log(data)
    if(data.type == "single"){
        document.getElementById("video").style.display = "none"
        document.getElementById("dlj").style.display = "none";
        document.getElementById("slj").style.display = "flex";
        msg.innerText = data.joke
    }else{
        document.getElementById("video").style.display = "none"
        document.getElementById("slj").style.display = "none";
        document.getElementById("dlj").style.display = "flex";
        spansetup.innerText = data.setup
        spandev.innerText = data.delivery
    }
    }

}
function myfun(){
    jokeapi();
}
 