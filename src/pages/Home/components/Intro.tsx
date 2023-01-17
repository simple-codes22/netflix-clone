/* Mini components
- Header.
- Input fields...

*/
import { makeStyles } from "tss-react/mui";
import { Button, TextField } from '@mui/material';
import InputField from "./InputField";
import Logo from './../../../assets/Netflix Logo.svg.png';
import background from './../../../assets/Netflix Nigeria Background.jpg';

interface Props {
    className?: string
}

const IntroStyle = makeStyles()(theme => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        color: '#fff ',
        width: '100%',
        ['& *']: {
            zIndex: '1'
        }
    },
    header: {
        display: 'flex',
        height: '4rem',
        paddingTop: '20px',
        alignItems: 'flex-end',
        width: '90%',
        justifyContent: 'space-between',
    },
    logoCover: {},
    logo: {
        width: '150px',
    },
    background: {
        position: 'absolute',
        zIndex: '0',
        top: '-70px',
        bottom: '0',
        left: '0',
        right: '0',
        overflow: 'hidden',
        [`& img`]: {
            // width: '100%',
            height: '100%',
            position: 'relative',
            objectFit: 'cover',
            width: '100%',
            maxWidth: '100%',
        },
        [`& > div`]: {
            background: "rgba(0,0,0,.4)",
            backgroundImage: "linear-gradient(0deg,rgba(0,0,0,.8) 0,transparent 60%,rgba(0,0,0,.8))"
        },
    },
    backgroundShade: {
        background: "rgba(0,0,0,.4)",
        backgroundImage: "linear-gradient(0deg,rgba(0,0,0,.8) 0,transparent 60%,rgba(0,0,0,.8))",
        position: 'absolute',
        left: '0',
        right: '0',
        bottom: '0',
        top: '0',
    },
    body: {
        display: 'flex',
        flexDirection: 'column',
        padding: "70px 45px",
        justifyContent: 'center',
        textAlign: 'center',
        alignItems: 'center',
        [`& > h1`]: {
            fontSize: "50px",
            maxWidth: '76%',
            paddingBottom: '15px',
            paddingTop: '40px',
        },
        [`& h2`]: {
            fontSize: '1.625rem',
            fontWeight: 'normal',
            padding: '30px 0',
        },
        [`& > div`]: {
            marginTop: '20px'
        }
    },
    btn: {
        boxShadow: 'none !important',
        borderRadius: '2px !important',
        textTransform: 'capitalize',
        [`&:hover`]: {
            background: theme.palette.primary.main
        }
    }
    

}))

const Intro = (props: Props) => {
    // Declaring the intro style.
    const { classes } = IntroStyle();

    return (
    
    <section className={classes.root}>

        <div className={classes.background}>
            <img src={background} alt="Background" />
            <div className={classes.backgroundShade}></div>
        </div>

        <div className={classes.header}>
            {/* The header */}
            <div className={classes.logoCover}>
                <img src={Logo} alt="" className={classes.logo} />
            </div>

            <div>
                <Button variant='contained' className={classes.btn}>
                    Sign In
                </Button>
            </div>
        </div>

        <div className={classes.body}>
            {/* The body consisting of wordings and the email address input */}
            <h1>
                Unlimited movies, TV shows, and more.
            </h1>

            <h2>
                Watch anywhere. Cancel anytime.
            </h2>

            <div>
                <InputField />
            </div>

        </div>

    </section>
  )
}

export default Intro