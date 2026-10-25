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
    description: "How Smart Player handles local media and internet access.",
    paragraphs: [
      "Smart Player is a media player that can access and play local files on your device. It also has internet access. Local file access is used to let you choose and play media; internet access may support online features or services available in the app.",
      "The app's exact online features, third-party services, data collection, and retention depend on the version and configuration you use. This policy does not assume that media files are uploaded or that particular analytics or advertising services are present.",
    ],
  },
  {
    id: "local-files",
    number: "02",
    title: "Local files & media",
    description: "You decide which files Smart Player can access and play.",
    paragraphs: [
      "When you browse for, select, or play a local audio or video file, Smart Player processes the file and related information needed for playback. Depending on your device and the file, this may include the file name, format, location, or media metadata.",
      "Access may be provided by Android's media permissions or its system file picker, depending on the app version and your device. You can manage or revoke app permissions in Android settings. Revoking access may prevent some playback or browsing features from working.",
      "Access to local files does not by itself establish whether any information is transmitted over the internet. Data sent by an online feature, if any, depends on the feature you use and the services it connects to.",
    ],
  },
  {
    id: "internet",
    number: "03",
    title: "Internet access",
    description: "Network access may be used by features that need a connection.",
    paragraphs: [
      "Smart Player can connect to the internet. A network request can expose technical information such as your IP address and request details to the server it contacts. The specific information involved depends on which online features and service providers are included in the version of the app you use.",
      "This policy does not identify a particular streaming, advertising, analytics, crash-reporting, or account service because those integrations have not been confirmed here. Review any in-app notices and the linked privacy information of a service before using it.",
    ],
  },
  {
    id: "playback",
    number: "04",
    title: "Playback information",
    description: "Information used to browse and play your media.",
    paragraphs: [
      "The player may process media data and playback state—such as the selected file, playback position, or settings—to provide playback controls. Whether this information is kept after you close the app, backed up, or synchronized is determined by the app's implementation and your device settings.",
      "Avoid using online features with sensitive content unless you understand what information that feature sends and who operates the service.",
    ],
  },
  {
    id: "permissions",
    number: "05",
    title: "Device permissions",
    description: "Permissions allow the player to perform the actions you request.",
    paragraphs: [
      "Smart Player needs an appropriate way to access media files you choose. Android may show a permission prompt or a system file picker. The exact permission names and scope can differ by Android version and app release.",
      "Check Android Settings → Apps → Smart Player → Permissions to review the permissions currently granted. This policy does not claim a specific complete permission list.",
    ],
  },
  {
    id: "sharing",
    number: "06",
    title: "Third-party services & sharing",
    description: "Online providers have their own privacy practices.",
    paragraphs: [
      "If a Smart Player feature connects to a third-party service, information required for that request may be handled by that provider under its own privacy policy. The providers and information involved should be disclosed in the app wherever applicable; they are not specified in the details available for this policy.",
      "Smart Player does not need to share your local media simply to describe that it can play files. However, whether a particular feature transmits media or related information must be verified against that feature's actual behavior.",
    ],
  },
  {
    id: "security",
    number: "07",
    title: "Storage, retention & security",
    description: "Storage and deletion behavior depends on the app and your device.",
    paragraphs: [
      "The information available for this policy does not confirm how Smart Player stores playback history or settings, how long any information is retained, or whether it uses backup or synchronization. You can manage local app data using Android settings; uninstalling the app may remove data stored only on the device, subject to Android and device backup behavior.",
      "Keep your device and operating system up to date, and use device security controls to protect files and app data.",
    ],
  },
  {
    id: "choices",
    number: "08",
    title: "Your choices & privacy rights",
    description: "Manage access, network use, and privacy requests.",
    paragraphs: [
      "You choose which local files to open or play and can manage permissions through Android settings. You can also limit internet connectivity using your device's network controls, although online features may then be unavailable.",
      "Privacy rights vary by location and may include requests to access or delete personal information. To ask a question or make a request, contact the developer using the details below. The developer may need enough information to identify and respond to your request.",
    ],
  },
  {
    id: "contact",
    number: "09",
    title: "Questions about privacy?",
    description: "Contact the Smart Player developer.",
    paragraphs: [
      "For questions, privacy requests, or to report a concern, contact the developer by email or phone. Please do not send private media files or sensitive personal information unless it is necessary for your request.",
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

function PlayerMark() {
  return (
    <span className="brand-mark player-mark">
      <svg viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <rect x="2" y="2" width="28" height="28" rx="8" fill="currentColor" />
        <path d="M13 10.5v11l9-5.5-9-5.5Z" fill="white" />
      </svg>
    </span>
  );
}

export default function SmartPlayerPolicy() {
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
        <a className="brand" href="#top" aria-label="Smart Player privacy policy home">
          <PlayerMark />
          <span className="brand-name">Smart Player</span>
        </a>

        <div className="sidebar-label">SMART PLAYER</div>
        <a className="sidebar-current" href="#top">
          <span className="sidebar-current-icon"><PlayerMark /></span>
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
          <span className="sidebar-version">LAST UPDATED · OCT 25, 2026</span>
        </div>
      </aside>

      <div className="main-panel" id="top">
        <header className="topbar">
          <div className="breadcrumb">
            <span>Smart Player</span><span className="breadcrumb-slash">/</span><strong>Privacy policy</strong>
          </div>
          <a className="topbar-link" href="#contact">Questions? <span>Get in touch</span><ArrowIcon /></a>
        </header>

        <div className="page-content">
          <section className="hero">
            <div className="hero-copy">
              <div className="eyebrow"><span className="eyebrow-dot" /> YOUR MEDIA. YOUR CHOICE.</div>
              <h1>Your media, your device.<br /><span>Your choice.</span></h1>
              <p className="hero-description">
                A clear guide to Smart Player’s local file access, playback,
                internet connectivity, and privacy choices.
              </p>
              <div className="hero-meta">
                <span className="updated-icon">↻</span>
                <span>Last updated <strong>October 25, 2026</strong></span>
                <span className="meta-divider" />
                <span className="reading-time">5 min read</span>
              </div>
            </div>
            <div className="hero-art" aria-hidden="true">
              <div className="orbit orbit-one" />
              <div className="orbit orbit-two" />
              <div className="orbit orbit-three" />
              <div className="orbit-center"><PlayerMark /></div>
              <span className="orbit-spark spark-one">✳</span>
              <span className="orbit-spark spark-two">✳</span>
              <span className="orbit-label">YOUR MEDIA<br />YOUR CHOICE</span>
            </div>
          </section>

          <div className="policy-layout">
            <div className="policy-main">
              <div className="policy-toolbar">
                <div>
                  <h2>Smart Player privacy policy</h2>
                  <p>For an app that plays local files and has internet access.</p>
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
                <svg viewBox="0 0 20 20" fill="none" aria-hidden="true">
                  <circle cx="8.8" cy="8.8" r="5.8" stroke="currentColor" strokeWidth="1.5" />
                  <path d="m13.1 13.1 4 4" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" />
                </svg>
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
                        <ul>{section.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul>
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
                    <span><svg viewBox="0 0 20 20" fill="none" aria-hidden="true"><circle cx="8.8" cy="8.8" r="5.8" stroke="currentColor" strokeWidth="1.5" /><path d="m13.1 13.1 4 4" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" /></svg></span>
                    <h3>No matches just yet</h3>
                    <p>Try searching for “files”, “internet”, “permissions”, or “playback”.</p>
                  </div>
                )}
              </div>
            </div>

            <aside className="policy-aside" aria-label="Privacy overview">
              <div className="summary-card">
                <div className="summary-header">
                  <span className="summary-check"><svg viewBox="0 0 20 20" fill="none" aria-hidden="true"><path d="m5.5 10.2 3 3 6-6.4" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" /></svg></span>
                  <div><span>THE QUICK READ</span><h2>Smart Player, at a glance</h2></div>
                </div>
                <div className="summary-item"><span className="summary-icon icon-collect">▣</span><p><strong>Local media access</strong> lets you browse and play files on your device.</p></div>
                <div className="summary-item"><span className="summary-icon icon-sell">↗</span><p><strong>Internet access</strong> may support online features; connected services can process request data.</p></div>
                <div className="summary-item"><span className="summary-icon icon-control">⌁</span><p><strong>You choose</strong> which files to open and can manage permissions in Android settings.</p></div>
              </div>

              <div className="aside-note">
                <span className="note-icon">✳</span>
                <div>
                  <h3>A note about this policy</h3>
                  <p>The exact online services, data retention, and storage behavior have not been confirmed. This policy avoids making claims about them.</p>
                  <a href="#internet">See internet details <ArrowIcon /></a>
                </div>
              </div>
              <div className="secure-note"><span className="secure-dot" /> Clear permissions. Clear choices.</div>
            </aside>
          </div>

          <section className="about-section" aria-labelledby="about-title">
            <div className="about-intro">
              <div className="about-brand">
                <PlayerMark />
                <span className="about-eyebrow">A LITTLE ABOUT US</span>
              </div>
              <h2>Meet <span>Smart Player.</span></h2>
              <p>
                A media player for files on your device, with internet access
                for connected features where available.
              </p>
              <div className="about-package">
                <span>APP</span>
                <code>Smart Player</code>
              </div>
            </div>
            <div className="about-contact smart-player-contact">
              <span className="about-eyebrow">LET’S TALK</span>
              <h3>Contact the developer</h3>
              <p>For privacy questions, feedback, or requests, get in touch using either option below.</p>
              <a className="about-contact-link smart-player-contact-link" href="mailto:bheemyadavbheemyadav98@gmail.com">
                <span className="about-contact-icon" aria-hidden="true">@</span>
                <span><small>EMAIL</small>bheemyadavbheemyadav98@gmail.com</span>
                <ArrowIcon />
              </a>
              <a className="about-contact-link smart-player-contact-link" href="tel:0541581867">
                <span className="about-contact-icon phone-icon" aria-hidden="true">↗</span>
                <span><small>PHONE</small>0541581867</span>
                <ArrowIcon />
              </a>
            </div>
            <footer className="about-footer">
              <span>© 2026 Smart Player</span>
              <span>Your media is personal. Your choices matter.</span>
            </footer>
          </section>
        </div>
      </div>
    </main>
  );
}
