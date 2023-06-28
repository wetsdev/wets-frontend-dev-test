import * as React from 'react';

export const usePagination = () => {

  const [page, setPage] = React.useState(1);
  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  

  return { page, handleChange };
};
