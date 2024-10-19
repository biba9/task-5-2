const convertedOutput = document.querySelector('#convertedOutput')
    let fromUnit = document.querySelector('#fromUnit');
let toUnit = document.querySelector('#toUnit');
  let  convertUnit = document.querySelector('.convertUnit');

function convert() {

    let resulte = 0;
    let value = parseFloat(document.getElementById('inputValue').value);
    if (
        (fromUnit.value == 'kilometer' && toUnit.value == 'kilometer')
        || (fromUnit.value == 'meter' && toUnit.value == 'meter')
        || (fromUnit.value == 'centimeter' && toUnit.value == 'centimeter')) {
        resulte = Number(value);

    }
    else if ((fromUnit.value == 'meter') && (toUnit.value == 'kilometer')) {
        resulte = Number(value) / 1000;
    }
    else if ((fromUnit.value == 'kilometer') && (toUnit.value == 'meter')) {
        resulte = Number(value) * 1000; // كيلومتر إلى متر
    }
    else if ((fromUnit.value == 'centimeter') && (toUnit.value == 'meter')) {
        resulte = Number(value) / 100; // سنتيمتر إلى متر
    }
    else if ((fromUnit.value == 'meter') && (toUnit.value == 'centimeter')) {
        resulte = Number(value) * 100; // متر إلى سنتيمتر
    }
    else if ((fromUnit.value == 'meter') && (toUnit.value == 'kilometer')) {
        resulte = Number(value) / 1000; // متر إلى كيلومتر
    }
    
    else if((fromUnit.value == 'meter') && (toUnit.value == 'centimeter')) {
        resulte = Number(value) * 100; // متر إلى سنتيمتر
    }
    else {
      document.getElementById('inputValue').value = "error"; // في حالة عدم وجود عملية

    
    }

    convertedOutput.value  = resulte;
}
convertUnit.addEventListener("click", convert);

