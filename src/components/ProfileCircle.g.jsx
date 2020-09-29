import React from 'react'
import PropTypes from 'prop-types'

const ProfileCircle = ({cx, cy, person}) => {
    return (
        <g>
            <circle cx={cx} cy={cy} r="100"/>
            <text x={cx} y={cy} font-size="3em" fill="white" dominant-baseline="middle" text-anchor="middle">{person.name}</text>
            <circle cx={cx} cy={cy} r="100" cursor="pointer"  opacity="0.1" fill="red"/>
        </g>
    )
}

ProfileCircle.propTypes = {
    cx: PropTypes.number,
    cy: PropTypes.number,
    person: PropTypes.shape(
        {
            name: PropTypes.string  
        }
    )
}

export default ProfileCircle;
