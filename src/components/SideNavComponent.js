import React, {Component} from 'react';
import SideNav, {MenuIcon} from 'react-simple-sidenav';
import {Link} from 'react-router-dom';
import { UncontrolledCollapse, Col,Row } from 'reactstrap';

class SideNavBar extends Component{

    constructor(props){
        super(props);
        this.state={
            showNav: false
        }
    }


    render(){
        return(
            <>
                <MenuIcon  onClick={() => this.setState({showNav: true})}/>

                <SideNav  className="sidenav"
                    showNav={this.state.showNav}
                    onHideNav={()=>this.setState({showNav:false})}
                    title={<div>Rick </div>}
                    titleStyle={{backgroundColor: '#0000aa'}}
                    itemStyle      =  {{backgroundColor: '#ffffff',}}
                    itemHoverStyle =  {{backgroundColor: '#2196F3'}}
                    items={[
                    <Link  to="Men"  className="link-sidebar" onClick={() => this.setState({showNav: false})} >Men</Link>,
                    <Link className="link-sidebar" to="Women" className="link-sidebar" onClick={() => this.setState({showNav: false})}>Women</Link>,
                    <Link className="link-sidebar" to="Bags" className="link-sidebar" onClick={() => this.setState({showNav: false})}>Bags</Link>,
                    <Link className="link-sidebar" to="Cosmetics" className="link-sidebar" onClick={() => this.setState({showNav: false})}>Cosmetics</Link>,
                    <Link className="link-sidebar" to="Sports" onClick={() => this.setState({showNav: false})}>Sports</Link>,
                    <Link className="link-sidebar" to="DryFruits" className="link-sidebar" onClick={() => this.setState({showNav: false})}>Dry Fruits</Link>,
                    <>
                        <Link className="link-sidebar" id="toggler" style={{ marginBottom: '1rem' }}>Electronics</Link>
                    </>,
                    <UncontrolledCollapse toggler="#toggler">
                        <Row>
                            <Col xs={1}></Col>
                            <Col xs={4} >
                                <Link className="link-sidebar-child" to="laptops" onClick={() => this.setState({showNav: false})}> Laptops</Link><br />
                            </Col>
                        </Row>
                    </UncontrolledCollapse>,
                    <UncontrolledCollapse toggler="#toggler">
                        <Row>
                            <Col xs={1}></Col>
                            <Col xs={4} >
                                <Link className="link-sidebar-child" to="mobiles" onClick={() => this.setState({showNav: false})}> Mobiles </Link><br />
                            </Col>
                        </Row>
                    </UncontrolledCollapse>,
                <UncontrolledCollapse toggler="#toggler">
                <Row>
                    <Col xs={1}></Col>
                    <Col xs={4} >
                        <Link className="link-sidebar-child" to="powerbanks" onClick={() => this.setState({showNav: false})}> PowerBanks</Link><br />
                    </Col>
                </Row>
            </UncontrolledCollapse>,
            <UncontrolledCollapse toggler="#toggler">
            <Row>
                <Col xs={1}></Col>
                <Col xs={4} >
                    <Link className="link-sidebar-child" to="powerbanks" onClick={() => this.setState({showNav: false})}> PowerBanks</Link><br />
                </Col>
            </Row>
        </UncontrolledCollapse>,
        ]} />
            </>
        );
    }
}

export default SideNavBar;