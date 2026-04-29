// ============================================================
//  topics.js  —  CONTENT ONLY FILE
// ============================================================

const forensicContent = {

  relay: {
    // ... [Previous entries: Step 1, Step 2, Step 3, General Autopsy, Custodial Death, Dowry Death]
    
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
    ], // Added comma here to separate the new entry

    "Case: Methanol Poisoning": [
      {
        step: 1,
        title: "Interactive Mechanism Map",
        text: `
          <style>
            .leg-dot{width:12px;height:12px;border-radius:3px;display:inline-block;margin-right:5px}
            .d-amber{background:#EF9F27}.d-red{background:#E24B4A}.d-teal{background:#1D9E75}.d-blue{background:#378ADD}
          </style>
          <div style="font-size:12px; margin-bottom:10px;">
            <span class="leg-dot d-amber"></span> Cascade | <span class="leg-dot d-red"></span> Injury | <span class="leg-dot d-teal"></span> Antidote
          </div>
          <!-- Integrated SVG from methanol_complete_mechanism_treatment.html[cite: 1] -->
          <svg width="100%" viewBox="0 0 680 920" style="background:#f9f9f9; border-radius:8px;">
            <defs>
              <marker id="arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M2 1L8 5L2 9" fill="none" stroke="#BA7517" stroke-width="1.5"/></marker>
            </defs>
            <g transform="scale(0.9) translate(35, 20)">
              <rect x="75" y="38" width="200" height="52" rx="8" fill="#FAEEDA" stroke="#EF9F27"/>
              <text x="175" y="65" text-anchor="middle" font-size="14" font-weight="bold">Methanol Ingested</text>
              <line x1="175" y1="92" x2="175" y2="138" stroke="#BA7517" stroke-width="1.5" marker-end="url(#arrow)"/>
              <rect x="75" y="140" width="200" height="52" rx="8" fill="#FCEBEB" stroke="#E24B4A"/>
              <text x="175" y="165" text-anchor="middle" font-size="14">Formaldehyde</text>
              <path d="M277 166 L338 166" fill="none" stroke="#1D9E75" stroke-width="2"/>
              <text x="440" y="165" text-anchor="middle" font-size="12" fill="#0F6E56">Antidote: Ethanol/Fomepizole</text>
            </g>
          </svg>
          <p style="margin-top:10px">The diagram shows how methanol is converted to formic acid, which inhibits mitochondrial Complex IV[cite: 1].</p>`
      },
      {
        step: 2,
        title: "Clinical & Imaging Panels",
        text: `
          <!-- Integrated panels from basal_ganglia_methanol_mechanism.html[cite: 2] -->
          <div style="background:#E6F1FB; padding:10px; border-radius:5px; margin-bottom:10px; border-left:4px solid #378ADD">
            <b style="color:#185FA5">Why Putamen?</b><br>
            It has the highest metabolic demand and is an end-arterial territory. It is the "first to fall" when energy fails[cite: 2].
          </div>
          <div style="background:#FCEBEB; padding:10px; border-radius:5px; border-left:4px solid #E24B4A">
            <b style="color:#A32D2D">Imaging Hallmark:</b><br>
            CT shows <b>bilateral putaminal hypodensity</b> due to cytotoxic oedema (cell swelling)[cite: 2].
          </div>`
      },
      {
        step: 3,
        title: "Antidote & Treatment Protocol",
        text: "<b>Fomepizole/Ethanol:</b> Blocks ADH enzyme early in the cascade[cite: 1].<br><b>Folinic Acid:</b> 1–2 mg/kg IV to convert formate into CO2+H2O[cite: 1].<br><b>Sodium Bicarbonate:</b> Required for severe acidosis (pH < 7.0)[cite: 1]."
      },
      {
        step: 4,
        title: "Autopsy & Preservation",
        text: "<b>Findings:</b> Cyanosis of upper body, pulmonary oedema, and retinal oedema[cite: 1].<br><b>Preservation:</b> Use Saturated Salt Solution. <b>NEVER use Rectified Spirit</b> for alcohol/methanol cases as it contaminates the sample[cite: 1, 3]."
      }
    ]
  },

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
    }, // Added comma here
    {
      id: "methanol",
      history: "Patient presents with severe metabolic acidosis and 'snowfield' vision after consuming illicit liquor. Autopsy shows bilateral putaminal necrosis.",
      correctPreservative: "Saturated Salt Solution",
      correctBloodPres: "NaF 10mg",
      trap: "Methanol is an alcohol. Just like ethanol, <b>never use Rectified Spirit</b> for preservation as it contains alcohol and will ruin the toxicological analysis[cite: 1, 3]."
    }
  ]
};
