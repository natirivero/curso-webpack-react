import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './components/App';
import './styles/global.scss';

const container = document.getElementById('app');
const root = createRoot(container);
root.render(<App />);
