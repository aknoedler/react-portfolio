import React from 'react';

export default function Project(
    {
        title,
        imagePath,
        projectURL,
        githubURL
    }
) {
    return (
        <p>
            {title}
        </p>
    );
}