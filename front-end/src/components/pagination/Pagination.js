import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import PaginationItem from '@mui/material/PaginationItem';
import Stack from '@mui/material/Stack';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { BorderAllRounded } from '@mui/icons-material';
import { toast } from "react-toastify";
export default function CustomIcons() {
  const notify = () => toast("Em Breve!");
  return (
    <Stack spacing={2}>
      <Pagination
      onClick={()=>notify()}
        count={10}
        renderItem={(item) => (
          <PaginationItem
          sx={{
            color:'#fff',
            backgroundColor:'#000',
            
          }}
            slots={{ previous: ArrowBackIcon, next: ArrowForwardIcon }}
            {...item}
          />
        )}
      />
    </Stack>
  );
}