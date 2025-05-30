import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import NavigationIcon from '@mui/icons-material/Navigation';
import ScrollDialog from '../../Dialog/ScrollDialog';



function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={ value !== index }
            id={ `vertical-tabpanel-${index}` }
            aria-labelledby={ `vertical-tab-${index}` }
            { ...other }
        >
            { value === index && (
                <Box sx={ { p: 3 } }>
                    <Typography>{ children }</Typography>
                </Box>
            ) }
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `vertical-tab-${index}`,
        'aria-controls': `vertical-tabpanel-${index}`,
    };
}


const fetchFlowStep = async () => {
    const param = 8
    const response = await fetch(`http://localhost:3000/car/check/${param}`)
    if (!response.ok) throw new Error('数据加载失败');
    let { data } = await response.json();

    return data

}


export default function FlowStep({ data }) {



    // console.log(data.purchaseSteps);
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(7);
    const [selectedValue, setSelectedValue] = useState('');

    const [purchaseSteps, setPurchaseSteps] = useState({})


    useState(async () => {
        const data = await fetchFlowStep()
    })





    // 控制弹窗打开
    const handleClickOpen = async (item, ind) => {
        const data = await fetchFlowStep()
        console.log(data, ind);

        setOpen(true);


        setSelectedValue({
            title: data.process[ind],
            content: data.processDetail[ind]
        })
    };

    // 控制弹窗关闭
    const handleClose = () => {
        setOpen(false)
    }

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box
            sx={ { flexGrow: 1, bgcolor: 'background.paper', display: 'flex', height: 600 } }
        >

            <ScrollDialog

                selectedValue={ selectedValue }
                open={ open }
                onClose={ handleClose }

            />
            <Tabs
                orientation="vertical"
                variant="scrollable"
                value={ value }
                onChange={ handleChange }
                aria-label="Vertical tabs example"
                sx={ { borderRight: 1, borderColor: 'divider' } }
            >
                {
                    data.purchaseSteps.map((tab, ind) => (<Tab key={ tab.title } label={ `${ind + 1}. ${tab.title} ` }  { ...a11yProps(ind) } />))
                }


            </Tabs>

            {
                data.purchaseSteps.map((tab, ind) => (<TabPanel value={ value } index={ ind }>
                    <Box sx={ {
                        '& > :not(style)': { m: 1 },
                        width: 900
                    } }>
                        { tab.process.map((item, ind) => (
                            <Fab key={ item } onClick={ () => handleClickOpen(item, ind) } color="primary" variant="extended">
                                <NavigationIcon sx={ { mr: 1 } } />
                                { item }
                            </Fab>)) }
                    </Box>
                </TabPanel>))
            }


        </Box>
    );
}
