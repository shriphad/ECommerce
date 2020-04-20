import React, {Component} from 'react';
import { Navbar, NavbarBrand, Nav,NavItem,NavbarToggler,Collapse ,Jumbotron } from 'reactstrap';
import {NavLink} from 'react-router-dom';


class Footer extends Component{

    render(){
        return(
            <>
                <Navbar sticky="top"   dark expand="xs" >
                    <div className="contaniner navbar"  >
                        <Nav navbar >
                            <NavItem>
                                <NavLink className="nav-link" to="/home" >
                                    <span className="fa fa-home"></span> Home
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to="/chat" >
                                    <span className="fa fa-info fa-lg"></span> Chat
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to="/cart" >
                                    <span className="fa fa-list fa-lg"></span> Cart
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to="/profile" >
                                    <span className="fa fa-address-card fa-lg"></span> Profile
                                </NavLink>
                            </NavItem>
                        </Nav>                        
                    </div>
                </Navbar>
            </>
        );
    }

}

export default Footer;