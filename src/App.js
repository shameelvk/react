import React,{useState} from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Card from "./components/Card";
import "./App.css"
import CardData from "./components/CardData";
export default function MyApp(){


       function getfevimg(imgsrc){
              console.log(imgsrc)
       }
       let card= CardData.map((carditeam)=>
      {
       return(
              <Card shameel={{
                     imgsrc:carditeam.imgsrc,
                     name:carditeam.placeName,
                     phone:carditeam.placeDiscription,
     
              }}
              cardFn={getfevimg = getfevimg()}
              />
       );
      });

 return(<>
 <Header/>
 <Hero/>
 <div className="cardcontainer">
       <h1>Destination</h1>
       <div className="container-flex">
              <div className="card-flex">
              {card}
              </div>
              <aside>
                     <h2>Favorites</h2>
              </aside>
       </div>

 </div>

 
 <Footer/>
 
 </>
    
 )
    
}





