// ###########################
// Git Lab 
// ############################
// CONST init
const MINVAL = 1;
const MAXVAL = 20;
const DEFAULT_VAL = 3.5;
const STEP=0.25
// get element DOM
var amount = document.getElementById("principal");
var rate = document.getElementById("rate");
var years = document.getElementById("years");
var rateval = document.getElementById("rate_val");

// init form values rate field
rate.setAttribute("max", MAXVAL);
rate.setAttribute("min", MINVAL);
rate.setAttribute("value", DEFAULT_VAL);
rate.setAttribute("step", STEP);
rateval.value = DEFAULT_VAL + '%';


function compute()
{
    // validation field principal
    if(!amount.value || amount.value === "0" || amount.value < 0){
  	    alert('The value of the amount is required and must be a positive number');
        amount.focus();
        return false;
    }
    // set value
	var principalVal = amount.value;
    var rateVal = rate.value;
    var yearsVal = years.value;
    var year = new Date().getFullYear() + parseInt(years.value);
	var interest = principalVal * yearsVal * rateVal /100 ;
    // inner in element html response function
	document.getElementById("result").innerHTML="If you deposit <mark>"+principalVal+",\</mark><br\>at an interest rate of <mark>"+rateVal+"%\</mark><br\>You will receive an amount of <mark>"+interest+",\</mark><br\>in the year <mark>"+year+"\</mark><br\>"
}

// add reset form
function reset()
{
    amount.value = '';
    rate.value = DEFAULT_VAL;
    rateval.value = DEFAULT_VAL + '%';
    years.value = 1;
    document.getElementById("result").innerHTML = '';
}
// function ret val range field
function updateRate() 
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval + '%';
}