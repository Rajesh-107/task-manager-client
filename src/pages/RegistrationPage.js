import React, { Suspense } from "react";
import LazyLoader from "../components/MasterLayout/LazyLoader";
import Registration from "../components/Registration/Registration";

const RegistrationPage = () => {
  return (
    <div>
      <Suspense fallback={<LazyLoader />}>
        <Registration></Registration>
      </Suspense>
    </div>
  );
};

export default RegistrationPage;
