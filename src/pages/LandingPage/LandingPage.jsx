import React from 'react';
import './LandingPage.css';
import SiteHeader from '../../components/SiteHeader/SiteHeader';
import Footer from '../../components/Footer/Footer';
import {Grid,Transition,Header,Button,Icon,Container,Image} from 'semantic-ui-react';
import { Component } from 'react';

export default class LandingPage extends Component {

    state = {
        open: false
    }

    componentDidMount(){
        this.setState({open: true})
    }

    visitLink = (url) =>{

        window.open(url,"_blank")

    }


    render(){    
        var icons = [
            {
                
                icon: <Icon size = {"huge"} name = "stack overflow" style = {{"color":"#F48024"}}/>,
                background: "white",
                url: "https://stackoverflow.com/users/9028381/arun-ajay"
            },
            {
                icon: <Icon size = {"huge"} name = "linkedin" style = {{"color":"#0077B5"}}/>,
                background: "white",
                url: "https://www.linkedin.com/in/arun-a-a0b349160"

            },
            {
                icon: <Icon size = {"huge"} name = "instagram" style = {{"color":"black"}}/>,
                background: "white",
                url: "https://www.instagram.com/ajayruns/"
            },
            {
                icon: <Icon size = {"huge"} name = "github alternate" style = {{"color":"black"}}/>,
                background: "white",
                url: "https://github.com/arun-ajay"
            },

        ]

        var iconsMobile = [
            {
                
                icon: <Icon size = {"big"} name = "stack overflow" style = {{"color":"#F48024"}}/>,
                background: "white",
                url: "https://stackoverflow.com/users/9028381/arun-ajay"
            },
            {
                icon: <Icon size = {"big"} name = "linkedin" style = {{"color":"#0077B5"}}/>,
                background: "white",
                url: "https://www.linkedin.com/in/arun-a-a0b349160"

            },
            {
                icon: <Icon size = {"big"} name = "instagram" style = {{"color":"black"}}/>,
                background: "white",
                url: "https://www.instagram.com/ajayruns/"
            },
            {
                icon: <Icon size = {"big"} name = "github alternate" style = {{"color":"black"}}/>,
                background: "white",
                url: "https://github.com/arun-ajay"
            },

        ]

        var iconsArray = icons.map((data) => {
            return(
 
                    <Button onClick = {() => this.visitLink(data.url)} className = "socialButton"  icon circular style = {{"backgroundColor": data.background}}>
                        {data.icon}
                    </Button>


            )
        })

        var iconsMobileArray = iconsMobile.map((data) => {
            return(
 
                    <Button onClick = {() => this.visitLink(data.url)} className = "socialButton"  icon circular style = {{"backgroundColor": data.background}}>
                        {data.icon}
                    </Button>


            )
        })

        
        return(
            <Grid padded = {"vertically"} className = "landingPageGrid">
                <SiteHeader></SiteHeader>
                <Grid.Row className = "landingPageMainRow">
                    <Grid.Column only = {"tablet computer"} textAlign = {"center"} verticalAlign = {"top"} width = {16} style = {{"margin-top":"25px"}}>
                        <Transition
                                animation = "fade down"
                                duration = {500}
                                visible = {this.state.open}
                        >
                                    <Image className = "profile" centered size = {"medium"} src = {require('./assets/me.jpg')} style = {{"border-radius":"50%"}}/>
                        </Transition>

                        <Transition
                            animation = "fade down"
                            duration = {500}
                            visible = {this.state.open}
                        >
                            <Header className = "nameHeader">
                                Arun Ajay
                            </Header>
                        </Transition>

                        <Transition
                            animation = "fade down"
                            duration = {700}
                            visible = {this.state.open}
                        >  
                            <Header as = 'h3' className = "titleHeader">
                                Aspiring Software Developer
                            </Header>
                        </Transition>
                        
                        <Transition
                            animation = "zoom"
                            duration = {500}
                            visible = {this.state.open}
                        >  
                            <Container>
                                {iconsArray}
                            </Container>
                        </Transition>
                    </Grid.Column>

                    <Grid.Column only = {"mobile"} textAlign = {"center"} verticalAlign = {"top"} width = {16} style = {{"margin-top":"25px"}}>
                        <Transition
                                animation = "fade down"
                                duration = {500}
                                visible = {this.state.open}
                        >
                                    <Image className = "profile" centered size = {"medium"} src = {require('./assets/me.jpg')} style = {{"border-radius":"50%"}}/>
                        </Transition>

                        <Transition
                            animation = "fade down"
                            duration = {500}
                            visible = {this.state.open}
                        >
                            <Header className = "nameHeader">
                                Arun Ajay
                            </Header>
                        </Transition>

                        <Transition
                            animation = "fade down"
                            duration = {700}
                            visible = {this.state.open}
                        >  
                            <Header as = 'h3' className = "titleHeader">
                                Aspiring Software Engineer
                            </Header>
                        </Transition>
                        
                        <Transition
                            animation = "zoom"
                            duration = {500}
                            visible = {this.state.open}
                        >  
                            <Container>
                                {iconsMobileArray}
                            </Container>
                        </Transition>
                    </Grid.Column>
                </Grid.Row>
                <Footer></Footer>
        </Grid>
        )

    }
}