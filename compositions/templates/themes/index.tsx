'use client';

// animation_type → remotion-scenes ThemeAnimations component.
// Backend props: { texts?: string[] } replaces the on-screen text slot by slot (see each <Name>Texts).
// The themes were laid out for 1280×720, so they are scaled up to the composition size.
import type { ComponentType, ReactNode } from 'react';
import { useVideoConfig } from 'remotion';
import type { TemplateProps } from '../../../types';
import { Theme3DGlass, Theme3DGlassTexts } from './Theme3DGlass';
import { Theme3DGlassThreeJS, Theme3DGlassThreeJSTexts } from './Theme3DGlassThreeJS';
import { ThemeArtDeco, ThemeArtDecoTexts } from './ThemeArtDeco';
import { ThemeBauhaus, ThemeBauhausTexts } from './ThemeBauhaus';
import { ThemeBoho, ThemeBohoTexts } from './ThemeBoho';
import { ThemeBrutalistWeb, ThemeBrutalistWebTexts } from './ThemeBrutalistWeb';
import { ThemeCosmic, ThemeCosmicTexts } from './ThemeCosmic';
import { ThemeCyberpunk, ThemeCyberpunkTexts } from './ThemeCyberpunk';
import { ThemeDarkMode, ThemeDarkModeTexts } from './ThemeDarkMode';
import { ThemeDuotone, ThemeDuotoneTexts } from './ThemeDuotone';
import { ThemeGeometricAbstract, ThemeGeometricAbstractTexts } from './ThemeGeometricAbstract';
import { ThemeGlassmorphism, ThemeGlassmorphismTexts } from './ThemeGlassmorphism';
import { ThemeGradient, ThemeGradientTexts } from './ThemeGradient';
import { ThemeHolographic, ThemeHolographicTexts } from './ThemeHolographic';
import { ThemeIndustrial, ThemeIndustrialTexts } from './ThemeIndustrial';
import { ThemeIsometric, ThemeIsometricTexts } from './ThemeIsometric';
import { ThemeJapanese, ThemeJapaneseTexts } from './ThemeJapanese';
import { ThemeLuxury, ThemeLuxuryTexts } from './ThemeLuxury';
import { ThemeMemphis, ThemeMemphisTexts } from './ThemeMemphis';
import { ThemeMinimalist, ThemeMinimalistTexts } from './ThemeMinimalist';
import { ThemeMonochrome, ThemeMonochromeTexts } from './ThemeMonochrome';
import { ThemeNatural, ThemeNaturalTexts } from './ThemeNatural';
import { ThemeNeobrutalism, ThemeNeobrutalismTexts } from './ThemeNeobrutalism';
import { ThemeNeon, ThemeNeonTexts } from './ThemeNeon';
import { ThemeNeumorphism, ThemeNeumorphismTexts } from './ThemeNeumorphism';
import { ThemeOrganic, ThemeOrganicTexts } from './ThemeOrganic';
import { ThemePaperCut, ThemePaperCutTexts } from './ThemePaperCut';
import { ThemePop, ThemePopTexts } from './ThemePop';
import { ThemeRetro, ThemeRetroTexts } from './ThemeRetro';
import { ThemeSwiss, ThemeSwissTexts } from './ThemeSwiss';
import { ThemeTech, ThemeTechTexts } from './ThemeTech';
import { ThemeWatercolor, ThemeWatercolorTexts } from './ThemeWatercolor';
import { ThemeY2K, ThemeY2KTexts } from './ThemeY2K';

const DESIGN_W = 1280;
const DESIGN_H = 720;

function DesignStage({ children }: { children: ReactNode }) {
  const { width, height } = useVideoConfig();
  const scale = Math.min(width / DESIGN_W, height / DESIGN_H);
  return (
    <div style={{ position: 'absolute', inset: 0, overflow: 'hidden' }}>
      <div
        style={{
          position: 'absolute',
          width: DESIGN_W,
          height: DESIGN_H,
          left: (width - DESIGN_W * scale) / 2,
          top: (height - DESIGN_H * scale) / 2,
          transform: `scale(${scale})`,
          transformOrigin: 'top left',
        }}
      >
        {children}
      </div>
    </div>
  );
}

type ThemeComponent = ComponentType<{ texts?: readonly string[] }>;

function readTexts(props: Record<string, unknown>): string[] | undefined {
  return Array.isArray(props.texts) ? props.texts.map((v) => (typeof v === 'string' ? v : '')) : undefined;
}

