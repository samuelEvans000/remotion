/**
 * Sample payloads for the animations ported from:
 *  - github.com/Thedurancode/locomotion-templates (props = the template's own editable props)
 *  - github.com/lifeprompt-team/remotion-scenes ThemeAnimations (props = { texts: string[] })
 *  - github.com/duongcokhanh/remotion-video (phone_scene)
 * Values are each template's own defaults, so the preview matches the original design.
 */
import type { Sample } from './sampleData';

type Row = [type: string, props: Record<string, unknown>, durationFrames: number];

const LOCOMOTION: Record<string, Row[]> = {
  "text": [
    ["fade_slide_up", { text: "Hello World" }, 60],
    ["spring_scale_in", { text: "Welcome" }, 60],
    ["typewriter_reveal", { text: "Building the future." }, 90],
    ["staggered_words", { text: "Design. Build. Ship." }, 90],
    ["gradient_text", { text: "Captivating", bgColor: "#000000" }, 90],
  ],
  "saas": [
    ["modal_explainer", { title: "How it works", subtitle: "Get started in three simple steps", steps: "Connect,Choose,Launch", stepDescriptions: "Link your account in one click,Pick a template that fits,Go live in minutes" }, 150],
    ["drag_drop_demo", { variant: "default" }, 150],
    ["feature_showcase", { title: "Everything you need", features: "Fast,Secure,Ship it", descriptions: "Built for speed,Enterprise ready,Idea to prod" }, 150],
    ["pricing_comparison", { planNames: "Starter,Pro,Team", planPrices: "$9,$29,$99", planFeatures: "5 projects|Basic,Unlimited|Analytics,Everything|Support", buttonText: "Get started" }, 90],
    ["onboarding_flow", { title: "Get started", steps: "Create account,Set up workspace,Invite team,Start building" }, 150],
    ["saas_hero", { title: "Ship faster with AI" }, 90],
    ["changelog", { version: "v2.4.0", title: "What's new", features: "AI chat assistant,Drag-and-drop timeline,6 style variants,Code export", bgColor: "#ffffff" }, 90],
  ],
  "explainer": [
    ["step_explainer", { title: "How it works" }, 90],
    ["concept_breakdown", { title: "What is AI?" }, 120],
    ["before_after", { beforeTitle: "Before", afterTitle: "After", beforeItems: "Manual deploys,No monitoring,Slow feedback", afterItems: "Auto CI/CD,Real-time alerts,Ship in minutes", bgColor: "#ffffff" }, 90],
  ],
  "data": [
    ["bar_chart_reveal", { variant: "default" }, 90],
    ["stats_dashboard", { labels: "Users,Revenue,Growth,NPS", values: "12847,$84K,127%,72" }, 90],
    ["metric_card", { label: "MRR", value: "$12,450", change: "+37.18%", date: "March 2026", bgColor: "#000000" }, 90],
    ["day_summary", { title: "Productive day", tasks: "Shipped v2.4,Fixed 12 bugs,Reviewed 5 PRs,Wrote docs", metric: "Tasks completed", metricValue: "23", bgColor: "#ffffff" }, 90],
  ],
  "social": [
    ["bold_text_punch", { text: "Stop scrolling." }, 60],
    ["product_hunt", { rank: "#1", upvotes: "1,500", thankYouText: "Thank you for support", bgColor: "#ffffff" }, 90],
    ["milestone_counter", { label: "Followers", value: "+1,300", emoji: "🔥", bgColor: "#EC4899" }, 90],
    ["testimonial_card", { quote: "This product completely changed how we work. The team shipped 3x faster in the first month.", name: "Sarah Chen", role: "CTO at Acme", bgColor: "#fafafa" }, 90],
    ["social_post", { name: "Acme", handle: "@acmehq", text: "We just launched! After 6 months of building, our product is live. Check it out and let us know what you think.", likes: "2,847", bgColor: "#f5f5f5" }, 90],
    ["profile_card", { name: "Alex Rivera", role: "Founder & CEO", bio: "Building the future of programmatic video. Previously at Stripe and Vercel.", stats: "12K followers,500+ posts,50 projects", bgColor: "#fafafa" }, 90],
    ["meme_card", { topText: "When the deploy works", bottomText: "on the first try", emoji: "😎", bgColor: "#171717" }, 90],
  ],
  "branding": [
    ["logo_reveal", { text: "Acme" }, 60],
    ["intro_outro", { text: "Thanks for watching" }, 90],
    ["toggle_switch", { text: "Video", bgColor: "#9333EA" }, 90],
    ["bento_grid", { items: "Analytics,Fast API,99.9% Uptime,Global CDN,Auth,Webhooks", bgColor: "#fafafa" }, 90],
    ["launch_day", { title: "We just launched!", subtitle: "The fastest way to ship animated videos. Built for developers.", buttonText: "Try it free", bgColor: "#ffffff" }, 90],
    ["collab_card", { leftName: "Acme", rightName: "Beacon", title: "Better together", subtitle: "We're thrilled to announce our partnership.", bgColor: "#ffffff" }, 90],
  ],
  "product": [
    ["app_feature_callout", { text: "Real-time collaboration" }, 90],
    ["ui_walkthrough", { variant: "default" }, 120],
    ["screen_showcase", { title: "Dashboard", features: "Real-time analytics,Team collaboration,Custom reports", bgColor: "#fafafa" }, 90],
  ],
  "e-commerce": [
    ["product_reveal", { text: "New AirPods Pro" }, 90],
    ["discount_countdown", { text: "50% OFF" }, 90],
    ["cart_animation", { title: "Your Cart", items: "Sneakers,T-Shirt,Cap", buttonText: "Checkout" }, 90],
    ["sales_card", { productName: "Pro Templates", revenue: "$4,280", unitsSold: "142", price: "$29", bgColor: "#000000" }, 90],
  ],
  "education": [
    ["lesson_intro", { text: "Lesson 3: Variables" }, 90],
    ["flashcard_flip", { text: "Photosynthesis" }, 90],
    ["quiz_result", { variant: "default" }, 90],
  ],
  "finance": [
    ["stock_ticker", { variant: "default" }, 90],
    ["portfolio_breakdown", { variant: "default" }, 90],
    ["payment_flow", { variant: "default" }, 90],
  ],
  "healthcare": [
    ["patient_journey", { variant: "default" }, 90],
    ["appointment_booking", { variant: "default" }, 90],
    ["wellness_stats", { variant: "default" }, 90],
  ],
  "real-estate": [
    ["property_tour", { text: "42 Oak Avenue" }, 90],
    ["listing_card", { variant: "default" }, 90],
    ["virtual_walkthrough", { variant: "default" }, 120],
  ],
  "recruitment": [
    ["job_posting", { text: "Senior Engineer" }, 90],
    ["team_intro", { variant: "default" }, 90],
    ["culture_reel", { text: "Life at Acme" }, 90],
  ],
  "events": [
    ["agenda_reveal", { text: "Today's Agenda" }, 90],
    ["speaker_card", { text: "Jane Smith" }, 90],
  ],
  "gaming": [
    ["achievement_unlock", { text: "First Victory", subtitle: "Achievement Unlocked", reward: "+500 XP" }, 90],
    ["leaderboard", { variant: "default" }, 90],
    ["level_up", { variant: "default" }, 90],
  ],
};

