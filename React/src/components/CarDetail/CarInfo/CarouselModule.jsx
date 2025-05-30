
import styles from '../carStyles.module.css'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const CarCarousel = ({ images }) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    dots: false
                }
            }
        ]
    };

    return (
        <div className={ styles.carouselWrapper }>
            <Slider { ...settings }>
                { images.map((img, index) => (
                    <div key={ index } className={ styles.slideItem }>
                        <img
                            src={ img }
                            alt={ `Car view ${index + 1}` }
                            className={ styles.carouselImage }
                        />
                    </div>
                )) }
            </Slider>
        </div>
    );
};

export default CarCarousel;