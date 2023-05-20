import React from 'react'
import Navbar from './Navbar'

export default function About(props) {
  return (
    <div>
<Navbar/>
<script src="//netdna.bootstrapcdn.com/bootstrap/3.0.0/js/bootstrap.min.js"></script>
<script src="//code.jquery.com/jquery-1.11.1.min.js"></script>
<div class="aboutus-section">
        <div class="container">
            <div class="row">
                <div class="col-md-3 col-sm-6 col-xs-12">
                    <div class="aboutus">
                        <h2 class="aboutus-title">About Us</h2>
                        <p class="aboutus-text">Designed and Develpoed by a 3rd year Engineering Student</p>
                        <p class="aboutus-text">This is samle project for displaying news on the website with the help of API. NewsAPI is used in order to fetch data from their sources and display on the main page </p>
                        <a class="aboutus-more" href="https://www.linkedin.com/in/sunmeet-joshi-a4b07a14b/">read more</a>
                    </div>
                </div>
                <div class="col-md-3 col-sm-6 col-xs-12">
                    <div class="aboutus-banner">
                        <img src="https://media.licdn.com/dms/image/D4D03AQG8jYJPJQaj1A/profile-displayphoto-shrink_800_800/0/1666356272443?e=1689811200&v=beta&t=sNxlQzWlPIL9hLU_PMKjyvP2pkQPaoUY0DcfXgIM4kI" style={{width:240,paddingLeft:10 }}alt=""/>
                    </div>
                </div>
                <div class="col-md-5 col-sm-6 col-xs-12">
                    <div class="feature">
                        <div class="feature-box">
                            <div class="clearfix">
                                <div class="iconset">
                                    <span class="glyphicon glyphicon-cog icon"></span>
                                </div>
                                <div class="feature-content">
                                    <h4>Experience</h4>
                                    <p>Developed first project in Reactjs,and have an experience of 1 Year in creating porjects in HTML,Css,Javascript,react life cycle,react class anf funcation based components </p>
                                </div>
                            </div>
                        </div>
                        <div class="feature-box">
                            <div class="clearfix">
                                <div class="iconset">
                                    <span class="glyphicon glyphicon-cog icon"></span>
                                </div>
                                <div class="feature-content">
                                    <h4>Learnings</h4>
                                    <p>Learned a lot of minute such as about hook,props,usesate,etc by working on this project</p>
                                </div>
                            </div>
                        </div>
                        <div class="feature-box">
                            <div class="clearfix">
                                <div class="iconset">
                                    <span class="glyphicon glyphicon-cog icon"></span>
                                </div>
                                <div class="feature-content">
                                    <h4>Great support</h4>
                                    <p>Took references from react documentation,youtube and self exploration</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