/** `fixedSize` themes size themselves from useVideoConfig (three.js canvas) and skip the stage. */
function adapt(Theme: ThemeComponent, fixedSize = false): ComponentType<TemplateProps> {
  const Adapted = ({ data }: TemplateProps) => {
    const node = <Theme texts={readTexts(data.props)} />;
    return fixedSize ? node : <DesignStage>{node}</DesignStage>;
  };
  Adapted.displayName = Theme.displayName ?? Theme.name;
  return Adapted;
}

export const THEME_RENDERERS: Record<string, ComponentType<TemplateProps>> = {
  theme_3d_glass: adapt(Theme3DGlass),
  theme_3d_glass_three_js: adapt(Theme3DGlassThreeJS, true),
  theme_art_deco: adapt(ThemeArtDeco),
  theme_bauhaus: adapt(ThemeBauhaus),
  theme_boho: adapt(ThemeBoho),
  theme_brutalist_web: adapt(ThemeBrutalistWeb),
  theme_cosmic: adapt(ThemeCosmic),
  theme_cyberpunk: adapt(ThemeCyberpunk),
  theme_dark_mode: adapt(ThemeDarkMode),
  theme_duotone: adapt(ThemeDuotone),
  theme_geometric_abstract: adapt(ThemeGeometricAbstract),
  theme_glassmorphism: adapt(ThemeGlassmorphism),
  theme_gradient: adapt(ThemeGradient),
  theme_holographic: adapt(ThemeHolographic),
  theme_industrial: adapt(ThemeIndustrial),
  theme_isometric: adapt(ThemeIsometric),
  theme_japanese: adapt(ThemeJapanese),
  theme_luxury: adapt(ThemeLuxury),
  theme_memphis: adapt(ThemeMemphis),
  theme_minimalist: adapt(ThemeMinimalist),
  theme_monochrome: adapt(ThemeMonochrome),
  theme_natural: adapt(ThemeNatural),
  theme_neobrutalism: adapt(ThemeNeobrutalism),
  theme_neon: adapt(ThemeNeon),
  theme_neumorphism: adapt(ThemeNeumorphism),
  theme_organic: adapt(ThemeOrganic),
  theme_paper_cut: adapt(ThemePaperCut),
  theme_pop: adapt(ThemePop),
  theme_retro: adapt(ThemeRetro),
  theme_swiss: adapt(ThemeSwiss),
  theme_tech: adapt(ThemeTech),
  theme_watercolor: adapt(ThemeWatercolor),
  theme_y2k: adapt(ThemeY2K),
};

/** Default text slots per animation_type, for docs and sample payloads. */
export const THEME_DEFAULT_TEXTS: Record<string, readonly string[]> = {
  theme_3d_glass: Theme3DGlassTexts,
  theme_3d_glass_three_js: Theme3DGlassThreeJSTexts,
  theme_art_deco: ThemeArtDecoTexts,
  theme_bauhaus: ThemeBauhausTexts,
  theme_boho: ThemeBohoTexts,
  theme_brutalist_web: ThemeBrutalistWebTexts,
  theme_cosmic: ThemeCosmicTexts,
  theme_cyberpunk: ThemeCyberpunkTexts,
  theme_dark_mode: ThemeDarkModeTexts,
  theme_duotone: ThemeDuotoneTexts,
  theme_geometric_abstract: ThemeGeometricAbstractTexts,
  theme_glassmorphism: ThemeGlassmorphismTexts,
  theme_gradient: ThemeGradientTexts,
  theme_holographic: ThemeHolographicTexts,
  theme_industrial: ThemeIndustrialTexts,
  theme_isometric: ThemeIsometricTexts,
  theme_japanese: ThemeJapaneseTexts,
  theme_luxury: ThemeLuxuryTexts,
  theme_memphis: ThemeMemphisTexts,
  theme_minimalist: ThemeMinimalistTexts,
  theme_monochrome: ThemeMonochromeTexts,
  theme_natural: ThemeNaturalTexts,
  theme_neobrutalism: ThemeNeobrutalismTexts,
  theme_neon: ThemeNeonTexts,
  theme_neumorphism: ThemeNeumorphismTexts,
  theme_organic: ThemeOrganicTexts,
  theme_paper_cut: ThemePaperCutTexts,
  theme_pop: ThemePopTexts,
  theme_retro: ThemeRetroTexts,
  theme_swiss: ThemeSwissTexts,
  theme_tech: ThemeTechTexts,
  theme_watercolor: ThemeWatercolorTexts,
  theme_y2k: ThemeY2KTexts,
};
