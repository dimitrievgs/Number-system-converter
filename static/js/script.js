(window).onload = function () {
    let inputTextArea = document.getElementById("input-data");
    let numberSystemSelector = document.getElementById("dataInType");

    let outputTextArea10 = document.getElementById("output-data-10")
    let outputTextArea16 = document.getElementById("output-data-16")
    let outputTextArea2 = document.getElementById("output-data-2")
    let outputTextAreaASCII = document.getElementById("output-data-ascii")

    let convertButton = document.getElementById("convert-button");

    convertButton.addEventListener("click", function () {
        let inText = inputTextArea.value;
        let valuesIn = inText.split(" ");
        let valuesDecimal = convertToDecimal(valuesIn, numberSystemSelector.value);

        //alert(valuesOut);
        outputTextArea10.value = convertToNumberSystem(valuesDecimal, "10").join(" ");
        outputTextArea16.value = convertToNumberSystem(valuesDecimal, "16").join(" ");
        outputTextArea2.value = convertToNumberSystem(valuesDecimal, "2").join(" ");
        outputTextAreaASCII.value = convertToNumberSystem(valuesDecimal, "ascii").join(" ");
    });
};

function convertToDecimal(valuesIn, numberSystemIn) {
    let valuesDecimal = [];
    switch (numberSystemIn) {
        case "10":
            valuesDecimal = valuesIn.slice(0);
            break;
        case "16":
            for (let val of valuesIn) {
                valuesDecimal.push(parseInt(val, 16));
            }
            break;
        case "2":
            for (let val of valuesIn) {
                valuesDecimal.push(parseInt(val, 2));
            }
            break;
        case "ascii":
            for (let val of valuesIn) {
                valuesDecimal.push(val.charCodeAt(0));
            }
            break;
    }

    return valuesDecimal;
}

function convertToNumberSystem(valuesDecimal, numberSystemOut) {
    let valuesOut = [];
    switch (numberSystemOut) {
        case "10":
            valuesOut = valuesDecimal.slice(0);
            break;
        case "16":
            for (let val of valuesDecimal) {
                valuesOut.push(Number(val).toString(16));
            }
            break;
        case "2":
            for (let val of valuesDecimal) {
                valuesOut.push(Number(val).toString(2));
            }
            break;
        case "ascii":
            for (let val of valuesDecimal) {
                valuesOut.push(String.fromCharCode(Number(val)));
            }
            break;
    }

    return valuesOut;
}