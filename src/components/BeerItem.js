import React from 'react'
import PropTypes from 'prop-types';


const BeerItem = ({ 
    beer : {name, description, image_url, food_pairing, brewers_tips, id}}) =>{
    return (    
            <div>
        <div className='bcontainer'>
<div className='imagecon'>
<img className='image'  src={image_url} alt="..."/> 
</div>
       <div key={id} className='beerinfo'>
           <div className='title'>{name}</div>
           <br />
           <span>
           <div className='meta'><b>Description: </b>{description}</div>
           </span>
           <br />
           <span>
           <div className='meta'><b>Tips: </b>{brewers_tips}</div>
           </span>
           <br />
           <div className='description'>
            <b>Pairs with:</b>
            <ul>
         {food_pairing
         .map((item) =>{ return(
             <li>{item}</li>
    )}
    )}
    </ul>
           </div>
       </div>
       </div>
       <hr />
   </div>
       
    )
}

BeerItem.propTypes = {
    beer: PropTypes.shape({
        name: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        image_url: PropTypes.string.isRequired,
        brewers_tips: PropTypes.string.isRequired,
        // _id: PropTypes.string.isRequired,
        food_pairing:PropTypes.array
    })
};

export default BeerItem;
