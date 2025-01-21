import React from 'react';
//= Components
import Values from './Values';

function Block({ lightMode }) {
  return (
    <section className="block-sec ">
      <div className="container">
        <Values />
      </div>
    </section>
  )
}

export default Block