import  { useEffect, useState } from "react";
import NetflixBannerLogo from "../../assets/image/logo.png";
import { Play, Info } from "lucide-react";
import style from "./Banner.module.css";
import { MovieInstance } from "../../utility/MovieInstance";
import requests from "../../utility/requestUrls";

const BANNER_BASE = "https://image.tmdb.org/t/p/original/";

const Banner = () => {
  const [bannerImage, setBannerImage] = useState({});

  useEffect(() => {
    async function fetchBannerImage() {
      const request = await MovieInstance.get(requests.fetchNetflixOriginals);
      setBannerImage(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length)
        ],
      );
    }
    fetchBannerImage();
  }, []);
  console.log(bannerImage);

  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }

  return (
    <div
      className={style.banner}
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("${BANNER_BASE}${bannerImage?.backdrop_path}")`,
        //backgroundPosition: "center center",
      }}
    >
      <div className={style.contents}>
        {/* Netflix image */}
        <img
          className={style.logoImg}
          src={NetflixBannerLogo}
          alt="Netflix Logo"
        />

        {/* title */}
        <h1 className={style.title}>
          {bannerImage?.title ||
            bannerImage?.name ||
            bannerImage?.original_name}
        </h1>

        {/* description */}
        <h1 className={style.description}>
          {/* {truncate(bannerImage?.overview, 120)} */}
        </h1>

        {/* buttons */}
        <div className={style.buttonContainer}>
          <button className={style.button}>
            <Play size={30} />
            Play
          </button>
          <button className={style.button}>
            <Info size={30} />
            My List
          </button>
        </div>
      </div>
      ;{/* fading */}
      <div className={style.fadeBottom}></div>;
    </div>
  );
};

export default Banner;
