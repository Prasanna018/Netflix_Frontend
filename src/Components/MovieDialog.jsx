import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';

import { useDispatch, useSelector } from 'react-redux';
import { setOpen } from '../redux/moviesSlice';
import VideoBg from './VideoBg';

export default function MovieDialog() {
    // const [open, setOpen] = React.useState(false);
    const { open, id } = useSelector((store) => store.movie)
    const dispatch = useDispatch()


    const handleClose = () => {
        dispatch(setOpen(false))


    }

    return (
        <React.Fragment>

            <Dialog
                open={open}

                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >

                <DialogContent>
                    <DialogContentText className='text-black' id="alert-dialog-description">
                        <VideoBg movieId={id} bool={true}></VideoBg>
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} >Cancle</Button>

                </DialogActions>
            </Dialog>
        </React.Fragment>
    );
}