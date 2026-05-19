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
<b>Result:</b> High anion gap metabolic acidosis + selective injury to optic nerve and basal ganglia.<br><br>
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
&bull; Convulsions, extrapyramidal signs (rigidity, braykinesia)<br>
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
<b>AG &gt;20 with pH &lt;7.3 = severe poisoning</b>.<br><br>
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
<text font-size="11" fill="#888" x="175" y="20" text-anchor="middle">TOXIC CASCADE</text>
<text font-size="11" fill="#1D9E75" x="490" y="20" text-anchor="middle">TREATMENT</text>
<rect x="75" y="30" width="200" height="48" rx="7" fill="#FEF3DC" stroke="#EF9F27" stroke-width="1"/>
<text font-size="13" font-weight="600" fill="#854F0B" x="175" y="50" text-anchor="middle">Methanol ingested</text>
<text font-size="11" fill="#854F0B" x="175" y="67" text-anchor="middle">Absorbed 30&ndash;60 min &middot; 30 mL fatal</text>
<path class="fg-cascade-line" d="M277 54 L338 54" fill="none" stroke="#378ADD" stroke-width="1.5" marker-end="url(#barr)"/>
<rect x="340" y="30" width="200" height="48" rx="7" fill="#E6F1FB" stroke="#378ADD" stroke-width="1"/>
<text font-size="13" font-weight="600" fill="#185FA5" x="440" y="50" text-anchor="middle">Gastric lavage</text>
<text font-size="11" fill="#185FA5" x="440" y="67" text-anchor="middle">NaHCO<tspan baseline-shift="sub" font-size="9">3</tspan> solution &mdash; within 1&ndash;2 h</text>
<line class="fg-cascade-line" x1="175" y1="80" x2="175" y2="118" stroke="#EF9F27" stroke-width="1.5" marker-end="url(#arr)"/>
<text font-size="10" fill="#888" x="184" y="104">ADH enzyme</text>
<rect x="75" y="120" width="200" height="48" rx="7" fill="#FEF3DC" stroke="#EF9F27" stroke-width="1"/>
<text font-size="13" font-weight="600" fill="#854F0B" x="175" y="140" text-anchor="middle">Formaldehyde</text>
<text font-size="11" fill="#854F0B" x="175" y="157" text-anchor="middle">Rapidly converted &rarr; formate</text>
<path class="fg-cascade-line" d="M277 144 L338 144" fill="none" stroke="#1D9E75" stroke-width="1.5" marker-end="url(#tarr)"/>
<rect x="340" y="110" width="200" height="66" rx="7" fill="#E1F5EE" stroke="#1D9E75" stroke-width="1.5"/>
<text font-size="13" font-weight="600" fill="#0F6E56" x="440" y="132" text-anchor="middle">Fomepizole / Ethanol</text>
<text font-size="11" fill="#0F6E56" x="440" y="149" text-anchor="middle">Block ADH &mdash; stop cascade here</text>
<text font-size="11" fill="#0F6E56" x="440" y="166" text-anchor="middle">Start ASAP, even before lab results</text>
<line class="fg-cascade-line" x1="175" y1="170" x2="175" y2="208" stroke="#EF9F27" stroke-width="1.5" marker-end="url(#arr)"/>
<text font-size="10" fill="#888" x="184" y="194">Aldehyde DH</text>
<rect x="75" y="210" width="200" height="64" rx="7" fill="#FCEBEB" stroke="#E24B4A" stroke-width="1.5"/>
<text font-size="13" font-weight="600" fill="#791F1F" x="175" y="232" text-anchor="middle">Formic acid &#9888; KEY TOXIN</text>
<text font-size="11" fill="#791F1F" x="175" y="249" text-anchor="middle">Blocks Complex IV (cytochrome c</text>
<text font-size="11" fill="#791F1F" x="175" y="264" text-anchor="middle">oxidase) &rarr; ATP failure</text>
<path class="fg-cascade-line" d="M277 242 L338 242" fill="none" stroke="#1D9E75" stroke-width="1.5" marker-end="url(#tarr)"/>
<rect x="340" y="220" width="200" height="66" rx="7" fill="#E1F5EE" stroke="#1D9E75" stroke-width="1"/>
<text font-size="13" font-weight="600" fill="#0F6E56" x="440" y="242" text-anchor="middle">Folinic acid (leucovorin)</text>
<text font-size="11" fill="#0F6E56" x="440" y="259" text-anchor="middle">1&ndash;2 mg/kg IV every 6 hrs</text>
<text font-size="11" fill="#0F6E56" x="440" y="276" text-anchor="middle">Converts formate &rarr; CO<tspan baseline-shift="sub" font-size="9">2</tspan> + H<tspan baseline-shift="sub" font-size="9">2</tspan>O</text>
<line class="fg-cascade-line" x1="175" y1="276" x2="120" y2="318" stroke="#A32D2D" stroke-width="1.5" marker-end="url(#rarr)"/>
<line class="fg-cascade-line" x1="175" y1="276" x2="230" y2="318" stroke="#A32D2D" stroke-width="1.5" stroke-dasharray="4 3" marker-end="url(#rarr)"/>
<rect x="30" y="320" width="170" height="52" rx="7" fill="#FCEBEB" stroke="#E24B4A" stroke-width="1"/>
<text font-size="12" font-weight="600" fill="#791F1F" x="115" y="342" text-anchor="middle">Metabolic acidosis</text>
<text font-size="11" fill="#791F1F" x="115" y="360" text-anchor="middle">pH &lt;7.0 &middot; AG &gt;20</text>
<path class="fg-cascade-line" d="M202 346 L280 390 L338 390" fill="none" stroke="#378ADD" stroke-width="1.5" marker-end="url(#barr)"/>
<rect x="340" y="366" width="200" height="52" rx="7" fill="#E6F1FB" stroke="#378ADD" stroke-width="1"/>
<text font-size="13" font-weight="600" fill="#185FA5" x="440" y="388" text-anchor="middle">NaHCO<tspan baseline-shift="sub" font-size="9">3</tspan> IV</text>
<text font-size="11" fill="#185FA5" x="440" y="405" text-anchor="middle">500&ndash;800 mL of 7.5% &mdash; slow infusion</text>
<rect x="204" y="320" width="160" height="52" rx="7" fill="#FCEBEB" stroke="#E24B4A" stroke-width="1"/>
<text font-size="12" font-weight="600" fill="#791F1F" x="284" y="340" text-anchor="middle">Optic + Putamen</text>
<text font-size="11" fill="#791F1F" x="284" y="358" text-anchor="middle">Necrosis &middot; CT bilateral hypodensity</text>
<path class="fg-cascade-line" d="M277 252 L308 252 L308 448 L338 448" fill="none" stroke="#7F77DD" stroke-width="1.5" marker-end="url(#parr)"/>
<rect x="340" y="432" width="200" height="80" rx="7" fill="#EEEDFE" stroke="#7F77DD" stroke-width="1.5"/>
<text font-size="13" font-weight="600" fill="#534AB7" x="440" y="456" text-anchor="middle">Haemodialysis</text>
<text font-size="11" fill="#534AB7" x="440" y="473" text-anchor="middle">Removes methanol + formate</text>
<text font-size="11" fill="#534AB7" x="440" y="490" text-anchor="middle">+ formaldehyde simultaneously</text>
<text font-size="11" fill="#534AB7" x="440" y="507" text-anchor="middle">Indicated if level &gt;25&ndash;50 mg%</text>
<line class="fg-cascade-line" x1="175" y1="374" x2="175" y2="536" stroke="#791F1F" stroke-width="1.5" marker-end="url(#rarr)"/>
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
<line class="fg-cascade-line" x1="175" y1="606" x2="175" y2="654" stroke="#791F1F" stroke-width="2" marker-end="url(#rarr)"/>
<rect x="60" y="656" width="230" height="52" rx="7" fill="#FCEBEB" stroke="#E24B4A" stroke-width="2"/>
<text font-size="13" font-weight="600" fill="#791F1F" x="175" y="678" text-anchor="middle">Respiratory failure</text>
<text font-size="11" fill="#791F1F" x="175" y="695" text-anchor="middle">PRIMARY cause of death in methanol</text>
<path class="fg-cascade-line" d="M292 682 L338 682" fill="none" stroke="#378ADD" stroke-width="1.5" marker-end="url(#barr)"/>
<rect x="340" y="656" width="200" height="52" rx="7" fill="#E6F1FB" stroke="#378ADD" stroke-width="1"/>
<text font-size="13" font-weight="600" fill="#185FA5" x="440" y="678" text-anchor="middle">Mechanical ventilation</text>
<text font-size="11" fill="#185FA5" x="440" y="695" text-anchor="middle">Intubate early &middot; ICU admission</text>
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
<div class="or-keybox"><p><b>Sigma receptor &mdash; NOT an opioid receptor <span class="hy-inline">Exam trap</span></b><br>Insensitive to naloxone &mdash; the defining characteristic of opioid receptors. Hence no longer classified as opioid.<br>Dextromethorphan and Pentazocine are sigma agonists &rarr; psychotomimetic effects and movement disorders.<br>Epsilon and Zeta receptors: postulated to exist but not demonstrated so far.</p></div>
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
.lm-red{color:#A32D2D;} .lm-blue{color:#185FA5;} .lm-green{color:#0F6E56;} .lm-purple{color:#534AB7;}
.hy-inline{display:inline-block;background:#e8ff47;color:#1a1a1a;font-size:10px;font-weight:700;padding:1px 6px;border-radius:10px;margin-left:4px;vertical-align:middle;}
.af-keybox{border-left:3px solid #E24B4A;padding:8px 14px;background:#FCEBEB;border-radius:0 6px 6px 0;margin-bottom:8px;font-size:13px;color:#791F1F;line-height:1.6;}
.af-infobox{border-left:3px solid #378ADD;padding:8px 14px;background:#E6F1FB;margin-bottom:8px;font-size:13px;color:#185FA5;line-height:1.6;}
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
Hence detected in body as morphine. Heroin has lower mu receptor affinity itself, but its metabolite is highly potent.
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

    "Forensic Medicine: Mechanical Asphyxia": [
      {
        step: 1,
        title: "Core Definition & The Pulse Paradox",
        text: `<div class="def-grid">
          <div class="def-card">
            <div class="label">Practical Definition</div>
            <p>A fatal condition caused by <strong>external physical forces or mechanical barriers</strong> interfering with the uptake, transport, or cellular utilization of oxygen—mechanically induced hypoxia coupled with hypercapnia.</p>
          </div>
          <div class="def-card" style="background:#faece7; border-left-color:#D85A30;">
            <div class="label" style="color:#D85A30;">Etymological Misnomer</div>
            <p><em>Asphyxia</em> (Greek) literally means <strong>"absence of pulse"</strong>. This is a complete physiological misnomer; during airway obstruction, the heart continues to pump unoxygenated blood for several minutes.</p>
          </div>
        </div>
        
        <details class="hall-activity" style="margin-top:14px; border:2px dashed #5346b0; border-radius:8px; padding:10px; background:#fdfdfd; cursor:pointer;">
          <summary style="font-weight:700; color:#5346b0; font-size:13px; outline:none;">🧠 Concept Challenge: The Airway Radial Pulse Paradox</summary>
          <p style="font-size:12px; margin-top:8px; line-height:1.5; color:#333; cursor:default;">
            <strong>Question:</strong> If an assailant completely seals a victim's airway with a soft cushion (Smothering), does the radial pulse vanish instantly at that exact moment?<br><br>
            <strong>Mechanism:</strong> No. The sinus node continues firing and the myocardium contracts using residual dissolved oxygen. The pulse remains palpable for roughly 3 to 5 minutes against an empty oxygen reservoir before bradycardia and terminal electromechanical dissociation set in. This illustrates why the historical Greek definition is a physiological misnomer.
          </p>
        </details>`
      },
      {
        step: 2,
        title: "Pathophysiology — The Asphyxial Triad Loop",
        text: `<div class="cycle-wrap" style="display: flex; align-items: flex-start; justify-content: center; gap: 10px; margin-bottom:12px;">
          <div class="cycle-col" style="display:flex; flex-direction:column; gap:6px;">
            <div class="cycle-box cycle-amber" style="background:#faeeda; color:#633806; border:1px solid #EF9F27; padding:6px; font-size:12px; text-align:center; border-radius:6px; width:140px;">Deficient Lung Oxygenation</div>
            <div style="text-align:center; color:#888;">↓</div>
            <div class="cycle-box cycle-amber" style="background:#faeeda; color:#633806; border:1px solid #EF9F27; padding:6px; font-size:12px; text-align:center; border-radius:6px; width:140px;">Decreased Pulmonary Flow</div>
            <div style="text-align:center; color:#888;">↓</div>
            <div class="cycle-box cycle-amber" style="background:#faeeda; color:#633806; border:1px solid #EF9F27; padding:6px; font-size:12px; text-align:center; border-radius:6px; width:140px;">Systemic Hypoxia</div>
          </div>
          <div style="display:flex; flex-direction:column; justify-content:center; padding-top:40px;">
            <div style="background:#faece7; color:#4A1B0C; border:1px solid #D85A30; font-size:13px; font-weight:700; padding:12px; border-radius:50%; width:90px; text-align:center;">VENOUS STASIS</div>
          </div>
          <div class="cycle-col" style="display:flex; flex-direction:column; gap:6px;">
            <div class="cycle-box cycle-teal" style="background:#e1f5ee; color:#04342c; border:1px solid #1D9E75; padding:6px; font-size:12px; text-align:center; border-radius:6px; width:140px;">Capillary Dilatation</div>
            <div style="text-align:center; color:#888;">↓</div>
            <div class="cycle-box cycle-teal" style="background:#e1f5ee; color:#04342c; border:1px solid #1D9E75; padding:6px; font-size:12px; text-align:center; border-radius:6px; width:140px;">Endothelial Hypoxic Injury</div>
            <div style="text-align:center; color:#888;">↓</div>
            <div class="cycle-box cycle-teal" style="background:#e1f5ee; color:#04342c; border:1px solid #1D9E75; padding:6px; font-size:12px; text-align:center; border-radius:6px; width:140px;">Microvascular Leakage</div>
          </div>
        </div>
        <div style="background:#fffbe6; border:1px solid #EF9F27; border-radius:6px; padding:10px; font-size:12px; color:#633806; line-height:1.5;">
          <strong>Mechanistic Rule:</strong> The combination of profound endothelial hypoxic injury and an abrupt, severe spike in post-obstruction venous backpressure forces the clinical expression of the classic triad: <strong>Petechiae, Congestion, and Cyanosis</strong>.
        </div>`
      },
      {
        step: 3,
        title: "Classification of Asphyxial Deaths",
        text: `<table style="width:100%; border-collapse:collapse; font-size:12px;">
          <thead>
            <tr style="background:#2d2460; color:#fff;">
              <th style="padding:6px; text-align:left;">Category</th>
              <th style="padding:6px; text-align:left;">Mechanical Mechanism</th>
              <th style="padding:6px; text-align:left;">Primary Forensic Examples</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style="padding:6px; border-bottom:1px solid #eee;"><strong>Suffocation</strong></td>
              <td style="padding:6px; border-bottom:1px solid #eee;">Closure of external orifices or oxygen-starved environment</td>
              <td style="padding:6px; border-bottom:1px solid #eee;">Smothering, Choking, Gagging, Environmental Vitiation</td>
            </tr>
            <tr style="background:#fafafa;">
              <td style="padding:6px; border-bottom:1px solid #eee;"><strong>Neck Constriction</strong></td>
              <td style="padding:6px; border-bottom:1px solid #eee;">Direct external force compressing vasculature and airways</td>
              <td style="padding:6px; border-bottom:1px solid #eee;">Hanging, Ligature Strangulation, Throttling (Manual)</td>
            </tr>
            <tr>
              <td style="padding:6px; border-bottom:1px solid #eee;"><strong>Chest Fixation</strong></td>
              <td style="padding:6px; border-bottom:1px solid #eee;">External compression preventing respiratory wall expansion</td>
              <td style="padding:6px; border-bottom:1px solid #eee;">Traumatic Asphyxia, Crowd Crush, Burking</td>
            </tr>
            <tr style="background:#fafafa;">
              <td style="padding:6px; border-bottom:1px solid #eee;"><strong>Postural Distortion</strong></td>
              <td style="padding:6px; border-bottom:1px solid #eee;">Inability to breathe safely due to mechanical body placement</td>
              <td style="padding:6px; border-bottom:1px solid #eee;">Positional Asphyxia, Restraint Custody Incidents</td>
            </tr>
          </tbody>
        </table>`
      },
      {
        step: 4,
        title: "Live Class Poll: The Specificity Challenge",
        text: `<style>
          .poll-box { background: #fcfcfc; border: 1px solid #ddd; border-radius: 8px; padding: 14px; font-family: system-ui, sans-serif; }
          .poll-title { font-weight: 700; font-size: 13px; color: #2d2460; margin-bottom: 10px; }
          .poll-opt-lbl { display: block; padding: 10px; border: 1px solid #ddd; border-radius: 6px; margin-bottom: 6px; cursor: pointer; font-size: 12px; position: relative; overflow: hidden; background: #fff; transition: background 0.15s; }
          .poll-opt-lbl:hover { background: #fbfbfc; border-color: #5346b0; }
          .poll-input { display: none; }
          .poll-bar { position: absolute; top: 0; left: 0; height: 100%; background: #e6f1fb; z-index: 1; width: 0%; opacity: 0; transition: width 0.4s ease, opacity 0.2s; }
          .poll-bar.bar-correct { background: #e1f5ee; }
          .poll-txt-wrap { position: relative; z-index: 2; display: flex; justify-content: space-between; width: 100%; }
          .poll-pct { opacity: 0; font-weight: 700; font-size: 12px; color: #185FA5; }
          .poll-pct.pct-correct { color: #0F6E56; }
          .poll-fb { display: none; margin-top: 10px; padding: 10px; border-radius: 6px; font-size: 12px; line-height: 1.5; border-left: 4px solid; }
          
          /* CSS State Trigger Engine */
          .poll-input:checked ~ .poll-opt-lbl { border-color: #bbb; background: #f8f8f8; pointer-events: none; }
          .poll-input:checked ~ .poll-opt-lbl .poll-bar { opacity: 1; }
          .poll-input:checked ~ .poll-opt-lbl .poll-pct { opacity: 1; }
          
          #asph-p1:checked ~ .lbl-p1 .poll-bar { width: 44%; }
          #asph-p2:checked ~ .lbl-p2 .poll-bar { width: 14%; }
          #asph-p3:checked ~ .lbl-p3 .poll-bar { width: 8%; }
          #asph-p4:checked ~ .lbl-p4 .poll-bar { width: 34%; }
          
          #asph-p1:checked ~ .fb-p1 { display: block; background: #fdf6f6; border-color: #E24B4A; color: #791F1F; }
          #asph-p2:checked ~ .fb-p2 { display: block; background: #fdf6f6; border-color: #E24B4A; color: #791F1F; }
          #asph-p3:checked ~ .fb-p3 { display: block; background: #fdf6f6; border-color: #E24B4A; color: #791F1F; }
          #asph-p4:checked ~ .fb-p4 { display: block; background: #f4fbf9; border-color: #1D9E75; color: #085041; }
        </style>
        <div class="poll-box">
          <div class="poll-title">📊 ANATOMICAL POLL: Which postmortem finding is 100% specific & pathognomonic for mechanical asphyxia?</div>
          
          <input type="radio" id="asph-p1" name="asph_poll_grp" class="poll-input">
          <input type="radio" id="asph-p2" name="asph_poll_grp" class="poll-input">
          <input type="radio" id="asph-p3" name="asph_poll_grp" class="poll-input">
          <input type="radio" id="asph-p4" name="asph_poll_grp" class="poll-input">

          <label for="asph-p1" class="poll-opt-lbl lbl-p1"><div class="poll-bar"></div><div class="poll-txt-wrap"><span>A) Deep cutaneous cyanosis of lips & nailbeds</span><span class="poll-pct">44%</span></div></label>
          <label for="asph-p2" class="poll-opt-lbl lbl-p2"><div class="poll-bar"></div><div class="poll-txt-wrap"><span>B) Visceral subpleural Tardieu hemorrhages</span><span class="poll-pct">14%</span></div></label>
          <label for="asph-p3" class="poll-opt-lbl lbl-p3"><div class="poll-bar"></div><div class="poll-txt-wrap"><span>C) Total fluidity of blood inside the right atrium</span><span class="poll-pct">8%</span></div></label>
          <label for="asph-p4" class="poll-opt-lbl lbl-p4"><div class="poll-bar bar-correct"></div><div class="poll-txt-wrap"><span style="font-weight:600;">D) None of the above</span><span class="poll-pct pct-correct">34% (Correct)</span></div></label>

          <div class="poll-fb fb-p1">❌ <strong>Incorrect (44% voted):</strong> Cyanosis is easily obscured or perfectly simulated by standard postmortem hypostasis. Pathologists never rely on it alone.</div>
          <div class="poll-fb fb-p2">❌ <strong>Incorrect (14% voted):</strong> Tardieu spots are caused by sudden agonal elevations in venule pressure. They appear in up to 4.3% of purely natural sudden cardiac deaths.</div>
          <div class="poll-fb fb-p3">❌ <strong>Incorrect (8% voted):</strong> Postmortem blood fluidity is regulated by erratic postmortem fibrinolysin activity. It is highly non-specific.</div>
          <div class="poll-fb fb-p4">✅ <strong>Correct Matrix! (34% voted):</strong> None of Adelson's classic diagnostic quintet parameters are pathognomonic. Diagnosis stands or falls completely on finding localized mechanical blockages or compression signatures.</div>
        </div>`
      },
      {
        step: 5,
        title: "Interactive Match-the-Vector Lab",
        text: `<style>
          .lab-card { background: #fdfdfd; border: 1px solid #ddd; border-radius: 6px; padding: 12px; margin-bottom: 12px; font-family: system-ui, sans-serif; }
          .lab-profile-head { background: #2d2460; color: #fff; font-size: 10px; font-weight: 700; padding: 3px 8px; border-radius: 4px; display: inline-block; margin-bottom: 6px; letter-spacing: 0.5px; }
          .lab-desc { font-size: 12px; color: #222; font-weight: 600; margin-bottom: 8px; line-height: 1.4; }
          .lab-btn-row { display: flex; gap: 6px; flex-wrap: wrap; }
          .lab-lbl { font-size: 11px; padding: 5px 12px; border: 1px solid #ccc; border-radius: 20px; cursor: pointer; background: #fff; color: #555; transition: all 0.15s; }
          .lab-lbl:hover { border-color: #5346b0; background: #fcfbfe; }
          .lab-radio { display: none; }
          .lab-feedback-panel { display: none; margin-top: 8px; padding: 8px 12px; border-radius: 4px; font-size: 12px; line-height: 1.4; border-left: 3px solid; }
          
          /* Vector Engine 1 */
          #r-v1-a:checked ~ .lab-card .l-v1-a { background: #fcebeb; border-color: #E24B4A; color: #A32D2D; }
          #r-v1-b:checked ~ .lab-card .l-v1-b { background: #e1f5ee; border-color: #1D9E75; color: #0F6E56; font-weight: 700; }
          #r-v1-c:checked ~ .lab-card .l-v1-c { background: #fcebeb; border-color: #E24B4A; color: #A32D2D; }
          #r-v1-a:checked ~ .fb-v1-a { display: block; background: #fdf6f6; border-color: #E24B4A; color: #791F1F; }
          #r-v1-b:checked ~ .fb-v1-b { display: block; background: #f4fbf9; border-color: #1D9E75; color: #085041; }
          #r-v1-c:checked ~ .fb-v1-c { display: block; background: #fdf6f6; border-color: #E24B4A; color: #791F1F; }

          /* Vector Engine 2 */
          #r-v2-a:checked ~ .lab-card .l-v2-a { background: #e1f5ee; border-color: #1D9E75; color: #0F6E56; font-weight: 700; }
          #r-v2-b:checked ~ .lab-card .l-v2-b { background: #fcebeb; border-color: #E24B4A; color: #A32D2D; }
          #r-v2-c:checked ~ .lab-card .l-v2-c { background: #fcebeb; border-color: #E24B4A; color: #A32D2D; }
          #r-v2-a:checked ~ .fb-v2-a { display: block; background: #f4fbf9; border-color: #1D9E75; color: #085041; }
          #r-v2-b:checked ~ .fb-v2-b { display: block; background: #fdf6f6; border-color: #E24B4A; color: #791F1F; }
          #r-v2-c:checked ~ .fb-v2-c { display: block; background: #fdf6f6; border-color: #E24B4A; color: #791F1F; }
        </style>
        
        <input type="radio" id="r-v1-a" name="v1_grp" class="lab-radio">
        <input type="radio" id="r-v1-b" name="v1_grp" class="lab-radio">
        <input type="radio" id="r-v1-c" name="v1_grp" class="lab-radio">

        <input type="radio" id="r-v2-a" name="v2_grp" class="lab-radio">
        <input type="radio" id="r-v2-b" name="v2_grp" class="lab-radio">
        <input type="radio" id="r-v2-c" name="v2_grp" class="lab-radio">

        <div class="lab-card">
          <div class="lab-profile-head">ANATOMICAL VECTOR PATTERN 1</div>
          <div class="lab-desc">A continuous, low, completely horizontal groove encircling the neck smoothly. Force application occurs entirely independent of body mass.</div>
          <div class="lab-btn-row">
            <label for="r-v1-a" class="lab-lbl l-v1-a">Hanging</label>
            <label for="r-v1-b" class="lab-lbl l-v1-b">Ligature Strangulation</label>
            <label for="r-v1-c" class="lab-lbl l-v1-c">Throttling (Manual)</label>
          </div>
        </div>
        <div class="lab-feedback-panel fb-v1-a">❌ <strong>Incorrect Match:</strong> Hanging creates an incomplete, asymmetrical oblique mark running upwards toward a suspension point driven by gravity.</div>
        <div class="lab-feedback-panel fb-v1-b">✅ <strong>Correct Match!</strong> Ligature strangulation produces a horizontal, uniform, fully continuous mark around the circumference of the lower neck.</div>
        <div class="lab-feedback-panel fb-v1-c">❌ <strong>Incorrect Match:</strong> Throttling utilizes human fingers, leaving discrete, scattered fingertip contusions and fingernail claw scratches rather than a linear groove.</div>

        <div class="lab-card" style="margin-top:14px;">
          <div class="lab-profile-head" style="background:#0F6E56;">ANATOMICAL VECTOR PATTERN 2</div>
          <div class="lab-desc">An incomplete, oblique, non-uniform loop running upward along the jawline toward an asymmetric suspension apex.</div>
          <div class="lab-btn-row">
            <label for="r-v2-a" class="lab-lbl l-v2-a">Hanging</label>
            <label for="r-v2-b" class="lab-lbl l-v2-b">Ligature Strangulation</label>
            <label for="r-v2-c" class="lab-lbl l-v2-c">Traumatic Chest Asphyxia</label>
          </div>
        </div>
        <div class="lab-feedback-panel fb-v2-a">✅ <strong>Correct Match!</strong> Hanging tension maps obliquely upward, clearing the knot side and creating a characteristically asymmetric suspension mark.</div>
        <div class="lab-feedback-panel fb-v2-b">❌ <strong>Incorrect Match:</strong> Ligature strangulation is a horizontal traction loop running completely flat around the neck level.</div>
        <div class="lab-feedback-panel fb-v2-c">❌ <strong>Incorrect Match:</strong> Traumatic chest asphyxia presents with mechanical chest wall fixation, leaving zero linear neck loop marks.</div>`
      },
      {
        step: 6,
        title: "Postmortem Findings: Diagnostic Case Review",
        text: `<p style="font-size:12px; margin-bottom:8px; line-height:1.4;">Analyze the postmortem rollout sequence below to differentiate general agonal signs from specific mechanical findings:</p>
        <div style="display:flex; flex-direction:column; gap:8px;">
          <details style="background:#fffdf5; border-left:4px solid #EF9F27; border:1px solid #ddd; padding:8px; border-radius:4px; font-size:12px; cursor:pointer;">
            <summary style="font-weight:700; color:#854F0B; outline:none;">Phase 1: External Presentations</summary>
            <p style="margin-top:6px; color:#222; cursor:default;">A 19-year-old collapses suddenly during intense running. External examination reveals dramatic, dense petechial hemorrhages covering both eyelids and bulbar conjunctivae.</p>
          </details>
          <details style="background:#fffaf8; border-left:4px solid #D85A30; border:1px solid #ddd; padding:8px; border-radius:4px; font-size:12px; cursor:pointer;">
            <summary style="font-weight:700; color:#4A1B0C; outline:none;">Phase 2: Internal Organ Mapping</summary>
            <p style="margin-top:6px; color:#222; cursor:default;">Internal opening shows completely normal neck tissues without bruising. However, deep visceral petechiae (Tardieu spots) are clustered across the posterior pericardial groove of the heart. The blood inside all major organs is completely fluid and uncoagulated.</p>
          </details>
          <details style="background:#fdf6f6; border-left:4px solid #A32D2D; border:1px solid #ddd; padding:8px; border-radius:4px; font-size:12px; cursor:pointer;">
            <summary style="font-weight:700; color:#791F1F; outline:none;">Phase 3: Pathological Diagnosis</summary>
            <p style="margin-top:6px; color:#222; cursor:default;"><strong>Final Cause of Death:</strong> Natural sudden cardiac death due to a congenital single coronary artery ostium. <br><br><strong>Key Takeaway:</strong> Petechiae, fluid blood, and congestion are non-specific agonal changes. They manifest during acute right-heart failure backpressure spikes and are <strong>never pathognomonic</strong> on their own.</p>
          </details>
        </div>`
      },
      {
        step: 7,
        title: "Medicolegal Interpretation & Certification Review",
        text: `<blockquote style="border-left:4px solid #3b6d11; padding:6px 12px; background:#eaf3de; font-style:italic; font-size:12px; color:#173404; margin-bottom:10px;">
          "The diagnosis of asphyxia stands and falls with the proof of the asphyxiating mechanism." — Hofmann's Rule
        </blockquote>
        <div style="background:#fffcf7; border:1px solid #ddd; padding:10px; font-family:monospace; font-size:11px; border-radius:4px; line-height:1.4;">
          <strong>POSTMORTEM CLINICAL SUMMARY (MOCK EXTRACT):</strong><br>
          "External inspection reveals intense cyanosis of lips and nailbeds, alongside confluent conjunctival petechiae. Internal evaluation confirms profound congestion of the lungs and dark fluid blood. No local neck trauma or mechanical facial patterns identified.<br>
          <strong>OPINION:</strong> Cause of death is certified definitively as Homicidal Mechanical Asphyxia based on Adelson's Classic Quintet."
        </div>
        <details style="margin-top:10px; background:#fdf6f6; border:1px solid #E24B4A; padding:8px; border-radius:6px; font-size:12px; cursor:pointer;">
          <summary style="font-weight:700; color:#A32D2D; outline:none;">⚖️ Courtroom Analysis: Systemic Vulnerability</summary>
          <p style="margin-top:6px; color:#333; cursor:default;">
            <strong>The Forensic Flaw:</strong> This certificate violates Hofmann's Rule. It states a violent mechanical manner of death based solely on non-specific, general visceral agonal markers without identifying a distinct local physical mechanism (e.g., a ligature groove, bruising, or an intra-airway object). In court, this opinion is unsustainable. If a mechanical obstruction cannot be verified and collateral proof is missing, the cause of death <strong>must be signed out as undetermined</strong>.
          </p>
        </details>`
      },
      {
        step: 8,
        title: "The Cyanosis-Anemia Absolute Threshold",
        text: `<p style="font-size:12px; line-height:1.5; margin-bottom:10px;">
          Cyanosis is a physical mass threshold effect, not an indicator of relative oxygen percentage. To manifest a cyanosed hue, a body requires an <strong>absolute mass threshold of &ge;5 g/dL of reduced (deoxygenated) hemoglobin</strong> inside the microcirculation.
        </p>
        <table style="width:100%; border-collapse:collapse; font-size:11px; text-align:left; margin-bottom:10px;">
          <thead>
            <tr style="background:#1f2937; color:#fff;">
              <th style="padding:5px;">Case Profile</th>
              <th style="padding:5px;">Total Hb</th>
              <th style="padding:5px;">O₂ Saturation</th>
              <th style="padding:5px;">Absolute Reduced Hb</th>
              <th style="padding:5px;">Cyanosis Visible?</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style="padding:5px; border-bottom:1px solid #eee;"><strong>Healthy Person</strong></td>
              <td style="padding:5px; border-bottom:1px solid #eee;">15 g/dL</td>
              <td style="padding:5px; border-bottom:1px solid #eee;">98% (Normal)</td>
              <td style="padding:5px; border-bottom:1px solid #eee;">~0.3 g/dL</td>
              <td style="padding:5px; border-bottom:1px solid #eee; font-weight:bold; color:green;">No (Pink)</td>
            </tr>
            <tr style="background:#fafafa;">
              <td style="padding:5px; border-bottom:1px solid #eee;"><strong>Mechanical Asphyxia</strong></td>
              <td style="padding:5px; border-bottom:1px solid #eee;">15 g/dL</td>
              <td style="padding:5px; border-bottom:1px solid #eee;">50% (Hypoxia)</td>
              <td style="padding:5px; border-bottom:1px solid #eee; font-weight:bold; color:#185FA5;">7.5 g/dL</td>
              <td style="padding:5px; border-bottom:1px solid #eee; font-weight:bold; color:#185FA5;">🟦 YES (Deep Blue)</td>
            </tr>
            <tr>
              <td style="padding:5px; border-bottom:1px solid #eee;"><strong>Severe Anemia</strong></td>
              <td style="padding:5px; border-bottom:1px solid #eee;">4.5 g/dL</td>
              <td style="padding:5px; border-bottom:1px solid #eee;">10% (Near Death)</td>
              <td style="padding:5px; border-bottom:1px solid #eee; font-weight:bold; color:#A32D2D;">4.05 g/dL</td>
              <td style="padding:5px; border-bottom:1px solid #eee; font-weight:bold; color:#A32D2D;">⬜ NO (Pale/Ghostly)</td>
            </tr>
          </tbody>
        </table>
        <div style="background:#e6f1fb; border-left:3px solid #378ADD; padding:10px; font-size:12px; color:#185FA5; line-height:1.5;">
          <strong>Physiological Principle:</strong> Cyanosis requires a physical structural canvas of red blood cells to show through. If a patient is severely anemic, they mathematically lack the hemoglobin mass to turn blue, no matter how badly they are suffocating. Therefore, a lack of cyanosis at autopsy does not rule out severe hypoxic death.
        </div>`
      }
    ],
    const pptxgen = require("pptxgenjs");

const pres = new pptxgen();
pres.layout = "LAYOUT_16x9";
pres.title = "Forensic Toxicology – Psychotropic Substances";

// ─── PALETTE ───────────────────────────────────────────────────────────────
const BG   = "0A0A0F";   // near-black
const C1   = "C8F251";   // lime green (accent)
const C2   = "FFFFFF";   // white
const CARD = "141420";   // card bg
const MUTED= "8B8B9A";   // muted text
const RED  = "E05C5C";
const TEAL = "4ECDC4";
const AMBER= "F6C744";

// Helper: slide background
function bg(slide) { slide.background = { color: BG }; }

// Helper: section accent bar left edge of card
function accentBar(slide, x, y, h, col) {
  slide.addShape(pres.shapes.RECTANGLE, { x, y, w: 0.06, h, fill: { color: col || C1 }, line: { type: "none" } });
}

// Helper: full-width card
function card(slide, x, y, w, h, col) {
  slide.addShape(pres.shapes.RECTANGLE, {
    x, y, w, h,
    fill: { color: col || CARD },
    line: { type: "none" },
    shadow: { type: "outer", blur: 10, offset: 3, angle: 135, color: "000000", opacity: 0.4 }
  });
}

// Helper: slide title
function title(slide, text, sub) {
  slide.addText(text, { x: 0.55, y: 0.22, w: 9, h: 0.55, fontSize: 32, bold: true, color: C2, fontFace: "Calibri", margin: 0 });
  if (sub) slide.addText(sub, { x: 0.55, y: 0.8, w: 9, h: 0.3, fontSize: 13, color: C1, fontFace: "Calibri", margin: 0 });
  slide.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 10, h: 0.08, fill: { color: C1 }, line: { type: "none" } });
}

// ─── SLIDE 1: TITLE SLIDE ───────────────────────────────────────────────────
{
  const s = pres.addSlide();
  bg(s);
  // Large coloured block left side
  s.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 4.2, h: 5.625, fill: { color: "111118" }, line: { type: "none" } });
  s.addShape(pres.shapes.RECTANGLE, { x: 4.2, y: 0, w: 0.06, h: 5.625, fill: { color: C1 }, line: { type: "none" } });
  s.addText("Forensic\nToxicology", { x: 0.4, y: 0.6, w: 3.6, h: 1.8, fontSize: 42, bold: true, color: C2, fontFace: "Calibri", valign: "top", margin: 0 });
  s.addText("Psychotropic Substances", { x: 0.4, y: 2.55, w: 3.6, h: 0.45, fontSize: 16, color: C1, fontFace: "Calibri", margin: 0 });
  s.addText("Barbiturates · Benzodiazepines · Amphetamines · Designer Drugs", { x: 0.4, y: 3.1, w: 3.6, h: 0.6, fontSize: 11, color: MUTED, fontFace: "Calibri", margin: 0 });
  s.addText("Based on KS Narayan Reddy's Essentials of Forensic Medicine\nUpdated with UpToDate · PubMed · UNODC · NCB India 2024 Data", { x: 0.4, y: 4.6, w: 3.6, h: 0.7, fontSize: 9, color: MUTED, fontFace: "Calibri", margin: 0 });
  // Right side bullets
  const topics = ["Definition & Relevance 2025", "Current Classification (UNODC/WHO)", "India Drug Abuse Data 2023-24", "Fentanyl Analogues & NPS", "Designer Drug Engineering", "Medicolegal Significance", "Barbiturates: Full Clinical Chain", "Benzodiazepines: Full Clinical Chain", "Amphetamines: Full Clinical Chain"];
  topics.forEach((t, i) => {
    s.addShape(pres.shapes.RECTANGLE, { x: 4.6, y: 0.6 + i * 0.53, w: 0.04, h: 0.3, fill: { color: C1 }, line: { type: "none" } });
    s.addText(t, { x: 4.76, y: 0.6 + i * 0.53, w: 5, h: 0.35, fontSize: 12, color: C2, fontFace: "Calibri", valign: "middle", margin: 0 });
  });
}

