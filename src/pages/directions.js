import React from 'react'
import styled from 'styled-components'
import { StaticImage } from "gatsby-plugin-image"
import SEO from "../components/seo"

 const TITLE = styled.h1`
  color: #52bc77;
  text-align: center;
  padding: 1rem 0 1rem 0;
  font-family: 'Rubik'; 
`
const P = styled.p`
  color: black;
  font-size: calc(13px + (18 - 4) * ((100vw - 200px) / (1600 - 300))); 
    font-family: 'Rubik';
    padding-top: .5rem;
text-Align: center;
`
 const buttonStyle = {
   backgroundColor: "#52bc77",
   borderRadius: "12px", 
   border: "ridge white 2px", 
 }  
 const buttonDivStyle = {
     display: "flex",
     justifyContent: "center"
 }

const Directions = () => {

    return (

<div>
 <SEO 
       title="Directions to Kring's"
       description="Maps and directions to Kring's Cottages"
       />

<header>
    <TITLE>Maps and Directions</TITLE>
        <P>Krings Cottages is located approximately 3.5 hours East of Toronto and 2 hours West of Ottawa. </P>
        <P>The village of Plevna is just 3 miles away and it offers a Freshmart grocery store, North of 7 restaurant, Home Hardware, Bait Shops and a Beer and Liquor Store.</P>
</header>

<div className="directionsPics">
    <div>
<StaticImage src="../../src/images/Ottawa-Krings.jpg" className="styledDirectionsPics" placeholder="blurred" alt="Map of distance and directions from Ottawa to Kring's Cottages"  />

        
        <P>Ottawa to Kring's</P>
             <div style={buttonDivStyle}>
<a href="https://www.google.ca/maps/dir/Ottawa,+Ontario/Krings+Ln,+North+Frontenac,+ON/@45.1645356,-77.5994248,8z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x4cce05b25f5113af:0x8a6a51e131dd15ed!2m2!1d-75.6971931!2d45.4215296!1m5!1m1!1s0x4cd3aecdf510d1f9:0xbcbc7ea0fb63201d!2m2!1d-77.0287976!2d44.9398322!3e0" target="_blank" rel="noreferrer"><button className="btn" style={buttonStyle} type="button">Get Directions</button></a>
    </div>
</div>


<div>
<StaticImage src="../../src/images/Toronto-Krings.jpg" className="styledDirectionsPics" placeholder="blurred" alt="Map of distance and directions from Toronto to Kring's Cottages"  />

   <div>
        <P>Toronto to Kring's</P>
        <div style={buttonDivStyle}>
<a href="https://www.google.ca/maps/dir/Toronto,+Ontario/Krings+Ln,+North+Frontenac,+ON/@44.4275792,-79.3090486,8z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x89d4cb90d7c63ba5:0x323555502ab4c477!2m2!1d-79.3831843!2d43.653226!1m5!1m1!1s0x4cd3aecdf510d1f9:0xbcbc7ea0fb63201d!2m2!1d-77.0287976!2d44.9398322!3e0" target="_blank" rel="noreferrer"><button className="btn" style={buttonStyle} type="button">Get Directions</button></a>

</div>
        </div>
           
    </div>

</div>

</div>

    );

}
export default Directions;