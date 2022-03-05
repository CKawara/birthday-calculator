// Initialize Days of the week array
const days = [];
days[0] = "Saturday"
days[1] = "Sunday"
days[2] = "Monday"
days[3] = "Tuesday"
days[4] = "Wedsday"
days[5] = "Thursday"
days[6] = "Friday"

var form = document.getElementById('form')

//function to calculate day of the week
form.addEventListener('submit', function getDay(event){
    event.preventDefault(); // Prevents the form from autosubmitting

    var dd = parseInt(document.getElementById('day').value);
    if (dd < 0 || dd > 31){
        alert("Invalid!! Day is out of range")
    };
    var mm = parseInt(document.getElementById('month').value);
    if (mm < 0 || mm > 12){
        alert("Invalid!! Month is out of range")
    };
    var year = parseInt(document.getElementById('year').value);
    if (year>= 2000) {dd+=1} //solves the issues of the result being one day behind in years after 2000
    var cc = parseInt(document.getElementById('year').value.slice(0, 2));
    console.log(cc);
    var yy = parseInt(document.getElementById('year').value.slice(2, 4));
    console.log(yy);
    var gender = document.getElementById('gender').value;
    console.log(gender);
    
    //Day of the week calculation
    var dayOfTheWeek = Math.trunc((((cc/4)-2*cc-1) + ((5*yy/4))+((26*(mm+1)/10))+dd) %7)
    document.getElementById('result1').value = days[dayOfTheWeek];
    
    // if (gender == "Male"){
    //     document.getElementById('akan').value = "mannn";
    // }else if (gender == "Female"){
    //     document.getElementById('akan').value = "mamaaa";
    // }
})

