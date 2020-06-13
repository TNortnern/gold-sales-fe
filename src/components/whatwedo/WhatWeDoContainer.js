import { checkPropTypes } from "prop-types";

const WhatWeDoContainer = ({ children }) => {
  return (
    <div className="mt-5 text-center" id="what-we-do">
      <div>{children}</div>
    </div>
  );
};

export default WhatWeDoContainer;