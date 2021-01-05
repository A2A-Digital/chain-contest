
right_arrow.onclick = function(){
    document.getElementById("client_table").style.cssText="visibility: hidden";
    document.getElementById("Ast_dot").style.cssText="opacity:0.3";
    document.getElementById("Bst_dot").style.cssText="opacity:1";
    document.getElementById("title_feedback").innerHTML = "Unavailable";
    document.getElementById("left_arrow").style.cssText="opacity:1";
    left_arrow.onclick = function(){
        document.getElementById("client_table").style.cssText="visibility:visible";
        document.getElementById("Ast_dot").style.cssText=("opacity:1");
        document.getElementById("Bst_dot").style.cssText=("opacity:0.3");
        document.getElementById("Cst_dot").style.cssText=("opacity:0.3");
        document.getElementById("Dst_dot").style.cssText=("opacity:0.3");
        document.getElementById("title_feedback").innerHTML = "What our customer are saying";
        document.getElementById("left_arrow").style.cssText="opacity:0.3";
    }
}
Ast_dot.onclick = function(){
    document.getElementById("client_table").style.cssText="visibility: visible";
    document.getElementById("title_feedback").innerHTML = "What our customer are saying";
    document.getElementById("Ast_dot").style.cssText=("opacity:1");
    document.getElementById("Bst_dot").style.cssText=("opacity:0.3");
    document.getElementById("Cst_dot").style.cssText=("opacity:0.3");
    document.getElementById("Dst_dot").style.cssText=("opacity:0.3");
}
Bst_dot.onclick = function(){
    document.getElementById("client_table").style.cssText="visibility: hidden";
    document.getElementById("title_feedback").style.cssText="transition: 0.3s ease";
    document.getElementById("title_feedback").innerHTML = "Unavailable1";
    document.getElementById("Ast_dot").style.cssText=("opacity:0.3");
    document.getElementById("Cst_dot").style.cssText=("opacity:0.3");
    document.getElementById("Dst_dot").style.cssText=("opacity:0.3");
    document.getElementById("Bst_dot").style.cssText=("opacity:1");
    
}
Cst_dot.onclick = function(){
    document.getElementById("client_table").style.cssText="visibility: hidden";
    document.getElementById("title_feedback").innerHTML = "Unavailable2";
    document.getElementById("Ast_dot").style.cssText=("opacity:0.3");
    document.getElementById("Bst_dot").style.cssText=("opacity:0.3");
    document.getElementById("Dst_dot").style.cssText=("opacity:0.3");
    document.getElementById("Cst_dot").style.cssText=("opacity:1");
}
Dst_dot.onclick = function(){
    document.getElementById("client_table").style.cssText="visibility: hidden";
    document.getElementById("title_feedback").innerHTML = "Unavailable3";
    document.getElementById("Ast_dot").style.cssText=("opacity:0.3");
    document.getElementById("Bst_dot").style.cssText=("opacity:0.3");
    document.getElementById("Cst_dot").style.cssText=("opacity:0.3");
    document.getElementById("Dst_dot").style.cssText=("opacity:1");
}