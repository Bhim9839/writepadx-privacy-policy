"use client";

import { useEffect, useMemo, useRef, useState } from "react";

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
    description: "PDFusion edits PDFs on your device and uses internet access for ads.",
    paragraphs: [
      "PDFusion is an advanced PDF editor. Based on the information provided by the developer, PDFs and editing data are not sent to the developer's servers. Internet access is used only to load and display advertisements.",
      "The advertising service may receive technical information needed to deliver and measure ads, such as an IP address, device or advertising identifiers, ad interactions, and diagnostics. The exact data depends on the ad provider, SDK configuration, device settings, and applicable consent choices.",
    ],
  },
  {
    id: "pdf-files",
    number: "02",
    title: "PDF files & editing",
    description: "Files you choose to open or edit in PDFusion.",
    paragraphs: [
      "When you select a PDF to open or edit, PDFusion accesses that file to provide the editing features you use. The file may contain personal or sensitive information, so only open documents you intend to use with the app.",
      "PDFusion processes your PDFs and edits on your device and does not send their contents to the developer's servers. If you choose to share or export a document using another app or service, that recipient handles it under its own privacy practices.",
    ],
  },
  {
    id: "permissions",
    number: "03",
    title: "Device permissions",
    description: "File access supports editing; internet access loads ads.",
    paragraphs: [
      "PDFusion uses file access to let you open and work with PDFs. It uses internet access only for advertising. The exact file access scope and permission prompts can vary by platform and app version.",
      "You can review or change app permissions in your device settings. Restricting file access may prevent you from opening or editing documents; restricting network access may prevent ads from loading.",
    ],
    bullets: [
      "File access — enables PDFusion to access files you choose to open or edit. Review the access scope shown by your device.",
      "Internet access — used to request and display advertisements. The ad provider may process technical information as described below.",
    ],
  },
  {
    id: "internet",
    number: "04",
    title: "Advertising & internet access",
    description: "PDFusion uses its internet connection only to load and display ads.",
    paragraphs: [
      "PDFusion's internet connection is used only to load and display advertisements. The app does not send PDFs or editing data to the developer's servers.",
      "When an ad is requested or displayed, the advertising provider may process information such as your IP address, device or advertising identifiers, ad delivery and interaction data, and diagnostics. What is processed depends on the provider, its SDK, your device settings, and applicable consent requirements. The specific ad provider should be identified in the final policy.",
    ],
  },
  {
    id: "sharing",
    number: "05",
    title: "Sharing & third-party advertising",
    description: "PDF contents are not sent to the developer's servers; ads use a third-party service.",
    paragraphs: [
      "PDFusion does not send your PDFs or editing data to the developer's servers. Internet requests are made for advertising; the ad provider may receive the technical information needed to serve or measure ads and handles it under its own privacy policy.",
      "No other network services are described here. Add the advertising provider's name and privacy-policy link before publishing this policy.",
    ],
  },
  {
    id: "storage",
    number: "06",
    title: "Storage, retention & security",
    description: "PDFs and edits are processed on your device.",
    paragraphs: [
      "PDFs and editing data are processed on your device and are not sent to the developer's servers. Saved documents are managed through the files and storage locations you choose on your device.",
      "The exact local retention, temporary-file cleanup, backup, and deletion behavior depends on the app and your device settings. Advertising providers may retain ad-related technical information under their own policies.",
    ],
  },
  {
    id: "choices",
    number: "07",
    title: "Your choices & privacy rights",
    description: "Manage file access and network connectivity on your device.",
    paragraphs: [
      "You choose which files to open or edit with PDFusion and can manage the app's file permissions in your device settings. Your device's network controls can limit internet access, though connected features may then be unavailable.",
      "Privacy rights depend on where you live and may include requests to access, correct, or delete personal information. Add instructions for submitting a request and explain how users can manage any account or online data, if applicable.",
    ],
  },
  {
    id: "children",
    number: "08",
    title: "Children's privacy",
    description: "Add the age policy after confirming the app's intended audience.",
    paragraphs: [
      "[State whether PDFusion is directed to children, the applicable minimum age, and what steps are taken if information from a child is identified. Complete this section based on the app's actual audience and legal obligations.]",
    ],
  },
  {
    id: "contact",
    number: "09",
    title: "Questions about privacy?",
    description: "Add the PDFusion developer's privacy contact details.",
    paragraphs: [
      "Nitya App Studio is the organization behind PDFusion. Bhim Kumar Yadav is the author of this policy. For questions or privacy requests, contact us at bheemyadavbheemyadab98@gmail.com.",
      "[Add the effective date, last updated date, and how users will be told about material policy changes.]",
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

function PolicyMark() {
  return (
    <span className="brand-mark pdfusion-mark">
      <svg viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <rect x="2" y="2" width="28" height="28" rx="8" fill="currentColor" />
        <path
          d="M10 9.5h12v13H10zM13 13h6m-6 3h6m-6 3h4"
          stroke="white"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
        />
      </svg>
    </span>
  );
}

function SearchIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <circle cx="8.8" cy="8.8" r="5.8" stroke="currentColor" strokeWidth="1.5" />
      <path d="m13.1 13.1 4 4" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" />
    </svg>
  );
}

