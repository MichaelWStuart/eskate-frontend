import React from 'react';
import { connect } from 'react-redux';

class PartItems extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    console.log('item props: ', this.props);
    return (
      <div className='part-items'>
        <h4>PARTS ITEMS</h4>
        {this.props.items.map(item => {
          return item.type === 'parts' ?
            <div key={item._id}>
              <img src={item.photoURI} height='100' width='100' />
              <h3>{item.name}</h3>
              <h3>{item._id}</h3>
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
