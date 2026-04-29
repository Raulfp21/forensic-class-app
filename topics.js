// ============================================================
//  topics.js  —  CONTENT ONLY FILE
//  Edit ONLY this file when adding new topics or scenarios.
// ============================================================

const forensicContent = {

  // ── RELAY ROWS ─────────────────────────────────────────────
  relay: {

    "Step 1: Pre-Autopsy Prerequisites": [
      {
        step: 1,
        title: "Who Receives the Requisition?",
        text: "In Govt Medical Colleges, the <b>Professor of Forensic Medicine / Police Surgeon</b> receives PM requests. In their absence: Associate Professor → Assistant Professor. In other hospitals, the <b>CMO / RMO</b> obliges. No Medical Officer can refuse an autopsy citing personal interest."
      },
      {
        step: 2,
        title: "Timing Rules",
        text: "Requisitions accepted <b>only up to 4:00 PM</b>. Cases received before 4 PM may proceed <b>till 6 PM</b>. Exception: <b>Court order</b> must be obeyed immediately. <b>District Collector's explicit order</b> in law & order situations allows beyond-hours work."
      },
      {
        step: 3,
        title: "Who Can Give the Requisition Letter?",
        text: "<b>Routine cases:</b> Police officer ≥ Sub-Inspector (Police Station) or ≥ Senior Head Constable (Out Post).<br><b>Magistrate inquest required for:</b> Custodial deaths, rape in custody, disappearance in custody, dowry-allegation deaths, and exhumation cases."
      },
      {
        step: 4,
        title: "Documents to Collect",
        text: "Collect and attach (numbered) to PM Booklet (Medl. I-28):<br>• Requisition for PM examination<br>• Case history<br>• Form 86 / details of dead body<br>• SOC sketch & FIR copy<br>• A.R. copies & Death Intimation copy<br>• Treatment particulars (if treated elsewhere)"
      }
    ],

    "Step 2: Conduct of Autopsy": [
      {
        step: 1,
        title: "Who Is Authorised Inside?",
        text: "Only these persons are authorised during autopsy:<br>• Conducting Medical Officer(s)<br>• Required departmental technicians<br>• Mortuary attendants<br>• Body in-charge constable<br><br><b>NOT allowed</b> without explicit Govt/Court order + IO's NOC: other MOs, lawyers, common public."
      },
      {
        step: 2,
        title: "Documentation During Autopsy",
        text: "All findings — positive AND negative — entered <b>during</b> the autopsy in <b>Medl. I-28 booklet (16 pages)</b>. One booklet per case only. MO decides dissection technique at the start. Department sealed with <b>wax impression</b> daily."
      },
      {
        step: 3,
        title: "Videography Rules",
        text: "Permitted <b>only on written request from a relative/friend of deceased</b> with IO's knowledge. Recorded video <b>sealed and sent to the Magistrate</b>. IO may attend at MO's discretion but must not obstruct."
      },
      {
        step: 4,
        title: "After Autopsy — Handover",
        text: "Body packed neatly in khada cloth and plastic sheet. Jewellery & belongings handed to in-charge constable with <b>signed receipt on the same day</b>. PM certificate (Medl. I-29): <b>Original → Magistrate (sealed); Duplicate → IO; Triplicate → Department.</b>"
      }
    ],

    "Step 3: Special Situations": [
      {
        step: 1,
        title: "Custodial / Police Action Deaths",
        text: "Team of <b>≥ 2 doctors with MD Forensic Medicine</b> mandatory. Family must view body (front + back) before autopsy. <b>Whole-body X-ray / CT scan before dissection.</b> Body preserved <b>48 hours</b> if family declares intent to approach High Court."
      },
      {
        step: 2,
        title: "Photography & Videography — Custodial",
        text: "<b>20–25 coloured photographs</b>: face (3 views), torso front/back, upper/lower extremities, each numbered injury. Entire autopsy videographed in <b>6 phases</b>: bearings → external → injuries → cavity → head → trunk. MO narrates aloud; date/time superimposed."
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
        text: "Dictate and enter findings into <b>Medl. I-28 booklet during the autopsy</b>. Never rely on memory. Note all positive AND negative findings. Dissection technique decided at the start — no unscientific method."
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
        text: "Unedited video across all 6 phases. Capture all external injuries before dissection. MO narrates observations aloud. Sealed video chip dispatched to Magistrate → NHRC same day."
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
        text: "Document adipocere, mummification, or skeletonisation. <b>Burial artifacts must be interpreted correctly</b> — do not confuse decomposition changes with antemortem injuries. All viscera preserved for chemical analysis."
      }
    ],

    "Case: Methanol Poisoning": [
      {
        step: 1,
        title: "Toxic Mechanism Map",
        text: "<b>Mechanism of Toxicity:</b> Methanol is metabolized by Alcohol Dehydrogenase into Formaldehyde and then <b>Formic Acid</b>[cite: 1]. Formic acid is the primary toxin that inhibits <b>Cytochrome C Oxidase (Complex IV)</b> in the mitochondria, leading to cellular ATP failure[cite: 1, 2]."
      },
      {
        step: 2,
        title: "Why Putamen Necrosis?",
        text: "The <b>Putamen</b> has the brain's highest metabolic demand and dopaminergic activity, making it the most vulnerable to energy failure[cite: 2]. Because it is an <b>end-arterial territory</b> with no backup blood supply, it undergoes cytotoxic oedema and necrosis when ATP production is blocked by formic acid[cite: 2]."
      },
      {
        step: 3,
        title: "Clinical & Imaging Sign",
        text: "<b>Imaging:</b> CT/MRI shows <b>bilateral symmetric putaminal hypodensity</b>[cite: 2].<br><b>Clinical:</b> Patients present with severe <b>High Anion Gap Metabolic Acidosis</b> and visual disturbances ('snowfield vision')[cite: 1, 2]. The degree of acidosis directly correlates with the severity of brain injury[cite: 2]."
      },
      {
        step: 4,
        title: "Management & Preservation",
        text: "<b>Antidotes:</b> Fomepizole or Ethanol to block metabolism; Folinic acid (1-2mg/kg) to enhance formate clearance[cite: 1].<br><b>Autopsy Preservation:</b> Preserve viscera in <b>Saturated Salt Solution</b>. NEVER use Rectified Spirit, as it contains ethanol and will contaminate the toxicological sample[cite: 1, 3]."
      }
    ]

  },

  // ── VISCERA SIMULATION SCENARIOS ──────────────────────────
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
      trap: "NEVER use Rectified Spirit for alcohol cases — it contaminates the sample directly. Higher NaF dose (10mg) prevents post-mortem alcohol formation by bacteria."
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
      trap: "Phenol is HIGHLY SOLUBLE in Rectified Spirit — using spirit destroys the sample. Use Salt, NOT Spirit. Classic examiner trap."
    },
    {
      id: "methanol",
      history: "Patient presents with severe metabolic acidosis and 'snowfield' vision after consuming illicit liquor. Autopsy shows bilateral putaminal necrosis. Suspected Methanol Poisoning.",
      correctPreservative: "Saturated Salt Solution",
      correctBloodPres: "NaF 10mg",
      trap: "Methanol is an alcohol. Just like ethanol, <b>never use Rectified Spirit</b> for preservation as it contains alcohol and will ruin the toxicological analysis[cite: 1, 3]."
    }
  ]
};
