let albumCovers = document.querySelectorAll(".fade-item");
let currentCoverIndex = 0;
let maxCoverIndex = albumCovers.length-1;

console.log(albumCovers);
console.log(albumCovers.length);

main();

function main(){
    albumCovers.forEach(
        function(currentValue, currentIndex, listObj){
            if(currentIndex != 0) 
                currentValue.style.opacity = 0;
        }
    )    
    
    setInterval(rotateCovers,10000);

}

function rotateCovers(){
    console.log("rotating");
    fade(albumCovers[currentCoverIndex]);
    unfade(getNextCover());
}

function fade(element){
    var op = 1;
    var timer = setInterval(function () {
        if(op <= 0.1){
            clearInterval(timer);
            op = 0;
            console.log("clearing");
        }
        element.style.opacity = op;
        op -= op * .1;
    }, 100);
}

function unfade(element) {
    var op = 0.1;  // initial opacity
    element.style.display = 'block';
    var timer = setInterval(function () {
        if (op >= 1){
            console.log("clearing");
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