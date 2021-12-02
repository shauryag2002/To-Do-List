let btnAdd=document.getElementById("btnAdd")
let btnReset=document.getElementById("btnReset")
let btnSort=document.getElementById("btnSort")
let btnClean=document.getElementById("btnClean")
let btnPopulate=document.getElementById("btnPopulate")
let inpList=document.getElementById("inpList")
let divaddlist=document.getElementById("divaddlist")
let itm=document.getElementsByClassName("itm")
let count=0;
let strike=undefined;
btnAdd.onclick=function(){
    count++;
    let div=document.createElement("div");
    div.textContent=inpList.value;
    div.classList.add("itm")
    // div.setAttribute('id','btnonclick')
    divaddlist.appendChild(div)
    strike1();
}
function strike1(){
    for (let i = 0; i < itm.length; i++) {
        // const q = itm[i];
        
        itm[i].onclick=function(){
            itm[i].classList.add("strike")
            // itm[i].innerHTML="<strike>"+itm[i].innerText+"</strike>"
        }
    }
}
btnReset.onclick=function(){
    inpList.value="";
}
btnClean.onclick=function(){
    let b=itm.length;
    for (let i = b-1; i >= 0; i--) {
        let w = itm[i];
        if (w.getAttribute("class")=="itm strike") {
            w.remove();
        }
        strike1();
        // w.getAttribute()
    }
}
btnSort.onclick=function(){
    strike=document.getElementsByClassName("strike");
    let counter=1;
    while (counter<=strike.length) {
        let temp1=strike[0];
        strike[0].remove();
        divaddlist.appendChild(temp1);
        counter++;
    }
    strike1();
}
btnPopulate.onclick=function(){
    for (let i = 1; i <= inpList.value; i++) {
        let div=document.createElement("div");
    div.textContent=i;
    div.classList.add("itm")
    // div.setAttribute('id','btnonclick')
    divaddlist.appendChild(div)
    strike1();
        
    }
}