// ─── SLIDE 2: DEFINITION & RELEVANCE ────────────────────────────────────────
{
  const s = pres.addSlide();
  bg(s);
  title(s, "Psychotropic Drugs: Definition & Current Relevance", "Is the term still valid in 2025?");

  // Card left
  card(s, 0.35, 1.05, 4.4, 1.55);
  accentBar(s, 0.35, 1.05, 1.55, C1);
  s.addText("Legal Definition", { x: 0.55, y: 1.1, w: 4, h: 0.35, fontSize: 14, bold: true, color: C1, fontFace: "Calibri", margin: 0 });
  s.addText("Under India's NDPS Act 1985, a psychotropic substance is any substance that alters mental functioning by direct CNS action. This definition remains the operative legal standard in India.", { x: 0.55, y: 1.48, w: 4, h: 0.9, fontSize: 11, color: C2, fontFace: "Calibri", margin: 0 });

  card(s, 0.35, 2.75, 4.4, 1.5);
  accentBar(s, 0.35, 2.75, 1.5, TEAL);
  s.addText("WHO / UN Current Framing", { x: 0.55, y: 2.8, w: 4, h: 0.35, fontSize: 14, bold: true, color: TEAL, fontFace: "Calibri", margin: 0 });
  s.addText("WHO 2024 still uses 'psychotropic substance' for treaty scheduling. UNODC prefers 'New Psychoactive Substances (NPS)' for novel compounds; >1,396 NPS reported across 153 countries by 2024.", { x: 0.55, y: 3.18, w: 4, h: 0.9, fontSize: 11, color: C2, fontFace: "Calibri", margin: 0 });

  card(s, 0.35, 4.35, 4.4, 1.0);
  accentBar(s, 0.35, 4.35, 1.0, AMBER);
  s.addText("Is the Term Relevant?", { x: 0.55, y: 4.4, w: 4, h: 0.35, fontSize: 13, bold: true, color: AMBER, fontFace: "Calibri", margin: 0 });
  s.addText("Yes — legally indispensable under NDPS Act; scientifically broadened to include NPS, designer benzodiazepines, synthetic opioids and cathinones.", { x: 0.55, y: 4.78, w: 4, h: 0.5, fontSize: 11, color: C2, fontFace: "Calibri", margin: 0 });

  // Right: classification table
  card(s, 5.0, 1.05, 4.6, 4.3);
  s.addText("Current Forensic Classification (UNODC 2024)", { x: 5.15, y: 1.12, w: 4.3, h: 0.35, fontSize: 13, bold: true, color: C1, fontFace: "Calibri", margin: 0 });
  const cats = [
    ["Antipsychotics", "Haloperidol, Risperidone, Clozapine", C1],
    ["Anxiolytics", "Benzodiazepines, Z-drugs (Zolpidem)", TEAL],
    ["Hypnotics / Sedatives", "Barbiturates, GHB, Chloral hydrate", AMBER],
    ["Stimulants", "Amphetamine, MDMA, Mephedrone", RED],
    ["Synthetic Opioids", "Fentanyl, Carfentanil, Nitazenes", "E05C5C"],
    ["Synthetic Cannabinoids", "K2/Spice (indazole/indole-based)", MUTED],
    ["Dissociatives / Hallucinogens", "Ketamine, PCP, LSD, Psilocybin", "BB88FF"],
  ];
  cats.forEach(([name, ex, col], i) => {
    s.addShape(pres.shapes.RECTANGLE, { x: 5.1, y: 1.6 + i * 0.52, w: 0.04, h: 0.35, fill: { color: col }, line: { type: "none" } });
    s.addText(name, { x: 5.22, y: 1.6 + i * 0.52, w: 1.8, h: 0.35, fontSize: 11, bold: true, color: col, fontFace: "Calibri", valign: "middle", margin: 0 });
    s.addText(ex, { x: 7.05, y: 1.6 + i * 0.52, w: 2.45, h: 0.35, fontSize: 10, color: MUTED, fontFace: "Calibri", valign: "middle", margin: 0 });
  });
}

