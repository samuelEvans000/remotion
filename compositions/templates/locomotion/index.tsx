'use client';

// animation_type → locomotion-templates component. Backend `props` are passed straight through
// as the component's own props (e.g. { text, bgColor, variant }).
// Skipped as duplicates of existing types: countdown-timer, quote-card.
import type { ComponentType } from 'react';
import type { TemplateProps } from '../../../types';
import { FadeSlideUp } from './fade-slide-up/Composition';
import { SpringScaleIn } from './spring-scale-in/Composition';
import { TypewriterReveal } from './typewriter-reveal/Composition';
import { StaggeredWords } from './staggered-words/Composition';
import { ModalExplainer } from './modal-explainer/Composition';
import { DragDropDemo } from './drag-drop-demo/Composition';
import { FeatureShowcase } from './feature-showcase/Composition';
import { PricingComparison } from './pricing-comparison/Composition';
import { OnboardingFlow } from './onboarding-flow/Composition';
import { SaasHero } from './saas-hero/Composition';
import { StepExplainer } from './step-explainer/Composition';
import { ConceptBreakdown } from './concept-breakdown/Composition';
import { BarChartReveal } from './bar-chart-reveal/Composition';
import { StatsDashboard } from './stats-dashboard/Composition';
import { BoldTextPunch } from './bold-text-punch/Composition';
import { LogoReveal } from './logo-reveal/Composition';
import { IntroOutro } from './intro-outro/Composition';
import { AppFeatureCallout } from './app-feature-callout/Composition';
import { UiWalkthrough } from './ui-walkthrough/Composition';
import { ProductReveal } from './product-reveal/Composition';
import { DiscountCountdown } from './discount-countdown/Composition';
import { CartAnimation } from './cart-animation/Composition';
import { LessonIntro } from './lesson-intro/Composition';
import { FlashcardFlip } from './flashcard-flip/Composition';
import { QuizResult } from './quiz-result/Composition';
import { StockTicker } from './stock-ticker/Composition';
import { PortfolioBreakdown } from './portfolio-breakdown/Composition';
import { PaymentFlow } from './payment-flow/Composition';
import { PatientJourney } from './patient-journey/Composition';
import { AppointmentBooking } from './appointment-booking/Composition';
import { WellnessStats } from './wellness-stats/Composition';
import { PropertyTour } from './property-tour/Composition';
import { ListingCard } from './listing-card/Composition';
import { VirtualWalkthrough } from './virtual-walkthrough/Composition';
import { JobPosting } from './job-posting/Composition';
import { TeamIntro } from './team-intro/Composition';
import { CultureReel } from './culture-reel/Composition';
import { AgendaReveal } from './agenda-reveal/Composition';
import { SpeakerCard } from './speaker-card/Composition';
import { AchievementUnlock } from './achievement-unlock/Composition';
import { Leaderboard } from './leaderboard/Composition';
import { LevelUp } from './level-up/Composition';
import { GradientText } from './gradient-text/Composition';
import { MetricCard } from './metric-card/Composition';
import { ProductHunt } from './product-hunt/Composition';
import { MilestoneCounter } from './milestone-counter/Composition';
import { ToggleSwitch } from './toggle-switch/Composition';
import { TestimonialCard } from './testimonial-card/Composition';
import { Changelog } from './changelog/Composition';
import { BentoGrid } from './bento-grid/Composition';
import { BeforeAfter } from './before-after/Composition';
import { SocialPost } from './social-post/Composition';
import { LaunchDay } from './launch-day/Composition';
import { ProfileCard } from './profile-card/Composition';
import { CollabCard } from './collab-card/Composition';
import { ScreenShowcase } from './screen-showcase/Composition';
import { DaySummary } from './day-summary/Composition';
import { SalesCard } from './sales-card/Composition';
import { MemeCard } from './meme-card/Composition';

type AnyProps = Record<string, unknown>;

function adapt(Component: ComponentType<AnyProps>): ComponentType<TemplateProps> {
  const Adapted = ({ data }: TemplateProps) => <Component {...data.props} />;
  Adapted.displayName = Component.displayName ?? Component.name;
  return Adapted;
}

