import React, { useState } from 'react';
import Scanner from '../../Scanner/Scanners';

const BarcodeScanner = ({ onCodeScanned }) => {
  const [isScannerVisible, setScannerVisible] = useState(false);

  const handleScanButtonClick = () => {
    setScannerVisible(true);
  };

  const handleCodeScanned = (code) => {
    onCodeScanned(code);
    setScannerVisible(false);
  };

  return (
    <div>
      <button onClick={handleScanButtonClick}>Open Scanner</button>
      {isScannerVisible && (
        <Scanner onCodeScanned={handleCodeScanned} />
      )}
    </div>
  );
};

export default BarcodeScanner;
