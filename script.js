let name=document.querySelector("#name");
let lover=document.querySelector("#lover");
let calc=document.querySelector("#calculate");
let result=document.querySelector("#result");
let status=document.querySelector("h2");


calc.addEventListener("click",()=> {
    let lovePerc=Math.floor(Math.random()*100);
    result.innerText=`${name.value} and ${lover.value} ${lovePerc}% of love`;

    if(lovePerc>=0 && lovePerc<=25) {
        status.innerText="Bad relationship😌";
    }
    else if(lovePerc>=26 && lovePerc<=80){
        status.innerText="Good realtionship🥰";
    }
    else {
        status.innerText="most lovely couple";
    }
})
