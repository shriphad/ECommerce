import React,{Component} from 'react';
import {Products} from './HomePage/Data/products';
import { Col,Row,Container,CardBody,CardTitle,CardImg,Card } from 'reactstrap';


function RenderProductDetail({product}){
    return(
        <Container>
            <Row>
                <img src={product.image} alt={product.name}/>
            </Row>            
            <Card>
                    <CardImg width="100%" src={product.image}  />
                    <CardTitle><b>{product.name}</b></CardTitle>
                    <CardBody >
                        <Row>{product.category}</Row>
                        <Row style={{color:"green",fontSize:"25px"}}>
                            <Col xs={3}>
                                <strike>
                                    {product.strike}
                                </strike> 
                            </Col>
                            <Col xs={6}>
                                {product.price}
                            </Col>
                        </Row>
                    </CardBody>
                </Card>
                <p>{product.description}</p>
                <h4>Free Shipping</h4>
                <p>To Bangladesh from seller via china. Shipping method online.</p>
                <h5><b>Specification</b></h5>
                <p>{product.specification}</p>
                <Row>
                    <Col xs={6}>
                        <button > ADD TO WISHLIST</button>
                    </Col>
                    <Col xs={6}>
                        <button color="red"> ADD TO CART </button>
                    </Col>
                </Row>
        </Container>
    )
}


class ProductDetail extends Component{

    constructor(props){
        super(props);

        this.state= {
            products: Products
        }
    }

    render(){

        return(
            <>
                <RenderProductDetail product={this.state.products[this.props.match.params.ProductId]} />
            </>
        );
    }
}

export default ProductDetail;