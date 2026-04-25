// topics.js
const forensicContent = {
  // --- MODULE 1: PROFESSIONALISM RELAY ---
  relay: {
    "Row 1: General": [
      { step: 1, title: "Authorization", text: "Verify Police Requisition and Body Challan. Professionally cross-check ID marks (moles/tattoos) against the Inquest Report before the first cut." },
      { step: 2, title: "Dignity", text: "Close mortuary doors. Only authorized personnel (MO, Tech, Constable) permitted. Professionalism forbids unauthorized bystanders." },
      { step: 3, title: "Real-time Records", text: "Dictate findings directly into Medl I-28 booklet <i>during</i> the autopsy. Never rely on memory for later reporting." },
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
      { step: 2, title: "Screeening", text: "Perform professional screening for sexual assault. Collect and air-dry vaginal, anal, and oral swabs as routine precaution." },
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

  // --- MODULE 2: VISCERA SIMULATION ---
  scenarios: [
    { 
      id: "op", 
      history: "Farmer found frothing in field. Clinical history: Suspected Organophosphorus (OP) Poisoning.",
      correctPreservative: "Saturated Salt Solution",
      correctBloodPres: "NaF 2mg",
      trap: "Common Trap: Do not use spirit; salt is the standard for organic poisons."
    },
    { 
      id: "alcohol", 
      history: "Body found behind a liquor shop. History indicates: Suspected Acute Alcohol Poisoning.",
      correctPreservative: "Saturated Salt Solution",
      correctBloodPres: "NaF 10mg",
      trap: "Professional Error: Never use Spirit for alcohol cases. Contaminates the sample."
    },
    { 
      id: "acid", 
      history: "Found near toilet cleaner. Autopsy shows leathery stomach. Suspected Mineral Acid Poisoning.",
      correctPreservative: "Rectified Spirit",
      correctBloodPres: "NaF 2mg",
      trap: "Chemical Rule: Salt can react with mineral acids. Rectified Spirit is the required exception."
    },
    { 
      id: "phenol", 
      history: "Characteristic phenolic smell in mouth. Corrosive stains. Suspected Carbolic Acid Poisoning.",
      correctPreservative: "Saturated Salt Solution",
      correctBloodPres: "NaF 2mg",
      trap: "Advanced Logic: Phenol is highly soluble in alcohol. Unlike other acids, use Salt, not Spirit."
    }
  ]
};
