import React,{Component} from 'react';
// import Header from './HeaderComponent';
import HomePage from './HomePageComponent';
import {Switch,Route,Redirect } from 'react-router-dom';
import Header from './HeaderComponent';
import ProductDetail from './ProductDetailComponent'
import Profile from './ProfileComponent';
import { Container } from 'reactstrap';
import { CategoriesRoutes } from './CategoriesRoutesComponent'

class Main extends Component {

    render() {
        return (
            <div>
                <Container>
                    <Header />
                    <Switch>
                        <Route path="/home" component={HomePage} />
                        <Route path="/products/:ProductId" component={ProductDetail} />
                        <Route path="/profile" component={Profile} />
                        <Redirect to="/home" />
                    </Switch>
                    {/* <Footer />   */}
                </Container>
            </div>
      );
    }
  }

export default Main;
