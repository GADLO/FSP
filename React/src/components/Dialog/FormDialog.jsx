import * as React from 'react';
import { useState } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import CloseIcon from '@mui/icons-material/Close';
import { IconButton } from '@mui/material';
import Slide from '@mui/material/Slide';
import CreateAccessory from '../CarDetail/Accessories/CreateAccessory';

// 组件动画设置
const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ ref } { ...props } />;
});

export default function FormDialog({ open, onClose }) {
    const [title, setTitle] = useState('Example')
    const [content, setContent] = useState([])
    const [scroll, setScroll] = useState('paper');


    const handleClose = () => {
        onClose(false)
    };

    const descriptionElementRef = React.useRef(null);
    React.useEffect(() => {
        if (open) {
            const { current: descriptionElement } = descriptionElementRef;
            if (descriptionElement !== null) {
                descriptionElement.focus();
            }
        }





    }, [open]);

    return (



        <Dialog
            open={ open }
            onClose={ handleClose }
            scroll={ scroll }
            fullWidth='xl'
            TransitionComponent={ Transition }
            aria-labelledby="scroll-dialog-title"
            aria-describedby="scroll-dialog-description"
        >
            <DialogTitle id="scroll-dialog-title">新增</DialogTitle>
            <IconButton
                aria-label="close"
                onClick={ handleClose }
                sx={ (theme) => ({
                    position: 'absolute',
                    right: 8,
                    top: 8,
                    color: theme.palette.grey[500],
                }) }
            >
                <CloseIcon />
            </IconButton>
            <DialogContent dividers={ scroll === 'paper' }>
                <CreateAccessory />
            </DialogContent>

        </Dialog>

    );
}
