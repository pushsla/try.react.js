import React from "react";

import "./Cell.sass";

export default function Cell({cellState}: {cellState: any}){
    return(
        <div className="Cell">
            <span className="Cell__state">{cellState}</span>
        </div>
    );
}