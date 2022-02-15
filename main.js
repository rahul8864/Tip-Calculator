const bill = document.getElementById('bill');
// const tipBtns = document.querySelectorAll('.tip');
const tipCustom = document.getElementById('tip');
const people = document.getElementById('no-of-people');
const errorMsgRating = document.querySelector('#serviceRating').innerHTML = "&shy;";
const errorMsgPerson = document.querySelector('#servicePerson').innerHTML = "&shy;";
// const results = document.querySelectorAll('.value');
// const resetBtn = document.querySelector('.reset');

bill.addEventListener('input', setBillValue);
tipCustom.addEventListener('input', setTipCustomValue);
people.addEventListener('input', setPeopleValue);

var billValue; //default value
var tipValue; //default value -> 15% button is active
var peopleValue;
///////////// int value
function validateInt(s){
    var rgx = /^[0-9]*$/;
    return s.match(rgx);
}

 // bill function
 function setBillValue () {
   billValue = parseFloat(bill.value);
   calculateTip();
 }
// tip function
function setTipCustomValue() {
  // if(!validateInt(tipCustom.value)){
  //       tipCustom.value = tipCustom.value.substring(0, tipCustom.value.length-1);
  //   }
  tipValue = parseFloat(tipCustom.value);
 if(tipValue <= 0 || tipValue > 100){
   if(tipValue >=5) {
     document.getElementById("serviceRating").innerHTML = "Very Poor";
   }
  document.getElementById("serviceRating").innerHTML = "can't be Zero (1 - 100)";
    // errorMsgPerson.classList.add('show-error-msg');
    // alert("Hello");
    setTimeout(function(){
      document.getElementById("serviceRating").innerHTML = "&shy;";
      // document.getElementById("servicePerson").innerHTML = "Hello";
        // errorMsgPerson.classList.remove('show-error-msg');
    }, 3000);
}
calculateTip();
}
// people function
function setPeopleValue() {
// people.value = '1';
  peopleValue = parseFloat(people.value);
    if(peopleValue <= 0 || peopleValue > 1000){
      document.getElementById("servicePerson").innerHTML = "can't be Zero (1 - 1000)";
        // errorMsgPerson.classList.add('show-error-msg');
        // alert("Hello");
        setTimeout(function(){
          document.getElementById("servicePerson").innerHTML = "&shy;";
          // document.getElementById("servicePerson").innerHTML = "Hello";
            // errorMsgPerson.classList.remove('show-error-msg');
        }, 3000);
    }
  calculateTip();
}
// calculateTip function
function calculateTip() {
  // if (peopleValue >=1 || billValue >=1 || tipValue>=1 ){

    // document.getElementById("tip-per-person").innerHTML = "0.00";
    // document.getElementById("total-per-person").innerHTML = "0.00";
    // let totalTip = parseFloat((billValue * (tipValue/100)).toFixed(2));
    // let total = parseFloat((billValue + totalTip).toFixed(2));
    //
    // let tipPerPerson = (totalTip / peopleValue).toFixed(2);
    // let totalPerPerson = (total / peopleValue).toFixed(2);

    // let tipAmount = parseFloat((billValue * tipValue) / peopleValue).toFixed(2);
    // let total = parseFloat(billValue * (tipValue + 1) / peopleValue).toFixed(2);

    // document.getElementById("tip-per-person").textContent = `${tipPerPerson}`;
    // document.getElementById("total-per-person").textContent = `${totalPerPerson}`;

    let tipAmount = (billValue * (tipValue/100) / peopleValue);
            let total = (billValue/ peopleValue)+ tipAmount;
            document.getElementById("tip-per-person").innerHTML = tipAmount.toFixed(2);
            document.getElementById("total-per-person").innerHTML = total.toFixed(2);
        // results[0].innerHTML = '$' + tipAmount.toFixed(2);
        // results[1].innerHTML = '$' + total.toFixed(2);
  // }
}
