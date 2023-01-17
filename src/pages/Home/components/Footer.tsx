import { makeStyles } from "tss-react/mui";

const footerStyles = makeStyles()(theme => ({
    root: {
        borderTop: '8px solid #222',
        padding: "70px 45px",
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        ['& > div']: {
            position: 'relative',
            color: "#737373",
            marginTop: "80px",
            minWidth: "190px",
            paddingBottom: "20px",
            width: "90%",
            maxWidth: '1690px',
        }
    },
    linkedList: {
        display: 'grid',
        width: '100%',
        gridTemplateColumns: '1fr 1fr 1fr 1fr',
        gridTemplateRows: '3',
        ['& a']: {
            paddingBottom: '12px',
            [`&:active, &:visited, &:link`]: {
                color: 'inherit',
                fontSize: '15px',
                textDecoration: 'none',
            },
            ['&:hover']: {
                textDecoration: 'underline',
            }
        }
    },
    q: {
        marginBottom: '30px',
        fontSize: '1.05rem',
        letterSpacing: '.5px',
    },
    region: {
        marginTop: '24px',
        fontSize: '1.05rem',
        letterSpacing: '.5px',
    }
}))


const links =  [
    {
        name:'FAQ',
        link: ""
    },
    {
        name: "Help Center",
        link: ""
    },
    {
        name: "Account",
        link: ""
    },
    {
        name: "Media Center",
        link: ""
    },
    {
        name: "Investor Relations",
        link: ""
    },
    {
        name: "Jobs",
        link: ""
    },
    {
        name: "Ways to Watch",
        link: ""
    },
    {
        name: "Terms of Use",
        link: ""
    },
    {
        name: "Privacy",
        link: ""
    },
    {
        name: "Cookie Preferences",
        link: ""
    },
    {
        name: "Corporate Information",
        link: ""
    },
    {
        name: "Contact Us",
        link: ""
    },
    {
        name: "Speed Test",
        link: ""
    },
    {
        name: "Legal Notices",
        link: ""
    },
    {
        name: "Only on Netflix",
        link: ""
    },
]

const Footer = () => {
    const { classes } = footerStyles();
  return (
    <div className={classes.root}>
        <div>
            <div className={classes.q}>
                Questions? Contact us.
            </div>
            
            <div className={classes.linkedList}>
                {links.map(elem => (
                    <a href={elem.link}>{elem.name}</a>
                ))}
            </div>
            
            <div className={classes.region}>
                Netflix Nigeria
            </div>
        </div>

    </div>
  )
}

export default Footer