// ─── SLIDE 3: INDIA DATA ─────────────────────────────────────────────────────
{
  const s = pres.addSlide();
  bg(s);
  title(s, "Drug Abuse in India — 2023-24 Data", "NCB Annual Report · Ministry of Social Justice · NITI Aayog 2024");

  const stats = [
    ["~100 Million", "Total substance addicts\n(70% rise in 8 years)", C1],
    ["7 Crore", "Adults (18-75 yrs)\nusing illicit drugs", TEAL],
    ["1.18 Crore", "Children/adolescents\n(10-17 yrs) using drugs", RED],
    ["74,000", "Drug cases filed\nin 2023 (NCB)", AMBER],
  ];
  stats.forEach(([num, lab, col], i) => {
    const x = 0.35 + i * 2.42;
    card(s, x, 1.05, 2.2, 1.55, CARD);
    s.addShape(pres.shapes.RECTANGLE, { x, y: 1.05, w: 2.2, h: 0.06, fill: { color: col }, line: { type: "none" } });
    s.addText(num, { x: x + 0.1, y: 1.18, w: 2.0, h: 0.65, fontSize: 24, bold: true, color: col, fontFace: "Calibri", align: "center", margin: 0 });
    s.addText(lab, { x: x + 0.1, y: 1.85, w: 2.0, h: 0.65, fontSize: 10, color: MUTED, fontFace: "Calibri", align: "center", margin: 0 });
  });

  // Most abused substances table
  card(s, 0.35, 2.78, 9.3, 1.8);
  s.addText("Most Abused Substances — India (ranked)", { x: 0.5, y: 2.85, w: 9, h: 0.3, fontSize: 12, bold: true, color: C1, fontFace: "Calibri", margin: 0 });
  const drugs = [
    ["Cannabis", "2.8% prevalence", "UP, Punjab, Sikkim, Chhattisgarh", "Most widely abused; bhang, ganja, charas"],
    ["Opioids / Heroin", "2.1% prevalence", "Punjab, J&K, Northeast", "Heroin replaced opium as #1 opioid"],
    ["Codeine Syrups", "Rising sharply", "Pan-India, youth", "'Phenethyl' cough syrups — NCB 2024"],
    ["Methamphetamine", "Emerging; labs seized", "Northeast, Metro cities", "Mexican cartel links; meth labs in UP"],
    ["ATS / MDMA", "0.18%", "Urban nightlife circuits", "Ecstasy tablets from SE Asia"],
  ];
  drugs.forEach(([d, prev, geo, note], i) => {
    const y = 3.2 + i * 0.27;
    s.addText(d, { x: 0.55, y, w: 2.1, h: 0.25, fontSize: 10, bold: true, color: C2, fontFace: "Calibri", margin: 0 });
    s.addText(prev, { x: 2.7, y, w: 1.5, h: 0.25, fontSize: 10, color: C1, fontFace: "Calibri", margin: 0 });
    s.addText(geo, { x: 4.25, y, w: 2.5, h: 0.25, fontSize: 10, color: TEAL, fontFace: "Calibri", margin: 0 });
    s.addText(note, { x: 6.8, y, w: 2.7, h: 0.25, fontSize: 9, color: MUTED, fontFace: "Calibri", margin: 0 });
  });

  card(s, 0.35, 4.7, 9.3, 0.72);
  s.addText("⚠  NCB 2024: Drug seizures up 25% QoQ since 2019. 65% of narcotic transactions via encrypted platforms (Telegram/Signal). 20% of UP pharmacies found supplying codeine syrups illicitly.", { x: 0.55, y: 4.78, w: 8.9, h: 0.56, fontSize: 10, color: AMBER, fontFace: "Calibri", margin: 0 });
}

