import React from "react";

class Contact extends React.Component {
  componentWillMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <div className="block flex-direction-col">
        <div className="box">
          <div className="title block management-word has-text-weight-bold is-size-2">
            Management
          </div>
          <div className="columns contact-info">
            <div className="column flex">
              <p className="title is-primary">Babette Perry</p>
              <p>Head of Alternative TV/Broadcasting</p>
              <p>Innovative Artists (LA)</p>
              <p>Email: Babette.Perry@IALA.com</p>
              <p>
                Website:{" "}
                <a href="http://www.InovativeArtists.com​">
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
        </div>
        <div className="image-banner" />
      </div>
    );
  }
}

export default Contact;
