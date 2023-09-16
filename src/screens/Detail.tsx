import { useLocation } from "react-router-dom";

function DetailScreen() {
  const location: Location | any = useLocation();
  const story = location?.state?.story;

  return (
    <div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <h1 style={{ marginRight: "10px" }}>Title: </h1>
        <h1>{story?.title}</h1>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <h1 style={{ marginRight: "10px" }}>Author: </h1>
        <h1>{story?.author}</h1>
      </div>
    </div>
  );
}

export default DetailScreen;
