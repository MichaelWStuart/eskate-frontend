import React from 'react';
import { connect } from 'react-redux';

class BoardItems extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    console.log('board props: ', this.props);
    return (
      <div className='board-items'>
        BOARD ITEMS
        {this.props.items.map(item => {
          return <div key={item._id}>
            <img src={item.photoURI} height='100' width='100' />
            <h3>{item.name}</h3>
          </div>
        })}
      </div>
    );
  }
}

let mapStateToProps = (state) => ({
  items: state.items,
});

let mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(BoardItems);
