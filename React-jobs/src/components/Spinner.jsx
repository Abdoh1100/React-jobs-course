import { useState } from "react";
import { ClipLoader } from "react-spinners";

// Removed the 'CSSProperties' type annotation
const override = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
};

const Spinner=({isLoading})=> {
  // Removed types from useState hooks (though they were inferred anyway)
  const [loading, setLoading] = useState(true);
  const [color, setColor] = useState("#ffffff");

  return (
    <div className="sweet-loading">
      <button onClick={() => setLoading(!loading)}>Toggle Loader</button>
      <input
        value={color}
        onChange={(input) => setColor(input.target.value)}
        placeholder="Color of the loader"
      />

      <ClipLoader
        color={color}
        loading={isLoading}
        cssOverride={override}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
}

export default Spinner;