import React, { Component } from 'react';
import './logo-page.css';

import ZkwskLogo from '../../svg/zkskLogo';

class LogoPage extends Component {
  render() {
    return (
      <div className="logo-page">
        <div className="branding">
          <video
            autoPlay
            loop
            playsInline
            muted
            aria-hidden="true"
            src="https://zkwsk.ams3.digitaloceanspaces.com/zkwsk_assets/resume_video.mp4"
          />

          <svg viewBox="0 0 240 240">
            <defs>
              <mask id="mask" x="0" y="0" width="100%">
                <rect x="0" y="0" width="100%" height="100%" fill="#fff"/>
                  <ZkwskLogo />
              </mask>
            </defs>
            <zkwskLogo />
            <rect className="cover" mask="url(#mask)" x="0" y="0" height="100%" width="100%"/>
            <g className="subtitle" transform="translate(53 185)">
              <text>
                <tspan className="subtitle-design" x=".413" y="9">UX Designer</tspan>
              </text>
              <text>
                <tspan className="subtitle-developer" x="77.378" y="9">Web Developer</tspan>
              </text>
              <circle cx="67.5" cy="6.5" r="1.5"/>
            </g>
          </svg>

        </div>
      </div>
    );
  }
}

export default LogoPage;
