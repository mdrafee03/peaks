import '@testing-library/jest-dom';
import React from 'react';
global.React = React;

const noop = () => {};
Object.defineProperty(window, 'scrollTo', { value: noop, writable: true });
