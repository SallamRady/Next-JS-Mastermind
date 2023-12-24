// import our packages.
import EventItem from "./EventItem";
import classes from "./EventsList.module.css";

const EventsList = ({ items }) => {
  // * define event-item
  const eventItem = items?.map((item) => {
    return (
      <EventItem
        key={item.id}
        id={item.id}
        title={item.title}
        location={item.location}
        date={item.date}
        image={item.image}
      />
    );
  });
  return <ul className={classes.list}>{eventItem}</ul>;
};


export default EventsList;