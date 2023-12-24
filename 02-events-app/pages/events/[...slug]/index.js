import EventsList from "@/components/events/EventsList";
import EventsSearch from "@/components/events/events-search";
import ErrorAlert from "@/components/ui/error-alert";
import { getFilteredEvents } from "@/dummy-data";
import { useRouter } from "next/router";
import React from "react";

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
      <EventsSearch onSearch={handleEventsFilters} />
      {filteredEvents?.length == 0 && (
        <ErrorAlert>No Events According Your Filters.</ErrorAlert>
      )}
      {filteredEvents?.length > 0 && <EventsList items={filteredEvents} />}
    </>
  );
};

export default FilteredEvents;
