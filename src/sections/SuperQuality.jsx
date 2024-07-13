import { tormond } from "../assets/images";
import Button from "../components/Button";
import { arrowRight } from "../assets/icons";

const SuperQuality = () => {
  return (
    <section
      id="about-us"
      className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container"
    >
      <div className="flex flex-1 flex-col">
        <h2 className="font-palanquin capitalize text-4xl lg:max-w-lg font-bold">
          Explore
          <span className="text-coral-red"> Game of Thrones </span>
          Characters
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">
          Embark on an epic journey through Westeros with ThroneTrack. Sign up
          to unlock a treasure trove of character profiles from the beloved Game
          of Thrones series. Dive deep into their histories, traits, and pivotal
          moments that shaped the Seven Kingdoms.
        </p>
        <p className="mt-6 lg:max-w-lg info-text">
          Our dedication to detail and excellence ensures your satisfaction
        </p>
      </div>

      <div className="flex-1 flex justify-center items-center">
        <img
          src={tormond}
          alt="product detail"
          width={570}
          height={522}
          className="object-contain"
        />
      </div>
    </section>
  );
};

export default SuperQuality;
