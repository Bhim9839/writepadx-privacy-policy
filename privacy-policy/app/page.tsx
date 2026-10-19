"use client";

import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";

type PolicySection = {
  id: string;
  number: string;
  title: string;
  description: string;
  paragraphs: string[];
  bullets?: string[];
  links?: { label: string; href: string }[];
};

const policySections: PolicySection[] = [
  {
    id: "overview",
    number: "01",
    title: "The short version",
    description: "What Writepad X does with your information, at a glance.",
    paragraphs: [
      "Writepad X is a notes app. The Android manifest you provided declares two permissions: INTERNET, used for network access including Google AdMob ads, and VIBRATE, which can provide haptic feedback.",
      "The app can receive text and Markdown that you choose to share or open, and it can show notes in home-screen widgets. We do not claim that note content is uploaded or never uploaded based on the manifest alone; see the sections below for how shared content and third-party ads work.",
    ],
  },
  {
    id: "information",
    number: "02",
    title: "Information involved",
    description: "The content you write, open, share, and choose to show.",
    paragraphs: [
      "When you write or edit a note, its text is processed by Writepad X so the app can provide its note-taking features. The app can also receive plain text or Markdown when you choose Writepad X from Android’s share menu, select text to process with Writepad X, or open a compatible file in the app.",
      "If you add a single-note or recent-notes widget, the note content selected for that widget is displayed on your device’s home screen. Anyone who can see your screen or widgets may be able to see that content.",
      "The manifest does not describe the app’s note-storage implementation or retention period. Those depend on the app’s implementation and your actions in the app.",
    ],
  },
  {
    id: "permissions",
    number: "03",
    title: "Android permissions",
    description: "Only the permissions listed in the supplied manifest.",
    paragraphs: [
      "The manifest supplied for Writepad X lists INTERNET and VIBRATE. These are not permissions to read your contacts, location, camera, microphone, or SMS. The app’s file and text actions are initiated through Android’s share/open flows; Android may grant access to the specific content you choose.",
    ],
    bullets: [
      "INTERNET — allows network connections. Writepad X integrates Google Mobile Ads, which needs network access to request and display ads.",
      "VIBRATE — allows vibration for haptic feedback, where used by the app.",
    ],
  },
  {
    id: "ads",
    number: "04",
    title: "Advertising & Google Mobile Ads",
    description: "Third-party advertising is the main network-related feature shown in the manifest.",
    paragraphs: [
      "Writepad X includes a Google Mobile Ads application ID. When ads are requested or displayed, Google and its advertising partners may process information such as device identifiers, IP address, ad delivery and interaction data, and diagnostics, subject to Google’s services, your device settings, and applicable consent requirements.",
      "The application ID in the manifest identifies the app to Google’s ads service; it is not your personal advertising ID. Google handles information collected through its SDK under its own policies. You can review Google’s privacy information and manage available ad settings using the links below.",
    ],
    links: [
      { label: "Google Privacy Policy", href: "https://policies.google.com/privacy" },
      { label: "Google My Ad Center", href: "https://myadcenter.google.com/" },
    ],
  },
  {
    id: "sharing",
    number: "05",
    title: "Text, files & sharing",
    description: "You choose when content is passed between apps.",
    paragraphs: [
      "Android lets Writepad X receive text or compatible Markdown files when you select the app in a share menu, process selected text with the app, or open a file using the app. The content you choose is provided to Writepad X so it can perform the action you requested.",
      "If you share or export content to another app, that app and its provider handle the content under their own privacy practices. Android’s FileProvider is configured as non-exported and grants access through Android’s file-sharing mechanism.",
    ],
  },
  {
    id: "widgets",
    number: "06",
    title: "Home-screen widgets",
    description: "Notes you select for widgets may be visible outside the app.",
    paragraphs: [
      "Writepad X offers a recent-notes widget and a widget for one note you choose. Widget content is displayed by Android on your home screen. Consider your lock-screen, launcher, and device visibility settings before placing private notes in a widget.",
    ],
  },
  {
    id: "backup",
    number: "07",
    title: "Storage, backup & security",
    description: "What we can confirm from the app configuration.",
    paragraphs: [
      "The supplied manifest sets allowBackup to false, which opts the app out of Android’s standard app backup behavior. Android versions and device manufacturers may handle device-to-device transfer differently.",
      "The manifest does not establish where notes are stored, how long they are retained, whether the app has any separate sync service, or how app data is deleted. Do not rely on this policy as confirmation of those implementation details; they should be checked against the released app.",
    ],
  },
  {
    id: "choices",
    number: "08",
    title: "Your choices & rights",
    description: "Manage your notes, sharing, ads, and privacy requests.",
    paragraphs: [
      "You control which text or files you share with Writepad X and whether you place note widgets on your home screen. You can also manage advertising preferences through your Android device settings and Google’s ad controls, where available.",
      "You may have privacy rights under the laws where you live, including rights to request access to or deletion of personal information. Contact the developer using the details in the contact section to make a request.",
    ],
  },
  {
    id: "contact",
    number: "09",
    title: "Questions about privacy?",
    description: "Contact the Writepad X developer.",
    paragraphs: [
      "For questions, privacy requests, or to report a concern, contact the Writepad X developer by email or phone. Please do not include sensitive note contents in your message.",
    ],
  },
];

