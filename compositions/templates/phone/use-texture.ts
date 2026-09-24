// Ported from github.com/duongcokhanh/remotion-video (Remotion three starter, © 2021 Jonny Burger).
/* eslint-disable react-hooks/rules-of-hooks */
import { useOffthreadVideoTexture, useVideoTexture } from "@remotion/three";
import { getRemotionEnvironment } from "remotion";

export const useTexture = (
  src: string,
  videoRef: React.RefObject<HTMLVideoElement | null>,
) => {
  if (getRemotionEnvironment().isRendering) {
    return useOffthreadVideoTexture({
      src,
    });
  }

  return useVideoTexture(videoRef);
};
