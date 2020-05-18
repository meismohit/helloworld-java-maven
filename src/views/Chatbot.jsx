import React, { Component } from "react";
import { Grid, Row, Col } from "react-bootstrap";


class Chatbot extends Component {
  constructor(props) {
    super(props);
    this.state = {
      questionArray:[],
      question: ''
    };
  }

  myChangeHandler = (event) => {
    this.setState({question: event.target.value});
  }

  fetchAnswer = () => {
    let ansArray = this.state.questionArray;
    let newAnswer = {
      type: 'bot',
      message: 'Answer from the Bot'
    }
    ansArray.push(newAnswer);
    this.setState({
      questionArray: ansArray
    })
  }

  sendQuestion = (newQ) => {
    let qArray = this.state.questionArray;
    let newQuestion = {
      type: 'user',
      message: newQ
    }
    if(this.state.question || newQ){
      qArray.push(newQuestion);
    }
    this.setState({
      questionArray: qArray,
      question: ""
    })
    if(this.state.question || newQ ){
    this.fetchAnswer()
    }
  }

  componentDidMount(){
    let homequestion = localStorage.getItem('homequestion')
    this.sendQuestion(homequestion);
  }

  componentWillUnmount(){
    this.setState({
      questionArray: [],
      question: ""
    })
    localStorage.setItem('homequestion','')
  }
  
  render() {
    return (
      <div className="content fluid chat-block">
          <Grid>
            {this.state.questionArray.length > 0 && (
            <div>
              {this.state.questionArray.map((item) => {
                return (<>
                  {item.type === 'user' ? 
                    <div className="speech-bubble-user pull-right">{item.message}</div> :
                    <div className="speech-bubble-bot">{item.message}</div>
                    }<br/><br /></>)
              })}
            </div>)}
          <div className="col-sm-12 chat-question">
              <div className="col-sm-11">
                <input type="text" placeholder="Type a question" 
                  className="form-control"
                  value={this.state.question} 
                  onChange={this.myChangeHandler}/>
              </div>
              <div className="col-sm-1">
              <button type="button" class="btn btn-info btn-fill"
                onClick={()=> this.sendQuestion(this.state.question)}>Send</button>
              </div>
            </div>
            </Grid>
      </div>
    );
  }
}

export default Chatbot;
