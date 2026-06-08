import React, { useState, useEffect } from 'react';
import './App.css';

const SOLUTION = "PLACA"; // Palavra secreta fixa para exemplo

function App() {
  const [guesses, setGuesses] = useState(Array(6).fill(null));
  const [currentGuess, setCurrentGuess] = useState('');
  const [isGameOver, setIsGameOver] = useState(false);
  const [turn, setTurn] = useState(0);

  useEffect(() => {
    const handleKeyup = ({ key }) => {
      if (isGameOver) return;

      if (key === 'Enter') {
        if (turn > 5 || currentGuess.length !== 5) return;
        
        const newGuesses = [...guesses];
        newGuesses[turn] = currentGuess;
        setGuesses(newGuesses);
        setTurn(turn + 1);
        
        if (currentGuess === SOLUTION) {
          setIsGameOver(true);
          setTimeout(() => alert('Você venceu!'), 300);
        } else if (turn === 5) {
          setIsGameOver(true);
          setTimeout(() => alert('Fim de jogo! A palavra era: ' + SOLUTION), 300);
        }
        setCurrentGuess('');
      }
      
      if (key === 'Backspace') {
        setCurrentGuess(prev => prev.slice(0, -1));
        return;
      }

      if (/^[A-Za-z]$/.test(key) && currentGuess.length < 5) {
        setCurrentGuess(prev => prev + key.toUpperCase());
      }
    };

    window.addEventListener('keyup', handleKeyup);
    return () => window.removeEventListener('keyup', handleKeyup);
  }, [currentGuess, isGameOver, turn, guesses]);

  const getLetterClass = (letter, index) => {
    if (!letter) return '';
    if (SOLUTION[index] === letter) return 'correct';
    if (SOLUTION.includes(letter)) return 'present';
    return 'absent';
  };

  return (
    <div className="App">
      <h1 style={{textAlign: 'center', fontFamily: 'sans-serif', color: '#333'}}>TERMO</h1>
      <div className="board">
        {guesses.map((guess, i) => {
          const isCurrentTurn = i === turn;
          const word = isCurrentTurn ? currentGuess.padEnd(5, ' ') : (guess || '     ');
          
          return (
            <div key={i} className="row">
              {word.split('').map((letter, j) => (
                <div key={j} className={`cell ${!isCurrentTurn && guess ? getLetterClass(letter, j) : ''}`}>
                  {letter.trim()}
                </div>
              ))}
            </div>
          );
        })}
      </div>
      <p style={{textAlign: 'center', fontFamily: 'sans-serif', color: '#666', marginTop: '20px'}}>
        Digite pelo teclado do computador e aperte Enter.
      </p>
    </div>
  );
}

export default App;