import React from 'react'

class HeaderClass extends React.Component {
  render() {
    return (
      <div id='header'>
        <a href="https://portfolio.infobridgegateway.com/">
            <img src="https://portfolio.infobridgegateway.com/images/Logo.jpg" className="img-resposive"/>
        </a>

        <ul className="section--social">

          <li className="socialWrapper">
            <a className="color--white social"
              title="LinkedIn Profile"
              target="_blank"
              href="https://www.linkedin.com/in/mikhailkuzmenko">
             <i className="fa fa-linkedin"></i>
            </a>
          </li>

          <li className="socialWrapper color--white">
            <a className="social color--white"
              title="Facebook Profile"
              target="_blank"
              href="https://www.facebook.com/mikhail.kuzmenko.5">
              <i className="fa fa-facebook"></i>
            </a>
          </li>

          <li className="socialWrapper">
            <a className="social color--white"
              title="Resume"
              href="https://portfolio.infobridgegateway.com/docs/resume_SDLC_architect.pdf">
              <i className="fa fa-file-text"></i>
            </a>
          </li>

      <div id="menu">
          <ul>
            <li> <a href="https://portfolio.infobridgegateway.com/#home">Home</a></li>
            <li><a href="https://portfolio.infobridgegateway.com/#about">About Us</a>
              <ul>
                <li><a href="https://portfolio.infobridgegateway.com/links/about.html">About Infobridge</a></li>
                <li><a href="https://portfolio.infobridgegateway.com/links/certificates.html">Certificates</a></li>
              </ul>
            </li>
          </ul>
        </div>
      </ul>
      <hr />
    </div>
    )
  }
}

export default HeaderClass;
