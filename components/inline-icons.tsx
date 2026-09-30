import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

function IconShell({ children, ...props }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      {children}
    </svg>
  );
}

export function ChevronDownIcon(props: IconProps) {
  return <IconShell {...props}><path d="m6 9 6 6 6-6" /></IconShell>;
}

export function MenuIcon(props: IconProps) {
  return <IconShell {...props}><path d="M4 12h16M4 6h16M4 18h16" /></IconShell>;
}

export function XIcon(props: IconProps) {
  return <IconShell {...props}><path d="M18 6 6 18M6 6l12 12" /></IconShell>;
}

export function AlertCircleIcon(props: IconProps) {
  return (
    <IconShell {...props}>
      <circle cx="12" cy="12" r="10" />
      <path d="M12 8v4M12 16h.01" />
    </IconShell>
  );
}

export function CheckCircleIcon(props: IconProps) {
  return (
    <IconShell {...props}>
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
      <path d="m9 11 3 3L22 4" />
    </IconShell>
  );
}

export function LoaderIcon(props: IconProps) {
  return (
    <IconShell {...props}>
      <path d="M21 12a9 9 0 1 1-6.22-8.56" />
    </IconShell>
  );
}
