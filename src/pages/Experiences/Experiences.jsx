import React,{Component} from 'react';
import './Experiences.css';
import SiteHeader from '../../components/SiteHeader/SiteHeader';
import Footer from '../../components/Footer/Footer';
import {Grid,Card,Transition,Image} from 'semantic-ui-react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {experiencesData} from "./data";



export default class Experiences extends Component{

    state = {
        open : false,
    }

    componentDidMount(){
        this.setState({
            open: true
            }
        )
    }

    render () {    
        var cardArray = experiencesData.map((data,index) => {
           return  <Transition
                animation = "drop"
                duration = {300*(index+1)}
                visible = {this.state.open}
            >
                <Card color = {"blue"} className = "experienceCard" >
                    <img  src={require("./assets/"+data.image)} className = "experienceCardImage" />
                    <Card.Content textAlign = {"center"}>
                        <Card.Header style = {{color: data.fontColor}}>
                            {data.company}
                        </Card.Header>
                        <Card.Meta style = {{color: data.fontColor}}>
                            {data.title}
                            <br></br>
                            {data.location}
                            <br></br>
                            {data.term}
                        </Card.Meta>
                        <Card.Description>
                            {data.technologies.map(iconData =>(
                                    <FontAwesomeIcon style = {{color: iconData.color, "margin-right": "15px"}} icon = {iconData.icon} size = "2x"/>
                            ))}
                        </Card.Description>
                    </Card.Content>
                </Card>
            </Transition>
    })



        return(
            <Grid padded = {"vertically"} className = "experiencesPageGrid">
                <SiteHeader></SiteHeader>
                <Grid.Row className = "experiencesPageMainRow">
                    <Grid.Column only = {"computer"} width = {6}/>
                    <Grid.Column only = {"computer"} width = {4}>
                        <Card.Group stackable itemsPerRow = {1}>
                            {cardArray}
                        </Card.Group>
                    </Grid.Column>


                    <Grid.Column only = {"tablet"} width = {4}>
                    </Grid.Column>
                    <Grid.Column only = {"tablet"} width = {8}>
                        <Card.Group stackable itemsPerRow = {1}>
                            {cardArray}
                        </Card.Group>
                    </Grid.Column>


                    <Grid.Column only = {"mobile"} width = {16}>
                        <Card.Group stackable itemsPerRow = {1}>
                            {cardArray}
                        </Card.Group>
                    </Grid.Column>
                </Grid.Row>
                <Footer></Footer>
            </Grid>
        )
    }
}