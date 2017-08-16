import React from 'react';
import { connect } from 'react-redux';
import './_part.scss';
import ItemModal from '../item-modal';
import * as util from '../../../../lib/util';

class PartItems extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
    };
    this.handleModalState = this.handleModalState.bind(this);
  }

  handleModalState(){
    this.setState({showModal: false});
  }

  render() {
    console.log('item props: ', this.props);
    return (
      <div className='part-items-container'>
        <div className='clear-float'></div>
        <h4>PARTS ITEMS</h4>
        {this.props.items.map(item => {
          return item.type === 'part' ?
            <div className='part-item' key={item._id}>
              <img src={item.photoURI} height='100' width='100' />
              <h6>{item.name}</h6>
              <button
                onClick={() => this.setState({showModal: true})}>
                View Item
              </button>
              {util.renderIf(this.state.showModal,
                <ItemModal
                  item={item}
                  onComplete={this.handleModalState}
                />
              )}
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

export default connect(mapStateToProps, mapDispatchToProps)(PartItems);
