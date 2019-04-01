import React from 'react';
import ResponsiveDialog from './common/ResponsiveDialog';
import GithubCardsDemo from "./apps/Githubcards";
import CardData from "./common/CardData";

const card = new CardData (
  'GitHub Cards',
  'Search and add github user to the list',
  '2019-03-29',
  'https://images.unsplash.com/photo-1503739171234-327ce271626f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
  undefined
);

const CounterDialog = () => {
  const appDemo = <GithubCardsDemo/>;

  return (
    <section id="cd-timeline" className="cd-container">
      <ResponsiveDialog appDemo={appDemo} cardData={card}/>
    </section>
  );
};

export default CounterDialog;
