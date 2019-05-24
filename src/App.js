import React from 'react';
import './App.scss';
import Header from './Header';
import CharacterSelect from './CharacterSelect';
import Footer from './Footer';


function App() {
  return (
    <div className="App">
      <Header className="top" battleMode=" 1 v 1 Battles" title="Vertigo"/>
      <CharacterSelect/>
      <Footer className="container"/>
    </div>
  );
}

export default App;
