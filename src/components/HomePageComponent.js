import React,{Component} from 'react';
import { Row, Col, Container } from 'reactstrap';
import Category from './HomePage/CategoriesComponent'
import AllProducts from './HomePage/AllProducts'
import {Products} from './HomePage/Data/products';

class HomePage extends Component{

    constructor(props){
        super(props);

        this.state={
            products: Products
        };
        
    }

    render(){
        return(
            <div>
                <br/>
                <img src="assets/images/bag.jpg" className="img-fluid"/>
                <Category />
                <AllProducts products={this.state.products} />
            </div>
        )
    }
}

export default HomePage;