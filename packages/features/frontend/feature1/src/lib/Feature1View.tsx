'use client'

import { api } from './api-util';

function Feature1View() {
  const { data } = api.something.getSomething.useQuery();
  return <div>{data?.message}</div>;
}

export { Feature1View };
