var form=document.getElementById('empForm');
form.addEventListener('submit',myFn);
console.log(form);
function myFn(e){
        e.preventDefault();

        var name=document.getElementById('Name').value;
        var id=document.getElementById('EmpId').value;
        var role=document.getElementById('role').value;
        var date=document.getElementById('dateOfJoining').value;

        if(name){
            console.log(name);
        }
        else{
            document.getElementById('nameError').textContent='Name not entered';
        }
        if(id){
            console.log(id);
        }
        else{
            document.getElementById('IdError').textContent='Employee ID not entered';
        }
        if(role){
            console.log(role);
        }
        else{
            document.getElementById('roleError').textContent='Role not selected';
        }
        if(date){
            console.log(date);
            
        }
        else{
            date=new Date();
        }

        if(name && id && role){
            console.log(name,id,role,date);
            var empObject={
                EmpName:name,
                EmpRole:role,
                EmpJoinDate:date
            }
            localStorage.setItem(id,JSON.stringify(empObject));
  
        }

        var retrieved=localStorage.getItem('2201');
        console.log(JSON.parse(retrieved));
}

var formSearch=document.getElementById('SearchForm');
formSearch.addEventListener('click',SearchFn);
console.log(formSearch);

function SearchFn(e){
        e.preventDefault();

        var id=document.getElementById('EmpId');
        var retrieved=localStorage.getItem(id);
        console.log(JSON.parse(retrieved));

}
