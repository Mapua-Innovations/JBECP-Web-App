import React, { useState, useEffect } from 'react';
import LoadScreen from './components/LoadScreen';
import "./App.css";
import MessageOne from './components/MessageOne';
import MesHeadingOne from './components/MesHeadOne';
function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate an API call
    setTimeout(() => {
      setIsLoading(false);
    },  2000);
  }, []);

  if (isLoading) {
    return <LoadScreen isLoading={isLoading} />; 
  }

  return (
    <div className="App">
      <span className="heading"><MesHeadingOne/></span>
      <span className="textboxone"><MessageOne /></span>
    </div>
  );
}

export default App;