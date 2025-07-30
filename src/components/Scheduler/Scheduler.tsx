import { useRef } from 'react';
import ReactScheduler, { ReactSchedulerRef, Event, SchedulerTemplates, SchedulerConfig } from '@dhx/trial-react-scheduler';
import "@dhx/trial-react-scheduler/dist/react-scheduler.css";
import './styles.css'; 

export interface ReactSchedulerProps {
  events: Event[];
  activeView?: string;
  activeDate?: Date;
}

export default function GanttChart({ events, activeView = "week", activeDate = new Date("2025-08-15T00:00:00Z") }: ReactSchedulerProps) {
  const schedulerRef = useRef<ReactSchedulerRef>(null);

  const templates: SchedulerTemplates = {
    event_class: (start: Date, end: Date, event: Event) => {
      return event.classname || '';
    }
  };

  const config: SchedulerConfig = {
    first_hour: 6,
    last_hour: 22,
    hour_size_px: 60,
  };

  return (
    <ReactScheduler
      ref={schedulerRef}
      events={events}
      view={activeView}
      date={activeDate}
      templates={templates}
      config={config}
      data={{
        save: (entity: string, action: string, data: any, id: string | number) => {
          console.log(`${entity} - ${action} - ${id}`, data);;
        }
      }}
    />
  );
}