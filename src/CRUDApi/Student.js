import { useContext } from "react";
import { Store } from "./StoreCompo";
import { Link, useNavigate } from "react-router-dom";


function Student(){
   const ContextData = useContext(Store);
   console.log(ContextData);
   const Navi = useNavigate()
    return(
        <>
        <h1>Student</h1>
        <button className="addbtn" onClick={()=> Navi('/newstudent')}>Add Student</button>
        <table border="1px">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Course</th>
                    <th>Batch</th>
                    <th>Change</th>
                </tr>

            </thead>
            <tbody>
                    {ContextData.Data.map((item,index) => {
                        return(
                            <tr key={index}>
                            <td>{item.name}</td>
                            <td>{item.age}</td>
                            <td>{item.course}</td>
                            <td>{item.batch}</td>
                            <td><Link to={`/editstudent/${index}`}>Edit</Link></td>
                             </tr>
                        )
                    })}

            </tbody>
        </table>
        </>
    )
}
export default Student;