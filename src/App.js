import logo from './logo.svg';
import './App.css';
import styled from "styled-components"
import NavBar from './components/NavBar';
import Footer from './components/Footer.js';
import Description from './components/Description';

function App() {
  return (
    <AppWrapper>
      <NavBarWrapper>
        <NavBar />
      </NavBarWrapper>
        <p> Logo goes here</p>
        <h1> PoolBoy</h1>
        <Description />
      <FooterWrapper>
        <Footer />
      </FooterWrapper>
    </AppWrapper>
  );
}

export default App;

const AppWrapper = styled.div`
background-color: #c0d6d8;
top: 0%;
bottom: 0%;
left: 0%;
right: 0%;
position: absolute;
text-align: center;
color: white;
`

const FooterWrapper = styled.footer`
/* background-color: #282828; */
background-color: #fff;
bottom: 0;
`
const NavBarWrapper = styled.div`
  background-color: #2d7487;
`