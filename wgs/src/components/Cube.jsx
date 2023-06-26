import React from 'react';

const Cube = () => {
  const cubeStyles = {
    margin: 'auto',
    position: 'relative',
    height: '200px',
    width: '200px',
    transformStyle: 'preserve-3d',
    animation: 'rotate 7s infinite linear'
  };

  const faceStyles = {
    position: 'absolute',
    padding: '10px',
    boxSizing: 'border-box',
    height: '100%',
    opacity: '0.8',
    width: '100%',
    color: '#fff',
    fontSize: '50pt',
    textAlign: 'center',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    transition: 'transform 0.2s ease-in'
  };

  const frontStyles = {
    transform: 'translateZ(100px) rotateY(0deg)',
    background: 'linear-gradient(to right, #ff7816, #ff4b00)'
  };

  const backStyles = {
    transform: 'translateZ(-100px) rotateY(180deg)',
    background: 'linear-gradient(to right, #ff7816, #ff4b00)'
  };

  const rightStyles = {
    transform: 'rotateY(-90deg) translateZ(100px)',
    transformOrigin: 'center right',
    backgroundColor: '#ffdf00'
  };

  const leftStyles = {
    transform: 'rotateY(90deg) translateZ(100px)',
    transformOrigin: 'center left',
    backgroundColor: '#ffdf00'
  };

  const topStyles = {
    transform: 'rotateX(-90deg) translateZ(100px)',
    transformOrigin: 'top center',
    backgroundColor: '#2196f3'
  };

  const bottomStyles = {
    transform: 'rotateX(90deg) translateZ(100px)',
    transformOrigin: 'bottom center',
    backgroundColor: '#2196f3'
  };

  const coreStyles = {
    color: '#fff',
    fontSize: '70pt',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  };

  return (
    <div style={{ marginTop: '120px', perspective: '1000px', perspectiveOrigin: '50% 50%', backgroundSize: '80px 80px' }}>
      <div style={cubeStyles}>
        <div style={{ ...faceStyles, ...frontStyles }}>HTML</div>
        <div style={{ ...faceStyles, ...coreStyles }}>Alex</div>
        <div style={{ ...faceStyles, ...backStyles }}>HTML</div>
        <div style={{ ...faceStyles, ...topStyles }}>CSS</div>
        <div style={{ ...faceStyles, ...bottomStyles }}>CSS</div>
        <div style={{ ...faceStyles, ...leftStyles }}>JS</div>
        <div style={{ ...faceStyles, ...rightStyles }}>JS</div>
      </div>
    </div>
  );
};

export default Cube;
