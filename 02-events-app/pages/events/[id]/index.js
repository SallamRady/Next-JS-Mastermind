// import packages.
import EventContent from "@/components/event-detail/event-content";
import EventLogistics from "@/components/event-detail/event-logistics";
import EventSummary from "@/components/event-detail/event-summary";
import ErrorAlert from "@/components/ui/error-alert";
import { getEventById } from "@/dummy-data";

function EventDetails(props) {
  const { event } = props;

  if (!event) {
    return (
      <ErrorAlert>
        <p>No event found!</p>
      </ErrorAlert>
    );
  }

  if (!event) {
    return <div className="center info">Loading...</div>;
  }

  return (
    <>
      <EventSummary title={event.title} />
      <EventLogistics
        date={event.date}
        address={event.location}
        image={event.image}
        imageAlt={event.title}
      />
      <EventContent>
        <p>{event.description}</p>
      </EventContent>
    </>
  );
}

export async function getStaticPaths() {
  return {
    paths: [
      { params: { id: "e1" } },
      { params: { id: "e2" } },
      { params: { id: "e3" } },
    ],
    fallback: false,
  };
}

export async function getStaticProps(context) {
  let { id } = context.params;
  let _event = await getEventById(id);
  return {
    props: {
      event: _event,
    },
    revalidate: 300,
  };
}
export default EventDetails;
