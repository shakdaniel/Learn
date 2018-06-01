import React from "react";
import ReactDOM from "react-dom";

const DATA = {    
  name: 'Image App',
  imgURL: 'https://placeimg.com/200/200/people',
  hobbyList: ['coding', 'writing', 'skiing', 'billiards']
}

class Profile extends React.Component {
  render() {
    return (
      <div>              
        <h3>{this.props.name}</h3>
        <img src={this.props.imgURL} />
      </div>
    )
  }
}

class Hobbies extends React.Component {
  render() {
    const hobbies = this.props.hobbyList.map(
      function(hobby, index){
        return (<li key={index}>{hobby}</li>);
      }
    );
    return (
      <div>
        <h5>My hobbies:</h5>
          <ul>
            {hobbies}
          </ul>
      </div>
    )
  }
}


class App extends React.Component {
  render() {
    return (
      <div>
        <Profile name={this.props.profileData.name} imgURL={this.props.profileData.imgURL}/>
        <Hobbies hobbyList={this.props.profileData.hobbyList} />
      </div>
    )
  }
}


ReactDOM.render(
  <App profileData={DATA} />,
  document.getElementById('root')
);