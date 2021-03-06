import { useEffect, useRef, useState } from "react";
import Confetti from "react-confetti";

export const ConfettiSection = () => {
  const [height, setHeight] = useState(null);
  const [width, setWidth] = useState("");
  const confetiRef = useRef(null);

  useEffect(() => {
    setHeight(confetiRef.current.clientHeight);
    setWidth(confetiRef.current.clientWidth);
  }, []);

  return (
    <>
      <div className="relative z-50 p-0 w-screen h-screen" ref={confetiRef}>
        <Confetti numberOfPieces={150} width={width} height={height} />
      </div>
    </>
  );
};

export const ConfettiSmall = () => {
  const [height, setHeight] = useState(null);
  const [width, setWidth] = useState("");
  const confetiRef = useRef(null);

  useEffect(() => {
    setHeight(confetiRef.current.clientHeight);
    setWidth(confetiRef.current.clientWidth);
  }, []);

  return (
    <>
      <div className="relative z-50 p-0 w-full h-40" ref={confetiRef}>
        <Confetti numberOfPieces={150} width={width} height={height} />
      </div>
    </>
  );
};
