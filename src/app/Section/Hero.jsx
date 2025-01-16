import Image from "next/image";
import HeroImage from "@/app/images/HERO.jpeg";

function Hero() {
  return (
    <>
      <section className="block mobile-size-hero-section">
        <div className="container w-[100%] max-w-[940px] ml-auto mr-auto mobile-size-container">
          <div className="Hero-Wrapper flex items-center justify-between mobile-size-wrapper">
            <div className="Hero-Split flex flex-col items-start justify-start max-w-[46%] mobile-size-hero-split">
              <h1 className="mt-[20px] mb-[10px] text-[48px] text-[#333] font-ubuntu font-bold leading-[44px] mobile-size-h1">
                Afaq Ali Khan
              </h1>
              <p className="font-normal text-[14px] mb-[24px] text-[#333] leading-[20px] custom-size-text mobile-size-p">
                SOFTWARE ENGINEER NEXT JS | LARAVEL | SPECALIST{" "}
              </p>
              <a href="https://wa.me/03174330020?text=Hey%20Welcome%20😊" target="_blank">
                <button className="bg-[#1a1b1f] text-white text-[12px] font-normal rounded-[6px] custom-size-button mobile-size-button">
                  CONTACT
                </button>
              </a>
            </div>
            <div className="Hero-Split flex flex-col align-top justify-items-start max-w-[46%] mobile-size-hero-split">
              <Image
                src={HeroImage}
                alt="hero-image"
                lazyRoot="loads on scroll"
                className="my-[100px] max-w-[100%] rounded-[5px] align-baseline mobile-size-img"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
