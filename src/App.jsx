import React, { useState, useEffect, useMemo } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import brdContent from './content/BRD_KingMap_v2.md?raw';
import './index.css';

const cleanMarkdown = (md) => {
  return md.replace(/````carousel/g, '').replace(/````/g, '').replace(/<!-- slide -->/g, '\n---\n');
};

function App() {
  const content = useMemo(() => cleanMarkdown(brdContent), []);

  return (
    <div className="container">
      <div className="markdown-body fade-in">
        <ReactMarkdown 
          remarkPlugins={[remarkGfm]} 
          rehypePlugins={[rehypeRaw]}
        >
          {content}
        </ReactMarkdown>
      </div>
    </div>
  );
}

export default App;
