function fun_search(){
    var menu=document.getElementById("menu");
    var box=document.getElementById("search");
    if (box.style.display=="none"){
        menu.style.display="none";
        box.style.display="block";
    }else{
        menu.style.display="block";
        box.style.display="none";
    }
}
function fun_signIn(){
    var t=document.getElementById("signIn");
    if (t.style.display=="none"){
        t.style.display="block";
    }else{
        t.style.display="none";
    }
}