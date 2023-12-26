import EventsList from "@/components/events/EventsList";
import EventsSearch from "@/components/events/events-search";
import { getAllEvents } from "@/utils/api-util";
import { useRouter } from "next/router";
import Head from "next/head";

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
    <Head>
      <title>All Events.</title>
      <meta name="author" content="Sallam Rady"/>
      <meta name="description" content="Explore and discover great events which you can envolve."/>
    </Head>
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
