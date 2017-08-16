import React from 'react';
import { connect } from 'react-redux';
import './_part.scss';

class PartItems extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
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
