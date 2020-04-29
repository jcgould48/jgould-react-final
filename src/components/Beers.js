import React from 'react'
import BeerItem from './BeerItem'
import PropTypes from 'prop-types'
import './Beers.css'

const Beers = (props) => {
    return (
    <div>
        <div>
        {props.beers
.map((beer,idx) =>{
    return(
        <BeerItem 
        key={idx} 
        beer={beer}/>
    )}
    )}
    </div>
</div>
    )
}

Beers.propTypes = {
beers: PropTypes.arrayOf(
    PropTypes.shape({
        name: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        image_url: PropTypes.string.isRequired,
        brewers_tips: PropTypes.string.isRequired,
        // idx: PropTypes.string.isRequired,
        food_pairing:PropTypes.array
    })
)
}

export default Beers;