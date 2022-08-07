import React from 'react';
import { Grommet, grommet } from 'grommet';
import Header from '../components/Header';
import Content from '../components/Content';

const App = () => {
  return (
    <Grommet full theme={grommet} themeMode='light'>
      <Header />
      <Content />
    </Grommet>
  );
};

export default App;