import * as React from 'react';
import * as MUI from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { NotificationProps } from '@/lib/types';

const Notification: React.FC<NotificationProps> = ({ message, onClose }) => {
    const handleClose = () => {
        onClose();
    }

    return (
        <MUI.Snackbar 
            anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
            open={true}
            onClose={handleClose}
            autoHideDuration={6000}
            message={message}
            key="notification"
            action={
            <MUI.IconButton
                aria-label="close"
                color="inherit"
                sx={{ p: 0.5 }}
                onClick={handleClose}
            >
                <CloseIcon />
            </MUI.IconButton>}
        />
    );
}

export default Notification;