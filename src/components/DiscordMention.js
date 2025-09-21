import React from 'react';

// This component takes the text you want to highlight as its children
export default function Mention({children}) {
  return (
    <span className="discord-mention">
      {children}
    </span>
  );
}