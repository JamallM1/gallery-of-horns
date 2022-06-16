import React from 'react';
//import (Button) from 'react';
import './hornedbeast.css';
<a class="btn btn-primary" href="#" role="button">Link</a>
class HornedBeast extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      favorite: 0
    };
  };
  
  handleFavorite = () => {
    this.setState({
      
      favorite: this.state.favorite + 1
      
    });
  };
  
  render() {
    return (
      <article>
        <>
        <h2>{this.props.title}</h2>
        <p>{this.props.description}</p>
        <p>{this.state.favorite}Favorite</p>
        <p onClick={this.handleFavorite}>Click here for your favorite</p>

        <img
          src={this.props.imageurl}
          alt={this.props.description}
          title={this.props.title}
          onClick={()=> {this.props.openModal(this.props.beast)}}>
          
        </img>
      </>
      </article>
    )
  }
}
export default HornedBeast;