export const CATEGORY_LABELS = {
  'engine-mechanical': 'Engine Mechanical',
  'cooling-system': 'Cooling System',
  'intake-fuel-system': 'Intake & Fuel System',
  'ignition-system': 'Ignition System',
  'clutch-transmission': 'Clutch & Transmission',
  brakes: 'Brakes',
  suspension: 'Suspension',
  'steering-alignment': 'Steering & Alignment',
  'electrical-system': 'Electrical System',
  'tires-wheels': 'Tires & Wheels',
  'convertible-top-exterior-trim': 'Convertible Top & Exterior Trim',
  'rust-prevention': 'Rust Prevention',
  appendices: 'Appendices'
} as const;

export type GuideCategory = keyof typeof CATEGORY_LABELS;
