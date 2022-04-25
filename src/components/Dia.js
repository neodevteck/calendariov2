import dayjs from 'dayjs';
import React from 'react';
const Dia = ({ dia, rowIndex }) => {
  function claseDiaActual() {
    return dia.format('DD-MM-YY') === dayjs().format('DD-MM-YY')
      ? 'bg-blue-600 text-white rounded-full w-7'
      : '';
  }
  return (
    <header className='border border-gray-200 flex flex-col'>
      <div className='flex flex-col items-center'>
        {rowIndex === 0 && (
          <p className='text-sm mt-1'>{dia.format('ddd').toUpperCase()}</p>
        )}
        <p className={`text-sm p-1 my-1 text-center  ${claseDiaActual()}`}>
          {dia.format('DD')}
        </p>
      </div>
    </header>
  );
};

export default Dia;
