import React from 'react';
import cn from 'classnames';
import { useLoaderStyles } from './styles';

const Loader = () => {
  const classes = useLoaderStyles();
  return (
    <div className={classes.loader}>
      <div className={cn(classes.circle, classes.c_1)} />
      <div className={cn(classes.circle, classes.c_2)} />
      <div className={cn(classes.circle, classes.c_3)} />
    </div>
  );
};

export default Loader;
