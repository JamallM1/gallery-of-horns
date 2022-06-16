
import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Main from './Main';
import HornedBeast from './HornedBeast';
import data from './data.json';
import OverdraftModal from './overdraft-modal';
import Container from 'react-bootstrap/Container';
import SelectedBeast from './SelectedBeast';
class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      showModal: false, 
      pickedBeast: '',
    };
  };
  handleOnHide = () =>{
    this.setState({
      showModal: false
    });
  };
  openModal = (beast) =>{
    this.setState({
      showModal: true, 
      pickedBeast: beast,

    })
  }
  render() {
    return (
    <>
      <Header/>
      <Main data={data}
      openModal = {this.openModal}
      />
      <SelectedBeast 
      showModal = {this.state.showModal}
      hideModal = {this.handleOnHide}
      pickedBeast = {this.state.pickedBeast}
      />
      <HornedBeast/>
      <Footer/>
    </>
    );
  }
}

export default App;
