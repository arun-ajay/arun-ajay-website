import React,{useState} from 'react';
import './Resume.css';
import SiteHeader from '../../components/SiteHeader/SiteHeader';
import Footer from '../../components/Footer/Footer';
import {Grid} from 'semantic-ui-react';


function Resume() {
   
    return (
        <Grid padded = {"vertically"} className = "resumePageGrid">
            <SiteHeader></SiteHeader>
            <Grid.Row className = "resumePageMainRow">
                <Grid.Column only = {"computer"} width = {3}/>
                <Grid.Column only = {"computer"} width = {10}>
                    <iframe className = "resumeIframe" src = "/Arun_Ajay_Resume.pdf"/>
                </Grid.Column>
                <Grid.Column only = {"computer"} width = {3}/>
                
                <Grid.Column only = {"tablet mobile"} width = {16}>
                    <iframe className = "resumeIframe" src = "/Arun_Ajay_Resume.pdf"/>
                </Grid.Column>
            </Grid.Row>
            <Footer></Footer>
        </Grid>
    );
  }

export default Resume;