// ─── SLIDE 4: MODERN TRENDS / SYNTHETIC OPIOIDS ──────────────────────────────
{
  const s = pres.addSlide();
  bg(s);
  title(s, "Modern Trends: Synthetic Opioids & Fentanyl Analogues", "World Drug Report 2025 · CDC MMWR Dec 2024 · PMC 2024");

  card(s, 0.35, 1.05, 4.45, 4.3);
  accentBar(s, 0.35, 1.05, 4.3, RED);
  s.addText("Fentanyl & Analogues", { x: 0.55, y: 1.1, w: 4.1, h: 0.35, fontSize: 14, bold: true, color: RED, fontFace: "Calibri", margin: 0 });
  const fents = [
    ["Fentanyl", "100× morphine", "μ-opioid full agonist"],
    ["Acetylfentanyl", "~15× morphine", "Short-acting; street cut"],
    ["Carfentanil", "10,000× morphine", "Elephant tranquiliser; reemerged 2024"],
    ["Butyrfentanyl", "~7× morphine", "Common in Europe seizures"],
    ["Furanylfentanyl", "~40× morphine", "Online darknet markets"],
    ["Nitazenes*", "10-100× fentanyl", "Protonitazene #1 in 2024 forensics"],
  ];
  fents.forEach(([n, p, note], i) => {
    const y = 1.55 + i * 0.6;
    s.addShape(pres.shapes.RECTANGLE, { x: 0.55, y, w: 0.04, h: 0.4, fill: { color: RED }, line: { type: "none" } });
    s.addText(n, { x: 0.7, y, w: 2.0, h: 0.25, fontSize: 11, bold: true, color: C2, fontFace: "Calibri", margin: 0 });
    s.addText(p, { x: 0.7, y: y + 0.22, w: 2.0, h: 0.2, fontSize: 9, color: RED, fontFace: "Calibri", margin: 0 });
    s.addText(note, { x: 2.75, y: y + 0.05, w: 1.9, h: 0.35, fontSize: 9, color: MUTED, fontFace: "Calibri", margin: 0 });
  });
  s.addText("*Nitazenes: benzimidazole opioids — not fentanyl-derived; 458 UK deaths Jun 2023–Jan 2025 (UNODC WDR 2025)", { x: 0.5, y: 5.05, w: 4.15, h: 0.2, fontSize: 8, color: MUTED, fontFace: "Calibri", margin: 0 });

  // Right side: crisis stats + MOA
  card(s, 5.05, 1.05, 4.55, 1.75);
  s.addText("Global Poisoning Scale (CDC MMWR 2024)", { x: 5.2, y: 1.12, w: 4.2, h: 0.3, fontSize: 12, bold: true, color: C1, fontFace: "Calibri", margin: 0 });
  s.addText("~72,000 US overdose deaths in 2023 involved illegally manufactured fentanyls (IMF) — ~70% of all drug OD deaths.\n\nCarfentanil deaths surged 7× from 29 (Jan-Jun 2023) to 238 (Jan-Jun 2024), detected in 37 US states.\n\nIndia: NDPS Act does not explicitly control fentanyl analogues — regulatory gap exploited by clandestine labs.", { x: 5.2, y: 1.47, w: 4.25, h: 1.25, fontSize: 10, color: C2, fontFace: "Calibri", margin: 0 });

  card(s, 5.05, 2.92, 4.55, 1.4);
  accentBar(s, 5.05, 2.92, 1.4, TEAL);
  s.addText("Mechanism of Toxicity", { x: 5.25, y: 2.97, w: 4.1, h: 0.3, fontSize: 13, bold: true, color: TEAL, fontFace: "Calibri", margin: 0 });
  s.addText("μ-opioid receptor agonism → ↓ cAMP → hyperpolarisation of neurons → brainstem respiratory centre depression → apnea → death. Chest wall rigidity ('wooden chest') with rapid IV bolus.", { x: 5.25, y: 3.3, w: 4.2, h: 0.9, fontSize: 10.5, color: C2, fontFace: "Calibri", margin: 0 });

  card(s, 5.05, 4.43, 4.55, 0.92);
  accentBar(s, 5.05, 4.43, 0.92, AMBER);
  s.addText("Treatment (Current Guidelines)", { x: 5.25, y: 4.48, w: 4.1, h: 0.3, fontSize: 12, bold: true, color: AMBER, fontFace: "Calibri", margin: 0 });
  s.addText("Naloxone 0.4–2 mg IV/IN (repeat q2-3 min; high-potency analogues may need 10–20 mg total) · Airway/ventilatory support · ICU monitoring for recurrence.", { x: 5.25, y: 4.8, w: 4.25, h: 0.48, fontSize: 10, color: C2, fontFace: "Calibri", margin: 0 });
}