export const LOCOMOTION_RENDERERS: Record<string, ComponentType<TemplateProps>> = {
  fade_slide_up: adapt(FadeSlideUp as ComponentType<AnyProps>),
  spring_scale_in: adapt(SpringScaleIn as ComponentType<AnyProps>),
  typewriter_reveal: adapt(TypewriterReveal as ComponentType<AnyProps>),
  staggered_words: adapt(StaggeredWords as ComponentType<AnyProps>),
  modal_explainer: adapt(ModalExplainer as ComponentType<AnyProps>),
  drag_drop_demo: adapt(DragDropDemo as ComponentType<AnyProps>),
  feature_showcase: adapt(FeatureShowcase as ComponentType<AnyProps>),
  pricing_comparison: adapt(PricingComparison as ComponentType<AnyProps>),
  onboarding_flow: adapt(OnboardingFlow as ComponentType<AnyProps>),
  saas_hero: adapt(SaasHero as ComponentType<AnyProps>),
  step_explainer: adapt(StepExplainer as ComponentType<AnyProps>),
  concept_breakdown: adapt(ConceptBreakdown as ComponentType<AnyProps>),
  bar_chart_reveal: adapt(BarChartReveal as ComponentType<AnyProps>),
  stats_dashboard: adapt(StatsDashboard as ComponentType<AnyProps>),
  bold_text_punch: adapt(BoldTextPunch as ComponentType<AnyProps>),
  logo_reveal: adapt(LogoReveal as ComponentType<AnyProps>),
  intro_outro: adapt(IntroOutro as ComponentType<AnyProps>),
  app_feature_callout: adapt(AppFeatureCallout as ComponentType<AnyProps>),
  ui_walkthrough: adapt(UiWalkthrough as ComponentType<AnyProps>),
  product_reveal: adapt(ProductReveal as ComponentType<AnyProps>),
  discount_countdown: adapt(DiscountCountdown as ComponentType<AnyProps>),
  cart_animation: adapt(CartAnimation as ComponentType<AnyProps>),
  lesson_intro: adapt(LessonIntro as ComponentType<AnyProps>),
  flashcard_flip: adapt(FlashcardFlip as ComponentType<AnyProps>),
  quiz_result: adapt(QuizResult as ComponentType<AnyProps>),
  stock_ticker: adapt(StockTicker as ComponentType<AnyProps>),
  portfolio_breakdown: adapt(PortfolioBreakdown as ComponentType<AnyProps>),
  payment_flow: adapt(PaymentFlow as ComponentType<AnyProps>),
  patient_journey: adapt(PatientJourney as ComponentType<AnyProps>),
  appointment_booking: adapt(AppointmentBooking as ComponentType<AnyProps>),
  wellness_stats: adapt(WellnessStats as ComponentType<AnyProps>),
  property_tour: adapt(PropertyTour as ComponentType<AnyProps>),
  listing_card: adapt(ListingCard as ComponentType<AnyProps>),
  virtual_walkthrough: adapt(VirtualWalkthrough as ComponentType<AnyProps>),
  job_posting: adapt(JobPosting as ComponentType<AnyProps>),
  team_intro: adapt(TeamIntro as ComponentType<AnyProps>),
  culture_reel: adapt(CultureReel as ComponentType<AnyProps>),
  agenda_reveal: adapt(AgendaReveal as ComponentType<AnyProps>),
  speaker_card: adapt(SpeakerCard as ComponentType<AnyProps>),
  achievement_unlock: adapt(AchievementUnlock as ComponentType<AnyProps>),
  leaderboard: adapt(Leaderboard as ComponentType<AnyProps>),
  level_up: adapt(LevelUp as ComponentType<AnyProps>),
  gradient_text: adapt(GradientText as ComponentType<AnyProps>),
  metric_card: adapt(MetricCard as ComponentType<AnyProps>),
  product_hunt: adapt(ProductHunt as ComponentType<AnyProps>),
  milestone_counter: adapt(MilestoneCounter as ComponentType<AnyProps>),
  toggle_switch: adapt(ToggleSwitch as ComponentType<AnyProps>),
  testimonial_card: adapt(TestimonialCard as ComponentType<AnyProps>),
  changelog: adapt(Changelog as ComponentType<AnyProps>),
  bento_grid: adapt(BentoGrid as ComponentType<AnyProps>),
  before_after: adapt(BeforeAfter as ComponentType<AnyProps>),
  social_post: adapt(SocialPost as ComponentType<AnyProps>),
  launch_day: adapt(LaunchDay as ComponentType<AnyProps>),
  profile_card: adapt(ProfileCard as ComponentType<AnyProps>),
  collab_card: adapt(CollabCard as ComponentType<AnyProps>),
  screen_showcase: adapt(ScreenShowcase as ComponentType<AnyProps>),
  day_summary: adapt(DaySummary as ComponentType<AnyProps>),
  sales_card: adapt(SalesCard as ComponentType<AnyProps>),
  meme_card: adapt(MemeCard as ComponentType<AnyProps>),
};
