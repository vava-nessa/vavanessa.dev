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
      gradientBackgroundStart="rgb(20, 0, 50)"
      gradientBackgroundEnd="rgb(0, 10, 40)"
      firstColor="255, 50, 150"
      secondColor="50, 255, 200"
      thirdColor="100, 150, 255"
      fourthColor="255, 100, 50"
      fifthColor="200, 255, 100"
      pointerColor="255, 100, 200"
      size="120%"
      blendingValue="screen"
      interactive={true}
      containerClassName="z-0"
    >
      <div className="relative z-10 flex h-screen w-screen flex-col items-center justify-center gap-4">
        <h1 className="font-mono text-2xl text-white drop-shadow-md md:text-3xl lg:text-4xl">
          vavanessa blog
        </h1>
        <p className="font-mono text-xs text-white/70 drop-shadow-sm md:text-sm">
          coming soon
        </p>
      </div>
    </BackgroundGradientAnimation>
  );
}
