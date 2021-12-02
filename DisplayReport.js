var displayForm=document.getElementById('DisplayForm');
//displayForm.clear();
var id=localStorage.getItem('value');
var retrieved=localStorage.getItem(id);
if(retrieved==null){
    formSearch.reset();
    alert("Invalid Employee ID");
    
}
var values=JSON.parse(retrieved);

document.getElementById('Name').value=values.EmpName;
document.getElementById('ShowEmpId').value=id;
document.getElementById('ShowRole').value=values.EmpRole;
document.getElementById('ShowDate').value=values.EmpJoinDate;
var annualSalary;

function TaxCalc(){
    document.getElementById('AnnualSalary').value=annualSalary;
    var taxIncome=annualSalary-localStorage.getItem('invest');
    document.getElementById('TaxIncome').value=taxIncome;
    var year=localStorage.getItem('taxYear');
    var taxPercent;
    if(year==1){
        if(taxIncome<=250000){
            taxPercent=0;
        }
        else if(taxIncome<=500000){
            taxPercent=10;
        }
        else if(taxIncome<=1000000){
            taxPercent=20;
        }
        else{
            taxPercent=30;
        }
    }
    else{
        if(taxIncome<=250000){
            taxPercent=0;
        }
        else if(taxIncome<=500000){
            taxPercent=5;
        }
        else if(taxIncome<=1000000){
            taxPercent=20;
        }
        else{
            taxPercent=30;
        }
    }
    document.getElementById('TaxPayable').value=(taxPercent/100)*taxIncome;
    document.getElementById('NetSalary').value=annualSalary-((taxPercent/100)*taxIncome);
}


if(values.EmpRole=="Junior Software Developer"){
    document.getElementById('Basic').value='20000';
    document.getElementById('Bonus').value='5%';
    annualSalary=1.05*20000*12;
    TaxCalc();
}
else if(values.EmpRole=="Senioe Software Developer"){
    document.getElementById('Basic').value='30000';
    document.getElementById('Bonus').value='10%';
    annualSalary=1.1*30000*12;
    TaxCalc();
}
else if(values.EmpRole=="Junior Quality Analyst"){
    document.getElementById('Basic').value='20000';
    document.getElementById('Bonus').value='5%';
    annualSalary=1.05*20000*12;
    TaxCalc();
}
else if(values.EmpRole=="Senior Quality Analyst"){
    document.getElementById('Basic').value='30000';
    document.getElementById('Bonus').value='10%';
    annualSalary=1.1*30000*12;
    TaxCalc();
}
else if(values.EmpRole=="Business Analyst"){
    document.getElementById('Basic').value='35000';
    document.getElementById('Bonus').value='7%';
    annualSalary=1.07*35000*12;
    TaxCalc();
}
else if(values.EmpRole=="Team Lead"){
    document.getElementById('Basic').value='50000';
    document.getElementById('Bonus').value='15%';
    annualSalary=1.15*50000*12;
    TaxCalc();
}
else if(values.EmpRole=="Manager"){
    document.getElementById('Basic').value='100000';
    document.getElementById('Bonus').value='20%';
    annualSalary=1.2*100000*12;
    TaxCalc();
}