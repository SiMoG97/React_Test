import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Post from './components/Post';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <section className="App-main">
          <Post nickname="Chris" avatar="https://www.laravelnigeria.com/img/chris.jpg" caption="Moving the community!" image="https://scontent-sea1-1.cdninstagram.com/vp/a4fb7ae4ba9b70700e987032035e7ed3/5C5E70E0/t51.2885-15/e35/s480x480/40808387_299937700600355_2953395639401134009_n.jpg"/>
          <Post nickname="thebrahimbaif" avatar="https://pbs.twimg.com/profile_images/951664366256115712/rv_2uRh8.jpg" caption="I'm havig a fucking good day" image="https://scontent-sea1-1.cdninstagram.com/vp/a4fb7ae4ba9b70700e987032035e7ed3/5C5E70E0/t51.2885-15/e35/s480x480/40808387_299937700600355_2953395639401134009_n.jpg" />
        </section>
      </div>
    );
  }
}

export default App;
