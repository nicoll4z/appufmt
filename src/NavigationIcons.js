import React from 'react';

const Icon = ({ children, ...props }) => (
  <svg {...props} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false">
    {children}
  </svg>
);

export const NewsIcon = (props) => (
  <Icon {...props}>
    <path fillRule="evenodd" d="M2 2.5 4 4l2-1.5L8 4l2-1.5L12 4l2-1.5L16 4l2-1.5L20 4l2-1.5V21a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V2.5ZM4 7v3h16V7H4Zm0 5v8h7v-8H4Zm9 0v2h7v-2h-7Zm0 4v1.5h7V16h-7Zm0 3v1h7v-1h-7Z" clipRule="evenodd" />
  </Icon>
);

export const DiningIcon = (props) => (
  <Icon {...props}>
    <path d="M3.2 1a.7.7 0 0 1 .7.7L4.3 7h1L5.6 1.7a.7.7 0 0 1 1.4 0L7.3 7h1l.4-5.3a.7.7 0 0 1 1.4 0l.7 6.3c.2 2.1-1 3.6-2.8 4.2l.8 9.5c.1.8-.5 1.3-1.2 1.3H5.1c-.7 0-1.3-.5-1.2-1.3l.8-9.5C2.9 11.6 1.7 10.1 1.9 8l.6-6.3a.7.7 0 0 1 .7-.7ZM20.7 1c-4 .4-7.2 4.4-7.2 9.1 0 2.3 1.1 3.4 3.2 3.9l-.8 7.7c-.1.8.4 1.3 1.2 1.3h2.4c.7 0 1.2-.5 1.2-1.2V1Z" />
  </Icon>
);

export const MapIcon = (props) => (
  <Icon {...props}>
    <path fillRule="evenodd" d="m1.5 4 7-2.5 7 2.5 7-2.5V20l-7 2.5-7-2.5-7 2.5V4Zm7-.4v14.3l7 2.5V6.1l-7-2.5Z" clipRule="evenodd" />
  </Icon>
);

export const PersonIcon = (props) => (
  <Icon {...props}>
    <circle cx="12" cy="7" r="4.5" />
    <path d="M3 21v-2c0-3.2 4-5.5 9-5.5s9 2.3 9 5.5v2H3Z" />
  </Icon>
);

export const MoreIcon = (props) => (
  <Icon {...props}>
    <circle cx="5" cy="12" r="2.2" />
    <circle cx="12" cy="12" r="2.2" />
    <circle cx="19" cy="12" r="2.2" />
  </Icon>
);
