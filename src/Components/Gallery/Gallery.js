import React from 'react';
import Card from '../Card/Card'
import {connect} from 'react-redux'
import styles from './Gallery.css'
// import {galleryAsync} from '../../react/actions/galleryActions'

const Gallery = (props) => {
    return (
        <div className={styles.cardCont}>
            {props.galleryArr.map(el => <Card 
                img={el.image_url}
                name={el.name} 
                abv={el.abv}
                price={el.attenuation_level}
                description={el.description} 
                key={el.id}
                id={el.id}
                isActive={el.isActive}
                />)}
        </div>
    );
};

function MSTP (state) {
    return {
        galleryArr: state.galleryArr
    }
}

// function MDTP (dispatch) {
//     return {
//         galleryFetch: function() {
//             dispatch(galleryAsync())
//         }
//     }
// }

export default connect(MSTP, null) (Gallery);