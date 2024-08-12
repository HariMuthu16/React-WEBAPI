import axios from "axios";
import { Button } from "bootstrap";
import { useEffect, useState } from "react";


function Employee(){

  const [employees,setEmployees] =  useState([])
  const [name,setName] =  useState("")
  const [userName,setUserName] =  useState("")
  const [email,setEmail] =  useState("")
  const [password,setPassword] =  useState("")
  const [phone,setPhone] =  useState("")
  const [id,setId] =  useState("")

useEffect(  ()=>{ 
 
(async ()=> await getEmployees())();

},[]);



// CLEAR ALL FIELDS 

async function clear(){
    setEmail('');
    setName('');
    setUserName('');
    setPhone('');
    setPassword('');
    setId('')
}

//GET  ALL EMPLOYEES

async function getEmployees(){
 
    const response =  await axios.get("http://localhost:5272/api/Employee/GetEmployees");
     setEmployees(response.data);
  console.log(response.data);
 }

 // ADD Employee

 async function addEmployee(e){
 e.preventDefault();
try{
    await  axios.post("http://localhost:5272/api/Employee/AddEmployee",{

        Name : name,
        UserName : userName,
        Email: email,
        Password : password,
        Phone : phone
       });
        alert("Success");
        getEmployees()
        clear()
}
catch(error){
    console.log(error)
}
}

async function editEmployee(item){
setId(item.id)
setName(item.name)
setUserName(item.userName)
setEmail(item.email)
setPassword(item.password)
setPhone(item.phone)
    
}
async function updateEmployee(e){
try{e.preventDefault();
       await axios.patch(`http://localhost:5272/api/Employee/UpdateEmployee/${id}`,{
        Id :id,
        Name : name,
        UserName : userName,
        Email: email,
        Password : password,
        Phone : phone
    });
        alert("Update Success");
        getEmployees()
        clear()
}
        catch(error){
            console.log(error)
        }
}
async function deleteEmployee(id){
    
   if( window.confirm("Are You Sure ??? ") == true){

    await axios.delete(`http://localhost:5272/api/Employee/DeleteEmployee/${id}`);
    alert("Employee Deleted");
    getEmployees()

   }
        
    }


return(<>
<form>
    <div>
    <label>Name</label>
    <input type="text" name="Name" value={name} onChange={(e)=>setName(e.target.value)}/>
</div>
<div>
    <label>UserName</label>
    <input type="text" name="UserName" value={userName} onChange={(e)=>setUserName(e.target.value)}/>
</div>
<div>
    <label>Email</label>
    <input type="email" name="Email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
</div>
<div>
    <label>Password</label>
    <input type="text" name="Password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
</div>
<div>
    <label>Phone</label>
    <input type="number" name="Phone" value={phone} onChange={(e)=>setPhone(e.target.value)}/>
</div>
 { id == 0 ? 
    <button type="submit" onClick={addEmployee}>Add Employee</button>
    : 
    <button type="submit" onClick={updateEmployee}>Update Employee</button>
 }


</form>

<table>
<thead>
    <tr>
        <th>Sr.No </th>
        <th>Name</th>
        <th>UserName</th>
        <th>Email</th>
        <th>Password</th>
        <th>Phone</th>
    </tr>
</thead>
<tbody>

 {
employees.map(

(item,index)=>{   
return(
    <tr key={index}>
    <td>{index +1}</td>
    <td>{item.name}</td>
    <td>{item.userName}</td>
    <td>{item.email}</td>
    <td>{item.password}</td> 
    <td>{item.phone}</td> 
    <td><button type="button" onClick={ ()=> editEmployee(item)}>Edit</button></td>
    <td><button type="button" onClick={ ()=> deleteEmployee(item.id)}>Delete</button></td>
</tr>

)
   
}
)


 }
</tbody>
</table>


</>)
}

export default Employee;


//  const getemp = ()=>{
//      axios.get("http://localhost:5272/api/Employee/GetEmployees")
//     .then( (result)=>{ 
//       setEmployees(result.data)
//     });
//        console.log(result.data)
// }