import React from 'react';
import HornedBeast from './HornedBeast';
import data from './data.json'

class Main extends React.Component {
  render() {
    let beasts = data.map((beast, index) => {
      
      return <HornedBeast
        title={beast.title}
        imageurl={beast.image_url}
        description={beast.description}
        key={index}
      />
    })

    return (

      <main>

        {beasts}

      </main>
    );
  }
}
export default Main;