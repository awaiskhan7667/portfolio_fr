import { useState, useEffect } from 'react';

const MyProjectsHeading = () => {
  const [textIndex, setTextIndex] = useState(0);
  const [currentText, setCurrentText] = useState('My');
  const texts = ['Projects', 'Hard Work', 'Journey', 'Passion']; // Changing part of the text

  useEffect(() => {
    const interval = setInterval(() => {
      const currentWord = texts[textIndex];
      const targetText = `My ${currentWord}`;
      const currentLength = currentText.length;

      // If currentText is not yet equal to the full word (including space)
      if (currentLength < targetText.length) {
        setCurrentText((prev) => prev + targetText[currentLength]);
      } else {
        // After the word is fully typed, move to the next word after a delay
        setTimeout(() => {
          setTextIndex((prev) => (prev + 1) % texts.length);
          setCurrentText('My'); // Keep "My" fixed
        }, 1000); // Delay before switching to the next text
      }
    }, 150); // Adjust speed of typing effect

    return () => clearInterval(interval);
  }, [currentText, textIndex]);

  return (
    <div className="mb-12">
      <h1 className={`text-4xl lg:text-5xl font-extrabold inline-block`}>
        {currentText}
      </h1>
      <p className="text-lg text-gray-700 dark:text-gray-300 mt-2">
        A showcase of my work, demonstrating expertise in full-stack development and problem-solving.
      </p>
    </div>
  );
};

export default MyProjectsHeading;
