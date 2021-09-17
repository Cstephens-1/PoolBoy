import { Link } from "react-router-dom";
// import NavBar from "./NavBar";
import styled from "styled-components"



function Footer(){
    return(
        <FooterLayout>
        
            <AboutSection>
                <h2>About Us</h2>
                <NavLink path="/">Schedule your next cleaning</NavLink>
                
                
                <NavLink path="/">Investors</NavLink>
                <NavLink path="/tos">TermsOfService</NavLink>
            </AboutSection>
        
         

            <ContactSection>
                <h2>Contact Us</h2>
                <NavLink path="/">Contact</NavLink>
                <NavLink path="/">Support</NavLink>
                <NavLink path="/">Career</NavLink>
            </ContactSection>
       

            <SocialMediaSection>
            <h2>Social Media</h2>
               <NavLink path="/">FaceBook</NavLink>
               <NavLink path="/">Instagram</NavLink>
              
               <NavLink path="/">Twitter</NavLink>
            </SocialMediaSection>

        </FooterLayout>
    )
}

export default Footer

const NavLink = styled(Link)`
    margin: 8x;
    text-decoration: none;
    color: white;
    `
    const FooterLayout = styled.div`
        background-color: #242424;
        padding: 3rem 0 2rem 0;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        position: absolute;
         left: 0%;
        right: 0%;
        /* margin-top: 15px; */
        /* bottom: 0%; */
    `

const AboutSection = styled.div`
    width: 30%;
    max-width: 2000px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    /* background-color: white; */
    color: white;
    margin-left: 10px;
    left: 0;
    padding-bottom: 10px;
    top: 0;
`

const ContactSection = styled.div`
   width: 20%;
    max-width: 2000px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    /* background-color: white; */
    color: white;
    margin-left: 10px;
    margin-right: 10px;
    padding-bottom: 10px;
`


const SocialMediaSection = styled.div`
 width: 20%;
    max-width: 2000px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    /* background-color: white; */
    color: white;
    margin-left: 10px;
    padding-bottom: 10px;
    /* position: flex; */
`