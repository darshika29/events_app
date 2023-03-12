import Eventitem from "./eventItem";
import classes from "./eventList.module.css";


const Eventlist = (props) => {
   
    const { items } = props;
  return (
      <ul className={classes.list}>
          {items.map((event) => {
              return (
                  <Eventitem
                      key={event.id}
                      title={event.title}
                      image={event.image}
                      date={event.date}
                      location={event.location}
                      id={event.id}
                  />
              )
          }
          )
          }
      </ul>
    )
}
export default Eventlist
