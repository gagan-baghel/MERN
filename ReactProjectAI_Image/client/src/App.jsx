import React from "react";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import { Home, CreatePost, AskGPT } from "./Pages";
import Header from "./Components/Header";

const App = () => {
  return (
    <>
      <Router>
        <Header></Header>
        <main className="sm:p-8 px-4 py-8 w-full  bg-[#f9fafe] min-h-[calc(100vh-64px)] dark:bg-slate-800 dark:text-slate-400">
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/create-post" element={<CreatePost />}></Route>
            <Route path="/ask-GPT" element={<AskGPT />}></Route>
          </Routes>
        </main>
      </Router>
    </>
  );
};

// it will have routing for the application
export default App;
