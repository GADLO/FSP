
import carStyles from './carStyles.module.css'
import { useState } from 'react';

const CarHeader = ({ changeCurPage }) => {
    const [activePage, setActivePage] = useState('info');

    const navItem = [
        {
            name: '车辆信息',
            tabindex: 1,
            page: 'info',
            activated: true
        },
        {
            name: '购车流程',
            tabindex: 2,
            page: 'purchaseFlow',
            activated: false
        },
        {
            name: '使用经验',
            tabindex: 3,
            page: 'experiences',
            activated: false
        },
        {
            name: '保修政策',
            tabindex: 4,
            page: 'warranty',
            activated: false
        },
        {
            name: '汽车周边',
            tabindex: 5,
            page: 'accessories',
            activated: false
        },
        {
            name: '改装方案',
            tabindex: 6,
            page: 'modifications',
            activated: false
        },
        {
            name: '图库',
            tabindex: 7,
            page: 'gallery',
            activated: false
        },
        {
            name: ' CREATE',
            tabindex: 8,
            page: 'CREATE',
            activated: false
        },
    ]

    function switchPage(page) {
        console.log(page);

        setActivePage(page.name)
        changeCurPage(page.page)

    }

    return (
        <div className={ carStyles['car-header'] }>
            <h1><a href="/car" aria-label="Click for home.">C798</a></h1>
            <button type="button" tabindex="-1" hidden></button>
            <nav className={ carStyles['navbar'] }>
                <ul>
                    { navItem.map(item => (<li key={ item.name } onClick={ () => switchPage(item) } className={ item.name === activePage ? carStyles.activated : '' }>
                        { item.name }
                    </li>)) }
                </ul>
            </nav>
        </div>
    );
};


export default CarHeader;