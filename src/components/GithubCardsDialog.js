import React from 'react';
import ResponsiveDialog from './templates/ResponsiveDialog';
import GithubCardsDemo from "./apps/Githubcards";

const card = {
  title: 'GitHub Cards',
  description: 'Search and add github user to the list',
  date: '2019-03-29',
  image: 'https://images.unsplash.com/photo-1503739171234-327ce271626f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
};

const CounterDialog = () => {
  const appDemo = <GithubCardsDemo/>;

  return (
    <section id="cd-timeline" className="cd-container">
      <ResponsiveDialog appDemo={appDemo} card={card}/>
    </section>
  );
};

export default CounterDialog;