const THEMES: Row[] = [
  ["theme_3d_glass", { texts: ["PREMIUM", "Glass", "Morphism", "3D GLASS EFFECT"] }, 90],
  ["theme_3d_glass_three_js", { texts: ["PREMIUM", "Glass", "THREE.JS 3D GLASS"] }, 90],
  ["theme_art_deco", { texts: ["THE ROARING", "1920", "ART DECO STYLE"] }, 90],
  ["theme_bauhaus", { texts: ["BAUHAUS", "FORM FOLLOWS FUNCTION"] }, 90],
  ["theme_boho", { texts: ["FREE SPIRIT", "Bohemian", "Style"] }, 90],
  ["theme_brutalist_web", { texts: ["RAW", "BRUTALIST", "Raw, unpolished, and intentionally rough. Breaking conventional web design rules.", "NO DECORATION • ONLY FUNCTION • RAW CODE • ANTI-DESIGN •", "[", "]", "VISITORS: "] }, 90],
  ["theme_cosmic", { texts: ["EXPLORE THE", "COSMOS", "Beyond infinity"] }, 90],
  ["theme_cyberpunk", { texts: ["CYBER", "PUNK"] }, 90],
  ["theme_dark_mode", { texts: ["DARK MODE", "Easy on", "the eyes", "Designed for low-light environments", "Notification", "Just now", "Your dark mode preferences have been saved."] }, 90],
  ["theme_duotone", { texts: ["DUO", "TONE"] }, 90],
  ["theme_geometric_abstract", { texts: ["ABSTRACT", "GEOMETRIC COMPOSITION"] }, 90],
  ["theme_glassmorphism", { texts: ["GLASSMORPHISM", "Frosted Glass", "Effect"] }, 90],
  ["theme_gradient", { texts: ["Gradient", "FLOW WITH COLORS"] }, 90],
  ["theme_holographic", { texts: ["IRIDESCENT", "HOLOGRAM"] }, 90],
  ["theme_industrial", { texts: ["HEAVY DUTY", "INDUSTRIAL", "BUILT TO LAST — SINCE 1892"] }, 90],
  ["theme_isometric", { texts: ["3D Space", "Isometric perspective"] }, 90],
  ["theme_japanese", { texts: ["静寂の美", "JAPANESE AESTHETICS", "The beauty of", "empty space"] }, 90],
  ["theme_luxury", { texts: ["PREMIUM COLLECTION", "Luxury", "Timeless Elegance"] }, 90],
  ["theme_memphis", { texts: ["MEMPHIS", "DESIGN GROUP"] }, 90],
  ["theme_minimalist", { texts: ["Less is more."] }, 90],
  ["theme_monochrome", { texts: ["BLACK", "WHITE"] }, 90],
  ["theme_natural", { texts: ["ORGANIC • NATURAL • PURE", "Back to", "Nature"] }, 90],
  ["theme_neobrutalism", { texts: ["Bold &", "Brutal", "Raw aesthetics with purpose"] }, 90],
  ["theme_neon", { texts: ["NEON", "LIGHTS"] }, 90],
  ["theme_neumorphism", { texts: ["NEUMORPHISM", "Soft UI", "Press me", "Type something..."] }, 90],
  ["theme_organic", { texts: ["FLUID FORMS", "Organic", "Shapes"] }, 90],
  ["theme_paper_cut", { texts: ["LAYERED DESIGN", "Paper", "Cut", "Depth through layers", "and shadow effects"] }, 90],
  ["theme_pop", { texts: ["POP!"] }, 90],
  ["theme_retro", { texts: ["★ ESTABLISHED 1985 ★", "Vintage", "Classic Style Never Dies"] }, 90],
  ["theme_swiss", { texts: ["GRID", "SYSTEM", "HELVETICA", "NEUE", "TYPOGRAPHY", "21", "INTERNATIONAL TYPOGRAPHIC STYLE — SINCE 1950"] }, 90],
  ["theme_tech", { texts: ["TechCo", "Introducing v2.0", "Build faster.", "Ship smarter.", "The modern platform for teams who move fast.", "Get Started", "Learn More", "Dashboard", "+24.5%"] }, 90],
  ["theme_watercolor", { texts: ["HAND PAINTED", "Watercolor", "Organic textures & soft edges"] }, 90],
  ["theme_y2k", { texts: ["Y2K VIBES", "MILLENNIUM AESTHETIC"] }, 90],
];

export const EXTERNAL_SAMPLES: Sample[] = [
  ...Object.entries(LOCOMOTION).flatMap(([category, rows]) =>
    rows.map(([type, props, durationFrames]): Sample => ({
      type,
      category: `locomotion-${category}`,
      durationFrames,
      backdrop: 'none',
      props,
    })),
  ),
  ...THEMES.map(([type, props, durationFrames]): Sample => ({ type, category: 'themes', durationFrames, backdrop: 'none', props })),
  // Default screen video is public/phone-demo.mp4; pass { video: 'https://…' } to use your own (CORS-enabled).
  { type: 'phone_scene', category: '3d', durationFrames: 300, backdrop: 'none', props: { phoneColor: '#6e98bf', baseScale: 1 } },
];
