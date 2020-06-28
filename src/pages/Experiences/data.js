import React from 'react';
import {List,Icon} from 'semantic-ui-react';
import {faPython,faHtml5,faCss3,faJs,faAngular, faReact, faAws} from '@fortawesome/free-brands-svg-icons'
import {faDatabase,faMapMarkerAlt,faCalendarAlt} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
var colors = {
    "python": "#306998",
    "html" :  "#F16529",
    "css" :   "#264de4",
    "java": "#f89820",
    "javascript":"#F0DB4F",
    "sql": "#812878",
    "angular": "#b52e31",
    "react": "#61DBFB",
    "amazon": "ORANGE"
}

export const experiencesData = [
    {
        "company" : "Bank of America",
        "image": "BOFA.png",
        "title" : "Global Technology Summer Analyst Intern",
        "location": <span><FontAwesomeIcon icon = {faMapMarkerAlt}/> Manhattan,NY</span>,
        "term" : <span> <FontAwesomeIcon icon = {faCalendarAlt}/> Summer 2020 </span>,
        "fontColor" : "#0061aa",
        "technologies":[],
        "description": "Coming soon!"
    },
    {
        "company" : "The New York Public Library",
        "title" : "Systems Engineering Intern",
        "image": "NYPL.jpg",
        "location": <span><FontAwesomeIcon icon = {faMapMarkerAlt}/> Manhattan,NY</span>,
        "term" :<span> <FontAwesomeIcon icon = {faCalendarAlt}/> October 2019 - May 2020 </span>,
        "fontColor" : "black",
        "technologies":[
            {
                "icon":faReact,
                "color":colors.react
            },
            {
                "icon":faPython,
                "color":colors.python
            },
            {
                "icon":faHtml5,
                "color":colors.html
            },
            {
                "icon":faCss3,
                "color":colors.css
            },
            {
                "icon":faJs,
                "color":colors.javascript
            },
            {
                "icon":faDatabase,
                "color":colors.sql
            },
            {
                "icon":faAws,
                "color":colors.amazon
            }

        ],
        "description": 
            <List >
                <List.Item>
                    <List.Icon name = 'code branch'/>
                    <List.Content>
                        <List.Header style = {{"color" : "black"}}>Tenable-Jira Ticketing System</List.Header>
                        <List.Description>
                            <Icon name = "python" style = {{"color":colors.python}}></Icon>
                            <Icon name = "database" style = {{"color":colors.sql}}></Icon>
                            <p style = {{"color" : "black"}}>
                            Created a ticketing system that processes scan reports streamed from Tenable REST APIs, 
                            reduces the ticket load from several thousand to approximately 
                            a dozen per scan type, and converts them into tickets through Jira REST APIs using Python and SQL
                            </p>
                        </List.Description>
                    </List.Content>
                </List.Item>
                <List.Item>
                    <List.Icon name = 'code branch'/>
                    <List.Content>
                        <List.Header style = {{"color" : "black"}}>Desktop Provisioner Server</List.Header>
                        <List.Description>
                            <Icon name = "python" style = {{"color":colors.python}}></Icon>
                            <Icon name = "aws" style = {{"color":colors.amazon}}></Icon>
                            <p  style = {{"color" : "black"}}>
                            Built a server using Flask that processes HTTP requests for the creation, termination, and status check of AWS Workspaces (desktops) and was deployed on AWS Elastic Beanstalk using Python
                            </p>
                        </List.Description>
                    </List.Content>
                </List.Item>
                <List.Item>
                    <List.Icon name = 'code branch'/>
                    <List.Content>
                        <List.Header style = {{"color" : "black"}}>Enhanced Image Search Demo</List.Header>
                        <List.Description>
                            <Icon name = "python" style = {{"color":colors.python}}></Icon>
                            <Icon name = "aws" style = {{"color":colors.amazon}}></Icon>
                            <Icon name = "react" style = {{"color":colors.react}}></Icon>
                            <Icon name = "html5" style = {{"color":colors.html}}></Icon>
                            <Icon name = "css3" style = {{"color":colors.css}}></Icon>
                            <Icon name = "js" style = {{"color":colors.javascript}}></Icon>
                            <p style = {{"color" : "black"}}>
                            Developed a full-stack web application that simulated an enhanced search query of images from NYPL’s Digital Collections using React, Python, SQL. Built a server, using Flask, to supply the front-end with images filtered by the metadata extracted from AWS Rekognition 
                            </p>
                        </List.Description>
                    </List.Content>
                </List.Item>
                <List.Item>
                    <List.Icon name = 'code branch'/>
                    <List.Content>
                        <List.Header style = {{"color" : "black"}}>Branch Hours Retrieval for Chatbot</List.Header>
                        <List.Description>
                            <Icon name = "python" style = {{"color":colors.python}}></Icon>
                            <Icon name = "aws" style = {{"color":colors.amazon}}></Icon>
                            <p style = {{"color" : "black"}}>
                            Created a function within AWS Lambda that was designed to control the dialogue flow between the user and the chatbot, AWS Lex, in order to retrieve the branch hours of a location using Python
                            </p>
                        </List.Description>
                    </List.Content>
                </List.Item>
                <List.Item>
                    <List.Icon name = 'code branch'/>
                    <List.Content>
                        <List.Header style = {{"color" : "black"}}>SMS/Voice Alert Interface Demo</List.Header>
                        <List.Description>
                            <Icon name = "aws" style = {{"color":colors.amazon}}></Icon>
                            <Icon name = "react" style = {{"color":colors.react}}></Icon>
                            <Icon name = "html5" style = {{"color":colors.html}}></Icon>
                            <Icon name = "css3" style = {{"color":colors.css}}></Icon>
                            <Icon name = "js" style = {{"color":colors.javascript}}></Icon>
                            <p style = {{"color" : "black"}}>
                            Developed a full-stack web application that enables users to send customizable messages via SMS/Voice via AWS Pinpoint to multiple numbers using React and Express.js. Authenticated users prior to accessing the platform with Google using the OAuth 2.0 API via the authentication middleware, Passport.js
                            </p>
                        </List.Description>
                    </List.Content>
                </List.Item>
            </List>
    },
    {
        "company" : "Bank of America - Merill Lynch",
        "image": "BOFAML.jpg",
        "title" : "Global Technology Summer Analyst Intern",
        "location": <span><FontAwesomeIcon icon = {faMapMarkerAlt}/> Manhattan,NY</span>,
        "term" : <span> <FontAwesomeIcon icon = {faCalendarAlt}/> Summer 2019 </span>,
        "fontColor" : "#0061aa",
        "technologies":[
            {
                "icon":faAngular,
                "color":colors.angular
            },
            {
                "icon":faPython,
                "color":colors.python
            },
            {
                "icon":faHtml5,
                "color":colors.html
            },
            {
                "icon":faCss3,
                "color":colors.css
            },
            {
                "icon":faJs,
                "color":colors.javascript
            },
            {
                "icon":faDatabase,
                "color":colors.sql
            },

        ],
        "description": 
                <List>
                    <List.Item>
                        <List.Icon name = 'code branch'/>
                        <List.Content>
                            <List.Header style = {{"color" : "#0061aa"}}>Jargon Buster</List.Header>
                            <List.Description>
                                <Icon name = "angular" style = {{"color":colors.angular}}></Icon>
                                <Icon name = "python" style = {{"color":colors.python}}></Icon>
                                <Icon name = "html5" style = {{"color":colors.html}}></Icon>
                                <Icon name = "css3" style = {{"color":colors.css}}></Icon>
                                <Icon name = "js" style = {{"color":colors.javascript}}></Icon>
                                <Icon name = "database" style = {{"color":colors.sql}}></Icon>
                                <p style = {{"color" : "#0061aa"}}>
                                Built a full-stack web application that enables analysts to query for reports and automates the 
                                extraction, tagging, and delineation of industry jargon using Angular, Python, SQL, and a REST API
                                </p>
                            </List.Description>
                        </List.Content>
                    </List.Item>
                </List>
    }
    
]