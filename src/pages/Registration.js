import React, { Suspense } from "react";
import LazyLoader from "../components/MasterLayout/LazyLoader";

const Registration = () => {
  return (
    <div>
      <Suspense fallback={<LazyLoader />}>
        
      </Suspense>
    </div>
  );
};

export default Registration;
