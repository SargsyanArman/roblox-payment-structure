import { CSSProperties } from 'react';

const RBXSELL_BUY: CSSProperties = {
    marginBottom: '44px',
    paddingTop: '40px',
    textAlign: 'center',
    fontSize: '52px',
    color: 'white',
}

const RBXSELL_BUY_MAIN: CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
    border: '1px solid #1B1B1B',
    borderRadius: '20px',
    backgroundColor: '#171717',
    marginBottom: '30px',
    padding: '33px 22px 26px',
};

const RBXSELL_BUY_FIELD_LABEL: CSSProperties = {
    color: '#a8a8a8',
    backgroundColor: 'transparent'
}

const RBXSELL_BUY_FIELD_WRAPPER: CSSProperties = {
    position: 'relative',
    marginTop: '10px'
}

const RBXSELL_BUY_FIELD_INPUT: CSSProperties = {
    width: '100%',
    color: '#fff',
    fontWeight: 700,
    fontSize: '20px',
    lineHeight: '24px',
    transition: 'border-color .3s',
    borderRadius: '15px',
    border: '1px solid #1B1B1B',
    background: '#171717',
    '& .MuiInputLabel-root': {
        color: '#fff',
    },
    '& .MuiFilledInput-root': {
        '& input': {
            color: '#fff',
        },
        '&.Mui-focused': {
            color: '#fff',
        },
        '& input[type="number"]': {
            '::-webkit-outer-spin-button': {
                WebkitAppearance: 'none',
                margin: 0
            },
            '::-webkit-inner-spin-button': {
                WebkitAppearance: 'none',
                margin: 0
            }
        }
    },
}

const RBXSELL_BUY_FIELD_CURRENCY: CSSProperties = {
    position: 'absolute',
    right: '20px',
    top: '50%',
    transform: 'translateY(-50%)',
    color: '#fff',
    fontSize: '25px',
    width: '25px',
    zIndex: 1
}

const sliderContent = (value: number | string): string => {
    return isNaN(Number(value)) ? '0' : value.toString();
}
const RBXSELL_BUY_FIELD_SLIDER_STYLES = (calculatedValue: number | string): CSSProperties => ({
    position: 'relative',
    width: '90%',
    marginLeft: '5%',
    '& .MuiSlider-thumb': {
        width: 'auto',
        minWidth: '40px',
        padding: '15px 35px',
        borderRadius: '12px',
        backgroundColor: '#1976D2',
        boxShadow: '0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12)',
        '&::before': {
            content: `"${sliderContent(calculatedValue)} R$"`,
            fontSize: '14px',
            fontWeight: 'bold',
            color: '#fff',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        },
    },
    '& .MuiSlider-track': {
        backgroundColor: '#4aa3fd',
    },
    '& .MuiSlider-rail': {
        backgroundColor: 'lightgray',
    },
});

export {
    RBXSELL_BUY_MAIN,
    RBXSELL_BUY,
    RBXSELL_BUY_FIELD_LABEL,
    RBXSELL_BUY_FIELD_WRAPPER,
    RBXSELL_BUY_FIELD_CURRENCY,
    RBXSELL_BUY_FIELD_INPUT,
    RBXSELL_BUY_FIELD_SLIDER_STYLES
}
