// topics.js
const forensicSlides = [
  { id: 1, title: "Authorization & Protocol", text: "Professionalism begins with legal standing. Always verify the Police Requisition and Body Challan against the Inquest report. In forensic medicine, the first 'cut' is a mental one: verifying jurisdiction." },
  { id: 2, title: "Environmental Dignity", text: "The mortuary is a professional space. Ensure all doors are closed and only authorized personnel (MO, Technician, Constable) are present. Privacy is a right that continues after death." },
  { id: 3, title: "The External Map", text: "Document every finding in real-time. Describe injuries by size, shape, and site. In Custodial or Dowry cases, even a 1cm bruise is a major legal finding." },
  { id: 4, title: "Techniques of Evisceration", text: "Discussing Virchow’s vs. Rokitansky’s methods. At DSMCH, we emphasize the preservation of anatomical continuity to ensure the 'Chain of Custody' of findings." },
  { id: 5, title: "Viscera Selection Criteria", text: "Standard routine: Stomach, Intestine (30cm), Liver (500g), and Kidney (half each). Specialized cases require Blood (30ml) and Urine (30ml)." },
  { id: 6, title: "Chemical Logic (Preservatives)", text: "Salt for organics; Spirit for mineral acids. The 'Carbolic Trap': Phenol is alcohol-soluble, so use Saturated Salt even though it is an acid." },
  { id: 7, title: "Legal Dispatch", text: "The procedure ends with the seal. Wax (Lakh) must be applied to knots. The Magistrate's Authorization is the final gatekeeper for FSL analysis." }
];

const forensicContent = {
  relay: {
    "Row 1: General": [
      { step: 1, title: "Authorization", text: "Verify Police Requisition and Body Challan. Professionally cross-check ID marks before the first cut." },
      { step: 2, title: "Dignity", text: "Close mortuary doors. Only authorized personnel permitted. Privacy is a professional duty." },
      { step: 3, title: "Real-time Records", text: "Dictate findings directly into Medl I-28 booklet during the autopsy. Accuracy requires immediacy." },
      { step: 4, title: "Handover", text: "Reconstruct body and pack in khada cloth. Hand jewelry to Constable with a signed receipt." }
    ],
    "Row 2: Custodial": [
      { step: 1, title: "The Board", text: "Conduct autopsy with a Board of at least two doctors. Transparency prevents allegations of bias." },
      { step: 2, title: "Judicial Command", text: "Inquest must be by a Judicial Magistrate (Sec 176 1A CrPC). Verify written Magistrate instructions." },
      { step: 3, title: "Videography", text: "Ensure continuous, unedited video recording. Capture all external findings before dissection." },
      { step: 4, title: "Injury Mapping", text: "Document every minute bruise. Distinguish therapeutic marks (CPR) from torture signs." }
    ],
    "Row 3: Dowry": [
      { step: 1, title: "Executive Authority", text: "Suspicious death within 7 years of marriage (Sec 304B IPC). Autopsy requires RDO/Executive Magistrate request." },
      { step: 2, title: "Screening", text: "Perform professional screening for sexual assault. Collect and air-dry vaginal and anal swabs." },
      { step: 3, title: "Ligature Analysis", text: "Meticulously document neck marks to differentiate suicidal hanging from homicidal strangulation." },
      { step: 4, title: "Reserved Opinion", text: "Use Medl I-29. Reserve opinion until chemical and histopath reports are finalized." }
    ],
    "Row 4: Exhumation": [
      { step: 1, title: "Written Warrant", text: "Never proceed without an Executive Magistrate's order. Body must be identified at the gravesite." },
      { step: 2, title: "Soil Controls", text: "Collect soil samples from above, below, and sides to rule out environmental poison leaching." },
      { step: 3, title: "Natural Light", text: "Exhumation must be conducted in broad daylight (Sunrise to Sunset) for procedural visibility." },
      { step: 4, title: "Decomposition", text: "Document adipocere or mummification. These states drastically alter the interpretation of injuries." }
    ]
  },
  scenarios: [
    { id: "op", history: "Farmer found frothing in field. Clinical history: Suspected OP Poisoning.", correctPreservative: "Saturated Salt Solution", correctBloodPres: "NaF 2mg/ml", trap: "Note: Salt is the standard for organic poisons." },
    { id: "alcohol", history: "Body found behind a liquor shop. History indicates: Suspected Acute Alcohol Poisoning.", correctPreservative: "Saturated Salt Solution", correctBloodPres: "NaF 10mg/ml", trap: "Error: Spirit ruins alcohol samples. Use Salt." },
    { id: "acid", history: "Found near toilet cleaner. Autopsy shows leathery stomach. Suspected Mineral Acid.", correctPreservative: "Rectified Spirit", correctBloodPres: "NaF 2mg/ml", trap: "Note: Salt reacts with mineral acids. Spirit is the required exception." },
    { id: "phenol", history: "Characteristic phenolic smell. Corrosive stains. Suspected Carbolic Acid Poisoning.", correctPreservative: "Saturated Salt Solution", correctBloodPres: "NaF 2mg/ml", trap: "Warning: Phenol is alcohol-soluble. Use Salt, NOT Spirit." }
  ]
};
