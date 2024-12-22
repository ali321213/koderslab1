import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Layout from './routes/Layout';

function App() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <Layout />
    </>
  );
}

export default App;