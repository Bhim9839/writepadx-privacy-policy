import Image from "next/image";

const assetPath = (path: string) =>
  `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}${path}`;

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
      "Musynx supports online music streaming and offline playback of available music.",
    paragraphs: [
      "Musynx is a music app for listening to music online and playing music offline. Online playback needs an internet connection and may send requests to the streaming service. Offline playback can use music available on your device or music downloaded for offline listening.",
      "The exact permission prompts and third-party providers can vary by Android version and app release. This policy describes permissions by purpose; check the prompts and privacy notices in your installed version for the exact access and services it uses.",
    ],
  },
  {
    id: "music",
    number: "02",
    title: "Online streaming & offline playback",
    description:
      "Stream music online or play available music offline.",
    paragraphs: [
      "When you stream music, Musynx sends requests over the internet to the service that provides the stream. Those requests may include the selected track or search, playback activity, and technical details needed to deliver the stream. The streaming provider may receive your IP address and handle request information under its own privacy policy.",
      "When you play a local audio file or a track already downloaded for offline listening, Musynx may access that audio and related details such as its name, format, or playback position. Local playback itself does not require sending the audio file to a streaming service; online features you choose to use may still make network requests.",
      "Offline availability depends on the feature and the rights for the music. Downloads managed by a streaming provider may be stored in app-controlled form and may only play in Musynx; they may be removed when you delete them, clear app data, uninstall the app, or when the provider's availability or terms change.",
    ],
  },
  {
    id: "permissions",
    number: "03",
    title: "Device permissions",
    description:
      "Permissions support streaming, music access, and playback controls.",
    paragraphs: [
      "Musynx uses internet connectivity for online music streaming. It may also request audio or media access for music you choose on your device. Android versions differ: newer versions can grant access to selected audio through a system picker or media permission, while older versions may show a storage permission.",
      "Musynx supports background playback and displays playback controls in a notification. Foreground media playback permissions allow music to continue when you leave the app or turn off the screen. On Android 13 and later, Android may ask separately for notification permission; if notification permission is denied, playback can continue but the notification controls may not be shown.",
      "The exact permissions depend on the features enabled in the released app and your Android version. You can review or change granted permissions in Android settings. If you deny a permission, the related feature may not work.",
    ],
    bullets: [
      "Internet access (INTERNET) — connects to online music and other network features.",
      "Network status (ACCESS_NETWORK_STATE), if requested — checks whether a network connection is available before streaming.",
      "Audio or media access (such as READ_MEDIA_AUDIO on newer Android versions, or legacy storage access on older versions) — lets you browse or play music you select on your device. A system media picker may be used instead.",
      "Background playback (FOREGROUND_SERVICE and FOREGROUND_SERVICE_MEDIA_PLAYBACK) — allows music playback to continue when the app is in the background or the screen is off.",
      "Notifications (POST_NOTIFICATIONS on Android 13 and later) — allows Musynx to show playback status and controls in a notification. Android may ask for this permission separately; you can manage it in device settings.",
      "Wake lock (WAKE_LOCK), if used by the device/app version — helps keep audio playback active while the screen is off.",
    ],
  },
  {
    id: "network",
    number: "04",
    title: "Internet access & third-party services",
    description:
      "Streaming requires a connection and involves the service that supplies the music.",
    paragraphs: [
      "When you search for, select, or stream online music, Musynx must communicate with the service that supplies the music. The provider may process the search or track request, streaming activity, IP address, device or app details, and diagnostics needed to provide and protect its service. What it receives depends on the provider and the feature you use.",
      "The specific streaming, advertising, analytics, crash-reporting, or account providers can vary by release and are not named in this policy. Each provider handles information under its own privacy policy. Review in-app notices and linked provider policies for details about the services in your version of Musynx.",
    ],
  },
  {
    id: "sharing",
    number: "05",
    title: "Sharing",
    description:
      "Streaming providers receive requests needed to deliver online music.",
    paragraphs: [
      "To provide online music, Musynx sends the requests required to the streaming provider. The provider may use those requests to deliver the selected music and operate its service under its own privacy practices.",
      "If you choose to share a local file or a link using another app or service, that destination may receive it and handle it under its own privacy practices. Offline playback of a local file is different from streaming and does not, by itself, send that file to the streaming provider.",
    ],
  },
  {
    id: "storage",
    number: "06",
    title: "Storage, retention & security",
    description:
      "Local music, offline downloads, and app data may have different storage rules.",
    paragraphs: [
      "Music files you select are accessed from the locations made available by Android or its system media picker. Offline downloads may be stored in app-controlled storage and may not be available as ordinary audio files outside Musynx. Removing a download or clearing app data may delete local copies; a streaming provider may separately retain account or service information under its own policy.",
      "The retention period for streaming requests, app diagnostics, or other service information depends on the providers used in your version. You can manage permissions and app data in Android settings. Use your device's security controls to protect local music and app data.",
    ],
  },
  {
    id: "choices",
    number: "07",
    title: "Your choices & privacy rights",
    description:
      "Choose online streaming or offline listening and manage device access.",
    paragraphs: [
      "Online streaming needs an internet connection. Offline playback of local music may work without one, while online search, streaming, and other connected features will not. You can manage audio, notification, and other available permissions in Android settings; denying access may limit the related feature.",
      "Privacy rights depend on where you live and may include requests to access, correct, or delete personal information. Contact the developer with a privacy question or request. For information processed by a music streaming or other third-party provider, you may also need to contact that provider.",
    ],
  },
  {
    id: "children",
    number: "08",
    title: "Children's privacy",
    description:
      "Contact the developer if you have a concern about a child's information.",
    paragraphs: [
      "The information available for this policy does not specify whether Musynx is directed to children. If you believe a child has provided personal information in a way that raises a privacy concern, contact the developer using the details below.",
    ],
  },
  {
    id: "contact",
    number: "09",
    title: "Questions about privacy?",
    description: "Contact the Musynx developer.",
    paragraphs: [
      "For privacy questions or requests, contact the developer using the details below. Please do not send music files or sensitive personal information unless it is needed to address your request.",
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

function MusynxMark() {
  return (
    <span className="brand-mark">
      <Image
        src={assetPath("/musynx_app_icon.png")}
        alt=""
        aria-hidden="true"
        className="brand-image"
        width={1254}
        height={1254}
      />
    </span>
  );
}

export default function MusynxPrivacyPolicy() {
  return (
    <main className="site-shell resumora-shell">
      <aside className="sidebar">
        <a className="brand" href="#top" aria-label="Musynx privacy policy">
          <MusynxMark />
          <span className="brand-name">Musynx</span>
        </a>
        <p className="sidebar-label">CURRENT POLICY</p>
        <div className="sidebar-current">
          <span className="sidebar-current-icon"><MusynxMark /></span>
          <span>Music player</span>
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
            About Musynx
          </a>
        </nav>
        <div className="sidebar-bottom">
          <div className="sidebar-help">
            <span className="help-spark" aria-hidden="true">✳</span>
            <p>Your music. Your choice.</p>
            <a href="#contact">We’re here to help <ArrowIcon /></a>
          </div>
          <span className="sidebar-version">LAST UPDATED · NOV 17, 2026</span>
        </div>
      </aside>

      <div className="main-panel" id="top">
        <header className="topbar">
          <div className="breadcrumb">
            <span>Musynx</span>
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
                <span className="eyebrow-dot" /> ONLINE &amp; OFFLINE LISTENING
              </div>
              <h1>Stream or listen offline.<br /><span>Your music. Your choice.</span></h1>
              <p className="hero-description">
                A clear guide to online music streaming, offline playback,
                file access, and Android permissions.
              </p>
              <div className="hero-meta">
                <span className="updated-icon">↻</span>
                <span>Last updated <strong>November 17, 2026</strong></span>
                <span className="meta-divider" />
                <span className="reading-time">5 min read</span>
              </div>
            </div>
            <div className="hero-art" aria-hidden="true">
              <div className="orbit orbit-one" />
              <div className="orbit orbit-two" />
              <div className="orbit orbit-three" />
              <div className="orbit-center"><MusynxMark /></div>
              <span className="orbit-spark spark-one">✳</span>
              <span className="orbit-spark spark-two">✳</span>
              <span className="orbit-label">YOUR MUSIC<br />YOUR CHOICE</span>
            </div>
          </section>

          <div className="policy-layout">
            <div className="policy-main">
              <div className="policy-toolbar">
                <div>
                  <h2>Musynx privacy policy</h2>
                  <p>Online streaming, offline playback, file access, and permissions.</p>
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
                  <div><span>THE QUICK READ</span><h2>Musynx, at a glance</h2></div>
                </div>
                <div className="summary-item">
                  <span className="summary-icon icon-collect">♫</span>
                  <p><strong>Online streams</strong> connect to the music provider; offline playback uses available music.</p>
                </div>
                <div className="summary-item">
                  <span className="summary-icon icon-sell">⌁</span>
                  <p><strong>File and media access</strong> supports local music and offline listening.</p>
                </div>
                <div className="summary-item">
                  <span className="summary-icon icon-control">↗</span>
                  <p><strong>Internet, notifications, and background playback</strong> support online streaming and playback controls.</p>
                </div>
              </div>
              <div className="aside-note">
                <span className="note-icon">✳</span>
                <div>
                  <h3>Your music, your call.</h3>
                  <p>Choose between streaming and offline music, and manage file, network, and playback permissions.</p>
                  <a href="#permissions">See permission details <ArrowIcon /></a>
                </div>
              </div>
              <div className="secure-note"><span className="secure-dot" /> Clear choices. Your control.</div>
            </aside>
          </div>

          <section className="about-section" id="about" aria-labelledby="about-title">
            <div className="about-intro">
              <div className="about-brand">
                <MusynxMark />
                <span className="about-eyebrow">ABOUT THE APP</span>
              </div>
              <h2 id="about-title">Meet <span>Musynx.</span></h2>
              <p>
                Musynx lets you stream music online and play music offline.
                Internet access supports streaming; audio or media access
                supports music on your device. Background playback and
                notification permission supports playback controls.
              </p>
              <div className="about-package">
                <span>APP</span>
                <code>Musynx · Online &amp; offline music</code>
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
              <span className="about-eyebrow">PRIVACY &amp; MUSIC</span>
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
              <span>Musynx · Nitya App Studio</span>
              <span>Your music, your choice.</span>
            </footer>
          </section>
        </div>
      </div>
    </main>
  );
}
