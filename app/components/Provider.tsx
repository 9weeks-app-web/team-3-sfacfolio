'use client';
import React from 'react';
import { QueryClientProvider, QueryClient } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { Provider as ReduxProvider } from 'react-redux';
import { store } from '@/redux/store';

const queryClient = new QueryClient();

function Provider({ children }: { children: React.ReactNode }) {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <ReduxProvider store={store}>{children}</ReduxProvider>
        <ReactQueryDevtools />
      </QueryClientProvider>
    </>
  );
}

export default Provider;
