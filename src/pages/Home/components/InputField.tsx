import { makeStyles } from 'tss-react/mui';
import { TextField, Button } from '@mui/material';



const InputFieldStyle = makeStyles()(themes => ({
    root: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: '30px 0',
    },
    input: {
        // background: "#fff !important",
        // padding: '10px 0',
        // [`& label, & legend`]: {
        //     color: '#fff !important',
        // },
        // [`& div`]: {
        //     borderRadius: '0 !important',
        //     // outline: '2px solid #fff !important',
        // },
        // [`& fieldset`]: {
        //     border: "0 !important",
        // }

        // display: 'flex',
        // justifyContent: 'center',
        // alignContent: 'center',
        [`& > label`]: {
            display: 'absolute',
        },
        ["& > input"]: {
            outline: '0',
            borderRadius: '0',
            borderTopLeftRadius: '1px',
            borderBottomLeftRadius: '1px',
            height: "60px",
            position: 'relative',
            minWidth: "450px",
            fontSize: '1rem',
            color: '#141414',
            padding: '10px 10px 0',
            border: 'none',
            [`&:focus`]: {
                outline: 'none',
                border: 'none',
                ['&::placeholder']: {
                    transform: 'translateY(-130%)',
                    fontSize: '14px',
                    display: 'block',
                    // opacity: '1',
                    fontWeight: '500',
                }
            },
            [`&::placeholder`]: {
                fontSize: '16px',
                transform: 'translateY(-20%)',
                transition: 'all .3s ease-in-out',
                color: '#8c8c8c',
            }
        }
    },
    btn: {
        height: '70px',
        boxShadow: 'none',
        borderRadius: '1px',
        fontSize: '1.625rem',
        textTransform: 'capitalize',
        borderTopRightRadius: '1px',
        borderBottomRightRadius: '1px',
    }

})
)
const InputField = () => {
    const { classes } = InputFieldStyle();
    return (
    <div className={classes.root}>

        {/* <TextField label="Email address" className={classes.input} variant="outlined" /> */}
        <div className={classes.input}>
            <input type="email" placeholder='Email address' autoComplete='off' />
        </div>

        <Button className={classes.btn} variant='contained'>Get Started</Button>
    </div>
  )
}

export default InputField