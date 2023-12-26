import EventsList from "@/components/events/EventsList";
import EventsSearch from "@/components/events/events-search";
import ErrorAlert from "@/components/ui/error-alert";
import { getFilteredEvents } from "@/utils/api-util";
import { useRouter } from "next/router";
import React from "react";
import Head from "next/head";
import Button from "@/components/ui/Button";

const FilteredEvents = () => {
  let router = useRouter();
  let year = router.query?.slug[0];
  let month = router.query?.slug[1];
  let filteredEvents = getFilteredEvents({ year, month });

  // handle filtered Events
  const handleEventsFilters = (year, month) => {
    router.push(`/events/${year}/${month}`);
  };

  return (
    <>
      <Head>
        <title>Filtered Events</title>
        <meta name="author" content="Sallam Rady" />
        <meta name="description" content={`Events in ${month}/${year} `} />
      </Head>
      <EventsSearch onSearch={handleEventsFilters} />
      {filteredEvents?.length == 0 && (
        <>
          <ErrorAlert>
            <p>No events found for the chosen filter!</p>
          </ErrorAlert>
          <div style={{ width: "12rem", margin: "0 auto" }} className="center">
            <Button link="/events">Show All Events</Button>
          </div>
        </>
      )}
      {filteredEvents?.length > 0 && <EventsList items={filteredEvents} />}
    </>
  );
};

export default FilteredEvents;
