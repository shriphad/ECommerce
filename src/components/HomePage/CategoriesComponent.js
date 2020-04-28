import React,{ Component } from "react";
import { Col,Row } from 'reactstrap';
import { Link } from "react-router-dom";


class Category extends Component{

    render(){
        return(     
            <>   
                <h3>Categories</h3>
                <Row>
                    <Col xs={2}>
                        <Link to='Men'>
                        <img src="assets/images/shoe.png" width="50" height="50"  ></img>
                                Men
                        </Link> <br/>
                    </Col>
                    <Col xs={3}>
                        <Link to='Women'> 
                        <img src="assets/images/women.png" width="50" height="50"  ></img>
                        Women </Link> 
                    </Col>
                    <Col xs={2}>
                        <Link to='Bags'> 
                        <img src="assets/images/women bag.jpg" width="50" height="50"  ></img>
                        Bag </Link> 
                    </Col>
                    <Col xs={3}>
                        <Link to='Cosmetics'>
                        <img src="assets/images/cosmetics.jpeg" width="50" height="50"  ></img>
                            Cosmetics </Link> 
                    </Col> 
                    <Col xs={2}>
                        <Link to='Sports'> 
                        <img src="assets/images/soccer.png" width="50" height="50"  ></img>
                        Sports </Link> 
                    </Col>                
                </Row>
            </>
        );
    }
}


export default Category;