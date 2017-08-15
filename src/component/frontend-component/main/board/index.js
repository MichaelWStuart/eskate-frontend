import React from 'react';
import { connect } from 'react-redux';
import * as util from '../../../../lib/util.js';
import './_board.scss';

class BoardItems extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    console.log('board props: ', this.props);
    return (
      <div className='board-items-container'>
        <h4>BOARD ITEMS</h4>
        {this.props.items.map(item => {
          return item.type === 'board' ?
            <div className='board-item' key={item._id}>
              <img src={item.photoURI} height='100px' width='100px' />
              <h3>{item.name}</h3>
            </div>
            :
            undefined;
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
