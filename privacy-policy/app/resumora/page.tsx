import Image from "next/image";

type PolicySection = {
  id: string;
  number: string;
  title: string;
  description: string;
  paragraphs: string[];
  bullets?: string[];
};

const policySections: PolicySection[] = [
  {
    id: "overview",
    number: "01",
    title: "The short version",
    description:
      "Resumora helps you build resumes with 50+ templates. Storage access supports importing and saving; internet access supports ads.",
    paragraphs: [
      "Resumora is an advanced resume builder with more than 50 templates. This policy explains the app permissions and the information that may be involved when you use its resume, file, and advertising features.",
      "Resume files can contain personal information, such as your name, contact details, education, and work history. Please review the file you import or save and choose carefully where you store or share it.",
    ],
  },
  {
    id: "resumes",
    number: "02",
    title: "Resumes & templates",
    description:
      "Create a resume with a template or import an existing resume file.",
    paragraphs: [
      "When you create or edit a resume, Resumora uses the information you enter to provide resume-building features and apply your chosen template. The app includes 50+ resume templates.",
      "When you import a resume, the app accesses the file you select so it can provide the import feature. You are responsible for making sure you have the right to use the information in that file.",
    ],
  },
  {
    id: "permissions",
    number: "03",
    title: "Device permissions",
    description:
      "Storage access supports importing and saving resumes; internet access supports ads.",
    paragraphs: [
      "Resumora requests file or storage access to let you import a resume and save resume files. The exact permission prompt and access scope can vary depending on your Android version and the file access method used by the app.",
      "You can review or change available permissions in your device settings. If you limit file access, importing or saving may not work as expected. If you limit network access, advertisements may not load.",
    ],
    bullets: [
      "Storage or file access — used when you choose to import or save a resume. Your device may show a system file picker or a permission prompt.",
      "Internet access — used to request and display advertisements.",
    ],
  },
  {
    id: "advertising",
    number: "04",
    title: "Advertising & internet access",
    description:
      "The app's internet permission is used to load and display advertisements.",
    paragraphs: [
      "Resumora uses internet access for advertisements. When an ad is requested or displayed, the advertising provider may process technical information needed to serve or measure the ad, such as an IP address, device or advertising identifiers, ad interactions, and diagnostics.",
      "The information processed depends on the ad provider, its software development kit, your device settings, and any consent choices that apply. The provider handles information under its own privacy policy.",
    ],
  },
  {
    id: "sharing",
    number: "05",
    title: "Sharing & third-party services",
    description:
      "You decide whether to share a resume with another app or service.",
    paragraphs: [
      "If you choose to export or share a resume using another app, website, or service, that destination may receive the resume and handle it under its own privacy practices.",
      "Advertising is provided by a third-party service. The ad provider may process ad-related technical information as described above. The specific provider and its current practices should be checked in the released app.",
    ],
  },
  {
    id: "storage",
    number: "06",
    title: "Storage, retention & security",
    description:
      "Imported and saved files use the storage locations made available on your device.",
    paragraphs: [
      "Resumora uses storage or file access when you import and save resumes. The saved file location and the app's access to it depend on your choices, Android's file access controls, and the app version.",
      "You can manage saved resume files from their storage location on your device. Any retention of temporary app data, device backups, or ad-related information may depend on the app, your device settings, and the advertising provider's policies.",
    ],
  },
  {
    id: "choices",
    number: "07",
    title: "Your choices & privacy rights",
    description:
      "Choose the files you import, where you save them, and whether to share them.",
    paragraphs: [
      "You choose which resume files to import, where to save resume files, and whether to share them with another app or service. You can manage Resumora's available permissions through your device settings.",
      "Privacy rights depend on where you live and may include requests to access, correct, or delete personal information. For questions about information handled by the ad provider, you may also need to contact that provider.",
    ],
  },
  {
    id: "children",
    number: "08",
    title: "Children's privacy",
    description:
      "Contact the developer if you have a question about a child's use of the app.",
    paragraphs: [
      "The information provided for this policy does not specify whether Resumora is directed to children. If you believe a child has provided personal information in a way that raises a privacy concern, contact the developer using the details below.",
    ],
  },
  {
    id: "contact",
    number: "09",
    title: "Questions about privacy?",
    description: "Contact the developer of Resumora.",
    paragraphs: [
      "Resumora is published by Nitya App Studio. This policy is authored by Bhim Kumar Yadav. For privacy questions or requests, contact the developer using the details below.",
    ],
  },
];

function ArrowIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path
        d="M4.5 10h10m-4-4 4 4-4 4"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
    </svg>
  );
}

function ResumoraMark() {
  return (
    <span className="brand-mark">
      <Image
        src="/resumora_app_icon.png"
        alt=""
        aria-hidden="true"
        className="brand-image"
        width={1254}
        height={1254}
      />
    </span>
  );
}

export default function ResumoraPrivacyPolicy() {
  return (
    <main className="site-shell resumora-shell">
      <aside className="sidebar">
        <a className="brand" href="#top" aria-label="Resumora privacy policy">
          <ResumoraMark />
          <span className="brand-name">Resumora</span>
        </a>
        <p className="sidebar-label">CURRENT POLICY</p>
        <div className="sidebar-current">
          <span className="sidebar-current-icon"><ResumoraMark /></span>
          <span>Resume builder</span>
          <span className="current-indicator" />
        </div>
        <p className="sidebar-label contents-label">ON THIS PAGE</p>
        <nav className="section-nav" aria-label="Policy sections">
          {policySections.map((section) => (
            <a className="section-link" href={`#${section.id}`} key={section.id}>
              <span>{section.number}</span>
              {section.title}
            </a>
          ))}
          <a className="section-link" href="#about">
            <span>10</span>
            About Resumora
          </a>
        </nav>
        <div className="sidebar-bottom">
          <div className="sidebar-help">
            <span className="help-spark" aria-hidden="true">✳</span>
            <p>Your resume. Your choice.</p>
            <a href="#contact">We’re here to help <ArrowIcon /></a>
          </div>
          <span className="sidebar-version">LAST UPDATED · NOV 10, 2026</span>
        </div>
      </aside>

      <div className="main-panel" id="top">
        <header className="topbar">
          <div className="breadcrumb">
            <span>Resumora</span>
            <span className="breadcrumb-slash">/</span>
            <strong>Privacy policy</strong>
          </div>
          <a className="topbar-link" href="#contact">
            Questions? <span>Get in touch</span><ArrowIcon />
          </a>
        </header>

        <div className="page-content">
          <section className="hero">
            <div className="hero-copy">
              <div className="eyebrow">
                <span className="eyebrow-dot" /> BUILD YOUR STORY. YOUR WAY.
              </div>
              <h1>Advanced Resume Builder<br /><span>50+ customizable templates.</span></h1>
              <p className="hero-description">
                A clear guide to Resumora resume files, storage access, internet
                connectivity, and advertising.
              </p>
              <div className="hero-meta">
                <span className="updated-icon">↻</span>
                <span>Last updated <strong>November 10, 2026</strong></span>
                <span className="meta-divider" />
                <span className="reading-time">5 min read</span>
              </div>
            </div>
            <div className="hero-art" aria-hidden="true">
              <div className="orbit orbit-one" />
              <div className="orbit orbit-two" />
              <div className="orbit orbit-three" />
              <div className="orbit-center"><ResumoraMark /></div>
              <span className="orbit-spark spark-one">✳</span>
              <span className="orbit-spark spark-two">✳</span>
              <span className="orbit-label">YOUR STORY<br />YOUR CHOICE</span>
            </div>
          </section>

          <div className="policy-layout">
            <div className="policy-main">
              <div className="policy-toolbar">
                <div>
                  <h2>Resumora privacy policy</h2>
                  <p>Resume files, storage access, and advertising.</p>
                </div>
              </div>
              <div className="sections-list">
                {policySections.map((section) => (
                  <article className="policy-section" id={section.id} key={section.id}>
                    <div className="section-heading">
                      <span className="section-number">{section.number}</span>
                      <div>
                        <h3>{section.title}</h3>
                        <p>{section.description}</p>
                      </div>
                    </div>
                    <div className="section-body">
                      {section.paragraphs.map((paragraph) => (
                        <p key={paragraph}>{paragraph}</p>
                      ))}
                      {section.bullets && (
                        <ul>
                          {section.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}
                        </ul>
                      )}
                      {section.id === "contact" && (
                        <ul className="policy-links contact-links">
                          <li>
                            <a href="mailto:bheemyadavbheemyadav98@gmail.com">
                              bheemyadavbheemyadav98@gmail.com <ArrowIcon />
                            </a>
                          </li>
                          <li>
                            <a href="tel:0541581867">0541581867 <ArrowIcon /></a>
                          </li>
                        </ul>
                      )}
                    </div>
                  </article>
                ))}
              </div>
            </div>

            <aside className="policy-aside" aria-label="Privacy overview">
              <div className="summary-card">
                <div className="summary-header">
                  <span className="summary-check">
                    <svg viewBox="0 0 20 20" fill="none" aria-hidden="true">
                      <path
                        d="m5.5 10.2 3 3 6-6.4"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.8"
                      />
                    </svg>
                  </span>
                  <div><span>THE QUICK READ</span><h2>Resumora, at a glance</h2></div>
                </div>
                <div className="summary-item">
                  <span className="summary-icon icon-collect">▣</span>
                  <p><strong>50+ templates</strong> help you build your resume.</p>
                </div>
                <div className="summary-item">
                  <span className="summary-icon icon-sell">↗</span>
                  <p><strong>Storage access</strong> supports import and save.</p>
                </div>
                <div className="summary-item">
                  <span className="summary-icon icon-control">⌁</span>
                  <p><strong>Internet access</strong> supports ads.</p>
                </div>
              </div>
              <div className="aside-note">
                <span className="note-icon">✳</span>
                <div>
                  <h3>Your career, your call.</h3>
                  <p>Choose the resumes you import, where you save them, and whether to share them.</p>
                  <a href="#permissions">See permission details <ArrowIcon /></a>
                </div>
              </div>
              <div className="secure-note"><span className="secure-dot" /> Your files. Clear choices.</div>
            </aside>
          </div>

          <section className="about-section" id="about" aria-labelledby="about-title">
            <div className="about-intro">
              <div className="about-brand">
                <ResumoraMark />
                <span className="about-eyebrow">ABOUT THE APP</span>
              </div>
              <h2 id="about-title">Meet <span>Resumora.</span></h2>
              <p>
                Resumora is an advanced resume builder with 50+ templates.
                Storage access supports importing and saving resume files;
                internet access is used for ads.
              </p>
              <div className="about-package">
                <span>APP</span>
                <code>Resume builder · 50+ templates</code>
              </div>
              <div className="about-package">
                <span>AUTHOR</span>
                <code>Bhim Kumar Yadav</code>
              </div>
              <div className="about-package">
                <span>ORGANIZATION</span>
                <code>Nitya App Studio</code>
              </div>
            </div>
            <div className="about-contact">
              <span className="about-eyebrow">PRIVACY &amp; RESUMES</span>
              <h3>Questions about your data?</h3>
              <p>Contact the developer for privacy questions or requests.</p>
              <a
                className="about-contact-link smart-player-contact-link"
                href="mailto:bheemyadavbheemyadav98@gmail.com"
              >
                <span className="about-contact-icon" aria-hidden="true">@</span>
                <span><small>EMAIL</small>bheemyadavbheemyadav98@gmail.com</span>
                <ArrowIcon />
              </a>
              <a
                className="about-contact-link smart-player-contact-link"
                href="tel:0541581867"
              >
                <span className="about-contact-icon phone-icon" aria-hidden="true">↗</span>
                <span><small>PHONE</small>0541581867</span>
                <ArrowIcon />
              </a>
            </div>
            <footer className="about-footer">
              <span>Resumora · Nitya App Studio</span>
              <span>Your next chapter, your choice.</span>
            </footer>
          </section>
        </div>
      </div>
    </main>
  );
}
