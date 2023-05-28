import React from "react";

const IndividualData = ({ individualData, index }) => {
  return (
    <tr>
      <th>{index}</th>
      <th>{individualData.name}</th>
      <th>{individualData.age}</th>
      <th>{individualData.designation}</th>
      <th>{individualData.salary}</th>
    </tr>
  );
};

export default IndividualData;
