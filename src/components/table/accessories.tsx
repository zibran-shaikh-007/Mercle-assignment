import React, { useState } from "react";
import Tooltip from "../tooltip";
import { AccessoriesProps } from "../../types/index";

const Accessories: React.FC<AccessoriesProps> = ({ user, idx }) => {
  const [status, setStatus] = useState<Boolean>(false);
  const [index, setIndex] = useState<any>([]);

  let { accessories } = user;

  const truncateData = accessories
    ?.slice(0, 2)
    ?.map((accessory: any, idx: number) => {
      return (
        <Tooltip key={idx} content={accessory}>
          {accessory.title}
        </Tooltip>
      );
    });

  
  const truncateAccessories = (
    <>
      {truncateData}
      {/* when to show all accessries data */}
      <span onClick={() => handleAllAccessories(idx)}>+1</span>
    </>
  );

  
  const allAccessories = (
    <>
      {accessories?.map((accessory: any, idx: number) => {
        return (
          <Tooltip key={idx} content={accessory}>
            {accessory.title}
          </Tooltip>
        );
      })}
    </>
  );

  const handleAllAccessories = (idx: number) => {
    let indexes = [...index, idx];
    setIndex(indexes);
    setStatus(true);
  };

  let data = null;
  if (accessories.length > 2 && status !== true) {
    data = truncateAccessories;
  } else {
    if (index.includes(idx)) {
      data = allAccessories;
    } else {
      data = truncateAccessories;
    }
  }

  return <>{data}</>;
};

export default Accessories;
