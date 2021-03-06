import React,{Component} from 'react';
import { Row, Col,Input } from 'reactstrap';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';

class HeaderHeader extends Component {

  render() {
    return (
            <div className="contaniner">
                <Row>
                    <Col xs={2}>
                        <img src='assets/images/logo.png' alt='Rick' />
                    </Col>  
                    <Col xs={6}>
                        <Input type="text" name="search" placeholder="Search"/>
                    </Col>
                    
                </Row>
            </div>
        
      );
  }
}

export default HeaderHeader;

/*
<Router>
<Route render={({ location, history }) => (
    <React.Fragment>
        <SideNav
            // onSelect={(selected) => {
            //     const to = '/' + selected;
            //     if (location.pathname !== to) {
            //         history.push(to);
            //     }
            // }}
        >
            <SideNav.Toggle />
            <SideNav.Nav defaultSelected="home">
                <NavItem eventKey="home">
                    <NavIcon>
                        <i className="fa fa-fw fa-home" style={{ fontSize: '1.75em' }} />
                    </NavIcon>
                    <NavText>
                        Home
                    </NavText>
                </NavItem>
                <NavItem eventKey="devices">
                    <NavIcon>
                        <i className="fa fa-fw fa-device" style={{ fontSize: '1.75em' }} />
                    </NavIcon>
                    <NavText>
                        Devices
                    </NavText>
                </NavItem>
            </SideNav.Nav>
        </SideNav>
        <main>
            <Route path="/" exact 
            />
        </main>
    </React.Fragment>
)}
/>
</Router>
*/