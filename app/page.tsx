import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";

/**
 * 📖 Homepage Component
 *
 * Displays "vavanessa blog" with "coming soon" text
 * over an animated gradient background.
 */
export default function Home() {
  return (
    <BackgroundGradientAnimation
      gradientBackgroundStart="rgb(108, 0, 162)"
      gradientBackgroundEnd="rgb(0, 17, 82)"
      firstColor="18, 113, 255"
      secondColor="221, 74, 255"
      thirdColor="100, 220, 255"
      fourthColor="200, 50, 50"
      fifthColor="180, 180, 50"
      pointerColor="140, 100, 255"
      interactive={true}
      containerClassName="z-0"
    >
      <div className="relative z-10 flex h-screen w-screen flex-col items-center justify-center gap-4">
        <h1 className="text-5xl font-bold text-white drop-shadow-lg md:text-7xl lg:text-8xl">
          vavanessa blog
        </h1>
        <p className="font-mono text-sm text-white/80 drop-shadow-md md:text-base">
          coming soon
        </p>
      </div>
    </BackgroundGradientAnimation>
  );
}
