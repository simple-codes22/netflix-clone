// The main home page for the site
import Intro from "./components/Intro";
import DetailField from "./components/DetailField";
import { makeStyles } from "tss-react/mui";
import { IllOne } from "../misc/imageDisplay";

const homeStyles = makeStyles()(theme => ({
  root: {
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
  },
  {
    topic: "Download your shows to watch offline.",
    desc: 'Save your favorites easily and always have something to watch.',
    illustration: '',
  },
  {
    topic: "Create profiles for kids.",
    desc: 'Send kids on adventures with their favorite characters in a space made just for them—free with your membership.',
    illustration: '',
  },
]

const Home = () => {
  const { classes } = homeStyles();

  return (
    <section className={classes.root}>
        <Intro />
        {details.map(elem => (
          <DetailField detail={elem} />
        ))}
    </section>
  )
}

export default Home