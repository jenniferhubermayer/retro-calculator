let buttons = Array.from(document.querySelectorAll('button'))
let outPut = document.querySelector(".formOutput")

buttons.map(button => {
    button.addEventListener('click', (event) => {  
        event.preventDefault()

        switch(event.target.innerText){
            case "=":
                outPut.innerText = eval(outPut.innerText);
                break;
            case "C":
                outPut.innerText = outPut.innerText.slice(0, -1);
                break;
            case "+":
                outPut.innerText += event.target.value;
                break;
            case "AC":
                outPut.innerText = "";
                break;
            case "+/-":
                let num = outPut.innerText
                // Check if calculation includes a calculation sign. If it is "true", +/- doesn't work.
                let numCheck = num.slice(1).includes("+") || num.slice(1).includes("-") || num.slice(1).includes("/") || num.slice(1).includes("*") || num.slice(1).includes("%") || num.slice(1).includes("(") || num.slice(1).includes(")");
                if (numCheck == false){
                    if (num >= 0){
                        outPut.innerText = -Math.abs(num);
                    }
                    else{
                        outPut.innerText = Math.abs(num);
                    }
                }
                break;
            default:
                outPut.innerText += event.target.value;
                break;
        }
    })
})