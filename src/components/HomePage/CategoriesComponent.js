import React,{ Component } from "react";
import { Col,Row } from 'reactstrap';


class Category extends Component{

    render(){
        return(     
            <>   
                <h3>Categories</h3>
                <Row>
                    <Col xs={2}>
                        <a href='categories/men'>
                        <img src="assets/images/shoe.png" width="50" height="50"  ></img>
                                Men </a> <br/>
                    </Col>
                    <Col xs={3}>
                        <a href='categories/women'> 
                        <img src="assets/images/women.png" width="50" height="50"  ></img>
                        Women </a> 
                    </Col>
                    <Col xs={2}>
                        <a href='categories/bag'> 
                        <img src="assets/images/women bag.jpg" width="50" height="50"  ></img>
                        Bag </a> 
                    </Col>
                    <Col xs={3}>
                        <a href='categories/cosmetics'>
                        <img src="assets/images/cosmetics.jpeg" width="50" height="50"  ></img>
                            Cosmetics </a> 
                    </Col> 
                    <Col xs={2}>
                        <a href='categories/sports'> 
                        <img src="assets/images/soccer.png" width="50" height="50"  ></img>
                        Sports </a> 
                    </Col>                
                </Row>
            </>
        );
    }
}


export default Category;