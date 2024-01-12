import React from "react";
import { FaStar } from "react-icons/fa6";

const StarComponent= () => {

    return (
        <div className="p-4 pt-8 stars-section-clients">
        <div className="px-2">
          <FaStar color="#73aed9" fontSize="1.5rem" />
        </div>
        <div className="px-2">
          <FaStar color="#73aed9" fontSize="1.5rem" />
        </div>
        <div className="px-2">
          <FaStar color="#73aed9" fontSize="1.5rem" />
        </div>
        <div className="px-2">
          <FaStar color="#73aed9" fontSize="1.5rem" />
        </div>
        <div className="px-2">
          <FaStar color="#73aed9" fontSize="1.5rem" />
        </div>
      </div>

    )
}

export default StarComponent