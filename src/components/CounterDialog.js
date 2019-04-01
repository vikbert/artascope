import React from 'react';
import ResponsiveDialog from './common/ResponsiveDialog';
import CounterDemo from "./apps/Counter";
import CardData from './common/CardData';

const card = new CardData(
  'Reactive Counter',
  'Simple reactive counter with react.js',
  '2019-03-28',
  'https://images.unsplash.com/photo-1549815587-9757d02af740?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
  undefined,
);

const CounterDialog = () => {
  const appDemo = <CounterDemo counterIncrement={5} counterInit={50}/>;
  return (
    <section id="cd-timeline" className="cd-container">
      <ResponsiveDialog appDemo={appDemo} cardData={card}/>
    </section>
  );
};

export default CounterDialog;
