function display(val){
    document.querySelector("#textvalue").value+=val;
}
function eq(){
    let x=document.querySelector("#textvalue").value;
    let y= eval(x);
    document.querySelector("#textvalue").value=y;
}
function clr(){
    document.querySelector("#textvalue").value="";
}