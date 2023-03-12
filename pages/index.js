import { getFeaturedEvents } from "../../dummy_data";
import Eventlist from "../components/eventList"

const StartingPage = () => {
    const featuredEvents = getFeaturedEvents();
  
    return (
        <div>
            <Eventlist items={featuredEvents} />
        </div>
  )
}
export default StartingPage;
