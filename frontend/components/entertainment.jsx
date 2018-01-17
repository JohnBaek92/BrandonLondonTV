import React from 'react';

const photoStyle = {width: "350px", height: "350px", objectFit: "cover"};

const Entertainment = () => {
  return (
    <section className="entertainment-wrapper">
      <div className="title" style={{ textAlign: "center" }}>
        Photos
      </div>
      <div className="columns">
        <img className="column" style={photoStyle} src={window.images.e1} />
        <img className="column" style={photoStyle} src={window.images.e2} />
        <img className="column" style={photoStyle} src={window.images.e3} />
        <img className="column" style={photoStyle} src={window.images.e4} />
      </div>
      <div className="columns">
        <img className="column" style={photoStyle} src={window.images.e5} />
        <img className="column" style={photoStyle} src={window.images.e6} />
        <img className="column" style={photoStyle} src={window.images.e7} />
        <img className="column" style={photoStyle} src={window.images.e8} />
      </div>
      <div className="title" style={{ textAlign: "center" }}>
        Videos
      </div>
    </section>
  );
};

export default Entertainment;
