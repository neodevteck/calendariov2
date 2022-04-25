import React from 'react';

const header = ({ indiceMes, setIndiceMes }) => {
  function MesAnterior() {
    setIndiceMes(indiceMes - 1);
  }

  function MesSiguente() {
    setIndiceMes(indiceMes + 1);
  }

  return (
    <React.Fragment>
      <header className='px-4 py-2 flex items-center'>
        <h1 className='mr-10 text-xl text-gray-500 fond-bold'>Calendario</h1>
        <button className='border rounded py-2 px-4 mr-5'>Hoy</button>
        <button>
          <span
            onClick={MesAnterior}
            className='cursor-pointer text-gray-600 mx-2'
          >
            <i className='fa fa-angle-left'></i>
          </span>
        </button>
        <button>
          <span
            onClick={MesSiguente}
            className='cursor-pointer text-gray-600 mx-2'
          >
            <i className='fa fa-angle-right'></i>
          </span>
        </button>
        <h2 className='ml-4 text-xl text-gray-500 font-bold'>
          {/* {dayjs(new Date(dayjs().year(), monthIndex)).format('MMMM YYYY')} */}
        </h2>
      </header>
    </React.Fragment>
  );
};

export default header;
