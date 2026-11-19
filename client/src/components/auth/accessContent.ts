export type AccessMode = "signin" | "signup";

export const accessCopy: Record<
  AccessMode,
  {
    title: string;
    submitLabel: string;
    microsoftLabel: string;
    googleLabel: string;
    nextSteps: string[];
  }
> = {
  signin: {
    title: "Log in",
    submitLabel: "Continue",
    microsoftLabel: "Continue with Microsoft",
    googleLabel: "Continue with Google",
    nextSteps: [
      "Enter the code from your email",
      "You’ll land on your dashboard",
    ],
  },
  signup: {
    title: "Create your account",
    submitLabel: "Create account",
    microsoftLabel: "Sign up with Microsoft",
    googleLabel: "Sign up with Google",
    nextSteps: [
      "Enter the code to verify your email",
      "Tell us about your business",
      "Confirm your plan and add a card",
      "Invite your team and start on My Data Hub",
    ],
  },
};

export const defaultPlanLabel = "Growth · $599/month after trial";

export const legalLinks = {
  terms: "https://4tomorrow.com.au",
  privacy: "https://4tomorrow.com.au",
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const personalEmailPattern = /@(gmail|outlook|hotmail|yahoo|icloud|live|bigpond)\./i;

export function isValidEmail(value: string) {
  return emailPattern.test(value.trim());
}

export function isPersonalEmail(value: string) {
  return personalEmailPattern.test(value);
}
