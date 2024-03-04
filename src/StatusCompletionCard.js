import React from "react";
import {
  Card,
  CardContent,
  Typography,
  Grid,
  Divider,
  LinearProgress,
} from "@material-ui/core";

const StatusCompletionCard = ({ selectedClient, selectedStore }) => {
  const completionValues = {
    client1: {
      "Store 1": { shelves1: 30, shelves2: 50, shelves3: 70 },
      "Store 2": { shelves1: 40, shelves2: 60, shelves3: 80 },
      "Store 3": { shelves1: 50, shelves2: 70, shelves3: 90 },
    },
    client2: {
      "Shop 1": { shelves1: 60, shelves2: 70, shelves3: 80 },
      "Shop 2": { shelves1: 70, shelves2: 80, shelves3: 90 },
      "Shop 3": { shelves1: 80, shelves2: 90, shelves3: 100 },
    },
    client3: {
      "Outlet 1": { shelves1: 40, shelves2: 50, shelves3: 60 },
      "Outlet 2": { shelves1: 50, shelves2: 60, shelves3: 70 },
      "Outlet 3": { shelves1: 60, shelves2: 70, shelves3: 80 },
    },
  };

  const completion = completionValues[selectedClient]?.[selectedStore] ?? {
    shelves1: 0,
    shelves2: 0,
    shelves3: 0,
  };

  return (
    <Card className="status-completion-card">
      <CardContent>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Typography variant="body1" gutterBottom>
              Shelf:
            </Typography>
            <Divider className="divider" />
            <Typography variant="body1" gutterBottom>
              Shelves 1:
            </Typography>
            <Typography variant="body1" gutterBottom>
              Shelves 2:
            </Typography>
            <Typography variant="body1" gutterBottom>
              Shelves 3:
            </Typography>
          </Grid>

          <Grid item xs={6}>
            <Typography variant="body1" gutterBottom>
              Completion:
            </Typography>
            <Divider className="divider" />
            <div style={{ display: "flex", flexDirection: "column" }}>
              <div style={{ display: "flex", alignItems: "center" }}>
                <Typography
                  variant="body1"
                  gutterBottom
                  style={{ marginRight: "10px" }}
                >
                  {completion.shelves1}%
                </Typography>
                <LinearProgressWithLabel value={completion.shelves1} />
              </div>
              <div style={{ display: "flex", alignItems: "center" }}>
                <Typography
                  variant="body1"
                  gutterBottom
                  style={{ marginRight: "10px" }}
                >
                  {completion.shelves2}%
                </Typography>
                <LinearProgressWithLabel value={completion.shelves2} />
              </div>
              <div style={{ display: "flex", alignItems: "center" }}>
                <Typography
                  variant="body1"
                  gutterBottom
                  style={{ marginRight: "10px" }}
                >
                  {completion.shelves3}%
                </Typography>
                <LinearProgressWithLabel value={completion.shelves3} />
              </div>
            </div>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

const LinearProgressWithLabel = ({ value }) => {
  return (
    <div style={{ width: "100%" }}>
      <LinearProgress
        variant="determinate"
        value={value}
        style={{ width: "100%" }}
      />
    </div>
  );
};

export default StatusCompletionCard;
