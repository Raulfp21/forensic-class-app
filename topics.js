// ============================================================
//  topics.js  —  CONTENT ONLY FILE
//  Edit ONLY this file when adding new topics or scenarios.
//  Do NOT add any Firebase, UI, or logic code here.
//  This file is NEVER replaced by infrastructure updates.
// ============================================================

const forensicContent = {

  // Inject this CSS once into your page <head> or stylesheet.
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

    /* Stick Figure Animations */
    @keyframes st-drink { 0%, 100% { transform: rotate(0deg); } 50% { transform: rotate(-30deg); } }
    @keyframes st-blind { 0%, 100% { opacity: 1; } 50% { opacity: 0.2; } }
    @keyframes st-gasp { 0%, 100% { transform: scaleY(1); } 50% { transform: scaleY(1.2); } }

    .st-arm { transform-origin: 30px 45px; animation: st-drink 2s ease-in-out infinite; }
    .st-head-blind { animation: st-blind 1s ease-in-out infinite; }
    .st-chest-gasp { transform-origin: 30px 50px; animation: st-gasp 0.8s ease-in-out infinite; }

    /* Panel show animation */
    .bg-panel.bg-show {
      display: block;
      animation: fg-fadeUp 0.35s ease both;
    }
    .bg-panel.bg-show .bg-card {
      animation: fg-popIn 0.3s ease both;
    }
    .bg-panel.bg-show .bg-card:nth-child(1) { animation-delay: 0.05s; }
    .bg-panel.bg-show .bg-card:nth-child(2) { animation-delay: 0.10s; }
    .bg-panel.bg-show .bg-card:nth-child(3) { animation-delay: 0.15s; }
    .bg-panel.bg-show .bg-card:nth-child(4) { animation-delay: 0.20s; }
    .bg-panel.bg-show .bg-card:nth-child(5) { animation-delay: 0.25s; }
    .bg-panel.bg-show .bg-card:nth-child(6) { animation-delay: 0.30s; }

    .bg-panel.bg-show .bg-ch {
      animation: fg-slideRight 0.3s ease both;
    }
    .bg-panel.bg-show .bg-ch:nth-child(1)  { animation-delay: 0.00s; }
    .bg-panel.bg-show .bg-ch:nth-child(3)  { animation-delay: 0.08s; }
    .bg-panel.bg-show .bg-ch:nth-child(5)  { animation-delay: 0.16s; }
    .bg-panel.bg-show .bg-ch:nth-child(7)  { animation-delay: 0.24s; }
    .bg-panel.bg-show .bg-ch:nth-child(9)  { animation-delay: 0.32s; }
    .bg-panel.bg-show .bg-ch:nth-child(11) { animation-delay: 0.40s; }

    .bg-panel.bg-show .bg-keybox,
    .bg-panel.bg-show .bg-infobox,
    .bg-panel.bg-show .bg-tealbox,
    .bg-panel.bg-show .bg-why {
      animation: fg-fadeUp 0.4s ease 0.25s both;
    }

    .fg-cascade-line {
      stroke-dasharray: 200;
      animation: fg-drawLine 0.6s ease forwards;
    }
    .fg-cascade-line:nth-child(1)  { animation-delay: 0.1s; }
    .fg-cascade-line:nth-child(2)  { animation-delay: 0.3s; }
    .fg-cascade-line:nth-child(3)  { animation-delay: 0.5s; }
    .fg-cascade-line:nth-child(4)  { animation-delay: 0.7s; }
    .fg-cascade-line:nth-child(5)  { animation-delay: 0.9s; }

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
        title: "Properties & Fatal Dose (Animated)",
        text: `<div style="display:flex; align-items:center; gap:20px;">
          <svg width="80" height="120" viewBox="0 0 60 100">
            <circle cx="30" cy="20" r="8" fill="none" stroke="#333" stroke-width="2"/>
            <line x1="30" y1="28" x2="30" y2="60" stroke="#333" stroke-width="2"/>
            <g class="st-arm">
              <line x1="30" y1="40" x2="50" y2="30" stroke="#333" stroke-width="2"/>
              <rect x="48" y="20" width="8" height="12" fill="#E24B4A" rx="1"/>
            </g>
            <line x1="30" y1="40" x2="10" y2="50" stroke="#333" stroke-width="2"/>
            <line x1="30" y1="60" x2="15" y2="90" stroke="#333" stroke-width="2"/>
            <line x1="30" y1="60" x2="45" y2="90" stroke="#333" stroke-width="2"/>
          </svg>
          <div>
            <b>Methanol (Wood Spirit, CH<sub>3</sub>OH)</b><br>
            &bull; <b>Fatal Dose:</b> 30 mL (1 oz); Blindness at 10 mL[cite: 1].<br>
            &bull; <b>Appearance:</b> Colourless liquid, alcoholic smell.<br>
            &bull; <b>Key Yield:</b> Cannot be distinguished from Ethanol by taste/smell[cite: 1].
          </div>
        </div>`
      },
      {
        step: 2,
        title: "The Toxic Cascade (Mechanism)",
        text: `<div class="bg-why">
          <div class="bg-why-title">Methanol &rarr; Formaldehyde &rarr; Formic Acid</div>
          <p class="bg-why-text">Methanol is converted by <b>ADH</b> into Formic Acid[cite: 1]. Formic acid blocks <b>Cytochrome c oxidase (Complex IV)</b>, stopping ATP production[cite: 1].</p>
        </div>
        <div class="bg-chain">
          <span class="bg-ch bg-amber">Methanol</span><span class="bg-arr">&rarr;</span>
          <span class="bg-ch bg-red">Formic Acid</span><span class="bg-arr">&rarr;</span>
          <span class="bg-ch bg-purple">ATP Failure</span>
        </div>`
      },
      {
        step: 3,
        title: "Clinical Features (Animated)",
        text: `<div style="display:flex; align-items:center; gap:20px;">
          <svg width="80" height="120" viewBox="0 0 60 100">
            <circle cx="30" cy="20" r="8" fill="none" stroke="#333" stroke-width="2" class="st-head-blind"/>
            <line x1="30" y1="28" x2="30" y2="60" stroke="#333" stroke-width="2" class="st-chest-gasp"/>
            <line x1="30" y1="40" x2="10" y2="35" stroke="#333" stroke-width="2"/>
            <line x1="30" y1="40" x2="50" y2="35" stroke="#333" stroke-width="2"/>
            <line x1="30" y1="60" x2="15" y2="90" stroke="#333" stroke-width="2"/>
            <line x1="30" y1="60" x2="45" y2="90" stroke="#333" stroke-width="2"/>
          </svg>
          <div>
            <b>The Latent Period:</b> 12&ndash;24 hours[cite: 1].<br>
            <b>Classical Triad:</b><br>
            1. <b>Intoxication</b> (Early)<br>
            2. <b>Visual Disturbance</b> ("Snowfield vision")[cite: 1]<br>
            3. <b>Metabolic Acidosis</b> (Kussmaul breathing)[cite: 1]
          </div>
        </div>`
      },
      {
        step: 4,
        title: "Putamen & Diagnostic Gaps",
        text: `<div class="bg-grid">
          <div class="bg-card">
            <div class="bg-fc-mech">Imaging Hallmark</div>
            <div class="bg-fc-text"><b>Bilateral Symmetrical Putaminal Necrosis</b> on CT/MRI[cite: 1].</div>
          </div>
          <div class="bg-card">
            <div class="bg-fc-find">Gaps</div>
            <div class="bg-fc-text">High <b>Osmolal Gap</b> (Early) & High <b>Anion Gap</b> (Late)[cite: 1].</div>
          </div>
        </div>`
      },
      {
        step: 5,
        title: "Treatment & Preservatives",
        text: `<div class="bg-tealbox">
          <p><b>Antidote:</b> Fomepizole or Ethanol (Blocks ADH)[cite: 1].</p>
        </div>
        <div class="bg-keybox">
          <p><b>Preservative Rule:</b> Use <b>Saturated NaCl</b>. NEVER use Rectified Spirit (dissolves methanol)[cite: 1].</p>
        </div>`
      },
      {
        step: 6,
        title: "Toxic Cascade Map (Diagram)",
        text: `<div style="font-family:sans-serif; font-size:13px; margin-bottom:10px; display:flex; gap:12px; flex-wrap:wrap;">
  <span style="display:flex;align-items:center;gap:5px;"><span style="width:12px;height:12px;border-radius:3px;background:#EF9F27;display:inline-block;"></span>Methanol cascade</span>
  <span style="display:flex;align-items:center;gap:5px;"><span style="width:12px;height:12px;border-radius:3px;background:#E24B4A;display:inline-block;"></span>Toxic injury</span>
  <span style="display:flex;align-items:center;gap:5px;"><span style="width:12px;height:12px;border-radius:3px;background:#1D9E75;display:inline-block;"></span>Antidotes</span>
</div>
<svg width="100%" viewBox="0 0 680 720" role="img" style="max-width:660px;display:block;">
<defs>
  <marker id="arr"  viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M2 1L8 5L2 9" fill="none" stroke="#BA7517" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></marker>
</defs>
<rect x="75" y="30" width="200" height="48" rx="7" fill="#FEF3DC" stroke="#EF9F27" stroke-width="1"/>
<text font-size="13" font-weight="600" fill="#854F0B" x="175" y="50" text-anchor="middle">Methanol ingested</text>
<line class="fg-cascade-line" x1="175" y1="80" x2="175" y2="118" stroke="#EF9F27" stroke-width="1.5" marker-end="url(#arr)"/>
<rect x="75" y="120" width="200" height="48" rx="7" fill="#FEF3DC" stroke="#EF9F27" stroke-width="1"/>
<text font-size="13" font-weight="600" fill="#854F0B" x="175" y="140" text-anchor="middle">Formaldehyde</text>
<line class="fg-cascade-line" x1="175" y1="170" x2="175" y2="208" stroke="#EF9F27" stroke-width="1.5" marker-end="url(#arr)"/>
<rect x="75" y="210" width="200" height="64" rx="7" fill="#FCEBEB" stroke="#E24B4A" stroke-width="1.5"/>
<text font-size="13" font-weight="600" fill="#791F1F" x="175" y="232" text-anchor="middle">Formic acid &#9888; KEY TOXIN</text>
</svg>`
      },
      {
        step: 7,
        title: "Why Putamen? (Interactive)",
        text: `<style>
.bg-sn{padding:5px 12px;font-size:12px;border-radius:20px;border:1px solid #ddd;cursor:pointer;color:#555;background:#fff;transition:all .15s;}
.bg-sn.bg-active{background:#1f2937;color:#fff;border-color:#1f2937;}
.bg-panel{display:none;}
.bg-panel.bg-show{display:block;}
.bg-why{background:#f8f6f2;border-radius:10px;padding:12px 16px;margin-bottom:12px;border:1px solid #e8e4db;}
.bg-why-title{font-size:14px;font-weight:600;color:#1a1a1a;margin-bottom:6px;}
.bg-grid{display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-bottom:12px;}
.bg-card{background:#fff;border:1px solid #e0ddd6;border-radius:8px;padding:10px 12px;}
</style>
<div class="bg-step-nav">
  <button class="bg-sn bg-active" onclick="bgShow(0)">1 &middot; Why putamen?</button>
  <button class="bg-sn" onclick="bgShow(1)">2 &middot; Imaging</button>
</div>
<div class="bg-panel bg-show" id="bgp0">
  <div class="bg-why"><div class="bg-why-title">Metabolic Demand</div><p>The putamen has high oxidative metabolism, making it vulnerable to ATP failure[cite: 1].</p></div>
</div>
<div class="bg-panel" id="bgp1">
  <div class="bg-grid">
    <div class="bg-card"><b>MRI findings:</b> T2/FLAIR hyperintensity in bilateral putamina[cite: 1].</div>
  </div>
</div>`
      },
      {
        step: 8,
        title: "Autopsy & Medico-Legal",
        text: `<b>Internal Findings:</b><br>
&bull; <b>Lungs:</b> Pulmonary oedema[cite: 1].<br>
&bull; <b>Brain:</b> Putaminal necrosis/haemorrhage[cite: 1].<br>
&bull; <b>Eyes:</b> Retinal oedema[cite: 1].<br><br>
<b>Manner:</b> Usually accidental (Hooch tragedy)[cite: 1].`
      },
      {
        step: 9,
        title: "Master MCQ & Recall",
        text: `<div class="bg-tealbox">
          <p><b>Q: A patient with suspected methanol poisoning presents with snowfield vision. Which preservative is mandatory for viscera?</b></p>
          <ul style="list-style:none; padding:0; margin:10px 0;">
            <li style="margin-bottom:5px;">A) Rectified Spirit</li>
            <li style="margin-bottom:5px;">B) Saturated Salt Solution</li>
            <li style="margin-bottom:5px;">C) Formalin</li>
            <li style="margin-bottom:5px;">D) No preservative</li>
          </ul>
          <hr style="border:0; border-top:1px solid #ccc;">
          <p><b>Key Reveal:</b> The answer is <b>B) Saturated Salt</b>[cite: 1].<br>
          <b>Recall Points:</b><br>
          &bull; Target: Putamen[cite: 1].<br>
          &bull; Toxin: Formic Acid[cite: 1].<br>
          &bull; Triad: Intoxication, Blindness, Acidosis[cite: 1].</p>
        </div>`
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
    }
  ]
};
