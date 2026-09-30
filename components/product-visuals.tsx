import Image from "next/image";
import { cn } from "@/lib/utils";

function imageDimensions(src: string) {
  return src.includes("team-member")
    ? { width: 1206, height: 2622 }
    : { width: 1320, height: 2868 };
}

export function PhoneFrame({
  src,
  alt,
  className,
  priority = false,
}: {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
}) {
  const dimensions = imageDimensions(src);
  return (
    <figure className={cn("phone-frame", className)}>
      <div className="phone-speaker" aria-hidden="true" />
      <Image
        data-product-screenshot
        src={src}
        alt={alt}
        width={dimensions.width}
        height={dimensions.height}
        priority={priority}
        fetchPriority={priority ? "high" : "auto"}
        sizes="(max-width: 640px) 46vw, (max-width: 1024px) 260px, 300px"
        className="block h-auto w-full"
      />
    </figure>
  );
}

export function ScreenshotStack({ className }: { className?: string }) {
  return (
    <div className={cn("screenshot-stack", className)}>
      <div className="hero-halo" aria-hidden="true" />
      <PhoneFrame
        src="/screenshots/home-team-member.png"
        alt="ShiftChef team member home showing the next service, schedule actions, and personal work shortcuts."
        className="phone-primary"
      />
      <PhoneFrame
        src="/screenshots/shifts-manager.png"
        alt="ShiftChef manager schedule showing upcoming services and roster planning context."
        className="phone-secondary"
      />
      <div className="hero-ticket" aria-hidden="true">
        <span>TODAY</span>
        <strong>READY</strong>
      </div>
    </div>
  );
}

export function ScreenshotPair({
  primary,
  secondary,
}: {
  primary: { src: string; alt: string };
  secondary: { src: string; alt: string };
}) {
  return (
    <div className="screenshot-pair">
      <PhoneFrame src={primary.src} alt={primary.alt} className="pair-primary" />
      <PhoneFrame src={secondary.src} alt={secondary.alt} className="pair-secondary" />
    </div>
  );
}
