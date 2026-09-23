import React from 'react';
import { Composition, Folder } from 'remotion';
import { PreviewComposition } from './PreviewComposition';
import { FPS, HEIGHT, SAMPLES, WIDTH, compositionId, sampleToData } from './sampleData';

const categories = [...new Set(SAMPLES.map((s) => s.category))];

export const RemotionRoot: React.FC = () => (
  <>
    {categories.map((category) => (
      <Folder key={category} name={category}>
        {SAMPLES.filter((s) => s.category === category).map((sample) => (
          <Composition
            key={sample.type}
            id={compositionId(sample.type)}
            component={PreviewComposition}
            durationInFrames={sample.durationFrames}
            fps={FPS}
            width={WIDTH}
            height={HEIGHT}
            defaultProps={{ data: sampleToData(sample), backdrop: sample.backdrop }}
          />
        ))}
      </Folder>
    ))}
  </>
);
