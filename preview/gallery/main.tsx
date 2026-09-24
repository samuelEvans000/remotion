import { useEffect, useMemo, useRef, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { Player } from '@remotion/player';
import { PreviewComposition } from '../PreviewComposition';
import { FPS, HEIGHT, SAMPLES, WIDTH, sampleToData, type Sample } from '../sampleData';

const NEW_TAB = 'newly added';
const CATEGORIES = ['all', NEW_TAB, ...new Set(SAMPLES.map((s) => s.category))];

function inCategory(sample: Sample, category: string): boolean {
  if (category === 'all') return true;
  if (category === NEW_TAB) return Boolean(sample.isNew);
  return sample.category === category;
}

function inputPropsOf(sample: Sample) {
  return { data: sampleToData(sample), backdrop: sample.backdrop };
}

/** Mounts the Player only while the tile is on screen, so hundreds of players don't run at once. */
function Tile({ sample, onOpen }: { sample: Sample; onOpen: () => void }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const inputProps = useMemo(() => inputPropsOf(sample), [sample]);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([entry]) => setVisible(entry.isIntersecting), { rootMargin: '200px' });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div className="card" onClick={onOpen}>
      <div className="thumb" ref={ref}>
        {visible ? (
          <Player
            component={PreviewComposition}
            inputProps={inputProps}
            durationInFrames={sample.durationFrames}
            fps={FPS}
            compositionWidth={WIDTH}
            compositionHeight={HEIGHT}
            style={{ width: '100%', height: '100%' }}
            autoPlay
            loop
            acknowledgeRemotionLicense
          />
        ) : null}
      </div>
      <div className="meta">
        <code>{sample.type}</code>
        <span>{sample.category}</span>
      </div>
    </div>
  );
}

function Modal({ sample, onClose }: { sample: Sample; onClose: () => void }) {
  const inputProps = useMemo(() => inputPropsOf(sample), [sample]);
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose]);
  return (
    <div className="modal" onClick={onClose}>
      <div className="modal-inner" onClick={(e) => e.stopPropagation()}>
        <div className="modal-head">
          <code>{sample.type}</code>
          <button className="chip" onClick={onClose}>Close (Esc)</button>
        </div>
        <Player
          component={PreviewComposition}
          inputProps={inputProps}
          durationInFrames={sample.durationFrames}
          fps={FPS}
          compositionWidth={WIDTH}
          compositionHeight={HEIGHT}
          style={{ width: '100%', aspectRatio: '16 / 9' }}
          controls
          autoPlay
          loop
          acknowledgeRemotionLicense
        />
        <pre>{JSON.stringify(sampleToData(sample), null, 2)}</pre>
      </div>
    </div>
  );
}

function App() {
  const [category, setCategory] = useState('all');
  const [query, setQuery] = useState('');
  const [open, setOpen] = useState<Sample | null>(null);
  const shown = SAMPLES.filter(
    (s) => inCategory(s, category) && s.type.includes(query.trim().toLowerCase().replace(/[\s-]+/g, '_')),
  );
  return (
    <>
      <header>
        <h1>Animation Gallery · {shown.length}/{SAMPLES.length}</h1>
        <input placeholder="Search animation_type…" value={query} onChange={(e) => setQuery(e.target.value)} />
        {CATEGORIES.map((c) => (
          <button key={c} className={`chip${c === category ? ' on' : ''}`} onClick={() => setCategory(c)}>
            {c}
          </button>
        ))}
      </header>
      <main>
        {shown.map((s) => (
          <Tile key={s.type} sample={s} onOpen={() => setOpen(s)} />
        ))}
      </main>
      {open ? <Modal sample={open} onClose={() => setOpen(null)} /> : null}
    </>
  );
}

createRoot(document.getElementById('root')!).render(<App />);
