
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from 'react'
import { createRoot } from 'react-dom/client'
import Header from './src/ Header';
import Intro from './src/Intro';
import Contact from './src/Contact';
import Footer from './src/Footer';
import Projects from './src/Projects';
import CarCheck from './src/pages/CarCheck'
import Blogs from "./src/pages/Blog/Blogs";
import CreatePost from "./src/pages/Blog/CreatePost";
import PostList from "./src/pages/Blog/PostList";
import PostDetail from "./src/pages/Blog/PostDetail";
import CarDetailPage from "./src/pages/CarDetail";

const App = () => {
    return (

        <BrowserRouter>

            <Routes>
                <Route path="/car" element={ <CarDetailPage /> } />
                <Route path="/blogs" element={ <Blogs /> } />
                <Route path="/create_post" element={ <CreatePost /> } />
                <Route path="/posts" element={ <PostList /> } />
                <Route path="/posts/:slug" element={ <PostDetail /> } />



                <Route path="/" element={ <div>
                    <Header />
                    <Intro />
                    <Projects />
                    <Contact />
                    <Footer />
                </div> } />
            </Routes>


        </BrowserRouter>

    );
};


const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);