// ─── SLIDE 5: DESIGNER DRUGS – HOW THEY BYPASS REGULATION ───────────────────
{
  const s = pres.addSlide();
  bg(s);
  title(s, "Designer Drugs: Engineering to Bypass Regulation", "UNODC Technical Update 2024 · FAA · NPS Forensic Science Reviews");

  // Left: steps
  card(s, 0.35, 1.05, 4.35, 4.35);
  s.addText("The Engineering Playbook", { x: 0.55, y: 1.12, w: 4.0, h: 0.35, fontSize: 13, bold: true, color: C1, fontFace: "Calibri", margin: 0 });
  const steps = [
    ["1. Choose a Controlled Scaffold", "Start with a scheduled drug (e.g., fentanyl, THC, amphetamine, LSD)."],
    ["2. Minor Structural Modification", "Add/replace an atom or side chain — fluorine, methyl, acetyl. One atom can change legal status entirely."],
    ["3. Sell as 'Not for Human Use'", "Labelled 'research chemical', 'bath salts', 'plant food', 'incense' to evade analogue acts."],
    ["4. Wait for Scheduling", "Regulatory review takes 12–24 months. A new variant is released before banning completes."],
    ["5. Repeat", "UNODC 2024: 688 NPS identified in 2024 (highest ever). >1,396 cumulative across 153 countries."],
  ];
  steps.forEach(([head, body], i) => {
    const y = 1.58 + i * 0.76;
    s.addShape(pres.shapes.OVAL, { x: 0.5, y: y + 0.04, w: 0.3, h: 0.3, fill: { color: C1 }, line: { type: "none" } });
    s.addText(String(i+1), { x: 0.5, y: y + 0.04, w: 0.3, h: 0.3, fontSize: 11, bold: true, color: BG, fontFace: "Calibri", align: "center", valign: "middle", margin: 0 });
    s.addText(head, { x: 0.9, y, w: 3.6, h: 0.28, fontSize: 10.5, bold: true, color: C1, fontFace: "Calibri", margin: 0 });
    s.addText(body, { x: 0.9, y: y + 0.28, w: 3.6, h: 0.42, fontSize: 9.5, color: C2, fontFace: "Calibri", margin: 0 });
  });

  // Right cards
  card(s, 4.85, 1.05, 4.8, 1.5);
  accentBar(s, 4.85, 1.05, 1.5, AMBER);
  s.addText("Halogenation Strategy (Most Common)", { x: 5.05, y: 1.1, w: 4.4, h: 0.3, fontSize: 12, bold: true, color: AMBER, fontFace: "Calibri", margin: 0 });
  s.addText("Amphetamine → 4-fluoroamphetamine (not scheduled → sold legally). Methamphetamine → fluoromethamphetamine. 4-methylaminorex → 4′-fluoro, 4′-chloro, 4′-bromo variants appeared online 2022-24 — all unscheduled at release. Adding halogens is cheap, changes MS fingerprint, evades standard immunoassays.", { x: 5.05, y: 1.45, w: 4.5, h: 1.0, fontSize: 10, color: C2, fontFace: "Calibri", margin: 0 });

  card(s, 4.85, 2.68, 4.8, 1.35);
  accentBar(s, 4.85, 2.68, 1.35, TEAL);
  s.addText("Prodrug Loophole", { x: 5.05, y: 2.73, w: 4.4, h: 0.3, fontSize: 12, bold: true, color: TEAL, fontFace: "Calibri", margin: 0 });
  s.addText("1P-LSD, ALD-52 are LSD 'prodrugs' — ester groups cleaved in vivo to yield LSD. Sold legally as 'analogues' until scheduling. LSD-like designer variants proliferated 2020-2024, requiring GC-MS + UV spectroscopy for identification.", { x: 5.05, y: 3.07, w: 4.5, h: 0.88, fontSize: 10, color: C2, fontFace: "Calibri", margin: 0 });

  card(s, 4.85, 4.13, 4.8, 1.27);
  accentBar(s, 4.85, 4.13, 1.27, RED);
  s.addText("Detection Challenge", { x: 5.05, y: 4.18, w: 4.4, h: 0.3, fontSize: 12, bold: true, color: RED, fontFace: "Calibri", margin: 0 });
  s.addText("Standard immunoassay screens MISS most NPS — novel structures don't cross-react. Confirmatory GC-MS/HPLC misses unknowns without reference standards. Orbitrap/TOF-MS (untargeted) is the current gold standard but expensive. India: few labs have this capability.", { x: 5.05, y: 4.52, w: 4.5, h: 0.82, fontSize: 10, color: C2, fontFace: "Calibri", margin: 0 });
}

