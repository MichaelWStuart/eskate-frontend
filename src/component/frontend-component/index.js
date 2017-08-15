import React from 'react';
import BoardItems from './main/board';

class MainView extends React.Component {
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

export default MainView;
