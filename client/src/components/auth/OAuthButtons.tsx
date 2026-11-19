import Image from "next/image";

type OAuthButtonsProps = {
  microsoftLabel: string;
  googleLabel: string;
  onMicrosoft?: () => void;
  onGoogle?: () => void;
};

export default function OAuthButtons({
  microsoftLabel,
  googleLabel,
  onMicrosoft,
  onGoogle,
}: OAuthButtonsProps) {
  return (
    <div className="d-flex flex-column gap-2">
      <button type="button" onClick={onMicrosoft} className="btn btn-4t btn-4t-ghost w-100">
        <Image
          src="/images/microsoft-logo.png"
          alt=""
          width={18}
          height={18}
        />
        {microsoftLabel}
      </button>
      <button type="button" onClick={onGoogle} className="btn btn-4t btn-4t-ghost w-100">
        <Image
          src="/images/google-logo.png"
          alt=""
          width={18}
          height={18}
          style={{ objectFit: "contain" }}
        />
        {googleLabel}
      </button>
    </div>
  );
}
