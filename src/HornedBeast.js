import React from 'react';

class HornedBeast extends React.Component {
  render() {
    return (
      <article>
        <h2>{this.props.title}</h2>
        <p>{this.props.description}</p>
        <img
          src={this.props.imageurl}
          alt={this.props.description}
          title={this.props.title}>
        </img>
      </article>
    )
  }
}
export default HornedBeast;