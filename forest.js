const mainImage = document.getElementById("img1");
const captionText = document.getElementById("p1");
const endingDiv = document.getElementById("div");

x = 1

document.getElementById("bt").addEventListener("click", function(){ 
    x++

    if (x === 2){
        mainImage.src = "image/forest2.svg" 
        captionText.textContent = "It's boring out here. Can we go go somewhere else?" 
    }

    if (x === 3){
        mainImage.src = "image/forest3.svg" 
        captionText.textContent = "Wow, the sun is beating down, huh?"
    }

    if (x === 4){
        endingDiv.style.display = "block"
    }
})