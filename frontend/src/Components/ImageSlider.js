import React from 'react';
import './ImageSlider.css';
import { Carousel } from 'react-bootstrap';

function ImageSlider() {
    return (
        <div className='slider'>
            <Carousel fade>
                <Carousel.Item interval={3000}>
                    <img
                        className="d-block w-100 slider-img"
                        src="https://images.unsplash.com/photo-1604014237744-b53264894933?auto=format"
                        alt="Digital Tunnel"
                    />
                    <Carousel.Caption>
                        <h3>Embrace the Digital Revolution 🔮</h3>
                        <p>The world is transforming—one algorithm at a time. Be a part of it.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={3000}>
                    <img
                        className="d-block w-100 slider-img"
                        src="https://images.unsplash.com/photo-1549923746-c502d488b3ea?auto=format&fit=crop&w=1050&q=80"
                        alt="Neon Skyline"
                    />
                    <Carousel.Caption>
                        <h3>“Code is Poetry” 💡</h3>
                        <p>Every line you write shapes the future. Build something amazing today.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
}

export default ImageSlider;
