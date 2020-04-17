import React,{Component} from 'react';
import Header from './HeaderComponent';
import HomePage from './HomePageComponent';
import {Switch,Route,Redirect } from 'react-router-dom';
import Footer from './FooterComponent';


class Main extends Component {

    render() {
        return (
            <div>
                <Header />
                <Switch>
                    <Route path="/home" component={HomePage} />
                    <Redirect to="/home" />
                </Switch>
                <Footer />
            </div>
      );
    }
  }

export default Main;
