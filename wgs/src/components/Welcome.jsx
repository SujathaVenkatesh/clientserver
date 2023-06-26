import React from 'react';
import { useHistory } from 'react-router-dom';
import './Welcome.css';

const Welcome = () => {
  const history = useHistory();

  const handleGoBack = () => {
    history.push('/'); 
  };
  return (
      <div className="centerwel">
        <h4 className='wel'>WELCOME</h4>
        <div className="btn-wel" onClick={handleGoBack}>Go back</div>
      </div>
  );
};

export default Welcome;
