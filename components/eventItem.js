import Link from 'next/link';
import classes from './eventItem.module.css';
import Button from './ui/button';
const Eventitem = (props) => {
    const { title, image, date, location, id } = props;
    const newDate = new Date(date).toLocaleDateString('en-US', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
    });
    const newLocation = location.replace(',', '\n');
   return (
       <li className={classes.item}>
           <img src={'/'+image} alt={"image"} />
           <div className={classes.content}>
            <div className={classes.summary}> 
               <h2>{title}</h2>
               <div className={classes.date}>
                   <time>{newDate}</time>
               </div>
               <div  className={classes.address}>
                   <address>{newLocation }</address>
               </div>
                   <div className={classes.actions}>
                       <Button link={`/events/${id}` }>{`Explore event` }</Button>
                   
                </div>
             </div>
           </div>
     </li>
   )
 }
export default Eventitem;
 