import React from "react";
import Loader from './Loader'

const Ecommerce = ({ user }) => {

  return (
    <div>
      {
        user?.isAdmin ?
          <h1 className='text-3xl text-center	justify-items-center block mt-5 fs-1' > GolfPipe Dashboard Work</h1 >
          :
          <Loader />
      }
    </div >
  );
};

export default Ecommerce;
