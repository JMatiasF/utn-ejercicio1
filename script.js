function suma(a, b, callback) {
    let c = a + b;
    callback(c);
}

document.addEventListener("DOMContentLoaded", function () {
    const inputA = document.getElementById("inputA");
    const inputB = document.getElementById("inputB");
    const sumButton = document.getElementById("sumButton");
    const result = document.getElementById("result");

    sumButton.addEventListener("click", function () {
        const numA = parseFloat(inputA.value);
        const numB = parseFloat(inputB.value);

        suma(numA, numB, function (resultado) {
            result.textContent = resultado;
        });
    });
});

