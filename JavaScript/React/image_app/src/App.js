import React from 'react';
import ReactDOM from 'react-dom';
import Profile from './components/Profile';
import Hobbies from './components/Hobbies';

const profileData = {
  name: 'John Doe',
  imgURL: 'https://placeimg.com/300/300',
  hobbyList: ['coding', 'design', 'art', 'billiards']
}

const App = () =>
  <div>
    <Profile name={profileData.name} imgURL={profileData.imgURL} />
    <Hobbies hobbyList={profileData.hobbyList} />
  </div>

export default App;