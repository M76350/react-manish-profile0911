import { useState, useEffect } from 'react';

interface TypewriterTextProps {
  words: string[];
  speed?: number;
  deleteSpeed?: number;
  delayBetweenWords?: number;
  className?: string;
}

const TypewriterText = ({ 
  words, 
  speed = 150, 
  deleteSpeed = 100, 
  delayBetweenWords = 2000,
  className = ""
}: TypewriterTextProps) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[currentWordIndex];
    
    const timer = setTimeout(() => {
      if (!isDeleting) {
        // Typing
        if (currentText.length < currentWord.length) {
          setCurrentText(currentWord.substring(0, currentText.length + 1));
        } else {
          // Start deleting after delay
          setTimeout(() => setIsDeleting(true), delayBetweenWords);
        }
      } else {
        // Deleting
        if (currentText.length > 0) {
          setCurrentText(currentWord.substring(0, currentText.length - 1));
        } else {
          setIsDeleting(false);
          setCurrentWordIndex((prevIndex) => 
            prevIndex === words.length - 1 ? 0 : prevIndex + 1
          );
        }
      }
    }, isDeleting ? deleteSpeed : speed);

    return () => clearTimeout(timer);
  }, [currentText, currentWordIndex, isDeleting, words, speed, deleteSpeed, delayBetweenWords]);

  return (
    <span className={`${className} typing-animation`}>
      {currentText}
    </span>
  );
};

export default TypewriterText;