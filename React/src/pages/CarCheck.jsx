import CarInfo from "../components/CarInfo";
import AddCheck from "../components/AddCheck";
import { useState, useEffect } from "react";

let obj = [
    {
        name: '车辆证件',
        info: '核对购车发票、合格证、车辆一致性证书、机动车登记证（绿本）、三包凭证等是否齐全，确保车架号（VIN码）、发动机号与铭牌一致。',
        isChecked: false
    },
    {
        name: '生产日期',
        info: '铭牌位于驾驶侧车门或发动机舱，出厂日期超过6个月为库存车，进口车不超过1年',
        isChecked: false
    },
    {
        name: '玻璃与轮胎日期',
        info: '玻璃：数字代表年份，点代表月份（点在左用7减，点在右用13减）。轮胎：四位数字（如“2324”表示2023年第24周），应与整车生产时间匹配。',
        isChecked: false
    },
    {
        name: '漆面',
        info: '在光线充足处观察划痕、色差、钣金平整度，使用漆膜仪检测厚度（原厂漆90-160μm，修补漆≥200μm）',
        isChecked: false,
        type: '外观'
    },
    {
        name: '缝隙与密封',
        info: '检查车门、引擎盖、后备箱缝隙是否均匀，密封条是否破损',
        isChecked: false,
        type: '外观'
    },
    {
        name: '底盘与轮胎',
        info: '升起车辆查看底盘剐蹭，轮胎胎毛完整（磨损少）',
        isChecked: false,
        type: '外观'
    },
]

const CarCheck = () => {

    const [checkList, setCheckList] = useState(obj)

    useEffect(() => {

    })

    function changeState(item) {



        if (checkList.indexOf(item)) {
            let index = checkList.indexOf(item);
            checkList[index].isChecked = !checkList[index].isChecked;
        }

        console.log(checkList[checkList.indexOf(item)]);


    }

    function submitNewItem({ name, info }) {
        let newItem = {
            name,
            info,
            isChecked: false
        }

        setCheckList([...checkList, newItem])
        console.log(newItem, obj);

    }

    function update() {
        setCheckList(obj)
    }



    return (<div className="car">
        <h1>Car Check</h1>

        <div>


        </div>
        <div className="list-wrap">
            <form action="">
                { checkList.map((item => {
                    return <CarInfo onChange={ () => {
                        changeState(item)
                    } } name={ item.name } info={ item.info } isChecked={ item.isChecked }></CarInfo>
                })) }
            </form>

            <AddCheck addCheck={ submitNewItem }></AddCheck>
        </div>
    </div>)
}


export default CarCheck;