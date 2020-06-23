import {faPython,faJira,faJava,faAndroid,faHtml5,faCss3,faJs, faReddit, faReact, faGoogle,faAws} from '@fortawesome/free-brands-svg-icons'
import {Icon} from 'semantic-ui-react'
import React from 'react'

var colors = {
    "python": "#306998",
    "reddit": "#ff4500",
    "html" :  "#F16529",
    "css" :   "#264de4",
    "java": "#f89820",
    "react": "#659DBD",
    "android": "#3DDC84",
    "javascript":"#F0DB4F",
    "jira": "#0052CC",
    "google": "#34A853",
    "aws":"#FF9900"
}
export const projectData = [
    {
        "projectTitle": "Udayabhanu Panickar",
        "projectIcons": [
            {
                "icon":faReact,
                "color": colors.react
            },
            {
                "icon":faHtml5,
                "color":colors.html
            },
            {
                "icon":faCss3,
                "color": colors.css
            },
            {
                "icon":faJs,
                "color": colors.javascript
            },
            {
                "icon":faAws,
                "color": colors.aws
            }
        ],
        "projectDescription": "This is a customized blog created for my uncle. Features Google OAuth, a customized rich-text editor, DynamoDB.",
        "projectURL": "https://github.com/arun-ajay/udayabhanu-panickar-website",
        "type":
            <span>
                <Icon name = "user" color = {"black"} style = {{"margin-right":"5px"}}/>
                    Solo Project
            </span>,
        "status":
                <span>
                <Icon name = "cog" loading color = {"yellow"} style = {{"margin-right":"5px"}}/>
                    Work in Progress
                </span>
    },   
    {
        "projectTitle": "Team Up",
        "projectIcons": [
            {
                "icon":faPython,
                "color": colors.python
            },
            {
                "icon":faHtml5,
                "color":colors.html
            },
            {
                "icon":faCss3,
                "color": colors.css
            },
            {
                "icon":faJs,
                "color": colors.javascript
            },
        ],
        "projectDescription": "A Full Stack web application that will help users find team members to work on altruistic projects together.",
        "projectURL": "https://github.com/sajadgzd/TeamUp",
        "type":
            <span>
                <Icon name = "users" color = {"black"} style = {{"margin-right":"5px"}}/>
                    Collaborative Project
            </span>,
        "status":
                <span>
                <Icon name = "thumbs up outline" color = {"green"} style = {{"margin-right":"5px"}}/>
                    Completed
                </span>
    },   
    {
        "projectTitle": "NYPL-Tenable-Jira",
        "projectIcons": [
            {
                "icon":faPython,
                "color": colors.python
            },
            {
                "icon":faJira,
                "color":colors.jira
            }],
        "projectDescription": "Backend-system that organizes data from Tenable into a reduced ticket load for Jira ",
        "projectURL": "https://github.com/NYPL/NYPL-Tenable-Jira",
        "type":
            <span>
                <Icon name = "users" color = {"black"} style = {{"margin-right":"5px"}}/>
                    Collaborative Project
            </span>,
        "status":
                <span>
                <Icon name = "thumbs up outline" color = {"green"} style = {{"margin-right":"5px"}}/>
                    Completed
                </span>
    },   
    {
        "projectTitle": "Site Hearing",
        "projectIcons": [
            {
            "icon":faPython,
            "color": colors.python
            },
            {
                "icon":faHtml5,
                "color": colors.html
            },
            {
                "icon":faCss3,
                "color": colors.css
            },
            {
                "icon":faJs,
                "color": colors.javascript
            },
            {
                "icon":faGoogle,
                "color": colors.google
            }
        ],
        "projectDescription": "A web application that scan's a tourist location and provides a tour of landmarks of the area via a human-like verbalization",
        "projectURL": "https://github.com/Gerard-Cancino/SiteHearing",
        "type":
            <span>
                <Icon name = "users" color = {"black"} style = {{"margin-right":"5px"}}/>
                    Collaborative Project
            </span>,
        "status":
                <span>
                <Icon name = "thumbs up outline" color = {"green"} style = {{"margin-right":"5px"}}/>
                    Completed
                </span>
    },
    {
        "projectTitle": "arunajay.com",
        "projectIcons": [
            {
            "icon":faReact,
            "color": colors.react
            },
            {
                "icon":faHtml5,
                "color": colors.html
            },
            {
                "icon":faCss3,
                "color": colors.css
            },
            {
                "icon":faJs,
                "color": colors.javascript
            }
        ],
        "projectDescription": "My personal website (you're on it!). Feel free to use this!",
        "projectURL": "https://github.com/arun-ajay/arun-ajay-website",
        "type":
            <span>
                <Icon name = "user" color = {"black"} style = {{"margin-right":"5px"}}/>
                    Solo Project
            </span>,
        "status":
                <span>
                <Icon name = "cog" loading color = {"yellow"} style = {{"margin-right":"5px"}}/>
                    Work in Progress
                </span>
    },
    {
        "projectTitle": "Reddi-lert",
        "projectIcons": [
            {
            "icon":faPython,
            "color": colors.python
            },
            {
                "icon":faReddit,
                "color": colors.reddit
            }
        ],
        "projectDescription": "Notifies a user if specified content from a subreddit has just been posted.",
        "projectURL": "https://github.com/arun-ajay/Reddi-lert",
        "type":
            <span>
                <Icon name = "user" color = {"black"} style = {{"margin-right":"5px"}}/>
                    Solo Project
            </span>,
        "status":
                <span>
                <Icon name = "question circle" color = {"purple"} style = {{"margin-right":"5px"}}/>
                     Potential Updates
                </span>
    },
    {
        "projectTitle": "Weight Loss App",
        "projectIcons": [
            {
            "icon":faJava,
            "color": colors.java
            },
            {
                "icon":faAndroid,
                "color": colors.android
            }
        ],
        "projectDescription": "Android application that tracks a user's weight loss period and calculates trends over time.",
        "projectURL": "https://github.com/arun-ajay/Weight-Loss-App-Tracker",
        "type":
            <span>
                <Icon name = "user" color = {"black"} style = {{"margin-right":"5px"}}/>
                    Solo Project
            </span>,
        "status":
                <span>
                <Icon name = "thumbs up outline" color = {"green"} style = {{"margin-right":"5px"}}/>
                    Completed
                </span>
    },
    {
        "projectTitle": "Stuntin' Shunt",
        "projectIcons": [{
            "icon":faPython,
            "color": colors.python
            }
        ],
        "projectDescription": "An arduino system that monitors shunt activity and notifies a physician when a potential blockage has occurred",
        "projectURL": "https://github.com/arun-ajay/stuntin-shunt",
        "type":
            <span>
                <Icon name = "users" color = {"black"} style = {{"margin-right":"5px"}}/>
                    Collaborative Project
            </span>,
        "status":
                <span>
                <Icon name = "thumbs up outline" color = {"green"} style = {{"margin-right":"5px"}}/>
                    Completed
                </span>
    }

]