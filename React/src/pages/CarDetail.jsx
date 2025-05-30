// CarDetailPage.jsx
import React, { Fragment, useState } from 'react';


import styles from '../styles/carDetail.module.css';
import CarHeader from '../components/CarDetail/CarHeader';
import CarInfo from '../components/CarDetail/CarInfo/Info';
import FlowStep from '../components/CarDetail/PurchaseFlow/FlowStep';
import CarGallery from '../components/CarDetail/Gallery/CarGallery';
import Accessory from '../components/CarDetail/Accessories/Accessory';







// 周边推荐组件
const AccessoriesRecommendation = ({ data }) => {


    return (
        <Fragment>
            <Accessory />

        </Fragment>


    );
};


// 轮播图组件


// page 内容组件
const PageContents = {

    info: CarInfo,
    purchaseFlow: ({ data }) => (
        // <div className={ styles.infoSection }>

        <FlowStep data={ data } />

        // </div>
    )
    ,
    modifications: ({ data }) => (
        <div className={ styles.infoSection }>
            <h2>改装方案</h2>
            <ul className={ styles.modList }>
                { data.modifications.map((mod, i) => (
                    <li key={ i }>
                        <h3>{ mod.part }</h3>
                        <p>{ mod.description }</p>
                        <span className={ styles.priceTag }>¥{ mod.price }</span>
                    </li>
                )) }
            </ul>
        </div>
    ),
    warranty: ({ data }) => (
        <div className={ styles.infoSection }>
            <h2>保修政策</h2>
            <div className={ styles.warrantyCard }>
                <div className={ styles.warrantyPeriod }>
                    { data.warranty.period } 年质保
                </div>
                <p>{ data.warranty.description }</p>
            </div>
        </div>
    ),
    experiences: ({ data }) => (
        <div className={ styles.infoSection }>
            <h2>车主分享</h2>
            { data.experiences.map((exp, i) => (
                <div key={ i } className={ styles.experienceItem }>
                    <div className={ styles.userInfo }>
                        <span className={ styles.userName }>{ exp.user }</span>
                        <span className={ styles.mileage }>{ exp.mileage } 公里</span>
                    </div>
                    <p className={ styles.comment }>{ exp.comment }</p>
                </div>
            )) }
        </div>
    ),
    accessories: ({ data }) => <AccessoriesRecommendation data={ data.accessories } />,
    gallery: () => (<CarGallery />)
};

