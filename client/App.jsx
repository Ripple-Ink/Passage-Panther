import React from "react";
import Login from "./components/Login.jsx";
import Header from './components/Header.jsx';
import NewStoryButton from "./components/NewStoryButton.jsx";
import UploadNewStory from "./components/UploadNewStory.jsx";
import TitleFeed from "./components/TitleFeed.jsx";
import PassageFeed from './components/PassageFeed.jsx';
import axios from 'axios';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: "",
      isUpload: false,
      isLoggedin: false,
      isTitleClicked: false,
      // isPathClicked: false,
      titles: [{_id: 11, title: 'Harry Potter', author: 'Mactruck'}, {_id: 8, title: 'Lord of the Ring', author: 'Mactruck'}],
      passages: []
    };
    this.loginButton = this.loginButton.bind(this);
    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.titleClickHandler = this.titleClickHandler.bind(this);
    this.pathClickHandler = this.pathClickHandler.bind(this);
  }

  onChangeUsername(e) {
    this.setState({
      username: e.target.value
    });
  }
  //method for password input
  onChangePassword(e) {
    this.setState({
      password: e.target.value
    });
  }
  //
  loginClickHandler(){
    this.setState(preState => (
      {isLoggedin:!preState.isLoggedin}
    ))
  }
  //method for login button
  loginButton() {
    fetch("/login", {
      method: "POST",
      header: { "content-type": "application/json" },
      body: JSON.stringify({
        username: this.state.username,
        password: this.state.password
      })
    })
    .then(data => {
      console.log(`hey post request was success ${data}`);
    })
    .then(
      this.setState({
        username: "",
        password: ""
      })
    );
  }

  // getAllTitles() {
  //   axios.get(`/getPassage/${id}`)
  //   .then(res => this.setState(prevState => ({ 
  //     passages: prevState.passages.push({...res.data[0]}),
  //     isTitleClicked: !prevState.isTitleClicked 
  //   })))  
  // }

  titleClickHandler(id) {
    axios.get(`/getPassage/${id}`)
    .then(res => {
      const newPassages = [...this.state.passages];
      newPassages.push({...res.data[0]})
      this.setState(prevState => ({ 
      passages: newPassages,
      isTitleClicked: !prevState.isTitleClicked 
    }))}  
  )}
  
  pathClickHandler(childId) {
    axios.get(`/getPassage/${childId}`)
    .then(res => {
      const newPathpassages = [...this.state.passages];
      newPathpassages.push({...res.data[0]})
      this.setState(prevState => ({ 
      passages: newPathpassages,
      isPathClicked: !prevState.isPathClicked 
    }))}  
  )}

  render() {
    return (
      <div>
        <Header loginClickHandler={this.loginClickHandler} />
        {/* header is render Passages and login button */}
        {this.state.isUpload ? <UploadNewStory /> : <NewStoryButton />}
        
        {/* conditional rendering for storytitle component */}
        
        { this.state.isTitleClicked 
            ? 
          <PassageFeed pathClickHandler={this.pathClickHandler} passages={this.state.passages} /> 
            : 
          <TitleFeed titleClickHandler={this.titleClickHandler} titles={this.state.titles} />
        }

      </div>
    )
  }
}

export default App;

// id , title, author, content, genre, parent, child1, child2, summary

