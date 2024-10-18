const convertedOutput = document.querySelector('#convertedOutput')
    let fromUnit = document.querySelector('#fromUnit');
let toUnit = document.querySelector('#toUnit');
  let  convertUnit = document.querySelector('.convertUnit');

function convert() {

    let resulte=0;
    let value = parseFloat(document.getElementById('inputValue').value);

    if (fromUnit.value === 'meter') {
        resulte = Number(value);
    } else if (fromUnit.value === 'kilometer') {
        resulte = Number(value )* 1000; // كيلومتر إلى متر
    } else if (fromUnit.value === 'centimeter') {
        resulte = Number(value) / 100; // سنتيمتر إلى متر
    }

    if (toUnit === 'meter') {
    } else if (toUnit.value === 'kilometer') {
        resulte =Number(value) / 1000; // متر إلى كيلومتر
    } else if (toUnit.valuet === 'centimeter') {
        resulte = Number(value) * 100; // متر إلى سنتيمتر
    }
    
    convertedOutput.value  = resulte;
}
convertUnit.addEventListener("click", convert);

