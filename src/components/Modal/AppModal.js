import React, { useState } from 'react'
import { Box, Button, Modal} from '@mui/material';

const AppModal = ({ children }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <div onClick={handleOpen}> {children }</div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
          >
                <Box sx={{ width: 200, backgroundColor:'blue', position: 'absolute', top:'50%', left:'50%', opacity:'07' }}>
          <h2 id="child-modal-title">Text in a child modal</h2>
          <p id="child-modal-description">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          </p>
          <Button onClick={handleClose}>Close Child Modal</Button>
        </Box>
        </Modal>

</div>
  )
}

export default AppModal