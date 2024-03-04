import React from "react";
import {
  Card,
  CardContent,
  Typography,
  CircularProgress,
} from "@material-ui/core";
import progressValues from "./stockData.json";
const CircularProgressCard = ({
  title,
  color,
  selectedClient,
  selectedStore,
}) => {
  const progress =
    progressValues[title]?.[selectedClient]?.[selectedStore] ?? 0;

  return (
    <Card className="progress-card">
      <CardContent>
        <Typography variant="h6" gutterBottom>
          {title}
        </Typography>
        <div
          className="circular-progress"
          style={{ width: "120px", height: "120px", position: "relative" }}
        >
          <CircularProgress
            variant="determinate"
            value={progress}
            style={{
              color: color,
              width: "80px",
              height: "80px",
              position: "absolute",
              top: "20px",
              left: "20px",
            }}
          />
          <Typography
            variant="h6"
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              color: progress === 0 ? "#cccccc" : "#000000",
            }}
          >
            {progress}%
          </Typography>
        </div>
      </CardContent>
    </Card>
  );
};
export default CircularProgressCard;
