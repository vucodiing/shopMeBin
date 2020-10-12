import React from "react";
function Hotline({ hotline }) {
  return (
    hotline && (
      <div className="text" id="hotline">
        <span>Hotline: 096.765.2510</span>
      </div>
    )
  );
}
export default Hotline;
