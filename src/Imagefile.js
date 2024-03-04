import React from "react";
import { Card, CardContent } from "@material-ui/core";

const ImageCard = ({ imageUrl }) => {
  return (
    <Card>
      <CardContent>
        <img
          src={imageUrl}
          alt="uploaded"
          style={{ maxWidth: "500px", height: "400px" }}
        />
      </CardContent>
    </Card>
  );
};

export default ImageCard;
