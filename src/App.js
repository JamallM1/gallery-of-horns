
import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Main from './Main';
import HornedBeast from './HornedBeast';
class App extends React.Component {

  render() {
    return (
    <>
      <Header/>
      <Main/>
      <HornedBeast/>
      <Footer/>
    </>
    );
  }
}

export default App;
