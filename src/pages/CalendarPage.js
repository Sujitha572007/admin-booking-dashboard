import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";

const localizer = momentLocalizer(moment);

const events = [
  { title: "Avatar Show", start: new Date(), end: new Date() },
];

export default function CalendarPage() {
  return (
    <div className="p-6 bg-white dark:bg-gray-800 rounded">
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
      />
    </div>
  );
}
