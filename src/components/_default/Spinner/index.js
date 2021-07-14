import React from "react";
import Lottie from "react-lottie";
import blackLoader from "./lottie/black-loader.json";
import whiteLoader from "./lottie/white-loader.json";

export default function Spinner({ color, size }) {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: color === "#fff" || color === "#ffffff" || color === "white" ? whiteLoader : blackLoader,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return <Lottie options={defaultOptions} height={size ? size : 30} width={size ? size : 30} isStopped={false} isPaused={false} />;
}
