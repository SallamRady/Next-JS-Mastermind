// import packages.
import EventContent from "@/components/event-detail/event-content";
import EventLogistics from "@/components/event-detail/event-logistics";
import EventSummary from "@/components/event-detail/event-summary";
import Comments from "@/components/input/comments";
import ErrorAlert from "@/components/ui/error-alert";
import { getEventById } from "@/utils/api-util";
import Head from "next/head";

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
      <Head>
        <title>{event.title}</title>
        <meta name="author" content="Sallam Rady" />
        <meta name="description" content={event.description} />
      </Head>
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
      <Comments eventId={event.id} />
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
