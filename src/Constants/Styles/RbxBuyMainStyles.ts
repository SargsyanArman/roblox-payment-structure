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

const RBXSELL_BUY_FIELD_LABEL = {
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

export { RBXSELL_BUY_MAIN, RBXSELL_BUY, RBXSELL_BUY_FIELD_LABEL, RBXSELL_BUY_FIELD_WRAPPER, RBXSELL_BUY_FIELD_CURRENCY, RBXSELL_BUY_FIELD_INPUT }
