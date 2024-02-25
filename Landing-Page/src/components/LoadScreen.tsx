import React from 'react';
import "./LoadScreen.css";

interface LoadScreenProps {
  isLoading: boolean;
}

const LoadScreen: React.FC<LoadScreenProps> = ({ isLoading }) => {
  if (isLoading) {
    return <div className="Loading">
      <span className="text-container">JBECP</span>
      </div>; 
  }
}

export default LoadScreen;