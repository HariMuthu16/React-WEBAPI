import Color from "./Color";


function Home(){
    return <h1 >Welcome to My Website !!!!!</h1>
}
export default Home;



// import { useState } from "react";


// function User(){

//   const [user,setUser] = useState({

// name:"Muthu",
// age:40,
// gender:"Female",
// isMarried : true,
// country : "India"

// })
// function handleInput(e){
// const name = e.target.name
// const value = e.target.type == "checkbox" ?  e.target.checked :  e.target.value

// // setUser({...user, [name] : value})
// setUser((prv)=>{ return { ...prv,[name]:value }  })
// }



// return(<>



// <table>
// <tbody>

// <tr>
//     <td> Name :{user.name}</td>
//     <td></td>
// </tr>
// <tr>
//     <td> Age :{user.age}</td>
//     <td></td>
// </tr>
// <tr>
//     <td> Gender :{user.gender}</td>
//     <td></td>
// </tr>
// <tr>
//     <td> IsMarried :{user.isMarried ? "Married" : "UmMarried"} </td>
//     <td></td>
// </tr>
// <tr>
//     <td> Counter :{user.country}</td>
//     <td></td>
// </tr>

// </tbody>
// </table>


//  <lable> Enter Name : </lable>
//     <input type="text" name="name" onChange={handleInput}/>
//     <lable> Enter Age : </lable>
//     <input type="number" name="age" onChange={handleInput}/> 
//     <div>
// <lable htmlfor="male">
//     <input type="radio" id="male" onChange={handleInput} name="gender" value="Male"/>
//     Male
// </lable>
// <lable htmlfor="male">
//     <input type="radio" id="female" onChange={handleInput} name="gender" value="Female"/>
//     Female
// </lable>
// <input type="checkbox" name="isMarried" onChange={handleInput}/>
// Married

//     </div>
//     <select name="country" onChange={handleInput}>
// <option value="">Select</option>
// <option value="India">India</option>
// <option value="US">US</option>
// <option value="London">London</option>
// <option value="Spain">Spain</option>
//         </select>


// </>)
// }

// export default User;

// import { useState } from "react"


// function Form(){

// //    const[name,setName] =  useState("");
// //    const[age,setAge] =  useState("");
// //  console.log(name,age)



// const[inputs,setInputs] =  useState({country : "India"});

// function handleInput(e){

// const name = e.target.name
// const value = e.target.value

// setInputs((pre)=>{ return{  ...pre , [name] : value} })

// }
// function handle(e){
//     e.preventDefault();
//     console.log("Submited",inputs)
    
// }
//     return(
//     <>

//     <h1>Form</h1>
//      <form onSubmit={handle}>
//     {/* <lable> Enter Name : </lable>
//     <input type="text" onChange={ (e)=>{ setName(e.target.value) } } />
//     <lable> Enter Age : </lable>
//     <input type="number" onChange={ (e)=>{ setAge(e.target.value) } } /> */}

//     <lable> Enter Name : </lable>
//     <input type="text" name="name" onChange={ handleInput} />
//     <lable> Enter Age : </lable>
//     <input type="number" name="age" onChange={handleInput } /> 
//     <lable> Enter Email : </lable>
//     <input type="text" name="email" onChange={ handleInput} /> 
//     <lable> Enter Email : </lable>
//     <select name="country" onChange={ handleInput} value={inputs.country} >
// <option value="">Select</option>
// <option value="India">India</option>
// <option value="US">US</option>
// <option value="London">London</option>
// <option value="Spain">Spain</option>
//         </select>



//     <input type="submit" value="Save Details"/>
//     </form>


//     </>
    
//     )
// }


// export default Form


// ******************  G R 
// import { useState } from "react";
// import Result from './Result';


// const random = Math.floor(Math.random()*10) + 1;

// function App() {

//     const [term,setTerm] =  useState("")
   

// function handle(e){
//   setTerm(e.target.value)
// }

//   return (
//     <div className="App">
//       <h1>Enter Between 1 to 10 (answer : {random})</h1>
//       <lable> Enter Number : </lable>
//       <input type="text" name="term" onChange={handle} />
//   <Result  random={random}  term={term}/>
//     </div>
//   );
// }

// export default App;

// function Result({random,term}){

//     let result;

// if(term){

// if(term<random){
//   result = 'Guess Higher'
// }
// else if(term>random){
//     result ='Guess Lower'
// }
// else if(term == random){
//     result ='Yahooo!!!!'
// }
// else{
//      result = 'Enter only Numbers'
//         }
// }
// return <h3>Your Guess : {result}</h3>
// }

// export default Result;

//*********************** */


// function Car(props){

//     const {info} = props
//     const{color,brand} = info
  
//   const text = `This is ${color} ${brand} Car Component`;
  
//   return(
  
//   <h1>{text}</h1>
  
//   );
  
//   }
  
//   export default Car;
// import { useState,useEffect } from "react";



// function Color(){


//   const [c,setC] = useState('Blue')

//   const [color,setColor] = useState('Black')
//   const [brand,setBrand] = useState('BMW')
//   const [year,setYear] = useState('2030')

// const [car,setCar] = useState(
//     {
//       color : "Red",
//       brand: "F1",
//       year :"2020"

//     }
// )
// function update(){

//     setCar((previous)=>{
//        return{...previous, brand:"Audi"}
//     })
// }
// ///************** */
// const [list,setList] = useState([]);
// const [count,setCount] = useState(1);
// function add(){

// const carName = "Car" + count;
// setList((previous )=>{ return[ ...previous, carName ] } )
// setCount(pre=>{ return   pre+1 })
// }
// // ****************
// const [count1,setCount1] = useState(1);
// useEffect(()=>{

// console.log("Rendered");
// check()

// },[count1])
// function render(){
// setCount1((pre)=>{ return pre+1})
// }
// function check(){
//     if(count1>5){
//         setCount1(1)
//     }
// }
// return (
// <>
// <p>Page  Rendered {count1} times !!</p>
// <button onClick={render}>CLick</button>

// <hr/>
// <h1>My Favorite Color is {c}</h1>
// <button onClick={()=> {setC('Green')}}>Change</button>
// <h1>Car</h1>
// <p>Color : {car.color}</p>
// <p> Brand : {car.brand}</p>
// <p> Year :{car.year} </p>
// <button onClick={update}>Change Car</button>

// <hr/>

// <button onClick={add}>Add Cars</button>
// <ul>
//     { list.map( (it,index)=> <li key={index}>{it}</li>  ) }
// </ul>




// </>
// )
// }
// export default Color;
// import Car from "./Car";

// function Shop(){
//     const brand = "MuthuLakshmi";
//     const color = "Green";
//     const info = {
//         brand : "MuthuLakshmi",
//      color : "Red"
//     }
//     const carList = [
//        { brand : "MuthuLakshmi", color : "Green"},
//        { brand : "Sorna", color : "Pink"},
//        { brand : "Bharu", color : "Blue"},

//     ]
//     return(
//         <>
//          <h1>This is My Car Shop </h1>
//          <Car info = {info}/>

// <ul>
//      { carList.map((info1)=> <li><Car info = {info1}/></li> )}      

// </ul>

//         </>
//     );
//     }
    
//     export default Shop;