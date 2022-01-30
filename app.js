

function handelAirTicket( ticketInput, plusMinus ){

    const input = document.getElementById(ticketInput);
    const inputNumber = parseInt(input.value);

    let totalTicket = inputNumber;

    if(plusMinus == true){
        totalTicket = inputNumber + 1;
    }

    if(plusMinus == false && totalTicket > 0){
        totalTicket = inputNumber - 1;
    }
    
    input.value = totalTicket;

    calculator()
}


function calculator(){

    let firstInput = parseInt(document.getElementById('first-input').value);
    let businessInput = parseInt(document.getElementById('business-input').value);
    let economicInput = parseInt(document.getElementById('economic-input').value);

    let totalBill = firstInput * 700 + businessInput * 500 + economicInput * 300;

    let vat = totalBill * .15;

    let subTotal = totalBill + vat;

    document.getElementById('total').innerText = totalBill;
    document.getElementById('vat').innerText = vat;
    document.getElementById('sub-total').innerText = subTotal;
}