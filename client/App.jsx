import React from "react";
import Login from "./components/Login.jsx";
import Header from "./components/Header.jsx";
import Signup from "./components/Signup.jsx";
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
      firstName: "",
      lastName: "",
      email: "",
      title: "",
      author: "",
      content: "",
      path1: "",
      path2: "",
      isUpload: false,
      isLoginClicked: false,
      isLoggedin: false,
      isTitleClicked: false,
      signupButtonInLogin: false,
      titles: [],
      passages: []
    };
    this.onChangeFirstName = this.onChangeFirstName.bind(this);
    this.onChangeLastName = this.onChangeLastName.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.isLoginSuccess = this.isLoginSuccess.bind(this);
    this.loginButton = this.loginButton.bind(this);
    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.titleClickHandler = this.titleClickHandler.bind(this);
    this.pathClickHandler = this.pathClickHandler.bind(this);
    this.loginClickHandler = this.loginClickHandler.bind(this);
    this.signupButtonInLogin = this.signupButtonInLogin.bind(this);
    this.signupButton = this.signupButton.bind(this);
    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.onChangeAuthor = this.onChangeAuthor.bind(this);
    this.onChangeContent = this.onChangeContent.bind(this);
    this.onChangePath1 = this.onChangePath1.bind(this);
    this.onChangePath2 = this.onChangePath2.bind(this);
    this.homeSignupButton = this.homeSignupButton.bind(this);
  }
  //b
  onChangeFirstName(e) {
    this.setState({
      firstName: e.target.value
    });
  }
  //b
  onChangeLastName(e) {
    this.setState({
      lastName: e.target.value
    });
  }
  //b
  onChangeEmail(e) {
    this.setState({
      email: e.target.value
    });
  }
  //b
  onChangeUsername(e) {
    // console.log(e.target)
    this.setState({
      username: e.target.value
    });
  }
  //method for password input
  //b
  onChangePassword(e) {
    // console.log(e.target)
    this.setState({
      password: e.target.value
    });
  }

  onChangeTitle(e) {
    this.setState({
      title: e.target.value
    });
  }
  onChangeAuthor(e) {
    this.setState({
      author: e.target.value
    });
  }
  onChangeContent(e) {
    this.setState({
      content: e.target.value
    });
  }
  onChangePath1(e) {
    this.setState({
      path1: e.target.value
    });
  }
  onChangePath2(e) {
    this.setState({
      path2: e.target.value
    });
  }

  signupButtonInLogin() {
    // console.log('im clicked')
    // console.log('log in is false', this.state.isLoginClicked)
    this.setState(prevState => ({
      signupButtonInLogin: !prevState.signupButtonInLogin,
      isLoginClicked: !prevState.isLoginClicked
    }));
  }
  homeSignupButton() {
    this.setState(prevState => ({
      signupButtonInLogin: !prevState.signupButtonInLogin
    }));
  }
  //b
  //this method is for is
  loginClickHandler() {
    this.setState(prevState => ({ isLoginClicked: !prevState.isLoginClicked }));
  }
  //b
  isLoginSuccess() {
    this.setState(prevState => ({ isLoggedin: !prevState.isLoggedin }));
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
        this.setState(prevState => ({
          username: "",
          password: "",
          isLoginClicked: !prevState.isLoginClicked
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
          signupButtonInLogin: !prevState.signupButtonInLogin,
          // isUpload: !prevState.isUpload,
          isLoginClicked: prevState.isLoginClicked
        }))
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

  pathClickHandler() {}

  render() {
    // console.log('im in render', this.state.signupButtonInLogin)
    return (
      <div>
        {/* {console.log('hello',this.state.username)} */}
        <Header
          loginClickHandler={this.loginClickHandler}
          homeSignupButton={this.homeSignupButton}
        />

        {/* conditional rendering for storytitle component */}
        
        { this.state.isTitleClicked 
            ? 
          <PassageFeed pathClickHandler={this.pathClickHandler} passages={this.state.passages} /> 
            : 
          <TitleFeed titleClickHandler={this.titleClickHandler} titles={this.state.titles} />
        }

        {this.state.isUpload ? (
          <UploadNewStory
            onChangeTitle={this.onChangeTitle}
            onChangeAuthor={this.onChangeAuthor}
            onChangeContent={this.onChangeContent}
            onChangePath1={this.onChangePath1}
            onChangePath2={this.onChangePath2}
          />
        ) : (   
          <NewStoryButton />
        )}

        {/* if login button is clicked it will render login page
            if not it will render nothing or create home button? */}
        {this.state.isLoginClicked ? (
          <Login
            username={this.onChangeUsername}
            password={this.onChangePassword}
            loginButton={this.loginButton}
            signupButtonInLogin={this.signupButtonInLogin}
            firstName={this.onChangeFirstName}
            lastName={this.onChangeLastName}
            email={this.onChangeEmail}
          />
        ) : null
        // <TitleFeed />
        }

        {/* if sign up button is clicked will render sign up page */}
        {this.state.signupButtonInLogin ? (
          <Signup
            usrername={this.onChangeUsername}
            password={this.onChangePassword}
            firstName={this.onChangeFirstName}
            lastName={this.onChangeLastName}
            email={this.onChangeEmail}
            signupButton={this.signupButton}
          />
        ) : null}
      </div>
    );
  }
}

export default App;

// id , title, author, content, genre, parent, child1, child2, summary
