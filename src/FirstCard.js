import React, { useState } from "react";
import {
  Card,
  CardContent,
  Button,
  FormControl,
  Select,
  MenuItem,
} from "@material-ui/core";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import CloudDownloadIcon from "@material-ui/icons/CloudDownload";

const FirstCard = ({
  handleUploadClick,
  uploadedImageUrl,
  selectedClient,
  selectedStore,
  handleClientChange,
  handleStoreChange,
}) => {
  const [selectedBay, setSelectedBay] = useState("");
  const [selectedShelf, setSelectedShelf] = useState("");
  const clientStoreMap = {
    client1: ["Store 1", "Store 2", "Store 3"],
    client2: ["Shop 1", "Shop 2", "Shop 3"],
    client3: ["Outlet 1", "Outlet 2", "Outlet 3"],
  };
  const handleDownloadClick = () => {
    if (uploadedImageUrl) {
      const downloadLink = document.createElement("a");
      downloadLink.href = uploadedImageUrl;
      downloadLink.download = "uploaded_image";
      downloadLink.click();
    } else {
      alert("No image uploaded to download.");
    }
  };

  const handleBayChange = (event) => {
    setSelectedBay(event.target.value);
  };

  const handleShelfChange = (event) => {
    setSelectedShelf(event.target.value);
  };

  return (
    <Card>
      <CardContent>
        <div className="first-card-content">
          <FormControl className="select-field">
            <Select
              value={selectedClient}
              onChange={handleClientChange}
              displayEmpty
              fullWidth
            >
              <MenuItem value="" disabled>
                Select Client
              </MenuItem>
              <MenuItem value="client1">Client 1</MenuItem>
              <MenuItem value="client2">Client 2</MenuItem>
              <MenuItem value="client3">Client 3</MenuItem>
            </Select>
          </FormControl>
          <FormControl className="select-field">
            <Select
              value={selectedStore}
              onChange={handleStoreChange}
              displayEmpty
              fullWidth
              disabled={!selectedClient}
            >
              <MenuItem value="" disabled>
                Select Store
              </MenuItem>
              {clientStoreMap[selectedClient] &&
                clientStoreMap[selectedClient].map((store, index) => (
                  <MenuItem key={index} value={store}>
                    {store}
                  </MenuItem>
                ))}
            </Select>
          </FormControl>
          <FormControl className="select-field">
            <Select
              value={selectedBay}
              onChange={handleBayChange}
              displayEmpty
              fullWidth
            >
              <MenuItem value="" disabled>
                Select Bay
              </MenuItem>
              <MenuItem value="bay1">Bay 1</MenuItem>
              <MenuItem value="bay2">Bay 2</MenuItem>
              <MenuItem value="bay3">Bay 3</MenuItem>
            </Select>
          </FormControl>
          <FormControl className="select-field">
            <Select
              value={selectedShelf}
              onChange={handleShelfChange}
              displayEmpty
              fullWidth
            >
              <MenuItem value="" disabled>
                Select Shelf
              </MenuItem>
              <MenuItem value="Shelf1">Shelf id 1</MenuItem>
              <MenuItem value="Shelf2">Shelf id 2</MenuItem>
              <MenuItem value="Shelf3">Shelf id 3</MenuItem>
            </Select>
          </FormControl>
          <input
            type="file"
            id="fileInput"
            accept="image/*"
            style={{ display: "none" }}
            onChange={handleUploadClick}
          />

          <label htmlFor="fileInput">
            <Button
              className="button"
              variant="contained"
              color="primary"
              component="span"
              startIcon={<CloudUploadIcon />}
            >
              Upload
            </Button>
          </label>
          <Button
            className="button"
            variant="contained"
            color="secondary"
            startIcon={<CloudDownloadIcon />}
            onClick={handleDownloadClick}
            style={{ marginLeft: "8px" }}
          >
            Download
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};
export default FirstCard;
