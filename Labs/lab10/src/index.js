import React from 'react';
import ReactDOM from 'react-dom/client';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import PostListReducer from './slices/PostListSlice';
import App from './App';
import './index.css';

// create redux store object with RTK
const store = configureStore({
  reducer: {
    postList: PostListReducer,
  },
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
);
