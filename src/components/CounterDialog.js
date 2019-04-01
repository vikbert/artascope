import React from 'react';
import ResponsiveDialog from './ResponsiveDialog'
import MaterialCard from "./MaterialCard";
import CounterDemo from "./apps/Counter";

const card = {
  title: 'Reactive Counter',
  description: 'Simple reactive counter with react.js',
  date: '2019-03-28',
  image: 'https://images.unsplash.com/photo-1444201716572-c60ec66d0494?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3300&q=80',
};

const CounterDialog = () => {
  const appCard = <MaterialCard title={card.title} description={card.description} date={card.date}/>;
  const appDemo = <CounterDemo counterIncrement={5} counterInit={50}/>;

  return (
    <section id="cd-timeline" className="cd-container">
      <ResponsiveDialog appCard={appCard} appDemo={appDemo} appTitle={card.title} card={card} />
    </section>
  );
};

export default CounterDialog;
