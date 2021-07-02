
import React, { useState } from "react"
import { graphql } from "gatsby"
import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import styled from 'styled-components'
import CottageDetailsTwoBedroom from '../components/cottagedetailstwobedroom'
import CottageDetailsThreeBedroom from '../components/cottagedetailsthreebedroom'
import CottageDetailsLeosPlace from '../components/cottagedetailsLeosPlace'



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





export default function CottageTemplate({data}) {



  //establish state
  const [modalState, setModalState] = useState(false);
  const [selectedImg, setSelectedImg] = useState(getImage(data.markdownRemark.frontmatter.samplePics[1].image));
  const [imageAlt, setImageAlt]= useState('placeholder');
console.log('states', selectedImg);

console.log('Cottage-details data', data);
//onClick of a cottage detail picture

  const setSelection = (index) => {
    //check the viewport width
 const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
 console.log('vw', vw);
 //only open modal if vw is greater than 600px
if (vw > 600) {
    console.log('index', index);
    console.log("thepicture", data.markdownRemark.frontmatter.samplePics[index])
    
    let image = getImage(data.markdownRemark.frontmatter.samplePics[index].image);
    setSelectedImg(image);
    
     setModalState(!modalState);
}
  }
//on click of modal exit button
  const resetModal = () => {
    setModalState(!modalState);
     //setSelectedImg();
    // setImageAlt('');
  }
  const mr = data.markdownRemark.frontmatter;
 //map over all queried images and dynamically return as GatsbyImage elements
 console.log('data', data);
 console.log('dataMarkdownRemark', data.markdownRemark)
 console.log('mister', mr); 

 //make an array of the GatsbyImages
 const samplePics = mr.samplePics.map((pic, i) => { 
   console.log('pic',pic);
   let image = getImage(pic.image);
   console.log('image',image);
   let picAlt = pic.imageAlt;
  return <GatsbyImage key={picAlt} className="styledSamplePics" image={image} alt={picAlt} onClick={() => {setImageAlt(picAlt); 
    setSelection(i)}} />
})

 const buttonStyle = {
   backgroundColor: "#52bc77",
   borderRadius: "12px", 
   border: "ridge white 2px", 
  marginTop: "3rem"
 }  
 const buttonDivStyle = {
     display: "flex",
     flexDirection: "row",
     justifyContent: "center"
 }

  return (
    <section>
  <div>
          <TITLE>{mr.title}</TITLE>
          <P>{mr.title === "The Elms" ? "Two-Bedroom Cottage" : "Three-Bedroom Cottage"}</P>

  </div> 
 
  <div className={modalState ? "modalOpen" : "modalClosed"}>

<GatsbyImage image={selectedImg} alt={imageAlt}/> 

 
<span role="button" tabIndex={0} className="modalX" onClick={resetModal} onKeyDown={resetModal}>X</span>  
  </div>
  
 <div className="samplePics">
 {samplePics} 

 </div>


  
       
   
   <div>
     {mr.title === "The Elms" ? <CottageDetailsTwoBedroom /> : mr.title === "Leos Place" ? <CottageDetailsLeosPlace /> : <CottageDetailsThreeBedroom /> }
   </div>
   <div style={buttonDivStyle}>
       <Link to="/cottages" className="nav-link" ><button type="button" className="btn" style={buttonStyle}>Cottages</button></Link>

       <Link to="/rates" className="nav-link" ><button type="button" className="btn" style={buttonStyle}>Rates</button></Link>
   </div>
    
    </section>
  )
}
//samplePics returns an array of image objects
export const pageQuery = graphql`
  query($slug: String!) {
   markdownRemark(frontmatter: { slug: { eq: $slug } })  {
     frontmatter {
      samplePics {
        image {
          childImageSharp {
            gatsbyImageData(
              placeholder: TRACED_SVG
              quality: 50
              transformOptions: {fit: COVER}
            )
          }
        }
        imageAlt
      }
      title
    }
  }
}
`

