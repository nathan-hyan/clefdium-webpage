import React from 'react';

import Routes from 'components/Routes';
import Language from 'contexts/Language';

function App() {
  return (
    <Language>
      <Routes />
    </Language>
  );
}

export default App;
