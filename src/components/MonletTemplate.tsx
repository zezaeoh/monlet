import React from 'react';
import './MonletTemplate.css';

type MonletTemplateProps = {
  [p: string]: any
}

const MonletTemplate = (
  {
    report,
    footer,
    children
  }: MonletTemplateProps) => {
  return (
    <main className="monthly-letter-template">
      <section>
        {report}
      </section>
        {children.map(v => (<section>{v}</section>))}
      <section>
        {footer}
      </section>
    </main>
  );
};

export default MonletTemplate;