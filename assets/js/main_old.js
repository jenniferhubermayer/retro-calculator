console.log("Hallo")

// toCalculation = (event) => {
//     event.preventDefault();
//     let number = document.querySelector("button").value
//     console.log(number)
// }

let test = document.querySelectorAll('data-number');
console.log(test)

toCalculation = (event) => {
    event.preventDefault();
    let formContainer = document.getElementsByTagName('form')
    console.log(formContainer)
    let buttons = document.querySelectorAll('button')
    console.log(buttons)
    console.log(buttons[5].innerHTML)
    let index = undefined;
    let outPut = document.querySelector(".formOutput")
    console.log(outPut.innerText)
    let calculation = [];
    // console.log(outPut)
    // console.log(buttons[8])
    // console.log(buttons[8].value)
    // console.log(buttons.value)

    for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function () {
        index = i;

        switch (index) {
            case 0:
                console.log("Das ist der AC-Button")
            break;
        
            case 1:
                console.log("Das ist der C-Button")
            break;
        
            case 2:
                console.log("Das ist der +/--Button")
            break;

            case 3:
                console.log("Das ist der /-Button")
                outPut.innerHTML = "/"
            break;

            case 4:
                console.log("Das ist der %-Button")
            break;

            case 5:
                console.log("Das ist der (-Button")
                outPut.innerHTML = "("
            break;

            case 6:
                console.log("Das ist der )-Button")
                outPut.innerHTML = ")"
            break;

            case 7:
                console.log("Das ist der *-Button")
                outPut.innerHTML = "*"
            break;

            case 8:
                // console.log("Das ist der 7-Button")
                // Jetzt muss der Wert dem Array zugefügt werden
                outPut.innerHTML += outPut.innerText + "7";
                // console.log(buttons[8].value);
                // calculation.push(buttons[8].value);
                let number = buttons[8].value
                let calculationRun = calculation.map((number) => {return (number);})
                console.log(calculationRun);
            break;

            case 9:
                // console.log("Das ist der 8-Button")
                outPut.innerHTML = outPut.innerText + "8"
                calculation.push(buttons[9].value);
                console.log(calculation);
            break;

            case 10:
                console.log("Das ist der 9-Button")
                outPut.innerHTML = "9"
            break;

            case 11:
                console.log("Das ist der Minus-Button")
                outPut.innerHTML = "-"
            break;

            case 12:
                console.log("Das ist der 4-Button")
                outPut.innerHTML = "4"
            break;

            case 13:
                console.log("Das ist der 5-Button")
                outPut.innerHTML = "5"
            break;

            case 14:
                console.log("Das ist der 6-Button")
                outPut.innerHTML = "6"
            break;

            case 15:
                console.log("Das ist der Plus-Button")
                outPut.innerHTML = "+"
            break;

            case 16:
                console.log("Das ist der 1-Button")
                outPut.innerHTML = "1"
            break;

            case 17:
                console.log("Das ist der 2-Button")
                outPut.innerHTML = "2"
            break;

            case 18:
                console.log("Das ist der 3-Button")
                outPut.innerHTML = "3"
            break;

            case 19:
                console.log("Das ist der Gleich-Button")
            break;

            case 20:
                console.log("Das ist der 0-Button")
                outPut.innerHTML = "0"
            break;

            case 21:
                console.log("Das ist der Komma-Button")
                outPut.innerHTML = ","
            break;
        
            default:
                console.log("default")
            break;

        }
        })
    }

        const outPutCalculation = [];

        for (let i = buttons.innerHTML; i <= 30; i++){
            outPutCalculation.push("image_" + i + ".jpg");
            console.log(outPutCalculation);
        }



        // let outPutCalculationString = outPutCalculation.join("<br>");
}