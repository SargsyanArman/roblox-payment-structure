import React, { useState } from 'react';
import { Slider, Box, Typography, TextField, Button } from '@mui/material';
import robux from '../../Images/robux.png';
import { RBXSELL_BUY_FIELD_CURRENCY, RBXSELL_BUY_FIELD_INPUT, RBXSELL_BUY_FIELD_LABEL, RBXSELL_BUY_FIELD_WRAPPER, RBXSELL_BUY_MAIN, RBXSELL_BUY_FIELD_SLIDER_STYLES }
    from '../../Constants/Styles/RbxBuyMainStyles';

const RbxBuyMain = () => {
    const [amount, setAmount] = useState<number>(500);
    const [calculatedValue, setCalculatedValue] = useState<number>(675);

    const handleChangeAmount = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = parseFloat(e.target.value);
        if (!isNaN(value)) {
            setAmount(value);
            setCalculatedValue(Math.floor(((value * 35) / 100) + value));
        } else {
            setAmount(NaN);
            setCalculatedValue(NaN);
        }
    };

    const handleChangeRobux = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = parseFloat(e.target.value);
        if (!isNaN(value)) {
            setCalculatedValue(value);
            const recalculatedAmount = Math.floor((value * 100) / (35 + 100));
            setAmount(recalculatedAmount);
        } else {
            setCalculatedValue(NaN);
            setAmount(NaN);
        }
    };

    const handleSliderChange = (event: Event, newValue: number | number[]) => {
        const sliderValue = Array.isArray(newValue) ? newValue[0] : newValue;
        setAmount(sliderValue);
        setCalculatedValue(Math.floor(((sliderValue * 35) / 100) + sliderValue));
    };

    const handleButtonClick = (value: number) => {
        setAmount(value);
        setCalculatedValue(Math.floor(((value * 35) / 100) + value));
    };

    return (
        <Box sx={{ maxWidth: '460px', margin: '0 auto' }}>
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
                            error={amount < 20 || amount > 10000}
                            helperText={amount < 20 || amount > 10000 ? "You can pay only 20-10000 ₽" : ""}
                            sx={RBXSELL_BUY_FIELD_INPUT}
                        />
                    </Box>
                </Box>

                <Box sx={{ display: 'flex', gap: '8px', marginY: '16px' }}>
                    <Button onClick={() => handleButtonClick(500)} variant="outlined">
                        500 ₽
                    </Button>
                    <Button onClick={() => handleButtonClick(1000)} variant="outlined">
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
                            error={calculatedValue < 27 || calculatedValue > 13500}
                            helperText={calculatedValue < 27 || calculatedValue > 13500 ? "You can buy only 27-13500 R$" : ""}
                            sx={RBXSELL_BUY_FIELD_INPUT}
                        />
                    </Box>
                </Box>

                <Box>
                    <Slider
                        value={amount || 0}
                        onChange={handleSliderChange}
                        aria-label="Amount"
                        min={20}
                        max={10000}
                        color="secondary"
                        sx={RBXSELL_BUY_FIELD_SLIDER_STYLES(calculatedValue)}
                    />
                </Box>
            </Box>
        </Box>
    );
};

export default RbxBuyMain;
