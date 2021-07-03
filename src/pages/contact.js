import React from 'react'
import styled from 'styled-components'
import { StaticImage } from "gatsby-plugin-image"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelopeSquare, faMapMarkerAlt, faPhoneSquareAlt } from '@fortawesome/free-solid-svg-icons'

 const TITLE = styled.h1`
  color: #52bc77;
  text-align: center;
  padding: 1rem 0 0 1rem;
  font-family: 'Rubik'; 
`
const P = styled.p`
  color: black;
  font-size: calc(13px + (18 - 4) * ((100vw - 200px) / (1600 - 300))); 
    font-family: 'Rubik';
    padding-top: .5rem;
text-Align: center;
`
const contactBannerStyle = {
    width: "100%",
   borderRadius: "12px", 
   border: "ridge black 2px", 
  
 } 
 const bannerContainerStyle = {
     margin: "0 auto",
     width: "85%",
 }

const Contact = () => {


    return (

<div>


<header>
    <TITLE>Contact</TITLE>
        <P>Give us a call</P>
        <P>We'd love to hear from you</P>
</header>

  <div style={bannerContainerStyle}>
<StaticImage src="../../src/images/Contact-banner.jpg" placeholder="tracedSVG" alt="Dawn view of the dock with boats" style={contactBannerStyle} />

    </div>

<section className="contactInfoGrid">
<div style={{textAlign: "center"}}>
<P><FontAwesomeIcon  style={{fontSize: "2rem", color: "black"}} icon={faMapMarkerAlt} /> Address</P>
<p>John and Mindy Kring</p>
<p>1040 Kring's Lane, </p>
<p>Plevna, Ontario, Canada </p>
<p>K0H 2M0</p>
</div>

<div style={{textAlign: "center"}}>
<P><FontAwesomeIcon  style={{fontSize: "2rem", color: "black"}} icon={faPhoneSquareAlt} /> Phone</P>
<P> (613)479-0028</P>
</div>

<div style={{textAlign: "center"}}>
<P><FontAwesomeIcon  style={{fontSize: "2rem", color: "black"}} icon={faEnvelopeSquare} /> Email</P>
<P><a
          style={{ color: "black" }}
          href="mailto:krings_cottages@yahoo.com"
          target="_blank"
          rel="noopener noreferrer"
        >
           krings_cottages@yahoo.com
        </a>   </P>
</div>




</section>

</div>


    );




}
export default Contact;