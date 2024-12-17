import React from 'react';
import Box from '@mui/material/Box';
import { RBXSELL_BUY, RBXSELL_BUY_FIELD, RBXSELL_BUY_FIELD_CURRENCY, RBXSELL_BUY_FIELD_INPUT, RBXSELL_BUY_FIELD_LABEL, RBXSELL_BUY_FIELD_WRAPPER, RBXSELL_BUY_MAIN } from './Constants/Styles/App';
import { TextField, Typography } from '@mui/material';

const App: React.FC = () => {
  return (
    <Box >
      <Typography style={RBXSELL_BUY}> Покупайте робуксы <br /> выгодно! </Typography>
      <Box sx={{ maxWidth: '430px', margin: "0 auto" }}>

        <Box sx={RBXSELL_BUY_MAIN}>

          <Box sx={RBXSELL_BUY_FIELD}>
            <Typography sx={RBXSELL_BUY_FIELD_LABEL}>Ты получишь</Typography>
            <Box sx={RBXSELL_BUY_FIELD_WRAPPER}>
              <span style={RBXSELL_BUY_FIELD_CURRENCY}>₽</span>
              <TextField
                id="filled-basic"
                label="Отдаёте ₽"
                variant="filled"
                type='number'
                sx={RBXSELL_BUY_FIELD_INPUT}
              />
            </Box>
          </Box>

        </Box>
      </Box>
    </Box>
  );
};

export default App;
