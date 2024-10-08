import React, { useEffect } from 'react';
import Notiflix from 'notiflix';

const App = () => {
  // Initialize Notiflix Loading with custom configuration (optional)
  Notiflix.Loading.init({
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    svgSize: '80px',
    messageFontSize: '18px',
    messageColor: '#fff',
  });

  Notiflix.Notify.warning('Memento te hominem esse'); // this a warning notify
  Notiflix.Notify.success(
    'Click Me',
    {
      timeout: 6000,
    },
  );
  
  useEffect(() => {
    // Show the loading spinner when the component mounts
    Notiflix.Loading.hourglass('Loading...');

    // Simulate an asynchronous operation (e.g., fetching data)
    setTimeout(() => {
      // Hide the loading spinner after 3 seconds
      Notiflix.Loading.remove();
    }, 3000);
  }, []);

  return (
    <div>
      <h1>Hello, React with Notiflix!</h1>
      <p>This is a sample component using Notiflix loading animation.</p>
    </div>
  );
};

// intan loading jirto

// Loading.standard();
// Loading.hourglass();
// Loading.circle();
// Loading.arrows();
// Loading.dots();
// Loading.pulse();

export default App;
