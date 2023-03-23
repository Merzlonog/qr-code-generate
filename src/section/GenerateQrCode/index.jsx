import React, { useState } from "react";

import QRCode from "qrcode";
import LiveQrCode from "../../components/LiveQrCode/index";
import BasicInput from "../../components/BasicInput/index";

import style from "./style.module.css";

const GenerateQrCodeSection = () => {
  const [qrText, setQrText] = useState("");
  const [qrCode, setQrCode] = useState("");

  const generateQrCode = () => {
    QRCode.toDataURL(
      qrText,
      {
        width: 900,
        height: 3,
      },
      (err, url) => {
        if (err) console.log(err);
        setQrCode(url);
      }
    );
  };

  const handleQrCode = (e) => {
    setQrText(e.target.value);
    generateQrCode();
  };

  return (
    <>
      <LiveQrCode value={qrText} />
      <BasicInput
        label="QR-code текст"
        type="text"
        value={qrText}
        onChange={handleQrCode}
        style={{ marginTop: 20 }}
      />
      <a className={style.button} href={qrCode} download={`${qrText}.png`}>
        Download
      </a>
    </>
  );
};

export default GenerateQrCodeSection;
