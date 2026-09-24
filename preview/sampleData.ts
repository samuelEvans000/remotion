/**
 * Dummy backend payloads for previewing every animation_type.
 * Each entry becomes one composition in Remotion Studio and one tile in the gallery.
 */
import type { InfographicData } from '../types';
import { EXTERNAL_SAMPLES } from './externalSamples';

export const FPS = 30;
export const WIDTH = 1920;
export const HEIGHT = 1080;

/** What sits behind the animation: a photo (simulated video), a dark gradient, or nothing. */
export type Backdrop = 'photo' | 'dark' | 'none';

export type Sample = {
  type: string;
  category: string;
  durationFrames: number;
  backdrop: Backdrop;
  props: Record<string, unknown>;
  /** Ported from the three external repos; shown under "newly added". */
  isNew?: boolean;
};

const img = (seed: string, w = 1280, h = 720) => `https://picsum.photos/seed/${seed}/${w}/${h}`;
const IMAGES = ['mountain', 'city', 'ocean', 'forest', 'desert', 'studio'].map((s) => img(s));

const CHART = [
  { label: 'Jan', value: 42 },
  { label: 'Feb', value: 58 },
  { label: 'Mar', value: 51 },
  { label: 'Apr', value: 73 },
  { label: 'May', value: 88 },
  { label: 'Jun', value: 96 },
];
const SHARE = [
  { label: 'YouTube', value: 45 },
  { label: 'TikTok', value: 25 },
  { label: 'Instagram', value: 18 },
  { label: 'Other', value: 12 },
];
const ITEMS = ['Research your audience', 'Write a strong hook', 'Edit for pacing', 'Publish & promote'];

const HEADLINE = { title: 'Grow Your Channel Faster', subtitle: 'Five proven tactics from top creators' };
const TEXT = { displayText: 'Make Every Second Count' };
const LOGO = { displayText: 'STORYBIT', title: 'StoryBit', icon_name: 'zap' };
const PHOTO = { image: img('hero', 1920, 1080), title: 'Into the Wild', subtitle: 'A journey across the Alps' };

type Row = [type: string, props: Record<string, unknown>, opts?: { d?: number; bg?: Backdrop }];

