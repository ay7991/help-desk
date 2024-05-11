import * as React from 'react';

export const updateStatusApi = async (
    currID: number,
    status: string,
    setNotification: (show: boolean, message: string, color: string) => void
  ): Promise<void> => {
    try {
      const statusUpdate = await fetch('/api/tickets', {
        method: 'PATCH',
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          id: currID,
          status: status
        })
      });
  
      if (statusUpdate.ok) {
        setNotification(true, 'Status Successfully Updated!', 'teal');
      } else {
        const response = await statusUpdate.json();
        setNotification(true, response.error, 'red');
        throw new Error(response.error);
      }
    } catch (error) {
      console.error(error);
      setNotification(true, 'Failed to update status', 'red');
    }
};
  
export const useStatusUpdate = (currStatus: string, currID: number) => {
    const [status, setStatus] = React.useState(currStatus);
    const [showNotif, setShowNotif] = React.useState(false);
    const [message, setMessage] = React.useState('');
    const [color, setColor] = React.useState('');
  
    const setNotification = (show: boolean, message: string, color: string) => {
      setShowNotif(show);
      setMessage(message);
      setColor(color);
    };
  
    React.useEffect(() => {
      if (status !== currStatus) { 
        updateStatusApi(currID, status, setNotification);
      }
    }, [status, currID, currStatus]); 
  
    return { status, setStatus, showNotif, setShowNotif, message, color };
}