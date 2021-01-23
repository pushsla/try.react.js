import React from "react";

import "./Input.sass";

export interface InputProps
    extends React.HTMLAttributes<HTMLInputElement>{
}

export default function Input({...other}: InputProps){
    return(
        <input {...other} type="text" className="Menu__Input"/>
    );
}