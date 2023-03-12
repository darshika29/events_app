import Link from 'next/link';
import classes from './main-header.module.css';

const Mainheader = () => {
  return (
      <header className={classes.header}>
          <div className={classes.logo}>
              <Link href={`/`}>Darshika's event site</Link>
              
          </div>
          <nav className={classes.navigation}>
              <ul>
                  <li>
                      <Link href={`/events`}>All Events</Link>
                  </li>
              </ul>
              
          </nav>
     </header>
  )
}

export default Mainheader