import React from "react";

class LondonAthletic extends React.Component {
  componentWillMount() {
    window.scrollTo(0, 0);
  }
  render() {
<<<<<<< HEAD
    return <div className="london-athletics-wrapper">
        <div className="box">
          <div className="london-athletic-video-wrapper">
            <iframe className="london-athletic-video" width="700px" height="380px" frameBorder="0" src="https://www.youtube.com/embed/qUNDomDbYtI" />
=======
    return (
      <div className="london-athletics-wrapper">
        <div className="box columns">
          <div className="column is-two-fifths">
              <iframe
                className="london-athletic-video"
                width="100%"
                height="100%"
                frameBorder="1"
                src="https://www.youtube.com/embed/qUNDomDbYtI"
              />
>>>>>>> 9064b2f656cf7c85abb6b0bffea792123e388bb3
          </div>
          <div className="column">
            <div className="london-athletic-text padding-bottom-london-athletic">
              Through the experience of training for a professional
              football, Brandon London has positioned himself as one of the
              top Personal Trainer/Sports Trainers in the nation. With
              workouts ranging from off-season sports specific training to
              fitness bootcamps, London Athletic appeals to all.
            </div>
            <div className="flex-direction-col">
              <div className="padding-bottom-london-athletic font-10px">
                • Strength & Conditioning for Athletes
              </div>
              <div className="padding-bottom-london-athletic font-10px">
                • TRX Body Sculpt Classes
              </div>
              <div className="padding-bottom-london-athletic font-10px">
                • Fitness Bootcamps
              </div>
              <div className="padding-bottom-london-athletic font-10px">
                • Celebrity Training
              </div>
              <div className="padding-bottom-london-athletic font-10px">
                • NFL Combine Training
              </div>
              <div className="padding-bottom-london-athletic font-10px">
                • Offensive Pass Game Training
              </div>
              <div className="padding-bottom-london-athletic font-10px">
                • Power Plate Training
              </div>
              <div className="padding-bottom-london-athletic font-10px">
                • Train Like An Athlete Fitness Workout
              </div>
            </div>
          </div>
        </div>
        <div className="block clear-both box">
          <div className="title is-primary uppercase-center columns is-mobile">
            Catches Clinics - Pass Game Development - Lineman Work
          </div>
<<<<<<< HEAD
          <div className="block flex-row-center">
            <iframe width="500px" height="400px" frameBorder="0" src="https://www.youtube.com/embed/wk5GSPw_zX8" />
            <iframe className="padding-left" width="500px" height="400px" frameBorder="0" src="https://www.youtube.com/embed/G7-pGlG1DB0" />
          </div>
          <div className="block flex-row-center">
            <iframe width="500px" height="400px" frameBorder="0" src="https://www.youtube.com/embed/aAT5wsRrjFs" />
            <iframe className="padding-left" width="500px" height="400px" frameBorder="0" src="https://www.youtube.com/embed/r3xmEm75MUE" />
=======
          <div className="column">
            <div className="block flex-row-center">
              <iframe
                width="100%"
                height="auto"
                frameBorder="1"
                src="https://www.youtube.com/embed/wk5GSPw_zX8"
              />
              <iframe
                className="padding-left"
                width="100%"
                height="auto"
                frameBorder="1"
                src="https://www.youtube.com/embed/G7-pGlG1DB0"
              />
            </div>
          </div>
          <div className="block flex-row-center">
            <iframe
              width="100%"
              height="auto"
              frameBorder="1"
              src="https://www.youtube.com/embed/aAT5wsRrjFs"
            />
            <iframe
              className="padding-left"
              width="100%"
              height="auto"
              frameBorder="1"
              src="https://www.youtube.com/embed/r3xmEm75MUE"
            />
>>>>>>> 9064b2f656cf7c85abb6b0bffea792123e388bb3
          </div>
        </div>
        <div className="box">
          <div className="title is-primary uppercase-center margin-top-point-5">
            High School-NCAA-Pro Athletes Trained
          </div>
          <div className="block flex-row-center">
            <img className="highschool-photos" src={window.images.coleman} />
            <img className="padding-left highschool-photos" src={window.images.dubois} />
            <img className="highschool-photos padding-left" src={window.images.fitzpatrick} />
          </div>
          <div className="block flex-row-center">
            <img className="highschool-photos" src={window.images.kg_gray} />
            <img className="padding-left highschool-photos" src={window.images.lewis} />
            <img className="padding-left highschool-photos" src={window.images.vassel} />
          </div>
        </div>
      </div>;
  }
}

export default LondonAthletic;
