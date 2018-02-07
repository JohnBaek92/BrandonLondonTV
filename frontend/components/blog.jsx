import React from "react";
import UnderConstruction from "./under_construction";

class Blog extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {
    console.log("this is the index page")
    fetch("/blogs/")
      .then(res => {
        return res.json();
      })
      .then(blog => {
        this.setState({ blog });
      });
  }

  render() {
    const { blog } = this.state;
    debugger;
    return (
      <div className="box"></div>
    )
  }
  render() {
    return <div className="container box">
        <h1 className="title is-1 has-text-centered" style={{ color: "#03a797" }}>
          10 Years Later...
        </h1>
        <h1 className="title is-1 has-text-centered" style={{ color: "#1b00ff" }}>
          My Top Moments From Super Bowl 42
        </h1>
        <img src={window.images.b1} style={{ width: "50%", margin: "0 auto", display: "block" }} />
        <br />
        <div>
          Has it been 10 years? This year marks the 10th year anniversary of the Giants historic Super Bowl 42 Championship win over the undefeated New England Patriots. I was only a young rookie on the Giants practice roster but it felt like I had 53-man roster privileges. I hung out with the big names on the team, I got a little <a href="https://nypost.com/2008/01/27/hes-mini-moss/" target="_blank" className="hover-style">
            press and publicity
          </a> throughout the season and the city of New York showed me love! You all remember the on the field journey of the team that season but what a year it was off the field as well. From modeling on <a href="https://247sports.com/nfl/miami-dolphins/Article/WR-Brandon-London-Model-Or-Player-104624448" target="_blank" className="hover-style">
            BET’s Rip the Runway
          </a> to partying on day offs in Atlantic City for free to game nights at Reuben Droughns apartment where I met rapper Joe Budden and other celebrities, I’ll never forget the off the field adventures that season either. They made me work harder on the field because I never wanted that part of my life to end! FAST FORWARD TO THE SUPER BOWL...
        </div>
        <br />
        <h2 className="title is-2 has-text-centered" style={{ color: "#1b00ff" }}>
          You have arrived in Arizona…
        </h2>
        <div className="columns is-mobile">
          <img className="column" src={window.images.b2} style={{ width: "33%", cursor: "default", opacity: "1" }} />
          <img className="column" src={window.images.b3} style={{ width: "33%", cursor: "default", opacity: "1" }} />
        </div>
        <div className="columns is-mobile">
          <img className="column" src={window.images.b4} style={{ width: "33%", cursor: "default", opacity: "1" }} />
          <img className="column" src={window.images.b5} style={{ width: "33%", cursor: "default", opacity: "1" }} />
        </div>
        <div>
          I can’t remember the name of the resort we stayed at but I
          remember it was so damn far from the action lol. The place was
          huge! The rooms were distinctly better than when we went to London
          earlier in the year for the Dolphins game. My roommate that week
          was running back K.J Harris. I remember walking through what felt
          like a maze to get to my room. And when I had finally arrived,
          there was a BIG Reebok bag full of Super Bowl gear because I was
          an endorsed athlete by Reebok. Christmas gifts for DAYS lol!
        </div>
        <h2 className="title is-2 has-text-centered" style={{ color: "#1b00ff" }}>
          David Tyree’s week
        </h2>
        <img src={window.images.b6} style={{ width: "50%" }} style={{ width: "50%", margin: "0 auto", display: "block" }} />
        <br />
        <div>
          David Tyree was the team’s spiritual leader and ‘utility guy’. He
          was a special teams monster and did a lot of the dirty work. That
          week, Plax hurt his knee and DT had a larger role in the pass game
          than usual weeks. There was one practice where it felt like he was
          dropping everything thrown his way. Don’t try and say I’m hating
          saying he was dropping everything. Did you watch his special on
          NFL Network? Fast forward to the game where he made on the of
          greatest catches in Super Bowl history! I remember thinking ‘GOD
          is REAL’ when he made the catch!
        </div>
        <img src={window.images.b7} style={{ width: "50%" }} style={{ width: "50%", margin: "0 auto", display: "block" }} />
        <br />
        <h2 className="title is-2 has-text-centered" style={{ color: "#1b00ff" }}>
          All eyes on Stray!
        </h2>
        <img src={window.images.b8} style={{ width: "50%" }} style={{ width: "50%", margin: "0 auto", display: "block" }} />
        <br />
        <div>
          Throughout the season, I would constantly ask Michael Strahan
          about how to go about building an off the field brand. I wanted
          football to open doors for me in terms of becoming a model and
          actor. I remember he would always call me, “Lil Will Smith!” Fast
          forward to media day! The media was all over him. Every global
          media outlet wanted to interview him or fan wanted a picture with
          him. He handled everything so smoothly. It was like he was in his
          element and he wasn’t bending the edge on a pass rush, he was
          simply vibing with ‘the people/. I remember sitting there watching
          him and telling myself, “That guy will be a SUPERSTAR. Follow his
          blueprint!”
        </div>
        <br />
        <img src={window.images.b9} style={{ width: "50%" }} style={{ width: "50%", margin: "0 auto", display: "block" }} />
        <br />
        <h2 className="title is-2 has-text-centered" style={{ color: "#1b00ff" }}>
          Thank You Kellie Pickler
        </h2>
        <img src={window.images.b10} style={{ width: "50%" }} style={{ width: "33%", margin: "0 auto", display: "block" }} />
        <br />
        <div>
          I didn’t do many interviews on media day. I mean, why would
          someone want to interview a Practice Squad guy who hadn’t seen
          live game action since the Pre-season? I was in awe the entire
          time. Taking everything in and saying to myself, “One day you’ll
          be back and you’ll be doing all the top interviews!” I was an
          ambitious rookie!
        </div>
        <br />
        <img src={window.images.b11} style={{ width: "50%" }} style={{ width: "50%", margin: "0 auto", display: "block" }} />
        <br />
        <div>
          Then I remember getting tapped on the shoulder by a short blonde
          haired woman with a slight country accent, asking to help her get
          an interview with the overly crowded Michael Strahan. I had NO
          CLUE who this woman was but she seemed fun and she had a camera
          crew with her, so I thought shiiiiii*t why not lol? We decided
          that she’d hop on my shoulders to make her taller and she’d ask
          Stray some questions. I didn’t think much of it until my mom
          called me that night and said she saw me on the Tonight Show. That
          short blonde haired woman was American Idol finalist Kellie
          Pickler doing some correspondent work for Jay Leno. TV TIME!!
        </div>
        <br />
        <h2 className="title is-2 has-text-centered" style={{ color: "#1b00ff" }}>
          GAME TIME!
        </h2>
        <div className="columns is-mobile">
          <img className="column" src={window.images.b12} style={{ width: "33%", cursor: "default", opacity: "1" }} />
          <img className="column" src={window.images.b13} style={{ width: "33%", cursor: "default", opacity: "1" }} />
        </div>
        <div className="columns is-mobile">
          <img className="column" src={window.images.b14} style={{ width: "33%", cursor: "default", opacity: "1" }} />
          <img className="column" src={window.images.b15} style={{ width: "33%", cursor: "default", opacity: "1" }} />
        </div>
        <div>
          I remember seeing Alicia Keys and becoming a ‘fanboy’, running up
          to her to ask for a picture pregame and all the other guys who
          didn’t dress for the game jumping in the picture. I remember the
          energy in the tunnel as we were about to run out. Every single
          player on our team knew we were going to win that game. I remember
          Eli warming up on the sideline and having this calmness to him. It
          was the biggest game of this guys career and he was so poised.
        </div>
        <br />
        <div className="columns is-mobile">
          <img className="column" src={window.images.b16} style={{ width: "33%", cursor: "default", opacity: "1" }} />
          <img className="column" src={window.images.b17} style={{ width: "33%", cursor: "default", opacity: "1" }} />
        </div>
        <br />
        <div>
          After we had won, the confetti and photographers littered the
          field. I was trying to sneak as close to the trophy as possible
          because I wanted to be seen on T.V! I specifically remember
          wanting to get a picture with my wide receivers coach, Mike
          Sullivan. About 11 months back, he drove to UMASS in the snow to
          work me out on my Pro Day and was the coach who called on draft
          day to offer me an Undrafted Free Agent contract with the Giants!
        </div>
        <br />
        <h2 className="title is-2 has-text-centered" style={{ color: "#1b00ff" }}>
          PARTY TIME!
        </h2>
        <div className="columns is-mobile">
          <img className="column" src={window.images.b18} style={{ width: "33%", cursor: "default", opacity: "1" }} />
          <img className="column" src={window.images.b19} style={{ width: "33%", cursor: "default", opacity: "1" }} />
        </div>
        <div className="columns is-mobile">
          <img className="column" src={window.images.b20} style={{ width: "33%", cursor: "default", opacity: "1" }} />
          <img className="column" src={window.images.b21} style={{ width: "33%", cursor: "default", opacity: "1" }} />
        </div>
        <div className="columns is-mobile">
          <img className="column" src={window.images.b22} style={{ width: "33%", cursor: "default", opacity: "1" }} />
          <img className="column" src={window.images.b23} style={{ width: "33%", cursor: "default", opacity: "1" }} />
        </div>
        <div>
          I remember going back to the team hotel briefly to celebrate with
          the organization, friends, and family. I think we stayed there for
          about less than an hour and then went out to Old Scottsdale to
          celebrate. And when I say celebrate...boy did I have the time of
          my life! At the time, Browns WR Braylon Edwards was cool with a
          lot of guys on the team so I went out with teammates and Braylon!
          I remember Patron being poured in my mouth from the bottle and
          seeing some of the most beautiful women I’ve ever seen in my life!
          The entire night was crazy! I didn’t get back to the team hotel
          until the next morning. I had to run to my hotel room, quickly
          pack my bags and rush to the team bus. I almost missed the team
          bus back to the airport! Almost! And even if I did, I wouldn’t
          have cared because I was a Super Bowl Champion! All in all. Thank
          you once again to the game of FOOTBALL for allowing me to not only
          live but be apart some of my brothers dreams!
        </div>
      </div>;
  }
}

