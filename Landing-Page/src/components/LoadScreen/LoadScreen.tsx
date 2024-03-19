import React from 'react';
import "./LoadScreen.css";
import Image from '../Image';

interface LoadScreenProps {
  isLoading: boolean;
  children?: React.ReactNode;
}

const LoadScreen: React.FC<LoadScreenProps> = ({ isLoading, children }) => {
  if (isLoading) {
    return (
    <div className="Loading">
       {children}
    </div>
    ); 
  }
};

export default LoadScreen;