import React,{Component} from 'react';
import './Footer.css';
import  {Grid,Label,Button,Icon} from 'semantic-ui-react';



export default class Footer extends Component {
    state = {}

    handleFooterLabelClick = () => {
        window.open("https://github.com/arun-ajay/arun-ajay-website","_blank")
    }


    render() {

    return(
        <Grid.Row columns = {1} className = "footerComponentMainRow">
            <Grid.Column only = {"computer"} width = {16} textAlign = {"center"} verticalAlign = {"middle"}>
                <Button  labelPosition= {"left"} onClick = {this.handleFooterLabelClick}>
                    <Label circular  icon = {"github"} color = {"black"}/>
                    <Button compact circular animated = {"vertical"} color = {"black"}>
                        <Button.Content visible>
                            Arun Ajay
                        </Button.Content>
                        <Button.Content hidden>
                            Source Code!
                        </Button.Content>
                    </Button>
                </Button>
            </Grid.Column>
            <Grid.Column only = {"tablet mobile"} width = {16} textAlign = {"center"} verticalAlign = {"middle"}>
                <Button color = {"black"} compact circular onClick = {this.handleFooterLabelClick}>
                    <Button.Content>
                    <Icon name = "hand point right outline"/>Click to see the source code! <Icon name = "hand point left outline"/>
                    </Button.Content>
                </Button>
            </Grid.Column>
        </Grid.Row>

    );

    }
}