import { makeStyles } from 'tss-react/mui';

// Imports for the first illustration
import tvFrame from './../../assets/tv.png';
import video_ from './../../assets/video-tv-0819.m4v';

// Imports for the second illustration
import boxShot from './../../assets/boxshot.png';
import downloadIcon from './../../assets/Download-icon.gif';
import phone from './../../assets/mobile-0819.jpg';

// Imports for the third icon
import kids from './../../assets/Kids.png';


const illustrationStyles = makeStyles()(theme => ({
    illustrationOne: {
        // background: `url(${tvFrame})`,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
        [`& > img`]: {
            position: 'relative',
            zIndex: '5',
            height: 'auto',
            width: '100%',
        },
        [`& > video`]: {
            position: "absolute",
            height: "55%",
            top: '20.5%',
            left: '12.58%',
        }
    },
    illustrationTwo: {
        // position: 'relative',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        position: 'relative',
        ['& > img']: {
            maxWidth: '100%',
        },
        [`& > div`]: {
            position: 'absolute',
            boxShadow: '0 0 32px 0 #000',
            bottom: '8%',
            display: 'flex',
            alignItems: 'center',
            background: '#000',
            borderRadius: '20px',
            border: '2px solid #292929',
            minWidth: '60%',
            padding: '.5em .75em',
            ['& > div']: {
                // paddingRight: "50px",
                flexGrow: '1',
                flexShrink: '1',
                ['& h3']: {
                    fontSize: '1em',
                },
                [`& p`]: {
                    color: "#0071eb",
                    fontWeight: '400',
                },
            },
            [`& > img#st-cover`]: {
                height: '4.5em',
                marginRight: '1em',
            },
            [`& > img#d-img`]: {
                height: '3.75em',
            }
        }
    },
    illustrationThree: {
        // maxHeight: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        ['& img']: {
            maxWidth: '100%',
        }
    }
}))


export const IllOne = () => {
    const { classes } = illustrationStyles();

    return (
        <div className={classes.illustrationOne}>
            <img src={tvFrame} alt="Tele" />
            <video src={video_} autoPlay muted loop></video>
        </div>
    )
}

export const IllTwo = () => {
    const { classes } = illustrationStyles();

    return (
        <div className={classes.illustrationTwo}>
            <img src={phone} alt="Mobile phone" />
            <div>
                <img src={boxShot} id='st-cover' alt="Box shot" />
                <div>
                    <h3>Stranger Things</h3>
                    <p>Downloading...</p>
                </div>
                <img src={downloadIcon} id='d-img' alt="Download" />
            </div>
        </div>
    )
}

export const IllThree = () => {
    const { classes }= illustrationStyles();

    return (
        <div className={classes.illustrationThree}>
            <img src={kids} alt="Kids" />
        </div>
    )
}
