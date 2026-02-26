import type { CollectionEntry } from 'astro:content';
import type { GuideCategory } from '@lib/categories';

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
  slug: GuideCategory;
  items: MenuItemDefinition[];
}

export const menuSections: MenuSectionDefinition[] = [
  {
    label: 'Engine Mechanical',
    slug: 'engine-mechanical',
    items: [
      {
        label: 'Engine oil change (Oil & Filter)',
        slug: 'engine-oil-change',
        guideSlug: 'engine-mechanical/oil-filter-change'
      },
      {
        label: 'Spark plug replacement',
        slug: 'spark-plug-replacement',
        guideSlug: 'engine-mechanical/spark-plug-replacement'
      },
      {
        label: 'Timing belt replacement (for 1.6L and 1.8L engines)',
        slug: 'timing-belt-replacement',
        guideSlug: 'engine-mechanical/timing-belt-replacement'
      },
      {
        label: 'Valve cover gasket replacement',
        slug: 'valve-cover-gasket-replacement',
        guideSlug: 'engine-mechanical/valve-cover-gasket-replacement'
      },
      {
        label: 'Engine compression test (periodic check)',
        slug: 'engine-compression-test',
        guideSlug: 'engine-mechanical/engine-compression-test'
      }
    ]
  },
  {
    label: 'Cooling System',
    slug: 'cooling-system',
    items: [
      {
        label: 'Coolant flush & refill',
        slug: 'coolant-flush-refill',
        guideSlug: 'cooling-system/coolant-flush-refill'
      },
      {
        label: 'Radiator inspection (fins, tanks, leaks)',
        slug: 'radiator-inspection',
        guideSlug: 'cooling-system/radiator-inspection'
      },
      {
        label: 'Thermostat replacement',
        slug: 'thermostat-replacement',
        guideSlug: 'cooling-system/thermostat-replacement'
      },
      {
        label: 'Coolant hose inspection & replacement',
        slug: 'coolant-hose-inspection-replacement',
        guideSlug: 'cooling-system/coolant-hose-inspection-replacement'
      }
    ]
  },
  {
    label: 'Intake & Fuel System',
    slug: 'intake-fuel-system',
    items: [
      {
        label: 'Air filter replacement',
        slug: 'air-filter-replacement',
        guideSlug: 'intake-fuel-system/air-filter-replacement'
      },
      {
        label: 'Fuel filter replacement',
        slug: 'fuel-filter-replacement',
        guideSlug: 'intake-fuel-system/fuel-filter-replacement'
      },
      {
        label: 'Throttle body cleaning',
        slug: 'throttle-body-cleaning',
        guideSlug: 'intake-fuel-system/throttle-body-cleaning'
      },
      {
        label: 'Spark plug inspection (ensure proper firing)',
        slug: 'spark-plug-inspection',
        guideSlug: 'intake-fuel-system/spark-plug-inspection'
      }
    ]
  },
  {
    label: 'Ignition System',
    slug: 'ignition-system',
    items: [
      {
        label: 'Ignition coil inspection',
        slug: 'ignition-coil-inspection',
        guideSlug: 'ignition-system/ignition-coil-inspection'
      },
      {
        label: 'Ignition wire replacement',
        slug: 'ignition-wire-replacement',
        guideSlug: 'ignition-system/ignition-wire-replacement'
      }
    ]
  },
  {
    label: 'Clutch & Transmission',
    slug: 'clutch-transmission',
    items: [
      {
        label: 'Clutch fluid check & top-up',
        slug: 'clutch-fluid-check-top-up',
        guideSlug: 'clutch-transmission/clutch-fluid-check-top-up'
      },
      {
        label: 'Transmission fluid change (manual transmission)',
        slug: 'transmission-fluid-change'
      },
      { label: 'Clutch pedal free play adjustment', slug: 'clutch-pedal-free-play-adjustment' },
      { label: 'CV boot inspection & replacement', slug: 'cv-boot-inspection-replacement' }
    ]
  },
  {
    label: 'Brakes',
    slug: 'brakes',
    items: [
      { label: 'Brake pad inspection & replacement', slug: 'brake-pad-inspection-replacement' },
      { label: 'Brake fluid flush & bleed', slug: 'brake-fluid-flush-bleed' },
      { label: 'Brake rotor inspection & replacement', slug: 'brake-rotor-inspection-replacement' }
    ]
  },
  {
    label: 'Suspension',
    slug: 'suspension',
    items: [
      { label: 'Shock absorber inspection', slug: 'shock-absorber-inspection' },
      { label: 'Ball joint inspection', slug: 'ball-joint-inspection' },
      { label: 'Sway bar link inspection', slug: 'sway-bar-link-inspection' },
      { label: 'Suspension bushing inspection', slug: 'suspension-bushing-inspection' }
    ]
  },
  {
    label: 'Steering & Alignment',
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
    label: 'Electrical System',
    slug: 'electrical-system',
    items: [
      { label: 'Battery health check & cleaning', slug: 'battery-health-check-cleaning' },
      { label: 'Alternator output check', slug: 'alternator-output-check' },
      { label: 'Fuse inspection & replacement', slug: 'fuse-inspection-replacement' }
    ]
  },
  {
    label: 'Tires & Wheels',
    slug: 'tires-wheels',
    items: [
      { label: 'Tire pressure check', slug: 'tire-pressure-check' },
      { label: 'Tire rotation (if non-directional setup)', slug: 'tire-rotation' },
      { label: 'Wheel lug nut torque check', slug: 'wheel-lug-nut-torque-check' }
    ]
  },
  {
    label: 'Convertible Top & Exterior Trim (For soft-top models)',
    slug: 'convertible-top-exterior-trim',
    items: [
      { label: 'Soft top cleaning & waterproofing', slug: 'soft-top-cleaning-waterproofing' },
      { label: 'Convertible top frame lubrication', slug: 'convertible-top-frame-lubrication' },
      { label: 'Drain clearing (ensure proper water flow)', slug: 'drain-clearing' }
    ]
  },
  {
    label: 'Rust Prevention',
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

function getFallbackHref(sectionSlug: GuideCategory, itemSlug: string): string {
  return `/guides/${sectionSlug}/${itemSlug}/`;
}

export function buildNavTree(guides: CollectionEntry<'guides'>[]): NavItem[] {
  const guideHrefBySlug = new Map(guides.map((guide) => [guide.slug, `/guides/${guide.slug}/`]));
  const resolveGuideSlug = (sectionSlug: GuideCategory, item: MenuItemDefinition) =>
    item.guideSlug ?? `${sectionSlug}/${item.slug}`;

  return menuSections.map((section) => ({
    label: section.label,
    href: `/guides/${section.slug}/`,
    children: section.items.map((item) => ({
      label: item.label,
      href:
        guideHrefBySlug.get(resolveGuideSlug(section.slug, item)) ??
        getFallbackHref(section.slug, item.slug)
    }))
  }));
}
