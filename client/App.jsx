import React from 'react';
import Header from './components/Header.jsx';
import WriteNewStory from './components/WriteNewStory.jsx';
import NewStoryButton from './components/NewStoryButton.jsx';
import Login from './components/Login.jsx';
import TitleFeed from './components/TitleFeed.jsx';
import PassageFeed from './components/PassageFeed.jsx';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: "",
      isUpload: false,
      isTitleClicked: false,
      titles: [{id: 1, title: 'title: Harry Potter', author: 'author: Mactruck'}],
      passages: [{id: 1, title: 'Harry Potter', author: 'Mactruck', content:'Scott is samshibsam'}] 
    };
    // this.login = this.login.bind(this);
    // this.onChangeUsername = this.onChangeUsername.bind(this);
    // this.onChangePassword = this.onChangePassword.bind(this);
  }
  //method for username input
  // onChangeUsername(e) {
  //   // let newUserName = this.state.username;
  //   this.setState({
  //     username: e.target.value
  //   });
  // }
  // //method for password input
  // onChangePassword(e) {
  //   this.setState({
  //     password: e.target.value
  //   });
  // }
  // //method for login button
  // loginButton() {
  //   fetch("/login", {
  //     method: "POST",
  //     header: { "content-type": "application/json" },
  //     body: JSON.stringify({
  //       username: this.state.username,
  //       password: this.state.password
  //     })
  //   })
  //     // .then(data => data.json())
  //     .then(data => {
  //       console.log(`hey post request was success ${data}`);
  //     })
  //     .then(
  //       this.setState({
  //         username: "",
  //         password: ""
  //       })
  //     );
  // }

  titleClickHandler() {
    this.setState(prevState => ({ 
      isTitleClicked: !prevState.isTitleClicked 
    }))
  }
  

  pathClickHandler() {
    
  }

  render() {
    return (
      <div>
        <Header /> {/* header is render Passages and login button */}
        {this.state.isUpload ? <WriteNewStory /> : <NewStoryButton/>}{/* if  */}
        
        {/* conditional rendering for click */}
        {isTitleClicked} 
          ? 
          <PassageFeed pathClickHandler={this.pathClickHandler} passages={this.state.passages} /> 
          : 
          <TitleFeed titleClickHandler={this.titleClickHandler} titles={this.state.titles} /> 

        {/* */}

      </div>
    );
  }
}

export default App;


// id , title, author, content, genre, parent, child1, child2, summary

//props title

  //note ask!
  // <Login
  //   onChangeUsername={this.onChangeUsername}
  //   onChangePassword={this.onChangePassword}
  //   loginButton={this.loginButton}
