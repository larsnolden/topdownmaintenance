# Authoring Progress Tracker

Scope reminder: track only Mazda MX-5 NB maintenance content (built 1998-2005, NB1/NB2).

Use this file to track writing/review/publish status for each article page in the maintenance book.

Status options:
- `Not Started`
- `Drafting`
- `In Review`
- `Ready`
- `Published`

Generation guardrail:
- every tracked article must target Mazda MX-5 NB (1998-2005) specifically
- if a procedure differs by generation or market, note uncertainty/conflict in `Notes`

## Engine Mechanical

- [x] Engine oil change (Oil & Filter) | Owner: TBD | Status: Published | URL: `/guides/engine-mechanical/oil-filter-change/` | Notes: Example guide complete
- [ ] Spark plug replacement | Owner: article-agent | Status: Ready | URL: `/guides/engine-mechanical/spark-plug-replacement/` | Notes: 2026-02-26: Continued and strengthened draft with additional high-risk quote coverage (Champion turn-angle fallback + Miata.net ignition lead mis-wiring caution), while retaining manual/spec + how-to + forum source mix. Cross-checked torque range (Apex NA/NB compilation vs NGK seat/thread ranges) and called out market/VIN variability for exact plug PNs and intervals. Browser-based source verification performed (Miata.net snapshot successful; some sources still partially limited by anti-bot/cookie walls). Images not added (no clearly reusable licensed NB-specific procedural assets retrieved). 2026-02-26: Build gate passed using absolute-path tool invocation (`/run/current-system/sw/bin/nix develop -c /run/current-system/sw/bin/npm run build`).
- [ ] Timing belt replacement (for 1.6L and 1.8L engines) | Owner: article-agent | Status: Ready | URL: `/guides/engine-mechanical/timing-belt-replacement/` | Notes: 2026-02-26: Added full NB1/NB2 timing-belt guide with safety-critical emphasis on timing alignment, crank pulley removal caution, and post-service no-start diagnostics. Source mix includes manual/spec index (BOFI workshop manual index), 2 independent how-to sources (MX-5 Unleashed, ScegliAuto), and 2 Miata forum/community threads (NB timing-belt process and NB no-start after snapped belt). Cross-checked public torque-table reliability and explicitly flagged uncertainty due non-factory compiled values; instructed VIN-specific manual confirmation. No images added (no clearly reusable licensed NB-specific procedural images retrieved). Build passed with `/run/current-system/sw/bin/nix develop -c /run/current-system/sw/bin/npm run build`.
- [ ] Valve cover gasket replacement | Owner: article-agent | Status: Ready | URL: `/guides/engine-mechanical/valve-cover-gasket-replacement/` | Notes: 2026-02-26: Added NB1/NB2 valve cover gasket guide with explicit leak-source verification, careful sealing-surface prep, and conservative fastener/torque handling. Source mix: manual/spec source (BOFI NB workshop manual index), two independent how-to references (MiataMechanic + two NB-focused YouTube how-to references), and two Miata.net NB forum threads (gasket reuse risk tradeoff, corner sealant/OEM-quality guidance, while-you-are-there checks). Uncertainty explicitly documented: exact torque value not published due inaccessible/partial primary references in this environment; guide instructs VIN-specific manual confirmation. Images not added (no clearly reusable licensed NB-specific procedural images retrieved). Build passed with `/run/current-system/sw/bin/nix develop -c /run/current-system/sw/bin/npm run build`.
- [ ] Engine compression test (periodic check) | Owner: article-agent | Status: Ready | URL: `/guides/engine-mechanical/engine-compression-test/` | Notes: 2026-02-26: Claimed and completed in one run. Added NB1/NB2 compression-test guide with explicit safety and repeatability workflow (warm engine, disable fuel/ignition, WOT cranking, cylinder-balance-first interpretation), plus wet-test/leak-down follow-up logic. Source mix includes manual/spec references (Mellens FSM indexes), independent how-tos (Flyin' Miata help center, Did-It-Myself, wikiHow), and community forums (Miata.net NB + MX5Nutz). Key uncertainty documented: exact year/engine compression threshold values could not be reliably extracted from factory tables in this environment, so guide defers final numeric limits to year-specific FSM. Images not added (no clearly reusable licensed NB-specific procedural images retrieved).

## Cooling System

- [ ] Coolant flush & refill | Owner: article-agent | Status: Ready | URL: `/guides/cooling-system/coolant-flush-refill/` | Notes: 2026-02-26: Claimed and completed this run. Added NB1/NB2 coolant flush/refill guide with safety/disposal emphasis, repeated flush logic, trapped-water concentration planning, and post-service bleed verification. Source mix: manual/spec archive reference (Mellens), independent how-to guides (TechGuys, wikiHow, plus BOFI coolant-type guidance), and forum/community corroboration (Miata.net NB threads + MX5Nutz). Cross-check result: sources broadly agree on ~6 L/6.2 qt system capacity and that radiator-only drain is partial; uncertainty remains on exact region/climate concentration guidance and year-specific FSM tables not fully extractable in this environment. Images not added (no clearly reusable licensed NB-specific assets retrieved).
- [ ] Radiator inspection (fins, tanks, leaks) | Owner: article-agent | Status: Ready | URL: `/guides/cooling-system/radiator-inspection/` | Notes: 2026-02-26: Claimed and completed this run. Added NB1/NB2 radiator inspection guide focused on tank/neck cracks, seam seepage, fin condition, coolant-level trend, and optional pressure test. Source mix includes manual/spec reference (Mellens FSM archive), independent how-to sources (wikiHow radiator-fluid safety/check flow + TechGuys cooling-system inspection/flush process), and forum/community sources (Miata.net radiator discoloration/inspection thread + NB coolant-capacity discussion thread). Cross-check finding: discoloration alone is not a definitive failure signal; stronger indicators are crack/seep evidence + fin degradation + repeated level loss. Uncertainty documented accordingly. Images not added due unavailable clearly reusable licensed NB-specific visuals.
- [ ] Thermostat replacement | Owner: article-agent | Status: Ready | URL: `/guides/cooling-system/thermostat-replacement/` | Notes: 2026-02-26: Claimed and completed this run. Added NB1/NB2 thermostat replacement guide with conservative diagnosis-first workflow, housing/gasket prep detail, jiggle-pin orientation, and post-service bleed/leak validation. Source mix includes manual/spec index reference (Mellens FSM archive), independent how-to guides (wikiHow thermostat replacement + Redcap's Miata Garage thermostat write-up), and community sources (Miata.net NB thermostat thread, Miata.net coolant procedure/bleeding thread, Miata.net post-repair leak/odor verification thread). Cross-check result: consensus is strong on cold-engine service, careful surface prep, and air purge checks; uncertainty remains on exact FSM torque extraction in this environment, so torque is explicitly marked provisional pending year/VIN manual confirmation. Images not added (no clearly reusable licensed NB-specific assets located).
- [ ] Coolant hose inspection & replacement | Owner: article-agent | Status: Ready | URL: `/guides/cooling-system/coolant-hose-inspection-replacement/` | Notes: 2026-02-26: Claimed and completed this run. Added NB1/NB2 coolant hose inspection/replacement guide with cold-system safety, hose removal technique to protect fragile necks, clamp placement guidance, and post-bleed verification checks. Source mix includes manual/spec index reference (Mellens FSM archive), independent how-to references (TechGuys cooling-service procedure and wikiHow radiator-flush safety/process baseline), and NB forum/community corroboration (Miata.net NB coolant hose thread + Miata.net NB post-service leak/level checks). Cross-check finding: strong community preference for OEM molded hoses and serviceable constant-tension clamps; uncertainty remains on exact hose count/part-number differences by year and on direct FSM table extraction in this environment. Images not added (no clearly reusable licensed NB-specific assets found).

## Intake & Fuel System

- [ ] Air filter replacement | Owner: article-agent | Status: Ready | URL: `/guides/intake-fuel-system/air-filter-replacement/` | Notes: 2026-02-26: Continued and finalized to Ready this run. Strengthened interval/decision guidance with explicit NB condition-based inspection framing while keeping all procedural claims tied to sources already verified in-browser (Mazda owner-manual PDF URL, K&N cleaning procedure, wikiHow/ScegliAuto how-to context, and Miata.net NB community threads 770376 + 502756). Cross-check outcome: strong agreement on process controls (correct seating, clean-side-out rinse for reusable media, fully dry before oiling, avoid over-oiling due MAF contamination risk); lower confidence remains on extracting one definitive public OEM interval table from machine-readable manual text in this environment, so interval language stays conservative and year/market-manual dependent. No reusable licensed NB-specific images were found/added. Build passed with `/run/current-system/sw/bin/nix develop -c /run/current-system/sw/bin/npm run build`.
- [ ] Fuel filter replacement | Owner: article-agent | Status: Ready | URL: `/guides/intake-fuel-system/fuel-filter-replacement/` | Notes: 2026-02-26: Claimed and completed in this run. Added NB1/NB2 fuel-filter replacement guide focused on rear-right underbody filter service, fuel-pressure relief, quick-connect handling, and leak verification. Source mix includes manual/spec source (Mellens NB factory manual index), independent how-to references (wikiHow procedural workflow plus Radium NB-specific location/fitting notes), and Miata.net NB community corroboration (thread 483779 and 677517 on quick-connect behavior, spill risk, and practical prep). Cross-check finding: broad agreement on depressurizing fuel system, keeping ignition sources away, and checking for leaks after repressurization; uncertainty remains on exact OEM time/mileage interval and regional spec differences, so interval language is conservative and inspection-based. No reusable licensed NB-specific images were found/added. Build passed with `/run/current-system/sw/bin/nix develop -c /run/current-system/sw/bin/npm run build`.
- [ ] Throttle body cleaning | Owner: TBD | Status: Not Started | URL: `TBD` | Notes:
- [ ] Spark plug inspection (ensure proper firing) | Owner: TBD | Status: Not Started | URL: `TBD` | Notes:

## Ignition System

- [ ] Ignition coil inspection | Owner: TBD | Status: Not Started | URL: `TBD` | Notes:
- [ ] Ignition wire replacement | Owner: TBD | Status: Not Started | URL: `TBD` | Notes:

## Clutch & Transmission

- [ ] Clutch fluid check & top-up | Owner: TBD | Status: Not Started | URL: `TBD` | Notes:
- [ ] Transmission fluid change (manual transmission) | Owner: TBD | Status: Not Started | URL: `TBD` | Notes:
- [ ] Clutch pedal free play adjustment | Owner: TBD | Status: Not Started | URL: `TBD` | Notes:
- [ ] CV boot inspection & replacement | Owner: TBD | Status: Not Started | URL: `TBD` | Notes:

## Brakes

- [ ] Brake pad inspection & replacement | Owner: TBD | Status: Not Started | URL: `TBD` | Notes:
- [ ] Brake fluid flush & bleed | Owner: TBD | Status: Not Started | URL: `TBD` | Notes:
- [ ] Brake rotor inspection & replacement | Owner: TBD | Status: Not Started | URL: `TBD` | Notes:

## Suspension

- [ ] Shock absorber inspection | Owner: TBD | Status: Not Started | URL: `TBD` | Notes:
- [ ] Ball joint inspection | Owner: TBD | Status: Not Started | URL: `TBD` | Notes:
- [ ] Sway bar link inspection | Owner: TBD | Status: Not Started | URL: `TBD` | Notes:
- [ ] Suspension bushing inspection | Owner: TBD | Status: Not Started | URL: `TBD` | Notes:

## Steering & Alignment

- [ ] Power steering fluid check | Owner: TBD | Status: Not Started | URL: `TBD` | Notes:
- [ ] Tie rod inspection & replacement | Owner: TBD | Status: Not Started | URL: `TBD` | Notes:
- [ ] Wheel alignment check (as needed) | Owner: TBD | Status: Not Started | URL: `TBD` | Notes:

## Electrical System

- [ ] Battery health check & cleaning | Owner: TBD | Status: Not Started | URL: `TBD` | Notes:
- [ ] Alternator output check | Owner: TBD | Status: Not Started | URL: `TBD` | Notes:
- [ ] Fuse inspection & replacement | Owner: TBD | Status: Not Started | URL: `TBD` | Notes:

## Tires & Wheels

- [ ] Tire pressure check | Owner: TBD | Status: Not Started | URL: `TBD` | Notes:
- [ ] Tire rotation (if non-directional setup) | Owner: TBD | Status: Not Started | URL: `TBD` | Notes:
- [ ] Wheel lug nut torque check | Owner: TBD | Status: Not Started | URL: `TBD` | Notes:

## Convertible Top & Exterior Trim (For soft-top models)

- [ ] Soft top cleaning & waterproofing | Owner: TBD | Status: Not Started | URL: `TBD` | Notes:
- [ ] Convertible top frame lubrication | Owner: TBD | Status: Not Started | URL: `TBD` | Notes:
- [ ] Drain clearing (ensure proper water flow) | Owner: TBD | Status: Not Started | URL: `TBD` | Notes:

## Rust Prevention

- [ ] Underbody inspection for rust (especially sills & arches) | Owner: TBD | Status: Not Started | URL: `TBD` | Notes:
- [ ] Underseal maintenance (reapply as necessary) | Owner: TBD | Status: Not Started | URL: `TBD` | Notes:

## Appendices

- [ ] Routine Log Sheets (for tracking maintenance) | Owner: TBD | Status: Not Started | URL: `TBD` | Notes:
- [ ] Fluids & Consumables (with specifications) | Owner: TBD | Status: Not Started | URL: `TBD` | Notes:
