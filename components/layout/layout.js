import { Fragment } from "react"
import Mainheader from "./main-header"


const Layout = (props) => {
  return (
      <Fragment>
          <Mainheader/>
          <main>
              {props.children }
          </main>
    </Fragment>
  )
}

export default Layout