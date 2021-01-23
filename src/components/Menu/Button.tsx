import React from "react";

import "./Button.sass";

export interface ButtonProps
    extends React.HTMLAttributes<HTMLButtonElement>{
    children: React.ReactNode
}

export default function Button({children, ...other}: ButtonProps){
    return(
        <button className="Menu__Button" {...other}>
            {children}
        </button>
    );
}