function BrandMark() {
  return (
    <span className="brand-mark">
      <Image
        alt=""
        className="brand-image"
        height={512}
        priority
        src="/writepadx_icon.svg"
        width={512}
      />
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

function ArrowIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <path d="M4.5 10h10m-4-4 4 4-4 4" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
    </svg>
  );
}

export default function Home() {
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
      [
        section.title,
        section.description,
        ...section.paragraphs,
        ...(section.bullets ?? []),
      ]
        .join(" ")
        .toLowerCase()
        .includes(normalizedQuery),
    );
  }, [query]);

  return (
    <main className="site-shell">
      <aside className="sidebar">
        <a className="brand" href="#top" aria-label="Writepad X privacy policy home">
          <BrandMark />
          <span className="brand-name">Writepad <span className="brand-x">X</span></span>
        </a>

        <div className="sidebar-label">WRITEPAD X</div>
        <a className="sidebar-current" href="#top">
          <span className="sidebar-current-icon"><BrandMark /></span>
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

        <div className="sidebar-bottom">
          <div className="sidebar-help">
            <span className="help-spark" aria-hidden="true">✳</span>
            <p>Privacy should feel simple.</p>
            <a href="#contact">We’re here to help <ArrowIcon /></a>
          </div>
          <span className="sidebar-version">LAST UPDATED · OCT 19, 2026</span>
        </div>
      </aside>

      <div className="main-panel" id="top">
        <header className="topbar">
          <div className="breadcrumb"><span>Writepad X</span><span className="breadcrumb-slash">/</span><strong>Privacy policy</strong></div>
          <a className="topbar-link" href="#contact">Questions? <span>Get in touch</span><ArrowIcon /></a>
        </header>

        <div className="page-content">
          <section className="hero">
            <div className="hero-copy">
              <div className="eyebrow"><span className="eyebrow-dot" /> YOUR NOTES. YOUR CHOICE.</div>
              <h1>Notes are personal.<br /><span>Privacy should be.</span></h1>
              <p className="hero-description">
                A clear guide to Writepad X permissions, notes, shared files,
                home-screen widgets, and the ads that help support the app.
              </p>
              <div className="hero-meta">
                <span className="updated-icon">↻</span>
                <span>Last updated <strong>October 19, 2026</strong></span>
                <span className="meta-divider" />
                <span className="reading-time">6 min read</span>
              </div>
            </div>
            <div className="hero-art" aria-hidden="true">
              <div className="orbit orbit-one" />
              <div className="orbit orbit-two" />
              <div className="orbit orbit-three" />
              <div className="orbit-center"><BrandMark /></div>
              <span className="orbit-spark spark-one">✳</span>
              <span className="orbit-spark spark-two">✳</span>
              <span className="orbit-label">YOUR NOTES<br />YOUR CHOICE</span>
            </div>
          </section>

          <div className="policy-layout">
            <div className="policy-main">
              <div className="policy-toolbar">
                <div>
                  <h2>Writepad X privacy policy</h2>
                  <p>Based on the Android manifest and features you shared.</p>
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
                      {section.links && (
                        <ul className="policy-links">
                          {section.links.map((link) => (
                            <li key={link.href}>
                              <a href={link.href} rel="noreferrer" target="_blank">{link.label} <ArrowIcon /></a>
                            </li>
                          ))}
                        </ul>
                      )}
                      {section.id === "contact" && (
                        <ul className="policy-links contact-links">
                          <li>
                            <a href="mailto:bheemyadavbheemyadav98@gmail.com">
                              Gmail: bheemyadavbheemyadav98@gmail.com <ArrowIcon />
                            </a>
                          </li>
                          <li>
                            <a href="tel:0541581867">
                              Contact details: 0541581867 <ArrowIcon />
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
                    <p>Try searching for “ads”, “permissions”, “widgets”, or “backup”.</p>
                  </div>
                )}
              </div>

            </div>

            <aside className="policy-aside" aria-label="Privacy overview">
              <div className="summary-card">
                <div className="summary-header">
                  <span className="summary-check"><svg viewBox="0 0 20 20" fill="none" aria-hidden="true"><path d="m5.5 10.2 3 3 6-6.4" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" /></svg></span>
                  <div><span>THE QUICK READ</span><h2>Writepad X, at a glance</h2></div>
                </div>
                <div className="summary-item"><span className="summary-icon icon-collect">↗</span><p><strong>Two permissions</strong> are listed: internet access and vibration.</p></div>
                <div className="summary-item"><span className="summary-icon icon-sell">◎</span><p><strong>Google Mobile Ads</strong> may process data to serve and measure ads.</p></div>
                <div className="summary-item"><span className="summary-icon icon-control">⌁</span><p><strong>You choose</strong> what text or files to share and which notes appear in widgets.</p></div>
              </div>

              <div className="aside-note">
                <span className="note-icon">✳</span>
                <div>
                  <h3>A note about this policy</h3>
                  <p>Some details—like note storage and sync—aren’t shown in the manifest. This policy avoids making claims about them.</p>
                  <a href="#backup">See storage details <ArrowIcon /></a>
                </div>
              </div>
              <div className="secure-note"><span className="secure-dot" /> Clear permissions. Clear choices.</div>
            </aside>
          </div>

          <section className="about-section" aria-labelledby="about-title">
            <div className="about-intro">
              <div className="about-brand">
                <Image
                  alt="Writepad X app icon"
                  className="about-logo"
                  height={72}
                  src="/writepadx_icon.svg"
                  width={72}
                />
                <span className="about-eyebrow">A LITTLE ABOUT US</span>
              </div>
              <h2 id="about-title">Meet <span>Writepad X.</span></h2>
              <p>
                A thoughtful space for your notes and ideas. We believe writing
                things down should feel simple, personal, and always yours.
              </p>
              <div className="about-package">
                <span>PACKAGE NAME</span>
                <code>com.nitya.writepadx.app</code>
              </div>
            </div>
            <div className="about-contact">
              <span className="about-eyebrow">LET’S TALK</span>
              <h3>We’re here if you need us.</h3>
              <p>Questions, feedback, or a privacy request? Reach out anytime.</p>
              <a className="about-contact-link" href="mailto:bheemyadavbheemyadav98@gmail.com">
                <span className="about-contact-icon" aria-hidden="true">@</span>
                <span><small>GMAIL</small>bheemyadavbheemyadav98@gmail.com</span>
                <ArrowIcon />
              </a>
              <a className="about-contact-link" href="tel:0541581867">
                <span className="about-contact-icon phone-icon" aria-hidden="true">↗</span>
                <span><small>CONTACT DETAILS</small>0541581867</span>
                <ArrowIcon />
              </a>
            </div>
            <footer className="about-footer">
              <span>© 2026 Writepad X</span>
              <span>Your notes are personal. Your choices matter.</span>
            </footer>
          </section>
        </div>
      </div>
    </main>
  );
}
