import React from "react";
let message="hello world";

let styles={
    color:"white",

}

function Hero(){
    return(
        <div className="hero"><h3 style={styles}>{message}</h3></div>
    )
}
export default Hero;