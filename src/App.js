
import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Main from './Main';
import HornedBeast from './HornedBeast';
import data from './data.json';
//import OverdraftModal from './overdraft-modal';
//import Container from 'react-bootstrap/Container';
import SelectedBeast from './SelectedBeast';
import Forms from './Form';
//import { Button } from 'react-bootstrap';
//import { Button } from 'react-bootstrap';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      showModal: false,
      pickedBeast: '',
      beast: data,
      sortedData: data
    };
  };
    handleSubmit = event => {
      let selected = event.target.value;

      if (selected === '1') {
        let newData = data.filter(num => num.horns === 1);
        this.setState({
          sortedData: newData
        });

      } else if (selected === '2') {
        let newData = data.filter(num => num.horns === 2);
        this.setState({
          sortedData: newData
        });

      } else if (selected === '3') {
        let newData = data.filter(num => num.horns === 3);
        this.setState({
          sortedData: newData
        });

      } else if (selected === '100') {
        let newData = data.filter(num => num.horns === 100);
        this.setState({
          sortedData: newData
        });

      } else {
        this.setState({
          sortedData: data
        });
      }
    }

    handleOnHide = () => {
      this.setState({
        showModal: false
      });
    };
    openModal = (beast) => {
      this.setState({
        showModal: true,
        pickedBeast: beast,

      })
    };
  
  
  render() {
    return (

      <>
        <Header />
        <Forms handleSubmit={this.handleSubmit} />
        <Main data={this.state.sortedData}
          openModal={this.openModal}
        />
        <SelectedBeast
          showModal={this.state.showModal}
          hideModal={this.handleOnHide}
          pickedBeast={this.state.pickedBeast}
        />
        <HornedBeast />
        <Footer />
      </>
    );
  }
}

export default App;
