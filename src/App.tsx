import React from 'react';
import Board from "./components/Board/Board";

function App() {
  return (
      <main className="App">
          <Board rowCount={3} columnCount={3}/>
      </main>
  );
}

export default App;
