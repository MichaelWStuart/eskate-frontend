import React from 'react';
import { connect } from 'react-redux';
import * as util from '../../../../lib/util.js';

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
          <div>
            {util.renderIf(item.type === 'board',
              <div key={item._id}>
                <img src={item.photoURI} height='100' width='100' />
                <h3>{item.name}</h3>
                <h3>{item._id}</h3>
              </div>
            )}
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
