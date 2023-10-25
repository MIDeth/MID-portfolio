import { Routes, Route } from "react-router-dom";
import { Component } from "react";
import "./App.css";
import Header from "./components/Header";
import Loading from "./components/loading";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/about";
import OldWorks from "./pages/oldWorks";
import Projects from "./pages/Projects";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true, // Initially, set loading to true
    };
  }

  componentDidMount() {
    // Simulate loading dependencies (you can replace this with your actual logic)
    setTimeout(() => {
      // Once the dependencies are loaded, set loading to false
      this.setState({ loading: false });
    }, 3500); // Replace 3000 with the actual loading time

    // You can load your dependencies (e.g., data, API calls) here
  }

  render() {
    return (
      <>
        {this.state.loading ? (
          <Loading />
        ) : (
          <>
            <div className="relative flex justify-center mt-20">
              <Header />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/oldWorks" element={<OldWorks />} />
                <Route path="/projects" element={<Projects />} />
              </Routes>
              <Footer />
            </div>
          </>
        )}
      </>
    );
  }
}

export default App;
