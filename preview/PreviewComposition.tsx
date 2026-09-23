import React from 'react';
import { AbsoluteFill, Img } from 'remotion';
import { DataDrivenInfographic } from '../compositions/DataDrivenInfographic';
import type { InfographicRemotionInputProps } from '../types';
import { BACKDROP_IMAGE, type Backdrop } from './sampleData';

export type PreviewProps = InfographicRemotionInputProps & { backdrop: Backdrop };

/** Puts a stand-in "video" behind the overlay so transparent templates are visible. */
export const PreviewComposition: React.FC<PreviewProps> = ({ backdrop, ...input }) => (
  <AbsoluteFill style={{ fontFamily: 'Inter, "Segoe UI", system-ui, sans-serif' }}>
    {backdrop === 'dark' ? (
      <AbsoluteFill style={{ background: 'radial-gradient(ellipse at 30% 20%, #1e293b 0%, #0b0f17 55%, #05070b 100%)' }} />
    ) : null}
    {backdrop === 'photo' ? (
      <AbsoluteFill>
        <Img src={BACKDROP_IMAGE} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
      </AbsoluteFill>
    ) : null}
    <DataDrivenInfographic {...input} />
  </AbsoluteFill>
);
