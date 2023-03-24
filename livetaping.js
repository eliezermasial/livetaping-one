const input = document.querySelector("input");
const body = document.querySelector("body");
const taping = document.getElementById("taping")
const strong = document.createElement("strong")
const h2= document.createElement("h2");

console.log(strong)


input.addEventListener("keydown",(e)=>{
    const result =  e.key
    body.appendChild(h2)
    h2.innerText = result
})

taping.addEventListener("input",(Event)=>{
    const liveresult = taping.value
    body.appendChild(strong)
    strong.innerText = liveresult
})
