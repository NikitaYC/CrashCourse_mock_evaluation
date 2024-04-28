
let employeeData = [];
async function getData(){
    try {
        const response = await fetch("https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-employees")
        const finalresponse = await response.json();
        
        displayData(finalresponse)
    } catch (error) {
        console.log(error)
    }
}
getData();

let tbody = document.getElementById("tbody");

function displayData(employees){
    employees.forEach(function(employee,index){
        let row = document.createElement('tr')
        row.innerHTML=`
        <td>${index}</td>
        <td>${employee.name}</td>
        <td>${employee.gender}</td>
        <td>${employee.department}</td>
        <td>${employee.salary}</td>`
        
        tbody.appendchild(row);
    })

}