const billInput = document.getElementById("bill");
billInput.addEventListener("input",calculateTip);
const tipInput = document.getElementById("tip");
tipInput.addEventListener("input",calculateTip);

const noInput = document.getElementById("no-of-people");
noInput.addEventListener("input",calculateTip);

// document.getElementById("tip").textContent = '%';

function calculateTip(){
    let bill = parseFloat(billInput.value);
    // let tipPercent = 15;
   let tipPercent = document.getElementById("tip").value;
   // let noOfPeople = 1;
    let noOfPeople = document.getElementById("no-of-people").value;

    billInput.value = bill.toFixed(2);
    // billInput = parseFloat(bill.value);
    // tipInput.value =  document.getElementById("tip").textContent = '%';
    // noInput.value = no-of-people.toFixed(2);
  //   if(tipPercent <=10) {
  //     document.getElementById('serviceRating').innerHTML = "Very Poor"
  //   document.getElementById("serviceRating").style.color = "lightblue";
  // }else {
  //   document.getElementById('serviceRating').innerHTML = "0-100"
  //   document.getElementById("serviceRating").style.color = "red";
  // }


    let totalTip = parseFloat((bill * (tipPercent/100)).toFixed(2));
    let total = parseFloat((bill + totalTip).toFixed(2));

    let tipPerPerson = (totalTip / noOfPeople).toFixed(2);
    let totalPerPerson = (total / noOfPeople).toFixed(2);

    // document.getElementById("tip-amount").textContent = `${totalTip}`;
    // document.getElementById("total-amount").textContent = `\$ ${total}`;
    //
    // document.getElementById("tip-percent").textContent = `${tipPercent}%`;
    // document.getElementById("split-num").textContent = noOfPeople;

    document.getElementById("tip-per-person").textContent = `${tipPerPerson}`;
    document.getElementById("total-per-person").textContent = `${totalPerPerson}`;
}
calculateTip();
