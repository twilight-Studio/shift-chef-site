import Image from "next/image";
import { cn } from "@/lib/utils";

export function BrandLockup({ inverse = false, className }: { inverse?: boolean; className?: string }) {
  return (
    <span className={cn("brand-lockup", inverse && "brand-lockup-inverse", className)}>
      <Image
        className="brand-logo"
        src={inverse ? "/brand/logo-white.png" : "/brand/logo-green.png"}
        width={2254}
        height={1878}
        alt=""
        aria-hidden="true"
        sizes={inverse ? "96px" : "76px"}
        style={{ width: inverse ? 96 : 76, height: "auto" }}
      />
    </span>
  );
}
