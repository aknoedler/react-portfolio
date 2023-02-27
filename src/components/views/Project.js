import React from 'react';
import Image from 'react-bootstrap/Image';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover'

export default function Project(
    {
        title,
        description,
        imagePath,
        projectURL,
        githubURL
    }
) {

    const styles = {
        detailStyle: {

        },
        detailHeaderStyle: {
            
        },
        detailBodyStyle: {

        },
        imageStyle: {
            cursor: 'pointer'
        }
    }
    
    const details = (
        <Popover style = {styles.detailStyle}>
            <Popover.Header style = {styles.detailHeaderStyle} as="h3" href={projectURL}>{title}</Popover.Header>
            <Popover.Body style = {styles.detailBodyStyle}>
                <p>{description}</p>
                <a href={githubURL}>github</a>
            </Popover.Body>
        </Popover>
    )

    return (
        <OverlayTrigger trigger="click" placement="bottom" overlay={details}>
            <Image 
            style={styles.imageStyle}
             src={imagePath}
             fluid/>
            
        </OverlayTrigger>
    )
}