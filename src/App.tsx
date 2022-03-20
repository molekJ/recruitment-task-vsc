/** Style */
import "./assets/scss/main.scss";
import "bootstrap/dist/css/bootstrap.min.css";
/** Libs */
import { HashRouter as Router, Routes, Route } from "react-router-dom";

/** Layout */
import Header from "./layout/Header";
import Footer from "./layout/Footer";

/** Pages */
import { IndexPosts } from "./pages/posts/IndexPosts";
import { SinglePost } from "./pages/posts/SinglePost";
import { HomePage } from "./pages/HomePage";

const App = () => {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="/posts" element={<IndexPosts />} />
          <Route path="/posts/:id" element={<SinglePost />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
