import type { FormEvent } from "react";
import OAuthButtons from "./OAuthButtons";
import { accessCopy, defaultPlanLabel, legalLinks, type AccessMode } from "./accessContent";
import styles from "./AccessCard.module.css";

type AccessFormProps = {
  mode: AccessMode;
  email: string;
  error: string;
  showPersonalEmailWarning: boolean;
  onEmailChange: (value: string) => void;
  onSubmit: () => void;
  onSwitchMode: (mode: AccessMode) => void;
};

export default function AccessForm({
  mode,
  email,
  error,
  showPersonalEmailWarning,
  onEmailChange,
  onSubmit,
  onSwitchMode,
}: AccessFormProps) {
  const copy = accessCopy[mode];
  const isSignin = mode === "signin";

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit();
  };

  return (
    <div className={`d-flex flex-column ${styles.stack}`}>
      <h2 className="t-h3 text-on-dark m-0">{copy.title}</h2>

      {!isSignin && (
        <p className={`t-body-sm m-0 ${styles.planBanner}`}>
          <strong className="fw-medium">Plan: {defaultPlanLabel}</strong> · change it
          any time before your trial ends
        </p>
      )}

      <div className={`t-label-upper ${styles.orDivider}`} aria-hidden="true">
        <span />
        Or
        <span />
      </div>

      <form onSubmit={handleSubmit} noValidate className="d-flex flex-column gap-3">
        <div className="d-flex flex-column gap-2">
          <label htmlFor="work-email" className={`t-body-sm ${styles.label}`}>
            Email address
          </label>
          <input
            id="work-email"
            type="email"
            autoComplete="email"
            placeholder="name@company.com.au"
            value={email}
            onChange={(event) => onEmailChange(event.target.value)}
            aria-invalid={error ? true : undefined}
            aria-describedby={error ? "email-msg" : undefined}
            className={`form-control ${styles.input} ${error ? styles.inputError : ""}`}
          />
          {error && (
            <p id="email-msg" role="alert" className={`t-body-sm m-0 ${styles.errorMessage}`}>
              {error}
            </p>
          )}
          {showPersonalEmailWarning && (
            <p className={`t-body-sm m-0 ${styles.warningMessage}`}>
              That looks like a personal address. Use your work email so your
              colleagues can find the right company account.
            </p>
          )}
        </div>

        {!isSignin && (
          <p className={`t-caption m-0 ${styles.legal}`}>
            By continuing, you agree to 4tomorrow&apos;s{" "}
            <a href={legalLinks.terms}>Terms and Conditions</a> and{" "}
            <a href={legalLinks.privacy}>Privacy Policy</a>. A card is needed to
            start, and nothing is charged for 30 days.
          </p>
        )}

        <button type="submit" className="btn btn-4t btn-4t-primary w-100">
          {copy.submitLabel}
        </button>
      </form>

      <div className={styles.rule} aria-hidden="true" />

      {isSignin ? (
        <>
          <OAuthButtons microsoftLabel={copy.microsoftLabel} googleLabel={copy.googleLabel} />
          <div className="d-flex flex-column gap-2">
            <p className="t-body m-0 text-center fw-medium">
              New to 4tomorrow?
            </p>
            <button
              type="button"
              onClick={() => onSwitchMode("signup")}
              className={`btn btn-4t btn-4t-primary w-100 ${styles.createAccount}`}
            >
              Create account
            </button>
          </div>
        </>
      ) : (
        <p className="t-body-sm m-0 text-center">
          Already have an account?{" "}
          <button
            type="button"
            onClick={() => onSwitchMode("signin")}
            className={styles.textButton}
          >
            Log in
          </button>
        </p>
      )}
    </div>
  );
}
