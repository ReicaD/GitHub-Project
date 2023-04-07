import spinner from "./assets/Spinner-2.gif";
import React, { Fragment } from 'react'

const Spinner = () => <Fragment>
      <img src={spinner} alt="Loading..." style={{ width: '200px', margin: 'auto', display: 'block' }} />
    </Fragment>
export default Spinner;

