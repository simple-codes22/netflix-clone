import { makeStyles } from "tss-react/mui";

const detailStyle = makeStyles()(theme => ({
    root: {
        background: "#000",
        color: '#fff',
        display: 'flex',
        padding: "70px 45px",
        borderTop: '8px solid #222',
        justifyContent: 'space-between',
        [`&:nth-child(odd)`]: {
            flexDirection: 'row-reverse',
            [`& > div#left`]: {
                paddingRight: '0 !important',
            },
            [`& > div#right`]: {
                paddingRight: '3rem !important',
            }
        },
        [`& > div`]: {
            // display: 'flex',
                width: '50%',
        }
    },
    detailsMain: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        [`& > h1`]: {
            fontSize: '3.125rem',
            marginBottom: '.5rem',
        },
        [`& > h2`]: {
            fontSize: '1.625rem',
            fontWeight: '400',
            margin: '1rem 0',
            letterSpacing: '.5px',
        },
        paddingRight: '3rem',
    },
    illustration: {
        height: '100%',
        width: '48%',
    },
}))

const DetailField = ({ detail }: any) => {
    console.log(detail);
    const { classes } = detailStyle();
    return (
    <section className={classes.root}>
        <div className={classes.detailsMain} id='left'>
            <h1>{detail.topic}</h1>
            <h2>{detail.desc}</h2>
        </div>

        <div className={classes.illustration} id="right">
            {detail.illustration}
        </div>

    </section>
  )
}

export default DetailField