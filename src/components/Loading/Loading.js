import React from 'react'
import { useState, CSSProperties } from "react";
import ClipLoader from "react-spinners/ClipLoader";

const override: CSSProperties = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
};
const Loading = () => {
  
    let [loading, setLoading] = useState(true);
    let [color, setColor] = useState("#ffffff");
  
    return (
      <div className="sweet-loading" style={{marginTop:'200px'} }>
        <ClipLoader
          color={color}
          loading={loading}
          cssOverride={override}
          size={100}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      </div>
    );
  
}

export default Loading