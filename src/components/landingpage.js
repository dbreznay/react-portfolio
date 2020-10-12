import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Landing extends Component {
    render() {
        return(
            <div style={{width: '100%', margin: 'auto'}} >
               <Grid className="landing-grid">
                   <Cell col={12}>
                       <img 
                          src="https://user-images.githubusercontent.com/60904436/91752409-f44eae00-eb8b-11ea-84e6-870909f5f6bd.jpg"
                          alt="me"
                          className="me-img" 
                        />
                       <div className="banner-text">
                          <h1>Full Stack Web Developer</h1>

                          <hr/>

                          <p>HTML/CSS | Bootstrap | JavaScript | MERN Stack</p>

                        <div className="social-links">
                           {/* LinkedIn */}
                           <a href="https://www.linkedin.com/in/dylan-breznay-a76974162/"rel="noopener noreferrer" target="_blank">
                             <i className=" fa fa-linkedin-square" aria-hidden="true"/>
                           </a>

                           {/* GitHub */}
                           <a href="https://github.com/dbreznay"rel="noopener noreferrer" target="_blank">
                             <i className=" fa fa-github" aria-hidden="true"/>
                           </a>

                           {/* Instagram */}
                           <a href="https://instagram.com/dylan.breznay?r=nametag"rel="noopener noreferrer" target="_blank">
                             <i className=" fa fa-instagram" aria-hidden="true"/>
                           </a>

                        </div>
                         
                       </div>
                   </Cell>
                </Grid> 
            </div>
        )
    }
}

export default Landing;