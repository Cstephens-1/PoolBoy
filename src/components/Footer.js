import { Link } from "react-router-dom";
// import NavBar from "./NavBar";
import styled from "styled-components"



function Footer(){
    return(
        <FooterLayout>
        
            <AboutSection>

                <h2>About Us</h2>

                <LinkWrapper>
                    <Link to='/'>Schedule your next cleaning</Link>
                </LinkWrapper>

                <LinkWrapper>
                    <Link to='/'>Testimonials</Link>
                </LinkWrapper>

                <LinkWrapper>
                    <Link to='/'>Careers</Link>
                </LinkWrapper>

                <LinkWrapper>
                    <Link to='/'>Investors</Link>
                </LinkWrapper>


                <LinkWrapper>
                    <Link to='/tos'>Terms of Service</Link>
                </LinkWrapper>
            </AboutSection>
        
         

            <ContactSection>

                <h2>Contact Us</h2>

                <LinkWrapper>
                    <Link to='/'>Contact</Link>
                </LinkWrapper>

                <LinkWrapper>
                    <Link to='/'>Support</Link>
                </LinkWrapper>
                
            </ContactSection>
       

            <SocialMediaSection>

                <h2>Social Media</h2>

                <LinkWrapper>
                    <Link to='/'>Facebook</Link>
                </LinkWrapper>

                <LinkWrapper>
                    <Link to='/'>Instagram</Link>
                </LinkWrapper>

                <LinkWrapper>
                    <Link to='/'>Youtube</Link>
                </LinkWrapper>

                <LinkWrapper>
                    <Link to='/'>Twitter</Link>
                </LinkWrapper>

            </SocialMediaSection>

        </FooterLayout>
    )
}

export default Footer

const LinkWrapper = styled.div`
    margin: 8px;
    `
    const FooterLayout = styled.div`
        background-color: #242424;
        padding: 3rem 0 2rem 0;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        vertical-align: bo;
    `

const AboutSection = styled.div`
    background-color: green;
    width: 20%;
    max-width: 2000px;
    display: inline-block;
    justify-content: center;
    margin-right: 15px;
    left: 0;
`

const ContactSection = styled.div`
    background-color: blue;
    width: 20%;
    max-width: 2000px;
    display: inline-block;
    justify-content: center;
    margin-left: 10px;
    margin-right: 10px;
`


const SocialMediaSection = styled.div`
 width: 20%;
    max-width: 2000px;
    display: inline-block;
    justify-content: center;
    background-color: white;
    color: black;
    margin-left: 10px;
`