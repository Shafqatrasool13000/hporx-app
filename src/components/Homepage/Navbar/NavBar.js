import React from 'react'
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import searchIcon from '../../../assets/searchIcon.svg'
import logo from '../../../assets/logo.svg'
import profile from '../../../assets/profile.svg'
import cart from '../../../assets/cart.svg'
import  {NavIcon, NavLogo , TopNavBarContainer } from './StyledNavbar'
// import SideNav from './SideNav'

const NavBar = () => {
  return (
    <TopNavBarContainer>
   <Navbar  expand="lg">
    <Container>
      <Navbar.Brand  href="#home" ><NavLogo src={logo}/></Navbar.Brand>
      <Navbar.Toggle bg='light'  aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
          <Nav.Link className='nav-link' href="#">Home</Nav.Link>
          <Nav.Link className='nav-link' href="#">Inhalate</Nav.Link>
          <Nav.Link className='nav-link' href="#">Vaporise</Nav.Link>
          <Nav.Link className='nav-link' href="#">Portables</Nav.Link>
          <Nav.Link className='nav-link' href="#">Chillums</Nav.Link>
          <Nav.Link className='nav-link' href="#">MarketPlace</Nav.Link>
          <Nav.Link className='nav-link' href="#">Products</Nav.Link>
          <Nav.Link className='nav-link' href="#">Prescribe</Nav.Link>
    
          <Nav.Link href="#" className='nav-icon'><NavIcon src={profile}/></Nav.Link>
          <Nav.Link href="#" className='nav-icon'><NavIcon src={searchIcon}/></Nav.Link>
          <Nav.Link href="#" className='nav-icon'><NavIcon src={cart}/></Nav.Link>
        </Nav>
      </Navbar.Collapse>
    
    </Container>
  </Navbar>
    </TopNavBarContainer>
 
  )
}

export default NavBar