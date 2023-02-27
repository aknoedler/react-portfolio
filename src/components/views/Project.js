import React from 'react';
import Image from 'react-bootstrap/Image';

export default function Project(
    {
        title,
        imagePath,
        projectURL,
        githubURL
    }
) {
    
    console.log(imagePath)

    return (
        <div>
            <Image 
             src={imagePath}
             fluid/>
            
        </div>
    )
}