const tabela=document.querySelector("#pixel-board")
const localBotao=document.querySelector("#botao")
document.querySelectorAll(".color")[0].style.background="black"
document.querySelectorAll(".color")[1].style.background="brown"
document.querySelectorAll(".color")[2].style.background="pink"
document.querySelectorAll(".color")[3].style.background="blue"
let n=5 ;

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

let corPixel=document.querySelector("#pixel-board");
corPixel.addEventListener("click", function(evento){
    evento.target.style.backgroundColor=document.querySelector(".selected").style.backgroundColor;
    console.log(document.querySelector(".selected").style.backgroundColor)
})


let botao=document.createElement("button");
localBotao.appendChild(botao);
botao.className="botaoStyle"
botao.id="clear-board"
botao.innerText="Limpar"
botao.addEventListener("click", function(){
    for(let i=0;i<n*n;i+=1)
    document.querySelectorAll(".pixel")[i].style.backgroundColor="white"
})



window.onload=document.querySelectorAll(".color")[0].className="color selected";

