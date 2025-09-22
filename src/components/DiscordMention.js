import React from 'react';
import Link from '@docusaurus/Link';

// This component takes the text you want to highlight as its children
export default function Mention({children, link}) {
  if (link) {
    return (
      <Link className="discord-mention linked" to={link}>
        {children}
      </Link>
    );
  }

  return (
    <span className="discord-mention">
      {children}
    </span>
  );
}