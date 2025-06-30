let Users=[]

const getUser=()=>{
    let tbl = "";
    Users.map((val,index) => {
        tbl +=`
            <tr>
            <td>${val.grid}</td>
            <td>${val.username}</td>
            <td>${val.userage}</td>
            </tr>
        `
    })
    document.getElementById('data').innerHTML=tbl;
}


const saveRecord = ()=>{
    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;

    let obj = {
        grid:Math.floor(Math.random()*10000),
        username : name,
        userage: age 
    }
    
    Users.push(obj) 
    alert("successfully added");
    document.getElementById('name').value="";
    document.getElementById('age').value="";
    getUser();

} 
;