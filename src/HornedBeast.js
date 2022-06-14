import React from 'react';

class HornedBeast extends React.Component {
  render() {
    return (
      <article>
      <h2>{this.Props.Title}</h2>
      <p>{this.Props.Description}</p>
      <img src='Horn' alt='Horn' title='name'></img>
      </article>
    )
  }
}
export default HornedBeast;