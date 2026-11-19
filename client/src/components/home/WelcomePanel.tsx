import styles from "./WelcomePanel.module.css";

const highlights = [
  "GHG Protocol and AASB S2-aligned reporting",
  "A 4tomorrow consultant assigned to your account",
  "30 days free on every plan",
];

function CheckIcon() {
  return (
    <svg
      className="flex-shrink-0"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

export default function WelcomePanel() {
  return (
    <div className="d-flex flex-column gap-4">
      <h1 className="t-h1 text-on-dark m-0">Welcome to 4tomorrow</h1>

      <div className={`glass-card ${styles.card} d-flex flex-column gap-3`}>
        <p className="t-body m-0">
          Your secure workspace for carbon accounting.
          <br />
          <br />
          Input your energy, travel and spend data, watch your Scope 1, 2 and 3
          footprint take shape, and get reports your board and auditors can
          rely on.
        </p>
        <ul className="list-unstyled d-flex flex-column gap-3 m-0">
          {highlights.map((item) => (
            <li key={item} className="t-body d-flex align-items-center gap-2">
              <span className={styles.check}>
                <CheckIcon />
              </span>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
