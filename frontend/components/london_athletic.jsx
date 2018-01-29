import React from "react";

class LondonAthletic extends React.Component {
  componentWillMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <div className="london-athletics-wrapper">
        <div className="box">
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
            <div className="london-athletic-text padding-bottom-london-athletic">
              Through the experience of training for a professional football,
              Brandon London has positioned himself as one of the top Personal
              Trainer/Sports Trainers in the nation. With workouts ranging from
              off-season sports specific training to fitness bootcamps, London
              Athletic appeals to all.
            </div>
            <div className="flex-direction-col">
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
        </div>
        <div className="block clear-both box">
          <div className="title is-primary uppercase-center">
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
        <div className="box">
          <div className="title is-primary uppercase-center margin-top-point-5">
            High School-NCAA-Pro Athletes Trained
          </div>
          <div className="block flex-row-center">
            <img className="highschool-photos" src={window.images.coleman} />
            <img
              className="padding-left highschool-photos"
              src={window.images.dubois}
            />
            <img
              className="highschool-photos padding-left"
              src={window.images.fitzpatrick}
            />
          </div>
          <div className="block flex-row-center">
            <img className="highschool-photos" src={window.images.kg_gray} />
            <img
              className="padding-left highschool-photos"
              src={window.images.lewis}
            />
            <img
              className="padding-left highschool-photos"
              src={window.images.vassel}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default LondonAthletic;
