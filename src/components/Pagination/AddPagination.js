import { Box, Pagination } from '@mui/material';
import { styled } from '@mui/material/styles';
import React from 'react'


// const StyledPagination = styled(Pagination)`

   
//   & .css-nb7bwn-MuiButtonBase-root-MuiPaginationItem-root{
//     color: #000;
//   }
//   & .css-nb7bwn-MuiButtonBase-root-MuiPaginationItem-root:active{
//     background: #810909;
//     padding:10px;
//     border-radius: 50%;
//   }
// `;

function AddPagination({ setPage, pageNumber }) {
    
    const handleChange = page => { 
        setPage(page)
        window.scroll(0,0)
    }
   
  return (
      <Box  sx={{
          position: 'fixed',
          bottom:'0',
          width: '100%',
          backgroundColor: 'yellow',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: 60,
      }}>
          <Pagination component="div" count={pageNumber} color='pagination'  onChange={(e) => handleChange(e.target.textContent)} />
     </Box>
  )
}

export default AddPagination
