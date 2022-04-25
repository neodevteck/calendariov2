import React from 'react';
import Dia from './Dia';

const Mes = ({ mes }) => {
  //console.log(mes);
  return (
    <div className='flex-1 grid grid-cols-7 grid-rows-5'>
      {mes.map((row, i) => (
        <React.Fragment key={i}>
          {row.map((dia, j) => (
            <Dia dia={dia} key={j} rowIndex={i} />
          ))}
        </React.Fragment>
      ))}
    </div>
  );
};

export default Mes;
