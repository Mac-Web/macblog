import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./pages/Home";
import Apps from "./pages/Apps";
import Updates from "./pages/Updates";
import Posts from "./pages/Posts";
import Post from "./pages/Post";
import Roadmap from "./pages/Roadmap";
import AppPage from "./pages/AppPage";
import AppUpdates from "./pages/AppUpdates";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import ScrollTop from "./components/ScrollTop";

function App() {
  return (
    <>
      <BrowserRouter basename="macblog">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/apps" element={<Apps />} />
          <Route path="/updates" element={<Updates />} />
          <Route path="/posts" element={<Posts />} />
          <Route path="/roadmap" element={<Roadmap />} />
          <Route path="/apps/:app" element={<AppPage />} />
          <Route path="/apps/:app/updates" element={<AppUpdates />} />
          <Route path="/post/:id" element={<Post />} />
        </Routes>
        <Footer />
        <ScrollTop />
      </BrowserRouter>
    </>
  );
}

export default App;
