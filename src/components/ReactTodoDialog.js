import React from 'react';
import ResponsiveDialog from './common/ResponsiveDialog';
import CounterDemo from "./apps/Counter";
import CardData from './common/CardData';

const card = new CardData(
  'Reactive Todo',
  'Simple reactive Todo built with react.js',
  '2019-03-20',
  'https://images.unsplash.com/photo-1493106819501-66d381c466f1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
  'https://mit-todo-react.netlify.com/',
);

const ReactTodoDialog = () => {
  const appDemo = <CounterDemo counterIncrement={5} counterInit={50}/>;
  return (
    <section id="cd-timeline" className="cd-container">
      <ResponsiveDialog appDemo={appDemo} cardData={card}/>
    </section>
  );
};

export default ReactTodoDialog;
