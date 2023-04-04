import { Box, Pagination } from '@mui/material';
import { styled } from '@mui/material/styles';
import React from 'react'


const StyledPagination = styled(Pagination)`
  ${'' /* background-color: #6772e5;
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
  padding: 7px 14px; */}
   
  & .css-nb7bwn-MuiButtonBase-root-MuiPaginationItem-root{
    color: #fff;
  }
  & .css-nb7bwn-MuiButtonBase-root-MuiPaginationItem-root:active{
    background: #810909;
    padding:10px;
    border-radius: 50%;
  }
`;

function AddPagination() {
   
   
  return (
      <Box margin={'auto'}>
          <StyledPagination component="div" count={10}  />
     </Box>
  )
}

export default AddPagination