export default function PdfusionPrivacyPolicy() {
  const [query, setQuery] = useState("");
  const [activeSection, setActiveSection] = useState("overview");
  const searchRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    function focusSearch(event: KeyboardEvent) {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        searchRef.current?.focus();
      }
    }

    window.addEventListener("keydown", focusSearch);
    return () => window.removeEventListener("keydown", focusSearch);
  }, []);

  const visibleSections = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    if (!normalizedQuery) return policySections;

    return policySections.filter((section) =>
      [section.title, section.description, ...section.paragraphs, ...(section.bullets ?? [])]
        .join(" ")
        .toLowerCase()
        .includes(normalizedQuery),
    );
  }, [query]);

  return (
    <main className="site-shell">
      <aside className="sidebar">
        <a className="brand" href="#top" aria-label="PDFusion privacy policy home">
          <PolicyMark />
          <span className="brand-name">PDFusion</span>
        </a>

        <div className="sidebar-label">PDFUSION</div>
        <a className="sidebar-current" href="#top">
          <span className="sidebar-current-icon"><PolicyMark /></span>
          Privacy policy
          <span className="current-indicator" />
        </a>

        <div className="sidebar-label contents-label">ON THIS PAGE</div>
        <nav className="section-nav" aria-label="Privacy policy sections">
          {policySections.map((section) => (
            <a
              className={activeSection === section.id ? "section-link active" : "section-link"}
              href={`#${section.id}`}
              key={section.id}
              onClick={() => setActiveSection(section.id)}
            >
              <span>{section.number}</span>
              {section.title}
            </a>
          ))}
        </nav>
        <a className="section-link" href="#about">
          <span>↗</span>
          About PDFusion
        </a>

        <div className="sidebar-bottom">
          <div className="sidebar-help">
            <span className="help-spark" aria-hidden="true">✳</span>
            <p>This policy is a draft.</p>
            <a href="#contact">Add contact details <ArrowIcon /></a>
          </div>
          <span className="sidebar-version">DRAFT · DETAILS PENDING</span>
        </div>
      </aside>

      <div className="main-panel" id="top">
        <header className="topbar">
          <div className="breadcrumb">
            <span>PDFusion</span><span className="breadcrumb-slash">/</span><strong>Privacy policy</strong>
          </div>
          <a className="topbar-link" href="#contact">Questions? <span>Get in touch</span><ArrowIcon /></a>
        </header>

        <div className="page-content">
          <section className="hero">
            <div className="hero-copy">
              <div className="eyebrow"><span className="eyebrow-dot" /> YOUR PDFS. YOUR EDITS.</div>
              <h1>Edit PDFs.<br /><span>Your way.</span></h1>
              <p className="hero-description">
                A guide to PDFusion’s PDF editing, on-device files, and
                advertising. Your PDFs are not sent to the developer&apos;s servers.
              </p>
              <div className="hero-meta">
                <span className="updated-icon">↻</span>
                <span>File handling <strong>On your device</strong></span>
                <span className="meta-divider" />
                <span className="reading-time">Ads supported</span>
              </div>
            </div>
            <div className="hero-art" aria-hidden="true">
              <div className="orbit orbit-one" />
              <div className="orbit orbit-two" />
              <div className="orbit orbit-three" />
              <div className="orbit-center"><PolicyMark /></div>
              <span className="orbit-spark spark-one">✳</span>
              <span className="orbit-spark spark-two">✳</span>
              <span className="orbit-label">YOUR PDFS<br />YOUR CHOICE</span>
            </div>
          </section>

          <div className="policy-layout">
            <div className="policy-main">
              <div className="policy-toolbar">
                <div>
                  <h2>PDFusion privacy policy</h2>
                  <p>PDFs stay on your device; internet access is used for advertising.</p>
                </div>
                <button className="print-button" onClick={() => window.print()} type="button">
                  <svg viewBox="0 0 20 20" fill="none" aria-hidden="true">
                    <path d="M6 7V3.5h8V7M6 14H4.5A1.5 1.5 0 0 1 3 12.5v-4A1.5 1.5 0 0 1 4.5 7h11A1.5 1.5 0 0 1 17 8.5v4a1.5 1.5 0 0 1-1.5 1.5H14M6 11.5h8v5H6v-5Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.4" />
                    <circle cx="14.5" cy="9.5" r=".75" fill="currentColor" />
                  </svg>
                  Print policy
                </button>
              </div>

              <label className="search-field">
                <SearchIcon />
                <input
                  aria-label="Search the privacy policy"
                  onChange={(event) => setQuery(event.target.value)}
                  placeholder="Search this policy..."
                  ref={searchRef}
                  type="search"
                  value={query}
                />
                <kbd>⌘ K</kbd>
              </label>
              {query.trim() && (
                <p className="search-status" aria-live="polite">
                  {visibleSections.length
                    ? `${visibleSections.length} ${visibleSections.length === 1 ? "section" : "sections"} found`
                    : "No sections found. Try a different search."}
                  <button onClick={() => setQuery("")} type="button">Clear search</button>
                </p>
              )}

              <div className="sections-list">
                {visibleSections.map((section) => (
                  <article className="policy-section" id={section.id} key={section.id}>
                    <div className="section-heading">
                      <span className="section-number">{section.number}</span>
                      <div>
                        <h3>{section.title}</h3>
                        <p>{section.description}</p>
                      </div>
                    </div>
                    <div className="section-body">
                      {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                      {section.bullets && (
                        <ul>
                          {section.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}
                        </ul>
                      )}
                      {section.id === "contact" && (
                        <ul className="policy-links contact-links">
                          <li>
                            <a href="mailto:bheemyadavbheemyadab98@gmail.com">
                              bheemyadavbheemyadab98@gmail.com <ArrowIcon />
                            </a>
                          </li>
                        </ul>
                      )}
                    </div>
                  </article>
                ))}
                {visibleSections.length === 0 && (
                  <div className="empty-search">
                    <span><SearchIcon /></span>
                    <h3>No matches just yet</h3>
                    <p>Try searching for “PDF files”, “permissions”, “internet”, or “contact”.</p>
                  </div>
                )}
              </div>
            </div>

            <aside className="policy-aside" aria-label="Privacy overview">
              <div className="summary-card">
                <div className="summary-header">
                  <span className="summary-check"><svg viewBox="0 0 20 20" fill="none" aria-hidden="true"><path d="m5.5 10.2 3 3 6-6.4" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" /></svg></span>
                  <div><span>THE QUICK READ</span><h2>PDFusion, at a glance</h2></div>
                </div>
                <div className="summary-item"><span className="summary-icon icon-collect">▣</span><p><strong>PDF editing</strong> works with files you choose to open.</p></div>
                <div className="summary-item"><span className="summary-icon icon-sell">↗</span><p><strong>Internet access</strong> is used only to load and display ads.</p></div>
                <div className="summary-item"><span className="summary-icon icon-control">⌁</span><p><strong>Your PDFs and edits</strong> are not sent to the developer&apos;s servers.</p></div>
              </div>

              <div className="aside-note">
                <span className="note-icon">✳</span>
                <div>
                  <h3>Your PDFs stay yours.</h3>
                  <p>PDFusion does not send PDF contents to the developer&apos;s servers. The ad provider may process technical ad-request data.</p>
                  <a href="#internet">See advertising details <ArrowIcon /></a>
                </div>
              </div>
              <div className="secure-note"><span className="secure-dot" /> Your files. Clear choices.</div>
            </aside>
          </div>

          <section className="about-section" id="about" aria-labelledby="about-title">
            <div className="about-intro">
              <div className="about-brand">
                <PolicyMark />
                <span className="about-eyebrow">ABOUT THE APP</span>
              </div>
              <h2 id="about-title">Meet <span>PDFusion.</span></h2>
              <p>
                PDFusion is an advanced PDF editor. Your PDFs and edits are
                processed on your device and are not sent to the developer&apos;s
                servers. Internet access is used only for ads.
              </p>
              <div className="about-package">
                <span>PRODUCT</span>
                <code>Advanced PDF editor</code>
              </div>
            </div>
            <div className="about-contact">
              <span className="about-eyebrow">PRIVACY &amp; FILES</span>
              <h3>Your documents matter.</h3>
              <p>
                PDFusion is by Nitya App Studio. This policy is authored by
                Bhim Kumar Yadav. Internet access is used only for ads; the ad
                provider may process technical information needed to deliver
                and measure them.
              </p>
              <a
                className="about-contact-link smart-player-contact-link"
                href="mailto:bheemyadavbheemyadab98@gmail.com"
              >
                <span className="about-contact-icon" aria-hidden="true">@</span>
                <span><small>CONTACT</small>bheemyadavbheemyadab98@gmail.com</span>
                <ArrowIcon />
              </a>
            </div>
            <footer className="about-footer">
              <span>PDFusion · Nitya App Studio</span>
              <span>PDF editing with clear choices.</span>
            </footer>
          </section>
        </div>
      </div>
    </main>
  );
}
