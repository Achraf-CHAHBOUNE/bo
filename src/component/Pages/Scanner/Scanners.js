import React, { useRef, useEffect } from 'react';
import Quagga from 'quagga';
import './Scanner.css'


const App = ({onbar}) => {
  const videoRef = useRef('');
  const countRef = useRef(0); // Use a mutable ref to store the updated count
  const currentRef = useRef("");
  const resRef = useRef();
  const seuil = useRef(50);

  useEffect(() => {
    const constraints = { video: { facingMode: 'environment' } };

    const startCamera = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia(constraints);
        videoRef.current.srcObject = stream;

        Quagga.init(
          {
            inputStream: {
              name: 'Live',
              type: 'LiveStream',
              target: videoRef.current,
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
            currentRef.current = data.codeResult.code;
            // resRef.current.value=currentRef.current
          }
          console.log("jjjjjj");
          if (
            currentRef.current === data.codeResult.code &&
            countRef.current < seuil.current
          ) {
            countRef.current += 1; 
            console.log('count:', countRef.current); 
            console.log('Barcode detected:', data.codeResult.code);
            currentRef.current = data.codeResult.code;
            resRef.current.value = currentRef.current
            onbar(currentRef.current)
            // props.baref.current.value = currentRef.current
          } else if (
            currentRef.current === data.codeResult.code &&
            countRef.current >= seuil.current
          ) {
            resRef.current.value=currentRef.current
            console.log("the real code bar is :", currentRef.current);
            // props.baref.current.value = currentRef.current
            onbar(currentRef.current)
            resRef.current.value = currentRef.current
            countRef.current = 0;
            Quagga.stop();
          } 
        });
      } catch (error) {
        console.error('Error accessing camera:', error);
      }
    };

    startCamera();

    return () => {
      if (videoRef.current && videoRef.current.srcObject) {
        const stream = videoRef.current.srcObject;
        const tracks = stream.getTracks();

        tracks.forEach((track) => track.stop());
      }
    };
  }, []);

  return (
    <div className='Scanner_com'>
      <video ref={videoRef} autoPlay playsInline className='scan_cam' />
      
      <input type='text' ref={resRef} className='scan_res'/>
    </div>
  );
};

export default App;