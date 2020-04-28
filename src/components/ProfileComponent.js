import React,{Component} from 'react';
import { Row, Col,Container } from 'reactstrap';
import {Users} from './Data/Users';

function RenderProfile({user}){
    return(
        <>
            <Container>
                <br/>
                <Row>
                    <Col xs={4}>
                        <img src={user.image} />
                    </Col>
                    <Col xs={8}>
                        <h3>{user.name}</h3>
                        <Row>
                            <Col xs={6}>
                                <b>{user.id_number}</b><br />
                                ID Number
                            </Col>
                            <Col xs={6}>
                                <b>{user.points}</b><br />
                                points
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <br></br>
                <table cellPadding="10" cellSpacing="10">
                    <tr>
                        <td xs={6}>
                            Full Name
                        </td>
                        <td xs={6}>
                            {user.name}
                        </td>
                    </tr>
                    <tr>
                        <td xs={6}>
                            User Name
                        </td>
                        <td xs={6}>
                            {user.username}
                        </td>
                    </tr>
                    <tr>
                        <td xs={6}>
                            Phone
                        </td>
                        <td xs={6}>
                            {user.phone}
                        </td>
                    </tr>
                    <tr>
                        <td xs={6}>
                            Email
                        </td>
                        <td xs={6}>
                            {user.mail}
                        </td>
                    </tr>
                    <tr>
                        <td xs={6}>
                            Shipping Address
                        </td>
                        <td xs={6}>
                            {user.address}
                        </td>
                    </tr>
                </table>
                
                <br />
            </Container>
        </>
    )
}

class Profile extends Component{

    constructor(props){
        super(props);

        this.state= {
            users: Users
        }
    }

    render(){
        return(
           <RenderProfile user={this.state.users[0]} />
        );
    }
}

export default Profile;