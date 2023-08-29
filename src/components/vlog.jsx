import React from "react";

function Vlog(props){
    return(
        <div>
            <h1>{props.title}</h1>
            <p>{props.content}</p>
        </div>
    );
}

export default Vlog;