import tvFrame from './../../assets/tv.png';
import video_ from './../../assets/video-tv-0819.m4v';
import { makeStyles } from 'tss-react/mui';
import { classnames } from 'tss-react/tools/classnames';

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
            // left: "50%",
            // top: "46%",
            // transform: "translate(-50%,-50%)",
            // width: "100%",

        }
    }
}))


export const IllOne = () => {
    const { classes } = illustrationStyles();

    return (
        <div className={classes.illustrationOne}>
            <img src={tvFrame} />
            <video src={video_} autoPlay muted loop></video>
        </div>
    )
}
