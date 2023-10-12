import { Routes, Route } from "react-router-dom";
import { Component } from "react";
import "./App.css";
import Header from "./components/Header";
import Home from "./pages/Home";
import About from "./pages/about";
import OldWork from "./pages/oldWork";
import Loading from "./pages/loading";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      audioLoaded: false, // Initially, set loading to true
    };
  }

  componentDidMount() {
    this.loadAudio();
  }

  loadAudio = () => {
    // Load your audio here
    const audio = new Audio("/public/audio/background.mp4");
    audio.oncanplaythrough = () => {
      // Audio has loaded, update state to trigger the main page
      this.setState({ audioLoaded: true });
    };
  };

  render() {
    if (!this.state.audioLoaded) {
      return <Loading />;
    }

    return (
      <>
        <div className="flex justify-center mt-20">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/oldWork" element={<OldWork />} />
          </Routes>
        </div>
      </>
    );
  }
}

export default App;
