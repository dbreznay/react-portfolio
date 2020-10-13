import React, { Component } from 'react';
import { Grid, Cell} from 'react-mdl';

class Contact extends Component {
    render() {
        return(
            <div className="contact-body">
        <Grid className="contact-grid">
          <Cell col={6}>
            <h2>Dylan Breznay</h2>
            <img
              src="https://user-images.githubusercontent.com/60904436/91752409-f44eae00-eb8b-11ea-84e6-870909f5f6bd.jpg"
              alt="avatar"
              style={{height: '250px'}}
               />
             <p style={{ width: '75%', margin: 'auto', paddingTop: '1em'}}>Full Stack Web Developer</p>

          </Cell>
          <Cell col={6}>
            <h2>Contact Me</h2>
            <hr/>

            <div className="contact-list">
              <List>

                <ListItem>
                  <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                    <i className="fa fa-fax" aria-hidden="true"/>
                    (615) 739-8121
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                    <i className="fa fa-envelope" aria-hidden="true"/>
                    Breznay@me.com
                  </ListItemContent>
                </ListItem>

              </List>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}
       
export default Contact;