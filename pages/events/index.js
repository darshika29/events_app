import { Fragment } from 'react';
import { getAllEvents } from '../../../dummy_data';
import Eventlist from '../../components/eventList';
const Events = () => {
  const allEvents = getAllEvents();
  return (
    <Fragment>
      

      <Eventlist items={allEvents} />
      </Fragment>
  )
}
export default Events;
