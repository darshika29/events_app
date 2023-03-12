import { getEventById } from "../../../dummy_data";
import { useRouter } from "next/router";
import { Fragment } from "react";
import EventSummary from "../../components/event-detail/event-summary";
import EventLogistics from "../../components/event-detail/event-logistics";
import EventContent from "../../components/event-detail/event-content";

const EventDetailsPage = () => {
  const navInfo = useRouter();
  const id = navInfo.query.id;
  const result = getEventById(id);

  if (!result) {
    return <p>No event found!</p>;
    
  }

  return (
    <Fragment>
      <EventSummary title={result.title } />
      <EventLogistics date={result.date} address={result.location} image={result.image} imageAlt={result.title } />
      <EventContent><p>{result.description }</p></EventContent>
      
   </Fragment>
  )
}
export default EventDetailsPage;
