import React from 'react';
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
    "react": "#61dbf",
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
        "technologies":[]
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

        ]
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

        ]
    }
    
]