// ─── SLIDE 6: MEDICOLEGAL SIGNIFICANCE ──────────────────────────────────────
{
  const s = pres.addSlide();
  bg(s);
  title(s, "Medicolegal Significance of Psychotropic Poisoning", "NDPS Act 1985 · IPC · Evidence Challenges · Forensic Practice");

  const points = [
    [C1,   "Criminal Proceedings", "Blood/urine toxicology is primary evidence under NDPS Act. Chain-of-custody documentation is mandatory — breaks in chain render results inadmissible. India: conviction rate <0.1% despite 98,000 arrests (2023)."],
    [TEAL, "Cause of Death Certification", "Psychotropic poisoning must be distinguished from natural disease at autopsy. Vitreous humor, hair, bone marrow are alternative matrices when blood is unavailable or putrefied."],
    [AMBER,"Sexual Assault (DFSA)", "BZDs (Flunitrazepam, Clonazepam, GHB) used in drug-facilitated sexual assault. Detection window is short (BZD ~72 hrs urine; GHB ~8 hrs). Rapid specimen collection is essential."],
    [RED,  "Road Traffic Accidents", "Psychotropic intoxication is legally equivalent to DUI in India. Amphetamines impair reaction time; BZDs cause anterograde amnesia confounding witness accounts."],
    [C1,   "Insurance / Suicide Determination", "Deliberate vs accidental ingestion affects insurance payout and IPC classification. Blood levels, scene investigation, and psychiatric history must be integrated."],
    ["BB88FF", "New Psychoactive Substances Gap", "NPS not scheduled under NDPS Act cannot be prosecuted as psychotropic offences. Forensic labs must prove analogousness — scientific and legal grey zone. Medicolegal recommendations must note the gap explicitly."],
  ];
  points.forEach(([col, head, body], i) => {
    const col2 = i < 3 ? 0.35 : 5.05;
    const row = i < 3 ? i : i - 3;
    const y = 1.15 + row * 1.42;
    card(s, col2, y, 4.45, 1.32, CARD);
    s.addShape(pres.shapes.RECTANGLE, { x: col2, y, w: 4.45, h: 0.06, fill: { color: col }, line: { type: "none" } });
    s.addText(head, { x: col2 + 0.15, y: y + 0.14, w: 4.15, h: 0.3, fontSize: 12, bold: true, color: col, fontFace: "Calibri", margin: 0 });
    s.addText(body, { x: col2 + 0.15, y: y + 0.46, w: 4.1, h: 0.8, fontSize: 9.5, color: C2, fontFace: "Calibri", margin: 0 });
  });
}

// ─── SLIDE 7: BARBITURATES – PHARMACOLOGY ────────────────────────────────────
{
  const s = pres.addSlide();
  bg(s);
  title(s, "Barbiturates — Pharmacology & Mechanism", "StatPearls 2024 · VV Pillay Textbook · Narayan Reddy");

  card(s, 0.35, 1.0, 4.45, 2.8);
  accentBar(s, 0.35, 1.0, 2.8, C1);
  s.addText("Mechanism of Action", { x: 0.55, y: 1.06, w: 4.1, h: 0.32, fontSize: 14, bold: true, color: C1, fontFace: "Calibri", margin: 0 });
  s.addText([
    { text: "Bind GABA-A receptor/Cl⁻ channel ", options: { color: C2 } },
    { text: "→ ↑ duration", options: { color: C1, bold: true } },
    { text: " of Cl⁻ channel opening (vs BZDs which ↑ frequency).\n\nAt high doses: GABA-A agonism independent of GABA — causes direct CNS depression, mimicking general anaesthesia.\n\nCNS → Respiratory → Cardiovascular depression cascade.\n\nNo ceiling effect → lethal at 5–10× sedative dose.", options: { color: C2 } }
  ], { x: 0.55, y: 1.44, w: 4.1, h: 2.25, fontSize: 10.5, fontFace: "Calibri", margin: 0 });

  card(s, 0.35, 3.92, 4.45, 1.5);
  accentBar(s, 0.35, 3.92, 1.5, TEAL);
  s.addText("Pharmacokinetics", { x: 0.55, y: 3.98, w: 4.1, h: 0.3, fontSize: 13, bold: true, color: TEAL, fontFace: "Calibri", margin: 0 });
  const pk = [["Absorption","Rapid from GI tract; IV fastest"],["Onset","Short-acting (Thiopental 30s); Long-acting (Phenobarb 1h)"],["Fatal Dose","6–10 g (highly variable with tolerance)"],["Fatal Blood Level","Phenobarbitone: 8–15 mg%"]];
  pk.forEach(([k, v], i) => {
    s.addText(k + ": ", { x: 0.55, y: 4.35 + i * 0.25, w: 1.4, h: 0.22, fontSize: 10, bold: true, color: TEAL, fontFace: "Calibri", margin: 0 });
    s.addText(v, { x: 1.95, y: 4.35 + i * 0.25, w: 2.7, h: 0.22, fontSize: 10, color: C2, fontFace: "Calibri", margin: 0 });
  });

  // Classification table right
  card(s, 5.0, 1.0, 4.65, 4.42);
  s.addText("Classification by Duration of Action", { x: 5.15, y: 1.07, w: 4.3, h: 0.3, fontSize: 13, bold: true, color: C1, fontFace: "Calibri", margin: 0 });
  const tbl = [
    ["Ultra-short", "<30 min", "Thiopental, Methohexital", "IV anaesthesia; lethal injection"],
    ["Short", "3–8 h", "Pentobarbital, Secobarbital", "Insomnia; high abuse potential"],
    ["Intermediate", "6–12 h", "Amobarbital, Butabarbital", "Pre-operative sedation"],
    ["Long-acting", "10–16 h", "Phenobarbital, Primidone", "Epilepsy; neonatal seizures"],
  ];
  const hdr = ["Type","Duration","Examples","Clinical Use"];
  hdr.forEach((h, i) => {
    s.addText(h, { x: 5.1 + [0,1.1,2.3,3.6][i], y: 1.44, w: [1.0,1.1,1.3,1.0][i], h: 0.28, fontSize: 9, bold: true, color: C1, fontFace: "Calibri", margin: 0 });
  });
  tbl.forEach(([t, d, ex, cu], i) => {
    const y = 1.78 + i * 0.85;
    const bg2 = i % 2 === 0 ? "181828" : CARD;
    s.addShape(pres.shapes.RECTANGLE, { x: 5.05, y, w: 4.5, h: 0.82, fill: { color: bg2 }, line: { type: "none" } });
    s.addText(t, { x: 5.1, y: y+0.05, w: 1.0, h: 0.35, fontSize: 10, bold: true, color: AMBER, fontFace: "Calibri", margin: 0 });
    s.addText(d, { x: 6.2, y: y+0.05, w: 1.0, h: 0.35, fontSize: 10, color: C2, fontFace: "Calibri", margin: 0 });
    s.addText(ex, { x: 7.35, y: y+0.05, w: 1.35, h: 0.35, fontSize: 9, color: C2, fontFace: "Calibri", margin: 0 });
    s.addText(cu, { x: 5.1, y: y+0.44, w: 4.4, h: 0.3, fontSize: 9, color: MUTED, fontFace: "Calibri", margin: 0 });
  });
}

