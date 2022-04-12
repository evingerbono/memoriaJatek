const tomb=["kepek/kep1.jpg","kepek/kep1.jpg","kepek/kep2.jpg","kepek/kep2.jpg","kepek/kep3.jpg","kepek/kep3.jpg","kepek/kep4.jpg","kepek/kep4.jpg","kepek/kep5.jpg","kepek/kep5.jpg"]
let kivalasztottTomb=[];
const hatter="kepek/hatter.jpg";
window.addEventListener('load',init);
function ID(elem){
    return document.getElementById(elem);
}
function init(){
    const tarolo=document.getElementById("jatek");
    kartya="";
        tomb.forEach(function (elemem,index){
            kartya+= "<img src='"+hatter +"'alt="+"id="+index+"></img>"
        });
    tarolo.innerHTML=kartya;
    const Elemtomb=document.querySelectorAll("#jatek img");
    console.log(Elemtomb);
    Elemtomb.forEach(function(kepelem){
        kepelem.addEventListener("click",katt);
    });
}

function katt(){
    console.log(event.target.id);
    let aktindex=event.target.id;
    event.target.src=tomb[aktindex];
    kivalasztottTomb.push(aktindex);
    console.log(kivalasztottTomb);
    event.target.removeEventListener("click",katt);

    if (kivalasztottTomb.length==2) {
        let feltetel= tomb[kivalasztottTomb[0]]===tomb[kivalasztottTomb[1]];
    }
    console.log(feltetel);
}