export const SECTIONS = [
  'heroes','headers','footers','buttons','badges','pills','cards',
  'features','ctas','pricing','faqs','testimonials','services',
  'logo-clouds','gallery','errors'
] as const;

export type Section = typeof SECTIONS[number];

export const SECTIONS_META: Record<Section, { label: string; group: 'elements' | 'sections' }> = {
  // elements
  headers: { label: 'Headers', group: 'elements' },
  footers: { label: 'Footers', group: 'elements' },
  buttons: { label: 'Buttons', group: 'elements' },
  badges:  { label: 'Badges',  group: 'elements' },
  pills:   { label: 'Pills',   group: 'elements' },
  cards:   { label: 'Cards',   group: 'elements' },
  errors:  { label: 'Errors',  group: 'elements' },

  // sections
  heroes:       { label: 'Hero Sections',      group: 'sections' },
  features:     { label: 'Feature Sections',   group: 'sections' },
  ctas:         { label: 'CTA Sections',       group: 'sections' },
  pricing:      { label: 'Pricing Sections',   group: 'sections' },
  faqs:         { label: 'FAQ Sections',       group: 'sections' },
  testimonials: { label: 'Testimonials',       group: 'sections' },
  services:     { label: 'Services',           group: 'sections' },
  'logo-clouds':{ label: 'Logo Clouds',        group: 'sections' },
  gallery:      { label: 'Gallery',            group: 'sections' },
};


