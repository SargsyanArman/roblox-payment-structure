import React from 'react';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import RbxBuyMain from './Components/RbxBuyMain/RbxBuyMain';
import { RBXSELL_BUY } from './Constants/Styles/RbxBuyMainStyles';

const App: React.FC = () => {
  return (
    <Box sx={{ backgroundColor: '#151515', height: '100vh' }}>
      <Typography style={RBXSELL_BUY}> Покупайте робуксы <br /> выгодно! </Typography>
      <RbxBuyMain />
    </Box>
  );
};

export default App;
