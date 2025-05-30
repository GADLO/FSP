
import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

function srcset(image, size, rows = 1, cols = 1) {
    return {
        src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
        srcSet: `${image}?w=${size * cols}&h=${size * rows
            }&fit=crop&auto=format&dpr=2 2x`,
    };
}



const itemData = [
    {
        img: 'https://www.changan.com.cn/qiyuan/staticImg/cars/Q07/color/car_1.jpg',
        title: '月华银',
        rows: 2,
        cols: 2,
    },
    {
        img: 'https://www.changan.com.cn/qiyuan/staticImg/cars/Q07/color/car_3.jpg',
        title: '云影灰',
    },
    {
        img: 'https://www.changan.com.cn/qiyuan/staticImg/cars/Q07/color/car_4.jpg',
        title: '松烟墨',
    },
    {
        img: 'https://www.changan.com.cn/qiyuan/staticImg/cars/Q07/color/car_5.jpg',
        title: '点翠绿',
        cols: 2,
    },
    {
        img: 'https://www.changan.com.cn/qiyuan/staticImg/cars/Q07/color/car_2.jpg',
        title: '云锦白',
        cols: 2,
    },
    {
        img: 'https://www.changan.com.cn/qiyuan/staticImg/cars/Q07/interior/interior_3.jpg',
        title: 'Honey',
        author: '@arwinneil',
        rows: 2,
        cols: 2,
    },
    {
        img: 'https://www.changan.com.cn/qiyuan/staticImg/cars/Q07/interior/interior_1.jpg',
        title: 'Basketball',
    },
    {
        img: 'https://www.changan.com.cn/qiyuan/staticImg/cars/Q07/interior/interior_2.jpg',
        title: 'Fern',
    },
    {
        img: 'https://www.changan.com.cn/qiyuan/staticImg/cars/Q07/screen10.jpg',
        title: 'Mushrooms',
        rows: 2,
        cols: 2,
    },
    {
        img: 'https://www.changan.com.cn/qiyuan/staticImg/cars/Q07/screen15_1.jpg',
        title: 'Tomato basil',
    },
    {
        img: 'https://www.changan.com.cn/qiyuan/staticImg/cars/Q07/screen15.jpg',
        title: 'Sea star',
    },
    {
        img: 'https://www.changan.com.cn/qiyuan/staticImg/cars/Q07/screen22.jpg',
        title: 'Bike',
        cols: 2,
    },
];




const CarGallery = () => {
    return (
        <ImageList
            sx={ { width: 1, height: 1 } }
            variant="quilted"
            cols={ 4 }
            rowHeight={ 121 }
        >
            { itemData.map((item) => (
                <ImageListItem key={ item.img } cols={ item.cols || 1 } rows={ item.rows || 1 }>
                    <img
                        { ...srcset(item.img, 121, item.rows, item.cols) }
                        alt={ item.title }
                        loading="lazy"
                    />
                </ImageListItem>
            )) }
        </ImageList>
    );
}

export default CarGallery;