// ─── SLIDE 8: BARBITURATES – SYMPTOMS & TREATMENT ────────────────────────────
{
  const s = pres.addSlide();
  bg(s);
  title(s, "Barbiturates — Symptoms, Pathophysiology & Treatment", "StatPearls 2024 · UpToDate · Medscape 2025");

  const rows = [
    { sym: "CNS Depression → Coma", why: "GABA-A direct agonism → global cortical + brainstem suppression. GCS may reach 3.", tx: "Secure airway early. Intubate if GCS ≤8 or RR <12.", col: RED },
    { sym: "Respiratory Depression / Apnea", why: "Brainstem respiratory centre (pre-Bötzinger complex) inhibited. Decreased hypoxic drive.", tx: "Mechanical ventilation. O₂ target SpO₂ >94%.", col: RED },
    { sym: "Barbiturate Bullae", why: "Prolonged pressure + drug-induced tissue ischaemia → sweat gland necrosis (pathognomonic).", tx: "Wound care; confirm barbiturate poisoning (no other drug causes this).", col: AMBER },
    { sym: "Hypotension", why: "Peripheral vasodilation + myocardial depression (Na⁺/K⁺ ATPase inhibition).", tx: "IV crystalloids; vasopressors (noradrenaline) if refractory.", col: AMBER },
    { sym: "Hypothermia", why: "Hypothalamic thermoregulation suppressed.", tx: "Active external warming. Core temp monitoring.", col: TEAL },
  ];

  rows.forEach(({ sym, why, tx, col }, i) => {
    const y = 1.08 + i * 0.88;
    card(s, 0.35, y, 9.3, 0.82, CARD);
    s.addShape(pres.shapes.RECTANGLE, { x: 0.35, y, w: 0.04, h: 0.82, fill: { color: col }, line: { type: "none" } });
    s.addText(sym, { x: 0.5, y: y + 0.04, w: 2.6, h: 0.38, fontSize: 11, bold: true, color: col, fontFace: "Calibri", margin: 0 });
    s.addText("Why: " + why, { x: 0.5, y: y + 0.42, w: 2.6, h: 0.35, fontSize: 9, color: MUTED, fontFace: "Calibri", margin: 0 });
    s.addText("Pathophysiology: " + why, { x: 3.2, y: y + 0.06, w: 3.5, h: 0.7, fontSize: 9.5, color: C2, fontFace: "Calibri", margin: 0 });
    s.addText("Tx: " + tx, { x: 6.8, y: y + 0.06, w: 2.7, h: 0.7, fontSize: 9.5, color: C1, fontFace: "Calibri", margin: 0 });
  });

  card(s, 0.35, 5.45, 9.3, 0.0);
  s.addText("No specific antidote. Management: Activated charcoal (within 1h) → Urinary alkalinisation (NaHCO₃, pH>7.5) → MDAC for phenobarb → Haemodialysis in severe cases. Avoid stimulants. Monitor for non-cardiogenic pulmonary oedema.", {
    x: 0.5, y: 5.3, w: 9.0, h: 0.3, fontSize: 9.5, color: AMBER, fontFace: "Calibri", margin: 0
  });
}

// ─── SLIDE 9: BENZODIAZEPINES – PHARMACOLOGY ─────────────────────────────────
{
  const s = pres.addSlide();
  bg(s);
  title(s, "Benzodiazepines — Pharmacology & Forensic Contexts", "UpToDate 2024 · IEM-Student 2024 · Forensic Pharmacology");

  card(s, 0.35, 1.0, 4.5, 2.55);
  accentBar(s, 0.35, 1.0, 2.55, TEAL);
  s.addText("Mechanism vs Barbiturates", { x: 0.55, y: 1.06, w: 4.2, h: 0.3, fontSize: 13, bold: true, color: TEAL, fontFace: "Calibri", margin: 0 });
  s.addText([
    { text: "BZDs: ↑ frequency ", options: { color: TEAL, bold: true } },
    { text: "of Cl⁻ channel opening\nBarbiturates: ↑ ", options: { color: C2 } },
    { text: "duration ", options: { color: C1, bold: true } },
    { text: "of opening\n\nBZDs require GABA to be present — ceiling effect → relatively safer in overdose alone. BZDs potentiate all other CNS depressants multiplicatively (alcohol + BZD = lethal synergy).\n\nPharmacological classifications:\n• Short-acting: Triazolam, Midazolam (DFSA agents)\n• Intermediate: Lorazepam, Temazepam\n• Long-acting: Diazepam, Chlordiazepoxide, Clonazepam", options: { color: C2 } },
  ], { x: 0.55, y: 1.44, w: 4.15, h: 2.0, fontSize: 10.5, fontFace: "Calibri", margin: 0 });

  card(s, 0.35, 3.65, 4.5, 1.72);
  accentBar(s, 0.35, 3.65, 1.72, AMBER);
  s.addText("Drug-Facilitated Sexual Assault (DFSA)", { x: 0.55, y: 3.71, w: 4.2, h: 0.3, fontSize: 12, bold: true, color: AMBER, fontFace: "Calibri", margin: 0 });
  s.addText("Flunitrazepam (Rohypnol), Clonazepam, Alprazolam, GHB used.\nKey features: rapid onset, anterograde amnesia, colourless/odourless when dissolved.\nDetection window: urine 72 hrs (7-aminoflunitrazepam); blood 12-24 hrs.\nForensic pearl: preserve first-void urine immediately — demand urgent collection.", { x: 0.55, y: 4.07, w: 4.15, h: 1.22, fontSize: 10, color: C2, fontFace: "Calibri", margin: 0 });

  // Right
  card(s, 5.0, 1.0, 4.65, 2.0);
  accentBar(s, 5.0, 1.0, 2.0, RED);
  s.addText("Clinical Manifestations of BZD Toxicity", { x: 5.2, y: 1.07, w: 4.3, h: 0.3, fontSize: 13, bold: true, color: RED, fontFace: "Calibri", margin: 0 });
  const mani = [["Ataxia / Dysarthria","Cerebellar GABA-A activation"],["Ptosis / Nystagmus","Brainstem inhibition"],["Anterograde Amnesia","Hippocampal GABA-A"],["Resp. depression","Only severe in polydrug OD"],["Paradoxical agitation","Disinhibition — esp. children, elderly"]];
  mani.forEach(([m, o], i) => {
    s.addText("• " + m, { x: 5.2, y: 1.44 + i * 0.28, w: 2.2, h: 0.26, fontSize: 10, bold: true, color: C2, fontFace: "Calibri", margin: 0 });
    s.addText(o, { x: 7.45, y: 1.44 + i * 0.28, w: 2.1, h: 0.26, fontSize: 9, color: MUTED, fontFace: "Calibri", margin: 0 });
  });

  card(s, 5.0, 3.1, 4.65, 1.4);
  accentBar(s, 5.0, 3.1, 1.4, C1);
  s.addText("Treatment — Current Evidence", { x: 5.2, y: 3.16, w: 4.3, h: 0.3, fontSize: 13, bold: true, color: C1, fontFace: "Calibri", margin: 0 });
  s.addText("Supportive: Airway, O₂, IV fluids (primary)\nFlumazenil 0.2 mg IV q1 min (max 1 mg) — use ONLY in BZD-naive patients (procedural OD, paediatric accidental). CONTRAINDICATED in chronic BZD users → precipitates status epilepticus.\nSeizures from flumazenil: treat with propofol or phenobarbital.", { x: 5.2, y: 3.5, w: 4.35, h: 0.9, fontSize: 10, color: C2, fontFace: "Calibri", margin: 0 });

  card(s, 5.0, 4.6, 4.65, 0.76);
  s.addText("Designer BZDs (2024 threat): Flubromazepam, Etizolam, Clonazolam — NOT detected on standard immunoassay. Require LC-HRMS for confirmation. Increasingly seen in India via darknet.", { x: 5.15, y: 4.68, w: 4.4, h: 0.62, fontSize: 9.5, color: AMBER, fontFace: "Calibri", margin: 0 });
}

