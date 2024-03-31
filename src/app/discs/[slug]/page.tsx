import React from "react";

type Params = {
  params: {
    slug: string;
  };
};

const page = ({ params }: Params) => {
  return <div>{params.slug}</div>;
};

export default page;
