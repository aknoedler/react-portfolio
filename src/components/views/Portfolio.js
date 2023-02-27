import React from 'react';
import Project from './Project';

const ProjectData = require('../../ProjectData');

export default function Portfolio() {

  const styles = {
    portfolioStyle: {

    }
  }

  return (
    <div style={styles.portfolioStyle}>
      {
        ProjectData.map((project, i) => (
          <Project
            key={i}
            title={project.title}
            description={project.description}
            imagePath={project.imagePath}
            projectURL={project.projectURL}
            githubURL={project.githubURL}
          />
        ))
      }
    </div>
  );
}