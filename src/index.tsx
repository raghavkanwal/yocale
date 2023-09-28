import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app/app';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import UserList from './app/components/userList/UserList';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import TicketList from './app/components/TicketList/TicketList';
import Header from './app/components/common/Header';
import Layout from './app/layout/layout';
import TicketDetail from './app/components/TicketDetail/TicketDetail';

const router = createBrowserRouter([
  {
    path: '',
    element: <Layout />
  },
  {
    path: '/users',
    element: <UserList />
  },
  {
    path: '/tickets',
    element: <TicketList />
  }
]);

const queryClient = new QueryClient();

ReactDOM.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
    <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
