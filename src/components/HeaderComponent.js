import React, {Component} from 'react';
import { Navbar, NavbarBrand, Nav,NavItem,Collapse ,Jumbotron, Row,Col,Input } from 'reactstrap';
import {NavLink,Link} from 'react-router-dom';
import SideNav, {MenuIcon} from 'react-simple-sidenav';
import ProfileMenu from './ProfileDropDownComponent';
import {Dropdown,DropdownButton,NavDropdown} from 'react-bootstrap';
import { FaShoppingCart,MdMenu } from 'react-icons/fa';


class Header extends Component{

    constructor(props){
        super(props);
        this.state={
            showNav: false
        }
    }

    render(){
        return(
            <>
            
                <Navbar sticky="top"   dark expand="xs" >
                    <div className="contaniner navbar"  >
                        <Nav navbar >
                            <NavItem>
                                <MenuIcon  onClick={() => this.setState({showNav: true})}/>
                                <SideNav  className="sidenav"
                                    showNav={this.state.showNav}
                                    onHideNav={()=>this.setState({showNav:false})}
                                    title={<div>Rick </div>}
                                    titleStyle={{backgroundColor: '#0000aa'}}
                                    itemStyle      =  {{backgroundColor: '#ffffff'}}
                                    itemHoverStyle =  {{backgroundColor: '#2196F3'}}
                                    items={[
                                    <Link to="">Men</Link>,
                                    <Link to="">Women</Link>,
                                    <Link to="">Bags</Link>,
                                    <Link to="">Cosmetics</Link>,
                                    <Link to="">Sports</Link>
                                    ]} />
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to="/home" >
                                    <img src='assets/images/logo.png' alt='Rick' />
                                </NavLink>
                            </NavItem>
                            <Col xs={4}></Col>
                            <Col xs={2}>
                                <NavLink className="nav-link" to="/cart" >
                                    <FaShoppingCart size={30} />
                                </NavLink>
                            </Col>
                            <Col  xs={4}>
                            <NavDropdown title="Profile" id="nav-dropdown">
                                <NavDropdown.Item eventKey="4.1">My Account</NavDropdown.Item>
                                <NavDropdown.Item eventKey="4.2">My Orders</NavDropdown.Item>
                                <NavDropdown.Item eventKey="4.3">My Chats</NavDropdown.Item>
                                <NavDropdown.Item eventKey="4.3">My Wishlist</NavDropdown.Item>
                                <NavDropdown.Item eventKey="4.3">My Cart</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item eventKey="4.4">Separated link</NavDropdown.Item>
                            </NavDropdown>
                            </Col>
                        </Nav>                        
                    </div>
                </Navbar>
                <Row >
                    <Col>
                        <Input type="text" name="search" placeholder="Search"/>
                    </Col>
                </Row>
            </>
        );
    }

}

export default Header;