import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import './App.css';

function App() {
    const [markdown, setMarkdown] = useState('# Type your Markdown here');

    const handleMarkdownChange = (event) => {
        const newMarkdown = event.target.value;
        setMarkdown(newMarkdown);
    };

    return ( <
        div className = "app-container" >
        <
        header >
        <
        h1 > Real - time Markdown Editor < /h1> <
        /header> <
        div className = "editor-container" >
        <
        div className = "editor-pane" >
        <
        h2 > Markdown Editor < /h2> <
        textarea value = { markdown }
        onChange = { handleMarkdownChange }
        /> <
        /div> <
        div className = "preview-pane" >
        <
        h2 > Live Preview < /h2> <
        div className = "preview-content" >
        <
        ReactMarkdown > { markdown } < /ReactMarkdown> <
        /div> <
        /div> <
        /div> <
        /div>
    );
}

export default App;