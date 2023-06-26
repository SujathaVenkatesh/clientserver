import React, { useState, useEffect, useCallback } from 'react';

const SnippetCard = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: '20px',
    backgroundColor: 'black',
    color: 'white',
    fontFamily: 'Raleway, Arial, sans-serif',
  };

  const cardContainerStyle = {
    display: 'flex',
    justifyContent: 'center',
    position: 'relative',
    marginBottom: '20px',
    overflow: 'hidden',
  };

  const cardStyle = {
    fontFamily: 'Raleway, Arial, sans-serif',
    position: 'relative',
    overflow: 'hidden',
    margin: '10px',
    minWidth: '300px',
    maxWidth: '350px',
    width: '100%',
    color: '#333',
    textAlign: 'left',
    boxShadow: '0 2px 6px rgba(0, 0, 0, 0.15)',
    borderRadius: '8px',
    transform: 'scale(0.8)',
    opacity: '0.6',
    transition: 'transform 0.3s, opacity 0.3s',
  };

  const activeCardStyle = {
    transform: 'scale(1)',
    opacity: '1',
  };

  const imgStyle = {
    maxWidth: '100%',
    height: 'auto',
    width: '100px',
    borderRadius: '50%',
    margin: '20px auto 0',
    display: 'block',
    position: 'relative',
    zIndex: '1',
  };

  const blockquoteStyle = {
    margin: '0',
    display: 'block',
    borderRadius: '8px',
    position: 'relative',
    backgroundColor: '#f7f7f7',
    padding: '30px',
    fontSize: '1.2em',
    fontWeight: '500',
    lineHeight: '1.6em',
  };

  const authorStyle = {
    padding: '15px',
    margin: '0',
    textTransform: 'uppercase',
    color: '#ffffff',
    textAlign: 'center',
    background:
      'linear-gradient(to bottom, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0) 100%)',
    borderRadius: '0 0 8px 8px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };

  const h5Style = {
    opacity: '0.8',
    margin: '0',
    fontWeight: '800',
    color: 'white',
  };

  const spanStyle = {
    fontWeight: '400',
    textTransform: 'none',
    display: 'block',
  };

  const snippets = [
    {
      image:
        'https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sq-sample1.jpg',
      alt: 'sq-sample1',
      quote:
        "Calvin: Hobbes, sometimes when I'm talking, my words can't keep up with my thoughts. I am beginning to wonder why we think faster than we speak. Hobbes: Probably so we can think twice.",
      author: 'Pelican Steve',
      source: 'LittleSnippets',
    },
    {
      image:
        'https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sq-sample2.jpg',
      alt: 'sq-sample2',
      quote:
        "Calvin: Hobbes, sometimes when I'm talking, my words can't keep up with my thoughts. I am beginning to wonder why we think faster than we speak. Hobbes: Probably so we can think twice.",
      author: 'Pelican Steve',
      source: 'LittleSnippets',
    },
    {
      image:
        'https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sq-sample3.jpg',
      alt: 'sq-sample3',
      quote:
        "Calvin: Hobbes, sometimes when I'm talking, my words can't keep up with my thoughts. I am beginning to wonder why we think faster than we speak. Hobbes: Probably so we can think twice.",
      author: 'Pelican Steve',
      source: 'LittleSnippets',
    },
    {
      image:
        'https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sq-sample4.jpg',
      alt: 'sq-sample4',
      quote:
        "Calvin: Hobbes, sometimes when I'm talking, my words can't keep up with my thoughts. I am beginning to wonder why we think faster than we speak. Hobbes: Probably so we can think twice.",
      author: 'Author 1',
      source: 'SnippetSource1',
    },
  ];


  const handleNextSlide = useCallback(() => {
    setActiveIndex((prevIndex) =>
      prevIndex < snippets.length - 1 ? prevIndex + 1 : 0
    );
  }, [snippets.length]);

  useEffect(() => {
    const interval = setInterval(handleNextSlide, 3000);
    return () => clearInterval(interval);
  }, [handleNextSlide]);

  return (
    <div style={containerStyle}>
 <header className="section-header">
          <h3>What Clients Say</h3>
        </header>
      <div className="slider" style={cardContainerStyle}>
        {snippets.map((snippet, index) => (
          <div
            key={index}
            style={{
              ...cardStyle,
              ...(index === activeIndex && activeCardStyle),
            }}
          >
            <img src={snippet.image} alt={snippet.alt} style={imgStyle} />
            <blockquote style={blockquoteStyle}>{snippet.quote}</blockquote>
            <div className="author" style={authorStyle}>
              <h5 style={h5Style}>
                {snippet.author} <span style={spanStyle}>{snippet.source}</span>
              </h5>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SnippetCard;
