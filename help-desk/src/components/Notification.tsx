import * as React from 'react';
import * as MUI from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

interface NotificationProps {
    message: string,
    onClose: () => void
}

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
            key="loginNotification"
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