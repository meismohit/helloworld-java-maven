import React, { Component } from "react";
import { Grid, Row, Col } from "react-bootstrap";
// import { useHistory } from "react-router-dom";
import { withRouter } from 'react-router-dom';
import { UserCard } from "../components/UserCard/UserCard.jsx";

import avatar from "../assets/img/bot.png";
import bkgrnd from "../assets/img/background.png";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      question: ''
    };
    this.routeChange = this.routeChange.bind(this);
  }

  routeChange() {
    let path = `chat`;
    this.props.history.push(path);
  }

  myChangeHandler = (event) => {
    this.setState({question: event.target.value});
  }

  sendQuestion = () => {
    localStorage.setItem('homequestion',this.state.question)
    this.setState({
      question: ""
    })
    this.routeChange();
  }
  
  render() {
    return (
      <div className="content">
        <Grid fluid>
        <UserCard
                bgImage={bkgrnd}
                avatar={avatar}
                description = {
                  <span className="home-text">Hi<b> Mohit Tripathi,</b> <br/>Welcome to the FLEbot. I am your virtual assistant to help you with
                  queries around content and information. For access issues please refer GSR References in the sidebar.</span>
                }
                />
          <div className="col-sm-12 home-chat-question">
            <div className="query-title">Type your query here</div>
            <br/>
              <div className="col-sm-11">
                <input type="text" placeholder="Type a question" 
                  className="form-control"
                  value={this.state.question} 
                  onChange={this.myChangeHandler}/>
              </div>
              <div className="col-sm-1">
              <button type="button" class="btn btn-info btn-fill"
                onClick={this.sendQuestion}>Send</button>
              </div>
              <div className="col-sm-12 ">
              <br/>
              <div className="set-faq-bkgrnd">
                <div className="query-title">Frequently asked questions</div>
              <br/>
                {/* <div className="col-sm-4 asked-question-block">More than one EAR application found in the same drop location</div> */}
                <div className="col-sm-4 asked-question-block">No valid artifact directory found</div>
                <div className="col-sm-4 asked-question-block">Build failing on checkmarx step</div>
                <div className="col-sm-4 asked-question-block">No valid artifact directory found</div>
                <div className="col-sm-4 asked-question-block">Build failing on checkmarx step</div>
                
              </div>
              </div>
            </div>
          </Grid>
      </div>
    );
  }
}

export default Home;
