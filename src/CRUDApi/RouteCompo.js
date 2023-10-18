import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Student from "./Student";
import Contact from "./Contact";
import { Store } from "./StoreCompo";
import { useState } from "react";
import EditStudent from "./EditStudent";
import NewStudent from "./NewStudent";


function RouteCompo(){
    const [StudentData ,setStudentData] = useState([
        {name : "swapnali" ,age : 23, course: "MERN" ,batch : "2023"},
        {name : "swapnali" ,age : 23, course: "MERN" ,batch : "2023"},
        {name : "swapnali" ,age : 23, course: "MERN" ,batch : "2023"},
        {name : "swapnali" ,age : 23, course: "MERN" ,batch : "2023"},
        {name : "swapnali" ,age : 23, course: "MERN" ,batch : "2023"},



    ])
 return(
    <>
    <BrowserRouter>

    
    <div className="main">

    <NavLink to="/" className="child">Home</NavLink>
    <NavLink to="/student" className="child">Student</NavLink>
    <NavLink to="/contact" className="child">Contact</NavLink>

    </div>
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/student" element={ 
            <Store.Provider value={{ Data : StudentData, setData : setStudentData}}>
                <Student/>
            </Store.Provider>
        }/>
        <Route path="/contact" element={ <Contact/>}/>
        <Route path="/editstudent/:id" element={ 

            <Store.Provider value={{ Data : StudentData, setData : setStudentData}}>
                <EditStudent/>
            </Store.Provider>
         }/>

         <Route path="newstudent" element={
            <Store.Provider value={{ Data : StudentData, setData : setStudentData}}>
                <NewStudent/>
            </Store.Provider>
         }/>
    </Routes>
    
    </BrowserRouter>

    
    </>
 )
}
export default RouteCompo;