import React, {useEffect, useState} from "react";
import axios from "axios";
const Employees = () => {

    const url = "https://6edeayi7ch.execute-api.us-east-1.amazonaws.com/v1/examen/employees/:tu_nombre"
    useEffect(()=>{
        axios.get(url).then(({data}) => {
            console.log(data);
            
        }).catch(error =>{
            console.log(error);
            
        })
    })
    return(
        <div><h2>Employees</h2></div>
    )
}

export default Employees