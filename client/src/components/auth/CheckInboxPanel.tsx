import styles from "./AccessCard.module.css";

type CheckInboxPanelProps = {
  email: string;
  steps: string[];
  onReset: () => void;
};

export default function CheckInboxPanel({ email, steps, onReset }: CheckInboxPanelProps) {
  return (
    <div className="d-flex flex-column gap-3">
      <div className={styles.iconTile}>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M4 6h16v12H4z" />
          <path d="m4 7 8 6 8-6" />
        </svg>
      </div>
      <h2 className="t-h3 text-on-dark m-0">Check your inbox</h2>
      <p className="t-body-sm m-0">
        We&apos;ve sent a 6-digit code to <strong className="fw-medium">{email}</strong>. It
        expires in 10 minutes.
      </p>
      <ol className={`t-body-sm m-0 ${styles.steps}`}>
        {steps.map((step) => (
          <li key={step}>{step}</li>
        ))}
      </ol>
      <button
        type="button"
        onClick={onReset}
        className={`align-self-start ${styles.textButton} ${styles.textButtonUi}`}
      >
        Use a different email
      </button>
    </div>
  );
}
