import EventsList from "@/components/events/EventsList";
import EventsSearch from "@/components/events/events-search";
import { getAllEvents } from "@/dummy-data";
import { useRouter } from "next/router";

const EventsPage = (props) => {
  let { allEvents } = props;
  let router = useRouter();

  // handle filtered Events
  const handleEventsFilters = (year, month) => {
    router.push(`/events/${year}/${month}`);
  };

  if(!allEvents){
    return <div className="center info">Loading...</div>
  }
  
  return (
    <>
      <EventsSearch onSearch={handleEventsFilters} />
      <EventsList items={allEvents} />
    </>
  );
};

export async function getStaticProps() {
  return {
    props: {
      allEvents: getAllEvents(),
    },
    revalidate: 100,
  };
}

export default EventsPage;
