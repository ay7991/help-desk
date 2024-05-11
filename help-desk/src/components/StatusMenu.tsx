import * as React from 'react';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { StatusProps } from '@/lib/types';
import Notification from './Notification';
import { useStatusUpdate } from '@/lib/utils/statusMenu';

const StatusMenu: React.FC<StatusProps> = ({ currStatus, currID }) => {
  const { status, setStatus, showNotif, setShowNotif, message, color } = useStatusUpdate(currStatus, currID);

  const handleStatusChange = (event: SelectChangeEvent) => {
    setStatus(event.target.value as string);
  };

  return (
    <>
      <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
        <Select sx={{color: '#3B82F6'}} value={status} onChange={handleStatusChange}>
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