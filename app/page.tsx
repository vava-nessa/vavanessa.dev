import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";

/**
 * 📖 Homepage Component
 *
 * Displays "Vanessa Depraute Dev Blog Coming Soon" with a link to the portfolio
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
      <div className="relative z-10 flex h-screen w-screen flex-col items-center justify-center gap-6">
        <h1 className="font-mono text-xl text-white drop-shadow-md text-center md:text-2xl lg:text-3xl">
          Vanessa Depraute Dev Blog Coming Soon
        </h1>
        <a
          href="https://www.vanessadepraute.dev"
          target="_blank"
          rel="noopener noreferrer"
          className="font-mono text-sm text-white/70 drop-shadow-sm underline underline-offset-4 hover:text-white/90 transition-colors md:text-base"
        >
          Vanessa Depraute
        </a>
      </div>
    </BackgroundGradientAnimation>
  );
}
