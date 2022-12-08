import React from "react";



export default function Header(){
    return(
        <header>
            <div className="logo" >Logo</div>
            <ul className="nav display-flex">
               <li><a href="#">Home</a></li>
               <li><a href="#">About</a></li>
               <li><a href="#">Contact</a></li>
            </ul>
        </header>
        );
}
