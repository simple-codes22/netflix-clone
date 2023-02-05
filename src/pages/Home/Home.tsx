// The main home page for the site
import Intro from "./components/Intro";
import DetailField from "./components/DetailField";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import { makeStyles } from "tss-react/mui";
import { IllOne, IllTwo, IllThree } from "../misc/imageDisplay";

const homeStyles = makeStyles()(theme => ({
  root: {
    background: '#000',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    // alignItems: "center",
    color: '#fff',
    [`& > section`]: {
      // borderBottom: '8px solid #222',
    }
  }
}))

const details = [
  {
    topic: "Enjoy on your TV",
    desc: 'Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.',
    illustration: <IllOne />,
    key: 0,
  },
  {
    topic: "Download your shows to watch offline.",
    desc: 'Save your favorites easily and always have something to watch.',
    illustration: <IllTwo />,
    key: 1,
  },
  {
    topic: 'Watch everywhere.',
    desc: 'Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.',
    illustration: '',
    key: 2,
  },
  {
    topic: "Create profiles for kids.",
    desc: 'Send kids on adventures with their favorite characters in a space made just for them—free with your membership.',
    illustration: <IllThree />,
    key: 3,
  },
]

const Home = () => {
  const { classes } = homeStyles();

  return (
    <section className={classes.root}>
        <Intro />
        {details.map(elem => (
          <DetailField detail={elem} key={elem.key} />
        ))}
        <FAQ />
        <Footer />
    </section>
  )
}

export default Home