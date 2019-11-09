import React from "react";
import Header from "./components/Header.jsx";
import WriteNewStory from "./components/WriteNewStory.jsx";
import NewStoryButton from "./components/NewStoryButton.jsx"

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: "",
      isUpload: false,
    };
    this.login = this.login.bind(this);
    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
  }
  //method for username input
  onChangeUsername(e) {
    // let newUserName = this.state.username;
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
      // .then(data => data.json())
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

  render() {
    return (
      <div>
        <Header /> {/* header is render Passages and login button */}
        {this.state.isUpload ? <WriteNewStory /> : <NewStoryButton/>}{/* if  */}
      </div>
    );
  }
}

export default App;
