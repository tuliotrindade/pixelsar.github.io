const tabela=document.querySelector("#pixel-board")
document.querySelectorAll(".color")[0].style.background="black"
document.querySelectorAll(".color")[1].style.background="red"
document.querySelectorAll(".color")[2].style.background="green"
document.querySelectorAll(".color")[3].style.background="blue"
let n=5;

for(let i=0;i<n;i+=1){
    let linhas=document.createElement("tr");
    tabela.appendChild(linhas);
    for(let i=0;i<n;i+=1){
    let colunas=document.createElement("td");
    linhas.appendChild(colunas);
    colunas.className="pixel"
}
}

let color1=document.querySelectorAll(".color")[0]
let color2=document.querySelectorAll(".color")[1]
let color3=document.querySelectorAll(".color")[2]
let color4=document.querySelectorAll(".color")[3]

color1.addEventListener("click", function(){
    color1.className="color selected"
    color2.className="color"
    color3.className="color"
    color4.className="color"
})
color2.addEventListener("click", function(){
    color1.className="color"
    color2.className="color selected"
    color3.className="color"
    color4.className="color"
})
color3.addEventListener("click", function(){
    color1.className="color"
    color2.className="color"
    color3.className="color selected"
    color4.className="color"
})
color4.addEventListener("click", function(){
    color1.className="color"
    color2.className="color"
    color3.className="color"
    color4.className="color selected"
})



window.onload=document.querySelectorAll(".color")[0].className="color selected";

