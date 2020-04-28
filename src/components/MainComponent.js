import React,{Component} from 'react';
// import Header from './HeaderComponent';
import HomePage from './HomePageComponent';
import {Switch,Route,Redirect } from 'react-router-dom';
import Header from './HeaderComponent';
import ProductDetail from './ProductDetailComponent'
import Profile from './ProfileComponent';
import { Container } from 'reactstrap';
import { Products } from './HomePage/Data/products';
import AllProducts from './HomePage/AllProducts'

class Main extends Component {

    constructor(props){
        super(props)
        this.state={
            products: Products
        }
    }



    render() {

        const CategoryProductsPage = ({match}) => {
            return(
                <AllProducts
                 products={this.state.products.filter((product) => product.category==match.params.category)} />
            );
        }

        return (
            <div>
                <Container>
                    <Header />
                    <Switch>
                        <Route path="/home" component={HomePage} />
                        <Route path="/products/:ProductId" component={ProductDetail} />
                        <Route path="/profile" component={Profile} />
                        <Route path="/:category" component={CategoryProductsPage} />
                        <Redirect to="/home" />
                    </Switch>
                    {/* <Footer />   */}
                </Container>
            </div>
      );
    }
  }

export default Main;
