import React from 'react';
import ResponsiveDialog from './ResponsiveDialog'
import AppCard from "./Card";
import CounterDemo from "./apps/Counter";


const card = {
  title: 'Reactive Counter by clicks',
  description: 'Simple reactive counter with react.js',
  date: '2019-03-28',
};

const CounterDialog = () => {
  const appCard = <AppCard title={card.title} description={card.description} date={card.date}/>;
  const appDemo = <CounterDemo counterIncrement={5} counterInit={50}/>;

  return (
    <section id="cd-timeline" className="cd-container">
      <ResponsiveDialog appCard={appCard} appDemo={appDemo} appTitle={card.title} />
    </section>
  );
};

export default CounterDialog;
