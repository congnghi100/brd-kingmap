import React, { useState, useEffect, useMemo } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import brdContent from './content/BRD_KingMap_v2.md?raw';
import './index.css';

const cleanMarkdown = (md) => {
  return md.replace(/````carousel/g, '').replace(/````/g, '').replace(/<!-- slide -->/g, '\n---\n');
};

const generateId = (text) => {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)+/g, '');
};

const HeadingRenderer = ({ node, children, ...props }) => {
  const level = node.tagName.charAt(1);
  const text = React.Children.toArray(children).join('');
  const id = generateId(text);
  
  const Tag = `h${level}`;
  return <Tag id={id} {...props}>{children}</Tag>;
};

function App() {
  const [activeId, setActiveId] = useState('');
  const content = useMemo(() => cleanMarkdown(brdContent), []);

  // Extract only H2 headers for the sidebar
  const toc = useMemo(() => {
    const lines = content.split('\n');
    const headers = [];
    lines.forEach(line => {
      const match = line.match(/^(##)\s+(.+)$/);
      if (match) {
        const text = match[2];
        headers.push({
          id: generateId(text),
          text: text,
        });
      }
    });
    return headers;
  }, [content]);

  // Set up IntersectionObserver to highlight active section in sidebar
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: '-20% 0px -80% 0px' }
    );

    const headings = document.querySelectorAll('h2');
    headings.forEach((h) => observer.observe(h));

    return () => observer.disconnect();
  }, [content]);

  return (
    <div className="app-layout">
      {/* Sidebar Navigation */}
      <aside className="sidebar">
        <div className="sidebar-header">
          <h3>NỘI DUNG</h3>
        </div>
        <nav className="toc-nav">
          <ul>
            {toc.map((heading, index) => (
              <li key={index}>
                <a 
                  href={`#${heading.id}`}
                  className={activeId === heading.id ? 'active' : ''}
                >
                  {heading.text}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="main-content fade-in">
        <div className="container markdown-body">
          <ReactMarkdown 
            remarkPlugins={[remarkGfm]} 
            rehypePlugins={[rehypeRaw]}
            components={{
              h1: HeadingRenderer,
              h2: HeadingRenderer,
            }}
          >
            {content}
          </ReactMarkdown>
        </div>
      </main>
    </div>
  );
}

export default App;
