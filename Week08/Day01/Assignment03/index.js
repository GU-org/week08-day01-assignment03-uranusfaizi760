function bmiCalc(w,h){
    let bmi = w / (h * h);

    return bmi;

}

var weight=prompt("Please enter you weight in kg");
var height=prompt("Please enter your height in m");
let bmi=bmiCalc(weight,height);
alert("Your bmi is "+bmi);