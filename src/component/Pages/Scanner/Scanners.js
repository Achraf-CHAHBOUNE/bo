import React, { useRef, useEffect, useState } from 'react';
import Webcam from 'react-webcam';
import Quagga from 'quagga';

const App = () => {
  const webcamRef = useRef(null);
  const countRef = useRef(0); // Use a mutable ref to store the updated count
  const currentRef = useRef("");
  const seuil= useRef(50)

  useEffect(() => {
    console.log(seuil.current);
    Quagga.init(
      {
        inputStream: {
          name: 'Live',
          type: 'LiveStream',
          target: webcamRef.current.video,
          constraints: {
            facingMode: 'environment', // Use the back camera (facingMode: 'user' for front camera)
          },
        },
        decoder: {
          readers: ['code_128_reader'],
        },
      },
      (err) => {
        if (err) {
          console.error('Error initializing Quagga:', err);
          return;
        }
        Quagga.start();
      }
    );

    Quagga.onDetected((data) => {
      if (currentRef.current === "") {
        currentRef.current = data.codeResult.code
      }
      console.log("jjjjjj")
      if (currentRef.current===data.codeResult.code && countRef.current<seuil.current ) {
      countRef.current += 1; // Update the count using the mutable ref
      console.log('count:', countRef.current); // Access the updated count from the mutable ref
      console.log('Barcode detected:',data.codeResult.code);
        currentRef.current = data.codeResult.code;  
      } else if (currentRef.current === data.codeResult.code && countRef.current >= seuil.current) {
        console.log("the real code bar is :", currentRef.current);
        Quagga.stop();

      } else {
        countRef.current = 0;
        Quagga.start();
      }
    
    
    
    });

    return () => {
      Quagga.stop();
    };
  },[])

  return (
    <div>
      <Webcam
        ref={webcamRef}
        audio={false}
        mirrored={true}

      />
    </div>
  );
};

export default App;