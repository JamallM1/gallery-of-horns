import React from 'react';
import HornedBeast from './HornedBeast';
class Main extends React.Component {
  render() {
    return (
      <>
        <HornedBeast
        ttitle = ' title one ' />
        <HornedBeast
        ttitle = 'title two'/>
        <HornedBeast
        ttitle = 'title three '/>
      </>
    );
  }
}
export default Main; 