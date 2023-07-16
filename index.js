let array = document.querySelectorAll(".drum");
for (let index = 0; index < array.length; index++) {
    const element = array[index];
    element.addEventListener("click", function () {
        let button = element.getAttribute("class")[0]; //element.innerHTML or element.className[0]
        console.log(button);
        switch (button) {
            case "w":
                let soundW = new Audio("sounds/tom-1.mp3")
                soundW.play();
                break;
            
            case "a":
                let soundA = new Audio("sounds/tom-2.mp3")
                soundA.play();
                break;
                
            case "s":
                let soundS = new Audio("sounds/tom-3.mp3")
                soundS.play();
                break;

            case "d":
                let soundD = new Audio("sounds/tom-4.mp3")
                soundD.play();
                break;

            case "j":
                let soundJ = new Audio("sounds/crash.mp3")
                soundJ.play();
                break;

            case "k":
                let soundK = new Audio("sounds/kick-bass.mp3")
                soundK.play();
                break;
            
            case "l":
                let soundL = new Audio("sounds/snare.mp3")
                soundL.play();
                break;

            default: 
                alert(button + " was Clicked")
                break;
        }
    })
}

document.onkeydown = function(pressedKey) {
    switch(pressedKey.key) {
        case "w":
            let soundW = new Audio("sounds/tom-1.mp3")
            soundW.play();
            break;
            
        case "a":
            let soundA = new Audio("sounds/tom-2.mp3")
            soundA.play();
            break;
            
        case "s":
            let soundS = new Audio("sounds/tom-3.mp3")
            soundS.play();
            break;

        case "d":
            let soundD = new Audio("sounds/tom-4.mp3")
            soundD.play();
            break;

        case "j":
            let soundJ = new Audio("sounds/crash.mp3")
            soundJ.play();
            break;

        case "k":
            let soundK = new Audio("sounds/kick-bass.mp3")
            soundK.play();
            break;
        
        case "l":
            let soundL = new Audio("sounds/snare.mp3")
            soundL.play();
            break;
        default: 
            alert(pressedKey.key + " was pressed")
            break;
    }
}