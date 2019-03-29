import React from 'react';
import ResponsiveDialog from './ResponsiveDialog'
import AppCard from "./MaterialCard";
import GithubCardsDemo from "./apps/Githubcards";

const card = {
  title: 'GitHub Cards',
  description: 'Search and add github user to the list',
  date: '2019-03-29',
};

const CounterDialog = () => {
  const appCard = <AppCard title={card.title} description={card.description} date={card.date}/>;
  const appDemo = <GithubCardsDemo/>;

  return (
    <section id="cd-timeline" className="cd-container">
      <ResponsiveDialog appCard={appCard} appDemo={appDemo} appTitle={card.title} />
    </section>
  );
};

export default CounterDialog;
