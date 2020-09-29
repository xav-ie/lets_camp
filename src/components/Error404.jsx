import React from 'react'
// import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const Error404 = props => {
    return (
        <div>
            ruh roh! you're not supposed to be here! <Link to='/fire'>Go see the  <span role="img" aria-label="fire">🔥</span>...</Link>
        </div>
    )
}

Error404.propTypes = {

}

export default Error404
