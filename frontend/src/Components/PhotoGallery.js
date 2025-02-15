import React from 'react'
import './PhotoGallery.css'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

function PhotoGallery() {
    return (
        <div className='photogallery-container'>
            <h1 className='photogallery-title'>📚 Library Photo Gallery</h1>
            <div className="photogallery-images">
                <img src="https://images.unsplash.com/photo-1512820790803-83ca734da794" alt="Bookshelf"/>
                <img src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f" alt="Library"/>
                <img src="https://images.unsplash.com/photo-1519682337058-a94d519337bc" alt="Person Reading"/>
                <img src="https://images.unsplash.com/photo-1529070538774-1843cb3265df" alt="Old Books"/>
                <img src="https://images.unsplash.com/photo-1507842217343-583bb7270b66" alt="Study Area"/>
                <img src="https://images.unsplash.com/photo-1549388604-817d15aa0110" alt="Bookstore"/>
                <img src="https://images.unsplash.com/photo-1516979187457-637abb4f9353" alt="Literature Books"/>
                <img src="https://images.unsplash.com/photo-1516979187457-637abb4f9353" alt="Open Book"/>
                <img src="https://images.unsplash.com/photo-1531988042231-d39a9cc12a9a" alt="Student in Library"/>
                <img src="https://images.unsplash.com/photo-1549923746-c502d488b3ea" alt="Stack of Books"/>
            </div>
            <button>VIEW MORE <ArrowForwardIosIcon style={{fontSize:20}}/></button>
        </div>
    )
}

export default PhotoGallery
