import React from 'react';
import Project from './Project';

const ProjectData = require('../../ProjectData');

export default function Portfolio() {
  return (
    <div>
      {
        ProjectData.map((project, i) => (
          <Project
          key = {i}
          title={project.title}
          imagePath={project.imagePath}
          projectURL={project.projectURL}
          githubURL={project.githubURL}
          />
        ))
      }
    </div>
  );
}