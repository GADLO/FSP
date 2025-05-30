
import { Fragment, useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import FormDialog from '../../Dialog/FormDialog';

const Accessory = () => {
    const [open, setOpen] = useState(false);
    const [accessory, setAccessory] = useState([])


    const fetchAccessory = async () => {
        const response = await fetch(`http://localhost:3000/car/check/accessory`);
        if (!response.ok) throw new Error('前端请求失败！请检查请求语句');
        const { data } = await response.json();
        console.log(data);
        setAccessory(data)
    }

    useEffect(() => {
        fetchAccessory();
    }, [])



    function handleClose() {
        setOpen(false)
    }
    return (
        <Fragment>
            <Container maxWidth="xl">
                <Fab color="primary" aria-label="add" onClick={ () => setOpen(true) }>
                    <AddIcon />
                </Fab>
                <Grid container spacing={ 2 }>
                    {
                        accessory.map(item => (
                            <Grid size={ 3 }>
                                <Card sx={ { maxWidth: 245, height: 380 } }>
                                    <CardActionArea>
                                        <CardMedia
                                            component="img"
                                            height="180"
                                            image={ item.accessory_base64 }
                                            alt="img"
                                        />
                                        <CardContent sx={ { height: 150 } }>
                                            <Typography gutterBottom variant="h5" component="div">
                                                { item.accessory_title }
                                            </Typography>
                                            <Typography sx={ { color: '#357a38', mb: 1.5 } }>
                                                ¥{ item.accessory_price }
                                            </Typography>
                                            <Typography variant="body2" sx={ { color: 'text.secondary' } }>
                                                { item.accessory_content }
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                    <CardActions>
                                        <Button size="small" color="primary">
                                            分享
                                        </Button>
                                    </CardActions>
                                </Card>
                            </Grid>
                        ))
                    }
                </Grid>
                <FormDialog open={ open }
                    onClose={ handleClose } />
            </Container>
        </Fragment>
    )
}


export default Accessory;