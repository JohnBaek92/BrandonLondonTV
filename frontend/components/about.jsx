import React from 'react';

const About = () => {
  return(
    <div className="about-wrapper">
      <div className="about-football">
        <div className="photo-wrapper">
          <img className="about-football-photo" src={window.images.about_football} />
        </div>
        <div className="about-football-text">
          <div>
            As an athlete, actor, and broadcast personality, Brandon London is well on his way to becoming the next triple threat in the industry. Known as the “Cultured Athlete”, London combines his talent and charisma on and off the football field. After being signed to the NY Giants in 2006 as a free agent, London acquired his first SuperBowl ring.
          </div>
          <br />
          <div>
            From NY, he then headed to the Miami Dolphins as a reserve receiver. Mainly used as Special Teams contributor, he also made his mark at Wide Receiver posting a team high of 4 catches in the first round playoffs vs. the Baltimore Ravens.
          </div>
          <br />
          <div>
            In 2010, London signed with the Canadian Football League’s Montreal Alouettes and won a Grey Cup Championship (equivalent to the NFL’s SuperBowl). He is one of 6 players to win both a Super Bowl and Grey Cup championship.
          </div>
        </div>
      </div>
      <div className="about-life-entertainment">
        <img className="about-life-photo" src={window.images.headshot} />
        <div className="about-life-text">
          <div className="italics">
            “Brandon London is a tall drink of personality. He is a generous host with a genius brand” -Marki Costello
          </div>
          <br />
          <div>
            Originally from Richmond, Virginia, Brandon grew up learning about football firsthand from his father, who is a respected college football coach at the University of Virginia. Upon high school graduation, Brandon played football and studied sociology at the University of Massachusetts. While at UMass, he broke records in career catches and touchdowns.
          </div>
          <br/>
          <div>
            In 2008, Brandon appeared on BET’s “Rip the Runway” hosted by Sean “Diddy” Combs. It was there that Brandon discovered his passion to act and host, aside from his natural athletic talent. With an irresistible charm, unforgettable personality and business savvy that rivals entertainment industry veterans; Brandon London is becoming one of the most sought after personalities on the red carpet.
          </div>
        </div>
      </div>
      <div className="current-future-plans">
        <img className="current-future-photo" src={window.images.sitting} />
        <div className="current-future-text">
          <div>
            Upon arriving in Los Angeles in 2013 during his off season, Brandon joined entertainment series, AfterBuzzTV created by Maria Menounos (Extra TV) as a weekly co-host summarizing events that occur on NBC’s hit series, Revolution and BET's 'The Game.'
          </div>
          <br />
          <div>
            ​Launching his own series “Jersey Off, Suit On” exemplifies his persona as a football star and entertainer. This series allows the viewer to learn about fashion, music, and football from “The Cultured Athlete” himself.
          </div>
          <br />
          <div>
            For the past 5 years, London has taken his on field knowledge to train and help mentor many of the top high school football players along the east and west coast, Brandon is committed to using his celebrity status for more than red carpets and exclusive events. He is committed to empowering the youth and encourage them to follow their dreams as a positive role model.
          </div>
          <br />
          <div>
            Brandon is well on his way to becoming the next leading multimedia brand and he is very clear that his passion isn’t solely about making money it’s about making history!
          </div>
        </div>
      </div>
    </div>
  )
}

export default About;
