
import styles from '../carStyles.module.css'
import CarCarousel from './CarouselModule';

const CarInfo = ({ data }) => {


    // console.log(data);

    return (
        <div className={ styles.container }>
            <CarCarousel images={ data.images } />
            <div className={ styles.specsGrid }>

                <img src="https://www.changan.com.cn/qiyuan/staticImg/cars/Q07/pz.png?v=1.1.2" alt="" srcset="" />

            </div>
        </div>

    )
}


export default CarInfo;