import './_part.scss';
import React from 'react';
import { connect } from 'react-redux';
import * as util from '../../../../lib/util';
import ItemModal from '../item-modal';

class PartItems extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      item: '',
      showModal: false,
    };
    this.handleItemModal = this.handleItemModal.bind(this);
  }

  handleItemModal(item){
    console.log('item: ', item);
    this.state.showModal ?
      this.setState({item: '', showModal: false})
      :
      this.setState({item: item, showModal: true});
  }

  render() {
    return (
      <div className='part-items-container'>

        <h4>PARTS ITEMS</h4>
        {this.props.items.map(item => {
          return item.type === 'part' ?
            <div className='part-item' key={item._id}>
              <img src={item.photoURI} />
              <h6>{item.name}</h6>
              <button
                onClick={() => this.handleItemModal(item)}>
                View Item
              </button>
            </div>
            :
            undefined;
        })}
        {util.renderIf(this.state.showModal,
          <ItemModal
            item={this.state.item}
            onComplete={this.handleItemModal}
          />
        )}
        <div className='clear-float'></div>
      </div>
    );
  }
}

let mapStateToProps = (state) => ({
  items: state.items,
});

let mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(PartItems);
