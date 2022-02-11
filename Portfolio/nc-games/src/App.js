import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Review from "./components/Review";
import Reviews from "./components/Reviews";
import Comments from "./components/Comments";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Nav />
        <Routes>
          <Route path="/" element={<Reviews />}></Route>
          <Route path="/reviews/:review_id" element={<Review />}></Route>
          <Route
            path="/reviews/:review_id/comments"
            element={<Comments />}
          ></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
