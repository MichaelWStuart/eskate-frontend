import React from 'react';
import {connect} from 'react-redux';
import BoardItems from './main/board';
import * as itemAction from '../../action/item-actions.js';

class MainView extends React.Component {

  componentWillMount() {
    this.props.fetchItems();
  }

  render() {
    return (
      <div>
        <header>
          <div>Oscars Header</div>
        </header>
        <main>
          <BoardItems />
        </main>
      </div>
    );
  }
}

let mapStateToProps = (state) => ({});

let mapDispatchToProps = (dispatch) => ({
  fetchItems: () => dispatch(itemAction.itemsFetchRequest()),
});

export default connect(mapStateToProps, mapDispatchToProps)(MainView);
