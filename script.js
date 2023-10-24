



const buttons = document.querySelectorAll(".button");
const output = document.querySelector(".display-result");


buttons.forEach(button => {
    button.addEventListener("click" , () => {
        output.innerHTML += button.innerHTML
    })
})


function clearOutput() {
    output.innerHTML = "";
}
function removeOne() {
    let string = output.innerHTML;
    output.innerHTML = string.slice(0, string.length - 1)
}

function calculate() {
    output.innerHTML = String(eval(output.innerHTML))    
}