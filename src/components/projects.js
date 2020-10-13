import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardActions, CardMenu, Button, IconButton, CardText } from 'react-mdl';

class Projects extends Component {
    constructor(props){
        super(props);
        this.state = { activeTab: 0 };
    }

    toggleCategories(){
        if(this.state.activeTab === 0){
            return(
              <Card shadow={5} style={{width: '512px', margin: 'auto'}}>
                <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://user-images.githubusercontent.com/60904436/85801109-cbcbb300-b707-11ea-8b04-483cb26e0106.png) center/cover'}}>Recipe Hub</CardTitle>
                <CardText>
                   This Project was assigned to me and 2 
                   other class matesin my Coding Bootcamp.
                </CardText>
                <CardActions border>
                  <a target="_blank" rel="noopener noreferrer" href="https://github.com/dbreznay/Recipe-Hub" ><Button colored>GitHub</Button></a>
                  <a target="_blank" rel="noopener noreferrer" href="https://dbreznay.github.io/Recipe-Hub/."><Button colored>Live Link</Button></a>
                </CardActions>
                <CardMenu style={{color: '#fff'}}>
                  <IconButton name="share"/>
                </CardMenu>
              </Card>
            )
        } else if(this.state.activeTab === 1) {
            return (
              <Card shadow={5} style={{width: '512px', margin: 'auto'}}>
                <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://user-images.githubusercontent.com/60904436/90958432-278d9080-e45a-11ea-8577-1baa9d9c33fb.png) center / cover'}}>SiteLogic</CardTitle>
                <CardText>
                Site Logic provides tools to help you manage your projects across your entire organization.
                </CardText>
                <CardActions border>
                  <a target="_blank" rel="noopener noreferrer" href="https://github.com/dbreznay/Recipe-Hub" ><Button colored>GitHub</Button></a>
                  <a target="_blank" rel="noopener noreferrer" href="https://dbreznay.github.io/Recipe-Hub/."><Button colored>Live Link</Button></a>
                </CardActions>
                <CardMenu style={{color: '#fff'}}>
                  <IconButton name="share" />
                </CardMenu>
              </Card>
     
            )
        } else if(this.state.activeTab === 2) {
            return (
                <Card shadow={5} style={{width: '512px', margin: 'auto'}}>
                <CardTitle style={{color: '#fff', height: '176px', background: 'url(http://www.getmdl.io/assets/demos/welcome_card.jpg) center / cover'}}>Welcome</CardTitle>
                <CardText>
                   Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                   Mauris sagittis pellentesque lacus eleifend lacinia...
                </CardText>
                <CardActions border>
                  <Button colored>Get Started</Button>
                </CardActions>
                <CardMenu style={{color: '#fff'}}>
                  <IconButton name="share" />
                </CardMenu>
              </Card>
            )
        }else if(this.state.activeTab === 3) {
            return (
                <Card shadow={5} style={{width: '512px', margin: 'auto'}}>
                <CardTitle style={{color: '#fff', height: '176px', background: 'url(http://www.getmdl.io/assets/demos/welcome_card.jpg) center / cover'}}>Welcome</CardTitle>
                <CardText>
                   Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                   Mauris sagittis pellentesque lacus eleifend lacinia...
                </CardText>
                <CardActions border>
                  <Button colored>Get Started</Button>
                </CardActions>
                <CardMenu style={{color: '#fff'}}>
                  <IconButton name="share" />
                </CardMenu>
              </Card>
            )
        }

    }

    render() {
        return(
            <div className="category-tabs">
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({activeTab: tabId})} ripple>
                  <Tab>JAM Stack</Tab>
                  <Tab>NodeJS</Tab>
                  <Tab>MongoDB</Tab>
                  <Tab>Express</Tab>
                </Tabs>

                <section className="projects-grid">
                    <Grid className="projects-grid">
                        <Cell col={12}>
                            <div className="content">{this.toggleCategories()}</div>
                        </Cell>
                    </Grid>
                </section>
            </div>
        )
    }
}

export default Projects;