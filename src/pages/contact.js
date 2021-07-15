import React from 'react'
import styled from 'styled-components'
import { StaticImage } from "gatsby-plugin-image"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelopeSquare, faMapMarkerAlt, faPhoneSquareAlt } from '@fortawesome/free-solid-svg-icons'
import SEO from "../components/seo"

 const TITLE = styled.h1`
  color: #52bc77;
  text-align: center;
  padding: 1rem 0 0 1rem;
  font-family: 'Rubik'; 
`
const P = styled.p`
  color: #52bc77;
  font-size: calc(16px + (18 - 4) * ((100vw - 200px) / (1600 - 300))); 
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
 const paraFontWeightStyle = {
   fontSize: "calc(13px + (18 - 4) * ((100vw - 200px) / (1600 - 300)))"
 }

const Contact = () => {


    return (

<div>
 <SEO 
       title="Contact Kring's"
       description="A page of email, telephone and social media contacts for Kring's Cottages"
       />

<header>
    <TITLE>Contact</TITLE>
        <p style={{fontSize: "calc(13px + (18 - 4) * ((100vw - 200px) / (1600 - 300)))", textAlign: "center"}}>Give us a call</p>
        <p style={{fontSize: "calc(13px + (18 - 4) * ((100vw - 200px) / (1600 - 300)))", textAlign: "center"}}>We'd love to hear from you</p>
</header>

  <div style={bannerContainerStyle}>
<StaticImage src="../../src/images/Contact-banner.jpg" placeholder="blurred" alt="Dawn view of the dock with boats" style={contactBannerStyle} />

    </div>

<section className="contactInfoGrid">
<div style={{textAlign: "center"}}>
<P><FontAwesomeIcon  style={{fontSize: "1.6rem", color: "black"}} icon={faMapMarkerAlt} /> Address</P>
<p style={paraFontWeightStyle}>John and Mindy Kring</p>
<p style={paraFontWeightStyle}>1040 Kring's Lane, </p>
<p style={paraFontWeightStyle}>Plevna, Ontario, Canada </p>
<p style={paraFontWeightStyle}>K0H 2M0</p>
</div>

<div style={{textAlign: "center"}}>
<P><FontAwesomeIcon  style={{fontSize: "1.6rem", color: "black"}} icon={faPhoneSquareAlt} /> Phone</P>
<a href="tel:+1613-479-0028" style={ {fontSize: "calc(13px + (18 - 4) * ((100vw - 200px) / (1600 - 300)))", color: "black"}}>1-613-479-0028</a>
</div>

<div style={{textAlign: "center"}}>
<P><FontAwesomeIcon  style={{fontSize: "1.6rem", color: "black"}} icon={faEnvelopeSquare} /> Email</P>
<p style={paraFontWeightStyle}><a
          style={{ color: "black" }}
          href="mailto:krings_cottages@yahoo.com"
          target="_blank"
          rel="noopener noreferrer"
        >
           krings_cottages@yahoo.com
        </a>   </p>
</div>




</section>

</div>


    );




}
export default Contact;