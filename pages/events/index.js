import { Fragment } from 'react';
import  { useRouter } from 'next/router';
import { getAllEvents } from '../../../dummy_data';
import Eventsearch from '../../components/event-detail/event-search';
import Eventlist from '../../components/eventList';
const Events = () => {
  const allEvents = getAllEvents();
  const data = useRouter();
  const filterHandler = (year, month) => {
    const pathToGo = `/events/${year}/${month}`;
    data.push(pathToGo); 
  }
  return (
    <Fragment>
      <Eventsearch onSearch={ filterHandler } />
      <Eventlist items={allEvents} />
      </Fragment>
  )
}
export default Events;
