import { useRouter } from "next/router";
import { getFilteredEvents } from "../../../dummy_data";
import Eventlist from "../../components/eventList";

const FilterEventPage = () => {
  
  const dataRec = useRouter();
  const valuedata = dataRec.query.slugs;
  // console.log(valuedata);


  const myyear = valuedata[0]; //transforms string to number
  const mymonth = valuedata[1];
  const year = +myyear;
  const month = +mymonth;


  const list = getFilteredEvents({ year: year, month: month });
  // console.log(list)
  

  if (!valuedata) {
    return<p className="center">Loading the event...</p>
  }


  if (isNaN(year) || isNaN(month)|| year<2021 ||year>2023|| month<1||month>12) {
    return<p className="center">No such event...</p>
  }


  if (!list || list.length === 0) {
    return<p className="center">No such event...</p>
  }


  return (
    <Eventlist items={ list} />
  )
 }
export default FilterEventPage;
