import { useState } from 'react';
import {
    RBXSELL_BUY_FIELD_CURRENCY,
    RBXSELL_BUY_FIELD_INPUT,
    RBXSELL_BUY_FIELD_LABEL,
    RBXSELL_BUY_FIELD_WRAPPER,
    RBXSELL_BUY_MAIN
} from '../../Constants/Styles/RbxBuyMainStyles';
import { Box, Button, TextField, Typography } from '@mui/material';
import robux from '../../Images/robux.png';

const RbxBuyMain = () => {
    const [amount, setAmount] = useState<number | "">(500);
    const [calculatedValue, setCalculatedValue] = useState<number | "">(675);

    const handleChangeAmount = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = parseFloat(e.target.value);
        if (!isNaN(value)) {
            setAmount(value);
            setCalculatedValue(Math.floor(((value * 35) / 100) + value));
        } else {
            setAmount("");
            setCalculatedValue("");
        }
    };

    const handleChangeRobux = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = parseFloat(e.target.value);
        if (!isNaN(value)) {
            setCalculatedValue(value);
            const recalculatedAmount = Math.floor((value * 100) / (35 + 100));
            setAmount(recalculatedAmount);
        } else {
            setCalculatedValue("");
            setAmount("");
        }
    };

    const handleButtonClick = (value: number) => {
        setAmount(value);
        setCalculatedValue(Math.floor(((value * 35) / 100) + value));
    };

    return (
        <Box sx={{ maxWidth: '430px', margin: '0 auto' }}>
            <Box sx={RBXSELL_BUY_MAIN}>
                <Box>
                    <Typography sx={RBXSELL_BUY_FIELD_LABEL}>Ты платишь</Typography>
                    <Box sx={RBXSELL_BUY_FIELD_WRAPPER}>
                        <span style={RBXSELL_BUY_FIELD_CURRENCY}>₽</span>
                        <TextField
                            id="input-rub"
                            label="Отдаёте ₽"
                            variant="filled"
                            type="number"
                            value={amount}
                            onChange={handleChangeAmount}
                            sx={RBXSELL_BUY_FIELD_INPUT}
                        />
                    </Box>
                </Box>

                <Box sx={{ display: 'flex', gap: '8px', marginY: '16px' }}>
                    <Button onClick={() => handleButtonClick(500)} variant="outlined" >
                        500 ₽
                    </Button>
                    <Button onClick={() => handleButtonClick(1000)} variant="outlined" >
                        1000 ₽
                    </Button>
                </Box>

                <Box>
                    <Typography sx={RBXSELL_BUY_FIELD_LABEL}>Ты получаешь</Typography>
                    <Box sx={RBXSELL_BUY_FIELD_WRAPPER}>
                        <img src={robux} alt="Robux" style={RBXSELL_BUY_FIELD_CURRENCY} />
                        <TextField
                            id="output-robux"
                            label="Получите R$"
                            variant="filled"
                            type="number"
                            value={calculatedValue}
                            onChange={handleChangeRobux}
                            sx={RBXSELL_BUY_FIELD_INPUT}
                        />
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default RbxBuyMain;
