import * as React from 'react';
import { Fragment, useState } from "react";
import Button from "@mui/material/Button";
import { MuiBasicDescription } from "../mui-styled-components";

type Props = {
  children: string;
};

const ReadMoreLess = ({ children }: Props) => {
  const [readMore, setReadMore] = useState<boolean>(false);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setReadMore((prevState) => !prevState);
  };

  return (
    <Fragment>
      <MuiBasicDescription>
        {" "}
        {readMore ? `${children}.` : `${children.substr(0, 100)}......`}
        <Button
          variant="text"
          sx={{
            color: "inherit",
            fontSize: "inherit",
            fontFamily: "Comfortaa-Bold",
            textTransform: "capitalize",
          }}
          onClick={handleClick}
        >
          {readMore ? `Show Less` : `Read More`}
        </Button>
      </MuiBasicDescription>
    </Fragment>
  );
};

export default ReadMoreLess;
