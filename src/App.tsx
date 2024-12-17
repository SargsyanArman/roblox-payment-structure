import React from 'react';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import RbxBuyField from './Components/RbxBuyField/RbxBuyField';
import { RBXSELL_BUY } from './Constants/Styles/App';

const App: React.FC = () => {
  return (
    <Box >
      <Typography style={RBXSELL_BUY}> Покупайте робуксы <br /> выгодно! </Typography>
      <RbxBuyField />
    </Box>
  );
};

export default App;
