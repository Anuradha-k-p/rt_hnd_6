import { useContext } from "react";
import { Store } from "./StoreCompo";
import { useNavigate } from "react-router-dom";


function NewStudent(){
   const ContextData =  useContext(Store);
   console.log(ContextData);
     const Navi = useNavigate()

   const NewObj = {
    name :'',
    age :'',
    course :'',
    batch : ''
   }


   


   const handleChange = (e)=>{
    NewObj[e.target.name] = e.target.value;

 }
 const handleSubmit = () => {
    console.log(NewObj);
    ContextData.Data.push(NewObj);
    Navi('/student')


 }
 
    return(
        <>
        <h1>New Student </h1>
        <div className="display1">
        <div className="display">
        <label>Name</label>
        <input type="text" name="name" placeholder="enter name" onChange={handleChange}/><br/>
        <label>Age</label>
        <input type="number" name="age" placeholder="enter Age" onChange={handleChange}/><br/>
        </div>
        <div className="display"> 
        <label>Course</label>
        <input type="text" name="course"  placeholder="enter Course" onChange={handleChange}/><br/>
        <label>Batch</label>
        <input type="text" name="batch"  placeholder="enter batch"onChange={handleChange} /><br/>
        </div>
        </div>


        <div className="display">
        <button onClick={handleSubmit}>Update</button>
        <button onClick={()=> Navi('/student')}>Go Back</button>
        </div>




        </>
    )
}
export default NewStudent;