let buttons = Array.from(document.querySelectorAll('button'))
let outPut = document.querySelector(".formOutput")
outPut.innerText = [0];
outPutFirstNum = outPut.innerText.slice(0,1)
console.log(outPutFirstNum)

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
            default:
                outPut.innerText += event.target.value;
                break;
        }
    })
})