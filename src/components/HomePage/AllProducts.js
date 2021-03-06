import React,{ Component } from "react";
import { Col,Row } from 'reactstrap';
import {  Card, CardImg,CardTitle, CardBody } from 'reactstrap';
import { Link } from 'react-router-dom';


function RenderProduct({product}){
    return (
        <Col xs={6} md={4} >
            <Link to={`products/${product.id}`} >
                <Card>
                    <CardImg width="100%" src={product.image}  />
                    <CardTitle><b>{product.name}</b></CardTitle>
                    <CardBody >
                        <Row>{product.category}</Row>
                        <Row style={{color:"green"}}>
                            <strike>
                                {product.strike}
                            </strike>  {product.price}
                        </Row>
                    </CardBody>
                </Card>
            </Link>
        </Col>
    );
}

const AllProducts = (props) => {

    const items = props.products.map((product) => {
        return(
            <RenderProduct product={product} />
        );
    })

    return(
        <Row>
            {items}
        </Row>
    )
}

export default AllProducts;
