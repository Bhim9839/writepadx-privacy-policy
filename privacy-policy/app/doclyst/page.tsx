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
    description: "Your documents stay on your device; internet access is for ads.",
    paragraphs: [
      "Doclyst is a document editor for creating and editing documents on your device. Based on the details provided by the developer, Doclyst has no developer-operated server and does not upload your documents to one.",
      "The app's internet access is used to request and display advertisements. The advertising provider may process technical information needed to deliver or measure ads, as described below.",
    ],
  },
  {
    id: "documents",
    number: "02",
    title: "Documents & editing",
    description: "Documents you create or choose to open are handled on your device.",
    paragraphs: [
      "Doclyst processes the document content you create, edit, or choose to open so it can provide its document-editing features. Documents and edits are kept on your device and are not sent to a Doclyst developer server.",
      "You control which documents you open. If you choose to share or export a document using another app or service, that recipient handles the document under its own privacy practices.",
    ],
  },
  {
    id: "permissions",
    number: "03",
    title: "Device permissions",
    description: "Internet access supports ads; document access supports your editing actions.",
    paragraphs: [
      "Doclyst uses internet access to load and display advertisements. To open or save a document, the app may use Android's document picker or the file access made available by your device. The exact access flow can vary by Android version and app release.",
      "You can review available app permissions in your device settings. Restricting document access may prevent you from opening or saving files, and restricting network access may prevent advertisements from loading.",
    ],
    bullets: [
      "Internet access — lets Doclyst request and display ads. The advertising provider may process technical ad-request information.",
      "Document access — lets you choose documents to open or save, using the access method provided by your device.",
    ],
  },
  {
    id: "ads",
    number: "04",
    title: "Advertising & internet access",
    description: "The app's network access is used to show ads, not to upload your documents.",
    paragraphs: [
      "Doclyst uses its internet connection to request and display advertisements. It does not use a developer-operated server to store or process your documents.",
      "When an ad is requested or displayed, the advertising provider may process information such as your IP address, device or advertising identifiers, ad delivery and interaction data, and diagnostics. The exact information depends on the provider, its SDK, your device settings, and applicable consent choices.",
    ],
  },
  {
    id: "sharing",
    number: "05",
    title: "Sharing & third-party services",
    description: "Your documents are not shared unless you choose to send or export them.",
    paragraphs: [
      "Doclyst does not upload your documents to a developer-operated server. If you intentionally share or export a document to another app, website, or service, that destination may receive the document and handle it under its own privacy policy.",
      "The advertising provider operates separately from Doclyst and may handle ad-related technical information under its own privacy practices. No specific ad provider has been identified in the information provided for this policy.",
    ],
  },
  {
    id: "storage",
    number: "06",
    title: "Storage, retention & security",
    description: "Documents are stored on your device rather than a Doclyst server.",
    paragraphs: [
      "Your documents and edits are handled on your device. Their saved location and availability depend on where you choose to save them and on your device's settings.",
      "The app's precise temporary-file cleanup, deletion, and backup behavior has not been specified. Advertising providers may retain ad-related technical information under their own policies.",
    ],
  },
  {
    id: "choices",
    number: "07",
    title: "Your choices & privacy rights",
    description: "Choose your files and manage app access from your device.",
    paragraphs: [
      "You choose which documents to open, edit, or share. You can manage Doclyst's permissions and network access through your device settings; turning off network access may stop ads from loading.",
      "Privacy rights depend on where you live and may include requests about personal information handled by a service provider. For questions about Doclyst, contact the developer using the details below. For ad-related information, you may also need to contact the advertising provider.",
    ],
  },
  {
    id: "children",
    number: "08",
    title: "Children's privacy",
    description: "Advertising data practices can depend on the user's age and local requirements.",
    paragraphs: [
      "Doclyst does not send documents to a developer-operated server. The advertising provider may still process technical information when ads are requested. If Doclyst is used by a child or is directed to children, advertising and data handling must follow the requirements that apply in the user's location. Contact the developer with any related question or concern.",
    ],
  },
  {
    id: "contact",
    number: "09",
    title: "Questions about privacy?",
    description: "Contact the Doclyst developer.",
    paragraphs: [
      "Doclyst is published by Nitya App Studio. This policy is authored by Bhim Kumar Yadav. For privacy questions or requests, contact the developer using the details below.",
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

function DoclystMark() {
  return (
    <span className="brand-mark">
      <svg viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <rect x="2" y="2" width="28" height="28" rx="8" fill="currentColor" />
        <path
          d="M10 8.5h8l4 4v11H10z"
          stroke="white"
          strokeLinejoin="round"
          strokeWidth="1.5"
        />
        <path
          d="M18 8.5v4h4m-9 4h6m-6 3h6"
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

export default function DoclystPrivacyPolicy() {
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
        <a className="brand" href="#top" aria-label="Doclyst privacy policy home">
          <DoclystMark />
          <span className="brand-name">Doclyst</span>
        </a>

        <div className="sidebar-label">DOCLYST</div>
        <a className="sidebar-current" href="#top">
          <span className="sidebar-current-icon"><DoclystMark /></span>
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
          <a
            className="section-link"
            href="#about"
            onClick={() => setActiveSection("about")}
          >
            <span>10</span>
            About Doclyst
          </a>
        </nav>

        <div className="sidebar-bottom">
          <div className="sidebar-help">
            <span className="help-spark" aria-hidden="true">✳</span>
            <p>Your documents. Your choice.</p>
            <a href="#contact">We’re here to help <ArrowIcon /></a>
          </div>
          <span className="sidebar-version">LAST UPDATED · NOV 3, 2026</span>
        </div>
      </aside>

      <div className="main-panel" id="top">
        <header className="topbar">
          <div className="breadcrumb">
            <span>Doclyst</span><span className="breadcrumb-slash">/</span><strong>Privacy policy</strong>
          </div>
          <a className="topbar-link" href="#contact">Questions? <span>Get in touch</span><ArrowIcon /></a>
        </header>

        <div className="page-content">
          <section className="hero">
            <div className="hero-copy">
              <div className="eyebrow"><span className="eyebrow-dot" /> YOUR DOCUMENTS. YOUR CHOICE.</div>
              <h1>Your ideas, on your device.<br /><span>Your privacy matters.</span></h1>
              <p className="hero-description">
                A clear guide to Doclyst documents, device access, internet
                connectivity, and advertising.
              </p>
              <div className="hero-meta">
                <span className="updated-icon">↻</span>
                <span>Last updated <strong>November 3, 2026</strong></span>
                <span className="meta-divider" />
                <span className="reading-time">5 min read</span>
              </div>
            </div>
            <div className="hero-art" aria-hidden="true">
              <div className="orbit orbit-one" />
              <div className="orbit orbit-two" />
              <div className="orbit orbit-three" />
              <div className="orbit-center"><DoclystMark /></div>
              <span className="orbit-spark spark-one">✳</span>
              <span className="orbit-spark spark-two">✳</span>
              <span className="orbit-label">YOUR DOCS<br />YOUR CHOICE</span>
            </div>
          </section>

          <div className="policy-layout">
            <div className="policy-main">
              <div className="policy-toolbar">
                <div>
                  <h2>Doclyst privacy policy</h2>
                  <p>Documents stay on your device; internet access is used for ads.</p>
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
                            <a href="mailto:bheemyadavbheemyadav98@gmail.com">
                              bheemyadavbheemyadav98@gmail.com <ArrowIcon />
                            </a>
                          </li>
                          <li>
                            <a href="tel:0541581867">
                              0541581867 <ArrowIcon />
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
                    <p>Try searching for “documents”, “ads”, “permissions”, or “contact”.</p>
                  </div>
                )}
              </div>
            </div>

            <aside className="policy-aside" aria-label="Privacy overview">
              <div className="summary-card">
                <div className="summary-header">
                  <span className="summary-check"><svg viewBox="0 0 20 20" fill="none" aria-hidden="true"><path d="m5.5 10.2 3 3 6-6.4" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" /></svg></span>
                  <div><span>THE QUICK READ</span><h2>Doclyst, at a glance</h2></div>
                </div>
                <div className="summary-item"><span className="summary-icon icon-collect">▣</span><p><strong>Documents</strong> are handled on your device.</p></div>
                <div className="summary-item"><span className="summary-icon icon-sell">↗</span><p><strong>Internet access</strong> is used to load and display ads.</p></div>
                <div className="summary-item"><span className="summary-icon icon-control">⌁</span><p><strong>No Doclyst server</strong> receives your documents.</p></div>
              </div>

              <div className="aside-note">
                <span className="note-icon">✳</span>
                <div>
                  <h3>Your documents stay yours.</h3>
                  <p>Doclyst has no developer-operated server. The advertising provider may process technical ad-request information.</p>
                  <a href="#ads">See advertising details <ArrowIcon /></a>
                </div>
              </div>
              <div className="secure-note"><span className="secure-dot" /> Your files. Clear choices.</div>
            </aside>
          </div>

          <section className="about-section" id="about" aria-labelledby="about-title">
            <div className="about-intro">
              <div className="about-brand">
                <DoclystMark />
                <span className="about-eyebrow">ABOUT THE APP</span>
              </div>
              <h2 id="about-title">Meet <span>Doclyst.</span></h2>
              <p>
                Doclyst is a document editor for creating and editing documents
                on your device. Your documents are not uploaded to a Doclyst
                developer server; internet access is used for ads.
              </p>
              <div className="about-package">
                <span>APP</span>
                <code>Document editor</code>
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
              <span className="about-eyebrow">PRIVACY &amp; DOCUMENTS</span>
              <h3>Your work stays yours.</h3>
              <p>
                Contact the developer for privacy questions or requests.
              </p>
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
              <span>Doclyst · Nitya App Studio</span>
              <span>Documents on your device. Your choice.</span>
            </footer>
          </section>
        </div>
      </div>
    </main>
  );
}
