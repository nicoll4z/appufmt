import React from "react";
import qrImg from "./Assets/qrcode.png";

function QRCode() {
  return (
    <div className="qr-container">
      <div className="qr-code">
        <img src={qrImg} alt="QR Code" className="qr-image" />
      </div>
    </div>
  );
}

export default QRCode;