const CATEGORIES: Record<string, Row[]> = {
  charts: [
    ['bar_chart', { ...HEADLINE, title: 'Monthly Views (K)', data: CHART }],
    ['chart_animation', { title: 'Revenue Growth', subtitle: 'H1 2026', data: CHART }],
    ['line_chart', { title: 'Subscribers Over Time', data: CHART }],
    ['pie_chart', { title: 'Traffic Sources', data: SHARE }],
    ['donut_chart', { title: 'Audience Split', data: SHARE }],
    ['area_chart', { title: 'Watch Time (hrs)', data: CHART }],
    ['progress_bars', { title: 'Skill Levels', data: [
      { label: 'Editing', value: 92 }, { label: 'Scripting', value: 78 },
      { label: 'Thumbnails', value: 64 }, { label: 'SEO', value: 51 },
    ] }],
    ['stat_counter', { value: 1250000, suffix: '+', caption: 'Monthly active viewers' }],
    ['comparison_chart', { title: 'Before vs After', data: [
      { label: 'Before', value: 34 }, { label: 'After', value: 87 },
    ] }],
    ['circular_progress', { title: 'Goal Completion', value: 76 }],
    ['bar_chart_anim', { title: 'Top Categories', subtitle: 'by watch time', data: CHART }],
    ['line_chart_anim', { title: 'Engagement Rate', data: CHART }],
    ['kpi_counter', { title: 'Q2 Results', metrics: [
      { label: 'Revenue', value: 482, prefix: '$', suffix: 'K' },
      { label: 'Users', value: 12400 },
      { label: 'Retention', value: 87, suffix: '%' },
      { label: 'NPS', value: 72 },
    ] }],
    ['racing_chart', { title: 'Most Popular Languages', frames: 30, data: [
      { label: 'Python', values: [30, 45, 60, 80, 95] },
      { label: 'JavaScript', values: [50, 58, 64, 70, 76] },
      { label: 'Rust', values: [5, 15, 30, 48, 70] },
      { label: 'Go', values: [20, 28, 35, 44, 52] },
      { label: 'Java', values: [55, 52, 50, 47, 45] },
    ] }, { d: 180 }],
    ['pixel_candlestick_ohlc', { title: 'BTC / USD', candles: [
      { o: 60, h: 66, l: 58, c: 64 }, { o: 64, h: 70, l: 62, c: 68 }, { o: 68, h: 69, l: 60, c: 61 },
      { o: 61, h: 65, l: 57, c: 63 }, { o: 63, h: 74, l: 62, c: 72 }, { o: 72, h: 78, l: 70, c: 76 },
      { o: 76, h: 77, l: 66, c: 68 }, { o: 68, h: 75, l: 67, c: 74 }, { o: 74, h: 84, l: 73, c: 82 },
    ] }],
    ['pourover_drip_fill_gauge', { title: 'Daily Coffee Goal', value: 80 }],
  ],
  text: [
    ['animated_text', TEXT],
    ['bounce_text', TEXT],
    ['bubble_pop_text', TEXT],
    ['floating_text_chip', { displayText: 'New Episode Out Now' }],
    ['floating_bubble_text', { displayText: 'Did you know?' }],
    ['glitch_text', { displayText: 'SYSTEM OVERRIDE' }],
    ['popping_scale_text', TEXT],
    ['popping_text', { displayText: 'BOOM!' }],
    ['pulsing_text', { displayText: 'LIVE NOW' }],
    ['slide_text', { ...TEXT, direction: 'left' }],
    ['typewriter_subtitle', { displayText: 'Every great story starts with a single frame.' }],
    ['typewriter', { messageText: 'Hello, world. This is StoryBit.' }],
    ['bounce_in_headline', { headline: 'BIG ANNOUNCEMENT' }],
    ['brush_stroke_reveal', { title: 'Art of Storytelling', description: 'Chapter one' }],
    ['four_tone_mono_titler', { title: 'MONOCHROME' }],
    ['gradient_text_sweep', { title: 'Future of Video' }],
    ['kinetic_word_stack', { words: ['Create', 'Edit', 'Publish', 'Grow'] }],
    ['neon_sign', { title: 'OPEN 24/7', subtitle: 'Late night edits' }],
    ['scramble_text', { text: 'ACCESS GRANTED', label: 'Decrypting…' }],
    ['text_mask_reveal', { title: 'REVEAL' }],
    ['wave_text', { title: 'Riding the Wave' }],
    ['pixel_typewriter_quote', { quote: 'Stay hungry, stay foolish.', attribution: 'Steve Jobs' }],
    ['text_highlight', { displayText: 'Consistency beats intensity every single time.', highlight: 'Consistency' }],
  ],
  content: [
    ['animated_list', { items: ITEMS, icon_name: ['search', 'pencil', 'scissors', 'rocket'] }],
    ['card_flip', { title: 'Myth', subtitle: 'Fact: Shorts boost long-form views' }],
    ['countdown_timer', { from: 5 }, { d: 180 }],
    ['notification_pop', { title: 'New subscriber!', subtitle: '@creator just joined the community' }],
    ['particle_explosion', { displayText: '1M SUBS!' }],
    ['progress_steps', { items: ['Plan', 'Shoot', 'Edit', 'Publish'] }],
    ['rotating_carousel', { items: ['Tutorials', 'Vlogs', 'Reviews', 'Podcasts', 'Shorts'] }],
    ['sound_wave', {}],
    ['community_chat', { workspaceName: 'Creators Hub', channelName: 'launch', messages: [
      { author: 'Maya', text: 'The new trailer just dropped 🔥' },
      { author: 'Leo', text: 'Editing on this is insane' },
      { author: 'Ava', text: 'How long did the render take?' },
      { author: 'Sam', text: 'About 4 minutes with Remotion' },
    ] }],
    ['thinking_bubble', { title: 'What should I film next?' }],
    ['character_jumping', { label: 'Level Up!' }],
    ['wave_hello', { title: 'Hi there!' }],
    ['social_reel', { headline: 'Behind the Scenes', infoLines: ['12.4K likes', '892 comments', 'Shared 3.1K times'] }],
    ['card_flip_transition', { displayText: ['Before', 'After'] }],
    ['flip_page_transition', { displayText: ['Chapter 1', 'Chapter 2'] }],
    ['eye_reveal', { title: 'Look Closer', subtitle: 'Details matter' }],
    ['fireworks_burst', { title: 'Happy New Year!', subtitle: '2027' }],
    ['shatter_reveal', { title: 'BREAKTHROUGH' }],
    ['pencil_draw', { title: 'Sketch to Screen' }],
  ],
  backgrounds: [
    ['bokeh_circles', {}],
    ['geometric_patterns', {}],
    ['gradient_shift', {}],
    ['grid_pulse', {}],
    ['liquid_wave', {}],
    ['matrix_rain', {}],
    ['noise_grain', {}],
    ['pixel_transition', {}],
    ['starfield', {}],
    ['particle_snow', {}],
    ['loop_grid_wave', {}],
    ['pixel_waterfall_cycle', { displayText: 'PIXEL' }],
  ],
  cinematic: [
    ['camera_shake', { ...PHOTO, title: 'IMPACT' }],
    ['film_burn', {}, { bg: 'photo' }],
    ['ken_burns', PHOTO],
    ['ken_burns_pan_zoom', PHOTO],
    ['letterbox_reveal', { displayText: 'A StoryBit Original' }, { bg: 'photo' }],
    ['parallax_pan', { ...PHOTO, displayText: 'Beyond the Horizon' }],
    ['parallax_layering', { displayText: 'Depth & Motion' }],
    ['spotlight_reveal', { displayText: 'Introducing…' }],
    ['vignette_pulse', {}, { bg: 'photo' }],
    ['whip_pan', { ...PHOTO, displayText: 'Meanwhile…' }],
    ['zoom_pulse', { ...PHOTO, displayText: 'DROP' }],
    ['shake_impact', { displayText: 'CRASH!' }],
  ],
  transitions: [
    'blinds_transition', 'clock_wipe', 'cross_dissolve', 'fade_through_black', 'iris_transition',
    'morph_transition', 'push_transition', 'slide_wipe', 'zoom_through', 'full_screen_transition',
    'ink_spread_transition', 'pixel_mosaic_transition', 'transition_circle_wipe',
  ].map((t): Row => [t, {}, { d: 60, bg: 'photo' }]),
  branding: [
    ['logo_blur_reveal', LOGO],
    ['logo_bounce_drop', LOGO],
    ['logo_fade_reveal', LOGO],
    ['logo_glitch_reveal', LOGO],
    ['logo_scale_rotate', LOGO],
    ['logo_spin_reveal', LOGO],
    ['logo_split_reveal', LOGO],
    ['logo_stroke_draw', LOGO],
    ['logo_typewriter', LOGO],
    ['logo_mask_wipe', LOGO],
  ],
  intro: [
    ['chapter_title', { chapter: 3, title: 'The Turning Point', subtitle: 'Where everything changed' }],
    ['cinematic_title_intro', { title: 'THE LAST FRONTIER', subtitle: 'A documentary' }],
    ['countdown_intro', { from: 3, title: 'GO!' }, { d: 120 }],
    ['credits_roll', { title: 'Credits', items: [
      'Directed by Alex Rivera', 'Written by Jordan Lee', 'Edited by Sam Patel',
      'Music by The Night Owls', 'Motion Graphics by StoryBit', 'Thanks for watching',
    ] }, { d: 240 }],
    ['end_card', { title: 'Thanks for watching', subtitle: 'See you next week' }],
    ['intro_lower_third', { name: 'Alex Rivera', role: 'Creative Director' }, { bg: 'photo' }],
    ['intro_quote_card', { quote: 'The best way to predict the future is to create it.', attribution: 'Peter Drucker' }],
    ['quote_card', { quote: 'Simplicity is the ultimate sophistication.', attribution: 'Leonardo da Vinci' }],
    ['subscribe_reminder', { title: 'Subscribe', subtitle: 'Hit the bell for updates' }, { bg: 'photo' }],
    ['title_split', { top: 'BREAKING', bottom: 'NEWS' }],
    ['lower_third_glass_card', { nameText: 'Jordan Lee', titleText: 'Senior Editor' }, { bg: 'photo' }],
  ],
  media: [
    ['gallery_grid', { images: IMAGES }],
    ['image_carousel', { images: IMAGES }],
    ['image_comparison_slider', { images: [img('before-city'), img('after-city')] }],
    ['image_zoom_reveal', { image: img('zoom', 1920, 1080) }],
    ['masonry_gallery', { images: IMAGES }],
    ['photo_stack', { images: IMAGES }],
    ['picture_in_picture', { images: [img('main', 1920, 1080), img('pip')], title: 'Main Feed', pipLabel: 'Camera 2' }],
    ['image_pip', { image: img('pip2'), caption: 'Live reaction' }, { bg: 'photo' }],
    ['polaroid_frame', { image: img('polaroid', 800, 800), caption: 'Summer 2026' }],
    ['split_screen', { leftLabel: 'Before', rightLabel: 'After', leftSubtitle: 'Raw footage', rightSubtitle: 'Color graded', images: [img('left'), img('right')] }],
    ['image_split_screen', { leftLabel: 'iPhone', rightLabel: 'Cinema Cam', images: [img('left2'), img('right2')] }],
    ['pip_video', { image: img('pipvid'), title: 'LIVE' }, { bg: 'photo' }],
  ],
  'legacy-overlays': [
    ['full_screen_title_card', { title: 'Episode 12', subtitle: 'The Road Ahead' }],
    ['full_screen_quote_card', { quote: 'Done is better than perfect.', attribution: 'Sheryl Sandberg' }],
    ['full_screen_data_viz', { label: '87%', caption: 'of viewers watch with sound off' }],
    ['bullet_list_reveal', { title: 'Key Takeaways', items: ITEMS }],
    ['icon_sequence', { icon_name: ['camera', 'scissors', 'rocket'], displayText: 'Shoot · Cut · Launch' }, { bg: 'photo' }],
    ['icon_pop_in', { icon_name: 'rocket', displayText: 'Launch!' }, { bg: 'photo' }],
    ['stat_counter_overlay', { label: '3.2M', caption: 'views this month' }, { bg: 'photo' }],
    ['lower_third', { displayText: 'Alex Rivera — Host' }, { bg: 'photo' }],
    ['kinetic_caption', { displayText: 'This changes everything' }, { bg: 'photo' }],
    ['callout_textbox', { displayText: ['Pro tip:', 'Use B-roll to hide jump cuts'] }, { bg: 'photo' }],
    ['callout', { displayText: 'Look here!' }, { bg: 'photo' }],
    ['logo_watermark', { displayText: 'StoryBit', icon_name: 'zap' }, { bg: 'photo' }],
    ['emoji_reaction', { icon_name: 'heart' }, { bg: 'photo' }],
    ['arrow_highlight', { motion: { startX: 400, startY: 300, endX: 900, endY: 500, style: 'pop' } }, { bg: 'photo' }],
    ['badge_sticker', { displayText: 'NEW', icon_name: 'star' }, { bg: 'photo' }],
    ['full_screen_broll', {}, { bg: 'photo' }],
    ['full_screen_transition_fx', { color: '#6366f1' }, { d: 60, bg: 'photo' }],
    ['full_screen_color_wash', { color: '#f97316' }, { bg: 'photo' }],
    ['full_screen_document_highlight', { highlightTargetText: 'Revenue up 42% year over year' }, { bg: 'photo' }],
    ['pip_video_frame', {}, { bg: 'photo' }],
    ['split_screen_divider', {}, { bg: 'photo' }],
    ['multi_panel_grid', {}, { bg: 'photo' }],
    ['avatar_overlay', { icon_name: 'user' }, { bg: 'photo' }],
    ['mascot_animation', { icon_name: 'cat' }, { bg: 'photo' }],
    ['parallax_accent', {}, { bg: 'photo' }],
    ['shake_impact_flash', {}, { d: 60, bg: 'photo' }],
    ['speed_ramp_indicator', { displayText: '2x' }, { bg: 'photo' }],
    ['overlay_text', { displayText: 'Overlay text sample' }, { bg: 'photo' }],
  ],
  'text-entrances': (
    ['fade_in', 'slide_in_left', 'slide_in_right', 'slide_up', 'slide_down', 'zoom_in', 'bounce', 'pop', 'wipe'] as const
  ).map((style): Row => [style, { displayText: `Entrance: ${style}`, text_animation_style: style }, { bg: 'photo' }]),
};

export const SAMPLES: Sample[] = [
  ...Object.entries(CATEGORIES).flatMap(([category, rows]) =>
    rows.map(([type, props, opts]) => ({
      type,
      category,
      durationFrames: opts?.d ?? 150,
      backdrop: opts?.bg ?? 'dark',
      props,
    })),
  ),
  ...EXTERNAL_SAMPLES.map((s) => ({ ...s, isNew: true })),
];

export function sampleToData(sample: Sample): InfographicData {
  return {
    composition_id: `preview_${sample.type}`,
    animation_type: sample.type,
    props: sample.props,
    duration_frames: sample.durationFrames,
    trigger: 'scene_start',
    placement: 'full_frame',
    render_engine_hint: 'remotion',
  };
}

/** Remotion ids only allow a-z, A-Z, 0-9 and "-". */
export const compositionId = (type: string) => type.replace(/_/g, '-');

export const BACKDROP_IMAGE = img('backdrop', 1920, 1080);
