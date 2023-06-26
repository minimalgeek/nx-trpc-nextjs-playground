'use client';

import { api } from './api-util';

function View() {
  const { data } = api.greeting.getGreeting.useQuery();
  return <div>{data?.message}</div>;
}

export const Feature2View = api.withTRPC(View);
