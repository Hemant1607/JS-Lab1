var formSearch=document.getElementById('SearchForm');
formSearch.addEventListener('submit',SearchFn);
console.log(formSearch);

function SearchFn(e){
        e.preventDefault();

        var id=document.getElementById('EmpId').value;
        var retrieved=localStorage.getItem(id);
        if(retrieved==null){
            formSearch.reset();
            alert("Invalid Employee ID");
            
        }
        var values=JSON.parse(retrieved);
        document.getElementById('EmpName').value=values.EmpName;
        document.getElementById('RoleName').value=values.EmpRole;
        document.getElementById('Date').value=values.EmpJoinDate;
        console.log(values.EmpName);

}