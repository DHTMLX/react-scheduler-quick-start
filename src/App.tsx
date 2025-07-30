import Scheduler from './components/Scheduler/Scheduler.tsx';
import { events } from './demoData';

export default function App() {
  return (
    <div style={{ height: '100vh', width: '100vw' }}>
      <Scheduler events={events} />
    </div>
  );
}