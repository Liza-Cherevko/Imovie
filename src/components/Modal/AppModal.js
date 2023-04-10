import React, { useState } from 'react'
import { Box, Button, Modal} from '@mui/material';
import ModalContent from '../ModalContent.js/ModalContent';

const AppModal = ({ children, id }) => {
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
       
        style={{
             display: 'flex',
            justifyContent: 'center',
          alignItems: 'center',
          alignSelf: 'center'
        }}
    
        open={open}
        onClose={handleClose}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
          >
        <Box>
            <ModalContent   id={ id}/>
       
          <Button onClick={handleClose}>Close Child Modal</Button>
        </Box>
        </Modal>

</div>
  )
}

export default AppModal