import React from "react";
import Project from "./project";
import {useState} from "react";
export default function Work({theme}){
let [isfullstack,setfullstack]=useState("fullstack")


 
return(
    <div className="container text-center mb-3">
        <div className="col-12 text-center">
           <h2 className="mt-5 mb-2">Proof of work</h2>
            <div className={`mt-5 mb-5 d-flex projectnames  justify-content-evenly `}>
<div className={` mt-1 ${isfullstack=="fullstack"?"fullstackactive":""}`} ><button className={ `fullstackbtn`} onClick={()=>{
  setfullstack("fullstack");
}}>Full Stack</button></div>
<div className={` mt-1 ${isfullstack=="aibased"?"ai-basedactive":""}`}><button  className="ai-basedbtn"  onClick={()=>{
  setfullstack("aibased");
}}>Ai Based</button></div>
      
            </div>
             
            <div className="mx-auto projects d-flex gap-4  ">
 {isfullstack==="fullstack" && (
             <>
<Project description="A project where players can connect each other by simple chat in a single room.This project is based upon the metaspace and each player can get other player's positions or movements in realtime "
name="metaverse"
logo="https://i.pinimg.com/originals/53/ff/a4/53ffa4da275525f318dbcab1c0b854af.jpg"
github="https://github.com/sahilsheikh230/metaverse-frontend"
technologies={["React","Express","Socket.io","Phaser","Tilemaps"]}
url="https://whimsical-creponne-95102b.netlify.app/"
theme={theme}></Project>







<Project
 description="A full-stack Zerodha Clone replicating key trading platform features — includes secure authentication, stock data visualization, and responsive UI built using React, Node.js, Express, and MongoDB."
  name="Zerodha Clone" 
    url="http://zerodha1045.netlify.app"
    logo="https://zerodha.com/static/images/logo.svg"
  github="https://github.com/sahilsheikh230/zerodhaclone"
  technologies={["React","express","jwt","MongoDb"]}>
theme={theme}
  </Project>
 
  <Project
 description="A online donation system where an organisation can donate to needy and donors can send donations directly to organisations.Admin verifies the organisations"
  name="Baitumaal" 
  logo="https://baitulmaal.org/wp-content/uploads/2023/05/baitulmaal-black-white-WEB.png"
  url="https://baitulmaal.onrender.com"
  github="https://github.com/sahilsheikh230/Baitulmaal"
  technologies={["Frontend","express","MongoDB","Nodemailer","Firebase","passport"] }>
theme={theme}
  </Project>

    <Project
 description=" A full-stack travel booking platform inspired by Airbnb, featuring secure user authentication, property listings, image uploads, and interactive booking functionality. Built using React, Node.js, Express, and MongoDB for a seamless and dynamic user experience."
  name="WanderLust" 
  logo="https://th.bing.com/th/id/OIP.FbjZzVTVP3_Xy9sHQUA-xQHaHa?o=7&cb=ucfimg2rm=3&ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3"
    url="https://wanderlust-wuk4.onrender.com/listings"
  github="https://github.com/sahilsheikh230/WanderLust"
  technologies={["Frontend","express","passport","MongoDb","Cloudinary","Mapbox"]}>
theme={theme}
  </Project>
</>
 )}

  {isfullstack === "aibased" && (
            <h4>No AI-based projects added yet.</h4>
          )}
  </div>



        </div>
    </div>
)
}