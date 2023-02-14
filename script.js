let count = 2;
let counterelement = document.getElementById("გამრავლება");

function გამრავლება(){
    count = count *2;
    counterelement.innerHTML = count;
}
function გაყოფა(){
    count = count /2;
    counterelement.innerHTML =count;
}
function მიმატება(){
    count = count +2;
    counterelement.innerHTML = count;
}
function გამოკლება(){
    count = count -2;
    counterelement.innerHTML = count;
}