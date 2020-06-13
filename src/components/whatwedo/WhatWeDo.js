import WhatWeDoContainer from "./WhatWeDoContainer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShieldAlt } from "@fortawesome/free-solid-svg-icons";

const WhatWeDo = () => {
  return (
    <WhatWeDoContainer>
      <h1 className="font-bold text-4xl md:text-5xl max-w-xl text-gray-900 leading-tight border-orange-500 text-center mx-auto">
        What we do
      </h1>
      <hr className="w-32 text-center mx-auto h-1 bg-orange-500 rounded-full mt-2" />
      <div className="mt-20">
        <div className="flex justify-center space-x-32">
          <div className="border-solid border-orange-500 border-2 p-8 rounded-full">
            <FontAwesomeIcon icon={faShieldAlt} size="7x" />
          </div>
          <div className="border-solid border-orange-500 border-2 p-8 rounded-full">
            <FontAwesomeIcon icon={faShieldAlt} size="7x" />
          </div>
          <div className="w-1/4">
            <FontAwesomeIcon
              className="border-solid border-orange-500 border-2 p-8 rounded-full"
              icon={faShieldAlt}
              size="9x"
            />
            <h1 className="text-3xl">Services</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
              quisquam, assumenda quod vel rem numquam. Voluptatum recusandae
              necessitatibus ut iure!
            </p>
          </div>
        </div>
      </div>
    </WhatWeDoContainer>
  );
};

export default WhatWeDo;
