import React,{Component} from 'react';
import './Projects.css';
import SiteHeader from '../../components/SiteHeader/SiteHeader';
import Footer from '../../components/Footer/Footer';
import {Grid,Card,Transition,Icon} from 'semantic-ui-react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {projectData} from "./data";



export default class Projects extends Component{

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
        var cardArray = projectData.map((data,index) => {
           return  <Transition
                animation = "vertical flip"
                duration = {500+(index)*100}
                visible = {this.state.open}
            >
                <Card className = "projectCard" link color = {"blue"} onClick = {() => {window.open(data.projectURL,"_blank")}}>
                    <Card.Content textAlign = {"center"}>
                        <Card.Header>
                            {data.projectTitle}
                        </Card.Header>
                        <Card.Meta>
                            {data.projectIcons.map(iconData =>(
                                <FontAwesomeIcon style = {{color: iconData.color}} icon = {iconData.icon} size = "2x"/>
                            ))}
                            <br></br>
                            {data.type}
                            <br></br>
                            {data.status}

                        </Card.Meta>
                        <Card.Description>
                            {data.projectDescription}
                        </Card.Description>
                    </Card.Content>
                </Card>
            </Transition>
        })



        return(
            <Grid stackable padded = {"vertically"} className = "projectsPageGrid">
                <SiteHeader></SiteHeader>
                <Grid.Row className = "projectsPageMainRow">
                    <Grid.Column only = {"computer"} width = {4}>
                    </Grid.Column>
                    <Grid.Column only = {"computer"} width = {8}>
                        <Card.Group stackable itemsPerRow = {3}>
                            {cardArray}
                        </Card.Group>
                    </Grid.Column>
                    <Grid.Column only = {"tablet mobile"} width = {16}>
                        <Card.Group stackable itemsPerRow = {3}>
                            {cardArray}
                        </Card.Group>

                    </Grid.Column>
                </Grid.Row>
                <Footer></Footer>
            </Grid>
        )
    }
}