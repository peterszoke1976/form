function calcAmount(){
    let price = 1000;
    let amountInput = document.querySelector("input[name='amount-input']");
    let amountNumber = parseInt(amountInput.value);
    amountNumber = isNaN(amountNumber) ? 0 : amountNumber;

    showSumPrice(price, amountNumber)
}

function showSumPrice(price=1000, amountNumber=1){
    let showAmount = document.querySelector("span.show-amount");
    if (amountNumber>10){
        alert("Maximum 10 darabot lehet venni.");
    } else if (amountNumber<1){
        alert("Minimum 1 termeket kell vennie.");
    } else {
        let amount = amountNumber*price;
        showAmount.innerHTML = amount;
    }
}

let helpText = document.createElement("small");
helpText.className = "form-text text-muted";
helpText.innerHTML = "Adja meg a felteteket.";

let parent = document.querySelector("div.form-group:nth-child(1)");
parent.appendChild(helpText);
//parent.removeChild(helpText);

let sendButton = document.querySelector("form .btn.btn-primary");
/*sendButton.onclick = function() {
    alert("Hello pocok");
}*/
sendButton.addEventListener("click", function(){
    alert("Hello pocok");
});

window.addEventListener("resize", function(){
    console.log(this.innerHeight, this.innerWidth);
})

let orderForm = document.querySelector("#orderForm");
orderForm.addEventListener("submit", function(ev){
    ev.preventDefault();
    //console.log( this );
    let inputs = this.querySelectorAll("input");
    let values = {};
    for (let i=0; i<inputs.length; i++){
        values[inputs[i].name] = inputs[i].value;
    }
    console.log( values );
});

let alertCloseButtons = document.querySelectorAll(".close[data-dismiss='alert']");
let alertCloseEventHandlerFunction = function (ev){
    this.parentElement.style.display = "none";
};
for (let i=0; i<alertCloseButtons.length; i++){
    alertCloseButtons[i].addEventListener("click", alertCloseEventHandlerFunction);
        //console.log(ev);
       
}

//Select elem kitoltes
let toppings = [
    "Szalonna",
    "Tukortojas",
    "Libamaj",
    "Hagyma",
    "Extra sonka"
];
let toppingSelect = document.querySelector("#topInput");
let index = 0;
while(index < toppings.length){
    let option = document.createElement("option");
    option.value = index;
    option.innerHTML = toppings[index];
    toppingSelect.appendChild(option);
    index++;
}

