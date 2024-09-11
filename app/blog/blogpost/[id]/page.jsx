import React from "react";

const blogpage = ({ params }) => {
  console.log("Blog number is ", params);
  return <div>this is blog {params.id}</div>;
};

export default blogpage;
