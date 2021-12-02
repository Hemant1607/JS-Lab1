var formSearch=document.getElementById('SalaryForm');
formSearch.addEventListener('submit',ReportFn);
console.log(formSearch);

function ReportFn(e)
{
        e.preventDefault();

        var id=document.getElementById('EmpId').value;
        if(!id){
            document.getElementById('IdError').textContent='Enter Employee ID';
        }
        var investment=document.getElementById('Investment').value;
        if(!investment){
            investment=0;
        }
        var year=document.getElementById('Year').value;
        if(!year){
            document.getElementById('yearError').textContent='Assessment year not selected';
        }

        if(id && year)
        {
            localStorage.setItem('value',id);
            localStorage.setItem('invest',investment);
            localStorage.setItem('taxYear',year);

            var id=localStorage.getItem('value');
            var retrieved=localStorage.getItem(id);
            if(retrieved==null){
                formSearch.reset();
                alert("Invalid Employee ID");
            }
            else
                window.open("http://127.0.0.1:5500/DisplayReport.html");
        }

}