import { useContext } from "react";
import { Store } from "./StoreCompo";
import { useNavigate, useParams } from "react-router-dom";


function EditStudent(){
   const ContextData =  useContext(Store);
   const IndexValue = useParams().id;
   console.log(IndexValue);
   console.log(ContextData);
   console.log(ContextData.Data[IndexValue]);
     const Navi = useNavigate()

   const NewObj = {
    name :ContextData.Data[IndexValue].name,
    age :ContextData.Data[IndexValue].age,
    course :ContextData.Data[IndexValue].course,
    batch :ContextData.Data[IndexValue].batch
   }


   


   const handleChange = (e)=>{
    NewObj[e.target.name] = e.target.value;

 }
 const handleSubmit = () => {
    console.log(NewObj);
    ContextData.Data[IndexValue] = NewObj;
    Navi('/student')


 }
 
    return(
        <>
        <h1>Edit Student</h1>
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
export default EditStudent;