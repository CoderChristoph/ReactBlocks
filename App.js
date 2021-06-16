import React from 'react';
import './App.css';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Main from './components/Main';
import SubContents from './components/SubContents';
import Advertisement from './components/Advertisement';

function App() {
  return (
    <div className="App">
      <div className="Wrapper">
        <div className="HeaderWrap">
          <Header />
        </div>
          <div className="MainContent">
            <Navigation />
          <div className="Main">
              <Main>
                    <SubContents />
                    <SubContents />
                    <SubContents />
                  <Advertisement />
            </Main>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
