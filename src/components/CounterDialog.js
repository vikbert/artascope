import React from 'react';
import ResponsiveDialog from './templates/ResponsiveDialog'
import CounterDemo from "./apps/Counter";

const card = {
  title: 'Reactive Counter',
  description: 'Simple reactive counter with react.js',
  date: '2019-03-28',
  image: 'https://images.unsplash.com/photo-1549815587-9757d02af740?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
};

const CounterDialog = () => {
  const appDemo = <CounterDemo counterIncrement={5} counterInit={50}/>;

  return (
    <section id="cd-timeline" className="cd-container">
      <ResponsiveDialog appDemo={appDemo} card={card} />
    </section>
  );
};

export default CounterDialog;
