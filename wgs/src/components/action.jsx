import React from 'react';
import classNames from 'classnames';
import './action.css';
const CallToActionSection = () => {
  const containerClasses = classNames('containertemp', 'text-centertemp', {
    'animate-zoom-in': true, // Add your animation class here
  });

  return (
    <section id="call-to-action">
      <div className={containerClasses} data-aos="zoom-in">
        <h3 className='action'>Call To Action</h3>
        <p>
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <a className="cta-btn" href="/Contact">
          Call To Action
        </a>
      </div>
    </section>
  );
};

export default CallToActionSection;
