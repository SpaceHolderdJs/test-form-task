import React, { FC, PropsWithChildren, useContext } from 'react';
import { FormContext } from './FormContext';

export const Button: FC<PropsWithChildren> = ({ children }) => {
  const { onSubmit } = useContext(FormContext);

  return (
    <button
      type="submit"
      onClick={onSubmit}
      className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-300 transition duration-300">
      {children}
    </button>
  );
};
