import './App.css';
import { useState, useEffect } from 'react';

function App() {

  const quoteList = [
    {
      text: 'You must be the change you wish to see in the world.',
      author: 'Mahatma Gandhi'
    },
    {
      text: 'Spread love everywhere you go. Let no one ever come to you without leaving happier.',
      author: 'Mother Teresa'
    },
    {
      text: 'The only thing we have to fear is fear itself.',
      author: 'Franklin D. Roosevelt'
    },
    {
      text: 'Darkness cannot drive out darkness, only light can do that. Hate cannot drive out hate, only love can do that.',
      author: 'Martin Luther King Jr.'
    },
    {
      text: 'Do one thing every day that scares you.',
      author: 'Eleanor Roosevelt'
    },
    {
      text: 'Well done is better than well said.',
      author: 'Benjamin Franklin'
    },
    {
      text: 'The best and most beautiful things in the world cannot be seen or even touched they must be felt with the heart.',
      author: 'Helen Keller'
    },
    {
      text: 'It is during our darkest moments that we must focus to see the light.',
      author: 'Aristotle'
    },
    {
      text: 'Do not go where the path may lead go instead where there is no path and leave a trail.',
      author: 'Ralph Waldo Emerson'
    },
    {
      text: 'Be yourself everyone else is already taken.',
      author: 'Oscar Wilde'
    },
  ];

  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');
  const [hex, setHex] = useState('');

  useEffect(() => {
    handleRandomQuote();
    generateHex();
  }, []);

  const handleRandomQuote = () => {
    const index = Math.floor(Math.random() * quoteList.length);
    setQuote(quoteList[index].text);
    setAuthor(quoteList[index].author);
  }

  const generateHex = () => {
    const r = Math.floor(Math.random() * 128) + 128;
    const g = Math.floor(Math.random() * 128) + 128;
    const b = Math.floor(Math.random() * 128) + 128;
    setHex(`#${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b.toString(16).padStart(2, '0')}`);
  }

  return (
    <div id='content' style={{ backgroundColor: hex }}>
      <div id='quote-box'>
        <div id='text-box'>
          <div>
            <i className="fa-solid fa-quote-left fa-lg" style={{ color: hex }}></i>
            <span id='text' style={{ color: hex }}>{quote}</span>
          </div>
        </div>
        <div id='author-box'>
          <span id='author' style={{ color: hex }}>- {author}</span>
        </div>
        <div id='button-container'>
          <a
            href="https://twitter.com/intent/tweet"
            id="tweet-quote">
            <i className="fa-brands fa-square-twitter fa-3x" style={{ color: hex }}></i>
          </a>
          <button id='new-quote' onClick={() => {
            handleRandomQuote();
            generateHex();
          }}
            style={{ backgroundColor: hex }}>New Quote</button>
        </div>
      </div >
    </div >
  );
}

export default App;
