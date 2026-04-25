// topics.js
const forensicContent = {
  slides: [
    {
      id: 1,
      title: "1. Professionalism Poll",
      type: "poll",
      question: "At what stage does a doctor's professional responsibility for a medico-legal autopsy officially begin?",
      options: ["When the first incision is made", "When the police bring the body", "When the requisition is received and accepted"],
      correct: 2,
      reveal: "Professionalism covers everything from **receiving a case** to the **final dispatch** of the report. It is a continuous chain of custody."
    },
    {
      id: 2,
      title: "2. Pre-Autopsy Prerequisites",
      text: "<b>The Hierarchy:</b> In Govt Medical Colleges, the Prof. of Forensic Medicine receives requests. In their absence, the Associate or Assistant Prof. follows [cite: 5-6].<br><br><b>No Refusal:</b> No Medical Officer can refuse an autopsy citing personal interest. In other hospitals, the CMO/RMO obliges the request[cite: 15, 18]."
    },
    {
      id: 3,
      title: "3. Required Documents",
      text: "<b>Authorization:</b> Routine cases require a Sub-Inspector or Senior Head Constable request [cite: 38].<br><br><b>Magistrate Inquest:</b> Mandatory for Custodial deaths, Dowry allegations, and Exhumation [cite: 39-40].<br><br><b>The PM Booklet:</b> Verify FIR, SOC Sketch, Form 86, and ID Proof. All pages must be numbered and attached to Medl. I-28 [cite: 44-46]."
    },
    {
      id: 4,
      title: "4. Conduct & Documentation",
      text: "<b>Privacy:</b> Only the MO, technicians, and body-in-charge constable are allowed. Professionalism forbids unauthorized bystanders[cite: 60, 65].<br><br><b>Documentation:</b> Findings must be handwritten in the Medl. I-28 booklet during the autopsy—never rely on memory later [cite: 74-76]."
    },
    {
      id: 5,
      title: "5. Special Situations",
      text: "<b>Custodial Deaths:</b> Requires a team of 2 doctors (MD Forensic) and 6-phase videography [cite: 274, 320].<br><br><b>HIV Cases:</b> Body wrapped in plastic for 3 days to allow viral viability to reduce before dissection [cite: 408].<br><br><b>Exhumation:</b> Conducted in natural light and screened from public view[cite: 140]."
    },
    {
      id: 6,
      title: "6. Preservation & Dispatch",
      text: "<b>Viscera:</b> Use Saturated Salt Solution; fill containers only to 3/4th capacity [cite: 167].<br><br><b>DNA:</b> 10cm femur shaft or permanent molars preserved in common salt [cite: 208].<br><br><b>Dispatch:</b> All samples must be wax-sealed; the FSL receipt must be attached to the PM booklet[cite: 177, 179]."
    },
    {
      id: 7,
      title: "7. Opinion Framing",
      text: "<b>Provisional Opinion:</b> Issued same-day if reports are pending[cite: 87, 120].<br><br><b>Professional Accuracy:</b> The word 'PROBABLY' must be avoided. If undetermined, state as such.<br><br><b>Handover:</b> Original Medl. I-29 certificate is posted directly to the Magistrate[cite: 91]."
    }
  ],
  // MODULE 1: PROFESSIONALISM RELAY
  relay: {
    "Row 1: General": [
      { step: 1, title: "Authorization", text: "Verify Police Requisition and Body Challan. Professionally cross-check ID marks (moles/tattoos) against the Inquest Report before the first cut." },
      { step: 2, title: "Dignity", text: "Close mortuary doors. Only authorized personnel (MO, Tech, Constable) permitted. Professionalism forbids unauthorized bystanders." },
      { step: 3, title: "Real-time Records", text: "Dictate findings directly into Medl I-28 booklet during the autopsy. Never rely on memory for later reporting." },
      { step: 4, title: "Handover", text: "Reconstruct body and pack in khada cloth. Hand all jewelry to the Constable with a signed receipt." }
    ],
    "Row 2: Custodial": [
      { step: 1, title: "The Board", text: "Conduct autopsy with a Board of at least two doctors. Transparency is the shield against allegations of bias." },
      { step: 2, title: "Judicial Command", text: "Inquest must be by a Judicial Magistrate (Sec 176 1A CrPC). Verify specific written instructions from the Magistrate." },
      { step: 3, title: "Videography", text: "Ensure continuous, unedited video recording. Capture all external injuries before any dissection begins." },
      { step: 4, title: "Injury Mapping", text: "Document even the smallest 1x1 cm bruise. Distinguish CPR/therapeutic marks from signs of torture/struggle." }
    ],
    "Row 3: Dowry": [
      { step: 1, title: "Executive Authority", text: "Suspicious death within 7 years of marriage (Sec 304B IPC). Autopsy requires an Executive Magistrate (RDO) request." },
      { step: 2, title: "Screening", text: "Perform professional screening for sexual assault. Collect and air-dry vaginal, anal, and oral swabs as routine precaution." },
      { step: 3, title: "Ligature Analysis", text: "Meticulously document level, direction, and continuity of neck marks to differentiate suicide from homicide." },
      { step: 4, title: "Reserved Opinion", text: "Use Medl I-29. Reserve final opinion until chemical analysis and histopathology reports are obtained." }
    ],
    "Row 4: Exhumation": [
      { step: 1, title: "Written Warrant", text: "Never proceed without a written order from an Executive Magistrate. Body must be identified by relatives at the gravesite." },
      { step: 2, title: "Soil Controls", text: "Collect control soil samples from above, below, and the sides of the body to rule out environmental leaching of poisons." },
      { step: 3, title: "Natural Light", text: "Exhumation must be conducted in broad daylight (Sunrise to Sunset) to ensure procedural transparency and visibility." },
      { step: 4, title: "Decomposition", text: "Document state of adipocere or mummification. These findings are critical for interpreting injuries in a burial environment." }
    ]
  },

  // MODULE 2: VISCERA SIMULATION (8-STEP LOGIC)
  scenarios: [
    { 
      id: "op", 
      history: "Farmer found frothing in field. Clinical history: Suspected Organophosphorus (OP) Poisoning.",
      correctPreservative: "Saturated Salt Solution",
      correctBloodPres: "NaF 2mg/ml",
      trap: "Note: Salt is the standard for organic poisons."
    },
    { 
      id: "alcohol", 
      history: "Body found behind a liquor shop. History indicates: Suspected Acute Alcohol Poisoning.",
      correctPreservative: "Saturated Salt Solution",
      correctBloodPres: "NaF 10mg/ml",
      trap: "Error: Spirit contaminates alcohol samples. Use Saturated Salt."
    },
    { 
      id: "acid", 
      history: "Found near toilet cleaner. Autopsy shows leathery stomach. Suspected Mineral Acid Poisoning.",
      correctPreservative: "Rectified Spirit",
      correctBloodPres: "NaF 2mg/ml",
      trap: "Note: Salt reacts with mineral acids. Spirit is the required exception."
    },
    { 
      id: "phenol", 
      history: "Characteristic phenolic smell in mouth. Corrosive stains. Suspected Carbolic Acid (Phenol) Poisoning.",
      correctPreservative: "Saturated Salt Solution",
      correctBloodPres: "NaF 2mg/ml",
      trap: "Warning: Phenol is alcohol-soluble. Use Salt, NOT Spirit."
    }
  ]
};
