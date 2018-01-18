import React from "react";

const Contact = () => {
  return <div className="block" style={{ display: "flex", flexDirection: "column" }}>
      <div className="title block" style={{ textAlign: "center", textTransform: "uppercase", width: "100%" }}>
        Management
      </div>
      <div className="columns" style={{ lineHeight: "2.5em", textAlign: "center", justifySelf: "center", alignSelf: "center", width: "100%"}}>
        <div className="column">
          <p className="title is-primary">Babette Perry</p>
          <p>Head of Alternative TV/Broadcasting</p>
          <p>Innovative Artists (LA)</p>
          <p>Email: Babette.Perry@IALA.com</p>
          <p>
            Website: <a href="http://www.InovativeArtists.com​">
              Innovative Artists
            </a>
          </p>
        </div>
        <div className="column">
          <p className="title is-info">Marki Costello</p>
          <p>CMEG TALENT | Owner/President</p>
          <p>Twitter: @cmegtalent</p>
          <p>​Email: clients@cmeg.com</p>
          <p>
            Website: <a href="http://cmeg.com">CMEG</a>​
          </p>
        </div>
        <div className="column">
          <p className="title is-primary">Simona Sheinkman</p>
          <p>Vice President/Head Booker</p>
          <p>MMG- Model, Talent & Celebrity Management</p>
          <p>Email: Simona@nymmg.com</p>
          <p>
            Website: <a href="http://nymmg.com">NYMMG</a>
          </p>
        </div>
      </div>
    </div>;
};

export default Contact;
