import React,{Component} from 'react';
import './SiteHeader.css';
import  {Grid} from 'semantic-ui-react';
import {Icon,Menu} from 'semantic-ui-react';
import {Link} from 'react-router-dom'



export default class SiteHeader extends Component {
    state = {
        data : [
            {
                type: "navigation",
                value: "Home",
                display: <Icon name = {"home"}/>,
                link: "/"
            },
            {
                type: "navigation",
                value:"Projects",
                display: "Projects",
                link: "/projects"
            },
            {
                type: "navigation",
                value:"Experiences",
                display: "Experiences",
                link: "/experiences"
            },
            {
                type: "navigation",
                value:"Resume",
                display: "Resume",
                link: "/resume"
            }
            ],
        activeItem: window.location.pathname
    }

    handleItemClick = (e,{name}) => {
        this.setState({
            activeItem: name
        })
    }

    render() {
        var tabsArray = this.state.data.map((info,index) => {
            return <Menu.Item
                as = {Link}
                to = {info.link}
                name = {info.value}
                color = {"black"}
                active = {this.state.activeItem === info.link}
                onClick = {this.handleItemClick}
                >
                    {info.display}
                </Menu.Item>
        })        
    return(
        <Grid.Row className = "siteHeader">
            <Grid.Column computer = {4} only = {"computer"}/>
            <Grid.Column textAlign = {"center"} verticalAlign = {"middle"} computer  = {8} tablet = {16} mobile = {16}>
                <Menu borderless compact inverted>
                    {tabsArray}
                </Menu>
            </Grid.Column>    
        </Grid.Row> 

    );

    }
}