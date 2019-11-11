import React from "react";
import Login from "./components/Login.jsx";
import Header from "./components/Header.jsx";
import Signup from "./components/Signup.jsx";
import LoginSignupButtons from './components/LoginSignupButtons.jsx';
import UploadNewStory from "./components/UploadNewStory.jsx";
import TitleFeed from "./components/TitleFeed.jsx";
import PassageFeed from './components/PassageFeed.jsx';
import axios from 'axios';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: '',
      firstName: '',
      lastName: '',
      email: '',
      title: '',
      author: '',
      content: '',
      path1: '',
      path2: '',
      isSignup: false,
      isLogin: false,
      isLoggedIn: false,
      isUpload: false,
      isPassage: false,
      isLoggedin: false,
      titles: [],
      passages: [],
      childButtonClicked: 0,
    };
    this.onChangeInput = this.onChangeInput.bind(this);
    this.isLoginSuccess = this.isLoginSuccess.bind(this);
    this.loginButton = this.loginButton.bind(this);
    this.titleClickHandler = this.titleClickHandler.bind(this);
    this.pathClickHandler = this.pathClickHandler.bind(this);
    this.loginClickHandler = this.loginClickHandler.bind(this);
    this.isSignup = this.isSignup.bind(this);
    this.signupButton = this.signupButton.bind(this);
    this.homeSignupButton = this.homeSignupButton.bind(this);
    this.toggleIsUpload = this.toggleIsUpload.bind(this);
    this.handleUploadPassage = this.handleUploadPassage.bind(this)
  }
  
  onChangeInput(e) {
    let object = {};                 
    object[e.target.name] = e.target.value;    
    this.setState(object);                           
  }

  isSignup() {
    this.setState(prevState => ({
      isSignup: !prevState.isSignup,
      isLogin: !prevState.isLogin
    }));
  }
  homeSignupButton() {
    this.setState(prevState => ({
      isSignup: !prevState.isSignup
    }));
  }
  toggleIsUpload() {
    this.setState(prevState => ({
      isUpload: !prevState.isUpload
    }));
  }
  //b
  loginClickHandler() {
    this.setState(prevState => ({ isLogin: !prevState.isLogin }));
  }
  //b
  isLoginSuccess() {
    this.setState(prevState => ({ isLoggedin: !prevState.isLoggedin }));
  }
  //method for login button ------------------------------------------------------
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
        this.setState(prevState => ({
          username: "",
          password: "",
          isLogin: !prevState.isLogin,
          isLoggedIn: true,
        }))
      );
  }
  //sign up fetch request
  signupButton() {
    fetch("/signup", {
      method: "POST",
      header: { "content-type": "application/json" },
      body: JSON.stringify({
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        email: this.state.email,
        username: this.state.username,
        password: this.state.password
      })
    })
      .then(data => console.log(`sign up has been success ${data}`))
      .then(
        this.setState(prevState => ({
          isSignup: !prevState.isSignup,
          // isUpload: !prevState.isUpload,
          isLogin: !prevState.isLogin,
          isLoggedIn: true,
        }))
      );
  }

  handleUploadPassage() {
    let childId = this.state.childButtonClicked;
    let parentId = 0;
    if (this.state.passages.length !== 0) { 
      parentId = this.state.passages[this.state.passages.length - 1]._id; 
    }
    const passageObject = {};
    passageObject.title = this.state.title;
    passageObject.author = this.state.author;
    passageObject.content = this.state.content;
    passageObject.path1 = this.state.path1;
    passageObject.path2 = this.state.path2;
    passageObject.parent = parentId;
    passageObject.childId = childId;
    axios.post('/uploadPassage', passageObject)
      .then(res => {
        this.setState({
          isUpload: false,
          childButtonClicked: 0,
        });
      })
  }
  
  titleClickHandler(id) {
    axios.get(`/getPassage/${id}`)
    .then(res => {
      const newPassages = [...this.state.passages];
      newPassages.push({...res.data[0]})
      this.setState(prevState => ({ 
      passages: newPassages,
      isPassage: !prevState.isPassage 
    }))}  
  )}
  
  pathClickHandler(childId, buttonId) {
    if(childId === 0) {
      this.setState({
        childButtonClicked: buttonId,
        isUpload: true,
      });
    } else {
      axios.get(`/getPassage/${childId}`)
      .then(res => {
        const newPathpassages = [...this.state.passages];
        newPathpassages.push({...res.data[0]})
        this.setState(prevState => ({ 
        passages: newPathpassages,
        isPathClicked: !prevState.isPathClicked 
      }))}  
    )}
  }

  render() {
    return (
      <div>
        <Header />
        
        {/* conditional rendering for storytitle component */}

        {!this.state.isLogin && !this.state.isLoggedIn && <LoginSignupButtons loginClickHandler={this.loginClickHandler} homeSignupButton={this.homeSignupButton} /> }
        
        { this.state.isSignup ? 
              <Signup onChangeInput={this.onChangeInput} signupButton={this.signupButton} />
              : this.state.isLogin ? 
              <Login onChangeInput={this.onChangeInput} loginButton={this.loginButton} isSignup={this.isSignup} />
              : this.state.isUpload ?
              <UploadNewStory onChangeInput={this.onChangeInput} handleUploadPassage={this.handleUploadPassage} />
              : this.state.isPassage ?
              <PassageFeed pathClickHandler={this.pathClickHandler} passages={this.state.passages} />
                : <TitleFeed titleClickHandler={this.titleClickHandler} titles={this.state.titles} toggleIsUpload={this.toggleIsUpload} />
        }
        
      </div>
    );
  }
}

export default App;

// id , title, author, content, genre, parent, child1, child2, summary