// 主组件
const CarDetailPage = () => {
    const [activeTab, setActiveTab] = useState('info');

    function currentPage(page) {
        setActiveTab(page)
    }
    // 模拟数据
    const carData = {

        model: 'Q07',
        images: [
            'https://www.changan.com.cn/qiyuan/staticImg/cars/Q07/screen2_2.jpg',
            'https://www.changan.com.cn/qiyuan/staticImg/cars/Q07/screen2.jpg',
            'https://www.changan.com.cn/qiyuan/staticImg/cars/Q07/screen2_2.jpg'
        ],
        engine: '三电机全轮驱动',
        transmission: '单速固定齿比变速箱',
        modifications: [
            {
                part: '性能套件',
                description: '包含碳陶瓷刹车系统、赛道模式',
                price: 65000
            },
            // 更多改装项...
        ],
        warranty: {
            period: 4,
            description: '整车质保4年或8万公里，三电系统质保8年或16万公里'
        },
        experiences: [
            {
                user: '张先生',
                mileage: 15000,
                comment: '加速性能非常狂暴，日常使用完全过剩...'
            },
            // 更多体验...
        ],
        purchaseSteps: [
            // 1. 需求确认
            {
                id: 1,
                icon: '',
                title: "需求确认",
                subtitle: "明确购车预算与用途",
                time: "1-3天",
                process: [
                    "记录日常用车场景（通勤距离/家庭成员/装载需求）",
                    "计算购车总预算（裸车价+购置税+保险+装潢）",
                    "确定能源类型（燃油/混动/纯电/插混）",
                    "选择品牌倾向（国产/合资/进口）"
                ],
                notes: [
                    {
                        type: "warning",
                        title: "预算红线",
                        content: "总支出不应超过家庭年收入的50%",
                        example: "年收入20万家庭，购车总支出建议≤10万"
                    },
                    {
                        type: "tip",
                        title: "用车成本",
                        content: "电车年均保养费约燃油车的1/3，但需考虑电池衰减"
                    }
                ],
                documents: ["家庭收入证明", "现有车辆评估报告"]
            },

            // 2. 车型选择
            {
                id: 2,
                icon: '',
                title: "车型选择",
                subtitle: "确定具体配置与版本",
                time: "3-7天",
                process: [
                    "比较3-5款同级车型参数（轴距/马力/续航）",
                    "确认具体配置（智驾包/座椅通风/音响系统）",
                    "选择车身颜色与内饰风格",
                    "确认是否为库存车/定制车"
                ],
                notes: [
                    {
                        type: "warning",
                        title: "配置陷阱",
                        content: "中配车型性价比最高，顶配贬值率较高"
                    },
                    {
                        type: "tip",
                        title: "生产日期",
                        content: "国产车不超过3个月，进口车不超过6个月"
                    }
                ],
                documents: ["车型配置表", "厂家宣传册"]
            },

            // 3. 试驾体验
            {
                id: 3,
                icon: '',
                title: "试驾体验",
                subtitle: "实际驾驶性能测试",
                time: "1-2天",
                process: [
                    "预约不同动力版本试驾（纯电/燃油/混动）",
                    "测试城市道路与高速表现",
                    "体验智能驾驶辅助系统",
                    "评估车内噪音与悬挂舒适性"
                ],
                notes: [
                    {
                        type: "warning",
                        title: "试驾协议",
                        content: "仔细阅读试驾责任条款，确认保险覆盖范围"
                    },
                    {
                        type: "tip",
                        title: "重点测试项",
                        content: "连续变道稳定性、刹车踏板线性度、自动泊车成功率"
                    }
                ],
                documents: ["试驾协议", "驾驶证"]
            },

            // 4. 价格谈判
            {
                id: 4,
                icon: '',
                title: "价格谈判",
                subtitle: "争取最优购车方案",
                time: "1-2天",
                process: [
                    "收集3家以上4S店报价",
                    "对比裸车价/装潢套餐/保养套餐",
                    "谈判精品赠品（贴膜/脚垫/保养券）",
                    "确认置换补贴政策"
                ],
                notes: [
                    {
                        type: "warning",
                        title: "价格构成",
                        content: "要求提供明细：裸车价+购置税+保险+上牌费",
                        example: "警惕综合服务费、出库费等不合理收费"
                    },
                    {
                        type: "tip",
                        title: "谈判策略",
                        content: "月底/季度末冲量时议价空间更大"
                    }
                ],
                documents: ["报价单", "旧车评估报告"]
            },

            // 5. 合同签订
            {
                id: 5,
                icon: '',
                title: "合同签订",
                subtitle: "法律条款确认",
                time: "0.5天",
                process: [
                    "核对车辆识别码（VIN码）",
                    "明确交车日期（精确到日）",
                    "注明延期赔偿条款（每日车价0.5‰）",
                    "确认赠品型号清单"
                ],
                notes: [
                    {
                        type: "warning",
                        title: "定金条款",
                        content: "定金不应超过车价20%，注明退款条件"
                    },
                    {
                        type: "tip",
                        title: "补充协议",
                        content: "要求附加'排除运损车/库存车'条款"
                    }
                ],
                documents: ["标准购车合同", "定金收据"]
            },

            // 6. 金融方案
            {
                id: 6,
                icon: '',
                title: "金融方案",
                subtitle: "选择支付方式",
                time: "1-2天",
                process: [
                    "比较厂家金融与银行贷款利率",
                    "计算等额本息/气球贷方案差异",
                    "确认提前还款违约金",
                    "办理信用审核"
                ],
                notes: [
                    {
                        type: "warning",
                        title: "真实利率",
                        content: "将手续费计入利率计算，警惕'零利率'陷阱"
                    },
                    {
                        type: "tip",
                        title: "贷款方案",
                        content: "最优选择：首付30%+3年分期"
                    }
                ],
                documents: ["收入证明", "银行流水", "征信报告"]
            },

            // 7. 车辆准备
            {
                id: 7,
                icon: '',
                title: "车辆准备",
                subtitle: "新车整备与PDI检测",
                time: "3-15天",
                process: [
                    "厂家发运物流跟踪",
                    "4S店进行新车整备（洗车/充电）",
                    "完成售前检测（PDI检测）",
                    "加装选定配置"
                ],
                notes: [
                    {
                        type: "warning",
                        title: "PDI检测",
                        content: "要求出示检测报告，重点检查底盘/电池状态"
                    },
                    {
                        type: "tip",
                        title: "物流追踪",
                        content: "海运车辆需确认是否经过涉水路段"
                    }
                ],
                documents: ["PDI检测报告", "物流单号"]
            },

            // 8. 验车
            {
                id: 8,
                icon: '',
                title: "验车",
                subtitle: "新车全面检查",
                time: "0.5天",
                process: [
                    "验车前准备",
                    "检查外观（漆面/轮胎/玻璃）",
                    "内饰与功能",
                    "核对铭牌信息（车架号/生产日期）",
                    "测试电子设备（车机/灯光/传感器）",
                    "随车文件与配件",
                    "路试检查异响/跑偏"
                ],
                notes: [
                    {
                        type: "warning",
                        title: "运损车",
                        content: "重点检查前后保险杠/车门缝隙/底盘护板"
                    },
                    {
                        type: "tip",
                        title: "里程标准",
                        content: "燃油车≤50km，电动车≤30km"
                    }
                ],
                documents: ["验车清单", "车辆一致性证书"]
            },

            // 9. 手续办理
            {
                id: 9,
                icon: '',
                title: "手续办理",
                subtitle: "完成法律登记",
                time: "1-2天",
                process: [
                    "缴纳购置税（新能源车免征）",
                    "办理临时牌照",
                    "购买交强险与商业险",
                    "选号上牌"
                ],
                notes: [
                    {
                        type: "warning",
                        title: "保险生效",
                        content: "临牌期间需购买商业险，生效时间需早于上路时间"
                    },
                    {
                        type: "tip",
                        title: "车牌选择",
                        content: "交管12123APP可预选号码，保留号段公布时间：每月5日/15日/25日"
                    }
                ],
                documents: ["购车发票", "合格证", "保险单"]
            },

            // 10. 提车
            {
                id: 10,
                icon: '',
                title: "提车",
                subtitle: "完成车辆交付",
                time: "0.5天",
                process: [
                    "核对随车文件（说明书/保养手册）",
                    "领取应急工具（三脚架/补胎剂）",
                    "学习车机系统操作",
                    "参加交车仪式"
                ],
                notes: [
                    {
                        type: "warning",
                        title: "文件清单",
                        content: "必须取得：机动车登记证书、完税证明、首保券"
                    },
                    {
                        type: "tip",
                        title: "功能激活",
                        content: "立即注册厂家APP，激活车联网服务"
                    }
                ],
                documents: ["机动车登记证书", "两把钥匙", "保养手册"]
            }
        ],
        accessories: {
            categories: [
                { id: 'all', name: '全部', icon: '' },
                { id: 'clean', name: '清洁养护', icon: '' },
                { id: 'safety', name: '安全设备', icon: '' },
                { id: 'electronic', name: '车载电子', icon: '' },
                { id: 'comfort', name: '舒适升级', icon: '' }
            ],
            items: [
                {
                    id: 1,
                    name: '无线车载吸尘器',
                    category: 'clean',
                    price: 299,
                    originalPrice: 499,
                    image: '/images/vacuum.jpg',
                    rating: 4,
                    reviews: 1285,
                    tags: ['吸力强劲', 'Type-C快充', '可水洗滤芯'],
                    isHot: true
                },
                {
                    id: 2,
                    name: '胎压监测系统',
                    category: 'safety',
                    price: 589,
                    image: '/images/tpms.jpg',
                    rating: 5,
                    reviews: 892,
                    tags: ['太阳能供电', '六种预警模式', 'IP67防水']
                },
                // 更多商品...
            ]
        }
    };

    return (
        <div>
            <CarHeader changeCurPage={ currentPage } />
            <div className={ styles.container }>
                <h1 className={ styles.title }>{ activeTab }</h1>
                <div className={ styles.tabContent }>
                    { React.createElement(PageContents[activeTab], {
                        data: carData
                    }) }
                </div>
            </div>
        </div>

    );
};

export default CarDetailPage;