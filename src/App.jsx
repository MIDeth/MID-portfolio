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
      loading: true, // Initially, set loading to true
    };
  }

  componentDidMount() {
    // Simulate loading dependencies (you can replace this with your actual logic)
    setTimeout(() => {
      // Once the dependencies are loaded, set loading to false
      this.setState({ loading: false });
    }, 3000); // Replace 3000 with the actual loading time

    // You can load your dependencies (e.g., data, API calls) here
  }

  render() {
    return (
      <>
        {this.state.loading ? (
          <Loading />
        ) : (
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
        )}
      </>
    );
  }
}

export default App;
