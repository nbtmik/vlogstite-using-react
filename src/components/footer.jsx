import React from "react";

function Footer(){
const d = new Date();
const year=d.getFullYear();
    return(
       <footer>
        <p>copyright @{year}</p>
       </footer>
    )
}

export default Footer