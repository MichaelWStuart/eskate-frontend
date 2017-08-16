import React from 'react';
import { connect } from 'react-redux';
import * as util from '../../../../lib/util';
import './_item-modal.scss';

class ItemModal extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let item = this.props.item;
    return (
      <div className='item-modal-background'>
        <div className='item-modal-content'>
          <div className='upper-section'>
            <img src={item.photoURI} />
            <div className='upper-right-section'>
              <button className='close' onClick={this.props.onComplete}>X</button>
              <h4>{item.name}</h4>
              <h4>${item.price}</h4>
              <button className='add-to-cart'>Add to Cart</button>
            </div>
          </div>
          <div className='lower-section'>
            <p>{item.description}</p>
            {util.renderIf(item.type === 'board',
              <div className='board-features'>
                <li>Max Spead: {item.maxSpeed}</li>
                <li>Max Capacity: {item.maxLoadCapacity}</li>
                <li>Charging Time: {item.chargingTime}</li>
                <li>Transmission: {item.transmission}</li>
                <li>Dimensions (cm): {item.length} x {item.width} x {item.height} </li>
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
      </div>
    );
  }
}

let mapStateToProps = (state) => ({});

let mapDispatchToProps = (dispatch) => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(ItemModal);
