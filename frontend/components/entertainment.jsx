import React from 'react';

const photoStyle = {width: "15%", height: "15%"};

const Entertainment = () => {
  return <section className="entertainment-wrapper">
      <div className="title" style={{ textAlign: "center" }}>
        Photos
      </div>
      <div className="columns">
        <img className="column" style={photoStyle} src={window.images.e1} />
        <img className="column" style={photoStyle} src={window.images.e5} />
        <img className="column" style={photoStyle} src={window.images.e3} />
        <img className="column" style={photoStyle} src={window.images.e4} />
      </div>
      <div className="columns">
        <img className="column" style={photoStyle} src={window.images.e2} />
        <img className="column" style={photoStyle} src={window.images.e6} />
        <img className="column" style={photoStyle} src={window.images.e7} />
        <img className="column" style={photoStyle} src={window.images.e8} />
      </div>
      <div className="title" style={{ textAlign: "center" }}>
        Videos
      </div>
      <div className="columns">
        <iframe className="column" allowFullScreen="true" width="20%" height="20%" frameBorder="0" src="https://www.youtube.com/embed/E8JlWMXJgqA" />
        <iframe className="column" allowFullScreen="true" width="20%" height="20%" frameBorder="0" src="https://www.youtube.com/embed/BKXLB4-9sfg" />
        <iframe className="column" allowFullScreen="true" width="20%" height="20%" frameBorder="0" src="https://www.youtube.com/embed/KLmwpPbTsN0" />
        <iframe className="column" width="20%" height="20%" frameBorder="0" src="https://www.youtube.com/embed/rJ_qxnuKADY" />
      </div>
      <div className="columns">
        <iframe className="column" allowFullScreen="true" width="20%" height="20%" frameBorder="0" src="https://www.youtube.com/embed/YbXrdVjzkC4" />
        <iframe className="column" allowFullScreen="true" width="20%" height="20%" frameBorder="0" src="https://www.youtube.com/embed/AOmHwHWpdKc" />
        <iframe className="column" allowFullScreen="true" width="20%" height="20%" frameBorder="0" src="https://www.youtube.com/embed/erRJtA8bkVc" />
        <iframe className="column" allowFullScreen="true" width="20%" height="20%" frameBorder="0" src="https://www.youtube.com/embed/WSmNvV-8uwU" />
      </div>
    </section>;
};

export default Entertainment;