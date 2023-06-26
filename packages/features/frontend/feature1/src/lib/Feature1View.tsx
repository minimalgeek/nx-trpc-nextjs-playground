'use client'

import { api } from './api-util';

function View() {
  const { data } = api.something.getSomething.useQuery();
  return <div>{data?.message}</div>;
}

export const Feature1View = api.withTRPC(View);
