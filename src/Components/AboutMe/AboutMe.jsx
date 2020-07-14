import React from 'react';
import AboutMeStyles from './AboutMe.module.css';

export const AboutMe = (props) => {
setTimeout(props.turnOffAnimateDisplay,5000)

  return (
    <div className = {props.showContentStylesToggle ? AboutMeStyles.main + " " + AboutMeStyles.showContent : AboutMeStyles.main}>
    <p className = {AboutMeStyles.frontendPart}>
        <p>Hi. My name is Vasiliy.</p>
        <p>I am a beginner progremmer from Russia.</p>
        <p>Knowledges what I have like frontend developer:</p>
        <p><ul>
          <li>HTML5</li>
          <li>CSS3</li>
          <li>JavaScript ES6</li>
          <li>React</li>
        </ul></p>
        <p>Experience like frontend developer is 3 months.</p>
      </p>
      <p className = {AboutMeStyles.backendPart}>
        <p>In current time I am studing a Java, SQL and other stack technologies for backend development.</p>
        <p>If you ask me, what would I choose: backend or frontend? I will answer: frontend is really interesting and beatiful, but backend is more attractive for me. Fullstack - maybe, but backend at first. </p>
      </p>
    </div>
  )
}
