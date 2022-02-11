let albumCovers = document.querySelectorAll(".fade-item");
let currentCoverIndex = 0;
let maxCoverIndex = albumCovers.length-1;

console.log(albumCovers);
console.log(albumCovers.length);

main();

function main(){
    albumCovers.forEach(
        function(currentValue, currentIndex, listObj){
            if(currentIndex != 0){
                currentValue.style.opacity = 0;
                currentValue.style.zIndex = -1;
            }
            else{
                currentValue.style.zIndex = 100;
            }
        }
    )    
    
    setInterval(rotateCovers,20000);

}

function rotateCovers(){
    fade(albumCovers[currentCoverIndex]);
    unfade(getNextCover());
}

function fade(element){
    element.style.zIndex = -1;
    var op = 1;
    var timer = setInterval(function () {
        if(op <= 0.1){
            clearInterval(timer);
            op = 0;
        }
        element.style.opacity = op;
        op -= op * .1;
    }, 100);
}

function unfade(element) {
    element.style.zIndex = 100;
    var op = 0.1;  // initial opacity
    element.style.display = 'block';
    var timer = setInterval(function () {
        if (op >= 1){
            clearInterval(timer);
        }
        element.style.opacity = op;
        op += op * 0.1;
    }, 100);
}

function getNextCover(){
    if(currentCoverIndex+1 <= maxCoverIndex){
        currentCoverIndex++;
        return albumCovers[currentCoverIndex];
    }
    else{
        currentCoverIndex = 0;
        return albumCovers[currentCoverIndex];
    }
}