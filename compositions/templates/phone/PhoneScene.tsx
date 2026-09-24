'use client';

// Adapted from github.com/duongcokhanh/remotion-video src/Scene.tsx (Remotion three starter).
import { getVideoMetadata, type VideoMetadata } from '@remotion/media-utils';
import { ThreeCanvas } from '@remotion/three';
import { useEffect, useRef, useState } from 'react';
import { AbsoluteFill, Html5Video, staticFile, useDelayRender, useVideoConfig } from 'remotion';
import type { TemplateProps } from '../../../types';
import { isRenderableSrc, readColor, readNumberProp } from '../../../props';
import { Phone } from './Phone';
import { useTexture } from './use-texture';

const DEFAULT_VIDEO = 'phone-demo.mp4';

function readVideoSrc(props: Record<string, unknown>): string {
  for (const key of ['video', 'videoUrl', 'video_url', 'src']) {
    const v = props[key];
    if (typeof v === 'string' && isRenderableSrc(v)) return v.trim();
  }
  return staticFile(DEFAULT_VIDEO);
}

/**
 * 3D phone that spins in and plays a video on its screen.
 * Props: `video` (URL, must allow CORS), `phoneColor`/`color`, `baseScale`, `bgColor`.
 */
export function PhoneScene({ data }: TemplateProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const { width, height } = useVideoConfig();
  const [videoData, setVideoData] = useState<VideoMetadata | null>(null);
  const { delayRender, continueRender } = useDelayRender();

  const videoSrc = readVideoSrc(data.props);
  const phoneColor = readColor({ color: data.props.phoneColor ?? data.props.color }, '#6e98bf');
  const baseScale = readNumberProp(data.props, ['baseScale', 'scale']) ?? 1;
  const bgColor = typeof data.props.bgColor === 'string' ? data.props.bgColor : '#ffffff';

  useEffect(() => {
    const handle = delayRender('Loading phone video metadata');
    getVideoMetadata(videoSrc)
      .then(setVideoData)
      .catch((err) => console.error(err))
      .finally(() => continueRender(handle));
  }, [videoSrc, delayRender, continueRender]);

  const texture = useTexture(videoSrc, videoRef);

  return (
    <AbsoluteFill style={{ backgroundColor: bgColor }}>
      <Html5Video ref={videoRef} src={videoSrc} muted style={{ position: 'absolute', opacity: 0 }} />
      {videoData ? (
        <ThreeCanvas linear width={width} height={height}>
          <ambientLight intensity={1.5} color={0xffffff} />
          <pointLight position={[10, 10, 0]} />
          <Phone
            phoneColor={phoneColor}
            baseScale={baseScale}
            videoTexture={texture}
            aspectRatio={videoData.aspectRatio}
          />
        </ThreeCanvas>
      ) : null}
    </AbsoluteFill>
  );
}
