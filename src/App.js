import React, { useState } from "react";
import "./Stocks.css";
import FirstCard from "./FirstCard";
import CircularProgressCard from "./CircularProgressCard";
import StatusCompletionCard from "./StatusCompletionCard";
import ImageCard from "./Imagefile";
function App() {
  const [images, setImages] = useState([]);
  const [uploadedImageUrl, setUploadedImageUrl] = useState(null);
  const [selectedClient, setSelectedClient] = useState("");
  const [selectedStore, setSelectedStore] = useState("");

  const handleUploadClick = async (event) => {
    try {
      const file = event.target.files[0];

      if (!file) {
        alert("Please select an image file.");
        return;
      }

      const formData = new FormData();
      formData.append("image", file);

      const response = await fetch(
        "https://coe-webcheck.azurewebsites.net/upload/",
        {
          method: "POST",
          body: formData,
        }
      );

      if (response.ok) {
        const imageUrl = URL.createObjectURL(file);
        setUploadedImageUrl(imageUrl);
        setImages([...images, imageUrl]);
      } else {
        alert("Failed to upload image.");
      }
    } catch (error) {
      console.error("Error uploading image:", error);
      alert("An error occurred while uploading the image.");
    }
  };

  const handleClientChange = (event) => {
    setSelectedClient(event.target.value);
  };

  const handleStoreChange = (event) => {
    setSelectedStore(event.target.value);
  };

  const circularProgressData = [
    { title: "Compliance", color: "#ff0000" },
    { title: "Overstock", color: "#00ff00" },
    { title: "Understock", color: "#0000ff" },
    { title: "Misplaced", color: "#ff00ff" },
    { title: "NoStock", color: "#a39a99" },
    { title: "OutOfShelf", color: "#ffff00" },
  ];

  return (
    <div>
      <div className="blueBackground"></div>
      <div className="greyBackground"></div>
      <div className="container">
        <div className="first-card">
          <FirstCard
            handleUploadClick={handleUploadClick}
            uploadedImageUrl={uploadedImageUrl}
            selectedClient={selectedClient}
            selectedStore={selectedStore}
            handleClientChange={handleClientChange}
            handleStoreChange={handleStoreChange}
          />
        </div>
        <div className="progress-cards">
          {circularProgressData.map((item, index) => (
            <CircularProgressCard
              key={index}
              title={item.title}
              color={item.color}
              selectedClient={selectedClient}
              selectedStore={selectedStore}
            />
          ))}
        </div>
        <div className="status-card">
          <StatusCompletionCard
            selectedClient={selectedClient}
            selectedStore={selectedStore}
          />
          <div className="image-cards">
            {images.map((imageUrl, index) => (
              <div key={index} className="image-preview">
                <ImageCard imageUrl={imageUrl} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
