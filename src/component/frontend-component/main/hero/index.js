import React from 'react';

class Hero extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      photoURI: 'http://cdn1.bigcommerce.com/n-yp39j5/zad02/product_images/theme_images/2017-new-theme-raptor-2.jpg?t=1496024372',
    };
  }

  render(){
    return(
      <div className='hero-container'>
        <img className='hero-photo' src={this.state.photoURI} />
      </div>

    );
  }
}

export default Hero;
