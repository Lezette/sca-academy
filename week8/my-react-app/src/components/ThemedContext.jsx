import { useContext } from 'react';

import Theme from './Theme'

function ThemedComponent () {

  const theme = useContext(Theme);



  return <div style={{ background: theme === 'dark' ? '#333' : '#FFF', color: theme === 'dark' ? '#fff' : '#333' }}>Current theme: {theme}</div>;

}

export default ThemedComponent