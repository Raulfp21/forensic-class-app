// ============================================================
//  topics.js  â€”  CONTENT ONLY FILE
//  Edit ONLY this file when adding new topics or scenarios.
//  Do NOT add any Firebase, UI, or logic code here.
//  This file is NEVER replaced by infrastructure updates.
// ============================================================

const forensicContent = {

  // â”€â”€ RELAY ROWS â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
  // HOW TO ADD A NEW ROW:
  // 1. Add a new key inside relay: { }
  // 2. Each key is an array of step objects (any number of steps)
  // 3. Each step: { step: number, title: "...", text: "..." }
  // 4. Text can contain basic HTML like <b>, <br>, <ul>, <li>
  // That's it. Teacher panel picks it up automatically.
  // â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€

  relay: {

    "Step 1: Pre-Autopsy Prerequisites": [
      {
        step: 1,
        title: "Who Receives the Requisition?",
        text: "In Govt Medical Colleges, the <b>Professor of Forensic Medicine / Police Surgeon</b> receives PM requests. In their absence: Associate Professor â†’ Assistant Professor. In other hospitals, the <b>CMO / RMO</b> obliges. No Medical Officer can refuse an autopsy citing personal interest."
      },
      {
        step: 2,
        title: "Timing Rules",
        text: "Requisitions accepted <b>only up to 4:00 PM</b>. Cases received before 4 PM may proceed <b>till 6 PM</b>. Exception: <b>Court order</b> must be obeyed immediately. <b>District Collector's explicit order</b> in law & order situations allows beyond-hours work."
      },
      {
        step: 3,
        title: "Who Can Give the Requisition Letter?",
        text: "<b>Routine cases:</b> Police officer â‰¥ Sub-Inspector (Police Station) or â‰¥ Senior Head Constable (Out Post).<br><b>Magistrate inquest required for:</b> Custodial deaths, rape in custody, disappearance in custody, dowry-allegation deaths, and exhumation cases."
      },
      {
        step: 4,
        title: "Documents to Collect",
        text: "Collect and attach (numbered) to PM Booklet (Medl. I-28):<br>â€¢ Requisition for PM examination<br>â€¢ Case history<br>â€¢ Form 86 / details of dead body<br>â€¢ SOC sketch & FIR copy<br>â€¢ A.R. copies & Death Intimation copy<br>â€¢ Treatment particulars (if treated elsewhere)"
      }
    ],

    "Step 2: Conduct of Autopsy": [
      {
        step: 1,
        title: "Who Is Authorised Inside?",
        text: "Only these persons are authorised during autopsy:<br>â€¢ Conducting Medical Officer(s)<br>â€¢ Required departmental technicians<br>â€¢ Mortuary attendants<br>â€¢ Body in-charge constable<br><br><b>NOT allowed</b> without explicit Govt/Court order + IO's NOC: other MOs, lawyers, common public."
      },
      {
        step: 2,
        title: "Documentation During Autopsy",
        text: "All findings â€” positive AND negative â€” entered <b>during</b> the autopsy in <b>Medl. I-28 booklet (16 pages)</b>. One booklet per case only. MO decides dissection technique at the start. Department sealed with <b>wax impression</b> daily."
      },
      {
        step: 3,
        title: "Videography Rules",
        text: "Permitted <b>only on written request from a relative/friend of deceased</b> with IO's knowledge. Recorded video <b>sealed and sent to the Magistrate</b>. IO may attend at MO's discretion but must not obstruct."
      },
      {
        step: 4,
        title: "After Autopsy â€” Handover",
        text: "Body packed neatly in khada cloth and plastic sheet. Jewellery & belongings handed to in-charge constable with <b>signed receipt on the same day</b>. PM certificate (Medl. I-29): <b>Original â†’ Magistrate (sealed); Duplicate â†’ IO; Triplicate â†’ Department.</b>"
      }
    ],

    "Step 3: Special Situations": [
      {
        step: 1,
        title: "Custodial / Police Action Deaths",
        text: "Team of <b>â‰¥ 2 doctors with MD Forensic Medicine</b> mandatory. Family must view body (front + back) before autopsy. <b>Whole-body X-ray / CT scan before dissection.</b> Body preserved <b>48 hours</b> if family declares intent to approach High Court."
      },
      {
        step: 2,
        title: "Photography & Videography â€” Custodial",
        text: "<b>20â€“25 coloured photographs</b>: face (3 views), torso front/back, upper/lower extremities, each numbered injury. Entire autopsy videographed in <b>6 phases</b>: bearings â†’ external â†’ injuries â†’ cavity â†’ head â†’ trunk. MO narrates aloud; date/time superimposed."
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
        title: "Dignity & Confidentiality",
        text: "Close mortuary doors. Only authorized personnel permitted. Professionalism forbids unauthorized bystanders. Maintain dignity and secrecy of dead body and findings at all times."
      },
      {
        step: 3,
        title: "Real-Time Recording",
        text: "Dictate and enter findings into <b>Medl. I-28 booklet during the autopsy</b>. Never rely on memory. Note all positive AND negative findings. Dissection technique decided at the start â€” no unscientific method."
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
        text: "Unedited video across all 6 phases. Capture all external injuries before dissection. MO narrates observations aloud. Sealed video chip dispatched to Magistrate â†’ NHRC same day."
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
        title: "Natural Light & Transparency",
        text: "Exhumation in <b>natural daylight only</b>. Screen area from public view. Record depth (skull to surface, feet to surface) and distance from permanent landmarks."
      },
      {
        step: 4,
        title: "Decomposition & Documentation",
        text: "Document adipocere, mummification, or skeletonisation. <b>Burial artifacts must be interpreted correctly</b> â€” do not confuse decomposition changes with antemortem injuries. All viscera preserved for chemical analysis."
      }
    ],

    // â”€â”€ METHYL ALCOHOL POISONING â€” COMPLETE TOPIC â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
    // 8 steps covering the entire textbook topic.
    // Steps 1-3: Basics, mechanism, symptoms (text-based)
    // Steps 4-5: Diagnosis and treatment (text-based)
    // Steps 6-7: Embedded diagrams from your HTML files
    // Step 8:    Medico-legal aspects + viscera preservation
    // â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€

    "Toxicology: Methyl Alcohol Poisoning": [
      {
        step: 1,
        title: "Properties, Sources & Fatal Dose",
        text: `<b>Methyl alcohol (Methanol, CHâ‚ƒOH) â€” wood spirit</b><br><br>
<b>Properties:</b> Colourless, volatile liquid. Smell and taste similar to ethyl alcohol. Cannot be distinguished by taste alone â€” forensically critical. Burns with a colourless flame.<br><br>
<b>Sources of poisoning:</b><br>
â€¢ Adulterated illicit liquor (hooch â€” most common in India)<br>
â€¢ Surgical spirit, antifreeze, industrial solvents, paint removers<br>
â€¢ Accidental ingestion or deliberate substitution<br><br>
<b>Fatal dose:</b> <b>30 mL (1 oz)</b> â€” but highly variable. As little as <b>10 mL</b> can cause permanent blindness. As little as <b>15 mL</b> has caused death. Susceptibility varies with nutritional status and co-ingestion of ethanol.<br><br>
<b>Why ethanol co-ingestion matters:</b> Ethanol competes with methanol for the same enzyme (ADH), slowing conversion to toxic metabolites. This is why hooch victims who also drank ethanol sometimes survive or present late â€” the <b>latent period is prolonged</b>.`
      },
      {
        step: 2,
        title: "The Toxic Cascade â€” Mechanism",
        text: `<b>Methanol itself is NOT the toxin. Its metabolites are.</b><br><br>
<b>Step-by-step breakdown:</b><br><br>
<b>Methanol</b> â†’<i>(Alcohol dehydrogenase â€” ADH)</i>â†’ <b>Formaldehyde</b> â†’<i>(Aldehyde dehydrogenase)</i>â†’ <b>Formic acid / Formate</b><br><br>
<b>Formaldehyde</b> â€” extremely toxic to retinal cells but is so rapidly converted to formate that it has minimal systemic duration.<br><br>
<b>Formic acid (formate) = the key toxin:</b><br>
â€¢ Inhibits <b>Cytochrome c oxidase (Complex IV)</b> of the mitochondrial electron transport chain<br>
â€¢ Halts ATP production in all cells<br>
â€¢ The cells most dependent on oxidative metabolism â€” <b>retinal ganglion cells</b> and <b>putamen</b> â€” are the first and most severely damaged<br><br>
<b>Result:</b> High anion gap metabolic acidosis + selective injury to optic nerve and basal ganglia<br><br>
<b>Memory hook:</b> Methanol â†’ ADH â†’ Formaldehyde â†’ Formate â†’ <b>Formate blocks Complex IV â†’ Cell can't breathe â†’ Retina and putamen go dark first</b>`
      },
      {
        step: 3,
        title: "The Latent Period & Clinical Features",
        text: `<b>The latent period â€” most important clinical feature of methanol poisoning</b><br><br>
<b>Duration: 12â€“24 hours</b> (range 6â€“36 hrs). During this time the patient appears drunk but is relatively well â€” methanol is being metabolised slowly but formate is not yet at toxic levels.<br><br>
<b>Prolonged by:</b> Co-ingestion of ethanol (ADH competition), folate deficiency (slows formate clearance), refrigeration (slows metabolism).<br><br>
<b>Clinical features in sequence:</b><br><br>
<b>Early (0â€“12 h) â€” methanol phase:</b><br>
â€¢ Inebriation similar to ethyl alcohol â€” but <b>less euphoria, more confusion</b><br>
â€¢ Nausea, vomiting, headache, vertigo<br>
â€¢ Visual symptoms may begin: blurring, "snowfield" vision<br><br>
<b>Late (12â€“48 h) â€” formate phase:</b><br>
â€¢ <b>Visual disturbances</b>: blurring â†’ "snowfield" vision â†’ complete blindness<br>
â€¢ Pupils: dilated, sluggish or fixed (direct retinal/optic nerve toxicity)<br>
â€¢ <b>Kussmaul breathing</b> (deep rapid breathing â€” compensating for metabolic acidosis)<br>
â€¢ Abdominal pain, vomiting<br>
â€¢ Bradycardia, hypotension<br>
â€¢ Convulsions, extrapyramidal signs (rigidity, bradykinesia)<br>
â€¢ Coma â†’ <b>respiratory failure â†’ death</b><br><br>
<b>Classic triad for exams:</b> Intoxication + Visual disturbance + Metabolic acidosis = Methanol poisoning until proved otherwise.`
      },
      {
        step: 4,
        title: "Diagnosis â€” Gaps and Levels",
        text: `<b>Two key gaps to calculate in suspected methanol poisoning:</b><br><br>
<b>1. Osmolal gap (early â€” before metabolism):</b><br>
Measured osmolality âˆ’ Calculated osmolality<br>
Calculated = 2Ã—Na + Glucose/18 + BUN/2.8<br>
<b>Normal gap: &lt;10 mOsm/kg</b>. In methanol poisoning, methanol itself contributes to osmolality â€” gap is elevated early before metabolism is complete.<br><br>
<b>2. Anion gap (late â€” after metabolism):</b><br>
Na âˆ’ (Cl + HCOâ‚ƒ). <b>Normal: 8â€“12 mEq/L</b>. In methanol poisoning, formic acid is an unmeasured anion â€” gap rises as formate accumulates.<br>
<b>AG &gt;20 with pH &lt;7.3 = severe poisoning</b><br><br>
<b>Key insight:</b> Early cases show high osmolal gap with normal anion gap (methanol not yet metabolised). Late cases show high anion gap with normalised osmolal gap (methanol fully converted to formate). This gap crossover is diagnostically useful.<br><br>
<b>Direct measurements:</b><br>
â€¢ Serum methanol level: <b>&gt;25 mg% = haemodialysis indicated</b>; &gt;50 mg% = severe<br>
â€¢ Serum formic acid level â€” correlates with degree of putaminal and retinal injury<br>
â€¢ ABG: metabolic acidosis (â†“pH, â†“HCOâ‚ƒ, â†“PaCOâ‚‚ as compensation)<br>
â€¢ Blood glucose, electrolytes, renal function<br><br>
<b>Ophthalmology:</b> Fundoscopy â€” retinal oedema, disc hyperaemia, later optic atrophy<br>
<b>CT brain:</b> Bilateral symmetrical hypodensity in putamen (24â€“48 h), haemorrhagic transformation in severe cases`
      },
      {
        step: 5,
        title: "Treatment â€” Complete with Doses",
        text: `<b>Treatment must be started IMMEDIATELY â€” even before methanol levels return.</b><br><br>
<b>1. Secure ABC + IV access</b><br><br>
<b>2. Gastric lavage</b><br>
â€¢ Only if &lt;1â€“2 hours since ingestion<br>
â€¢ Use <b>sodium bicarbonate solution</b> for lavage<br>
â€¢ Activated charcoal does NOT bind methanol â€” not useful<br><br>
<b>3. Antidotes â€” BLOCK ADH (most critical step)</b><br>
â€¢ <b>Fomepizole (4-methylpyrazole)</b> â€” preferred antidote<br>
  &nbsp;&nbsp;Loading dose: <b>15 mg/kg IV</b> over 30 min<br>
  &nbsp;&nbsp;Maintenance: 10 mg/kg IV every 12 hrs Ã— 4 doses, then 15 mg/kg every 12 hrs<br>
  &nbsp;&nbsp;Advantages: no CNS depression, precise dosing, no monitoring needed<br>
â€¢ <b>Ethanol</b> â€” if fomepizole unavailable<br>
  &nbsp;&nbsp;Loading: <b>0.6 g/kg IV</b> (10% ethanol in D5W) or orally (whisky/vodka 1 mL/kg)<br>
  &nbsp;&nbsp;Maintain blood ethanol at <b>100â€“150 mg/dL</b> â€” competes with methanol for ADH<br>
  &nbsp;&nbsp;Disadvantages: CNS/respiratory depression, frequent monitoring, hypoglycaemia<br><br>
<b>4. Folinic acid (leucovorin)</b> â€” clears formate<br>
â€¢ <b>1â€“2 mg/kg IV every 6 hours</b><br>
â€¢ Cofactor for formate â†’ COâ‚‚ + Hâ‚‚O conversion<br>
â€¢ Continue until methanol undetectable<br><br>
<b>5. Sodium bicarbonate</b> â€” correct acidosis<br>
â€¢ <b>500â€“800 mL of 7.5% NaHCOâ‚ƒ IV slowly</b><br>
â€¢ Target pH &gt;7.35<br>
â€¢ Also reduces formate toxicity (ionised formate crosses blood-brain barrier less)<br><br>
<b>6. Haemodialysis â€” Indications:</b><br>
â€¢ Methanol level <b>&gt;25â€“50 mg%</b><br>
â€¢ Metabolic acidosis refractory to treatment (pH &lt;7.3)<br>
â€¢ Visual impairment or any neurological symptoms<br>
â€¢ Renal failure<br>
â€¢ Ingestion of large amount even without symptoms<br>
â€¢ Removes: methanol + formaldehyde + formate simultaneously<br>
â€¢ Continue until methanol undetectable and pH normalised<br><br>
<b>7. Supportive ICU care:</b><br>
â€¢ Diazepam / lorazepam for convulsions<br>
â€¢ Vasopressors for hypotension<br>
â€¢ Mechanical ventilation if respiratory failure<br>
â€¢ Monitor glucose (ethanol therapy causes hypoglycaemia)`
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
<svg width="100%" viewBox="0 0 680 870" role="img" style="max-width:660px;display:block;">
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
<text font-size="11" fill="#854F0B" x="175" y="67" text-anchor="middle">Absorbed 30â€“60 min Â· 30 mL fatal</text>
<path d="M277 54 L338 54" fill="none" stroke="#378ADD" stroke-width="1.5" marker-end="url(#barr)"/>
<rect x="340" y="30" width="200" height="48" rx="7" fill="#E6F1FB" stroke="#378ADD" stroke-width="1"/>
<text font-size="13" font-weight="600" fill="#185FA5" x="440" y="50" text-anchor="middle">Gastric lavage</text>
<text font-size="11" fill="#185FA5" x="440" y="67" text-anchor="middle">NaHCOâ‚ƒ solution â€” within 1â€“2 h</text>
<!-- Arrow 1â†’2 -->
<line x1="175" y1="80" x2="175" y2="118" stroke="#EF9F27" stroke-width="1.5" marker-end="url(#arr)"/>
<text font-size="10" fill="#888" x="184" y="104">ADH enzyme</text>
<!-- Step 2 Formaldehyde -->
<rect x="75" y="120" width="200" height="48" rx="7" fill="#FEF3DC" stroke="#EF9F27" stroke-width="1"/>
<text font-size="13" font-weight="600" fill="#854F0B" x="175" y="140" text-anchor="middle">Formaldehyde</text>
<text font-size="11" fill="#854F0B" x="175" y="157" text-anchor="middle">Rapidly converted â†’ formate</text>
<path d="M277 144 L338 144" fill="none" stroke="#1D9E75" stroke-width="1.5" marker-end="url(#tarr)"/>
<rect x="340" y="110" width="200" height="66" rx="7" fill="#E1F5EE" stroke="#1D9E75" stroke-width="1.5"/>
<text font-size="13" font-weight="600" fill="#0F6E56" x="440" y="132" text-anchor="middle">Fomepizole / Ethanol</text>
<text font-size="11" fill="#0F6E56" x="440" y="149" text-anchor="middle">Block ADH â€” stop cascade here</text>
<text font-size="11" fill="#0F6E56" x="440" y="166" text-anchor="middle">Start ASAP, even before lab results</text>
<!-- Arrow 2â†’3 -->
<line x1="175" y1="170" x2="175" y2="208" stroke="#EF9F27" stroke-width="1.5" marker-end="url(#arr)"/>
<text font-size="10" fill="#888" x="184" y="194">Aldehyde DH</text>
<!-- Step 3 Formic acid -->
<rect x="75" y="210" width="200" height="64" rx="7" fill="#FCEBEB" stroke="#E24B4A" stroke-width="1.5"/>
<text font-size="13" font-weight="600" fill="#791F1F" x="175" y="232" text-anchor="middle">Formic acid  âš  KEY TOXIN</text>
<text font-size="11" fill="#791F1F" x="175" y="249" text-anchor="middle">Blocks Complex IV (cytochrome c</text>
<text font-size="11" fill="#791F1F" x="175" y="264" text-anchor="middle">oxidase) â†’ ATP failure</text>
<path d="M277 242 L338 242" fill="none" stroke="#1D9E75" stroke-width="1.5" marker-end="url(#tarr)"/>
<rect x="340" y="220" width="200" height="66" rx="7" fill="#E1F5EE" stroke="#1D9E75" stroke-width="1"/>
<text font-size="13" font-weight="600" fill="#0F6E56" x="440" y="242" text-anchor="middle">Folinic acid (leucovorin)</text>
<text font-size="11" fill="#0F6E56" x="440" y="259" text-anchor="middle">1â€“2 mg/kg IV every 6 hrs</text>
<text font-size="11" fill="#0F6E56" x="440" y="276" text-anchor="middle">Converts formate â†’ COâ‚‚ + Hâ‚‚O</text>
<!-- Arrow to acidosis -->
<line x1="175" y1="276" x2="120" y2="318" stroke="#A32D2D" stroke-width="1.5" marker-end="url(#rarr)"/>
<!-- Arrow to optic/putamen -->
<line x1="175" y1="276" x2="230" y2="318" stroke="#A32D2D" stroke-width="1.5" stroke-dasharray="4 3" marker-end="url(#rarr)"/>
<!-- Step 4A Metabolic acidosis -->
<rect x="30" y="320" width="170" height="52" rx="7" fill="#FCEBEB" stroke="#E24B4A" stroke-width="1"/>
<text font-size="12" font-weight="600" fill="#791F1F" x="115" y="342" text-anchor="middle">Metabolic acidosis</text>
<text font-size="11" fill="#791F1F" x="115" y="360" text-anchor="middle">pH &lt;7.0 Â· AG &gt;20</text>
<path d="M202 346 L280 390 L338 390" fill="none" stroke="#378ADD" stroke-width="1.5" marker-end="url(#barr)"/>
<rect x="340" y="366" width="200" height="52" rx="7" fill="#E6F1FB" stroke="#378ADD" stroke-width="1"/>
<text font-size="13" font-weight="600" fill="#185FA5" x="440" y="388" text-anchor="middle">NaHCOâ‚ƒ IV</text>
<text font-size="11" fill="#185FA5" x="440" y="405" text-anchor="middle">500â€“800 mL of 7.5% â€” slow infusion</text>
<!-- Step 4B Optic+Putamen -->
<rect x="204" y="320" width="160" height="52" rx="7" fill="#FCEBEB" stroke="#E24B4A" stroke-width="1"/>
<text font-size="12" font-weight="600" fill="#791F1F" x="284" y="340" text-anchor="middle">Optic + Putamen</text>
<text font-size="11" fill="#791F1F" x="284" y="358" text-anchor="middle">Necrosis Â· CT bilateral hypodensity</text>
<!-- HD box -->
<path d="M277 252 L308 252 L308 448 L338 448" fill="none" stroke="#7F77DD" stroke-width="1.5" marker-end="url(#parr)"/>
<rect x="340" y="432" width="200" height="80" rx="7" fill="#EEEDFE" stroke="#7F77DD" stroke-width="1.5"/>
<text font-size="13" font-weight="600" fill="#534AB7" x="440" y="456" text-anchor="middle">Haemodialysis</text>
<text font-size="11" fill="#534AB7" x="440" y="473" text-anchor="middle">Removes methanol + formate</text>
<text font-size="11" fill="#534AB7" x="440" y="490" text-anchor="middle">+ formaldehyde simultaneously</text>
<text font-size="11" fill="#534AB7" x="440" y="507" text-anchor="middle">Indicated if level &gt;25â€“50 mg%</text>
<!-- Arrow to convulsions -->
<line x1="175" y1="374" x2="175" y2="536" stroke="#791F1F" stroke-width="1.5" marker-end="url(#rarr)"/>
<!-- Step 5 Convulsions/coma -->
<rect x="60" y="538" width="230" height="66" rx="7" fill="#FCEBEB" stroke="#E24B4A" stroke-width="1"/>
<text font-size="13" font-weight="600" fill="#791F1F" x="175" y="560" text-anchor="middle">Convulsions / coma</text>
<text font-size="11" fill="#791F1F" x="175" y="577" text-anchor="middle">Putaminal necrosis Â· raised ICP</text>
<text font-size="11" fill="#791F1F" x="175" y="593" text-anchor="middle">Bradycardia Â· hypotension</text>
<path d="M292 560 L338 560" fill="none" stroke="#378ADD" stroke-width="1.5" marker-end="url(#barr)"/>
<rect x="340" y="526" width="200" height="80" rx="7" fill="#E6F1FB" stroke="#378ADD" stroke-width="1"/>
<text font-size="13" font-weight="600" fill="#185FA5" x="440" y="548" text-anchor="middle">ICU Supportive care</text>
<text font-size="11" fill="#185FA5" x="440" y="565" text-anchor="middle">Diazepam / lorazepam</text>
<text font-size="11" fill="#185FA5" x="440" y="581" text-anchor="middle">for convulsions</text>
<text font-size="11" fill="#185FA5" x="440" y="597" text-anchor="middle">Vasopressors Â· correct hypoglycaemia</text>
<!-- Arrow to resp failure -->
<line x1="175" y1="606" x2="175" y2="654" stroke="#791F1F" stroke-width="2" marker-end="url(#rarr)"/>
<!-- Step 6 Respiratory failure -->
<rect x="60" y="656" width="230" height="52" rx="7" fill="#FCEBEB" stroke="#E24B4A" stroke-width="2"/>
<text font-size="13" font-weight="600" fill="#791F1F" x="175" y="678" text-anchor="middle">Respiratory failure</text>
<text font-size="11" fill="#791F1F" x="175" y="695" text-anchor="middle">PRIMARY cause of death in methanol</text>
<path d="M292 682 L338 682" fill="none" stroke="#378ADD" stroke-width="1.5" marker-end="url(#barr)"/>
<rect x="340" y="656" width="200" height="52" rx="7" fill="#E6F1FB" stroke="#378ADD" stroke-width="1"/>
<text font-size="13" font-weight="600" fill="#185FA5" x="440" y="678" text-anchor="middle">Mechanical ventilation</text>
<text font-size="11" fill="#185FA5" x="440" y="695" text-anchor="middle">Intubate early Â· ICU admission</text>
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
  <button class="bg-sn bg-active" onclick="bgShow(0)">1 Â· Why putamen?</button>
  <button class="bg-sn" onclick="bgShow(1)">2 Â· Injury mechanism</button>
  <button class="bg-sn" onclick="bgShow(2)">3 Â· Clinical findings</button>
  <button class="bg-sn" onclick="bgShow(3)">4 Â· Imaging</button>
  <button class="bg-sn" onclick="bgShow(4)">5 Â· Differentials</button>
</div>

<div class="bg-panel bg-show" id="bgp0">
  <div class="bg-why">
    <div class="bg-why-title">The putamen is the most metabolically active region in the brain</div>
    <div class="bg-why-text">The putamen (part of basal ganglia / striatum) has one of the highest rates of oxidative metabolism in the CNS. This makes it exceptionally dependent on mitochondrial function â€” and therefore exceptionally vulnerable to anything that blocks energy production.</div>
  </div>
  <div class="bg-chain">
    <span class="bg-ch bg-amber">Methanol</span><span class="bg-arr">â†’</span>
    <span class="bg-ch bg-amber">Formaldehyde</span><span class="bg-arr">â†’</span>
    <span class="bg-ch bg-red">Formic acid</span><span class="bg-arr">â†’</span>
    <span class="bg-ch bg-red">Complex IV inhibited</span><span class="bg-arr">â†’</span>
    <span class="bg-ch bg-purple">Mitochondrial failure</span>
  </div>
  <div class="bg-grid">
    <div class="bg-card"><div class="bg-fc-mech">The culprit</div><div class="bg-fc-text">Formic acid inhibits cytochrome c oxidase (Complex IV) â€” the final enzyme in the mitochondrial electron transport chain</div></div>
    <div class="bg-card"><div class="bg-fc-mech">Why basal ganglia?</div><div class="bg-fc-text">High metabolic demand + poor collateral blood supply + end-arterial territory = greatest sensitivity to energy failure</div></div>
    <div class="bg-card"><div class="bg-fc-mech">Why putamen specifically?</div><div class="bg-fc-text">Within basal ganglia, the putamen has the highest dopaminergic activity and densest mitochondrial load â€” it is the "first to fall" when energy fails</div></div>
    <div class="bg-card"><div class="bg-fc-mech">What about cortex?</div><div class="bg-fc-text">Cortex is also metabolically active but has better collateral supply. Putamen is end-arterial â€” no backup perfusion when local metabolism collapses</div></div>
  </div>
  <div class="bg-infobox"><p><b>Memory hook:</b> Putamen = high demand, no backup. It's like a city with one power line and no generator â€” the moment energy fails, it goes dark first.</p></div>
</div>

<div class="bg-panel" id="bgp1">
  <div class="bg-why"><div class="bg-why-title">Four-stage injury cascade</div><div class="bg-why-text">The injury unfolds predictably. Each stage builds on the last â€” which is why the latent period exists and why early treatment can interrupt the cascade.</div></div>
  <div class="bg-grid">
    <div class="bg-card"><div class="bg-fc-mech">Stage 1 Â· Formate accumulates</div><div class="bg-fc-text">Formic acid builds up as methanol metabolises slowly. Takes 12â€“24 hrs to reach toxic levels. Ethanol co-ingestion delays this by competing for ADH.</div></div>
    <div class="bg-card"><div class="bg-fc-mech">Stage 2 Â· Complex IV blocked</div><div class="bg-fc-text">Formate directly inhibits cytochrome c oxidase. Electron transport halts. No ATP. The putamen, with extreme ATP demand, fails first.</div></div>
    <div class="bg-card"><div class="bg-fc-mech">Stage 3 Â· Cytotoxic oedema</div><div class="bg-fc-text">Without ATP, Na-K-ATPase pumps fail. Sodium floods into cells. Water follows. Cells swell â€” cytotoxic oedema (intracellular). Restricts diffusion on MRI.</div></div>
    <div class="bg-card"><div class="bg-fc-mech">Stage 4 Â· Haemorrhagic necrosis</div><div class="bg-fc-text">In severe/late cases, the swollen tissue infarcts. Capillaries rupture â†’ haemorrhage into necrotic putamen â€” "putaminal haemorrhage" at autopsy.</div></div>
  </div>
  <div class="bg-keybox"><p>The injury is NOT ischaemic â€” blood supply is intact. It is a <b>metabolic infarct</b>. The putamen starves of energy despite normal blood flow. This distinction matters for treatment and for MCQs.</p></div>
  <div class="bg-chain">
    <span class="bg-ch bg-red">Formate â†‘</span><span class="bg-arr">â†’</span>
    <span class="bg-ch bg-red">Complex IV blocked</span><span class="bg-arr">â†’</span>
    <span class="bg-ch bg-purple">ATP failure</span><span class="bg-arr">â†’</span>
    <span class="bg-ch bg-purple">Na-K pump fails</span><span class="bg-arr">â†’</span>
    <span class="bg-ch bg-red">Cell swelling</span><span class="bg-arr">â†’</span>
    <span class="bg-ch bg-red">Necrosis</span>
  </div>
</div>

<div class="bg-panel" id="bgp2">
  <div class="bg-grid">
    <div class="bg-card"><div class="bg-fc-find">Finding</div><div class="bg-fc-text" style="font-weight:600;margin-bottom:4px">Extrapyramidal symptoms</div><div class="bg-fc-mech" style="margin-top:6px">Why?</div><div class="bg-fc-text">Putamen is part of the motor circuit (basal ganglia â†’ thalamus â†’ cortex). Necrosis disrupts motor modulation. Survivors show rigidity, bradykinesia, dystonia â€” Parkinson-like picture.</div></div>
    <div class="bg-card"><div class="bg-fc-find">Finding</div><div class="bg-fc-text" style="font-weight:600;margin-bottom:4px">Parkinsonism (late sequela)</div><div class="bg-fc-mech" style="margin-top:6px">Why?</div><div class="bg-fc-text">Dopaminergic neurons in putamen/striatum destroyed. Mirrors idiopathic Parkinson's â€” but caused acutely by a toxin destroying the same cells.</div></div>
    <div class="bg-card"><div class="bg-fc-find">Finding</div><div class="bg-fc-text" style="font-weight:600;margin-bottom:4px">Coma / convulsions</div><div class="bg-fc-mech" style="margin-top:6px">Why?</div><div class="bg-fc-text">Bilateral putaminal necrosis disrupts thalamo-cortical circuits. Global energy failure from formic acid also affects cortex and brainstem in severe cases.</div></div>
    <div class="bg-card"><div class="bg-fc-find">Finding</div><div class="bg-fc-text" style="font-weight:600;margin-bottom:4px">High anion gap acidosis</div><div class="bg-fc-mech" style="margin-top:6px">Why?</div><div class="bg-fc-text">Formic acid is an unmeasured anion â€” directly widens the anion gap. The more formate, the worse the acidosis and the worse the putaminal injury.</div></div>
    <div class="bg-card"><div class="bg-fc-find">Finding</div><div class="bg-fc-text" style="font-weight:600;margin-bottom:4px">Blindness / optic atrophy</div><div class="bg-fc-mech" style="margin-top:6px">Same mechanism</div><div class="bg-fc-text">Retinal ganglion cells and optic nerve axons have very high mitochondrial density. Formate inhibits Complex IV here too. The retina is the brain's extension â€” same vulnerability.</div></div>
    <div class="bg-card"><div class="bg-fc-find">Finding</div><div class="bg-fc-text" style="font-weight:600;margin-bottom:4px">Symmetric bilateral pattern</div><div class="bg-fc-mech" style="margin-top:6px">Why symmetric?</div><div class="bg-fc-text">Formate circulates systemically. Both putamina exposed to identical toxic concentration simultaneously. Symmetry is a diagnostic hallmark â€” asymmetric lesions suggest another diagnosis.</div></div>
  </div>
  <div class="bg-tealbox"><p>Clinical pearl: the <b>degree of acidosis correlates with degree of putaminal injury</b>. pH &lt;7.0 almost certainly means significant basal ganglia necrosis is already underway.</p></div>
</div>

<div class="bg-panel" id="bgp3">
  <div class="bg-why"><div class="bg-why-title">What you see on CT / MRI and why</div><div class="bg-why-text">The imaging findings directly reflect the staged injury mechanism.</div></div>
  <div class="bg-grid">
    <div class="bg-card"><div class="bg-fc-exam">CT finding</div><div class="bg-fc-text" style="font-weight:600;margin-bottom:4px">Bilateral hypodensity in putamen</div><div class="bg-fc-mech" style="margin-top:6px">Mechanism</div><div class="bg-fc-text">Cytotoxic oedema lowers tissue density. Hypodensity = water-logged dying tissue. Appears 24â€“48 hrs after ingestion.</div></div>
    <div class="bg-card"><div class="bg-fc-exam">CT finding</div><div class="bg-fc-text" style="font-weight:600;margin-bottom:4px">Hyperdensity (haemorrhage)</div><div class="bg-fc-mech" style="margin-top:6px">Mechanism</div><div class="bg-fc-text">In severe/late cases, capillary rupture into necrotic putamen appears bright on CT. Indicates haemorrhagic transformation â€” poor prognosis sign.</div></div>
    <div class="bg-card"><div class="bg-fc-exam">MRI finding</div><div class="bg-fc-text" style="font-weight:600;margin-bottom:4px">Restricted diffusion (DWI bright)</div><div class="bg-fc-mech" style="margin-top:6px">Mechanism</div><div class="bg-fc-text">Cytotoxic oedema restricts random water movement. DWI lights up early â€” can detect injury before CT. Mirror image on both sides.</div></div>
    <div class="bg-card"><div class="bg-fc-exam">MRI finding</div><div class="bg-fc-text" style="font-weight:600;margin-bottom:4px">T2/FLAIR hyperintensity</div><div class="bg-fc-mech" style="margin-top:6px">Mechanism</div><div class="bg-fc-text">Oedematous necrotic tissue has longer T2 relaxation. Bilateral putaminal T2 hyperintensity in right clinical context = methanol until proven otherwise.</div></div>
  </div>
  <div class="bg-infobox"><p>Exam key: CT shows <b>"symmetrical areas of necrosis in the putamen"</b> â€” the textbook phrase. But this is NOT pathognomonic. Wilson's disease and Leigh's disease can look identical. Formic acid level + osmolal gap + clinical history clinches it.</p></div>
</div>

<div class="bg-panel" id="bgp4">
  <div class="bg-why"><div class="bg-why-title">Why CT/MRI alone is not enough</div><div class="bg-why-text">Bilateral putaminal necrosis is a pattern, not a diagnosis. Several conditions target the putamen by the same metabolic mechanism. Always correlate with clinical history and blood tests.</div></div>
  <div class="bg-grid">
    <div class="bg-card"><div class="bg-fc-diff">Differential 1</div><div class="bg-fc-text" style="font-weight:600;margin-bottom:4px">Wilson's disease</div><div class="bg-fc-mech" style="margin-top:6px">How to distinguish</div><div class="bg-fc-text">Copper deposition in basal ganglia. Chronic onset. Kayser-Fleischer rings. Low serum ceruloplasmin. No acidosis, no osmolal gap.</div></div>
    <div class="bg-card"><div class="bg-fc-diff">Differential 2</div><div class="bg-fc-text" style="font-weight:600;margin-bottom:4px">Leigh's disease</div><div class="bg-fc-mech" style="margin-top:6px">How to distinguish</div><div class="bg-fc-text">Mitochondrial disease in children. Genetic cause. Also causes putaminal + brainstem lesions. No toxic history. Elevated CSF lactate.</div></div>
    <div class="bg-card"><div class="bg-fc-diff">Differential 3</div><div class="bg-fc-text" style="font-weight:600;margin-bottom:4px">Carbon monoxide poisoning</div><div class="bg-fc-mech" style="margin-top:6px">How to distinguish</div><div class="bg-fc-text">CO also inhibits Complex IV (same mechanism). Globus pallidus more commonly involved than putamen. Carboxyhemoglobin elevated. Fire/generator exposure history.</div></div>
    <div class="bg-card"><div class="bg-fc-diff">Differential 4</div><div class="bg-fc-text" style="font-weight:600;margin-bottom:4px">Hypoxic-ischaemic injury</div><div class="bg-fc-mech" style="margin-top:6px">How to distinguish</div><div class="bg-fc-text">Cardiac arrest, near-drowning. Diffuse cortical involvement in addition to basal ganglia. No osmolal gap or elevated methanol level.</div></div>
  </div>
  <div class="bg-tealbox"><p>Unifying theme: ALL these conditions damage the putamen by disrupting mitochondrial energy. Methanol (formate â†’ Complex IV), CO (same), Wilson's (copper toxicity), Leigh's (genetic). Same vulnerable region, different poison.</p></div>
  <div class="bg-why"><div class="bg-why-title">The clincher for methanol</div><div class="bg-why-text">High anion gap acidosis + elevated osmolal gap + detectable formic acid / methanol level + history of illicit alcohol ingestion = methanol poisoning. Imaging confirms extent; biochemistry makes the diagnosis.</div></div>
</div>
</div>
<script>
function bgShow(i){
  document.querySelectorAll('.bg-panel').forEach((p,j)=>p.classList.toggle('bg-show',j===i));
  document.querySelectorAll('.bg-sn').forEach((b,j)=>b.classList.toggle('bg-active',j===i));
}
</script>`
      },
      {
        step: 8,
        title: "Autopsy Findings & Medico-Legal Aspects",
        text: `<b>POST-MORTEM FINDINGS IN METHANOL POISONING</b><br><br>
<b>External:</b><br>
â€¢ Cyanosis â€” more marked on <b>upper body and face</b><br>
â€¢ Signs of corrosion around mouth (if concentrated methanol)<br>
â€¢ Pupils: dilated and fixed<br><br>
<b>Internal:</b><br>
â€¢ <b>Pulmonary oedema</b> â€” lungs heavy, waterlogged, frothy fluid in airways<br>
â€¢ <b>Retinal oedema</b> and optic nerve pallor / atrophy<br>
â€¢ <b>Putaminal haemorrhage / necrosis</b> â€” bilateral symmetric haemorrhagic softening in basal ganglia<br>
â€¢ Gastric mucosa: congestion, erosions if concentrated methanol ingested<br>
â€¢ Kidney: tubular necrosis in severe/prolonged cases<br>
â€¢ Liver: congestion<br>
â€¢ Brain: oedema; CT / gross section shows symmetric haemorrhagic putaminal lesions<br><br>
<b>Characteristic smell:</b> Faint alcoholic odour from viscera and blood<br><br>
<hr style="border-color:#ddd;margin:14px 0;"><br>
<b>VISCERA PRESERVATION â€” CRITICAL RULE</b><br><br>
<b>Preserve in: Saturated Sodium Chloride (NaCl) solution</b><br>
<b>NEVER use Rectified Spirit</b> â€” methanol is soluble in spirit; using spirit as preservative will dissolve the evidence and give a false negative on chemical analysis.<br><br>
Send: Stomach + contents, Small intestine + contents, Liver (500g), Kidney (half each), Blood (30 mL on gauze, air-dried for serology; peripheral vein), Vitreous humour (alcohol levels better preserved here), Urine<br><br>
<b>Additional samples for methanol specifically:</b><br>
â€¢ <b>Vitreous humour</b> â€” most important for methanol/ethanol analysis (less affected by post-mortem redistribution)<br>
â€¢ <b>Cerebrospinal fluid</b> â€” formic acid levels<br>
â€¢ <b>Eye fluid</b> â€” retinal changes can be confirmed histologically<br><br>
<hr style="border-color:#ddd;margin:14px 0;"><br>
<b>MEDICO-LEGAL ASPECTS</b><br><br>
<b>1. Manner of death:</b> Usually <b>accidental</b> (hooch tragedies, illicit liquor). Homicidal is rare. Suicidal is uncommon but documented.<br><br>
<b>2. Hooch tragedy / mass casualty:</b><br>
â€¢ Report to Executive Magistrate immediately<br>
â€¢ Multiple victims from the same illicit batch<br>
â€¢ Preserve samples from the liquid if available â€” this is the direct evidence<br>
â€¢ FSL analysis of the offending batch is key to prosecution<br><br>
<b>3. The latent period creates a medico-legal challenge:</b><br>
â€¢ Victims may appear intoxicated and be turned away from hospitals<br>
â€¢ Death occurs 12â€“36 hours later â€” apparent delay creates disputes about time of ingestion vs time of death<br>
â€¢ Documentation of symptoms onset is critical<br><br>
<b>4. Blindness as evidence of non-fatal poisoning:</b><br>
â€¢ Survivors with permanent blindness â€” methanol can be established even without death<br>
â€¢ Retinal oedema and optic atrophy are forensic evidence<br><br>
<b>5. Offence:</b> Sale of adulterated liquor causing death/injury is punishable under IPC (Sec 304A â€” culpable homicide not amounting to murder by negligence) and Excise Act. In Tamil Nadu â€” specific provisions under Tamil Nadu Prohibition Act.<br><br>
<b>6. Examination of scene:</b><br>
â€¢ Recover and seal offending liquid samples immediately<br>
â€¢ Document source, batch, and distribution chain<br>
â€¢ Preserve in airtight containers (methanol is volatile)`
      }
    ],

    // â”€â”€ TO ADD A NEW TOPIC â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
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
    // â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€

  },

  // â”€â”€ VISCERA SIMULATION SCENARIOS â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
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
      trap: "NEVER use Rectified Spirit for alcohol cases â€” it contaminates the sample directly. Higher NaF dose (10mg) prevents post-mortem alcohol formation by bacteria."
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
      trap: "Phenol is HIGHLY SOLUBLE in Rectified Spirit â€” using spirit destroys the sample. Use Salt, NOT Spirit. Classic examiner trap."
    },
    {
      id: "methanol",
      history: "Multiple victims from the same village admitted after consuming locally brewed liquor. All have visual disturbances, deep breathing, and altered sensorium. Suspected Methyl Alcohol (Methanol) Poisoning.",
      correctPreservative: "Saturated Salt Solution",
      correctBloodPres: "NaF 2mg",
      trap: "CRITICAL: NEVER use Rectified Spirit for methanol â€” methanol is soluble in spirit and will be dissolved, giving a false negative. Use Saturated NaCl. Also collect vitreous humour separately â€” it gives the most reliable alcohol levels."
    }
  ]
};
