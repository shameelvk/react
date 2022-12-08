import React,{useState} from "react";
import heart from "../asset/heart.svg"

export default function Card(props) {
    let flavoraites=useState("add to Favorites")//state created
    let activeClass=useState("")
    
   
    //destrutring
    let[btnTextState,setbtnTextState]=flavoraites;
    let[classState,setClassState]=activeClass;
    




    //change /modifiy the state
     function addToFlavorites(imgsrc){
        console.log(imgsrc)
        setbtnTextState((prevstate)=>{
           if(prevstate==="add to Favorites"){
            getfevimg(imgsrc);
            return "added to favorite"
           }
           else{
            return "add to Favorites"
           }
        });

        setClassState((prevclass)=>{
            if(prevclass==""){
               return "active";
            }
            else {
                return "";
            }
        })
    }

    return(
        
        <div className={`card ${classState}`}>
        <img src={heart} className="icone" onClick={addToFlavorites}/>
        <img src={props.shameel.imgsrc}/>
        <h3>{props.shameel.name}</h3>
        <p>phone:{props.shameel.phone}</p>
        <button onClick={(()=>{
            addToFlavorites(props.shameel.imgsrc)
        })}>{btnTextState}</button>
        </div>
    );
}