// ─── SLIDE 10: AMPHETAMINES ───────────────────────────────────────────────────
{
  const s = pres.addSlide();
  bg(s);
  title(s, "Amphetamines & Designer Stimulants — Full Clinical Chain", "StatPearls · UpToDate · WHO/UNODC 2024");

  card(s, 0.35, 1.0, 4.45, 2.05);
  accentBar(s, 0.35, 1.0, 2.05, AMBER);
  s.addText("Mechanism — Adrenergic Surge", { x: 0.55, y: 1.06, w: 4.1, h: 0.3, fontSize: 13, bold: true, color: AMBER, fontFace: "Calibri", margin: 0 });
  s.addText("Amphetamines act as VMAT2 disruptors and DAT/NET/SERT reversers → massive release of dopamine, noradrenaline, and serotonin into synaptic cleft (not reuptake inhibition — active efflux).\n\nResult: sympathomimetic toxidrome:\n↑BP, ↑HR, ↑temp, dilated pupils, diaphoresis, agitation, psychosis.", { x: 0.55, y: 1.42, w: 4.1, h: 1.5, fontSize: 10.5, color: C2, fontFace: "Calibri", margin: 0 });

  card(s, 0.35, 3.13, 4.45, 1.1);
  accentBar(s, 0.35, 3.13, 1.1, RED);
  s.addText("Forensic Data", { x: 0.55, y: 3.19, w: 4.1, h: 0.3, fontSize: 13, bold: true, color: RED, fontFace: "Calibri", margin: 0 });
  s.addText("Fatal dose: ~1.5 mg/kg (variable; tolerance plays a major role). Urine detection: 2–5 days. India: meth labs (Greater Noida — Jalisco cartel link). ATS 0.18% prevalence nationally; rising sharply in urban circuits and NE states.", { x: 0.55, y: 3.53, w: 4.1, h: 0.65, fontSize: 10, color: C2, fontFace: "Calibri", margin: 0 });

  card(s, 0.35, 4.32, 4.45, 1.08);
  accentBar(s, 0.35, 4.32, 1.08, C1);
  s.addText("Treatment — Amphetamine OD", { x: 0.55, y: 4.38, w: 4.1, h: 0.3, fontSize: 12, bold: true, color: C1, fontFace: "Calibri", margin: 0 });
  s.addText("Gastric lavage (if early) → Activated charcoal → Urine acidification (NH₄Cl or ascorbic acid, target pH<5.5 to ionise drug) → Chlorpromazine for agitation/HTN → Benzodiazepines for seizures → Cooling for hyperthermia → No beta-blockers alone (unopposed α).", { x: 0.55, y: 4.73, w: 4.1, h: 0.6, fontSize: 9.5, color: C2, fontFace: "Calibri", margin: 0 });

  // Right: MDMA + synthetic cathinones
  card(s, 5.0, 1.0, 4.65, 2.3);
  accentBar(s, 5.0, 1.0, 2.3, RED);
  s.addText("MDMA (Ecstasy) — Serotonin Toxicity", { x: 5.2, y: 1.06, w: 4.3, h: 0.3, fontSize: 13, bold: true, color: RED, fontFace: "Calibri", margin: 0 });
  s.addText("MDMA: preferential SERT reversal → serotonin syndrome triad:\n1. Neuromuscular: clonus, hyperreflexia, tremor\n2. Autonomic: hyperthermia, HTN, tachycardia\n3. Altered mental status: agitation, confusion\n\nHyperpyrexia >41°C = life-threatening. DIC, rhabdomyolysis, hepatic failure follow.\n\nTreatment: Aggressive cooling (ice-packs, evaporation), BZDs for myoclonus/seizures, cyproheptadine (5-HT antagonist), avoid serotonergic agents.", { x: 5.2, y: 1.43, w: 4.35, h: 1.76, fontSize: 10, color: C2, fontFace: "Calibri", margin: 0 });

  card(s, 5.0, 3.4, 4.65, 2.0);
  accentBar(s, 5.0, 3.4, 2.0, TEAL);
  s.addText("Synthetic Cathinones ('Bath Salts') & Mephedrone", { x: 5.2, y: 3.46, w: 4.3, h: 0.3, fontSize: 12, bold: true, color: TEAL, fontFace: "Calibri", margin: 0 });
  s.addText("Cathinone scaffold (khat derivative) → synthetic: mephedrone (4-MMC), methylone, MDPV.\nIndia: mephedrone (MD) is emerging — INCB flagged India threat.\nMechanism: DAT/NET reversal + SERT (MDPV = potent DAT blocker).\nClinical: 'excited delirium' syndrome — hyperthermia, extreme agitation, superhuman strength, sudden cardiac arrest.\nForensic: NOT detected on routine amphetamine immunoassay. LC-MS/MS required.\nTreatment: High-dose BZDs, physical restraint, cooling, early intubation.", { x: 5.2, y: 3.83, w: 4.35, h: 1.5, fontSize: 9.5, color: C2, fontFace: "Calibri", margin: 0 });
}

// ─── SLIDE 11: ANALYTICAL METHODS ────────────────────────────────────────────
{
  const s = pres.addSlide();
  bg(s);
  title(s, "Analytical Identification — Forensic Lab Workflow", "From Scene to Conviction");

  const methods = [
    { step: "1", name: "Immunoassay Screening", detail: "ELISA / CLIA on urine/blood. Fast, cheap. HIGH false-negative for NPS/designer drugs — NOT confirmation. Cross-reactivity unpredictable.", col: MUTED, tag: "SCREEN" },
    { step: "2", name: "Thin Layer Chromatography (TLC)", detail: "Colour reactions (Marquis = orange for amphetamines; purple for MDxx). Presumptive only. Useful in resource-limited Indian labs.", col: TEAL, tag: "PRESUMPTIVE" },
    { step: "3", name: "GC-MS (Gold Standard)", detail: "Electron ionisation fingerprint. Required for court evidence. Cannot detect unknowns without reference library. Misses many NPS.", col: C1, tag: "CONFIRMATORY" },
    { step: "4", name: "LC-HRMS / Orbitrap", detail: "Untargeted screening — exact mass ±5 ppm. Detects NPS, designer BZDs, nitazenes without reference standard. Current forensic gold for NPS. Expensive.", col: AMBER, tag: "NPS GOLD STD" },
    { step: "5", name: "Hair / Alternative Matrices", detail: "Hair: 1 cm = 1 month history. Vitreous, bone marrow for decomposed remains. Meconium for neonatal drug exposure.", col: RED, tag: "CHRONIC / PM" },
  ];

  methods.forEach(({ step, name, detail, col, tag }, i) => {
    const y = 1.1 + i * 0.87;
    card(s, 0.35, y, 9.3, 0.8, CARD);
    s.addShape(pres.shapes.OVAL, { x: 0.42, y: y + 0.2, w: 0.45, h: 0.45, fill: { color: col }, line: { type: "none" } });
    s.addText(step, { x: 0.42, y: y + 0.2, w: 0.45, h: 0.45, fontSize: 14, bold: true, color: BG, fontFace: "Calibri", align: "center", valign: "middle", margin: 0 });
    s.addText(name, { x: 1.05, y: y + 0.06, w: 3.5, h: 0.3, fontSize: 12, bold: true, color: col, fontFace: "Calibri", margin: 0 });
    s.addText(detail, { x: 1.05, y: y + 0.38, w: 5.5, h: 0.38, fontSize: 9.5, color: C2, fontFace: "Calibri", margin: 0 });
    s.addShape(pres.shapes.RECTANGLE, { x: 8.5, y: y + 0.22, w: 1.05, h: 0.35, fill: { color: col }, line: { type: "none" }, rectRadius: 0.05 });
    s.addText(tag, { x: 8.5, y: y + 0.22, w: 1.05, h: 0.35, fontSize: 8, bold: true, color: BG, fontFace: "Calibri", align: "center", valign: "middle", margin: 0 });
  });
}

// ─── SLIDE 12: CONCLUSION ─────────────────────────────────────────────────────
{
  const s = pres.addSlide();
  bg(s);
  s.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 10, h: 0.08, fill: { color: C1 }, line: { type: "none" } });
  s.addText("Key Takeaways", { x: 0.5, y: 0.3, w: 9, h: 0.55, fontSize: 32, bold: true, color: C2, fontFace: "Calibri", margin: 0 });
  const takes = [
    [C1,   "The term 'psychotropic' remains legally essential under NDPS Act 1985 — now expanded to encompass 1,396+ NPS across 153 countries (UNODC 2024)."],
    [TEAL, "India faces a dual burden: traditional drugs (cannabis, heroin) + emerging synthetic drugs (meth, mephedrone, fentanyl analogues). NCB 2024: 65% of transactions via encrypted platforms."],
    [AMBER,"Fentanyl analogues (carfentanil, acetylfentanyl) and nitazenes are dominating global overdose deaths. India's NDPS Act has regulatory gaps for analogues — urgent amendment needed."],
    [RED,  "Designer drugs engineer minor molecular changes (halogenation, esterification) to outpace scheduling — new variant appears before a ban is implemented."],
    [C1,   "Barbiturates: No antidote. GABA-A duration ↑. Treat with airway, alkalinise urine. Bullae = pathognomonic sign. Phenobarb fatal at 8-15 mg%."],
    [TEAL, "BZDs: Antidote = Flumazenil (caution in chronic users). DFSA agents. Designer BZDs (clonazolam, etizolam) evade immunoassay — require LC-HRMS."],
    [AMBER,"Amphetamines: Sympathomimetic toxidrome. MDMA → serotonin syndrome. Cathinones → excited delirium. Urine acidification + chlorpromazine + BZDs."],
    ["BB88FF", "Forensic workflow: Screen (ELISA) → Confirm (GC-MS) → NPS (LC-HRMS). Chain-of-custody is paramount for admissibility in Indian courts."],
  ];
  takes.forEach(([col, text], i) => {
    const y = 1.05 + i * 0.55;
    s.addShape(pres.shapes.RECTANGLE, { x: 0.35, y: y + 0.1, w: 0.06, h: 0.32, fill: { color: col }, line: { type: "none" } });
    s.addText(text, { x: 0.55, y, w: 9.1, h: 0.52, fontSize: 10, color: C2, fontFace: "Calibri", valign: "middle", margin: 0 });
  });
  s.addText("Sources: KS Narayan Reddy Ch.31/33 · VV Pillay Textbook of Forensic Medicine · StatPearls 2024 · UpToDate 2024 · UNODC World Drug Report 2025 · CDC MMWR Dec 2024 · NCB India Annual Report 2023-24", {
    x: 0.35, y: 5.35, w: 9.3, h: 0.2, fontSize: 7.5, color: MUTED, fontFace: "Calibri", margin: 0
  });
}

pres.writeFile({ fileName: "/mnt/user-data/outputs/Forensic_Toxicology_Psychotropic_Comprehensive.pptx" })
  .then(() => console.log("Done"))
  .catch(e => console.error(e));
  }
};
