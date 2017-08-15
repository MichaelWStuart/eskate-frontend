import React from 'react';
import { connect } from 'react-redux';
import BoardItems from './main/board';
import PartItems from './main/part';
import * as itemAction from '../../action/item-actions';
import Header from './header';

class MainView extends React.Component {

  componentWillMount() {
    this.props.fetchItems();
  }

  render() {
    return (
      <div>
        <Header />
        <main>
          <BoardItems />
          <PartItems />
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
