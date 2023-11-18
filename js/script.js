var list = document.getElementById('list');

list.style.maxHeight = "0px";

function openList(){
    if(list.style.maxHeight = "0px"){
        list.style.maxHeight = "130px";
    }
    else{
        list.style.maxHeight = "0px";
    }
}

function closeList(){
    if(list.style.maxHeight = "130px"){
        list.style.maxHeight = "0px";
    }
}
