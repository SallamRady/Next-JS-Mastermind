// Home page
import  EventsList  from "@/components/events/EventsList";
import { getFeaturedEvents } from "@/dummy-data";

export default function Home() {
  let featuresEvents = getFeaturedEvents();
  
  return (
    <>
      <EventsList items={featuresEvents} />
    </>
  );
}
