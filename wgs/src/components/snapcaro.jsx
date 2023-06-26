import React from 'react';

class Snapcaro extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentIndex: 0
    };
  }

  goToNextSlide = () => {
    const { images } = this.props;
    const { currentIndex } = this.state;
    const nextIndex = (currentIndex + 1) % images.length;
    this.setState({ currentIndex: nextIndex });
  };

  goToPrevSlide = () => {
    const { images } = this.props;
    const { currentIndex } = this.state;
    const prevIndex = (currentIndex - 1 + images.length) % images.length;
    this.setState({ currentIndex: prevIndex });
  };

  render() {
    const { images } = this.props;
    const { currentIndex } = this.state;

    return (
      <div className="carousel-slider">
        <div className="carousel-slide">
          {images.map((image, index) => (
            <div
              key={index}
              className={`carousel-image ${index === currentIndex ? 'active' : ''}`}
              style={{
                backgroundImage: `url(${image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
              role="img"
              aria-label={`Slide ${index + 1}`}
            />
          ))}
        </div>
        <div className="carousel-controls">
          <button onClick={this.goToPrevSlide}>Previous</button>
          <button onClick={this.goToNextSlide}>Next</button>
        </div>
      </div>
    );
  }
}

export default Snapcaro;
