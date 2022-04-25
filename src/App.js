import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Mes from './components/Mes';
import dayjs from 'dayjs';

import { getMonth } from './util/util';
//console.table(getMonth());
function App() {
  console.log('APP');
  const [mesActual, setMesActual] = useState(getMonth);
  const [indiceMes, setIndiceMes] = useState(dayjs().locale('es').month());

  useEffect(() => {
    setMesActual(getMonth(indiceMes));
  }, [indiceMes]);

  return (
    <React.Fragment>
      <div className='h-screen flex flex-col'>
        <Header indiceMes={indiceMes} setIndiceMes={setIndiceMes} />
        <div className='flex flex-1'>
          <Sidebar />
          <Mes mes={mesActual} />
        </div>
      </div>
    </React.Fragment>
  );
}
export default App;
