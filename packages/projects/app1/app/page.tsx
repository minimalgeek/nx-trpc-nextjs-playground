import styles from './page.module.css';
import { api } from './api-util';

export default async function Index() {
  const data = await api.greeting.getGreeting.query();
  const data2 = await api.something.getSomething.query();
  return (
    <div className={styles['page']}>
      <h1>{data.message}</h1>
      <h1>{data2.message}</h1>
    </div>
  );
}
