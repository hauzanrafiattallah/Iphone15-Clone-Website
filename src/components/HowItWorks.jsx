import { useGSAP } from "@gsap/react";
import { chipImg, frameImg, frameVideo } from "../utils";
import gsap from "gsap";
import { useRef } from "react";
import { animateWithGsap } from "../utils/animations";

const HowItWorks = () => {
  const videoRef = useRef();

  useGSAP(() => {
    gsap.from("#chip", {
      scrollTrigger: {
        trigger: "#chip",
        start: "20% bottom",
      },
      opacity: 0,
      scale: 2,
      duration: 2,
      ease: "power2.inOut",
    });

    animateWithGsap(".g_fadeIn", {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power2.inOut",
    });
  }, []);

  return (
    <section className="common-padding">
      <div className="screen-max-width">
        <div id="chip" className="flex-center w-full my-20">
          <img src={chipImg} alt="chip" width={180} height={180} />
        </div>

        <div className="flex flex-col items-center">
          <h2 className="hiw-title">
            Chip A17 Pro.
            <br />
            Jawara dalam bermain game.
          </h2>

          <p className="hiw-subtitle">
            Telah hadir. Desain ulang terbesar sepanjang sejarah GPU Apple.
          </p>
        </div>

        <div className="mt-10 md:mt-20 mb-14">
          <div className="relative h-full flex-center">
            <div className="overflow-hidden">
              <img
                src={frameImg}
                alt="frame"
                className="bg-transparent relative z-10"
              />
            </div>
            <div className="hiw-video">
              <video
                className="pointer-events-none"
                playsInline
                preload="none"
                muted
                autoPlay
                ref={videoRef}
              >
                <source src={frameVideo} type="video/mp4" />
              </video>
            </div>
          </div>

          <p className="text-gray font-semibold text-center mt-3">
            Honkai: Star Rail
          </p>
        </div>
        <div className="hiw-text-container">
          <div className="flex flex-1 justify-center flex-col">
            <p className="hiw-text g_fadeIn">
              A17 Pro merupakan chip iPhone kelas baru yang menghadirkan{" "}
              <span className="text-white">
                performa grafis terbaik sejauh ini
              </span>
              .
            </p>
            <br />
            <p className="hiw-text g_fadeIn">
              Game{" "}
              <span className="text-white">
                seluler akan terlihat dan terasa begitu imersif
              </span>
              , dengan detail lingkungan yang luar biasa dan karakter yang
              begitu realistis. Dan dengan kecepatan dan efisiensi terdepan di
              industri, A17 Pro merespons dan bekerja cepat.
            </p>
          </div>
          <div className="flex-1 flex justify-center flex-col g_fadeIn">
            <p className="hiw-bigtext">GPU baru sekelas Pro</p>
            <p className="hiw-text"> dengan 6 core</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
