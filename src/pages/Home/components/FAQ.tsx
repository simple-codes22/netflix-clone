import { makeStyles } from 'tss-react/mui';
import { Accordion, AccordionDetails, AccordionSummary } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import InputField from './InputField';

const mainFAQs = [
    {
        q: 'What is Netflix?',
        a: `Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.\n
            You can watch as much as you want, whenever you want without a single commercial – all for one low monthly price. There's always something new to discover and new TV shows and movies are added every week!`
    },
    {
        q: 'How much does Netflix cost?',
        a: 'Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₦1,200 to ₦4,400 a month. No extra costs, no contracts.'
    },
    {
        q: 'Where can I watch?',
        a: `Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles. \n You can also download your favorite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere.`
    },
    {
        q: 'How do I cancel?',
        a: `Netflix is flexible. There are no pesky contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.`
    },
    {
        q: 'What can I watch on Netflix?',
        a: 'Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.'
    },
    {
        q: 'Is Netflix good for kids?',
        a: `The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and movies in their own space. \n Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see.`
    },
]

const faqStyles = makeStyles()(theme => ({
    root: {
        borderTop: "8px solid #222",
        padding: "70px 45px",
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        ['& > div']: {
            maxWidth: '1690px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
        },
        ['& h1']: {
            fontSize: "3.125rem",
            lineHeight: "1.1",
            fontWeight: '500',
            marginBottom: "35px",
        }
    },
    accord: {
        borderRadius: '0 !important',
        color: '#fff !important',
        background: '#303030',
        margin: "10px auto !important",
        maxWidth: "70% !important",
        fontSize: '30px',
        // padding: ".8em 2.2em .8em 1.2em",
        padding: '13px 20px',
        fontWeight: '400',
        [`& svg`]: {
            fill: '#fff',
            transition: 'all .3s ease !important',
            height: '45px !important',
            width: '45px !important'
        },
        ['&:focus svg']: {
            transform: 'rotate(45deg) !important',
        },
        ['& .MuiAccordionSummary-expandIconWrapper']: {
            transition: 'all .3s ease !important',
        },
        ['& .css-yw020d-MuiAccordionSummary-expandIconWrapper.Mui-expanded']: {
            transform: 'rotate(135deg) !important',
        }
    }
}))

const FAQ = () => {
    const { classes } = faqStyles();
  return (
    <section className={classes.root}>
        <div>
            <h1>
                Frequently Asked Questions
            </h1>
            <div>
                {mainFAQs.map(elem => (
                    <Accordion className={classes.accord} key={mainFAQs.indexOf(elem)+1}>
                        <AccordionSummary
                            expandIcon={<AddIcon />}
                        >
                            {elem.q}
                        </AccordionSummary>
                        <AccordionDetails>
                            {elem.a}
                        </AccordionDetails>
                    </Accordion>
                ))}
            </div>
        </div>
        <InputField />
    </section>
  )
}

export default FAQ