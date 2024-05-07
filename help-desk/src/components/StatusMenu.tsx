import * as React from 'react';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

type StatusProps = {
  currStatus: string,
  currID: number
}

const StatusMenu: React.FC<StatusProps> = ({ currStatus, currID }) => {
  const [status, setStatus] = React.useState(currStatus);

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
            alert('Ticket successfully updated!');
        } else {
            const response = await statusUpdate.json();
            alert(response.error);
            throw new Error(response.error);
        }
      } catch (error) {
        console.log(error);
      }
    }

    if (status !== currStatus) { // Only run patchFetch if status has actually changed
      patchFetch();
    }
  }, [status, currID, currStatus]);


  const updateStatus = (event: SelectChangeEvent) => {
    setStatus(event.target.value);
  }

  return (
    <>
      <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
        <Select value={status} onChange={updateStatus}>
          <MenuItem value={'OPEN'}> OPEN </MenuItem>
          <MenuItem value={'IN PROGRESS'}> IN PROGRESS </MenuItem>
          <MenuItem value={'RESOLVED'}> RESOLVED </MenuItem>
          <MenuItem value={'CLOSED'}> CLOSED </MenuItem>
        </Select>
      </FormControl>
    </>
  );
}

export default StatusMenu;