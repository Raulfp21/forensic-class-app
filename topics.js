// ============================================================
//  topics.js  —  CONTENT ONLY FILE
//  Edit ONLY this file when adding new topics or scenarios.
//  Do NOT add any Firebase, UI, or logic code here.
//  This file is NEVER replaced by infrastructure updates.
// ============================================================

// ============================================================
//  FIX APPLIED (2026-05-01):
//  The bgShow() function has been REMOVED from step 7's text
//  string. Inline <script> tags injected via innerHTML are
//  silently blocked by browsers (security policy).
//
//  ACTION REQUIRED IN YOUR MAIN JS / HTML FILE:
//  Add this function once, outside this data file:
//
//    function bgShow(i) {
//      document.querySelectorAll('.bg-panel')
//        .forEach((p, j) => p.classList.toggle('bg-show', j === i));
//      document.querySelectorAll('.bg-sn')
//        .forEach((b, j) => b.classList.toggle('bg-active', j === i));
//    }
//
//  Also add the CSS block from forensicContent._animationCSS
//  into your <head> or stylesheet once on page load.
// ============================================================

const forensicContent = {

  // Inject this CSS once into your page <head> or stylesheet.
  // Call: document.head.insertAdjacentHTML('beforeend', `<style>${forensicContent._animationCSS}</style>`);
  _animationCSS: `
    /* ── Cascade / panel fade-in ── */
    @keyframes fg-fadeUp {
      from { opacity: 0; transform: translateY(14px); }
      to   { opacity: 1; transform: translateY(0); }
    }
    @keyframes fg-popIn {
      from { opacity: 0; transform: scale(0.93); }
      to   { opacity: 1; transform: scale(1); }
    }
    @keyframes fg-slideRight {
      from { opacity: 0; transform: translateX(-18px); }
      to   { opacity: 1; transform: translateX(0); }
    }
    @keyframes fg-drawLine {
      from { stroke-dashoffset: 200; }
      to   { stroke-dashoffset: 0; }
    }

    /* Panel show animation */
    .bg-panel.bg-show {
      display: block;
      animation: fg-fadeUp 0.35s ease both;
    }
    /* Cards stagger inside a visible panel */
    .bg-panel.bg-show .bg-card {
      animation: fg-popIn 0.3s ease both;
    }
    .bg-panel.bg-show .bg-card:nth-child(1) { animation-delay: 0.05s; }
    .bg-panel.bg-show .bg-card:nth-child(2) { animation-delay: 0.10s; }
    .bg-panel.bg-show .bg-card:nth-child(3) { animation-delay: 0.15s; }
    .bg-panel.bg-show .bg-card:nth-child(4) { animation-delay: 0.20s; }
    .bg-panel.bg-show .bg-card:nth-child(5) { animation-delay: 0.25s; }
    .bg-panel.bg-show .bg-card:nth-child(6) { animation-delay: 0.30s; }

    /* Chain pills slide in */
    .bg-panel.bg-show .bg-ch {
      animation: fg-slideRight 0.3s ease both;
    }
    .bg-panel.bg-show .bg-ch:nth-child(1)  { animation-delay: 0.00s; }
    .bg-panel.bg-show .bg-ch:nth-child(3)  { animation-delay: 0.08s; }
    .bg-panel.bg-show .bg-ch:nth-child(5)  { animation-delay: 0.16s; }
    .bg-panel.bg-show .bg-ch:nth-child(7)  { animation-delay: 0.24s; }
    .bg-panel.bg-show .bg-ch:nth-child(9)  { animation-delay: 0.32s; }
    .bg-panel.bg-show .bg-ch:nth-child(11) { animation-delay: 0.40s; }

    /* Info / key / teal boxes slide up */
    .bg-panel.bg-show .bg-keybox,
    .bg-panel.bg-show .bg-infobox,
    .bg-panel.bg-show .bg-tealbox,
    .bg-panel.bg-show .bg-why {
      animation: fg-fadeUp 0.4s ease 0.25s both;
    }

    /* SVG cascade lines animate on load */
    .fg-cascade-line {
      stroke-dasharray: 200;
      animation: fg-drawLine 0.6s ease forwards;
    }
    .fg-cascade-line:nth-child(1)  { animation-delay: 0.1s; }
    .fg-cascade-line:nth-child(2)  { animation-delay: 0.3s; }
    .fg-cascade-line:nth-child(3)  { animation-delay: 0.5s; }
    .fg-cascade-line:nth-child(4)  { animation-delay: 0.7s; }
    .fg-cascade-line:nth-child(5)  { animation-delay: 0.9s; }

    /* Nav button active state transition */
    .bg-sn {
      transition: background 0.18s ease, color 0.18s ease, border-color 0.18s ease, transform 0.12s ease;
    }
    .bg-sn:active { transform: scale(0.96); }
    .bg-sn.bg-active {
      background: #1f2937;
      color: #fff;
      border-color: #1f2937;
    }
  `,

  // -- RELAY ROWS ---------------------------------------------
  relay: {

    "Step 1: Pre-Autopsy Prerequisites": [
      {
        step: 1,
        title: "Who Receives the Requisition?",
        text: "In Govt Medical Colleges, the <b>Professor of Forensic Medicine / Police Surgeon</b> receives PM requests. In their absence: Associate Professor &rarr; Assistant Professor. In other hospitals, the <b>CMO / RMO</b> obliges. No Medical Officer can refuse an autopsy citing personal interest."
      },
      {
        step: 2,
        title: "Timing Rules",
        text: "Requisitions accepted <b>only up to 4:00 PM</b>. Cases received before 4 PM may proceed <b>till 6 PM</b>. Exception: <b>Court order</b> must be obeyed immediately. <b>District Collector's explicit order</b> in law &amp; order situations allows beyond-hours work."
      },
      {
        step: 3,
        title: "Who Can Give the Requisition Letter?",
        text: "<b>Routine cases:</b> Police officer &ge; Sub-Inspector (Police Station) or &ge; Senior Head Constable (Out Post).<br><b>Magistrate inquest required for:</b> Custodial deaths, rape in custody, disappearance in custody, dowry-allegation deaths, and exhumation cases."
      },
      {
        step: 4,
        title: "Documents to Collect",
        text: "Collect and attach (numbered) to PM Booklet (Medl. I-28):<br>&bull; Requisition for PM examination<br>&bull; Case history<br>&bull; Form 86 / details of dead body<br>&bull; SOC sketch &amp; FIR copy<br>&bull; A.R. copies &amp; Death Intimation copy<br>&bull; Treatment particulars (if treated elsewhere)"
      }
    ],

    "Step 2: Conduct of Autopsy": [
      {
        step: 1,
        title: "Who Is Authorised Inside?",
        text: "Only these persons are authorised during autopsy:<br>&bull; Conducting Medical Officer(s)<br>&bull; Required departmental technicians<br>&bull; Mortuary attendants<br>&bull; Body in-charge constable<br><br><b>NOT allowed</b> without explicit Govt/Court order + IO's NOC: other MOs, lawyers, common public."
      },
      {
        step: 2,
        title: "Documentation During Autopsy",
        text: "All findings &mdash; positive AND negative &mdash; entered <b>during</b> the autopsy in <b>Medl. I-28 booklet (16 pages)</b>. One booklet per case only. MO decides dissection technique at the start. Department sealed with <b>wax impression</b> daily."
      },
      {
        step: 3,
        title: "Videography Rules",
        text: "Permitted <b>only on written request from a relative/friend of deceased</b> with IO's knowledge. Recorded video <b>sealed and sent to the Magistrate</b>. IO may attend at MO's discretion but must not obstruct."
      },
      {
        step: 4,
        title: "After Autopsy &mdash; Handover",
        text: "Body packed neatly in khada cloth and plastic sheet. Jewellery &amp; belongings handed to in-charge constable with <b>signed receipt on the same day</b>. PM certificate (Medl. I-29): <b>Original &rarr; Magistrate (sealed); Duplicate &rarr; IO; Triplicate &rarr; Department.</b>"
      }
    ],

    "Step 3: Special Situations": [
      {
        step: 1,
        title: "Custodial / Police Action Deaths",
        text: "Team of <b>&ge; 2 doctors with MD Forensic Medicine</b> mandatory. Family must view body (front + back) before autopsy. <b>Whole-body X-ray / CT scan before dissection.</b> Body preserved <b>48 hours</b> if family declares intent to approach High Court."
      },
      {
        step: 2,
        title: "Photography &amp; Videography &mdash; Custodial",
        text: "<b>20&ndash;25 coloured photographs</b>: face (3 views), torso front/back, upper/lower extremities, each numbered injury. Entire autopsy videographed in <b>6 phases</b>: bearings &rarr; external &rarr; injuries &rarr; cavity &rarr; head &rarr; trunk. MO narrates aloud; date/time superimposed."
      },
      {
        step: 3,
        title: "HIV / Biologically Hazardous Cases",
        text: "Minimum staff. HIV body wrapped in plastic, kept <b>3 days</b> before dissection. All orifices plugged. Equipment soaked in <b>2% glutaraldehyde or 10% hypochlorite</b>. Staff: Chest X-ray every 6 months, TT every 6 months, Hepatitis B immunisation."
      },
      {
        step: 4,
        title: "Exhumation",
        text: "<b>Executive Magistrate's written order mandatory</b> (Sec 196(4) BNSS). Natural daylight only. Site screened from public. Identity verified before Magistrate holds inquest and hands over requisition to medical team."
      }
    ],

    "Case: General Autopsy": [
      {
        step: 1,
        title: "Authorization Check",
        text: "Verify Police Requisition and Body Challan. Cross-check identity marks (moles, tattoos, scars) against the Inquest Report before the first incision. No autopsy without proper requisition."
      },
      {
        step: 2,
        title: "Dignity &amp; Confidentiality",
        text: "Close mortuary doors. Only authorized personnel permitted. Professionalism forbids unauthorized bystanders. Maintain dignity and secrecy of dead body and findings at all times."
      },
      {
        step: 3,
        title: "Real-Time Recording",
        text: "Dictate and enter findings into <b>Medl. I-28 booklet during the autopsy</b>. Never rely on memory. Note all positive AND negative findings. Dissection technique decided at the start &mdash; no unscientific method."
      },
      {
        step: 4,
        title: "Handover Protocol",
        text: "Reconstruct and pack body neatly. Hand all jewellery to constable with signed receipt. PM File (booklet + notes + certificates) handed to Professor of FM on the same day."
      }
    ],

    "Case: Custodial Death": [
      {
        step: 1,
        title: "The Board",
        text: "Conduct autopsy with a team of <b>at least two doctors with MD Forensic Medicine</b> attached to a Medical College. Transparency is the shield against allegations of bias."
      },
      {
        step: 2,
        title: "Judicial Command",
        text: "Inquest by <b>Judicial Magistrate (Sec 176(1A) CrPC)</b>. Family must view body front and back, allowed to take photos/video. No autopsy commences without next of kin having seen the body."
      },
      {
        step: 3,
        title: "Continuous Videography",
        text: "Unedited video across all 6 phases. Capture all external injuries before dissection. MO narrates observations aloud. Sealed video chip dispatched to Magistrate &rarr; NHRC same day."
      },
      {
        step: 4,
        title: "Injury Mapping",
        text: "Document every bruise with precise location (distance from heel and midline). Distinguish CPR/therapeutic marks from signs of torture. Deep contusions: long incisions to expose muscular tissue. Whole-body X-ray/CT before autopsy."
      }
    ],

    "Case: Dowry Death": [
      {
        step: 1,
        title: "Executive Authority",
        text: "Suspicious death <b>within 7 years of marriage</b> (Sec 304B IPC). Requires autopsy on request from an <b>Executive Magistrate (RDO)</b>. Verify the specific written Magistrate letter before proceeding."
      },
      {
        step: 2,
        title: "Sexual Assault Screening",
        text: "Routine professional screening for sexual assault. Collect and <b>air-dry vaginal, anal, and oral swabs</b>. Document perineal and genital findings systematically."
      },
      {
        step: 3,
        title: "Ligature Mark Analysis",
        text: "Document level, direction, width, depth, and <b>continuity of neck marks</b>. Dissect neck muscles in layers. Examine hyoid bone and thyroid cartilage in situ. Critical to differentiate suicide from homicide."
      },
      {
        step: 4,
        title: "Reserved Opinion",
        text: "Use <b>Medl. I-29</b> format. Issue provisional opinion with 'pending chemical analysis / histopathology' noted. <b>Reserve final opinion</b> until all FSL reports received. Avoid 'probably' in final cause of death."
      }
    ],

    "Case: Exhumation": [
      {
        step: 1,
        title: "Written Warrant",
        text: "Never proceed without a <b>written order from an Executive or Judicial Magistrate</b> (Sec 196(4) BNSS). Body identified by relatives/accused/graveyard worker/constable at the gravesite."
      },
      {
        step: 2,
        title: "Soil Controls",
        text: "Collect <b>control soil samples (~500g each)</b> from above, below, and sides of the body. Fluid/debris in coffin also collected. Rules out environmental leaching of poisons into viscera."
      },
      {
        step: 3,
        title: "Natural Light &amp; Transparency",
        text: "Exhumation in <b>natural daylight only</b>. Screen area from public view. Record depth (skull to surface, feet to surface) and distance from permanent landmarks."
      },
      {
        step: 4,
        title: "Decomposition &amp; Documentation",
        text: "Document adipocere, mummification, or skeletonisation. <b>Burial artifacts must be interpreted correctly</b> &mdash; do not confuse decomposition changes with antemortem injuries. All viscera preserved for chemical analysis."
      }
    ],

    // -- METHYL ALCOHOL POISONING — COMPLETE TOPIC ------------
    "Toxicology: Methyl Alcohol Poisoning": [
      {
        step: 1,
        title: "Properties, Sources &amp; Fatal Dose",
        text: `<b>Methyl alcohol (Methanol, CH<sub>3</sub>OH) &mdash; wood spirit</b><br><br>
<b>Properties:</b> Colourless, volatile liquid. Smell and taste similar to ethyl alcohol. Cannot be distinguished by taste alone &mdash; forensically critical. Burns with a colourless flame.<br><br>
<b>Sources of poisoning:</b><br>
&bull; Adulterated illicit liquor (hooch &mdash; most common in India)<br>
&bull; Surgical spirit, antifreeze, industrial solvents, paint removers<br>
&bull; Accidental ingestion or deliberate substitution<br><br>
<b>Fatal dose:</b> <b>30 mL (1 oz)</b> &mdash; but highly variable. As little as <b>10 mL</b> can cause permanent blindness. As little as <b>15 mL</b> has caused death. Susceptibility varies with nutritional status and co-ingestion of ethanol.<br><br>
<b>Why ethanol co-ingestion matters:</b> Ethanol competes with methanol for the same enzyme (ADH), slowing conversion to toxic metabolites. This is why hooch victims who also drank ethanol sometimes survive or present late &mdash; the <b>latent period is prolonged</b>.`
      },
      {
        step: 2,
        title: "The Toxic Cascade &mdash; Mechanism",
        text: `<b>Methanol itself is NOT the toxin. Its metabolites are.</b><br><br>
<b>Step-by-step breakdown:</b><br><br>
<b>Methanol</b> &rarr;<i>(Alcohol dehydrogenase &mdash; ADH)</i>&rarr; <b>Formaldehyde</b> &rarr;<i>(Aldehyde dehydrogenase)</i>&rarr; <b>Formic acid / Formate</b><br><br>
<b>Formaldehyde</b> &mdash; extremely toxic to retinal cells but is so rapidly converted to formate that it has minimal systemic duration.<br><br>
<b>Formic acid (formate) = the key toxin:</b><br>
&bull; Inhibits <b>Cytochrome c oxidase (Complex IV)</b> of the mitochondrial electron transport chain<br>
&bull; Halts ATP production in all cells<br>
&bull; The cells most dependent on oxidative metabolism &mdash; <b>retinal ganglion cells</b> and <b>putamen</b> &mdash; are the first and most severely damaged<br><br>
<b>Result:</b> High anion gap metabolic acidosis + selective injury to optic nerve and basal ganglia<br><br>
<b>Memory hook:</b> Methanol &rarr; ADH &rarr; Formaldehyde &rarr; Formate &rarr; <b>Formate blocks Complex IV &rarr; Cell can't breathe &rarr; Retina and putamen go dark first</b>`
      },
      {
        step: 3,
        title: "The Latent Period &amp; Clinical Features",
        text: `<b>The latent period &mdash; most important clinical feature of methanol poisoning</b><br><br>
<b>Duration: 12&ndash;24 hours</b> (range 6&ndash;36 hrs). During this time the patient appears drunk but is relatively well &mdash; methanol is being metabolised slowly but formate is not yet at toxic levels.<br><br>
<b>Prolonged by:</b> Co-ingestion of ethanol (ADH competition), folate deficiency (slows formate clearance), refrigeration (slows metabolism).<br><br>
<b>Clinical features in sequence:</b><br><br>
<b>Early (0&ndash;12 h) &mdash; methanol phase:</b><br>
&bull; Inebriation similar to ethyl alcohol &mdash; but <b>less euphoria, more confusion</b><br>
&bull; Nausea, vomiting, headache, vertigo<br>
&bull; Visual symptoms may begin: blurring, "snowfield" vision<br><br>
<b>Late (12&ndash;48 h) &mdash; formate phase:</b><br>
&bull; <b>Visual disturbances</b>: blurring &rarr; "snowfield" vision &rarr; complete blindness<br>
&bull; Pupils: dilated, sluggish or fixed (direct retinal/optic nerve toxicity)<br>
&bull; <b>Kussmaul breathing</b> (deep rapid breathing &mdash; compensating for metabolic acidosis)<br>
&bull; Abdominal pain, vomiting<br>
&bull; Bradycardia, hypotension<br>
&bull; Convulsions, extrapyramidal signs (rigidity, bradykinesia)<br>
&bull; Coma &rarr; <b>respiratory failure &rarr; death</b><br><br>
<b>Classic triad for exams:</b> Intoxication + Visual disturbance + Metabolic acidosis = Methanol poisoning until proved otherwise.`
      },
      {
        step: 4,
        title: "Diagnosis &mdash; Gaps and Levels",
        text: `<b>Two key gaps to calculate in suspected methanol poisoning:</b><br><br>
<b>1. Osmolal gap (early &mdash; before metabolism):</b><br>
Measured osmolality &#8722; Calculated osmolality<br>
Calculated = 2&times;Na + Glucose/18 + BUN/2.8<br>
<b>Normal gap: &lt;10 mOsm/kg</b>. In methanol poisoning, methanol itself contributes to osmolality &mdash; gap is elevated early before metabolism is complete.<br><br>
<b>2. Anion gap (late &mdash; after metabolism):</b><br>
Na &#8722; (Cl + HCO<sub>3</sub>). <b>Normal: 8&ndash;12 mEq/L</b>. In methanol poisoning, formic acid is an unmeasured anion &mdash; gap rises as formate accumulates.<br>
<b>AG &gt;20 with pH &lt;7.3 = severe poisoning</b><br><br>
<b>Key insight:</b> Early cases show high osmolal gap with normal anion gap (methanol not yet metabolised). Late cases show high anion gap with normalised osmolal gap (methanol fully converted to formate). This gap crossover is diagnostically useful.<br><br>
<b>Direct measurements:</b><br>
&bull; Serum methanol level: <b>&gt;25 mg% = haemodialysis indicated</b>; &gt;50 mg% = severe<br>
&bull; Serum formic acid level &mdash; correlates with degree of putaminal and retinal injury<br>
&bull; ABG: metabolic acidosis (&#8595;pH, &#8595;HCO<sub>3</sub>, &#8595;PaCO<sub>2</sub> as compensation)<br>
&bull; Blood glucose, electrolytes, renal function<br><br>
<b>Ophthalmology:</b> Fundoscopy &mdash; retinal oedema, disc hyperaemia, later optic atrophy<br>
<b>CT brain:</b> Bilateral symmetrical hypodensity in putamen (24&ndash;48 h), haemorrhagic transformation in severe cases`
      },
      {
        step: 5,
        title: "Treatment &mdash; Complete with Doses",
        text: `<b>Treatment must be started IMMEDIATELY &mdash; even before methanol levels return.</b><br><br>
<b>1. Secure ABC + IV access</b><br><br>
<b>2. Gastric lavage</b><br>
&bull; Only if &lt;1&ndash;2 hours since ingestion<br>
&bull; Use <b>sodium bicarbonate solution</b> for lavage<br>
&bull; Activated charcoal does NOT bind methanol &mdash; not useful<br><br>
<b>3. Antidotes &mdash; BLOCK ADH (most critical step)</b><br>
&bull; <b>Fomepizole (4-methylpyrazole)</b> &mdash; preferred antidote<br>
  &nbsp;&nbsp;Loading dose: <b>15 mg/kg IV</b> over 30 min<br>
  &nbsp;&nbsp;Maintenance: 10 mg/kg IV every 12 hrs &times; 4 doses, then 15 mg/kg every 12 hrs<br>
  &nbsp;&nbsp;Advantages: no CNS depression, precise dosing, no monitoring needed<br>
&bull; <b>Ethanol</b> &mdash; if fomepizole unavailable<br>
  &nbsp;&nbsp;Loading: <b>0.6 g/kg IV</b> (10% ethanol in D5W) or orally (whisky/vodka 1 mL/kg)<br>
  &nbsp;&nbsp;Maintain blood ethanol at <b>100&ndash;150 mg/dL</b> &mdash; competes with methanol for ADH<br>
  &nbsp;&nbsp;Disadvantages: CNS/respiratory depression, frequent monitoring, hypoglycaemia<br><br>
<b>4. Folinic acid (leucovorin)</b> &mdash; clears formate<br>
&bull; <b>1&ndash;2 mg/kg IV every 6 hours</b><br>
&bull; Cofactor for formate &rarr; CO<sub>2</sub> + H<sub>2</sub>O conversion<br>
&bull; Continue until methanol undetectable<br><br>
<b>5. Sodium bicarbonate</b> &mdash; correct acidosis<br>
&bull; <b>500&ndash;800 mL of 7.5% NaHCO<sub>3</sub> IV slowly</b><br>
&bull; Target pH &gt;7.35<br>
&bull; Also reduces formate toxicity (ionised formate crosses blood-brain barrier less)<br><br>
<b>6. Haemodialysis &mdash; Indications:</b><br>
&bull; Methanol level <b>&gt;25&ndash;50 mg%</b><br>
&bull; Metabolic acidosis refractory to treatment (pH &lt;7.3)<br>
&bull; Visual impairment or any neurological symptoms<br>
&bull; Renal failure<br>
&bull; Ingestion of large amount even without symptoms<br>
&bull; Removes: methanol + formaldehyde + formate simultaneously<br>
&bull; Continue until methanol undetectable and pH normalised<br><br>
<b>7. Supportive ICU care:</b><br>
&bull; Diazepam / lorazepam for convulsions<br>
&bull; Vasopressors for hypotension<br>
&bull; Mechanical ventilation if respiratory failure<br>
&bull; Monitor glucose (ethanol therapy causes hypoglycaemia)`
      },
      {
        // ── FIX: SVG cascade lines now have class="fg-cascade-line"
        // so they animate via CSS (stroke-dasharray draw-on effect).
        // No inline <script> needed here.
        step: 6,
        title: "Toxic Cascade + Treatment Map (Diagram)",
        text: `<div style="font-family:sans-serif; font-size:13px; margin-bottom:10px; display:flex; gap:12px; flex-wrap:wrap;">
  <span style="display:flex;align-items:center;gap:5px;"><span style="width:12px;height:12px;border-radius:3px;background:#EF9F27;display:inline-block;"></span>Methanol cascade</span>
  <span style="display:flex;align-items:center;gap:5px;"><span style="width:12px;height:12px;border-radius:3px;background:#E24B4A;display:inline-block;"></span>Toxic injury</span>
  <span style="display:flex;align-items:center;gap:5px;"><span style="width:12px;height:12px;border-radius:3px;background:#1D9E75;display:inline-block;"></span>Antidotes</span>
  <span style="display:flex;align-items:center;gap:5px;"><span style="width:12px;height:12px;border-radius:3px;background:#378ADD;display:inline-block;"></span>Supportive</span>
  <span style="display:flex;align-items:center;gap:5px;"><span style="width:12px;height:12px;border-radius:3px;background:#7F77DD;display:inline-block;"></span>Elimination</span>
</div>
<svg width="100%" viewBox="0 0 680 720" role="img" style="max-width:660px;display:block;">
<defs>
  <marker id="arr"  viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M2 1L8 5L2 9" fill="none" stroke="#BA7517" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></marker>
  <marker id="rarr" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M2 1L8 5L2 9" fill="none" stroke="#A32D2D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></marker>
  <marker id="tarr" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M2 1L8 5L2 9" fill="none" stroke="#1D9E75" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></marker>
  <marker id="barr" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M2 1L8 5L2 9" fill="none" stroke="#378ADD" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></marker>
  <marker id="parr" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M2 1L8 5L2 9" fill="none" stroke="#7F77DD" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></marker>
</defs>
<!-- Headers -->
<text font-size="11" fill="#888" x="175" y="20" text-anchor="middle">TOXIC CASCADE</text>
<text font-size="11" fill="#1D9E75" x="490" y="20" text-anchor="middle">TREATMENT</text>
<!-- Step 1 Ingestion -->
<rect x="75" y="30" width="200" height="48" rx="7" fill="#FEF3DC" stroke="#EF9F27" stroke-width="1"/>
<text font-size="13" font-weight="600" fill="#854F0B" x="175" y="50" text-anchor="middle">Methanol ingested</text>
<text font-size="11" fill="#854F0B" x="175" y="67" text-anchor="middle">Absorbed 30&ndash;60 min &middot; 30 mL fatal</text>
<path class="fg-cascade-line" d="M277 54 L338 54" fill="none" stroke="#378ADD" stroke-width="1.5" marker-end="url(#barr)"/>
<rect x="340" y="30" width="200" height="48" rx="7" fill="#E6F1FB" stroke="#378ADD" stroke-width="1"/>
<text font-size="13" font-weight="600" fill="#185FA5" x="440" y="50" text-anchor="middle">Gastric lavage</text>
<text font-size="11" fill="#185FA5" x="440" y="67" text-anchor="middle">NaHCO<tspan baseline-shift="sub" font-size="9">3</tspan> solution &mdash; within 1&ndash;2 h</text>
<!-- Arrow 1→2 -->
<line class="fg-cascade-line" x1="175" y1="80" x2="175" y2="118" stroke="#EF9F27" stroke-width="1.5" marker-end="url(#arr)"/>
<text font-size="10" fill="#888" x="184" y="104">ADH enzyme</text>
<!-- Step 2 Formaldehyde -->
<rect x="75" y="120" width="200" height="48" rx="7" fill="#FEF3DC" stroke="#EF9F27" stroke-width="1"/>
<text font-size="13" font-weight="600" fill="#854F0B" x="175" y="140" text-anchor="middle">Formaldehyde</text>
<text font-size="11" fill="#854F0B" x="175" y="157" text-anchor="middle">Rapidly converted &rarr; formate</text>
<path class="fg-cascade-line" d="M277 144 L338 144" fill="none" stroke="#1D9E75" stroke-width="1.5" marker-end="url(#tarr)"/>
<rect x="340" y="110" width="200" height="66" rx="7" fill="#E1F5EE" stroke="#1D9E75" stroke-width="1.5"/>
<text font-size="13" font-weight="600" fill="#0F6E56" x="440" y="132" text-anchor="middle">Fomepizole / Ethanol</text>
<text font-size="11" fill="#0F6E56" x="440" y="149" text-anchor="middle">Block ADH &mdash; stop cascade here</text>
<text font-size="11" fill="#0F6E56" x="440" y="166" text-anchor="middle">Start ASAP, even before lab results</text>
<!-- Arrow 2→3 -->
<line class="fg-cascade-line" x1="175" y1="170" x2="175" y2="208" stroke="#EF9F27" stroke-width="1.5" marker-end="url(#arr)"/>
<text font-size="10" fill="#888" x="184" y="194">Aldehyde DH</text>
<!-- Step 3 Formic acid -->
<rect x="75" y="210" width="200" height="64" rx="7" fill="#FCEBEB" stroke="#E24B4A" stroke-width="1.5"/>
<text font-size="13" font-weight="600" fill="#791F1F" x="175" y="232" text-anchor="middle">Formic acid &#9888; KEY TOXIN</text>
<text font-size="11" fill="#791F1F" x="175" y="249" text-anchor="middle">Blocks Complex IV (cytochrome c</text>
<text font-size="11" fill="#791F1F" x="175" y="264" text-anchor="middle">oxidase) &rarr; ATP failure</text>
<path class="fg-cascade-line" d="M277 242 L338 242" fill="none" stroke="#1D9E75" stroke-width="1.5" marker-end="url(#tarr)"/>
<rect x="340" y="220" width="200" height="66" rx="7" fill="#E1F5EE" stroke="#1D9E75" stroke-width="1"/>
<text font-size="13" font-weight="600" fill="#0F6E56" x="440" y="242" text-anchor="middle">Folinic acid (leucovorin)</text>
<text font-size="11" fill="#0F6E56" x="440" y="259" text-anchor="middle">1&ndash;2 mg/kg IV every 6 hrs</text>
<text font-size="11" fill="#0F6E56" x="440" y="276" text-anchor="middle">Converts formate &rarr; CO<tspan baseline-shift="sub" font-size="9">2</tspan> + H<tspan baseline-shift="sub" font-size="9">2</tspan>O</text>
<!-- Branches to acidosis and optic/putamen -->
<line class="fg-cascade-line" x1="175" y1="276" x2="120" y2="318" stroke="#A32D2D" stroke-width="1.5" marker-end="url(#rarr)"/>
<line class="fg-cascade-line" x1="175" y1="276" x2="230" y2="318" stroke="#A32D2D" stroke-width="1.5" stroke-dasharray="4 3" marker-end="url(#rarr)"/>
<!-- Step 4A Metabolic acidosis -->
<rect x="30" y="320" width="170" height="52" rx="7" fill="#FCEBEB" stroke="#E24B4A" stroke-width="1"/>
<text font-size="12" font-weight="600" fill="#791F1F" x="115" y="342" text-anchor="middle">Metabolic acidosis</text>
<text font-size="11" fill="#791F1F" x="115" y="360" text-anchor="middle">pH &lt;7.0 &middot; AG &gt;20</text>
<path class="fg-cascade-line" d="M202 346 L280 390 L338 390" fill="none" stroke="#378ADD" stroke-width="1.5" marker-end="url(#barr)"/>
<rect x="340" y="366" width="200" height="52" rx="7" fill="#E6F1FB" stroke="#378ADD" stroke-width="1"/>
<text font-size="13" font-weight="600" fill="#185FA5" x="440" y="388" text-anchor="middle">NaHCO<tspan baseline-shift="sub" font-size="9">3</tspan> IV</text>
<text font-size="11" fill="#185FA5" x="440" y="405" text-anchor="middle">500&ndash;800 mL of 7.5% &mdash; slow infusion</text>
<!-- Step 4B Optic+Putamen -->
<rect x="204" y="320" width="160" height="52" rx="7" fill="#FCEBEB" stroke="#E24B4A" stroke-width="1"/>
<text font-size="12" font-weight="600" fill="#791F1F" x="284" y="340" text-anchor="middle">Optic + Putamen</text>
<text font-size="11" fill="#791F1F" x="284" y="358" text-anchor="middle">Necrosis &middot; CT bilateral hypodensity</text>
<!-- Haemodialysis -->
<path class="fg-cascade-line" d="M277 252 L308 252 L308 448 L338 448" fill="none" stroke="#7F77DD" stroke-width="1.5" marker-end="url(#parr)"/>
<rect x="340" y="432" width="200" height="80" rx="7" fill="#EEEDFE" stroke="#7F77DD" stroke-width="1.5"/>
<text font-size="13" font-weight="600" fill="#534AB7" x="440" y="456" text-anchor="middle">Haemodialysis</text>
<text font-size="11" fill="#534AB7" x="440" y="473" text-anchor="middle">Removes methanol + formate</text>
<text font-size="11" fill="#534AB7" x="440" y="490" text-anchor="middle">+ formaldehyde simultaneously</text>
<text font-size="11" fill="#534AB7" x="440" y="507" text-anchor="middle">Indicated if level &gt;25&ndash;50 mg%</text>
<!-- Arrow to convulsions -->
<line class="fg-cascade-line" x1="175" y1="374" x2="175" y2="536" stroke="#791F1F" stroke-width="1.5" marker-end="url(#rarr)"/>
<!-- Step 5 Convulsions/coma -->
<rect x="60" y="538" width="230" height="66" rx="7" fill="#FCEBEB" stroke="#E24B4A" stroke-width="1"/>
<text font-size="13" font-weight="600" fill="#791F1F" x="175" y="560" text-anchor="middle">Convulsions / coma</text>
<text font-size="11" fill="#791F1F" x="175" y="577" text-anchor="middle">Putaminal necrosis &middot; raised ICP</text>
<text font-size="11" fill="#791F1F" x="175" y="593" text-anchor="middle">Bradycardia &middot; hypotension</text>
<path class="fg-cascade-line" d="M292 560 L338 560" fill="none" stroke="#378ADD" stroke-width="1.5" marker-end="url(#barr)"/>
<rect x="340" y="526" width="200" height="80" rx="7" fill="#E6F1FB" stroke="#378ADD" stroke-width="1"/>
<text font-size="13" font-weight="600" fill="#185FA5" x="440" y="548" text-anchor="middle">ICU Supportive care</text>
<text font-size="11" fill="#185FA5" x="440" y="565" text-anchor="middle">Diazepam / lorazepam</text>
<text font-size="11" fill="#185FA5" x="440" y="581" text-anchor="middle">for convulsions</text>
<text font-size="11" fill="#185FA5" x="440" y="597" text-anchor="middle">Vasopressors &middot; correct hypoglycaemia</text>
<!-- Arrow to resp failure -->
<line class="fg-cascade-line" x1="175" y1="606" x2="175" y2="654" stroke="#791F1F" stroke-width="2" marker-end="url(#rarr)"/>
<!-- Step 6 Respiratory failure -->
<rect x="60" y="656" width="230" height="52" rx="7" fill="#FCEBEB" stroke="#E24B4A" stroke-width="2"/>
<text font-size="13" font-weight="600" fill="#791F1F" x="175" y="678" text-anchor="middle">Respiratory failure</text>
<text font-size="11" fill="#791F1F" x="175" y="695" text-anchor="middle">PRIMARY cause of death in methanol</text>
<path class="fg-cascade-line" d="M292 682 L338 682" fill="none" stroke="#378ADD" stroke-width="1.5" marker-end="url(#barr)"/>
<rect x="340" y="656" width="200" height="52" rx="7" fill="#E6F1FB" stroke="#378ADD" stroke-width="1"/>
<text font-size="13" font-weight="600" fill="#185FA5" x="440" y="678" text-anchor="middle">Mechanical ventilation</text>
<text font-size="11" fill="#185FA5" x="440" y="695" text-anchor="middle">Intubate early &middot; ICU admission</text>
<!-- Timing rail -->
<line x1="22" y1="30" x2="22" y2="720" stroke="#ccc" stroke-width="0.5" stroke-dasharray="3 3"/>
<text font-size="10" fill="#888" x="16" y="58" text-anchor="middle">0h</text>
<text font-size="10" fill="#888" x="16" y="148" text-anchor="middle">1h</text>
<text font-size="10" fill="#888" x="16" y="244" text-anchor="middle">12h</text>
<text font-size="10" fill="#888" x="16" y="350" text-anchor="middle">24h</text>
<text font-size="10" fill="#888" x="16" y="490" text-anchor="middle">36h</text>
<text font-size="10" fill="#888" x="16" y="610" text-anchor="middle">48h</text>
<text font-size="10" fill="#888" x="16" y="682" text-anchor="middle">late</text>
</svg>`
      },
      {
        // ── FIX: <script> tag REMOVED from text string.
        // bgShow() is now defined in your main JS file (see top comment).
        // The CSS for .bg-panel/.bg-sn is kept here because it scopes
        // styles to this step's content only — that is safe via innerHTML.
        // The animation classes (.bg-show, .bg-card, .bg-ch) are driven
        // by CSS in forensicContent._animationCSS injected into <head>.
        step: 7,
        title: "Why Putamen? Basal Ganglia Mechanism (Diagram)",
        text: `<style>
.bg-wrap{font-family:sans-serif;font-size:13px;}
.bg-step-nav{display:flex;gap:6px;flex-wrap:wrap;margin-bottom:14px;}
.bg-sn{padding:5px 12px;font-size:12px;border-radius:20px;border:1px solid #ddd;cursor:pointer;color:#555;background:#fff;transition:all .15s;}
.bg-sn.bg-active{background:#1f2937;color:#fff;border-color:#1f2937;}
.bg-panel{display:none;}
.bg-panel.bg-show{display:block;}
.bg-why{background:#f8f6f2;border-radius:10px;padding:12px 16px;margin-bottom:12px;border:1px solid #e8e4db;}
.bg-why-title{font-size:14px;font-weight:600;color:#1a1a1a;margin-bottom:6px;}
.bg-why-text{font-size:13px;color:#444;line-height:1.65;}
.bg-grid{display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-bottom:12px;}
.bg-card{background:#fff;border:1px solid #e0ddd6;border-radius:8px;padding:10px 12px;}
.bg-fc-mech{font-size:11px;font-weight:600;text-transform:uppercase;letter-spacing:.06em;color:#854F0B;margin-bottom:4px;}
.bg-fc-find{font-size:11px;font-weight:600;text-transform:uppercase;letter-spacing:.06em;color:#185FA5;margin-bottom:4px;}
.bg-fc-exam{font-size:11px;font-weight:600;text-transform:uppercase;letter-spacing:.06em;color:#0F6E56;margin-bottom:4px;}
.bg-fc-diff{font-size:11px;font-weight:600;text-transform:uppercase;letter-spacing:.06em;color:#A32D2D;margin-bottom:4px;}
.bg-fc-text{font-size:13px;color:#222;line-height:1.5;}
.bg-chain{display:flex;align-items:center;gap:6px;flex-wrap:wrap;margin:10px 0;}
.bg-ch{font-size:12px;font-weight:500;padding:4px 10px;border-radius:20px;}
.bg-amber{background:#FAEEDA;color:#854F0B;}
.bg-red{background:#FCEBEB;color:#A32D2D;}
.bg-purple{background:#EEEDFE;color:#534AB7;}
.bg-arr{font-size:13px;color:#aaa;}
.bg-keybox{border-left:3px solid #E24B4A;padding:8px 14px;background:#FCEBEB;margin-bottom:10px;border-radius:0 6px 6px 0;}
.bg-keybox p{font-size:13px;color:#791F1F;line-height:1.6;}
.bg-infobox{border-left:3px solid #378ADD;padding:8px 14px;background:#E6F1FB;margin-bottom:10px;border-radius:0 6px 6px 0;}
.bg-infobox p{font-size:13px;color:#185FA5;line-height:1.6;}
.bg-tealbox{border-left:3px solid #1D9E75;padding:8px 14px;background:#E1F5EE;margin-bottom:10px;border-radius:0 6px 6px 0;}
.bg-tealbox p{font-size:13px;color:#0F6E56;line-height:1.6;}
</style>
<div class="bg-wrap">
<div class="bg-step-nav">
  <button class="bg-sn bg-active" onclick="bgShow(0)">1 &middot; Why putamen?</button>
  <button class="bg-sn" onclick="bgShow(1)">2 &middot; Injury mechanism</button>
  <button class="bg-sn" onclick="bgShow(2)">3 &middot; Clinical findings</button>
  <button class="bg-sn" onclick="bgShow(3)">4 &middot; Imaging</button>
  <button class="bg-sn" onclick="bgShow(4)">5 &middot; Differentials</button>
</div>

<div class="bg-panel bg-show" id="bgp0">
  <div class="bg-why">
    <div class="bg-why-title">The putamen is the most metabolically active region in the brain</div>
    <div class="bg-why-text">The putamen (part of basal ganglia / striatum) has one of the highest rates of oxidative metabolism in the CNS. This makes it exceptionally dependent on mitochondrial function &mdash; and therefore exceptionally vulnerable to anything that blocks energy production.</div>
  </div>
  <div class="bg-chain">
    <span class="bg-ch bg-amber">Methanol</span><span class="bg-arr">&rarr;</span>
    <span class="bg-ch bg-amber">Formaldehyde</span><span class="bg-arr">&rarr;</span>
    <span class="bg-ch bg-red">Formic acid</span><span class="bg-arr">&rarr;</span>
    <span class="bg-ch bg-red">Complex IV inhibited</span><span class="bg-arr">&rarr;</span>
    <span class="bg-ch bg-purple">Mitochondrial failure</span>
  </div>
  <div class="bg-grid">
    <div class="bg-card"><div class="bg-fc-mech">The culprit</div><div class="bg-fc-text">Formic acid inhibits cytochrome c oxidase (Complex IV) &mdash; the final enzyme in the mitochondrial electron transport chain</div></div>
    <div class="bg-card"><div class="bg-fc-mech">Why basal ganglia?</div><div class="bg-fc-text">High metabolic demand + poor collateral blood supply + end-arterial territory = greatest sensitivity to energy failure</div></div>
    <div class="bg-card"><div class="bg-fc-mech">Why putamen specifically?</div><div class="bg-fc-text">Within basal ganglia, the putamen has the highest dopaminergic activity and densest mitochondrial load &mdash; it is the "first to fall" when energy fails</div></div>
    <div class="bg-card"><div class="bg-fc-mech">What about cortex?</div><div class="bg-fc-text">Cortex is also metabolically active but has better collateral supply. Putamen is end-arterial &mdash; no backup perfusion when local metabolism collapses</div></div>
  </div>
  <div class="bg-infobox"><p><b>Memory hook:</b> Putamen = high demand, no backup. It's like a city with one power line and no generator &mdash; the moment energy fails, it goes dark first.</p></div>
</div>

<div class="bg-panel" id="bgp1">
  <div class="bg-why"><div class="bg-why-title">Four-stage injury cascade</div><div class="bg-why-text">The injury unfolds predictably. Each stage builds on the last &mdash; which is why the latent period exists and why early treatment can interrupt the cascade.</div></div>
  <div class="bg-grid">
    <div class="bg-card"><div class="bg-fc-mech">Stage 1 &middot; Formate accumulates</div><div class="bg-fc-text">Formic acid builds up as methanol metabolises slowly. Takes 12&ndash;24 hrs to reach toxic levels. Ethanol co-ingestion delays this by competing for ADH.</div></div>
    <div class="bg-card"><div class="bg-fc-mech">Stage 2 &middot; Complex IV blocked</div><div class="bg-fc-text">Formate directly inhibits cytochrome c oxidase. Electron transport halts. No ATP. The putamen, with extreme ATP demand, fails first.</div></div>
    <div class="bg-card"><div class="bg-fc-mech">Stage 3 &middot; Cytotoxic oedema</div><div class="bg-fc-text">Without ATP, Na-K-ATPase pumps fail. Sodium floods into cells. Water follows. Cells swell &mdash; cytotoxic oedema (intracellular). Restricts diffusion on MRI.</div></div>
    <div class="bg-card"><div class="bg-fc-mech">Stage 4 &middot; Haemorrhagic necrosis</div><div class="bg-fc-text">In severe/late cases, the swollen tissue infarcts. Capillaries rupture &rarr; haemorrhage into necrotic putamen &mdash; "putaminal haemorrhage" at autopsy.</div></div>
  </div>
  <div class="bg-keybox"><p>The injury is NOT ischaemic &mdash; blood supply is intact. It is a <b>metabolic infarct</b>. The putamen starves of energy despite normal blood flow. This distinction matters for treatment and for MCQs.</p></div>
  <div class="bg-chain">
    <span class="bg-ch bg-red">Formate &#8593;</span><span class="bg-arr">&rarr;</span>
    <span class="bg-ch bg-red">Complex IV blocked</span><span class="bg-arr">&rarr;</span>
    <span class="bg-ch bg-purple">ATP failure</span><span class="bg-arr">&rarr;</span>
    <span class="bg-ch bg-purple">Na-K pump fails</span><span class="bg-arr">&rarr;</span>
    <span class="bg-ch bg-red">Cell swelling</span><span class="bg-arr">&rarr;</span>
    <span class="bg-ch bg-red">Necrosis</span>
  </div>
</div>

<div class="bg-panel" id="bgp2">
  <div class="bg-grid">
    <div class="bg-card"><div class="bg-fc-find">Finding</div><div class="bg-fc-text" style="font-weight:600;margin-bottom:4px">Extrapyramidal symptoms</div><div class="bg-fc-mech" style="margin-top:6px">Why?</div><div class="bg-fc-text">Putamen is part of the motor circuit (basal ganglia &rarr; thalamus &rarr; cortex). Necrosis disrupts motor modulation. Survivors show rigidity, bradykinesia, dystonia &mdash; Parkinson-like picture.</div></div>
    <div class="bg-card"><div class="bg-fc-find">Finding</div><div class="bg-fc-text" style="font-weight:600;margin-bottom:4px">Parkinsonism (late sequela)</div><div class="bg-fc-mech" style="margin-top:6px">Why?</div><div class="bg-fc-text">Dopaminergic neurons in putamen/striatum destroyed. Mirrors idiopathic Parkinson's &mdash; but caused acutely by a toxin destroying the same cells.</div></div>
    <div class="bg-card"><div class="bg-fc-find">Finding</div><div class="bg-fc-text" style="font-weight:600;margin-bottom:4px">Coma / convulsions</div><div class="bg-fc-mech" style="margin-top:6px">Why?</div><div class="bg-fc-text">Bilateral putaminal necrosis disrupts thalamo-cortical circuits. Global energy failure from formic acid also affects cortex and brainstem in severe cases.</div></div>
    <div class="bg-card"><div class="bg-fc-find">Finding</div><div class="bg-fc-text" style="font-weight:600;margin-bottom:4px">High anion gap acidosis</div><div class="bg-fc-mech" style="margin-top:6px">Why?</div><div class="bg-fc-text">Formic acid is an unmeasured anion &mdash; directly widens the anion gap. The more formate, the worse the acidosis and the worse the putaminal injury.</div></div>
    <div class="bg-card"><div class="bg-fc-find">Finding</div><div class="bg-fc-text" style="font-weight:600;margin-bottom:4px">Blindness / optic atrophy</div><div class="bg-fc-mech" style="margin-top:6px">Same mechanism</div><div class="bg-fc-text">Retinal ganglion cells and optic nerve axons have very high mitochondrial density. Formate inhibits Complex IV here too. The retina is the brain's extension &mdash; same vulnerability.</div></div>
    <div class="bg-card"><div class="bg-fc-find">Finding</div><div class="bg-fc-text" style="font-weight:600;margin-bottom:4px">Symmetric bilateral pattern</div><div class="bg-fc-mech" style="margin-top:6px">Why symmetric?</div><div class="bg-fc-text">Formate circulates systemically. Both putamina exposed to identical toxic concentration simultaneously. Symmetry is a diagnostic hallmark &mdash; asymmetric lesions suggest another diagnosis.</div></div>
  </div>
  <div class="bg-tealbox"><p>Clinical pearl: the <b>degree of acidosis correlates with degree of putaminal injury</b>. pH &lt;7.0 almost certainly means significant basal ganglia necrosis is already underway.</p></div>
</div>

<div class="bg-panel" id="bgp3">
  <div class="bg-why"><div class="bg-why-title">What you see on CT / MRI and why</div><div class="bg-why-text">The imaging findings directly reflect the staged injury mechanism.</div></div>
  <div class="bg-grid">
    <div class="bg-card"><div class="bg-fc-exam">CT finding</div><div class="bg-fc-text" style="font-weight:600;margin-bottom:4px">Bilateral hypodensity in putamen</div><div class="bg-fc-mech" style="margin-top:6px">Mechanism</div><div class="bg-fc-text">Cytotoxic oedema lowers tissue density. Hypodensity = water-logged dying tissue. Appears 24&ndash;48 hrs after ingestion.</div></div>
    <div class="bg-card"><div class="bg-fc-exam">CT finding</div><div class="bg-fc-text" style="font-weight:600;margin-bottom:4px">Hyperdensity (haemorrhage)</div><div class="bg-fc-mech" style="margin-top:6px">Mechanism</div><div class="bg-fc-text">In severe/late cases, capillary rupture into necrotic putamen appears bright on CT. Indicates haemorrhagic transformation &mdash; poor prognosis sign.</div></div>
    <div class="bg-card"><div class="bg-fc-exam">MRI finding</div><div class="bg-fc-text" style="font-weight:600;margin-bottom:4px">Restricted diffusion (DWI bright)</div><div class="bg-fc-mech" style="margin-top:6px">Mechanism</div><div class="bg-fc-text">Cytotoxic oedema restricts random water movement. DWI lights up early &mdash; can detect injury before CT. Mirror image on both sides.</div></div>
    <div class="bg-card"><div class="bg-fc-exam">MRI finding</div><div class="bg-fc-text" style="font-weight:600;margin-bottom:4px">T2/FLAIR hyperintensity</div><div class="bg-fc-mech" style="margin-top:6px">Mechanism</div><div class="bg-fc-text">Oedematous necrotic tissue has longer T2 relaxation. Bilateral putaminal T2 hyperintensity in right clinical context = methanol until proven otherwise.</div></div>
  </div>
  <div class="bg-infobox"><p>Exam key: CT shows bilateral areas of necrosis in the putamen &mdash; the textbook phrase. But this is NOT pathognomonic. Wilson's disease and Leigh's disease can look identical. Formic acid level + osmolal gap + clinical history clinches it.</p></div>
</div>

<div class="bg-panel" id="bgp4">
  <div class="bg-why"><div class="bg-why-title">Why CT/MRI alone is not enough</div><div class="bg-why-text">Bilateral putaminal necrosis is a pattern, not a diagnosis. Several conditions target the putamen by the same metabolic mechanism. Always correlate with clinical history and blood tests.</div></div>
  <div class="bg-grid">
    <div class="bg-card"><div class="bg-fc-diff">Differential 1</div><div class="bg-fc-text" style="font-weight:600;margin-bottom:4px">Wilson's disease</div><div class="bg-fc-mech" style="margin-top:6px">How to distinguish</div><div class="bg-fc-text">Copper deposition in basal ganglia. Chronic onset. Kayser-Fleischer rings. Low serum ceruloplasmin. No acidosis, no osmolal gap.</div></div>
    <div class="bg-card"><div class="bg-fc-diff">Differential 2</div><div class="bg-fc-text" style="font-weight:600;margin-bottom:4px">Leigh's disease</div><div class="bg-fc-mech" style="margin-top:6px">How to distinguish</div><div class="bg-fc-text">Mitochondrial disease in children. Genetic cause. Also causes putaminal + brainstem lesions. No toxic history. Elevated CSF lactate.</div></div>
    <div class="bg-card"><div class="bg-fc-diff">Differential 3</div><div class="bg-fc-text" style="font-weight:600;margin-bottom:4px">Carbon monoxide poisoning</div><div class="bg-fc-mech" style="margin-top:6px">How to distinguish</div><div class="bg-fc-text">CO also inhibits Complex IV (same mechanism). Globus pallidus more commonly involved than putamen. Carboxyhemoglobin elevated. Fire/generator exposure history.</div></div>
    <div class="bg-card"><div class="bg-fc-diff">Differential 4</div><div class="bg-fc-text" style="font-weight:600;margin-bottom:4px">Hypoxic-ischaemic injury</div><div class="bg-fc-mech" style="margin-top:6px">How to distinguish</div><div class="bg-fc-text">Cardiac arrest, near-drowning. Diffuse cortical involvement in addition to basal ganglia. No osmolal gap or elevated methanol level.</div></div>
  </div>
  <div class="bg-tealbox"><p>Unifying theme: ALL these conditions damage the putamen by disrupting mitochondrial energy. Methanol (formate &rarr; Complex IV), CO (same), Wilson's (copper toxicity), Leigh's (genetic). Same vulnerable region, different poison.</p></div>
  <div class="bg-why"><div class="bg-why-title">The clincher for methanol</div><div class="bg-why-text">High anion gap acidosis + elevated osmolal gap + detectable formic acid / methanol level + history of illicit alcohol ingestion = methanol poisoning. Imaging confirms extent; biochemistry makes the diagnosis.</div></div>
</div>
</div>`
      },
      {
        step: 8,
        title: "Autopsy Findings &amp; Medico-Legal Aspects",
        text: `<b>POST-MORTEM FINDINGS IN METHANOL POISONING</b><br><br>
<b>External:</b><br>
&bull; Cyanosis &mdash; more marked on <b>upper body and face</b><br>
&bull; Signs of corrosion around mouth (if concentrated methanol)<br>
&bull; Pupils: dilated and fixed<br><br>
<b>Internal:</b><br>
&bull; <b>Pulmonary oedema</b> &mdash; lungs heavy, waterlogged, frothy fluid in airways<br>
&bull; <b>Retinal oedema</b> and optic nerve pallor / atrophy<br>
&bull; <b>Putaminal haemorrhage / necrosis</b> &mdash; bilateral symmetric haemorrhagic softening in basal ganglia<br>
&bull; Gastric mucosa: congestion, erosions if concentrated methanol ingested<br>
&bull; Kidney: tubular necrosis in severe/prolonged cases<br>
&bull; Liver: congestion<br>
&bull; Brain: oedema; CT / gross section shows symmetric haemorrhagic putaminal lesions<br><br>
<b>Characteristic smell:</b> Faint alcoholic odour from viscera and blood<br><br>
<hr style="border-color:#ddd;margin:14px 0;"><br>
<b>VISCERA PRESERVATION &mdash; CRITICAL RULE</b><br><br>
<b>Preserve in: Saturated Sodium Chloride (NaCl) solution</b><br>
<b>NEVER use Rectified Spirit</b> &mdash; methanol is soluble in spirit; using spirit as preservative will dissolve the evidence and give a false negative on chemical analysis.<br><br>
Send: Stomach + contents, Small intestine + contents, Liver (500g), Kidney (half each), Blood (30 mL on gauze, air-dried for serology; peripheral vein), Vitreous humour (alcohol levels better preserved here), Urine<br><br>
<b>Additional samples for methanol specifically:</b><br>
&bull; <b>Vitreous humour</b> &mdash; most important for methanol/ethanol analysis (less affected by post-mortem redistribution)<br>
&bull; <b>Cerebrospinal fluid</b> &mdash; formic acid levels<br>
&bull; <b>Eye fluid</b> &mdash; retinal changes can be confirmed histologically<br><br>
<hr style="border-color:#ddd;margin:14px 0;"><br>
<b>MEDICO-LEGAL ASPECTS</b><br><br>
<b>1. Manner of death:</b> Usually <b>accidental</b> (hooch tragedies, illicit liquor). Homicidal is rare. Suicidal is uncommon but documented.<br><br>
<b>2. Hooch tragedy / mass casualty:</b><br>
&bull; Report to Executive Magistrate immediately<br>
&bull; Multiple victims from the same illicit batch<br>
&bull; Preserve samples from the liquid if available &mdash; this is the direct evidence<br>
&bull; FSL analysis of the offending batch is key to prosecution<br><br>
<b>3. The latent period creates a medico-legal challenge:</b><br>
&bull; Victims may appear intoxicated and be turned away from hospitals<br>
&bull; Death occurs 12&ndash;36 hours later &mdash; apparent delay creates disputes about time of ingestion vs time of death<br>
&bull; Documentation of symptoms onset is critical<br><br>
<b>4. Blindness as evidence of non-fatal poisoning:</b><br>
&bull; Survivors with permanent blindness &mdash; methanol can be established even without death<br>
&bull; Retinal oedema and optic atrophy are forensic evidence<br><br>
<b>5. Offence:</b> Sale of adulterated liquor causing death/injury is punishable under IPC (Sec 304A &mdash; culpable homicide not amounting to murder by negligence) and Excise Act. In Tamil Nadu &mdash; specific provisions under Tamil Nadu Prohibition Act.<br><br>
<b>6. Examination of scene:</b><br>
&bull; Recover and seal offending liquid samples immediately<br>
&bull; Document source, batch, and distribution chain<br>
&bull; Preserve in airtight containers (methanol is volatile)`
      }
    ],

    // -- TO ADD A NEW TOPIC --------------------------------
    // Copy the block below, paste after the last entry above,
    // add a comma after the previous closing ],
    // and fill in your content.
    //
    // "Your New Topic Name": [
    //   { step:1, title:"Title 1", text:"Content 1" },
    //   { step:2, title:"Title 2", text:"Content 2" },
    //   { step:3, title:"Title 3", text:"Content 3" },
    //   { step:4, title:"Title 4", text:"Content 4" }
    // ],
    // -----------------------------------------------------

  },

  // -- VISCERA SIMULATION SCENARIOS --------------------------
  scenarios: [
    {
      id: "op",
      history: "A farmer is found collapsed in his field with frothing at the mouth, pin-point pupils, and excessive secretions. Suspected Organophosphorus (OP) Poisoning.",
      correctPreservative: "Saturated Salt Solution",
      correctBloodPres: "NaF 2mg",
      trap: "Do NOT use Rectified Spirit for OP poisoning. Saturated Salt Solution is the standard for organic poisons."
    },
    {
      id: "alcohol",
      history: "Body found behind a liquor shop. Strong smell of alcohol. Suspected Acute Alcohol Poisoning.",
      correctPreservative: "Saturated Salt Solution",
      correctBloodPres: "NaF 10mg",
      trap: "NEVER use Rectified Spirit for alcohol cases &mdash; it contaminates the sample directly. Higher NaF dose (10mg) prevents post-mortem alcohol formation by bacteria."
    },
    {
      id: "acid",
      history: "Body found near toilet cleaner bottles. Leathery, corroded stomach lining at autopsy. Suspected Mineral Acid Poisoning.",
      correctPreservative: "Rectified Spirit",
      correctBloodPres: "NaF 2mg",
      trap: "Salt solution reacts with mineral acids. Rectified Spirit is the required exception for corrosive acid cases."
    },
    {
      id: "phenol",
      history: "Characteristic phenolic smell in mouth and stomach. Corrosive brownish staining on lips and tongue. Suspected Carbolic Acid (Phenol) Poisoning.",
      correctPreservative: "Saturated Salt Solution",
      correctBloodPres: "NaF 2mg",
      trap: "Phenol is HIGHLY SOLUBLE in Rectified Spirit &mdash; using spirit destroys the sample. Use Salt, NOT Spirit. Classic examiner trap."
    },
    {
      id: "methanol",
      history: "Multiple victims from the same village admitted after consuming locally brewed liquor. All have visual disturbances, deep breathing, and altered sensorium. Suspected Methyl Alcohol (Methanol) Poisoning.",
      correctPreservative: "Saturated Salt Solution",
      correctBloodPres: "NaF 2mg",
      trap: "CRITICAL: NEVER use Rectified Spirit for methanol &mdash; methanol is soluble in spirit and will be dissolved, giving a false negative. Use Saturated NaCl. Also collect vitreous humour separately &mdash; it gives the most reliable alcohol levels."
    },
    // ============================================================
//  ADD THIS BLOCK TO topics.js
//  Paste it INSIDE the relay: { } section,
//  after the last existing topic's closing ],
//  Add a comma after the previous topic's ] before pasting.
//
//  THEN run through topics_cleaner.html before uploading.
// ============================================================

    "Toxicology: Opium &amp; Somniferous Drugs": [
      {
        step: 1,
        title: "Source, Plant, Alkaloids &amp; Classification",
        text: `<b>OPIUM / NARCOTIC ANALGESICS (SOMNIFEROUS DRUGS)</b><br><br>

<b>Plant:</b> <i>Papaver somniferum</i>, family Papaveraceae<br>
<b>Other names:</b> Afim, Poppy tears, Lachryma<br>
<b>Cultivation:</b> India (Rajasthan, UP, MP/Maharashtra) under Central Bureau of Narcotics (CBN) license<br>
India produces <b>70-80%</b> of world pharmaceutical opium<br><br>

<b>Plant features:</b><br>
&bull; Height: 1-3 m; lush green leaves; white, red or purplish flowers<br>
&bull; Each plant bears <b>5-8 fruit capsules</b><br>
&bull; Unripe capsules: bluish-green; ripen to yellow<br>
&bull; When colour changes to yellow: shallow incisions 3-4 mm apart made on capsule surface<br>
&bull; Milky white latex collects &rarr; exposure to sunlight &rarr; dark brownish-black mass = <b>raw opium</b><br><br>

<b>Toxic Part:</b> Unripe fruit capsule<br><br>

<b>Raw Opium:</b> Dark brown/grey irregular mass, characteristic odour, bitter taste, contains <b>~10% morphine</b><br><br>

<b>Poppy seeds:</b> Non-poisonous, demulcent; 33 mcg morphine/gram; 45-50% poppy oil; used in Indian sweets (Kasoomba, Bhujri, Halwa)<br><br>

<b>ALKALOIDS - Two groups:</b><br>
<div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;margin:8px 0;">
<div style="background:#FAEEDA;padding:10px;border-radius:8px;">
<b style="color:#854F0B;">Phenanthrene group</b><br>
Morphine<br>Codeine<br>Thebaine
</div>
<div style="background:#E6F1FB;padding:10px;border-radius:8px;">
<b style="color:#185FA5;">Benzylisoquinoline group</b><br>
Papaverine<br>Noscapine (Narcotine)
</div>
</div>

<b>Opiate vs Opioid:</b><br>
&bull; <b>Opiate</b> = natural + semisynthetic (morphine, codeine, heroin)<br>
&bull; <b>Opioid</b> = all drugs with morphine-like activity (broader term)<br><br>

<b>Classification:</b><br>
&bull; <b>Natural:</b> Morphine, Codeine<br>
&bull; <b>Semisynthetic:</b> Heroin, Pholcodeine, Hydrocodone, Hydromorphone, Oxymorphone<br>
&bull; <b>Synthetic:</b> Fentanyl, Methadone, Pethidine, Tramadol, Propoxyphene, Diphenoxylate<br><br>

<b>FATAL DOSES (High-yield):</b>
<div style="overflow-x:auto;margin-top:8px;">
<table style="width:100%;border-collapse:collapse;font-size:13px;">
<tr style="background:#1f2937;color:#fff;"><th style="padding:6px 10px;text-align:left;">Opiate</th><th style="padding:6px 10px;text-align:left;">Therapeutic dose</th><th style="padding:6px 10px;text-align:left;">Fatal dose</th></tr>
<tr style="background:#f9f7f3;"><td style="padding:6px 10px;">Raw opium</td><td style="padding:6px 10px;">&mdash;</td><td style="padding:6px 10px;font-weight:bold;color:#A32D2D;">500 mg &ndash; 2 g</td></tr>
<tr><td style="padding:6px 10px;">Morphine</td><td style="padding:6px 10px;">10&ndash;15 mg</td><td style="padding:6px 10px;font-weight:bold;color:#A32D2D;">200 mg</td></tr>
<tr style="background:#f9f7f3;"><td style="padding:6px 10px;">Codeine</td><td style="padding:6px 10px;">10&ndash;60 mg</td><td style="padding:6px 10px;font-weight:bold;color:#A32D2D;">800 mg</td></tr>
<tr><td style="padding:6px 10px;">Heroin</td><td style="padding:6px 10px;">&mdash;</td><td style="padding:6px 10px;font-weight:bold;color:#A32D2D;">50 mg</td></tr>
<tr style="background:#f9f7f3;"><td style="padding:6px 10px;">Pethidine</td><td style="padding:6px 10px;">50&ndash;150 mg</td><td style="padding:6px 10px;font-weight:bold;color:#A32D2D;">1 g</td></tr>
<tr><td style="padding:6px 10px;">Methadone</td><td style="padding:6px 10px;">5&ndash;10 mg</td><td style="padding:6px 10px;font-weight:bold;color:#A32D2D;">100 mg</td></tr>
<tr style="background:#f9f7f3;"><td style="padding:6px 10px;">Etorphine</td><td style="padding:6px 10px;">&mdash;</td><td style="padding:6px 10px;font-weight:bold;color:#A32D2D;">0.03&ndash;0.12 mg</td></tr>
<tr><td style="padding:6px 10px;">Pentazocine</td><td style="padding:6px 10px;">30&ndash;60 mg</td><td style="padding:6px 10px;font-weight:bold;color:#A32D2D;">300 mg</td></tr>
<tr style="background:#f9f7f3;"><td style="padding:6px 10px;">Diphenoxylate</td><td style="padding:6px 10px;">10&ndash;20 mg</td><td style="padding:6px 10px;font-weight:bold;color:#A32D2D;">200 mg</td></tr>
</table>
</div>`
      },
      {
        step: 2,
        title: "Toxicokinetics &amp; Mechanism of Action (Receptors)",
        text: `<b>TOXICOKINETICS</b><br><br>
&bull; Well absorbed from GI tract and all parenteral routes<br>
&bull; Oral bioavailability only <b>25%</b> (significant first-pass hepatic metabolism)<br>
&bull; Protein binding: <b>7% (codeine)</b> to <b>96% (buprenorphine)</b>; morphine = 34%<br>
&bull; Morphine metabolism: conjugated with glucuronic acid &rarr; <b>morphine-6-glucuronide</b> (pharmacologically active)<br>
&bull; Excreted as <b>morphine-3-glucuronide</b> in urine<br><br>

<b>Duration of action:</b><br>
&bull; Minutes to 1 hour: Fentanyl, Alfentanil, Sufentanil (ultra-short)<br>
&bull; 2 hours: Pentazocine, Pethidine<br>
&bull; 4&ndash;8 hours: Morphine, Codeine, Heroin<br>
&bull; 8 hours: Methadone, Buprenorphine<br><br>

<b>Drug Interactions:</b> Depressant effect enhanced by alcohol, barbiturates, phenothiazines, cyclic antidepressants, MAOIs. Cimetidine &rarr; mental confusion.<br><br>

<hr style="border-color:#ddd;margin:14px 0;">

<b>MECHANISM OF ACTION &mdash; OPIATE RECEPTORS (High-yield)</b>

<style>
.or-wrap{font-family:Arial,sans-serif;margin-top:10px;}
.or-tabs{display:flex;gap:6px;flex-wrap:wrap;margin-bottom:10px;}
.or-tab{padding:6px 14px;font-size:12px;border-radius:20px;border:1px solid #ccc;cursor:pointer;background:#f5f5f5;color:#555;font-family:Arial;}
.or-tab.or-on{background:#1f2937;color:#fff;border-color:#1f2937;}
.or-panel{display:none;}
.or-panel.or-show{display:block;}
.or-card{background:#fff;border:1px solid #e0ddd6;border-radius:8px;padding:12px;margin-bottom:8px;}
.or-label{font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:.06em;margin-bottom:6px;}
.or-text{font-size:13px;color:#222;line-height:1.6;}
.or-amber{color:#854F0B;} .or-red{color:#A32D2D;} .or-blue{color:#185FA5;} .or-green{color:#0F6E56;} .or-purple{color:#534AB7;}
.or-keybox{border-left:3px solid #E24B4A;padding:8px 14px;background:#FCEBEB;border-radius:0 6px 6px 0;margin-bottom:8px;}
.or-keybox p{font-size:13px;color:#791F1F;line-height:1.6;margin:0;}
.or-infobox{border-left:3px solid #378ADD;padding:8px 14px;background:#E6F1FB;border-radius:0 6px 6px 0;margin-bottom:8px;}
.or-infobox p{font-size:13px;color:#185FA5;line-height:1.6;margin:0;}
.or-tealbox{border-left:3px solid #1D9E75;padding:8px 14px;background:#E1F5EE;border-radius:0 6px 6px 0;margin-bottom:8px;}
.or-tealbox p{font-size:13px;color:#0F6E56;line-height:1.6;margin:0;}
.hy-inline{display:inline-block;background:#e8ff47;color:#1a1a1a;font-size:10px;font-weight:700;padding:1px 6px;border-radius:10px;margin-left:4px;vertical-align:middle;}
</style>
<div class="or-wrap">
<div class="or-tabs">
  <button class="or-tab or-on" onclick="orShow(0,this)">Mu (OP3)</button>
  <button class="or-tab" onclick="orShow(1,this)">Kappa (OP2)</button>
  <button class="or-tab" onclick="orShow(2,this)">Delta (OP1)</button>
  <button class="or-tab" onclick="orShow(3,this)">Sigma</button>
  <button class="or-tab" onclick="orShow(4,this)">Summary</button>
</div>

<div class="or-panel or-show" id="orp0">
<div class="or-keybox"><p><b>Mu receptor (OP3) &mdash; MOST IMPORTANT <span class="hy-inline">MCQ</span></b><br>Most clinically used opiates are selective for mu receptors.</p></div>
<div class="or-card"><div class="or-label or-amber">Mu-1 (OP3A) &mdash; Supraspinal</div><div class="or-text">Supraspinal analgesia &bull; Euphoria &bull; Prolactin release &bull; Peripheral analgesia</div></div>
<div class="or-card"><div class="or-label or-red">Mu-2 (OP3B) &mdash; Spinal</div><div class="or-text">Spinal analgesia &bull; <b>Respiratory depression</b> &bull; Dependence &bull; Gastrointestinal dysmotility &bull; <b>Miosis</b></div></div>
<div class="or-infobox"><p>Tolerance develops faster to euphoria than to respiratory depression. This explains why addicts remain at risk of respiratory depression even when tolerant to euphoric effects.</p></div>
</div>

<div class="or-panel" id="orp1">
<div class="or-card"><div class="or-label or-blue">Kappa-1 (OP2A)</div><div class="or-text">Spinal analgesia &bull; Miosis</div></div>
<div class="or-card"><div class="or-label or-blue">Kappa-2 (OP2B)</div><div class="or-text">Psychotomimesis &bull; <b>Dysphoria</b> (not euphoria &mdash; important distinction)</div></div>
<div class="or-card"><div class="or-label or-blue">Kappa-3 (OP2C)</div><div class="or-text">Supraspinal analgesia</div></div>
<div class="or-tealbox"><p>Kappa agonists produce <b>dysphoria rather than euphoria</b> in humans. Endocrine changes and analgesia also produced.</p></div>
</div>

<div class="or-panel" id="orp2">
<div class="or-card"><div class="or-label or-green">Delta receptor (OP1)</div><div class="or-text">Spinal and supraspinal analgesia. Involved in mood, reinforcing effects, respiration, pain, blood pressure, endocrine and GI functions (with mu). Subtypes delta-1 and delta-2 postulated but not confirmed.</div></div>
</div>

<div class="or-panel" id="orp3">
<div class="or-keybox"><p><b>Sigma receptor &mdash; NOT an opioid receptor <span class="hy-inline">Exam trap</span></b><br>Insensitive to naloxone &mdash; the defining characteristic of opioid receptors. Hence no longer classified as opioid.<br>Dextromethorphan and Pentazocine are sigma agonists &rarr; psychotomimetic effects and movement disorders.</p></div>
<div class="or-infobox"><p>Epsilon and Zeta receptors: postulated to exist but not demonstrated so far.</p></div>
</div>

<div class="or-panel" id="orp4">
<div style="overflow-x:auto;">
<table style="width:100%;border-collapse:collapse;font-size:13px;">
<tr style="background:#1f2937;color:#fff;"><th style="padding:6px 8px;">Receptor</th><th style="padding:6px 8px;">Also known as</th><th style="padding:6px 8px;">Key effects</th></tr>
<tr style="background:#f9f7f3;"><td style="padding:6px 8px;font-weight:bold;">Mu</td><td style="padding:6px 8px;">OP3</td><td style="padding:6px 8px;">Analgesia, euphoria, resp depression, miosis, dependence</td></tr>
<tr><td style="padding:6px 8px;font-weight:bold;">Kappa</td><td style="padding:6px 8px;">OP2</td><td style="padding:6px 8px;">Analgesia, miosis, <b>dysphoria</b></td></tr>
<tr style="background:#f9f7f3;"><td style="padding:6px 8px;font-weight:bold;">Delta</td><td style="padding:6px 8px;">OP1</td><td style="padding:6px 8px;">Analgesia, mood, GI</td></tr>
<tr><td style="padding:6px 8px;font-weight:bold;">Sigma</td><td style="padding:6px 8px;">&mdash;</td><td style="padding:6px 8px;">Psychotomimetic, movement disorders. <b>NOT opioid</b></td></tr>
</table>
</div>
<div class="or-tealbox" style="margin-top:10px;"><p><b>Memory hook:</b> Mu = Most important. Kappa = Kills euphoria (dysphoria). Delta = Doesn't stand out. Sigma = Suspect (not really opioid).</p></div>
</div>
</div>
<script>
function orShow(i,btn){
  document.querySelectorAll('.or-panel').forEach(function(p,j){p.classList.toggle('or-show',j===i);});
  document.querySelectorAll('.or-tab').forEach(function(b){b.classList.remove('or-on');});
  if(btn) btn.classList.add('or-on');
}
</script>`
      },
      {
        step: 3,
        title: "Clinical Features &mdash; 3 Stages of Acute Poisoning",
        text: `<style>
.st-wrap{font-family:Arial,sans-serif;}
.st-triad{background:#FCEBEB;border:2px solid #E24B4A;border-radius:12px;padding:14px;margin-bottom:14px;text-align:center;}
.st-triad-title{font-size:14px;font-weight:700;color:#791F1F;margin-bottom:8px;}
.st-triad-items{display:flex;justify-content:center;gap:12px;flex-wrap:wrap;}
.st-triad-item{background:#fff;border:1px solid #E24B4A;border-radius:8px;padding:8px 14px;font-size:13px;font-weight:600;color:#A32D2D;}
.st-stages{display:flex;flex-direction:column;gap:10px;margin-bottom:14px;}
.st-stage{border-radius:10px;overflow:hidden;border:1px solid #e0ddd6;cursor:pointer;transition:all .2s;}
.st-stage-header{display:flex;align-items:center;gap:10px;padding:12px 14px;font-weight:700;font-size:14px;}
.st-stage-body{padding:0 14px;max-height:0;overflow:hidden;transition:max-height .3s ease,padding .3s;}
.st-stage-body.st-open{max-height:400px;padding:12px 14px;}
.st-s1{background:#FEF9E7;border-color:#F0D060;}
.st-s1 .st-stage-header{background:#F0D060;color:#7A6010;}
.st-s2{background:#FEF3DC;border-color:#EF9F27;}
.st-s2 .st-stage-header{background:#EF9F27;color:#fff;}
.st-s3{background:#FCEBEB;border-color:#E24B4A;}
.st-s3 .st-stage-header{background:#E24B4A;color:#fff;}
.st-item{font-size:13px;line-height:1.8;color:#333;}
.hy-inline{display:inline-block;background:#e8ff47;color:#1a1a1a;font-size:10px;font-weight:700;padding:1px 6px;border-radius:10px;margin-left:4px;vertical-align:middle;}
.hy-tap{cursor:pointer;border-bottom:2px dotted #e8ff47;background:rgba(232,255,71,0.15);padding:1px 3px;border-radius:3px;}
.st-popup{display:none;position:fixed;bottom:80px;left:50%;transform:translateX(-50%);background:#1f2937;color:#e6edf3;padding:14px 18px;border-radius:12px;font-size:13px;line-height:1.7;max-width:320px;width:90%;box-shadow:0 4px 24px rgba(0,0,0,0.5);z-index:9999;border-left:4px solid #e8ff47;}
.st-popup-close{float:right;cursor:pointer;color:#aaa;font-size:16px;margin-left:8px;}
</style>
<div class="st-wrap">

<div class="st-triad">
  <div class="st-triad-title">PATHOGNOMONIC TRIAD <span class="hy-inline">EXAM</span></div>
  <div class="st-triad-items">
    <div class="st-triad-item">&#128084; Coma</div>
    <div class="st-triad-item">&#128064; Pinpoint pupils</div>
    <div class="st-triad-item">&#128168; Respiratory depression</div>
  </div>
  <div style="font-size:12px;color:#791F1F;margin-top:8px;">Almost pathognomonic for opiate poisoning</div>
</div>

<div style="font-size:12px;color:#8b949e;margin-bottom:8px;font-family:Arial;">Tap each stage to expand</div>

<div class="st-stages">
  <div class="st-stage st-s1" onclick="stToggle(0)">
    <div class="st-stage-header">
      <span>&#9312;</span>
      <span>Stage of Excitement</span>
      <span style="margin-left:auto;font-size:12px;font-weight:400;">(Short / absent with large dose)</span>
    </div>
    <div class="st-stage-body" id="stb0">
      <div class="st-item">
        &bull; Euphoria, elated mood, increased sense of wellbeing<br>
        &bull; Talkative, free of anxiety<br>
        &bull; Flushed face, restlessness<br>
        &bull; Manic signs, hallucinations<br>
        &bull; <span class="hy-tap" onclick="stPopup('Seizures in opiate poisoning: Primarily seen in NEONATES and CHILDREN with morphine. Not a feature of typical adult opiate poisoning. Pethidine metabolite norpethidine is epileptogenic and can cause seizures in adults.')">Seizures &mdash; mainly in neonates/children <span class="hy-inline">Note</span></span><br>
        &bull; Rhabdomyolysis, hyperkalaemia, acute respiratory failure<br>
        &bull; Uncontrolled desire to sleep
      </div>
    </div>
  </div>

  <div class="st-stage st-s2" onclick="stToggle(1)">
    <div class="st-stage-header">
      <span>&#9313;</span>
      <span>Stage of Stupor</span>
    </div>
    <div class="st-stage-body" id="stb1">
      <div class="st-item">
        &bull; Giddiness, drowsiness, headache<br>
        &bull; Nausea, vomiting<br>
        &bull; <span class="hy-tap" onclick="stPopup('Itching in opiate poisoning is due to HISTAMINE RELEASE from mast cells, particularly prominent with morphine sulfate. Not an allergic reaction. Pruritus is a common adverse effect. Seen more with IV administration and epidural morphine.')">Itching all over body &mdash; histamine release <span class="hy-inline">MCQ</span></span><br>
        &bull; Pupils contracted (miosis begins)<br>
        &bull; Conjunctival congestion<br>
        &bull; Cyanosed face and lips<br>
        &bull; Pulse and BP still normal at this stage
      </div>
    </div>
  </div>

  <div class="st-stage st-s3" onclick="stToggle(2)">
    <div class="st-stage-header">
      <span>&#9314;</span>
      <span>Stage of Narcosis / Coma</span>
      <span style="margin-left:auto;font-size:12px;font-weight:400;">Terminal</span>
    </div>
    <div class="st-stage-body" id="stb2">
      <div class="st-item">
        &bull; <b>Unresponsiveness, coma</b><br>
        &bull; <span class="hy-tap" onclick="stPopup('PINPOINT PUPILS (Miosis) = classic opiate sign. Due to mu-2 receptor stimulation of Edinger-Westphal nucleus.\n\nEXCEPTIONS - pupils may be dilated:\n1. Severe hypoxia (most common cause of dilation)\n2. Severe acidosis\n3. Pethidine (meperidine) - anticholinergic metabolite causes mydriasis\n4. Mixed drug overdose with anticholinergic agents\n\nSo: dilated pupils do NOT rule out opiate poisoning in hypoxic patient.')">Pinpoint pupils <span class="hy-inline">High-yield</span></span><br>
        &bull; Facial pallor, cold clammy skin<br>
        &bull; Flaccid muscles<br>
        &bull; Decreased BP, feeble pulse<br>
        &bull; Terminal: facial flush, gradual hypotension<br>
        &bull; <b>Death from respiratory failure</b>
      </div>
    </div>
  </div>
</div>

<div id="st-popup-el" class="st-popup">
  <span class="st-popup-close" onclick="document.getElementById('st-popup-el').style.display='none'">x</span>
  <div id="st-popup-text"></div>
</div>
</div>

<script>
function stToggle(i){
  var el=document.getElementById('stb'+i);
  el.classList.toggle('st-open');
}
function stPopup(txt){
  document.getElementById('st-popup-text').innerHTML=txt.replace(/\n/g,'<br>');
  document.getElementById('st-popup-el').style.display='block';
}
document.addEventListener('click',function(e){
  var p=document.getElementById('st-popup-el');
  if(p&&!p.contains(e.target)&&!e.target.classList.contains('hy-tap')) p.style.display='none';
});
</script>`
      },
      {
        step: 4,
        title: "Specific Clinical Features &mdash; Tap to Reveal",
        text: `<style>
.sf-wrap{font-family:Arial,sans-serif;}
.sf-grid{display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-bottom:12px;}
@media(max-width:400px){.sf-grid{grid-template-columns:1fr;}}
.sf-card{background:#fff;border:1px solid #e0ddd6;border-radius:8px;padding:11px 13px;cursor:pointer;transition:all .15s;}
.sf-card:active{background:#f0ebe0;}
.sf-card-label{font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:.06em;margin-bottom:5px;}
.sf-card-main{font-size:13px;font-weight:600;color:#1a1a1a;margin-bottom:4px;}
.sf-card-detail{font-size:12px;color:#555;line-height:1.5;display:none;}
.sf-card.sf-open .sf-card-detail{display:block;}
.sf-card-tap{font-size:10px;color:#aaa;margin-top:4px;}
.lm-red{color:#A32D2D;} .lm-blue{color:#185FA5;} .lm-amber{color:#854F0B;} .lm-green{color:#0F6E56;} .lm-purple{color:#534AB7;}
.hy-inline{display:inline-block;background:#e8ff47;color:#1a1a1a;font-size:10px;font-weight:700;padding:1px 6px;border-radius:10px;margin-left:4px;vertical-align:middle;}
.sf-keybox{border-left:3px solid #E24B4A;padding:8px 14px;background:#FCEBEB;border-radius:0 6px 6px 0;margin-bottom:8px;}
.sf-keybox p{font-size:13px;color:#791F1F;line-height:1.6;margin:0;}
</style>
<div class="sf-wrap">
<div style="background:#1f2937;color:#e8ff47;font-size:12px;font-weight:700;padding:6px 12px;border-radius:20px;display:inline-block;margin-bottom:10px;font-family:Arial;">Tap each card to reveal details</div>

<div class="sf-grid">

<div class="sf-card" onclick="this.classList.toggle('sf-open')">
<div class="sf-card-label lm-red">Pupils <span class="hy-inline">MCQ</span></div>
<div class="sf-card-main">Pinpoint miosis</div>
<div class="sf-card-detail">Mu-2 receptor stimulation of Edinger-Westphal nucleus.<br><br><b>Exceptions (dilation):</b><br>&bull; Severe hypoxia/acidosis<br>&bull; Pethidine: anticholinergic metabolite causes mydriasis<br>&bull; Mixed overdose with anticholinergics<br><br>Dilated pupils do NOT rule out opiate poisoning if hypoxic.</div>
<div class="sf-card-tap">Tap for detail</div>
</div>

<div class="sf-card" onclick="this.classList.toggle('sf-open')">
<div class="sf-card-label lm-red">Respiration <span class="hy-inline">Key</span></div>
<div class="sf-card-main">Bradypnoea &lt;8/min</div>
<div class="sf-card-detail">Mu receptor inhibition of medullary respiratory centres.<br><br>&bull; Snoring precedes fatal overdose (upper airway failure)<br>&bull; Gurgling = pulmonary oedema accumulation<br>&bull; <b>Non-cardiogenic pulmonary oedema</b> ("heroin-lung"): onset 0&ndash;2 hours after IV heroin<br>&bull; Pink frothy sputum, bilateral fluffy infiltrates on CXR<br>&bull; Resolves with supportive care within 1&ndash;2 days<br>&bull; <b>Primary cause of death: respiratory failure</b></div>
<div class="sf-card-tap">Tap for detail</div>
</div>

<div class="sf-card" onclick="this.classList.toggle('sf-open')">
<div class="sf-card-label lm-blue">CVS</div>
<div class="sf-card-main">Hypotension + Bradycardia</div>
<div class="sf-card-detail">Opiate-induced arteriolar and venous dilation.<br><br>&bull; While bradycardia is common, tachycardia can also occur<br>&bull; Non-specific ST-T changes on ECG reported<br>&bull; Terminal: gradual hypotension, feeble pulse<br>&bull; Hyperkalaemia may occur (especially with rhabdomyolysis)</div>
<div class="sf-card-tap">Tap for detail</div>
</div>

<div class="sf-card" onclick="this.classList.toggle('sf-open')">
<div class="sf-card-label lm-amber">Temperature</div>
<div class="sf-card-main">Hypothermia</div>
<div class="sf-card-detail">Cold clammy skin, hypothermia. Contributes to evidence of 3H triad for diagnosis:<br><br>&bull; <b>Hypoglycaemia</b><br>&bull; <b>Hypoxia</b><br>&bull; <b>Hypothermia</b><br><br>All three should be looked for and corrected.</div>
<div class="sf-card-tap">Tap for detail</div>
</div>

<div class="sf-card" onclick="this.classList.toggle('sf-open')">
<div class="sf-card-label lm-red">Heroin-lung <span class="hy-inline">MCQ</span></div>
<div class="sf-card-main">Non-cardiogenic pulmonary oedema</div>
<div class="sf-card-detail">Specific complication of IV heroin overdose.<br><br>&bull; Onset: immediate to 2 hours<br>&bull; Features: rales, pink frothy sputum, significant hypoxia, bilateral fluffy infiltrates on CXR<br>&bull; Some require mechanical ventilation<br>&bull; <b>Resolves rapidly with supportive care alone</b> (hours to 1&ndash;2 days)<br>&bull; Cardiogenic origin excluded: wedge pressure normal/low</div>
<div class="sf-card-tap">Tap for detail</div>
</div>

<div class="sf-card" onclick="this.classList.toggle('sf-open')">
<div class="sf-card-label lm-purple">Rhabdomyolysis</div>
<div class="sf-card-main">Muscle breakdown cascade</div>
<div class="sf-card-detail">Especially with prolonged hypoxic coma.<br><br>Sequence: Rhabdomyolysis &rarr; Hyperkalaemia &rarr; Acute renal failure<br><br>Management:<br>&bull; Early aggressive fluid replacement (mainstay)<br>&bull; Mannitol or furosemide to maintain urine output<br>&bull; Urinary alkalinisation NOT routinely recommended</div>
<div class="sf-card-tap">Tap for detail</div>
</div>

<div class="sf-card" onclick="this.classList.toggle('sf-open')">
<div class="sf-card-label lm-blue">GI effects</div>
<div class="sf-card-main">Urinary retention + Constipation</div>
<div class="sf-card-detail">&bull; Urinary retention (mu-2 effect on bladder)<br>&bull; Cramping and constipation<br>&bull; Sphincter of Oddi spasm<br>&bull; Nausea and vomiting<br>&bull; GI dysmotility (mu-2 receptor mediated)</div>
<div class="sf-card-tap">Tap for detail</div>
</div>

<div class="sf-card" onclick="this.classList.toggle('sf-open')">
<div class="sf-card-label lm-green">Foetal effects</div>
<div class="sf-card-main">Crosses placenta in 5 minutes</div>
<div class="sf-card-detail">Most opiates cross the human placenta.<br><br>&bull; Appear in foetal circulation within <b>5 minutes</b> of maternal IV injection<br>&bull; Morphine: vasoconstricts placental vasculature<br>&bull; Decreases biophysical profile score<br>&bull; Absent foetal breathing movements, non-reactive NST<br>&bull; Neonatal respiratory depression if delivery 1&ndash;3 hours post-maternal dose</div>
<div class="sf-card-tap">Tap for detail</div>
</div>

</div>

<div class="sf-keybox"><p><b>Adverse effects summary (mnemonic ROVE-MCP):</b><br>
<b>R</b>espiratory depression &bull; <b>O</b>pioid-induced constipation &bull; <b>V</b>omiting/vertigo &bull; <b>E</b>uphoria/dysphoria &bull; <b>M</b>iosis &bull; <b>C</b>ough suppression &bull; <b>P</b>ruritus / Priapism / hypotension</p></div>
</div>`
      },
      {
        step: 5,
        title: "Chronic Poisoning &amp; Withdrawal Stages",
        text: `<b>CHRONIC OPIATE POISONING</b><br><br>

<b>Signs and Symptoms:</b><br>
&bull; Restlessness, irritable, emaciated, disturbed sleep<br>
&bull; Contracted sluggish pupils (even at rest)<br>
&bull; Marked constipation, nausea, anorexia<br>
&bull; Decreased immune response (decreased immune cell counts, macrophage progenitor proliferation)<br>
&bull; CNS: dementia, mania, intellectual and moral deterioration<br>
&bull; Memory loss, neurasthenia<br>
&bull; Impotence (temporary)<br>
&bull; Pigmentation around mouth and nostrils<br>
&bull; Dermal scars (IV abuse), amnesia, occasional hallucinations<br>
&bull; Compartment syndrome (from narcotic injections)<br><br>

<b>Addiction indicators (clinical pointers):</b><br>
Unusual mood swings &bull; Withdrawal from social activities &bull; Unexplained overspending &bull; Dwindling sexual drive &bull; Pills/syringes around the house &bull; Pinpoint pupils &bull; Weight loss, pallor &bull; Chronic constipation &bull; Periodic sweating/tremors<br><br>

<hr style="border-color:#ddd;margin:14px 0;">

<b>WITHDRAWAL STAGES</b> <span style="font-size:11px;color:#888;">(times based on heroin)</span>

<style>
.wd-stage{border-radius:10px;padding:12px 14px;margin-bottom:8px;border:1px solid transparent;}
.wd-s0{background:#f0f9f0;border-color:#3fb950;}
.wd-s1{background:#fff8e6;border-color:#EF9F27;}
.wd-s2{background:#FCEBEB;border-color:#E24B4A;}
.wd-s3{background:#EEEDFE;border-color:#7F77DD;}
.wd-head{font-size:13px;font-weight:700;margin-bottom:6px;}
.wd-time{font-size:11px;font-weight:400;color:#888;margin-left:6px;}
.wd-text{font-size:13px;line-height:1.7;color:#333;}
.hy-inline{display:inline-block;background:#e8ff47;color:#1a1a1a;font-size:10px;font-weight:700;padding:1px 6px;border-radius:10px;margin-left:4px;vertical-align:middle;}
</style>

<div class="wd-stage wd-s0">
<div class="wd-head" style="color:#1D6E30;">Anticipatory <span class="wd-time">3&ndash;4 hours</span></div>
<div class="wd-text">Anxiety &bull; Craving &bull; Drug-seeking behaviour</div>
</div>

<div class="wd-stage wd-s1">
<div class="wd-head" style="color:#854F0B;">Early <span class="wd-time">8&ndash;10 hours</span></div>
<div class="wd-text">Restlessness &bull; Yawning &bull; Nausea &bull; Sweating &bull; Rhinorrhoea &bull; Lacrimation &bull; <b>Mydriasis</b> &bull; Stomach cramps &bull; Drug-seeking behaviour</div>
</div>

<div class="wd-stage wd-s2">
<div class="wd-head" style="color:#791F1F;">Fully Developed <span class="wd-time">1&ndash;3 days</span> <span class="hy-inline">Exam</span></div>
<div class="wd-text">Tremor &bull; <b>Piloerection</b> (gooseflesh = <i>cold turkey</i>) &bull; Vomiting &bull; Diarrhoea &bull; Muscle spasm &bull; Hypertension &bull; Tachycardia &bull; Fever &bull; Chills &bull; Impulse-driven drug-seeking behaviour</div>
</div>

<div class="wd-stage wd-s3">
<div class="wd-head" style="color:#534AB7;">Protracted Abstinence <span class="wd-time">Up to 6 months</span></div>
<div class="wd-text">Hypotension &bull; Bradycardia &bull; Insomnia &bull; Anorexia &bull; Stimulus-driven opiate craving</div>
</div>

<div style="background:#E6F1FB;border-left:3px solid #378ADD;padding:10px 14px;border-radius:0 8px 8px 0;margin-top:10px;font-size:13px;color:#185FA5;line-height:1.7;">
<b>Cold turkey</b> &mdash; term derived from gooseflesh + hypothermia appearance of skin during opiate withdrawal, resembling the skin of a plucked cold turkey.<br><br>
<b>Neonatal withdrawal:</b> Infants of addicted mothers; onset 12&ndash;72 hours after birth; dehydration, irritability, tremors, continuous crying, diarrhoea.
</div>`
      },
      {
        step: 6,
        title: "Diagnosis &amp; Differential Diagnosis",
        text: `<b>DIAGNOSIS OF OPIATE POISONING</b><br><br>

<b>1. Clinical:</b><br>
&bull; Needle marks, dermal scars (injection marks in antecubital fossae, forearms, back of hands, neck, groin, ankles)<br>
&bull; 3H triad: Hypoglycaemia + Hypoxia + Hypothermia<br>
&bull; Pathognomonic triad: Coma + Pinpoint pupils + Respiratory depression<br><br>

<b>2. Lab / Chemical:</b><br>
&bull; RIA, GC, GC-MS, HPLC &mdash; detect most opiates in urine/blood<br>
&bull; <b>Marquis test</b>: Suspect sample + Marquis reagent (5 mL of 40% formaldehyde in 100 mL of sulphuric acid)<br>
&nbsp;&nbsp;&mdash; Result: fine purple-red &rarr; violet &rarr; blue (morphine/opiates)<br>
&nbsp;&nbsp;&mdash; Same reagent + amphetamine: yellow-orange colour<br><br>

<b>3. Empirical naloxone test:</b><br>
&bull; Dramatic reversal of triad = confirms opiate poisoning<br>
&bull; <b>Caution:</b> can precipitate withdrawal reaction in addicts<br>
&bull; If no response after 10 mg naloxone &rarr; question the diagnosis<br><br>

<hr style="border-color:#ddd;margin:14px 0;">

<b>DIFFERENTIAL DIAGNOSIS</b>

<style>
.dd-grid{display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-top:8px;}
@media(max-width:400px){.dd-grid{grid-template-columns:1fr;}}
.dd-card{background:#fff;border:1px solid #e0ddd6;border-radius:8px;padding:10px 12px;cursor:pointer;}
.dd-card:active{background:#f0ebe0;}
.dd-label{font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:.06em;color:#A32D2D;margin-bottom:4px;}
.dd-main{font-size:13px;font-weight:600;color:#1a1a1a;margin-bottom:4px;}
.dd-detail{font-size:12px;color:#555;line-height:1.5;display:none;}
.dd-card.dd-open .dd-detail{display:block;}
.dd-tap{font-size:10px;color:#aaa;margin-top:3px;}
</style>
<div style="font-size:12px;color:#8b949e;margin-bottom:6px;font-family:Arial;">Tap each card for distinguishing feature</div>
<div class="dd-grid">

<div class="dd-card" onclick="this.classList.toggle('dd-open')">
<div class="dd-label">Diff 1</div>
<div class="dd-main">Alcohol intoxication</div>
<div class="dd-detail">Smell of alcohol. Lab support (blood alcohol level). Pupils usually not pinpoint. No response to naloxone.</div>
<div class="dd-tap">Tap to expand</div>
</div>

<div class="dd-card" onclick="this.classList.toggle('dd-open')">
<div class="dd-label">Diff 2</div>
<div class="dd-main">Barbiturate poisoning</div>
<div class="dd-detail">No pinpoint pupils (barbiturates cause mid-sized or slightly dilated pupils). Lab support (barbiturate levels). No naloxone response.</div>
<div class="dd-tap">Tap to expand</div>
</div>

<div class="dd-card" onclick="this.classList.toggle('dd-open')">
<div class="dd-label">Diff 3</div>
<div class="dd-main">Carbolic acid / Phenol</div>
<div class="dd-detail">Characteristic phenolic smell. Urine analysis (greenish/dark urine). Corrosive stains. No naloxone response.</div>
<div class="dd-tap">Tap to expand</div>
</div>

<div class="dd-card" onclick="this.classList.toggle('dd-open')">
<div class="dd-label">Diff 4</div>
<div class="dd-main">Intracranial haemorrhage</div>
<div class="dd-detail">History of head injury/hypertension. Unequal pupils (herniation). Localising neurological signs. CT scan diagnostic. No naloxone response.</div>
<div class="dd-tap">Tap to expand</div>
</div>

<div class="dd-card" onclick="this.classList.toggle('dd-open')">
<div class="dd-label">Diff 5</div>
<div class="dd-main">Cerebral malaria (falciparum)</div>
<div class="dd-detail">History of travel/fever. Thick film/rapid antigen test positive. No pinpoint pupils. No naloxone response.</div>
<div class="dd-tap">Tap to expand</div>
</div>

<div class="dd-card" onclick="this.classList.toggle('dd-open')">
<div class="dd-label">Diff 6</div>
<div class="dd-main">CO poisoning</div>
<div class="dd-detail">History of fire/generator exposure. Cherry red skin/mucosae. Carboxyhaemoglobin elevated on spectroscopic examination. Globus pallidus &gt; putamen on CT. COHb confirms.</div>
<div class="dd-tap">Tap to expand</div>
</div>

<div class="dd-card" onclick="this.classList.toggle('dd-open')">
<div class="dd-label">Diff 7</div>
<div class="dd-main">Diabetic coma / Uraemia</div>
<div class="dd-detail">Blood glucose / BUN elevated. No pinpoint pupils. No naloxone response. History of DM/renal disease.</div>
<div class="dd-tap">Tap to expand</div>
</div>

<div class="dd-card" onclick="this.classList.toggle('dd-open')">
<div class="dd-label">Diff 8</div>
<div class="dd-main">Epilepsy / Meningitis / Heat stroke</div>
<div class="dd-detail">Epilepsy: history, post-ictal state. Meningitis: fever, neck stiffness, CSF analysis. Heat stroke: high body temperature, no sweating, history of heat exposure.</div>
<div class="dd-tap">Tap to expand</div>
</div>

</div>`
      },
      {
        step: 7,
        title: "Treatment &mdash; Acute &amp; Chronic (with Doses)",
        text: `<style>
.tx-wrap{font-family:Arial,sans-serif;}
.tx-tabs{display:flex;gap:6px;margin-bottom:10px;}
.tx-tab{padding:6px 16px;font-size:13px;border-radius:20px;border:1px solid #ccc;cursor:pointer;background:#f5f5f5;color:#555;font-family:Arial;}
.tx-tab.tx-on{background:#1f2937;color:#fff;border-color:#1f2937;}
.tx-panel{display:none;}
.tx-panel.tx-show{display:block;}
.tx-step{background:#fff;border:1px solid #e0ddd6;border-radius:8px;padding:11px 13px;margin-bottom:8px;}
.tx-step-label{font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:.06em;margin-bottom:5px;}
.tx-step-text{font-size:13px;line-height:1.7;color:#333;}
.lm-red{color:#A32D2D;} .lm-blue{color:#185FA5;} .lm-green{color:#0F6E56;} .lm-amber{color:#854F0B;} .lm-purple{color:#534AB7;}
.hy-inline{display:inline-block;background:#e8ff47;color:#1a1a1a;font-size:10px;font-weight:700;padding:1px 6px;border-radius:10px;margin-left:4px;vertical-align:middle;}
.tx-antidote{background:#E1F5EE;border:1.5px solid #1D9E75;border-radius:10px;padding:12px 14px;margin-bottom:8px;}
.tx-antidote-title{font-size:14px;font-weight:700;color:#0F6E56;margin-bottom:6px;}
.tx-antidote-text{font-size:13px;color:#1a1a1a;line-height:1.7;}
.tx-dose{background:#e8ff47;border-radius:6px;padding:3px 8px;font-size:12px;font-weight:700;color:#1a1a1a;display:inline-block;margin:2px 0;}
.tx-warn{background:#FCEBEB;border-left:3px solid #E24B4A;padding:8px 14px;border-radius:0 6px 6px 0;margin-bottom:8px;font-size:13px;color:#791F1F;line-height:1.6;}
</style>
<div class="tx-wrap">
<div class="tx-tabs">
  <button class="tx-tab tx-on" onclick="txShow(0,this)">Acute</button>
  <button class="tx-tab" onclick="txShow(1,this)">Antidotes</button>
  <button class="tx-tab" onclick="txShow(2,this)">Chronic</button>
</div>

<div class="tx-panel tx-show" id="txp0">
<div class="tx-step">
  <div class="tx-step-label lm-blue">Step 1 &mdash; Supportive (ABC)</div>
  <div class="tx-step-text">
    &bull; Maintain patent airway<br>
    &bull; Endotracheal intubation + assisted ventilation<br>
    &bull; Monitor arterial blood gases / pulse oximetry<br>
    &bull; PEEP if ARDS; small tidal volumes (6 mL/kg)<br>
    &bull; Ipecac-induced emesis: <b>NOT recommended</b> (risk of CNS depression + seizures)
  </div>
</div>
<div class="tx-step">
  <div class="tx-step-label lm-amber">Step 2 &mdash; Gastric Lavage <span class="hy-inline">Note</span></div>
  <div class="tx-step-text">
    &bull; Use <b>potassium permanganate (KMnO4)</b> solution<br>
    &bull; <b>250&ndash;300 mL should be left in stomach</b> after wash<br>
    &bull; Reason: <b>enterohepatic circulation</b> of opiates &mdash; KMnO4 neutralises reabsorbed drug<br>
    &bull; Activated charcoal: most effective within 1 hour
  </div>
</div>
<div class="tx-step">
  <div class="tx-step-label lm-amber">Step 3 &mdash; Reduce Reabsorption</div>
  <div class="tx-step-text">
    &bull; Oral sodium sulphate <b>30 g</b><br>
    &bull; Enema twice daily<br>
    &bull; Prevents reabsorption from gut
  </div>
</div>
<div class="tx-step">
  <div class="tx-step-label lm-red">Step 4 &mdash; Convulsions</div>
  <div class="tx-step-text">
    &bull; Benzodiazepines: <b>5&ndash;10 mg IV initially</b>, repeat every 5&ndash;10 min as needed<br>
    &bull; Usually not required if naloxone is available<br>
    &bull; Monitor for hypoxia, electrolytes, hypoglycaemia<br>
    &bull; IV dextrose: 50 mL of 50% (adult) or 2 mL/kg of 25% (child)
  </div>
</div>
<div class="tx-step">
  <div class="tx-step-label lm-red">Step 5 &mdash; Hypotension</div>
  <div class="tx-step-text">
    &bull; IV isotonic fluid 10&ndash;20 mL/kg + Trendelenburg position<br>
    &bull; Dopamine: 5 mcg/kg/min, increase in 5 mcg/kg/min increments<br>
    &bull; Noradrenaline: 0.5&ndash;1 mcg/min, titrate
  </div>
</div>
</div>

<div class="tx-panel" id="txp1">
<div class="tx-antidote">
  <div class="tx-antidote-title">&#9989; Naloxone &mdash; ANTIDOTE OF CHOICE <span class="hy-inline">MCQ</span></div>
  <div class="tx-antidote-text">
    Effective against ALL opiates including pentazocine<br>
    <b>NOT very effective against buprenorphine</b> (needs 10 mg+)<br><br>
    <b>Dramatic reversal of:</b> miosis, respiratory depression, hypotension, coma<br><br>
    <b>Doses:</b><br>
    &bull; Adult: <span class="tx-dose">1.2 mg IV</span><br>
    &bull; Child: <span class="tx-dose">0.4 mg IV</span><br>
    &bull; Neonate: <span class="tx-dose">0.1 mg/kg IV or intratracheal</span><br>
    &bull; Repeat: <b>2 mg doses</b> as needed<br>
    &bull; Total max adult: <b>75 mg</b> (Reddy) / if no response after 10 mg, question diagnosis<br>
    &bull; Routes: IV (best); sublingual, IM, down endotracheal tube if IV difficult<br><br>
    <b>Naloxone infusion</b> (for long-acting opiates):<br>
    &bull; Better than repeated boluses<br>
    &bull; Amount (mg/24h) = bolus dose (mg) &times; 2/3 &times; 24<br>
    &bull; Dilute in normal saline or 5% dextrose (NOT alkaline solutions)<br>
    &bull; Use within 24 hours<br>
    &bull; Observe for 2 hours after stopping infusion
  </div>
</div>
<div class="tx-warn">Caution in addicts: naloxone can precipitate acute withdrawal reaction. Titrate carefully.</div>
<div class="tx-antidote">
  <div class="tx-antidote-title">Naltrexone &mdash; Long-acting oral antagonist</div>
  <div class="tx-antidote-text">
    &bull; <span class="tx-dose">50 mg/day orally</span> (weeks to months)<br>
    &bull; Used for treating opiate addiction (chronic use)<br>
    &bull; Must NOT be given to opioid-dependent patient who has NOT been detoxified<br>
    &bull; Challenge dose of naloxone first to confirm lack of dependence
  </div>
</div>
<div class="tx-antidote">
  <div class="tx-antidote-title">Nalmefene &mdash; Naltrexone derivative</div>
  <div class="tx-antidote-text">
    &bull; Longer duration than naloxone in acute overdose<br>
    &bull; IV: <span class="tx-dose">0.1 mg</span> &rarr; if no withdrawal &rarr; <span class="tx-dose">0.5 mg</span> &rarr; <span class="tx-dose">1 mg</span> in 2&ndash;5 min<br>
    &bull; Also IM or SC
  </div>
</div>
<div class="tx-antidote">
  <div class="tx-antidote-title">Physostigmine (controversial)</div>
  <div class="tx-antidote-text">
    &bull; <span class="tx-dose">0.04 mg/kg IV</span><br>
    &bull; Increases ACh in reticular formation of brainstem (suppressed by opiates)<br>
    &bull; <b>Controversial and dangerous</b> &mdash; not routinely recommended
  </div>
</div>
</div>

<div class="tx-panel" id="txp2">
<div class="tx-step">
  <div class="tx-step-label lm-blue">Chronic treatment steps</div>
  <div class="tx-step-text">
    a) <b>Gradual withdrawal</b> of the opiate<br>
    b) <b>Methadone substitution:</b> <span class="tx-dose">30&ndash;40 mg/day</span>, then gradually tapered<br>
    c) <b>Propranolol 80 mg</b>: relieves anxiety and craving; no effect on physical symptoms<br>
    d) <b>Clonidine</b>: autonomic symptoms<br>
    e) <b>Buprenorphine</b> or <b>Naltrexone</b>: maintenance<br>
    f) <b>Gabapentin regimen <span class="hy-inline">New</span>:</b><br>
    &nbsp;&nbsp;&bull; Clonidine 0.1 mg TID &times; 7 days<br>
    &nbsp;&nbsp;&bull; Then Naltrexone 50 mg BD &times; 14 days<br>
    &nbsp;&nbsp;&bull; Gabapentin 600 mg BD throughout all 21 days<br>
    g) Antispasmodics for abdominal cramps, vomiting, diarrhoea<br>
    h) Tranquillisers or bedtime sedation if needed<br>
    i) <b>Psychiatric counselling</b>
  </div>
</div>
</div>
</div>

<script>
function txShow(i,btn){
  document.querySelectorAll('.tx-panel').forEach(function(p,j){p.classList.toggle('tx-show',j===i);});
  document.querySelectorAll('.tx-tab').forEach(function(b){b.classList.remove('tx-on');});
  if(btn) btn.classList.add('tx-on');
}
</script>`
      },
      {
        step: 8,
        title: "Autopsy, Forensic Issues &amp; Special Topics",
        text: `<style>
.af-wrap{font-family:Arial,sans-serif;}
.af-tabs{display:flex;gap:5px;flex-wrap:wrap;margin-bottom:10px;}
.af-tab{padding:5px 12px;font-size:12px;border-radius:20px;border:1px solid #ccc;cursor:pointer;background:#f5f5f5;color:#555;font-family:Arial;}
.af-tab.af-on{background:#1f2937;color:#fff;border-color:#1f2937;}
.af-panel{display:none;}
.af-panel.af-show{display:block;}
.af-card{background:#fff;border:1px solid #e0ddd6;border-radius:8px;padding:10px 12px;margin-bottom:8px;}
.af-label{font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:.06em;margin-bottom:4px;}
.af-text{font-size:13px;color:#222;line-height:1.7;}
.lm-red{color:#A32D2D;} .lm-blue{color:#185FA5;} .lm-amber{color:#854F0B;} .lm-green{color:#0F6E56;} .lm-purple{color:#534AB7;}
.hy-inline{display:inline-block;background:#e8ff47;color:#1a1a1a;font-size:10px;font-weight:700;padding:1px 6px;border-radius:10px;margin-left:4px;vertical-align:middle;}
.af-keybox{border-left:3px solid #E24B4A;padding:8px 14px;background:#FCEBEB;border-radius:0 6px 6px 0;margin-bottom:8px;font-size:13px;color:#791F1F;line-height:1.6;}
.af-infobox{border-left:3px solid #378ADD;padding:8px 14px;background:#E6F1FB;border-radius:0 6px 6px 0;margin-bottom:8px;font-size:13px;color:#185FA5;line-height:1.6;}
.af-tealbox{border-left:3px solid #1D9E75;padding:8px 14px;background:#E1F5EE;border-radius:0 6px 6px 0;margin-bottom:8px;font-size:13px;color:#0F6E56;line-height:1.6;}
</style>
<div class="af-wrap">
<div class="af-tabs">
  <button class="af-tab af-on" onclick="afShow(0,this)">Autopsy</button>
  <button class="af-tab" onclick="afShow(1,this)">Forensic</button>
  <button class="af-tab" onclick="afShow(2,this)">Heroin</button>
  <button class="af-tab" onclick="afShow(3,this)">Fentanyl</button>
  <button class="af-tab" onclick="afShow(4,this)">Body packer</button>
</div>

<div class="af-panel af-show" id="afp0">
<div class="af-card"><div class="af-label lm-red">External findings</div><div class="af-text">
&bull; Injection marks, dermal abscesses, scarring (antecubital fossae, forearms, back of hands, neck, groin, ankles)<br>
&bull; Tattooing (common feature of drug sub-culture)<br>
&bull; Emaciation, unkempt appearance<br>
&bull; <b>Deep cyanosis: nails, lips, palm, sole</b><br>
&bull; Froth at mouth and nostrils (gross pulmonary oedema)
</div></div>
<div class="af-card"><div class="af-label lm-red">Internal findings <span class="hy-inline">High-yield</span></div><div class="af-text">
&bull; <b>Gross pulmonary oedema</b> (dominant finding; especially in sudden heroin death)<br>
&bull; Intense congestion of all internal organs<br>
&bull; Cerebral oedema<br>
&bull; Liver: congestion, enlargement of hepatic lymph nodes (morphine detectable in nodes)<br>
&bull; Myocardial damage: focal mononuclear cells, degenerated/necrotic fibres<br>
&bull; Undiagnosed pneumonia (frequent in heroin fatalities)<br>
&bull; <b>Heroin-induced spongiform leukoencephalopathy</b>: spongiform degeneration of white matter, vacuolisation and fluid accumulation in myelin sheaths
</div></div>
<div class="af-tealbox">Preserve: blood, urine, brain, liver, bile for chemical analysis. Autopsy in drug-related deaths requires precautions for HIV and serum hepatitis (common in IV drug abusers).</div>
</div>

<div class="af-panel" id="afp1">
<div class="af-card"><div class="af-label lm-amber">Manner of death</div><div class="af-text">
&bull; <b>Accidental:</b> most common; IV abusers; "death on the needle"<br>
&bull; <b>Suicidal:</b> opioids = ideal suicidal poison (painless death, bitter taste discourages homicide)<br>
&bull; <b>Homicidal:</b> rare; opioids are bitter-tasting<br>
&bull; <b>Euthanasia:</b> morphine most commonly favoured for causing painless death<br>
&bull; Accidental in children: rare; doping of racehorses
</div></div>
<div class="af-card"><div class="af-label lm-red">Drug adulterants / street terms <span class="hy-inline">Viva</span></div><div class="af-text">
&bull; <b>Cutting:</b> addition of adulterants to heroin by pushers for monetary gain<br>
&bull; <b>Sting:</b> scopolamine added to heroin<br>
&bull; <b>Hot shot:</b> strychnine added to heroin<br>
&bull; <b>Speed ball:</b> heroin + cocaine/amphetamine/alcohol/benzodiazepines/cannabis<br>
&bull; Combination with phencyclidine can cause death
</div></div>
<div class="af-card"><div class="af-label lm-blue">India-specific forensic points</div><div class="af-text">
&bull; Heroin (brown sugar) = most commonly abused in India; metropolitan cities<br>
&bull; Medical/paramedical staff abuse morphine, pethidine, pentazocine<br>
&bull; Buprenorphine: emerging non-medical abuse<br>
&bull; Codeine OTC (antitussive syrups): increasingly abused by college-going youth<br>
&bull; Cotton fever: febrile reaction in IV abusers (drugs filtered through cotton balls)<br>
&bull; Wound botulism: black tar heroin SC/IM injections &rarr; Clostridium botulinum germination &rarr; descending flaccid paralysis
</div></div>
<div class="af-card"><div class="af-label lm-purple">Opium food preparations (India)</div><div class="af-text">
&bull; <b>Kasoomba:</b> tea made from poppy seeds<br>
&bull; <b>Bhujri:</b> decoction of green poppy fruits fried in ghee/butter<br>
&bull; <b>Halwa:</b> sweet prepared with poppy green fruit juice
</div></div>
</div>

<div class="af-panel" id="afp2">
<div class="af-keybox"><b>Heroin = 3,6-diacetylmorphine (diamorphine, diacetate)</b><br>Semi-synthetic; synthesized from morphine by mixing with acetic anhydride.</div>
<div class="af-card"><div class="af-label lm-red">Potency</div><div class="af-text">
&bull; Orally: <b>1.5 times</b> more potent than morphine<br>
&bull; Parenterally: <b>2&ndash;4 times</b> more potent<br>
&bull; Fatal dose: 50 mg<br>
&bull; More rapid blood-brain barrier penetration than morphine
</div></div>
<div class="af-card"><div class="af-label lm-amber">Metabolism</div><div class="af-text">
Heroin &rarr; <b>6-monoacetylmorphine</b> (more potent than morphine) &rarr; Morphine<br>
Hence detected in body as morphine. Heroin has lower mu receptor affinity itself, but its metabolite is highly potent.<br>
Heroin lower affinity for mu receptor but 6-monoacetylmorphine &gt; morphine in potency.
</div></div>
<div class="af-card"><div class="af-label lm-blue">Two forms</div><div class="af-text">
&bull; <b>Salt (hydrochloride):</b> white powder, highly water-soluble, IV/SC use; "mainliners" (IV) = needle-track ulcers; SC users = "skin popping"<br>
&bull; <b>Base (pure alkaloid):</b> <b>"Brown sugar"</b> or black taar; most prevalent in India
</div></div>
<div class="af-infobox">Heroin is metabolised to morphine &mdash; so if heroin was being abused, morphine is what is found at autopsy in liver, lymph nodes, etc.</div>
</div>

<div class="af-panel" id="afp3">
<div class="af-keybox"><b>Fentanyl &mdash; synthetic opiate, mu receptor agonist, 80 times more potent than morphine</b></div>
<div class="af-card"><div class="af-label lm-red">Analogues</div><div class="af-text">Sufentanil &bull; Alfentanil &bull; Carfentanil (even more potent)<br>
<b>Designer drugs (fentanyl derivatives):</b><br>
&bull; "China white" = Afentanil (alphafentanyl)<br>
&bull; 3-methylfentanyl<br>
&bull; Flourofentanyl<br>
Can be sniffed, rubbed, smoked, or injected
</div></div>
<div class="af-card"><div class="af-label lm-blue">Forensic significance</div><div class="af-text">
&bull; Exhibit stronger euphoria than any other opioids &mdash; high abuse potential<br>
&bull; Can be converted to aerosol form &mdash; used in modern warfare/hostage situations to subdue enemies without bloodshed<br>
&bull; Duration: minutes to 1 hour (ultra-short acting)<br>
&bull; Clinical features same as morphine/heroin
</div></div>
</div>

<div class="af-panel" id="afp4">
<div class="af-keybox"><b>Body Packer Syndrome (Mule / Bodypacker)</b><br>Individual who transports illicit drugs by swallowing wrapped drug packets.</div>
<div class="af-card"><div class="af-label lm-amber">Method</div><div class="af-text">
&bull; Swallows packets packed in gut-resistant plastic, latex condoms, gloves, or balloons<br>
&bull; Also inserted rectally or vaginally<br>
&bull; After arrival at destination: cathartics self-administered, packets defaecated<br>
&bull; Most common with cocaine; also heroin, amphetamine, cannabis
</div></div>
<div class="af-card"><div class="af-label lm-red">Clinical features</div><div class="af-text">
&bull; Usually asymptomatic<br>
&bull; Serious toxicity if packet ruptures &rarr; acute signs of poisoning<br>
&bull; Death reported from intestinal obstruction and perforation
</div></div>
<div class="af-card"><div class="af-label lm-blue">Diagnosis <span class="hy-inline">MCQ</span></div><div class="af-text">
&bull; <b>Abdominal X-ray</b> (first choice and best)<br>
&bull; Ultrasound or CT scan (if X-ray unclear)<br>
&bull; MRI: does NOT visualise packets (no protons in drug)<br>
&bull; Faecal examination over a few days in some cases
</div></div>
<div class="af-card"><div class="af-label lm-green">Management</div><div class="af-text">
<b>Asymptomatic:</b><br>
&bull; Whole bowel irrigation with polyethylene glycol (PEG) solution<br>
&bull; Alternative: wait until packets move to colon, then low-volume phosphosoda enemas or high-volume saline enemas<br>
&bull; No food until all packets in colon; Metoclopramide 10 mg 8th hourly to encourage gastric emptying<br>
&bull; Empty rectum first with bisacodyl suppository<br><br>
<b>Symptomatic (packet rupture):</b><br>
&bull; Continuous-infusion naloxone + activated charcoal + whole bowel irrigation<br>
&bull; Surgical intervention for intestinal perforation or obstruction
</div></div>
</div>
</div>

<script>
function afShow(i,btn){
  document.querySelectorAll('.af-panel').forEach(function(p,j){p.classList.toggle('af-show',j===i);});
  document.querySelectorAll('.af-tab').forEach(function(b){b.classList.remove('af-on');});
  if(btn) btn.classList.add('af-on');
}
</script>`
      }
    ],
  ]
};
