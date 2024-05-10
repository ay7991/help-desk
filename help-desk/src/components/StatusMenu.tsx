import * as React from 'react';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { StatusProps } from '@/lib/types';
import Notification from './Notification';

const StatusMenu: React.FC<StatusProps> = ({ currStatus, currID }) => {
  const [status, setStatus] = React.useState(currStatus);
  const [showNotif, setShowNotif] = React.useState(false);
  const [message, setMessage] = React.useState('');
  const [color, setColor] = React.useState('');

  React.useEffect(() => {
    const patchFetch = async (): Promise<void> => {
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
            setShowNotif(true);
            setMessage('Status Successfully Updated!');
            setColor('teal');
            console.log(color);
        } else {
            const response = await statusUpdate.json();
            setShowNotif(true);
            setMessage(response.error);
            setColor('red');
            throw new Error(response.error);
        }
      } catch (error) {
        console.log(error);
      }
    }

    if (status !== currStatus) { 
      patchFetch();
    }
  }, [status, currID, currStatus, color]);


  const updateStatus = (event: SelectChangeEvent) => {
    setStatus(event.target.value);
  }

  return (
    <>
      <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
        <Select sx={{color: '#3B82F6'}} value={status} onChange={updateStatus}>
          <MenuItem sx={{color: '#3B82F6'}} value={'OPEN'}> OPEN </MenuItem>
          <MenuItem sx={{color: '#3B82F6'}} value={'IN PROGRESS'}> IN PROGRESS </MenuItem>
          <MenuItem sx={{color: '#3B82F6'}} value={'RESOLVED'}> RESOLVED </MenuItem>
          <MenuItem sx={{color: '#3B82F6'}} value={'CLOSED'}> CLOSED </MenuItem>
        </Select>
      </FormControl>
      { showNotif && <Notification message={message} onClose={() => setShowNotif(false)} color={color} />}
    </>
  );
}

export default StatusMenu;