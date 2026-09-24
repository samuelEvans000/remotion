import React from 'react';
import { Composition, Folder } from 'remotion';
import { PreviewComposition } from './PreviewComposition';
import { FPS, HEIGHT, SAMPLES, WIDTH, compositionId, sampleToData, type Sample } from './sampleData';

function CategoryFolders({ samples }: { samples: Sample[] }) {
  const categories = [...new Set(samples.map((s) => s.category))];
  return (
    <>
      {categories.map((category) => (
        <Folder key={category} name={category}>
          {samples.filter((s) => s.category === category).map((sample) => (
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
}

export const RemotionRoot: React.FC = () => (
  <>
    <Folder name="newly-added">
      <CategoryFolders samples={SAMPLES.filter((s) => s.isNew)} />
    </Folder>
    <CategoryFolders samples={SAMPLES.filter((s) => !s.isNew)} />
  </>
);
