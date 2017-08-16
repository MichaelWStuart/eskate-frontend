import React from 'react';
import { connect } from 'react-redux';
import * as util from '../../../../lib/util';

class ItemModal extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let item = this.props.item;
    return (
      <div className='item-modal'>
       ITEM MODAL
        <button onClick={this.props.onComplete}>X</button>
        <img src={item.photoURI} />
        <div className='upper-right-section'>
          <h4>{item.name}</h4>
          <h4>${item.price}</h4>
        </div>
        <button>Add to Cart</button>
        <div className='lower-section'>
          <p>{item.description}</p>
          {util.renderIf(item.type === 'board',
            <div className='board-features'>
              <li>{item.maxSpeed}</li>
              <li>{item.maxLoadCapacity}</li>
              <li>{item.chargingTime}</li>
              <li>{item.transmission}</li>
              <li>{item.length} x {item.width} x {item.height}</li>
            </div>
          )}
          {util.renderIf(item.type === 'part',
            <div className='part-features'>
              <li>{item.maxSpeed}</li>
              <li>{item.maxLoadCapacity}</li>
              <li>{item.chargingTime}</li>
              <li>{item.transmission}</li>
              <li>{item.length} x {item.width} x {item.height}</li>
            </div>
          )}
        </div>
      </div>
    );
  }
}

let mapStateToProps = (state) => ({});

let mapDispatchToProps = (dispatch) => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(ItemModal);
