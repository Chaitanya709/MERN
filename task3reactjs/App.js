import React from 'react';
import ColorPicker from './ColorPicker';

function App() {
  const colorOptions = ['green','white','yellow','red','orange','black','gray','silver','gold','pink','indigo','purple','brown'];

  return (
    <div className="App">
      <header className="App-header">
        <h1>Color Picker</h1>
      </header>
      <main>
        <ColorPicker colors={colorOptions} />
      </main>
    </div>
  );
}

export default App;
