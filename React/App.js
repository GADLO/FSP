//在文件顶部添加
import React from 'react'
import { createRoot } from 'react-dom/client'


const App = () => {
    return React.createElement(
        "div",
        {},
        React.createElement("h1", {}, "HOLA! Welcome to web world!")
    )
}

const container = document.getElementById('root');

const root = createRoot(container);
root.render(React.createElement(App));