import type { CollectionEntry } from 'astro:content';

export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
  order?: number;
}

interface MenuItemDefinition {
  label: string;
  slug: string;
  guideSlug?: string;
}

interface MenuSectionDefinition {
  label: string;
  slug: string;
  items: MenuItemDefinition[];
}

const menuSections: MenuSectionDefinition[] = [
  {
    label: 'A) Engine Mechanical',
    slug: 'engine-mechanical',
    items: [
      {
        label: 'Engine oil change (Oil & Filter)',
        slug: 'engine-oil-change',
        guideSlug: 'engine-mechanical/oil-filter-change'
      },
      { label: 'Spark plug replacement', slug: 'spark-plug-replacement' },
      {
        label: 'Timing belt replacement (for 1.6L and 1.8L engines)',
        slug: 'timing-belt-replacement'
      },
      { label: 'Valve cover gasket replacement', slug: 'valve-cover-gasket-replacement' },
      { label: 'Engine compression test (periodic check)', slug: 'engine-compression-test' }
    ]
  },
  {
    label: 'B) Cooling System',
    slug: 'cooling-system',
    items: [
      { label: 'Coolant flush & refill', slug: 'coolant-flush-refill' },
      { label: 'Radiator inspection (fins, tanks, leaks)', slug: 'radiator-inspection' },
      { label: 'Thermostat replacement', slug: 'thermostat-replacement' },
      {
        label: 'Coolant hose inspection & replacement',
        slug: 'coolant-hose-inspection-replacement'
      }
    ]
  },
  {
    label: 'C) Intake & Fuel System',
    slug: 'intake-fuel-system',
    items: [
      { label: 'Air filter replacement', slug: 'air-filter-replacement' },
      { label: 'Fuel filter replacement', slug: 'fuel-filter-replacement' },
      { label: 'Throttle body cleaning', slug: 'throttle-body-cleaning' },
      { label: 'Spark plug inspection (ensure proper firing)', slug: 'spark-plug-inspection' }
    ]
  },
  {
    label: 'D) Ignition System',
    slug: 'ignition-system',
    items: [
      { label: 'Ignition coil inspection', slug: 'ignition-coil-inspection' },
      { label: 'Ignition wire replacement', slug: 'ignition-wire-replacement' }
    ]
  },
  {
    label: 'E) Clutch & Transmission',
    slug: 'clutch-transmission',
    items: [
      { label: 'Clutch fluid check & top-up', slug: 'clutch-fluid-check-top-up' },
      {
        label: 'Transmission fluid change (manual transmission)',
        slug: 'transmission-fluid-change'
      },
      { label: 'Clutch pedal free play adjustment', slug: 'clutch-pedal-free-play-adjustment' },
      { label: 'CV boot inspection & replacement', slug: 'cv-boot-inspection-replacement' }
    ]
  },
  {
    label: 'F) Brakes',
    slug: 'brakes',
    items: [
      { label: 'Brake pad inspection & replacement', slug: 'brake-pad-inspection-replacement' },
      { label: 'Brake fluid flush & bleed', slug: 'brake-fluid-flush-bleed' },
      { label: 'Brake rotor inspection & replacement', slug: 'brake-rotor-inspection-replacement' }
    ]
  },
  {
    label: 'G) Suspension',
    slug: 'suspension',
    items: [
      { label: 'Shock absorber inspection', slug: 'shock-absorber-inspection' },
      { label: 'Ball joint inspection', slug: 'ball-joint-inspection' },
      { label: 'Sway bar link inspection', slug: 'sway-bar-link-inspection' },
      { label: 'Suspension bushing inspection', slug: 'suspension-bushing-inspection' }
    ]
  },
  {
    label: 'H) Steering & Alignment',
    slug: 'steering-alignment',
    items: [
      { label: 'Power steering fluid check', slug: 'power-steering-fluid-check' },
      {
        label: 'Tie rod inspection & replacement',
        slug: 'tie-rod-inspection-replacement'
      },
      { label: 'Wheel alignment check (as needed)', slug: 'wheel-alignment-check' }
    ]
  },
  {
    label: 'I) Electrical System',
    slug: 'electrical-system',
    items: [
      { label: 'Battery health check & cleaning', slug: 'battery-health-check-cleaning' },
      { label: 'Alternator output check', slug: 'alternator-output-check' },
      { label: 'Fuse inspection & replacement', slug: 'fuse-inspection-replacement' }
    ]
  },
  {
    label: 'J) Tires & Wheels',
    slug: 'tires-wheels',
    items: [
      { label: 'Tire pressure check', slug: 'tire-pressure-check' },
      { label: 'Tire rotation (if non-directional setup)', slug: 'tire-rotation' },
      { label: 'Wheel lug nut torque check', slug: 'wheel-lug-nut-torque-check' }
    ]
  },
  {
    label: 'K) Convertible Top & Exterior Trim (For soft-top models)',
    slug: 'convertible-top-exterior-trim',
    items: [
      { label: 'Soft top cleaning & waterproofing', slug: 'soft-top-cleaning-waterproofing' },
      { label: 'Convertible top frame lubrication', slug: 'convertible-top-frame-lubrication' },
      { label: 'Drain clearing (ensure proper water flow)', slug: 'drain-clearing' }
    ]
  },
  {
    label: 'L) Rust Prevention',
    slug: 'rust-prevention',
    items: [
      {
        label: 'Underbody inspection for rust (especially sills & arches)',
        slug: 'underbody-inspection-rust'
      },
      { label: 'Underseal maintenance (reapply as necessary)', slug: 'underseal-maintenance' }
    ]
  },
  {
    label: 'Appendices',
    slug: 'appendices',
    items: [
      { label: 'Routine Log Sheets (for tracking maintenance)', slug: 'routine-log-sheets' },
      { label: 'Fluids & Consumables (with specifications)', slug: 'fluids-consumables' }
    ]
  }
];

function getFallbackHref(sectionSlug: string, itemSlug: string): string {
  return `/guides/#${sectionSlug}-${itemSlug}`;
}

export function buildNavTree(guides: CollectionEntry<'guides'>[]): NavItem[] {
  const guideHrefBySlug = new Map(guides.map((guide) => [guide.slug, `/guides/${guide.slug}/`]));

  return menuSections.map((section) => ({
    label: section.label,
    href: `/guides/${section.slug}/`,
    children: section.items.map((item) => ({
      label: item.label,
      href: item.guideSlug
        ? (guideHrefBySlug.get(item.guideSlug) ?? getFallbackHref(section.slug, item.slug))
        : getFallbackHref(section.slug, item.slug)
    }))
  }));
}
