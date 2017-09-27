import React from 'react';
import {Link, NavLink} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import {Navbar, NavbarToggler, NavbarBrand, Collapse, NavItem, Nav} from 'reactstrap';
import '../styles/App.css';

export default class BaseLayout extends React.Component {
  render(){
    return (
      <div style={{backgroundColor: '#013174', borderRadius: '0.3rem'}} className="container">
          <div>
            <Navbar style={{background: '-webkit-linear-gradient(left,#013174, #015071 , #013174)', borderTopRightRadius: '0.3rem', borderTopLeftRadius: '0.3rem'}} light toggleable>
               <NavbarToggler right />
               <NavbarBrand><NavLink exact to="/"><img style={{width:'50px'}} src="http://grfx.cstv.com/schools/pgatour/graphics/PGATOUR_Logo.png" atl="pga tour"/></NavLink></NavbarBrand>
                 <Collapse navbar>
                 <Navbar style={{backgroundColor:" inherit", borderBottomRightRadius: '0.3rem', borderBottomLeftRadius: '0.3rem'}} color="faded" light toggleable>
                   <NavbarToggler right />
                     <Nav className="ml-auto" navbar >
                       <NavItem>
                         <NavLink style={{margin:'5px', fontFamily: 'cursive', color:'white'}} to="/masters" activeClassName="selected">Masters</NavLink>
                       </NavItem>
                       <NavItem>
                         <NavLink style={{margin:'15px', fontFamily: 'cursive', color:'white'}} to="/usopen" activeClassName="selected">U.S. Open</NavLink>
                       </NavItem>
                       <NavItem>
                         <NavLink style={{margin:'5px', fontFamily: 'cursive', color:'white'}} to="/open" activeClassName="selected">The Open Championship</NavLink>
                       </NavItem>
                     </Nav>
                 </Navbar>
                   <Nav className="ml-auto" navbar>
                     <NavItem>
                       <NavLink style={{margin:'5px', color:'white'}} to="/about" activeClassName="selected">About</NavLink>
                     </NavItem>
                     <NavItem>
                       <NavLink style={{margin:'5px', color:'white'}} to="/contact" activeClassName="selected">Contact Us</NavLink>
                     </NavItem>
                   </Nav>
                 </Collapse>
             </Navbar>
          </div>
         <div className="container" >

          </div>
        {this.props.children}
        <footer style={{backgroundColor: '#013174', display:'flex', justifyContent:'center'}} className="container">
          <span style={{color:'white', fontFamily:'sans', marginBottom:'10px'}} className="footer-title">Property of the <img style={{width:'15px'}} src="http://grfx.cstv.com/schools/pgatour/graphics/PGATOUR_Logo.png" atl="pga tour"/></span>
        </footer>
      </div>
    )
  }

}
