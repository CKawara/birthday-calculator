// Initialize Days of the week array
const days = [];
days[0] = "Saturday"
days[1] = "Sunday"
days[2] = "Monday"
days[3] = "Tuesday"
days[4] = "Wedsday"
days[5] = "Thursday"
days[6] = "Friday"


function getDay(){
    
    var dd = parseInt(document.getElementById('day').value);
    console.log(dd);
    var mm = parseInt(document.getElementById('month').value);
    console.log(mm);
    var year = parseInt(document.getElementById('year').value);
    console.log(year);
    var cc = parseInt(document.getElementById('year').value.slice(0, 2));
    console.log(cc);
    var yy = parseInt(document.getElementById('year').value.slice(2, 4));
    console.log(yy);
    var gender = document.getElementById('gender').value;
    console.log(gender);



}
