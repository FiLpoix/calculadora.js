const display = document.querySelector("#display");

document.querySelector("form").addEventListener("submit", (event) => {
    event.preventDefault();
});

function addToDisplay(value) {
    display.value += value;
}

function calculate() {
    let result;

    try {
        result = eval(display.value);

        if (result === Infinity || isNaN(result)) {
            display.value = "Erro";
        } else {
            display.value = result;
        }
    } catch (error) {
        display.value = "Erro na expressão";
    }
}

function addStorage() {
    if(display.value != ""){
    const display = document.querySelector("#display");
    localStorage.setItem("num", display.value);
    localStorage.getItem("num")

    
    display.value = ""
}
}

function decStorage (){
    if(display.value != ""){
    let num1 = localStorage.getItem("num");
    localStorage.setItem("num2", display.value);
    let num2 = localStorage.getItem("num2");
    display.value = num1 - num2
    localStorage.setItem("num", display.value)

    display.value = ""
    }
}

function clearStorage (){
    localStorage.removeItem("num", "num2")
}

function exibStorage (){
    display.value = localStorage.getItem("num")
    console.log(localStorage.getItem("num"))
}