import { makeStyles } from 'tss-react/mui';
import { Button } from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const InputFieldStyle = makeStyles()(themes => ({
    pre: {
        margin: '60px 0',
        [`& h3`]: {
            fontWeight: 'normal',
            fontSize: '20px',
        },
    },
    root: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: '30px 0',
        [themes.breakpoints.down(950)]: {
            flexDirection: 'column',
            maxWidth: '100%',
        }
    },
    input: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
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
            },
        },
        [themes.breakpoints.down(950)]: {
            maxWidth: '100%',
            width: '100%',
            minWidth: '0',
            ['& > input']: {
                width: '100%',
                maxWidth: '100%',
                minWidth: '0',
                // width: '60%',
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
        ["&:hover"]: {
            background: themes.palette.primary.main,
        },
        ['& > svg']: {
            paddingLeft: '10px',
        },
        [themes.breakpoints.down(950)]: {
            margin: '10px 0',
            minHeight: '40px',
            fontSize: '1rem',
            flex: '1 1 auto',
            padding: '.35em 10px',
            borderRadius: '2px',
        }
    }

})
)
const InputField = () => {
    const { classes } = InputFieldStyle();
    return (
    <div className={classes.pre}>
        <h3>Ready to watch? Enter your email to create or restart your membership.</h3>

        <div className={classes.root}>
            {/* <TextField label="Email address" className={classes.input} variant="outlined" /> */}
            <div className={classes.input}>
                <input type="email" placeholder='Email address' autoComplete='off' />
            </div>

            <Button className={classes.btn} variant='contained'>Get Started <ArrowForwardIosIcon /></Button>
        </div>
    </div>
  )
}

export default InputField