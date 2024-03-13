import React, { useState, useEffect } from 'react';

const Font: React.FC = () => {
  const [fontSize, setFontSize] = useState(100);

  useEffect(() => {
    document.documentElement.style.fontSize = `${fontSize}%`;
  }, [fontSize]);

  const increaseFontSize = () => setFontSize((currentSize) => Math.min(currentSize + 10, 200));
  const decreaseFontSize = () => setFontSize((currentSize) => Math.max(currentSize - 10, 50));

  return (
    <div className=" bg-medium dark:bg-dark">
      <div className="mx-auto max-w-7xl py-3 px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-6">
            {/* Adicionando md:hidden para esconder em telas menores que 768px */}
            
          <button className="hidden md:inline-block text-sm dark:text-white" onClick={decreaseFontSize}>A-</button>
          <button className="hidden md:inline-block text-base font-semibold dark:text-white">{fontSize}%</button>
          <button className="hidden md:inline-block text-lg dark:text-white" onClick={increaseFontSize}>A+</button>


          </div>
        </div>
      </div>
    </div>
  );
};

export default Font;

