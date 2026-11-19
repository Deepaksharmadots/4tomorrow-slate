"use client";

import { useState } from "react";
import AccessForm from "./AccessForm";
import CheckInboxPanel from "./CheckInboxPanel";
import { accessCopy, isPersonalEmail, isValidEmail, type AccessMode } from "./accessContent";
import styles from "./AccessCard.module.css";

type AccessCardProps = {
  initialMode?: AccessMode;
};

// UI only: no request is sent. Login and signup flows will replace the submit and OAuth handlers.
export default function AccessCard({ initialMode = "signin" }: AccessCardProps) {
  const [mode, setMode] = useState<AccessMode>(initialMode);
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [warn, setWarn] = useState(false);
  const [done, setDone] = useState(false);

  const switchMode = (next: AccessMode) => {
    setMode(next);
    setDone(false);
    setError("");
    setWarn(false);
  };

  const handleEmailChange = (value: string) => {
    setEmail(value);
    setError("");
    setWarn(isPersonalEmail(value));
  };

  const handleSubmit = () => {
    if (!isValidEmail(email)) {
      setError("Please enter a valid work email address.");
      return;
    }
    setDone(true);
  };

  const handleReset = () => {
    setDone(false);
    setEmail("");
  };

  return (
    <div id="access" className={`glass-card ${styles.card} d-flex flex-column`}>
      {done ? (
        <CheckInboxPanel
          email={email}
          steps={accessCopy[mode].nextSteps}
          onReset={handleReset}
        />
      ) : (
        <AccessForm
          mode={mode}
          email={email}
          error={error}
          showPersonalEmailWarning={mode === "signup" && warn && !error}
          onEmailChange={handleEmailChange}
          onSubmit={handleSubmit}
          onSwitchMode={switchMode}
        />
      )}
    </div>
  );
}
