import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.css';
import Navbar from '../components/shared/Nav'
import Footer from '../components/shared/Footer'
import MessageInfo from '../components/shared/MessageInfo'
import { Provider } from 'react-redux'
import React, {Fragment} from 'react'
import {createWrapper} from "next-redux-wrapper";
import { Modal, ModalHeader, ModalBody } from 'reactstrap';
import store from '../store/store'
import App from 'next/app';
import Head from 'next/head'

class MyApp extends App {

  componentDidMount() {
    var hours = 1.2;
    var now = new Date().getTime();
    var setupTime = localStorage.getItem('setupTime');
    if (setupTime == null) {
      localStorage.setItem('setupTime', now)
    } else {
      if (now - setupTime > hours * 60 * 60 * 1000) {
        localStorage.clear()
        localStorage.setItem('setupTime', now);
      }
    }

  }
  render() {
      const {Component, pageProps} = this.props;
      return (
          <Provider store={store}>
            {/* <MessageInfo /> */}
           {/* <a href="https://t.me/icredit_kzbot" target="_blank"><img className="imgwhatsapp" src={require("../img/telegram.png")} alt="" /></a> */}
            <div className="chatBlock">
            <a href="https://t.me/icredit_kzbot" target="_blank">
            <img className='imgwhatsapp mb-3' src={require("../img/svg/telegram.svg")}></img></a>
            <a href="https://api.whatsapp.com/send?phone=+77015382439" target="_blank"><img className="imgwhatsapp" src={require("../img/svg/whatsapp.svg")} alt="" /></a>
            </div>
          
            <Navbar/>
            <Component {...pageProps}/>
            <Footer/>
          </Provider>
      );
  }
}

//makeStore function that returns a new store for every request
const makeStore = () => store;
const wrapper = createWrapper(makeStore);
const mapStateToProps = state => ({
  loggedIn: state.userReducer.loggedIn
});

const mapDispatchToProps = dispatch => ({
  fetchCurrentUser: () => dispatch(actions.fetchCurrentUser()),
});

// //withRedux wrapper that passes the store to the App Component
// // export default makeStore.withRedux(MyApp);
export default wrapper.withRedux(MyApp);

// export default MyApp
