var monthlySalary = 3000;
var balance = salary;
var saving = 0;
var month = 1; 



function spend(expense){
    alert('your spending' + expense);
    if(monthlySalary >= expense){
     balance -=expense;
    documents.getElementsById("balance").textContent = balance;
    }else{
        alert('ninja put that down you cant affod this');
        }
}
