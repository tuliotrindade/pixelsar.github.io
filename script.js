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
window.onload(document.querySelectorAll(".color")[0].className="color selected");

