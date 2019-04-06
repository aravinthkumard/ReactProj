import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import cx from 'classnames';
import { setMobileNavVisibility } from '../../reducers/Layout';
import { withRouter } from 'react-router-dom';
import Header from './Header';
import SideBar from '../../components/SideBar';
import Dashboard from '../Dashboard';
import SectionHeading from './SectionHeading';
import Profile from './Profile';
import Card from './Card';
import Footer from './Footer';


const Main = () => {
 
  return (
    
      

        <div >
          <SectionHeading />
          <Profile/>
          <Card/>
          <Footer/>
                          
          
        </div>
     
  )
};



export default withRouter((Main));