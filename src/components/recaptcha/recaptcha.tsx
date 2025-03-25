import ReCAPTCHA from 'react-google-recaptcha';

export default function ReCaptcha({ onChange }: {onChange: (token: string) => void}) {

  return (
    <ReCAPTCHA
      sitekey={process.env.NEXT_PUBLIC_GOOGLE_RECAPTCHA_SITE_KEY || ""}
      onChange={(value) => onChange(value || "")}
      size="normal" // or "normal" for checkbox
    />
  );
}