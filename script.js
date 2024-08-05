function mudar_cor(){
    document.getElementById("texto").style.color = "#2f4f4f";
}
function mudar_fundo(){
    document.getElementById("texto").style.backgroundColor = "#eee8aa";
}
function mudar_borda(){
    document.getElementById("texto").style.border = "solid";
}
function mudar_fonte(){
    document.getElementById("texto").style.fontStyle = "italic";
}
function reset(){
    document.getElementById("texto").removeAttribute("style");
}