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
      },
      {
        label: 'Accessory drive belt service (inspect/adjust/replace)',
        slug: 'accessory-drive-belt-service',
        guideSlug: 'engine-mechanical/accessory-drive-belt-service'
      },
      {
        label: 'Water pump replacement',
        slug: 'water-pump-replacement',
        guideSlug: 'engine-mechanical/water-pump-replacement'
      },
      {
        label: 'Timing belt tensioner & idler pulley replacement',
        slug: 'timing-belt-tensioner-idler-replacement',
        guideSlug: 'engine-mechanical/timing-belt-tensioner-idler-replacement'
      },
      {
        label: 'Crank pulley / harmonic balancer inspection & replacement',
        slug: 'crank-pulley-harmonic-balancer-inspection',
        guideSlug: 'engine-mechanical/crank-pulley-harmonic-balancer-inspection'
      },
      {
        label: 'PCV valve replacement',
        slug: 'pcv-valve-replacement',
        guideSlug: 'engine-mechanical/pcv-valve-replacement'
      },
      {
        label: 'Vacuum hose & breather hose inspection/refresh',
        slug: 'vacuum-breather-hose-inspection-refresh',
        guideSlug: 'engine-mechanical/vacuum-breather-hose-inspection-refresh'
      },
      {
        label: 'Engine mount inspection & replacement',
        slug: 'engine-mount-inspection-replacement',
        guideSlug: 'engine-mechanical/engine-mount-inspection-replacement'
      },
      {
        label: 'Oil leak inspection (common NB leak points)',
        slug: 'oil-leak-inspection-common-sources',
        guideSlug: 'engine-mechanical/oil-leak-inspection-common-sources'
      },
      {
        label: 'Oil pressure switch replacement',
        slug: 'oil-pressure-switch-replacement',
        guideSlug: 'engine-mechanical/oil-pressure-switch-replacement'
      },
      {
        label: 'Front crank seal replacement',
        slug: 'front-crank-seal-replacement',
        guideSlug: 'engine-mechanical/front-crank-seal-replacement'
      },
      {
        label: 'Camshaft seal replacement',
        slug: 'camshaft-seal-replacement',
        guideSlug: 'engine-mechanical/camshaft-seal-replacement'
      },
      {
        label: 'Rear main seal replacement',
        slug: 'rear-main-seal-replacement',
        guideSlug: 'engine-mechanical/rear-main-seal-replacement'
      },
      {
        label: 'Cylinder leak-down test',
        slug: 'cylinder-leakdown-test',
        guideSlug: 'engine-mechanical/cylinder-leakdown-test'
      },
      {
        label: 'Ignition timing check/adjustment',
        slug: 'ignition-timing-check-adjustment',
        guideSlug: 'engine-mechanical/ignition-timing-check-adjustment'
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
      },
      {
        label: 'Cooling system pressure test & leak diagnosis',
        slug: 'cooling-system-pressure-test',
        guideSlug: 'cooling-system/cooling-system-pressure-test'
      },
      {
        label: 'Radiator cap test & replacement',
        slug: 'radiator-cap-test-replacement',
        guideSlug: 'cooling-system/radiator-cap-test-replacement'
      },
      {
        label: 'Cooling fan operation check (fans, relays, sensors)',
        slug: 'cooling-fan-operation-check',
        guideSlug: 'cooling-system/cooling-fan-operation-check'
      },
      {
        label: 'Coolant temperature sensor test/replacement',
        slug: 'coolant-temperature-sensor-test-replacement',
        guideSlug: 'cooling-system/coolant-temperature-sensor-test-replacement'
      },
      {
        label: 'Heater core flush & heater performance diagnosis',
        slug: 'heater-core-flush-heater-performance',
        guideSlug: 'cooling-system/heater-core-flush-heater-performance'
      },
      {
        label: 'Coolant expansion tank inspection/replacement',
        slug: 'coolant-expansion-tank-inspection-replacement',
        guideSlug: 'cooling-system/coolant-expansion-tank-inspection-replacement'
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
        label: 'MAF sensor cleaning / intake air metering check',
        slug: 'maf-sensor-cleaning',
        guideSlug: 'intake-fuel-system/maf-sensor-cleaning'
      },
      {
        label: 'Idle air control valve (IAC) cleaning & idle relearn',
        slug: 'iac-cleaning-idle-relearn',
        guideSlug: 'intake-fuel-system/iac-cleaning-idle-relearn'
      },
      {
        label: 'Vacuum leak test (intake boot, hoses, manifold)',
        slug: 'vacuum-leak-test',
        guideSlug: 'intake-fuel-system/vacuum-leak-test'
      },
      {
        label: 'Fuel injector cleaning (on-car / off-car options)',
        slug: 'fuel-injector-cleaning',
        guideSlug: 'intake-fuel-system/fuel-injector-cleaning'
      },
      {
        label: 'Fuel pressure test & regulator diagnosis',
        slug: 'fuel-pressure-test',
        guideSlug: 'intake-fuel-system/fuel-pressure-test'
      },
      {
        label: 'Fuel pump replacement',
        slug: 'fuel-pump-replacement',
        guideSlug: 'intake-fuel-system/fuel-pump-replacement'
      },
      {
        label: 'EVAP system inspection (purge valve, canister, hoses)',
        slug: 'evap-system-inspection',
        guideSlug: 'intake-fuel-system/evap-system-inspection'
      },
      {
        label: 'Throttle cable inspection/adjustment & lubrication',
        slug: 'throttle-cable-adjustment-lubrication',
        guideSlug: 'intake-fuel-system/throttle-cable-adjustment-lubrication'
      },
      {
        label: 'Oxygen sensor replacement (upstream/downstream)',
        slug: 'oxygen-sensor-replacement',
        guideSlug: 'intake-fuel-system/oxygen-sensor-replacement'
      },
      {
        label: 'Exhaust leak inspection & gasket replacement planning',
        slug: 'exhaust-leak-inspection-gasket-repair',
        guideSlug: 'intake-fuel-system/exhaust-leak-inspection-gasket-repair'
      },
      {
        label: 'Exhaust hanger inspection & replacement',
        slug: 'exhaust-hanger-inspection-replacement',
        guideSlug: 'intake-fuel-system/exhaust-hanger-inspection-replacement'
      },
      {
        label: 'Exhaust heat shield rattle diagnosis & fix',
        slug: 'exhaust-heat-shield-rattle-fix',
        guideSlug: 'intake-fuel-system/exhaust-heat-shield-rattle-fix'
      },
      {
        label: 'EGR valve & passages cleaning (if equipped)',
        slug: 'egr-cleaning',
        guideSlug: 'intake-fuel-system/egr-cleaning'
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
      },
      {
        label: 'Ignition coil pack replacement',
        slug: 'ignition-coil-pack-replacement',
        guideSlug: 'ignition-system/ignition-coil-pack-replacement'
      },
      {
        label: 'Crankshaft position sensor replacement',
        slug: 'crankshaft-position-sensor-replacement',
        guideSlug: 'ignition-system/crankshaft-position-sensor-replacement'
      },
      {
        label: 'Cam position sensor / CAS service (incl. O-ring leak where applicable)',
        slug: 'cam-sensor-cas-service-o-ring',
        guideSlug: 'ignition-system/cam-sensor-cas-service-o-ring'
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
        slug: 'transmission-fluid-change',
        guideSlug: 'clutch-transmission/transmission-fluid-change'
      },
      {
        label: 'Clutch pedal free play adjustment',
        slug: 'clutch-pedal-free-play-adjustment',
        guideSlug: 'clutch-transmission/clutch-pedal-free-play-adjustment'
      },
      {
        label: 'CV boot inspection & replacement',
        slug: 'cv-boot-inspection-replacement',
        guideSlug: 'clutch-transmission/cv-boot-inspection-replacement'
      },
      {
        label: 'Clutch fluid flush & bleed',
        slug: 'clutch-fluid-flush-bleed',
        guideSlug: 'clutch-transmission/clutch-fluid-flush-bleed'
      },
      {
        label: 'Clutch master cylinder replacement',
        slug: 'clutch-master-cylinder-replacement',
        guideSlug: 'clutch-transmission/clutch-master-cylinder-replacement'
      },
      {
        label: 'Clutch slave cylinder replacement',
        slug: 'clutch-slave-cylinder-replacement',
        guideSlug: 'clutch-transmission/clutch-slave-cylinder-replacement'
      },
      {
        label: 'Clutch replacement (disc/pressure plate/TOB/pilot bearing)',
        slug: 'clutch-replacement',
        guideSlug: 'clutch-transmission/clutch-replacement'
      },
      {
        label: 'Flywheel inspection & resurfacing/replacement',
        slug: 'flywheel-inspection-resurface-replace',
        guideSlug: 'clutch-transmission/flywheel-inspection-resurface-replace'
      },
      {
        label: 'Shifter turret oil service',
        slug: 'shifter-turret-oil-service',
        guideSlug: 'clutch-transmission/shifter-turret-oil-service'
      },
      {
        label: 'Shifter rebuild (bushings, boots, anti-rattle)',
        slug: 'shifter-rebuild',
        guideSlug: 'clutch-transmission/shifter-rebuild'
      },
      {
        label: 'Transmission mount inspection & replacement',
        slug: 'transmission-mount-inspection-replacement',
        guideSlug: 'clutch-transmission/transmission-mount-inspection-replacement'
      },
      {
        label: 'Gearbox & differential leak inspection (common seals)',
        slug: 'gearbox-differential-leak-inspection',
        guideSlug: 'clutch-transmission/gearbox-differential-leak-inspection'
      },
      {
        label: 'Differential fluid change',
        slug: 'differential-fluid-change',
        guideSlug: 'clutch-transmission/differential-fluid-change'
      },
      {
        label: 'Differential seals replacement (axle seals / pinion seal)',
        slug: 'differential-seal-replacement',
        guideSlug: 'clutch-transmission/differential-seal-replacement'
      },
      {
        label: 'Differential mounts/bushings inspection & replacement',
        slug: 'differential-mount-bushing-replacement',
        guideSlug: 'clutch-transmission/differential-mount-bushing-replacement'
      },
      {
        label: 'Driveshaft inspection & replacement (U-joints)',
        slug: 'driveshaft-inspection-replacement',
        guideSlug: 'clutch-transmission/driveshaft-inspection-replacement'
      },
      {
        label: 'PPF alignment/inspection (if service manual specifies)',
        slug: 'ppf-alignment-inspection',
        guideSlug: 'clutch-transmission/ppf-inspection-realignment'
      }
    ]
  },
  {
    label: 'Brakes',
    slug: 'brakes',
    items: [
      {
        label: 'Brake pad inspection & replacement',
        slug: 'brake-pad-inspection-replacement',
        guideSlug: 'brakes/brake-pad-inspection-replacement'
      },
      {
        label: 'Brake fluid flush & bleed',
        slug: 'brake-fluid-flush-bleed',
        guideSlug: 'brakes/brake-fluid-flush-bleed'
      },
      {
        label: 'Brake rotor inspection & replacement',
        slug: 'brake-rotor-inspection-replacement',
        guideSlug: 'brakes/brake-rotor-inspection-replacement'
      }
    ]
  },
  {
    label: 'Suspension',
    slug: 'suspension',
    items: [
      {
        label: 'Shock absorber inspection',
        slug: 'shock-absorber-inspection',
        guideSlug: 'suspension/shock-absorber-inspection'
      },
      {
        label: 'Ball joint inspection',
        slug: 'ball-joint-inspection',
        guideSlug: 'suspension/ball-joint-inspection'
      },
      {
        label: 'Sway bar link inspection',
        slug: 'sway-bar-link-inspection',
        guideSlug: 'suspension/sway-bar-link-inspection'
      },
      {
        label: 'Suspension bushing inspection',
        slug: 'suspension-bushing-inspection',
        guideSlug: 'suspension/suspension-bushing-inspection'
      }
    ]
  },
  {
    label: 'Steering & Alignment',
    slug: 'steering-alignment',
    items: [
      {
        label: 'Power steering fluid check',
        slug: 'power-steering-fluid-check',
        guideSlug: 'steering-alignment/power-steering-fluid-check'
      },
      {
        label: 'Tie rod inspection & replacement',
        slug: 'tie-rod-inspection-replacement',
        guideSlug: 'steering-alignment/tie-rod-inspection-replacement'
      },
      {
        label: 'Wheel alignment check (as needed)',
        slug: 'wheel-alignment-check',
        guideSlug: 'steering-alignment/wheel-alignment-check'
      }
    ]
  },
  {
    label: 'Electrical System',
    slug: 'electrical-system',
    items: [
      {
        label: 'Battery health check & cleaning',
        slug: 'battery-health-check-cleaning',
        guideSlug: 'electrical-system/battery-health-check-cleaning'
      },
      {
        label: 'Alternator output check',
        slug: 'alternator-output-check',
        guideSlug: 'electrical-system/alternator-output-check'
      },
      {
        label: 'Fuse inspection & replacement',
        slug: 'fuse-inspection-replacement',
        guideSlug: 'electrical-system/fuse-inspection-replacement'
      }
    ]
  },
  {
    label: 'Tires & Wheels',
    slug: 'tires-wheels',
    items: [
      {
        label: 'Tire pressure check',
        slug: 'tire-pressure-check',
        guideSlug: 'tires-wheels/tire-pressure-check'
      },
      {
        label: 'Tire rotation (if non-directional setup)',
        slug: 'tire-rotation',
        guideSlug: 'tires-wheels/tire-rotation'
      },
      {
        label: 'Wheel lug nut torque check',
        slug: 'wheel-lug-nut-torque-check',
        guideSlug: 'tires-wheels/wheel-lug-nut-torque-check'
      }
    ]
  },
  {
    label: 'Convertible Top & Exterior Trim (For soft-top models)',
    slug: 'convertible-top-exterior-trim',
    items: [
      {
        label: 'Soft top cleaning & waterproofing',
        slug: 'soft-top-cleaning-waterproofing',
        guideSlug: 'convertible-top-exterior-trim/soft-top-cleaning-waterproofing'
      },
      {
        label: 'Convertible top frame lubrication',
        slug: 'convertible-top-frame-lubrication',
        guideSlug: 'convertible-top-exterior-trim/convertible-top-frame-lubrication'
      },
      {
        label: 'Drain clearing (ensure proper water flow)',
        slug: 'drain-clearing',
        guideSlug: 'convertible-top-exterior-trim/drain-clearing'
      }
    ]
  },
  {
    label: 'Rust Prevention',
    slug: 'rust-prevention',
    items: [
      {
        label: 'Underbody inspection for rust (especially sills & arches)',
        slug: 'underbody-inspection-rust',
        guideSlug: 'rust-prevention/underbody-inspection-rust'
      },
      {
        label: 'Underseal maintenance (reapply as necessary)',
        slug: 'underseal-maintenance',
        guideSlug: 'rust-prevention/underseal-maintenance'
      }
    ]
  },
  {
    label: 'Appendices',
    slug: 'appendices',
    items: [
      {
        label: 'Routine Log Sheets (for tracking maintenance)',
        slug: 'routine-log-sheets',
        guideSlug: 'appendices/routine-log-sheets'
      },
      {
        label: 'Fluids & Consumables (with specifications)',
        slug: 'fluids-consumables',
        guideSlug: 'appendices/fluids-consumables'
      }
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
