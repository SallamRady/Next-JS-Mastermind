import EventsList from "@/components/events/EventsList";
import EventsSearch from "@/components/events/events-search";
import { getAllEvents } from "@/dummy-data";
import { useRouter } from "next/router";

const EventsPage = () => {
  let allEvents = getAllEvents();
  let router = useRouter();

  // handle filtered Events
  const handleEventsFilters = (year, month) => {
    router.push(`/events/${year}/${month}`);
  };

  return (
    <>
      <EventsSearch onSearch={handleEventsFilters} />
      <EventsList items={allEvents} />
    </>
  );
};

export default EventsPage;
