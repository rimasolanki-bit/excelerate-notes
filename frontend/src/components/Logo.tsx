import React from "react";
import Image from "next/image";
import { convertFileSrc } from "@tauri-apps/api/core";
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from "./ui/dialog";
import { VisuallyHidden } from "./ui/visually-hidden";
import { About } from "./About";

interface LogoProps {
  isCollapsed: boolean;
  doodlePath?: string | null;
  doodleDate?: string | null;
}

const Logo = React.forwardRef<HTMLButtonElement, LogoProps>(
  ({ isCollapsed, doodlePath, doodleDate }, ref) => {
    const [failedSrc, setFailedSrc] = React.useState<string | null>(null);
    const doodleSrc = doodlePath && doodleDate
      ? `${convertFileSrc(doodlePath)}?d=${doodleDate}`
      : null;
    return (
      <Dialog aria-describedby={undefined}>
        {isCollapsed ? (
          <DialogTrigger asChild>
            <button
              ref={ref}
              type="button"
              className="flex items-center justify-center mb-2 cursor-pointer bg-transparent border-none p-0 hover:opacity-80 transition-opacity"
              aria-label="About Excelerate Notes"
            >
              {doodleSrc && doodleSrc !== failedSrc ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={doodleSrc}
                  alt="Excelerate Notes"
                  width={40}
                  height={40}
                  className="w-10 h-10 object-contain"
                  onError={() => setFailedSrc(doodleSrc)}
                />
              ) : (
                <Image
                  src="/logo-collapsed.png"
                  alt="Excelerate Notes"
                  width={40}
                  height={40}
                  className="object-contain"
                  priority
                />
              )}
            </button>
          </DialogTrigger>
        ) : (
          <DialogTrigger asChild>
            <button
              ref={ref}
              type="button"
              className="w-full rounded-lg bg-[#3B1417] mb-2 flex flex-col items-center py-2 cursor-pointer hover:opacity-90 transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A84C]"
              aria-label="About Excelerate Notes"
            >
              <Image
                src="/logo.png"
                alt="Excelerate Accounting Academy"
                width={150}
                height={130}
                className="object-contain"
                priority
              />
              <span className="mt-1 text-sm font-semibold tracking-wide text-[#C9A84C]">Excelerate Notes</span>
            </button>
          </DialogTrigger>
        )}
        <DialogContent>
          <VisuallyHidden>
            <DialogTitle>About Excelerate Notes</DialogTitle>
          </VisuallyHidden>
          <About />
        </DialogContent>
      </Dialog>
    );
  },
);

Logo.displayName = "Logo";

export default Logo;
