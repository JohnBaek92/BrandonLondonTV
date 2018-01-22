import React from "react";

const LondonAthletic = () => {
  return (
    <div className="london-athletics-wrapper">
      <div className="london-athletic-video-wrapper">
        <iframe
          className="london-athletic-video"
          width="700px"
          height="380px"
          frameBorder="0"
          src="https://www.youtube.com/embed/qUNDomDbYtI"
        />
      </div>
      <div>
        <div
          className="london-athletic-text padding-bottom-london-athletic"
          style={{ paddingTop: "2em" }}
        >
          Through the experience of training for a professional football,
          Brandon London has positioned himself as one of the top Personal
          Trainer/Sports Trainers in the nation. With workouts ranging from
          off-season sports specific training to fitness bootcamps, London
          Athletic appeals to all.
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div className="padding-bottom-london-athletic">
            • Strength & Conditioning for Athletes
          </div>
          <div className="padding-bottom-london-athletic">
            • TRX Body Sculpt Classes
          </div>
          <div className="padding-bottom-london-athletic">
            • Fitness Bootcamps
          </div>
          <div className="padding-bottom-london-athletic">
            • Celebrity Training
          </div>
          <div className="padding-bottom-london-athletic">
            • NFL Combine Training
          </div>
          <div className="padding-bottom-london-athletic">
            • Offensive Pass Game Training
          </div>
          <div className="padding-bottom-london-athletic">
            • Power Plate Training
          </div>
          <div className="padding-bottom-london-athletic">
            • Train Like An Athlete Fitness Workout
          </div>
        </div>
      </div>
      <div className="block" style={{ clear: "both" }}>
        <div
          className="title is-primary"
          style={{ textTransform: "uppercase", textAlign: "center" }}
        >
          Catches Clinics - Pass Game Development - Lineman Work
        </div>
        <div className="block flex-row-center">
          <iframe
            width="500px"
            height="400px"
            frameBorder="0"
            src="https://www.youtube.com/embed/wk5GSPw_zX8"
          />
          <iframe
            className="padding-left"
            width="500px"
            height="400px"
            frameBorder="0"
            src="https://www.youtube.com/embed/G7-pGlG1DB0"
          />
        </div>
        <div className="block flex-row-center">
          <iframe
            width="500px"
            height="400px"
            frameBorder="0"
            src="https://www.youtube.com/embed/aAT5wsRrjFs"
          />
          <iframe
            className="padding-left"
            width="500px"
            height="400px"
            frameBorder="0"
            src="https://www.youtube.com/embed/r3xmEm75MUE"
          />
        </div>
      </div>
      <div>
        <div
          className="title is-primary"
          style={{
            textTransform: "uppercase",
            textAlign: "center",
            marginTop: "0.5em"
          }}
        >
          High School-NCAA-Pro Athletes Trained
        </div>
        <div className="block flex-row-center">
          <img
            className=""
            style={{ width: "400px", height: "400px" }}
            src={window.images.coleman}
          />
          <img
            className="padding-left"
            style={{ width: "400px", height: "400px" }}
            src={window.images.dubois}
          />
        </div>
        <div className="block flex-row-center">
          <img
            className=""
            style={{ width: "400px", height: "400px" }}
            src={window.images.kg_gray}
          />
          <img
            className="padding-left"
            style={{ width: "400px", height: "400px" }}
            src={window.images.lewis}
          />
        </div>
        <div className="block flex-row-center">
          <img
            className=""
            style={{ width: "400px", height: "400px" }}
            src={window.images.fitzpatrick}
          />
          <img
            className="padding-left"
            style={{ width: "400px", height: "400px" }}
            src={window.images.vassel}
          />
        </div>
      </div>
    </div>
  );
};

export default LondonAthletic;
