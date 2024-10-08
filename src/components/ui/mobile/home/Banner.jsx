import { useDispatch } from "react-redux";
import {
  setGroupType,
  // setShowLoginModal,
} from "../../../../redux/features/stateSlice";
// import { userToken } from "../../../../redux/features/auth/authSlice";
// import { settings } from "../../../../api";
// import { useNavigate } from "react-router-dom";

import BannerSlider from "../../BannerSlider/BannerSlider";
const Banner = () => {
  // const navigate = useNavigate();
  // const token = useSelector(userToken);
  const dispatch = useDispatch();
  const handleNavigate = (group) => {
    dispatch(setGroupType(group));
  };

  // const navigateAviatorCasinoVideo = () => {
  //   if (token) {
  //     if (settings.casinoCurrency !== "AED") {
  //       navigate(`/casino/aviator/201206`);
  //     } else {
  //       // setShowModal(true);
  //       // setCasinoInfo({
  //       //   provider_name: "aviator",
  //       //   game_id: "201206",
  //       //   base: "casino",
  //       // });
  //     }
  //   } else {
  //     dispatch(setShowLoginModal(true));
  //   }
  // };
  return (
    <>
      <BannerSlider />

      <div
        title="Sports"
        id="sportsTabsBtns"
        className="grid gap-0.5 grid-cols-5 grid-flow-col w-full bg-transparent px-[6px] py-1.5 overflow-x-auto text-selection-none"
      >
        <span
          onClick={() => handleNavigate(4)}
          className="w-full col-span-1 px-0.5 py-0.5 rounded-[3px]"
          title="cricket"
        >
          <div
            className="relative w-full active:scale-95 cursor-pointer bg-bg_SkeletonBgLoaderColor transition-all ease-in-out duration-150 shadow-quickAccessBtnBoxShadows min-h-9 bg-cover bg-center bg-no-repeat rounded-[4px] overflow-hidden undefined"
            style={{
              backgroundImage:
                "url('https://promotions-material.s3.ap-south-1.amazonaws.com/sportsButtons/cricket-1696348461938')",
            }}
          >
            <div className="flex justify-center w-full h-full min-h-9 relative z-10 flex-col items-start pl-[5px] pt-[2px] pb-[2px] pr-1 opacity-100">
              <img
                src="https://promotions-material.s3.ap-south-1.amazonaws.com/sportsButtons/cricket-1696348461957?q=65&amp;w=600&amp;px=auto&amp;auto=format"
                width="16"
                height="16"
                className="w-3 h-3 sm:w-4 sm:h-4 ml-1 autoAnimate"
                alt="cricket-image"
                loading="lazy"
                title="cricket"
              />
              <span className="ml-1 autoAnimate text-text_Quaternary text-xs capitalize pr-[2px] md:text-sm text-nowrap w-full truncate font-lato-bold font-semibold md:font-semibold">
                cricket
              </span>
            </div>
            <div className="absolute top-0 left-0 w-full h-full min-h-9 rounded-[4px]"></div>
          </div>{" "}
        </span>
        <span
          onClick={() => handleNavigate(1)}
          className="w-full col-span-1 px-0.5 py-0.5 rounded-[3px]"
          title="Football"
        >
          <div
            className="relative w-full active:scale-95 cursor-pointer bg-bg_SkeletonBgLoaderColor transition-all ease-in-out duration-150 shadow-quickAccessBtnBoxShadows min-h-9 bg-cover bg-center bg-no-repeat rounded-[4px] overflow-hidden undefined"
            style={{
              backgroundImage:
                "url('https://promotions-material.s3.ap-south-1.amazonaws.com/sportsButtons/Football-1696348514974')",
            }}
          >
            <div className="flex justify-center w-full h-full min-h-9 relative z-10 flex-col items-start pl-[5px] pt-[2px] pb-[2px] pr-1 opacity-100">
              <img
                src="https://promotions-material.s3.ap-south-1.amazonaws.com/sportsButtons/Football-1696348514989?q=65&amp;w=600&amp;px=auto&amp;auto=format"
                width="16"
                height="16"
                className="w-3 h-3 sm:w-4 sm:h-4 ml-1 autoAnimate"
                alt="Football-image"
                loading="lazy"
                title="Football"
              />
              <span className="ml-1 autoAnimate text-text_Quaternary text-xs capitalize pr-[2px] md:text-sm text-nowrap w-full truncate font-lato-bold font-semibold md:font-semibold">
                Football
              </span>
            </div>
            <div className="absolute top-0 left-0 w-full h-full min-h-9 rounded-[4px]"></div>
          </div>{" "}
        </span>
        <span
          onClick={() => handleNavigate(2)}
          className="w-full col-span-1 px-0.5 py-0.5 rounded-[3px]"
          title="Tennis"
        >
          <div
            className="relative w-full active:scale-95 cursor-pointer bg-bg_SkeletonBgLoaderColor transition-all ease-in-out duration-150 shadow-quickAccessBtnBoxShadows min-h-9 bg-cover bg-center bg-no-repeat rounded-[4px] overflow-hidden undefined"
            style={{
              backgroundImage:
                "url('https://promotions-material.s3.ap-south-1.amazonaws.com/sportsButtons/Tennis-1696348559167')",
            }}
          >
            <div className="flex justify-center w-full h-full min-h-9 relative z-10 flex-col items-start pl-[5px] pt-[2px] pb-[2px] pr-1 opacity-100">
              <img
                src="https://promotions-material.s3.ap-south-1.amazonaws.com/sportsButtons/Tennis-1696348559179?q=65&amp;w=600&amp;px=auto&amp;auto=format"
                width="16"
                height="16"
                className="w-3 h-3 sm:w-4 sm:h-4 ml-1 autoAnimate"
                alt="Tennis-image"
                loading="lazy"
                title="Tennis"
              />
              <span className="ml-1 autoAnimate text-text_Quaternary text-xs capitalize pr-[2px] md:text-sm text-nowrap w-full truncate font-lato-bold font-semibold md:font-semibold">
                Tennis
              </span>
            </div>
            <div className="absolute top-0 left-0 w-full h-full min-h-9 rounded-[4px]"></div>
          </div>{" "}
        </span>
        <span
          className="w-full col-span-1 px-0.5 py-0.5 rounded-[3px]"
          title="Horse"
        >
          <div
            className="relative w-full active:scale-95 cursor-pointer bg-bg_SkeletonBgLoaderColor transition-all ease-in-out duration-150 shadow-quickAccessBtnBoxShadows min-h-9 bg-cover bg-center bg-no-repeat rounded-[4px] overflow-hidden undefined"
            style={{
              backgroundImage:
                "url('https://promotions-material.s3.ap-south-1.amazonaws.com/sportsButtons/Horse-1696348625542')",
            }}
          >
            <div className="flex justify-center w-full h-full min-h-9 relative z-10 flex-col items-start pl-[5px] pt-[2px] pb-[2px] pr-1 opacity-100">
              <img
                src="https://promotions-material.s3.ap-south-1.amazonaws.com/sportsButtons/Horse-1696348625546?q=65&amp;w=600&amp;px=auto&amp;auto=format"
                width="16"
                height="16"
                className="w-3 h-3 sm:w-4 sm:h-4 ml-1 autoAnimate"
                alt="Horse-image"
                loading="lazy"
                title="Horse"
              />
              <span className="ml-1 autoAnimate text-text_Quaternary text-xs capitalize pr-[2px] md:text-sm text-nowrap w-full truncate font-lato-bold font-semibold md:font-semibold">
                Horse
              </span>
            </div>
            <div className="absolute top-0 left-0 w-full h-full min-h-9 rounded-[4px]"></div>
          </div>{" "}
        </span>
        <span
          className="w-full col-span-1 px-0.5 py-0.5 rounded-[3px]"
          title="Greyhound"
        >
          <div
            className="relative w-full active:scale-95 cursor-pointer bg-bg_SkeletonBgLoaderColor transition-all ease-in-out duration-150 shadow-quickAccessBtnBoxShadows min-h-9 bg-cover bg-center bg-no-repeat rounded-[4px] overflow-hidden undefined"
            style={{
              backgroundImage:
                "url('https://promotions-material.s3.ap-south-1.amazonaws.com/sportsButtons/Greyhound-1696348684708')",
            }}
          >
            <div className="flex justify-center w-full h-full min-h-9 relative z-10 flex-col items-start pl-[5px] pt-[2px] pb-[2px] pr-1 opacity-100">
              <img
                src="https://promotions-material.s3.ap-south-1.amazonaws.com/sportsButtons/Greyhound-1696348684721?q=65&amp;w=600&amp;px=auto&amp;auto=format"
                width="16"
                height="16"
                className="w-3 h-3 sm:w-4 sm:h-4 ml-1 autoAnimate"
                alt="Greyhound-image"
                loading="lazy"
                title="Greyhound"
              />
              <span className="ml-1 autoAnimate text-text_Quaternary text-xs capitalize pr-[2px] md:text-sm text-nowrap w-full truncate font-lato-bold font-semibold md:font-semibold">
                Greyhound
              </span>
            </div>
            <div className="absolute top-0 left-0 w-full h-full min-h-9 rounded-[4px]"></div>
          </div>
        </span>
      </div>
      {/* <div className="flex flex-col items-center justify-start w-full scrollSmooth no-scrollbar">
        <div className="flex overflow-auto w-full scrollSmooth no-scrollbar">
          <div title="QuickButtons-0" className="grid grid-row-2">
            <span
              onClick={navigateAviatorCasinoVideo}
              title="Aviator"
              className="col-span-1 px-[3px] py-[3px]"
            >
              <div
                className="relative w-full active:scale-95 cursor-pointer bg-bg_SkeletonBgLoaderColor transition-all ease-in-out duration-150 shadow-quickAccessBtnBoxShadows min-h-9 bg-cover bg-center bg-no-repeat rounded-[4px] overflow-hidden undefined"
                style={{
                  backgroundImage:
                    "url('https://promotions-material.s3.ap-south-1.amazonaws.com/quickButtons/Aviator-1705911963116')",
                }}
              >
                <div className="flex justify-center w-full h-full min-h-9 relative z-10 items-center min-w-[175px] sm:min-w-[240px] md:min-w-[280px] pl-[5px] pt-[2px] pb-[2px] pr-1 opacity-100">
                  <img
                    src="https://promotions-material.s3.ap-south-1.amazonaws.com/quickButtons/Aviator-1705911963125?q=65&amp;w=600&amp;px=auto&amp;auto=format"
                    width="16"
                    height="16"
                    className="w-4 h-4 sm:w-5 sm:h-5 ml-1 autoAnimate"
                    alt="Aviator-image"
                    loading="lazy"
                    title="Aviator"
                  />
                  <span className="ml-1 autoAnimate text-text_Quaternary text-xs capitalize pr-[2px] md:text-sm text-nowrap w-full truncate font-lato-bold font-semibold md:font-semibold">
                    Aviator
                  </span>
                </div>
                <div className="absolute top-0 left-0 w-full h-full min-h-9 rounded-[4px]"></div>
              </div>{" "}
            </span>
            <span title="Aura" className="col-span-1 px-[3px] py-[3px]">
              <div
                className="relative w-full active:scale-95 cursor-pointer bg-bg_SkeletonBgLoaderColor transition-all ease-in-out duration-150 shadow-quickAccessBtnBoxShadows min-h-9 bg-cover bg-center bg-no-repeat rounded-[4px] overflow-hidden undefined"
                style={{
                  backgroundImage:
                    "url('https://promotions-material.s3.ap-south-1.amazonaws.com/quickButtons/Aura-1705912199645')",
                }}
              >
                <div className="flex justify-center w-full h-full min-h-9 relative z-10 items-center min-w-[175px] sm:min-w-[240px] md:min-w-[280px] pl-[5px] pt-[2px] pb-[2px] pr-1 opacity-100">
                  <img
                    src="https://promotions-material.s3.ap-south-1.amazonaws.com/quickButtons/Aura-1705912199647?q=65&amp;w=600&amp;px=auto&amp;auto=format"
                    width="16"
                    height="16"
                    className="w-4 h-4 sm:w-5 sm:h-5 ml-1 autoAnimate"
                    alt="Aura-image"
                    loading="lazy"
                    title="Aura"
                  />
                  <span className="ml-1 autoAnimate text-text_Quaternary text-xs capitalize pr-[2px] md:text-sm text-nowrap w-full truncate font-lato-bold font-semibold md:font-semibold">
                    Aura
                  </span>
                </div>
                <div className="absolute top-0 left-0 w-full h-full min-h-9 rounded-[4px]"></div>
              </div>
            </span>
          </div>
          <div title="QuickButtons-2" className="grid grid-row-2">
            <span title="Mines" className="col-span-1 px-[3px] py-[3px]">
              <div
                className="relative w-full active:scale-95 cursor-pointer bg-bg_SkeletonBgLoaderColor transition-all ease-in-out duration-150 shadow-quickAccessBtnBoxShadows min-h-9 bg-cover bg-center bg-no-repeat rounded-[4px] overflow-hidden undefined"
                style={{
                  backgroundImage:
                    "url('https://promotions-material.s3.ap-south-1.amazonaws.com/quickButtons/Mines.webp')",
                }}
              >
                <div className="flex justify-center w-full h-full min-h-9 relative z-10 items-center min-w-[175px] sm:min-w-[240px] md:min-w-[280px] pl-[5px] pt-[2px] pb-[2px] pr-1 opacity-100">
                  <img
                    src="https://promotions-material.s3.ap-south-1.amazonaws.com/quickButtons/diamond_icon.png?q=65&amp;w=600&amp;px=auto&amp;auto=format"
                    width="16"
                    height="16"
                    className="w-4 h-4 sm:w-5 sm:h-5 ml-1 autoAnimate"
                    alt="Mines-image"
                    loading="lazy"
                    title="Mines"
                  />
                  <span className="ml-1 autoAnimate text-text_Quaternary text-xs capitalize pr-[2px] md:text-sm text-nowrap w-full truncate font-lato-bold font-semibold md:font-semibold">
                    Mines
                  </span>
                </div>
                <div className="absolute top-0 left-0 w-full h-full min-h-9 rounded-[4px]"></div>
              </div>{" "}
            </span>
            <span title="Limbo" className="col-span-1 px-[3px] py-[3px]">
              <div
                className="relative w-full active:scale-95 cursor-pointer bg-bg_SkeletonBgLoaderColor transition-all ease-in-out duration-150 shadow-quickAccessBtnBoxShadows min-h-9 bg-cover bg-center bg-no-repeat rounded-[4px] overflow-hidden undefined"
                style={{
                  backgroundImage:
                    "url('https://promotions-material.s3.ap-south-1.amazonaws.com/quickButtons/Limbo.webp')",
                }}
              >
                <div className="flex justify-center w-full h-full min-h-9 relative z-10 items-center min-w-[175px] sm:min-w-[240px] md:min-w-[280px] pl-[5px] pt-[2px] pb-[2px] pr-1 opacity-100">
                  <img
                    src="https://promotions-material.s3.ap-south-1.amazonaws.com/quickButtons/Aviator-1705911963125?q=65&amp;w=600&amp;px=auto&amp;auto=format"
                    width="16"
                    height="16"
                    className="w-4 h-4 sm:w-5 sm:h-5 ml-1 autoAnimate"
                    alt="Limbo-image"
                    loading="lazy"
                    title="Limbo"
                  />
                  <span className="ml-1 autoAnimate text-text_Quaternary text-xs capitalize pr-[2px] md:text-sm text-nowrap w-full truncate font-lato-bold font-semibold md:font-semibold">
                    Limbo
                  </span>
                </div>
                <div className="absolute top-0 left-0 w-full h-full min-h-9 rounded-[4px]"></div>
              </div>
            </span>
          </div>
          <div title="QuickButtons-4" className="grid grid-row-2">
            <span title="Color Game" className="col-span-1 px-[3px] py-[3px]">
              <div
                className="relative w-full active:scale-95 cursor-pointer bg-bg_SkeletonBgLoaderColor transition-all ease-in-out duration-150 shadow-quickAccessBtnBoxShadows min-h-9 bg-cover bg-center bg-no-repeat rounded-[4px] overflow-hidden undefined"
                style={{
                  backgroundImage:
                    "url('https://promomaterial.imgix.net/quickButtons/ColorGame-1718191763420')",
                }}
              >
                <div className="flex justify-center w-full h-full min-h-9 relative z-10 items-center min-w-[175px] sm:min-w-[240px] md:min-w-[280px] pl-[5px] pt-[2px] pb-[2px] pr-1 opacity-100">
                  <img
                    src="https://promomaterial.imgix.net/quickButtons/ColorGame-1718191763431"
                    width="16"
                    height="16"
                    className="w-4 h-4 sm:w-5 sm:h-5 ml-1 autoAnimate"
                    alt="Color Game-image"
                    loading="lazy"
                    title="Color Game"
                  />
                  <span className="ml-1 autoAnimate text-text_Quaternary text-xs capitalize pr-[2px] md:text-sm text-nowrap w-full truncate font-lato-bold font-semibold md:font-semibold">
                    Color Game
                  </span>
                </div>
                <div className="absolute top-0 left-0 w-full h-full min-h-9 rounded-[4px]"></div>
              </div>{" "}
            </span>
            <span
              title="Tower Legends"
              className="col-span-1 px-[3px] py-[3px]"
            >
              <div
                className="relative w-full active:scale-95 cursor-pointer bg-bg_SkeletonBgLoaderColor transition-all ease-in-out duration-150 shadow-quickAccessBtnBoxShadows min-h-9 bg-cover bg-center bg-no-repeat rounded-[4px] overflow-hidden undefined"
                style={{
                  backgroundImage:
                    "url('https://promomaterial.imgix.net/quickButtons/TowerLegends-1722000145463')",
                }}
              >
                <div className="flex justify-center w-full h-full min-h-9 relative z-10 items-center min-w-[175px] sm:min-w-[240px] md:min-w-[280px] pl-[5px] pt-[2px] pb-[2px] pr-1 opacity-100">
                  <img
                    src="https://promomaterial.imgix.net/quickButtons/TowerLegends-1722000145474"
                    width="16"
                    height="16"
                    className="w-4 h-4 sm:w-5 sm:h-5 ml-1 autoAnimate"
                    alt="Tower Legends-image"
                    loading="lazy"
                    title="Tower Legends"
                  />
                  <span className="ml-1 autoAnimate text-text_Quaternary text-xs capitalize pr-[2px] md:text-sm text-nowrap w-full truncate font-lato-bold font-semibold md:font-semibold">
                    Tower Legends
                  </span>
                </div>
                <div className="absolute top-0 left-0 w-full h-full min-h-9 rounded-[4px]"></div>
              </div>
            </span>
          </div>
          <div title="QuickButtons-6" className="grid grid-row-2">
            <span title="Evolution" className="col-span-1 px-[3px] py-[3px]">
              <div
                className="relative w-full active:scale-95 cursor-pointer bg-bg_SkeletonBgLoaderColor transition-all ease-in-out duration-150 shadow-quickAccessBtnBoxShadows min-h-9 bg-cover bg-center bg-no-repeat rounded-[4px] overflow-hidden undefined"
                style={{
                  backgroundImage:
                    "url('https://promotions-material.s3.ap-south-1.amazonaws.com/quickButtons/Evolution-1705911275808')",
                }}
              >
                <div className="flex justify-center w-full h-full min-h-9 relative z-10 items-center min-w-[175px] sm:min-w-[240px] md:min-w-[280px] pl-[5px] pt-[2px] pb-[2px] pr-1 opacity-100">
                  <img
                    src="https://promotions-material.s3.ap-south-1.amazonaws.com/quickButtons/Evolution-1705911275817?q=65&amp;w=600&amp;px=auto&amp;auto=format"
                    width="16"
                    height="16"
                    className="w-4 h-4 sm:w-5 sm:h-5 ml-1 autoAnimate"
                    alt="Evolution-image"
                    loading="lazy"
                    title="Evolution"
                  />
                  <span className="ml-1 autoAnimate text-text_Quaternary text-xs capitalize pr-[2px] md:text-sm text-nowrap w-full truncate font-lato-bold font-semibold md:font-semibold">
                    Evolution
                  </span>
                </div>
                <div className="absolute top-0 left-0 w-full h-full min-h-9 rounded-[4px]"></div>
              </div>{" "}
            </span>
            <span title="Sportsbook" className="col-span-1 px-[3px] py-[3px]">
              <div
                className="relative w-full active:scale-95 cursor-pointer bg-bg_SkeletonBgLoaderColor transition-all ease-in-out duration-150 shadow-quickAccessBtnBoxShadows min-h-9 bg-cover bg-center bg-no-repeat rounded-[4px] overflow-hidden undefined"
                style={{
                  backgroundImage:
                    "url('https://promotions-material.s3.ap-south-1.amazonaws.com/quickButtons/Sportsbook-1705911352020')",
                }}
              >
                <div className="flex justify-center w-full h-full min-h-9 relative z-10 items-center min-w-[175px] sm:min-w-[240px] md:min-w-[280px] pl-[5px] pt-[2px] pb-[2px] pr-1 opacity-100">
                  <img
                    src="https://promotions-material.s3.ap-south-1.amazonaws.com/quickButtons/Sportsbook-1705911352029?q=65&amp;w=600&amp;px=auto&amp;auto=format"
                    width="16"
                    height="16"
                    className="w-4 h-4 sm:w-5 sm:h-5 ml-1 autoAnimate"
                    alt="Sportsbook-image"
                    loading="lazy"
                    title="Sportsbook"
                  />
                  <span className="ml-1 autoAnimate text-text_Quaternary text-xs capitalize pr-[2px] md:text-sm text-nowrap w-full truncate font-lato-bold font-semibold md:font-semibold">
                    Sportsbook
                  </span>
                </div>
                <div className="absolute top-0 left-0 w-full h-full min-h-9 rounded-[4px]"></div>
              </div>
            </span>
          </div>
          <div title="QuickButtons-8" className="grid grid-row-2">
            <span title="Live Casinos" className="col-span-1 px-[3px] py-[3px]">
              <div
                className="relative w-full active:scale-95 cursor-pointer bg-bg_SkeletonBgLoaderColor transition-all ease-in-out duration-150 shadow-quickAccessBtnBoxShadows min-h-9 bg-cover bg-center bg-no-repeat rounded-[4px] overflow-hidden undefined"
                style={{
                  backgroundImage:
                    "url('https://promotions-material.s3.ap-south-1.amazonaws.com/sportsButtons/cricket-1696348461938')",
                }}
              >
                <div className="flex justify-center w-full h-full min-h-9 relative z-10 items-center min-w-[175px] sm:min-w-[240px] md:min-w-[280px] pl-[5px] pt-[2px] pb-[2px] pr-1 opacity-100">
                  <img
                    src="https://promotions-material.s3.ap-south-1.amazonaws.com/quickButtons/LiveCasinos-1705911704279?q=65&amp;w=600&amp;px=auto&amp;auto=format"
                    width="16"
                    height="16"
                    className="w-4 h-4 sm:w-5 sm:h-5 ml-1 autoAnimate"
                    alt="Live Casinos-image"
                    loading="lazy"
                    title="Live Casinos"
                  />
                  <span className="ml-1 autoAnimate text-text_Quaternary text-xs capitalize pr-[2px] md:text-sm text-nowrap w-full truncate font-lato-bold font-semibold md:font-semibold">
                    Live Casinos
                  </span>
                </div>
                <div className="absolute top-0 left-0 w-full h-full min-h-9 rounded-[4px]"></div>
              </div>{" "}
            </span>
            <span title="e-Cricket" className="col-span-1 px-[3px] py-[3px]">
              <div
                className="relative w-full active:scale-95 cursor-pointer bg-bg_SkeletonBgLoaderColor transition-all ease-in-out duration-150 shadow-quickAccessBtnBoxShadows min-h-9 bg-cover bg-center bg-no-repeat rounded-[4px] overflow-hidden undefined"
                style={{
                  backgroundImage:
                    "url('https://promotions-material.s3.ap-south-1.amazonaws.com/sportsButtons/cricket-1696348461938')",
                }}
              >
                <div className="flex justify-center w-full h-full min-h-9 relative z-10 items-center min-w-[175px] sm:min-w-[240px] md:min-w-[280px] pl-[5px] pt-[2px] pb-[2px] pr-1 opacity-100">
                  <img
                    src="https://promotions-material.s3.ap-south-1.amazonaws.com/quickButtons/e-Cricket-1705911799122?q=65&amp;w=600&amp;px=auto&amp;auto=format"
                    width="16"
                    height="16"
                    className="w-4 h-4 sm:w-5 sm:h-5 ml-1 autoAnimate"
                    alt="e-Cricket-image"
                    loading="lazy"
                    title="e-Cricket"
                  />
                  <span className="ml-1 autoAnimate text-text_Quaternary text-xs capitalize pr-[2px] md:text-sm text-nowrap w-full truncate font-lato-bold font-semibold md:font-semibold">
                    e-Cricket
                  </span>
                </div>
                <div className="absolute top-0 left-0 w-full h-full min-h-9 rounded-[4px]"></div>
              </div>
            </span>
          </div>
          <div title="QuickButtons-10" className="grid grid-row-2">
            <span title="Card Games" className="col-span-1 px-[3px] py-[3px]">
              <div
                className="relative w-full active:scale-95 cursor-pointer bg-bg_SkeletonBgLoaderColor transition-all ease-in-out duration-150 shadow-quickAccessBtnBoxShadows min-h-9 bg-cover bg-center bg-no-repeat rounded-[4px] overflow-hidden undefined"
                style={{
                  backgroundImage:
                    "url('https://promotions-material.s3.ap-south-1.amazonaws.com/sportsButtons/cricket-1696348461938')",
                }}
              >
                <div className="flex justify-center w-full h-full min-h-9 relative z-10 items-center min-w-[175px] sm:min-w-[240px] md:min-w-[280px] pl-[5px] pt-[2px] pb-[2px] pr-1 opacity-100">
                  <img
                    src="https://promotions-material.s3.ap-south-1.amazonaws.com/quickButtons/CardGames-1705911853726?q=65&amp;w=600&amp;px=auto&amp;auto=format"
                    width="16"
                    height="16"
                    className="w-4 h-4 sm:w-5 sm:h-5 ml-1 autoAnimate"
                    alt="Card Games-image"
                    loading="lazy"
                    title="Card Games"
                  />
                  <span className="ml-1 autoAnimate text-text_Quaternary text-xs capitalize pr-[2px] md:text-sm text-nowrap w-full truncate font-lato-bold font-semibold md:font-semibold">
                    Card Games
                  </span>
                </div>
                <div className="absolute top-0 left-0 w-full h-full min-h-9 rounded-[4px]"></div>
              </div>{" "}
            </span>
            <span title="Slot Games" className="col-span-1 px-[3px] py-[3px]">
              <div
                className="relative w-full active:scale-95 cursor-pointer bg-bg_SkeletonBgLoaderColor transition-all ease-in-out duration-150 shadow-quickAccessBtnBoxShadows min-h-9 bg-cover bg-center bg-no-repeat rounded-[4px] overflow-hidden undefined"
                style={{
                  backgroundImage:
                    "url('https://promotions-material.s3.ap-south-1.amazonaws.com/sportsButtons/cricket-1696348461938')",
                }}
              >
                <div className="flex justify-center w-full h-full min-h-9 relative z-10 items-center min-w-[175px] sm:min-w-[240px] md:min-w-[280px] pl-[5px] pt-[2px] pb-[2px] pr-1 opacity-100">
                  <img
                    src="https://promotions-material.s3.ap-south-1.amazonaws.com/quickButtons/SlotGames-1705912015300?q=65&amp;w=600&amp;px=auto&amp;auto=format"
                    width="16"
                    height="16"
                    className="w-4 h-4 sm:w-5 sm:h-5 ml-1 autoAnimate"
                    alt="Slot Games-image"
                    loading="lazy"
                    title="Slot Games"
                  />
                  <span className="ml-1 autoAnimate text-text_Quaternary text-xs capitalize pr-[2px] md:text-sm text-nowrap w-full truncate font-lato-bold font-semibold md:font-semibold">
                    Slot Games
                  </span>
                </div>
                <div className="absolute top-0 left-0 w-full h-full min-h-9 rounded-[4px]"></div>
              </div>
            </span>
          </div>
          <div title="QuickButtons-12" className="grid grid-row-2">
            <span
              title="Multiplayer Games"
              className="col-span-1 px-[3px] py-[3px]"
            >
              <div
                className="relative w-full active:scale-95 cursor-pointer bg-bg_SkeletonBgLoaderColor transition-all ease-in-out duration-150 shadow-quickAccessBtnBoxShadows min-h-9 bg-cover bg-center bg-no-repeat rounded-[4px] overflow-hidden undefined"
                style={{
                  backgroundImage:
                    "url('https://promotions-material.s3.ap-south-1.amazonaws.com/sportsButtons/cricket-1696348461938')",
                }}
              >
                <div className="flex justify-center w-full h-full min-h-9 relative z-10 items-center min-w-[175px] sm:min-w-[240px] md:min-w-[280px] pl-[5px] pt-[2px] pb-[2px] pr-1 opacity-100">
                  <img
                    src="https://promotions-material.s3.ap-south-1.amazonaws.com/quickButtons/MultiplayerGames-1705912077489?q=65&amp;w=600&amp;px=auto&amp;auto=format"
                    width="16"
                    height="16"
                    className="w-4 h-4 sm:w-5 sm:h-5 ml-1 autoAnimate"
                    alt="Multiplayer Games-image"
                    loading="lazy"
                    title="Multiplayer Games"
                  />
                  <span className="ml-1 autoAnimate text-text_Quaternary text-xs capitalize pr-[2px] md:text-sm text-nowrap w-full truncate font-lato-bold font-semibold md:font-semibold">
                    Multiplayer Games
                  </span>
                </div>
                <div className="absolute top-0 left-0 w-full h-full min-h-9 rounded-[4px]"></div>
              </div>{" "}
            </span>
            <span
              title="Fishing games"
              className="col-span-1 px-[3px] py-[3px]"
            >
              <div
                className="relative w-full active:scale-95 cursor-pointer bg-bg_SkeletonBgLoaderColor transition-all ease-in-out duration-150 shadow-quickAccessBtnBoxShadows min-h-9 bg-cover bg-center bg-no-repeat rounded-[4px] overflow-hidden undefined"
                style={{
                  backgroundImage:
                    "url('https://promotions-material.s3.ap-south-1.amazonaws.com/sportsButtons/cricket-1696348461938')",
                }}
              >
                <div className="flex justify-center w-full h-full min-h-9 relative z-10 items-center min-w-[175px] sm:min-w-[240px] md:min-w-[280px] pl-[5px] pt-[2px] pb-[2px] pr-1 opacity-100">
                  <img
                    src="https://promotions-material.s3.ap-south-1.amazonaws.com/quickButtons/Fishinggames-1705912252627?q=65&amp;w=600&amp;px=auto&amp;auto=format"
                    width="16"
                    height="16"
                    className="w-4 h-4 sm:w-5 sm:h-5 ml-1 autoAnimate"
                    alt="Fishing games-image"
                    loading="lazy"
                    title="Fishing games"
                  />
                  <span className="ml-1 autoAnimate text-text_Quaternary text-xs capitalize pr-[2px] md:text-sm text-nowrap w-full truncate font-lato-bold font-semibold md:font-semibold">
                    Fishing games
                  </span>
                </div>
                <div className="absolute top-0 left-0 w-full h-full min-h-9 rounded-[4px]"></div>
              </div>
            </span>
          </div>
          <div title="QuickButtons-0" className="grid grid-row-2">
            <span title="Aviator" className="col-span-1 px-[3px] py-[3px]">
              <div
                className="relative w-full active:scale-95 cursor-pointer bg-bg_SkeletonBgLoaderColor transition-all ease-in-out duration-150 shadow-quickAccessBtnBoxShadows min-h-9 bg-cover bg-center bg-no-repeat rounded-[4px] overflow-hidden undefined"
                style={{
                  backgroundImage:
                    "url('https://promotions-material.s3.ap-south-1.amazonaws.com/sportsButtons/cricket-1696348461938')",
                }}
              >
                <div className="flex justify-center w-full h-full min-h-9 relative z-10 items-center min-w-[175px] sm:min-w-[240px] md:min-w-[280px] pl-[5px] pt-[2px] pb-[2px] pr-1 opacity-100">
                  <img
                    src="https://promotions-material.s3.ap-south-1.amazonaws.com/quickButtons/Aviator-1705911963125?q=65&amp;w=600&amp;px=auto&amp;auto=format"
                    width="16"
                    height="16"
                    className="w-4 h-4 sm:w-5 sm:h-5 ml-1 autoAnimate"
                    alt="Aviator-image"
                    loading="lazy"
                    title="Aviator"
                  />
                  <span className="ml-1 autoAnimate text-text_Quaternary text-xs capitalize pr-[2px] md:text-sm text-nowrap w-full truncate font-lato-bold font-semibold md:font-semibold">
                    Aviator
                  </span>
                </div>
                <div className="absolute top-0 left-0 w-full h-full min-h-9 rounded-[4px]"></div>
              </div>{" "}
            </span>
            <span title="Aura" className="col-span-1 px-[3px] py-[3px]">
              <div
                className="relative w-full active:scale-95 cursor-pointer bg-bg_SkeletonBgLoaderColor transition-all ease-in-out duration-150 shadow-quickAccessBtnBoxShadows min-h-9 bg-cover bg-center bg-no-repeat rounded-[4px] overflow-hidden undefined"
                style={{
                  backgroundImage:
                    "url('https://promotions-material.s3.ap-south-1.amazonaws.com/sportsButtons/cricket-1696348461938')",
                }}
              >
                <div className="flex justify-center w-full h-full min-h-9 relative z-10 items-center min-w-[175px] sm:min-w-[240px] md:min-w-[280px] pl-[5px] pt-[2px] pb-[2px] pr-1 opacity-100">
                  <img
                    src="https://promotions-material.s3.ap-south-1.amazonaws.com/quickButtons/Aura-1705912199647?q=65&amp;w=600&amp;px=auto&amp;auto=format"
                    width="16"
                    height="16"
                    className="w-4 h-4 sm:w-5 sm:h-5 ml-1 autoAnimate"
                    alt="Aura-image"
                    loading="lazy"
                    title="Aura"
                  />
                  <span className="ml-1 autoAnimate text-text_Quaternary text-xs capitalize pr-[2px] md:text-sm text-nowrap w-full truncate font-lato-bold font-semibold md:font-semibold">
                    Aura
                  </span>
                </div>
                <div className="absolute top-0 left-0 w-full h-full min-h-9 rounded-[4px]"></div>
              </div>
            </span>
          </div>
          <div title="QuickButtons-2" className="grid grid-row-2">
            <span title="Mines" className="col-span-1 px-[3px] py-[3px]">
              <div
                className="relative w-full active:scale-95 cursor-pointer bg-bg_SkeletonBgLoaderColor transition-all ease-in-out duration-150 shadow-quickAccessBtnBoxShadows min-h-9 bg-cover bg-center bg-no-repeat rounded-[4px] overflow-hidden undefined"
                style={{
                  backgroundImage:
                    "url('https://promotions-material.s3.ap-south-1.amazonaws.com/sportsButtons/cricket-1696348461938')",
                }}
              >
                <div className="flex justify-center w-full h-full min-h-9 relative z-10 items-center min-w-[175px] sm:min-w-[240px] md:min-w-[280px] pl-[5px] pt-[2px] pb-[2px] pr-1 opacity-100">
                  <img
                    src="https://promotions-material.s3.ap-south-1.amazonaws.com/quickButtons/diamond_icon.png?q=65&amp;w=600&amp;px=auto&amp;auto=format"
                    width="16"
                    height="16"
                    className="w-4 h-4 sm:w-5 sm:h-5 ml-1 autoAnimate"
                    alt="Mines-image"
                    loading="lazy"
                    title="Mines"
                  />
                  <span className="ml-1 autoAnimate text-text_Quaternary text-xs capitalize pr-[2px] md:text-sm text-nowrap w-full truncate font-lato-bold font-semibold md:font-semibold">
                    Mines
                  </span>
                </div>
                <div className="absolute top-0 left-0 w-full h-full min-h-9 rounded-[4px]"></div>
              </div>{" "}
            </span>
            <span title="Limbo" className="col-span-1 px-[3px] py-[3px]">
              <div
                className="relative w-full active:scale-95 cursor-pointer bg-bg_SkeletonBgLoaderColor transition-all ease-in-out duration-150 shadow-quickAccessBtnBoxShadows min-h-9 bg-cover bg-center bg-no-repeat rounded-[4px] overflow-hidden undefined"
                style={{
                  backgroundImage:
                    "url('https://promotions-material.s3.ap-south-1.amazonaws.com/sportsButtons/cricket-1696348461938')",
                }}
              >
                <div className="flex justify-center w-full h-full min-h-9 relative z-10 items-center min-w-[175px] sm:min-w-[240px] md:min-w-[280px] pl-[5px] pt-[2px] pb-[2px] pr-1 opacity-100">
                  <img
                    src="https://promotions-material.s3.ap-south-1.amazonaws.com/quickButtons/Aviator-1705911963125?q=65&amp;w=600&amp;px=auto&amp;auto=format"
                    width="16"
                    height="16"
                    className="w-4 h-4 sm:w-5 sm:h-5 ml-1 autoAnimate"
                    alt="Limbo-image"
                    loading="lazy"
                    title="Limbo"
                  />
                  <span className="ml-1 autoAnimate text-text_Quaternary text-xs capitalize pr-[2px] md:text-sm text-nowrap w-full truncate font-lato-bold font-semibold md:font-semibold">
                    Limbo
                  </span>
                </div>
                <div className="absolute top-0 left-0 w-full h-full min-h-9 rounded-[4px]"></div>
              </div>
            </span>
          </div>
          <div title="QuickButtons-4" className="grid grid-row-2">
            <span title="Color Game" className="col-span-1 px-[3px] py-[3px]">
              <div
                className="relative w-full active:scale-95 cursor-pointer bg-bg_SkeletonBgLoaderColor transition-all ease-in-out duration-150 shadow-quickAccessBtnBoxShadows min-h-9 bg-cover bg-center bg-no-repeat rounded-[4px] overflow-hidden undefined"
                style={{
                  backgroundImage:
                    "url('https://promotions-material.s3.ap-south-1.amazonaws.com/sportsButtons/cricket-1696348461938')",
                }}
              >
                <div className="flex justify-center w-full h-full min-h-9 relative z-10 items-center min-w-[175px] sm:min-w-[240px] md:min-w-[280px] pl-[5px] pt-[2px] pb-[2px] pr-1 opacity-100">
                  <img
                    src="https://promomaterial.imgix.net/quickButtons/ColorGame-1718191763431"
                    width="16"
                    height="16"
                    className="w-4 h-4 sm:w-5 sm:h-5 ml-1 autoAnimate"
                    alt="Color Game-image"
                    loading="lazy"
                    title="Color Game"
                  />
                  <span className="ml-1 autoAnimate text-text_Quaternary text-xs capitalize pr-[2px] md:text-sm text-nowrap w-full truncate font-lato-bold font-semibold md:font-semibold">
                    Color Game
                  </span>
                </div>
                <div className="absolute top-0 left-0 w-full h-full min-h-9 rounded-[4px]"></div>
              </div>{" "}
            </span>
            <span
              title="Tower Legends"
              className="col-span-1 px-[3px] py-[3px]"
            >
              <div
                className="relative w-full active:scale-95 cursor-pointer bg-bg_SkeletonBgLoaderColor transition-all ease-in-out duration-150 shadow-quickAccessBtnBoxShadows min-h-9 bg-cover bg-center bg-no-repeat rounded-[4px] overflow-hidden undefined"
                style={{
                  backgroundImage:
                    "url('https://promotions-material.s3.ap-south-1.amazonaws.com/sportsButtons/cricket-1696348461938')",
                }}
              >
                <div className="flex justify-center w-full h-full min-h-9 relative z-10 items-center min-w-[175px] sm:min-w-[240px] md:min-w-[280px] pl-[5px] pt-[2px] pb-[2px] pr-1 opacity-100">
                  <img
                    src="https://promomaterial.imgix.net/quickButtons/TowerLegends-1722000145474"
                    width="16"
                    height="16"
                    className="w-4 h-4 sm:w-5 sm:h-5 ml-1 autoAnimate"
                    alt="Tower Legends-image"
                    loading="lazy"
                    title="Tower Legends"
                  />
                  <span className="ml-1 autoAnimate text-text_Quaternary text-xs capitalize pr-[2px] md:text-sm text-nowrap w-full truncate font-lato-bold font-semibold md:font-semibold">
                    Tower Legends
                  </span>
                </div>
                <div className="absolute top-0 left-0 w-full h-full min-h-9 rounded-[4px]"></div>
              </div>
            </span>
          </div>
          <div title="QuickButtons-6" className="grid grid-row-2">
            <span title="Evolution" className="col-span-1 px-[3px] py-[3px]">
              <div
                className="relative w-full active:scale-95 cursor-pointer bg-bg_SkeletonBgLoaderColor transition-all ease-in-out duration-150 shadow-quickAccessBtnBoxShadows min-h-9 bg-cover bg-center bg-no-repeat rounded-[4px] overflow-hidden undefined"
                style={{
                  backgroundImage:
                    "url('https://promotions-material.s3.ap-south-1.amazonaws.com/sportsButtons/cricket-1696348461938')",
                }}
              >
                <div className="flex justify-center w-full h-full min-h-9 relative z-10 items-center min-w-[175px] sm:min-w-[240px] md:min-w-[280px] pl-[5px] pt-[2px] pb-[2px] pr-1 opacity-100">
                  <img
                    src="https://promotions-material.s3.ap-south-1.amazonaws.com/quickButtons/Evolution-1705911275817?q=65&amp;w=600&amp;px=auto&amp;auto=format"
                    width="16"
                    height="16"
                    className="w-4 h-4 sm:w-5 sm:h-5 ml-1 autoAnimate"
                    alt="Evolution-image"
                    loading="lazy"
                    title="Evolution"
                  />
                  <span className="ml-1 autoAnimate text-text_Quaternary text-xs capitalize pr-[2px] md:text-sm text-nowrap w-full truncate font-lato-bold font-semibold md:font-semibold">
                    Evolution
                  </span>
                </div>
                <div className="absolute top-0 left-0 w-full h-full min-h-9 rounded-[4px]"></div>
              </div>{" "}
            </span>
            <span title="Sportsbook" className="col-span-1 px-[3px] py-[3px]">
              <div
                className="relative w-full active:scale-95 cursor-pointer bg-bg_SkeletonBgLoaderColor transition-all ease-in-out duration-150 shadow-quickAccessBtnBoxShadows min-h-9 bg-cover bg-center bg-no-repeat rounded-[4px] overflow-hidden undefined"
                style={{
                  backgroundImage:
                    "url('https://promotions-material.s3.ap-south-1.amazonaws.com/sportsButtons/cricket-1696348461938')",
                }}
              >
                <div className="flex justify-center w-full h-full min-h-9 relative z-10 items-center min-w-[175px] sm:min-w-[240px] md:min-w-[280px] pl-[5px] pt-[2px] pb-[2px] pr-1 opacity-100">
                  <img
                    src="https://promotions-material.s3.ap-south-1.amazonaws.com/quickButtons/Sportsbook-1705911352029?q=65&amp;w=600&amp;px=auto&amp;auto=format"
                    width="16"
                    height="16"
                    className="w-4 h-4 sm:w-5 sm:h-5 ml-1 autoAnimate"
                    alt="Sportsbook-image"
                    loading="lazy"
                    title="Sportsbook"
                  />
                  <span className="ml-1 autoAnimate text-text_Quaternary text-xs capitalize pr-[2px] md:text-sm text-nowrap w-full truncate font-lato-bold font-semibold md:font-semibold">
                    Sportsbook
                  </span>
                </div>
                <div className="absolute top-0 left-0 w-full h-full min-h-9 rounded-[4px]"></div>
              </div>
            </span>
          </div>
          <div title="QuickButtons-8" className="grid grid-row-2">
            <span title="Live Casinos" className="col-span-1 px-[3px] py-[3px]">
              <div
                className="relative w-full active:scale-95 cursor-pointer bg-bg_SkeletonBgLoaderColor transition-all ease-in-out duration-150 shadow-quickAccessBtnBoxShadows min-h-9 bg-cover bg-center bg-no-repeat rounded-[4px] overflow-hidden undefined"
                style={{
                  backgroundImage:
                    "url('https://promotions-material.s3.ap-south-1.amazonaws.com/sportsButtons/cricket-1696348461938')",
                }}
              >
                <div className="flex justify-center w-full h-full min-h-9 relative z-10 items-center min-w-[175px] sm:min-w-[240px] md:min-w-[280px] pl-[5px] pt-[2px] pb-[2px] pr-1 opacity-100">
                  <img
                    src="https://promotions-material.s3.ap-south-1.amazonaws.com/quickButtons/LiveCasinos-1705911704279?q=65&amp;w=600&amp;px=auto&amp;auto=format"
                    width="16"
                    height="16"
                    className="w-4 h-4 sm:w-5 sm:h-5 ml-1 autoAnimate"
                    alt="Live Casinos-image"
                    loading="lazy"
                    title="Live Casinos"
                  />
                  <span className="ml-1 autoAnimate text-text_Quaternary text-xs capitalize pr-[2px] md:text-sm text-nowrap w-full truncate font-lato-bold font-semibold md:font-semibold">
                    Live Casinos
                  </span>
                </div>
                <div className="absolute top-0 left-0 w-full h-full min-h-9 rounded-[4px]"></div>
              </div>{" "}
            </span>
            <span title="e-Cricket" className="col-span-1 px-[3px] py-[3px]">
              <div
                className="relative w-full active:scale-95 cursor-pointer bg-bg_SkeletonBgLoaderColor transition-all ease-in-out duration-150 shadow-quickAccessBtnBoxShadows min-h-9 bg-cover bg-center bg-no-repeat rounded-[4px] overflow-hidden undefined"
                style={{
                  backgroundImage:
                    "url('https://promotions-material.s3.ap-south-1.amazonaws.com/sportsButtons/cricket-1696348461938')",
                }}
              >
                <div className="flex justify-center w-full h-full min-h-9 relative z-10 items-center min-w-[175px] sm:min-w-[240px] md:min-w-[280px] pl-[5px] pt-[2px] pb-[2px] pr-1 opacity-100">
                  <img
                    src="https://promotions-material.s3.ap-south-1.amazonaws.com/quickButtons/e-Cricket-1705911799122?q=65&amp;w=600&amp;px=auto&amp;auto=format"
                    width="16"
                    height="16"
                    className="w-4 h-4 sm:w-5 sm:h-5 ml-1 autoAnimate"
                    alt="e-Cricket-image"
                    loading="lazy"
                    title="e-Cricket"
                  />
                  <span className="ml-1 autoAnimate text-text_Quaternary text-xs capitalize pr-[2px] md:text-sm text-nowrap w-full truncate font-lato-bold font-semibold md:font-semibold">
                    e-Cricket
                  </span>
                </div>
                <div className="absolute top-0 left-0 w-full h-full min-h-9 rounded-[4px]"></div>
              </div>
            </span>
          </div>
          <div title="QuickButtons-10" className="grid grid-row-2">
            <span title="Card Games" className="col-span-1 px-[3px] py-[3px]">
              <div
                className="relative w-full active:scale-95 cursor-pointer bg-bg_SkeletonBgLoaderColor transition-all ease-in-out duration-150 shadow-quickAccessBtnBoxShadows min-h-9 bg-cover bg-center bg-no-repeat rounded-[4px] overflow-hidden undefined"
                style={{
                  backgroundImage:
                    "url('https://promotions-material.s3.ap-south-1.amazonaws.com/sportsButtons/cricket-1696348461938')",
                }}
              >
                <div className="flex justify-center w-full h-full min-h-9 relative z-10 items-center min-w-[175px] sm:min-w-[240px] md:min-w-[280px] pl-[5px] pt-[2px] pb-[2px] pr-1 opacity-100">
                  <img
                    src="https://promotions-material.s3.ap-south-1.amazonaws.com/quickButtons/CardGames-1705911853726?q=65&amp;w=600&amp;px=auto&amp;auto=format"
                    width="16"
                    height="16"
                    className="w-4 h-4 sm:w-5 sm:h-5 ml-1 autoAnimate"
                    alt="Card Games-image"
                    loading="lazy"
                    title="Card Games"
                  />
                  <span className="ml-1 autoAnimate text-text_Quaternary text-xs capitalize pr-[2px] md:text-sm text-nowrap w-full truncate font-lato-bold font-semibold md:font-semibold">
                    Card Games
                  </span>
                </div>
                <div className="absolute top-0 left-0 w-full h-full min-h-9 rounded-[4px]"></div>
              </div>{" "}
            </span>
            <span title="Slot Games" className="col-span-1 px-[3px] py-[3px]">
              <div
                className="relative w-full active:scale-95 cursor-pointer bg-bg_SkeletonBgLoaderColor transition-all ease-in-out duration-150 shadow-quickAccessBtnBoxShadows min-h-9 bg-cover bg-center bg-no-repeat rounded-[4px] overflow-hidden undefined"
                style={{
                  backgroundImage:
                    "url('https://promotions-material.s3.ap-south-1.amazonaws.com/sportsButtons/cricket-1696348461938')",
                }}
              >
                <div className="flex justify-center w-full h-full min-h-9 relative z-10 items-center min-w-[175px] sm:min-w-[240px] md:min-w-[280px] pl-[5px] pt-[2px] pb-[2px] pr-1 opacity-100">
                  <img
                    src="https://promotions-material.s3.ap-south-1.amazonaws.com/quickButtons/SlotGames-1705912015300?q=65&amp;w=600&amp;px=auto&amp;auto=format"
                    width="16"
                    height="16"
                    className="w-4 h-4 sm:w-5 sm:h-5 ml-1 autoAnimate"
                    alt="Slot Games-image"
                    loading="lazy"
                    title="Slot Games"
                  />
                  <span className="ml-1 autoAnimate text-text_Quaternary text-xs capitalize pr-[2px] md:text-sm text-nowrap w-full truncate font-lato-bold font-semibold md:font-semibold">
                    Slot Games
                  </span>
                </div>
                <div className="absolute top-0 left-0 w-full h-full min-h-9 rounded-[4px]"></div>
              </div>
            </span>
          </div>
          <div title="QuickButtons-12" className="grid grid-row-2">
            <span
              title="Multiplayer Games"
              className="col-span-1 px-[3px] py-[3px]"
            >
              <div
                className="relative w-full active:scale-95 cursor-pointer bg-bg_SkeletonBgLoaderColor transition-all ease-in-out duration-150 shadow-quickAccessBtnBoxShadows min-h-9 bg-cover bg-center bg-no-repeat rounded-[4px] overflow-hidden undefined"
                style={{
                  backgroundImage:
                    "url('https://promotions-material.s3.ap-south-1.amazonaws.com/sportsButtons/cricket-1696348461938')",
                }}
              >
                <div className="flex justify-center w-full h-full min-h-9 relative z-10 items-center min-w-[175px] sm:min-w-[240px] md:min-w-[280px] pl-[5px] pt-[2px] pb-[2px] pr-1 opacity-100">
                  <img
                    src="https://promotions-material.s3.ap-south-1.amazonaws.com/quickButtons/MultiplayerGames-1705912077489"
                    width="16"
                    height="16"
                    className="w-4 h-4 sm:w-5 sm:h-5 ml-1 autoAnimate"
                    alt="Multiplayer Games-image"
                    loading="lazy"
                    title="Multiplayer Games"
                  />
                  <span className="ml-1 autoAnimate text-text_Quaternary text-xs capitalize pr-[2px] md:text-sm text-nowrap w-full truncate font-lato-bold font-semibold md:font-semibold">
                    Multiplayer Games
                  </span>
                </div>
                <div className="absolute top-0 left-0 w-full h-full min-h-9 rounded-[4px]"></div>
              </div>{" "}
            </span>
            <span
              title="Fishing games"
              className="col-span-1 px-[3px] py-[3px]"
            >
              <div
                className="relative w-full active:scale-95 cursor-pointer bg-bg_SkeletonBgLoaderColor transition-all ease-in-out duration-150 shadow-quickAccessBtnBoxShadows min-h-9 bg-cover bg-center bg-no-repeat rounded-[4px] overflow-hidden undefined"
                style={{
                  backgroundImage:
                    "url('https://promotions-material.s3.ap-south-1.amazonaws.com/sportsButtons/cricket-1696348461938')",
                }}
              >
                <div className="flex justify-center w-full h-full min-h-9 relative z-10 items-center min-w-[175px] sm:min-w-[240px] md:min-w-[280px] pl-[5px] pt-[2px] pb-[2px] pr-1 opacity-100">
                  <img
                    src="https://promotions-material.s3.ap-south-1.amazonaws.com/quickButtons/Fishinggames-1705912252627"
                    width="16"
                    height="16"
                    className="w-4 h-4 sm:w-5 sm:h-5 ml-1 autoAnimate"
                    alt="Fishing games-image"
                    loading="lazy"
                    title="Fishing games"
                  />
                  <span className="ml-1 autoAnimate text-text_Quaternary text-xs capitalize pr-[2px] md:text-sm text-nowrap w-full truncate font-lato-bold font-semibold md:font-semibold">
                    Fishing games
                  </span>
                </div>
                <div className="absolute top-0 left-0 w-full h-full min-h-9 rounded-[4px]"></div>
              </div>
            </span>
          </div>
          <div title="QuickButtons-0" className="grid grid-row-2">
            <span title="Aviator" className="col-span-1 px-[3px] py-[3px]">
              <div
                className="relative w-full active:scale-95 cursor-pointer bg-bg_SkeletonBgLoaderColor transition-all ease-in-out duration-150 shadow-quickAccessBtnBoxShadows min-h-9 bg-cover bg-center bg-no-repeat rounded-[4px] overflow-hidden undefined"
                style={{
                  backgroundImage:
                    "url('https://promotions-material.s3.ap-south-1.amazonaws.com/sportsButtons/cricket-1696348461938')",
                }}
              >
                <div className="flex justify-center w-full h-full min-h-9 relative z-10 items-center min-w-[175px] sm:min-w-[240px] md:min-w-[280px] pl-[5px] pt-[2px] pb-[2px] pr-1 opacity-100">
                  <img
                    src="https://promotions-material.s3.ap-south-1.amazonaws.com/quickButtons/Aviator-1705911963125?q=65&amp;w=600&amp;px=auto&amp;auto=format"
                    width="16"
                    height="16"
                    className="w-4 h-4 sm:w-5 sm:h-5 ml-1 autoAnimate"
                    alt="Aviator-image"
                    loading="lazy"
                    title="Aviator"
                  />
                  <span className="ml-1 autoAnimate text-text_Quaternary text-xs capitalize pr-[2px] md:text-sm text-nowrap w-full truncate font-lato-bold font-semibold md:font-semibold">
                    Aviator
                  </span>
                </div>
                <div className="absolute top-0 left-0 w-full h-full min-h-9 rounded-[4px]"></div>
              </div>{" "}
            </span>
            <span title="Aura" className="col-span-1 px-[3px] py-[3px]">
              <div
                className="relative w-full active:scale-95 cursor-pointer bg-bg_SkeletonBgLoaderColor transition-all ease-in-out duration-150 shadow-quickAccessBtnBoxShadows min-h-9 bg-cover bg-center bg-no-repeat rounded-[4px] overflow-hidden undefined"
                style={{
                  backgroundImage:
                    "url('https://promotions-material.s3.ap-south-1.amazonaws.com/sportsButtons/cricket-1696348461938')",
                }}
              >
                <div className="flex justify-center w-full h-full min-h-9 relative z-10 items-center min-w-[175px] sm:min-w-[240px] md:min-w-[280px] pl-[5px] pt-[2px] pb-[2px] pr-1 opacity-100">
                  <img
                    src="https://promotions-material.s3.ap-south-1.amazonaws.com/quickButtons/Aura-1705912199647?q=65&amp;w=600&amp;px=auto&amp;auto=format"
                    width="16"
                    height="16"
                    className="w-4 h-4 sm:w-5 sm:h-5 ml-1 autoAnimate"
                    alt="Aura-image"
                    loading="lazy"
                    title="Aura"
                  />
                  <span className="ml-1 autoAnimate text-text_Quaternary text-xs capitalize pr-[2px] md:text-sm text-nowrap w-full truncate font-lato-bold font-semibold md:font-semibold">
                    Aura
                  </span>
                </div>
                <div className="absolute top-0 left-0 w-full h-full min-h-9 rounded-[4px]"></div>
              </div>
            </span>
          </div>
          <div title="QuickButtons-2" className="grid grid-row-2">
            <span title="Mines" className="col-span-1 px-[3px] py-[3px]">
              <div
                className="relative w-full active:scale-95 cursor-pointer bg-bg_SkeletonBgLoaderColor transition-all ease-in-out duration-150 shadow-quickAccessBtnBoxShadows min-h-9 bg-cover bg-center bg-no-repeat rounded-[4px] overflow-hidden undefined"
                style={{
                  backgroundImage:
                    "url('https://promotions-material.s3.ap-south-1.amazonaws.com/sportsButtons/cricket-1696348461938')",
                }}
              >
                <div className="flex justify-center w-full h-full min-h-9 relative z-10 items-center min-w-[175px] sm:min-w-[240px] md:min-w-[280px] pl-[5px] pt-[2px] pb-[2px] pr-1 opacity-100">
                  <img
                    src="https://promotions-material.s3.ap-south-1.amazonaws.com/quickButtons/diamond_icon.png?q=65&amp;w=600&amp;px=auto&amp;auto=format"
                    width="16"
                    height="16"
                    className="w-4 h-4 sm:w-5 sm:h-5 ml-1 autoAnimate"
                    alt="Mines-image"
                    loading="lazy"
                    title="Mines"
                  />
                  <span className="ml-1 autoAnimate text-text_Quaternary text-xs capitalize pr-[2px] md:text-sm text-nowrap w-full truncate font-lato-bold font-semibold md:font-semibold">
                    Mines
                  </span>
                </div>
                <div className="absolute top-0 left-0 w-full h-full min-h-9 rounded-[4px]"></div>
              </div>{" "}
            </span>
            <span title="Limbo" className="col-span-1 px-[3px] py-[3px]">
              <div
                className="relative w-full active:scale-95 cursor-pointer bg-bg_SkeletonBgLoaderColor transition-all ease-in-out duration-150 shadow-quickAccessBtnBoxShadows min-h-9 bg-cover bg-center bg-no-repeat rounded-[4px] overflow-hidden undefined"
                style={{
                  backgroundImage:
                    "url('https://promotions-material.s3.ap-south-1.amazonaws.com/sportsButtons/cricket-1696348461938')",
                }}
              >
                <div className="flex justify-center w-full h-full min-h-9 relative z-10 items-center min-w-[175px] sm:min-w-[240px] md:min-w-[280px] pl-[5px] pt-[2px] pb-[2px] pr-1 opacity-100">
                  <img
                    src="https://promotions-material.s3.ap-south-1.amazonaws.com/quickButtons/Aviator-1705911963125?q=65&amp;w=600&amp;px=auto&amp;auto=format"
                    width="16"
                    height="16"
                    className="w-4 h-4 sm:w-5 sm:h-5 ml-1 autoAnimate"
                    alt="Limbo-image"
                    loading="lazy"
                    title="Limbo"
                  />
                  <span className="ml-1 autoAnimate text-text_Quaternary text-xs capitalize pr-[2px] md:text-sm text-nowrap w-full truncate font-lato-bold font-semibold md:font-semibold">
                    Limbo
                  </span>
                </div>
                <div className="absolute top-0 left-0 w-full h-full min-h-9 rounded-[4px]"></div>
              </div>
            </span>
          </div>
          <div title="QuickButtons-4" className="grid grid-row-2">
            <span title="Color Game" className="col-span-1 px-[3px] py-[3px]">
              <div
                className="relative w-full active:scale-95 cursor-pointer bg-bg_SkeletonBgLoaderColor transition-all ease-in-out duration-150 shadow-quickAccessBtnBoxShadows min-h-9 bg-cover bg-center bg-no-repeat rounded-[4px] overflow-hidden undefined"
                style={{
                  backgroundImage:
                    "url('https://promotions-material.s3.ap-south-1.amazonaws.com/sportsButtons/cricket-1696348461938')",
                }}
              >
                <div className="flex justify-center w-full h-full min-h-9 relative z-10 items-center min-w-[175px] sm:min-w-[240px] md:min-w-[280px] pl-[5px] pt-[2px] pb-[2px] pr-1 opacity-100">
                  <img
                    src="https://promomaterial.imgix.net/quickButtons/ColorGame-1718191763431"
                    width="16"
                    height="16"
                    className="w-4 h-4 sm:w-5 sm:h-5 ml-1 autoAnimate"
                    alt="Color Game-image"
                    loading="lazy"
                    title="Color Game"
                  />
                  <span className="ml-1 autoAnimate text-text_Quaternary text-xs capitalize pr-[2px] md:text-sm text-nowrap w-full truncate font-lato-bold font-semibold md:font-semibold">
                    Color Game
                  </span>
                </div>
                <div className="absolute top-0 left-0 w-full h-full min-h-9 rounded-[4px]"></div>
              </div>{" "}
            </span>
            <span
              title="Tower Legends"
              className="col-span-1 px-[3px] py-[3px]"
            >
              <div
                className="relative w-full active:scale-95 cursor-pointer bg-bg_SkeletonBgLoaderColor transition-all ease-in-out duration-150 shadow-quickAccessBtnBoxShadows min-h-9 bg-cover bg-center bg-no-repeat rounded-[4px] overflow-hidden undefined"
                style={{
                  backgroundImage:
                    "url('https://promotions-material.s3.ap-south-1.amazonaws.com/sportsButtons/cricket-1696348461938')",
                }}
              >
                <div className="flex justify-center w-full h-full min-h-9 relative z-10 items-center min-w-[175px] sm:min-w-[240px] md:min-w-[280px] pl-[5px] pt-[2px] pb-[2px] pr-1 opacity-100">
                  <img
                    src="https://promomaterial.imgix.net/quickButtons/TowerLegends-1722000145474"
                    width="16"
                    height="16"
                    className="w-4 h-4 sm:w-5 sm:h-5 ml-1 autoAnimate"
                    alt="Tower Legends-image"
                    loading="lazy"
                    title="Tower Legends"
                  />
                  <span className="ml-1 autoAnimate text-text_Quaternary text-xs capitalize pr-[2px] md:text-sm text-nowrap w-full truncate font-lato-bold font-semibold md:font-semibold">
                    Tower Legends
                  </span>
                </div>
                <div className="absolute top-0 left-0 w-full h-full min-h-9 rounded-[4px]"></div>
              </div>
            </span>
          </div>
          <div title="QuickButtons-6" className="grid grid-row-2">
            <span title="Evolution" className="col-span-1 px-[3px] py-[3px]">
              <div
                className="relative w-full active:scale-95 cursor-pointer bg-bg_SkeletonBgLoaderColor transition-all ease-in-out duration-150 shadow-quickAccessBtnBoxShadows min-h-9 bg-cover bg-center bg-no-repeat rounded-[4px] overflow-hidden undefined"
                style={{
                  backgroundImage:
                    "url('https://promotions-material.s3.ap-south-1.amazonaws.com/sportsButtons/cricket-1696348461938')",
                }}
              >
                <div className="flex justify-center w-full h-full min-h-9 relative z-10 items-center min-w-[175px] sm:min-w-[240px] md:min-w-[280px] pl-[5px] pt-[2px] pb-[2px] pr-1 opacity-100">
                  <img
                    src="https://promotions-material.s3.ap-south-1.amazonaws.com/quickButtons/Evolution-1705911275817?q=65&amp;w=600&amp;px=auto&amp;auto=format"
                    width="16"
                    height="16"
                    className="w-4 h-4 sm:w-5 sm:h-5 ml-1 autoAnimate"
                    alt="Evolution-image"
                    loading="lazy"
                    title="Evolution"
                  />
                  <span className="ml-1 autoAnimate text-text_Quaternary text-xs capitalize pr-[2px] md:text-sm text-nowrap w-full truncate font-lato-bold font-semibold md:font-semibold">
                    Evolution
                  </span>
                </div>
                <div className="absolute top-0 left-0 w-full h-full min-h-9 rounded-[4px]"></div>
              </div>{" "}
            </span>
            <span title="Sportsbook" className="col-span-1 px-[3px] py-[3px]">
              <div
                className="relative w-full active:scale-95 cursor-pointer bg-bg_SkeletonBgLoaderColor transition-all ease-in-out duration-150 shadow-quickAccessBtnBoxShadows min-h-9 bg-cover bg-center bg-no-repeat rounded-[4px] overflow-hidden undefined"
                style={{
                  backgroundImage:
                    "url('https://promotions-material.s3.ap-south-1.amazonaws.com/sportsButtons/cricket-1696348461938')",
                }}
              >
                <div className="flex justify-center w-full h-full min-h-9 relative z-10 items-center min-w-[175px] sm:min-w-[240px] md:min-w-[280px] pl-[5px] pt-[2px] pb-[2px] pr-1 opacity-100">
                  <img
                    src="https://promotions-material.s3.ap-south-1.amazonaws.com/quickButtons/Sportsbook-1705911352029?q=65&amp;w=600&amp;px=auto&amp;auto=format"
                    width="16"
                    height="16"
                    className="w-4 h-4 sm:w-5 sm:h-5 ml-1 autoAnimate"
                    alt="Sportsbook-image"
                    loading="lazy"
                    title="Sportsbook"
                  />
                  <span className="ml-1 autoAnimate text-text_Quaternary text-xs capitalize pr-[2px] md:text-sm text-nowrap w-full truncate font-lato-bold font-semibold md:font-semibold">
                    Sportsbook
                  </span>
                </div>
                <div className="absolute top-0 left-0 w-full h-full min-h-9 rounded-[4px]"></div>
              </div>
            </span>
          </div>
          <div title="QuickButtons-8" className="grid grid-row-2">
            <span title="Live Casinos" className="col-span-1 px-[3px] py-[3px]">
              <div
                className="relative w-full active:scale-95 cursor-pointer bg-bg_SkeletonBgLoaderColor transition-all ease-in-out duration-150 shadow-quickAccessBtnBoxShadows min-h-9 bg-cover bg-center bg-no-repeat rounded-[4px] overflow-hidden undefined"
                style={{
                  backgroundImage:
                    "url('https://promotions-material.s3.ap-south-1.amazonaws.com/sportsButtons/cricket-1696348461938')",
                }}
              >
                <div className="flex justify-center w-full h-full min-h-9 relative z-10 items-center min-w-[175px] sm:min-w-[240px] md:min-w-[280px] pl-[5px] pt-[2px] pb-[2px] pr-1 opacity-100">
                  <img
                    src="https://promotions-material.s3.ap-south-1.amazonaws.com/quickButtons/LiveCasinos-1705911704279?q=65&amp;w=600&amp;px=auto&amp;auto=format"
                    width="16"
                    height="16"
                    className="w-4 h-4 sm:w-5 sm:h-5 ml-1 autoAnimate"
                    alt="Live Casinos-image"
                    loading="lazy"
                    title="Live Casinos"
                  />
                  <span className="ml-1 autoAnimate text-text_Quaternary text-xs capitalize pr-[2px] md:text-sm text-nowrap w-full truncate font-lato-bold font-semibold md:font-semibold">
                    Live Casinos
                  </span>
                </div>
                <div className="absolute top-0 left-0 w-full h-full min-h-9 rounded-[4px]"></div>
              </div>{" "}
            </span>
            <span title="e-Cricket" className="col-span-1 px-[3px] py-[3px]">
              <div
                className="relative w-full active:scale-95 cursor-pointer bg-bg_SkeletonBgLoaderColor transition-all ease-in-out duration-150 shadow-quickAccessBtnBoxShadows min-h-9 bg-cover bg-center bg-no-repeat rounded-[4px] overflow-hidden undefined"
                style={{
                  backgroundImage:
                    "url('https://promotions-material.s3.ap-south-1.amazonaws.com/sportsButtons/cricket-1696348461938')",
                }}
              >
                <div className="flex justify-center w-full h-full min-h-9 relative z-10 items-center min-w-[175px] sm:min-w-[240px] md:min-w-[280px] pl-[5px] pt-[2px] pb-[2px] pr-1 opacity-100">
                  <img
                    src="https://promotions-material.s3.ap-south-1.amazonaws.com/quickButtons/e-Cricket-1705911799122?q=65&amp;w=600&amp;px=auto&amp;auto=format"
                    width="16"
                    height="16"
                    className="w-4 h-4 sm:w-5 sm:h-5 ml-1 autoAnimate"
                    alt="e-Cricket-image"
                    loading="lazy"
                    title="e-Cricket"
                  />
                  <span className="ml-1 autoAnimate text-text_Quaternary text-xs capitalize pr-[2px] md:text-sm text-nowrap w-full truncate font-lato-bold font-semibold md:font-semibold">
                    e-Cricket
                  </span>
                </div>
                <div className="absolute top-0 left-0 w-full h-full min-h-9 rounded-[4px]"></div>
              </div>
            </span>
          </div>
          <div title="QuickButtons-10" className="grid grid-row-2">
            <span title="Card Games" className="col-span-1 px-[3px] py-[3px]">
              <div
                className="relative w-full active:scale-95 cursor-pointer bg-bg_SkeletonBgLoaderColor transition-all ease-in-out duration-150 shadow-quickAccessBtnBoxShadows min-h-9 bg-cover bg-center bg-no-repeat rounded-[4px] overflow-hidden undefined"
                style={{
                  backgroundImage:
                    "url('https://promotions-material.s3.ap-south-1.amazonaws.com/sportsButtons/cricket-1696348461938')",
                }}
              >
                <div className="flex justify-center w-full h-full min-h-9 relative z-10 items-center min-w-[175px] sm:min-w-[240px] md:min-w-[280px] pl-[5px] pt-[2px] pb-[2px] pr-1 opacity-100">
                  <img
                    src="https://promotions-material.s3.ap-south-1.amazonaws.com/quickButtons/CardGames-1705911853726?q=65&amp;w=600&amp;px=auto&amp;auto=format"
                    width="16"
                    height="16"
                    className="w-4 h-4 sm:w-5 sm:h-5 ml-1 autoAnimate"
                    alt="Card Games-image"
                    loading="lazy"
                    title="Card Games"
                  />
                  <span className="ml-1 autoAnimate text-text_Quaternary text-xs capitalize pr-[2px] md:text-sm text-nowrap w-full truncate font-lato-bold font-semibold md:font-semibold">
                    Card Games
                  </span>
                </div>
                <div className="absolute top-0 left-0 w-full h-full min-h-9 rounded-[4px]"></div>
              </div>{" "}
            </span>
            <span title="Slot Games" className="col-span-1 px-[3px] py-[3px]">
              <div
                className="relative w-full active:scale-95 cursor-pointer bg-bg_SkeletonBgLoaderColor transition-all ease-in-out duration-150 shadow-quickAccessBtnBoxShadows min-h-9 bg-cover bg-center bg-no-repeat rounded-[4px] overflow-hidden undefined"
                style={{
                  backgroundImage:
                    "url('https://promotions-material.s3.ap-south-1.amazonaws.com/sportsButtons/cricket-1696348461938')",
                }}
              >
                <div className="flex justify-center w-full h-full min-h-9 relative z-10 items-center min-w-[175px] sm:min-w-[240px] md:min-w-[280px] pl-[5px] pt-[2px] pb-[2px] pr-1 opacity-100">
                  <img
                    src="https://promotions-material.s3.ap-south-1.amazonaws.com/quickButtons/SlotGames-1705912015300?q=65&amp;w=600&amp;px=auto&amp;auto=format"
                    width="16"
                    height="16"
                    className="w-4 h-4 sm:w-5 sm:h-5 ml-1 autoAnimate"
                    alt="Slot Games-image"
                    loading="lazy"
                    title="Slot Games"
                  />
                  <span className="ml-1 autoAnimate text-text_Quaternary text-xs capitalize pr-[2px] md:text-sm text-nowrap w-full truncate font-lato-bold font-semibold md:font-semibold">
                    Slot Games
                  </span>
                </div>
                <div className="absolute top-0 left-0 w-full h-full min-h-9 rounded-[4px]"></div>
              </div>
            </span>
          </div>
          <div title="QuickButtons-12" className="grid grid-row-2">
            <span
              title="Multiplayer Games"
              className="col-span-1 px-[3px] py-[3px]"
            >
              <div
                className="relative w-full active:scale-95 cursor-pointer bg-bg_SkeletonBgLoaderColor transition-all ease-in-out duration-150 shadow-quickAccessBtnBoxShadows min-h-9 bg-cover bg-center bg-no-repeat rounded-[4px] overflow-hidden undefined"
                style={{
                  backgroundImage:
                    "url('https://promotions-material.s3.ap-south-1.amazonaws.com/sportsButtons/cricket-1696348461938')",
                }}
              >
                <div className="flex justify-center w-full h-full min-h-9 relative z-10 items-center min-w-[175px] sm:min-w-[240px] md:min-w-[280px] pl-[5px] pt-[2px] pb-[2px] pr-1 opacity-100">
                  <img
                    src="https://promotions-material.s3.ap-south-1.amazonaws.com/quickButtons/MultiplayerGames-1705912077489"
                    width="16"
                    height="16"
                    className="w-4 h-4 sm:w-5 sm:h-5 ml-1 autoAnimate"
                    alt="Multiplayer Games-image"
                    loading="lazy"
                    title="Multiplayer Games"
                  />
                  <span className="ml-1 autoAnimate text-text_Quaternary text-xs capitalize pr-[2px] md:text-sm text-nowrap w-full truncate font-lato-bold font-semibold md:font-semibold">
                    Multiplayer Games
                  </span>
                </div>
                <div className="absolute top-0 left-0 w-full h-full min-h-9 rounded-[4px]"></div>
              </div>{" "}
            </span>
            <span
              title="Fishing games"
              className="col-span-1 px-[3px] py-[3px]"
            >
              <div
                className="relative w-full active:scale-95 cursor-pointer bg-bg_SkeletonBgLoaderColor transition-all ease-in-out duration-150 shadow-quickAccessBtnBoxShadows min-h-9 bg-cover bg-center bg-no-repeat rounded-[4px] overflow-hidden undefined"
                style={{
                  backgroundImage:
                    "url('https://promotions-material.s3.ap-south-1.amazonaws.com/sportsButtons/cricket-1696348461938')",
                }}
              >
                <div className="flex justify-center w-full h-full min-h-9 relative z-10 items-center min-w-[175px] sm:min-w-[240px] md:min-w-[280px] pl-[5px] pt-[2px] pb-[2px] pr-1 opacity-100">
                  <img
                    src="https://promotions-material.s3.ap-south-1.amazonaws.com/quickButtons/Fishinggames-1705912252627"
                    width="16"
                    height="16"
                    className="w-4 h-4 sm:w-5 sm:h-5 ml-1 autoAnimate"
                    alt="Fishing games-image"
                    loading="lazy"
                    title="Fishing games"
                  />
                  <span className="ml-1 autoAnimate text-text_Quaternary text-xs capitalize pr-[2px] md:text-sm text-nowrap w-full truncate font-lato-bold font-semibold md:font-semibold">
                    Fishing games
                  </span>
                </div>
                <div className="absolute top-0 left-0 w-full h-full min-h-9 rounded-[4px]"></div>
              </div>
            </span>
          </div>
          <div title="QuickButtons-0" className="grid grid-row-2">
            <span title="Aviator" className="col-span-1 px-[3px] py-[3px]">
              <div
                className="relative w-full active:scale-95 cursor-pointer bg-bg_SkeletonBgLoaderColor transition-all ease-in-out duration-150 shadow-quickAccessBtnBoxShadows min-h-9 bg-cover bg-center bg-no-repeat rounded-[4px] overflow-hidden undefined"
                style={{
                  backgroundImage:
                    "url('https://promotions-material.s3.ap-south-1.amazonaws.com/sportsButtons/cricket-1696348461938')",
                }}
              >
                <div className="flex justify-center w-full h-full min-h-9 relative z-10 items-center min-w-[175px] sm:min-w-[240px] md:min-w-[280px] pl-[5px] pt-[2px] pb-[2px] pr-1 opacity-100">
                  <img
                    src="https://promotions-material.s3.ap-south-1.amazonaws.com/quickButtons/Aviator-1705911963125?q=65&amp;w=600&amp;px=auto&amp;auto=format"
                    width="16"
                    height="16"
                    className="w-4 h-4 sm:w-5 sm:h-5 ml-1 autoAnimate"
                    alt="Aviator-image"
                    loading="lazy"
                    title="Aviator"
                  />
                  <span className="ml-1 autoAnimate text-text_Quaternary text-xs capitalize pr-[2px] md:text-sm text-nowrap w-full truncate font-lato-bold font-semibold md:font-semibold">
                    Aviator
                  </span>
                </div>
                <div className="absolute top-0 left-0 w-full h-full min-h-9 rounded-[4px]"></div>
              </div>{" "}
            </span>
            <span title="Aura" className="col-span-1 px-[3px] py-[3px]">
              <div
                className="relative w-full active:scale-95 cursor-pointer bg-bg_SkeletonBgLoaderColor transition-all ease-in-out duration-150 shadow-quickAccessBtnBoxShadows min-h-9 bg-cover bg-center bg-no-repeat rounded-[4px] overflow-hidden undefined"
                style={{
                  backgroundImage:
                    "url('https://promotions-material.s3.ap-south-1.amazonaws.com/sportsButtons/cricket-1696348461938')",
                }}
              >
                <div className="flex justify-center w-full h-full min-h-9 relative z-10 items-center min-w-[175px] sm:min-w-[240px] md:min-w-[280px] pl-[5px] pt-[2px] pb-[2px] pr-1 opacity-100">
                  <img
                    src="https://promotions-material.s3.ap-south-1.amazonaws.com/quickButtons/Aura-1705912199647?q=65&amp;w=600&amp;px=auto&amp;auto=format"
                    width="16"
                    height="16"
                    className="w-4 h-4 sm:w-5 sm:h-5 ml-1 autoAnimate"
                    alt="Aura-image"
                    loading="lazy"
                    title="Aura"
                  />
                  <span className="ml-1 autoAnimate text-text_Quaternary text-xs capitalize pr-[2px] md:text-sm text-nowrap w-full truncate font-lato-bold font-semibold md:font-semibold">
                    Aura
                  </span>
                </div>
                <div className="absolute top-0 left-0 w-full h-full min-h-9 rounded-[4px]"></div>
              </div>
            </span>
          </div>
          <div title="QuickButtons-2" className="grid grid-row-2">
            <span title="Mines" className="col-span-1 px-[3px] py-[3px]">
              <div
                className="relative w-full active:scale-95 cursor-pointer bg-bg_SkeletonBgLoaderColor transition-all ease-in-out duration-150 shadow-quickAccessBtnBoxShadows min-h-9 bg-cover bg-center bg-no-repeat rounded-[4px] overflow-hidden undefined"
                style={{
                  backgroundImage:
                    "url('https://promotions-material.s3.ap-south-1.amazonaws.com/sportsButtons/cricket-1696348461938')",
                }}
              >
                <div className="flex justify-center w-full h-full min-h-9 relative z-10 items-center min-w-[175px] sm:min-w-[240px] md:min-w-[280px] pl-[5px] pt-[2px] pb-[2px] pr-1 opacity-100">
                  <img
                    src="https://promotions-material.s3.ap-south-1.amazonaws.com/quickButtons/diamond_icon.png?q=65&amp;w=600&amp;px=auto&amp;auto=format"
                    width="16"
                    height="16"
                    className="w-4 h-4 sm:w-5 sm:h-5 ml-1 autoAnimate"
                    alt="Mines-image"
                    loading="lazy"
                    title="Mines"
                  />
                  <span className="ml-1 autoAnimate text-text_Quaternary text-xs capitalize pr-[2px] md:text-sm text-nowrap w-full truncate font-lato-bold font-semibold md:font-semibold">
                    Mines
                  </span>
                </div>
                <div className="absolute top-0 left-0 w-full h-full min-h-9 rounded-[4px]"></div>
              </div>{" "}
            </span>
            <span title="Limbo" className="col-span-1 px-[3px] py-[3px]">
              <div
                className="relative w-full active:scale-95 cursor-pointer bg-bg_SkeletonBgLoaderColor transition-all ease-in-out duration-150 shadow-quickAccessBtnBoxShadows min-h-9 bg-cover bg-center bg-no-repeat rounded-[4px] overflow-hidden undefined"
                style={{
                  backgroundImage:
                    "url('https://promotions-material.s3.ap-south-1.amazonaws.com/sportsButtons/cricket-1696348461938')",
                }}
              >
                <div className="flex justify-center w-full h-full min-h-9 relative z-10 items-center min-w-[175px] sm:min-w-[240px] md:min-w-[280px] pl-[5px] pt-[2px] pb-[2px] pr-1 opacity-100">
                  <img
                    src="https://promotions-material.s3.ap-south-1.amazonaws.com/quickButtons/Aviator-1705911963125?q=65&amp;w=600&amp;px=auto&amp;auto=format"
                    width="16"
                    height="16"
                    className="w-4 h-4 sm:w-5 sm:h-5 ml-1 autoAnimate"
                    alt="Limbo-image"
                    loading="lazy"
                    title="Limbo"
                  />
                  <span className="ml-1 autoAnimate text-text_Quaternary text-xs capitalize pr-[2px] md:text-sm text-nowrap w-full truncate font-lato-bold font-semibold md:font-semibold">
                    Limbo
                  </span>
                </div>
                <div className="absolute top-0 left-0 w-full h-full min-h-9 rounded-[4px]"></div>
              </div>
            </span>
          </div>
          <div title="QuickButtons-4" className="grid grid-row-2">
            <span title="Color Game" className="col-span-1 px-[3px] py-[3px]">
              <div
                className="relative w-full active:scale-95 cursor-pointer bg-bg_SkeletonBgLoaderColor transition-all ease-in-out duration-150 shadow-quickAccessBtnBoxShadows min-h-9 bg-cover bg-center bg-no-repeat rounded-[4px] overflow-hidden undefined"
                style={{
                  backgroundImage:
                    "url('https://promotions-material.s3.ap-south-1.amazonaws.com/sportsButtons/cricket-1696348461938')",
                }}
              >
                <div className="flex justify-center w-full h-full min-h-9 relative z-10 items-center min-w-[175px] sm:min-w-[240px] md:min-w-[280px] pl-[5px] pt-[2px] pb-[2px] pr-1 opacity-100">
                  <img
                    src="https://promomaterial.imgix.net/quickButtons/ColorGame-1718191763431"
                    width="16"
                    height="16"
                    className="w-4 h-4 sm:w-5 sm:h-5 ml-1 autoAnimate"
                    alt="Color Game-image"
                    loading="lazy"
                    title="Color Game"
                  />
                  <span className="ml-1 autoAnimate text-text_Quaternary text-xs capitalize pr-[2px] md:text-sm text-nowrap w-full truncate font-lato-bold font-semibold md:font-semibold">
                    Color Game
                  </span>
                </div>
                <div className="absolute top-0 left-0 w-full h-full min-h-9 rounded-[4px]"></div>
              </div>{" "}
            </span>
            <span
              title="Tower Legends"
              className="col-span-1 px-[3px] py-[3px]"
            >
              <div
                className="relative w-full active:scale-95 cursor-pointer bg-bg_SkeletonBgLoaderColor transition-all ease-in-out duration-150 shadow-quickAccessBtnBoxShadows min-h-9 bg-cover bg-center bg-no-repeat rounded-[4px] overflow-hidden undefined"
                style={{
                  backgroundImage:
                    "url('https://promotions-material.s3.ap-south-1.amazonaws.com/sportsButtons/cricket-1696348461938')",
                }}
              >
                <div className="flex justify-center w-full h-full min-h-9 relative z-10 items-center min-w-[175px] sm:min-w-[240px] md:min-w-[280px] pl-[5px] pt-[2px] pb-[2px] pr-1 opacity-100">
                  <img
                    src="https://promomaterial.imgix.net/quickButtons/TowerLegends-1722000145474"
                    width="16"
                    height="16"
                    className="w-4 h-4 sm:w-5 sm:h-5 ml-1 autoAnimate"
                    alt="Tower Legends-image"
                    loading="lazy"
                    title="Tower Legends"
                  />
                  <span className="ml-1 autoAnimate text-text_Quaternary text-xs capitalize pr-[2px] md:text-sm text-nowrap w-full truncate font-lato-bold font-semibold md:font-semibold">
                    Tower Legends
                  </span>
                </div>
                <div className="absolute top-0 left-0 w-full h-full min-h-9 rounded-[4px]"></div>
              </div>
            </span>
          </div>
          <div title="QuickButtons-6" className="grid grid-row-2">
            <span title="Evolution" className="col-span-1 px-[3px] py-[3px]">
              <div
                className="relative w-full active:scale-95 cursor-pointer bg-bg_SkeletonBgLoaderColor transition-all ease-in-out duration-150 shadow-quickAccessBtnBoxShadows min-h-9 bg-cover bg-center bg-no-repeat rounded-[4px] overflow-hidden undefined"
                style={{
                  backgroundImage:
                    "url('https://promotions-material.s3.ap-south-1.amazonaws.com/sportsButtons/cricket-1696348461938')",
                }}
              >
                <div className="flex justify-center w-full h-full min-h-9 relative z-10 items-center min-w-[175px] sm:min-w-[240px] md:min-w-[280px] pl-[5px] pt-[2px] pb-[2px] pr-1 opacity-100">
                  <img
                    src="https://promotions-material.s3.ap-south-1.amazonaws.com/quickButtons/Evolution-1705911275817?q=65&amp;w=600&amp;px=auto&amp;auto=format"
                    width="16"
                    height="16"
                    className="w-4 h-4 sm:w-5 sm:h-5 ml-1 autoAnimate"
                    alt="Evolution-image"
                    loading="lazy"
                    title="Evolution"
                  />
                  <span className="ml-1 autoAnimate text-text_Quaternary text-xs capitalize pr-[2px] md:text-sm text-nowrap w-full truncate font-lato-bold font-semibold md:font-semibold">
                    Evolution
                  </span>
                </div>
                <div className="absolute top-0 left-0 w-full h-full min-h-9 rounded-[4px]"></div>
              </div>{" "}
            </span>
            <span title="Sportsbook" className="col-span-1 px-[3px] py-[3px]">
              <div
                className="relative w-full active:scale-95 cursor-pointer bg-bg_SkeletonBgLoaderColor transition-all ease-in-out duration-150 shadow-quickAccessBtnBoxShadows min-h-9 bg-cover bg-center bg-no-repeat rounded-[4px] overflow-hidden undefined"
                style={{
                  backgroundImage:
                    "url('https://promotions-material.s3.ap-south-1.amazonaws.com/sportsButtons/cricket-1696348461938')",
                }}
              >
                <div className="flex justify-center w-full h-full min-h-9 relative z-10 items-center min-w-[175px] sm:min-w-[240px] md:min-w-[280px] pl-[5px] pt-[2px] pb-[2px] pr-1 opacity-100">
                  <img
                    src="https://promotions-material.s3.ap-south-1.amazonaws.com/quickButtons/Sportsbook-1705911352029?q=65&amp;w=600&amp;px=auto&amp;auto=format"
                    width="16"
                    height="16"
                    className="w-4 h-4 sm:w-5 sm:h-5 ml-1 autoAnimate"
                    alt="Sportsbook-image"
                    loading="lazy"
                    title="Sportsbook"
                  />
                  <span className="ml-1 autoAnimate text-text_Quaternary text-xs capitalize pr-[2px] md:text-sm text-nowrap w-full truncate font-lato-bold font-semibold md:font-semibold">
                    Sportsbook
                  </span>
                </div>
                <div className="absolute top-0 left-0 w-full h-full min-h-9 rounded-[4px]"></div>
              </div>
            </span>
          </div>
          <div title="QuickButtons-8" className="grid grid-row-2">
            <span title="Live Casinos" className="col-span-1 px-[3px] py-[3px]">
              <div
                className="relative w-full active:scale-95 cursor-pointer bg-bg_SkeletonBgLoaderColor transition-all ease-in-out duration-150 shadow-quickAccessBtnBoxShadows min-h-9 bg-cover bg-center bg-no-repeat rounded-[4px] overflow-hidden undefined"
                style={{
                  backgroundImage:
                    "url('https://promotions-material.s3.ap-south-1.amazonaws.com/sportsButtons/cricket-1696348461938')",
                }}
              >
                <div className="flex justify-center w-full h-full min-h-9 relative z-10 items-center min-w-[175px] sm:min-w-[240px] md:min-w-[280px] pl-[5px] pt-[2px] pb-[2px] pr-1 opacity-100">
                  <img
                    src="https://promotions-material.s3.ap-south-1.amazonaws.com/quickButtons/LiveCasinos-1705911704279?q=65&amp;w=600&amp;px=auto&amp;auto=format"
                    width="16"
                    height="16"
                    className="w-4 h-4 sm:w-5 sm:h-5 ml-1 autoAnimate"
                    alt="Live Casinos-image"
                    loading="lazy"
                    title="Live Casinos"
                  />
                  <span className="ml-1 autoAnimate text-text_Quaternary text-xs capitalize pr-[2px] md:text-sm text-nowrap w-full truncate font-lato-bold font-semibold md:font-semibold">
                    Live Casinos
                  </span>
                </div>
                <div className="absolute top-0 left-0 w-full h-full min-h-9 rounded-[4px]"></div>
              </div>{" "}
            </span>
            <span title="e-Cricket" className="col-span-1 px-[3px] py-[3px]">
              <div
                className="relative w-full active:scale-95 cursor-pointer bg-bg_SkeletonBgLoaderColor transition-all ease-in-out duration-150 shadow-quickAccessBtnBoxShadows min-h-9 bg-cover bg-center bg-no-repeat rounded-[4px] overflow-hidden undefined"
                style={{
                  backgroundImage:
                    "url('https://promotions-material.s3.ap-south-1.amazonaws.com/sportsButtons/cricket-1696348461938')",
                }}
              >
                <div className="flex justify-center w-full h-full min-h-9 relative z-10 items-center min-w-[175px] sm:min-w-[240px] md:min-w-[280px] pl-[5px] pt-[2px] pb-[2px] pr-1 opacity-100">
                  <img
                    src="https://promotions-material.s3.ap-south-1.amazonaws.com/quickButtons/e-Cricket-1705911799122?q=65&amp;w=600&amp;px=auto&amp;auto=format"
                    width="16"
                    height="16"
                    className="w-4 h-4 sm:w-5 sm:h-5 ml-1 autoAnimate"
                    alt="e-Cricket-image"
                    loading="lazy"
                    title="e-Cricket"
                  />
                  <span className="ml-1 autoAnimate text-text_Quaternary text-xs capitalize pr-[2px] md:text-sm text-nowrap w-full truncate font-lato-bold font-semibold md:font-semibold">
                    e-Cricket
                  </span>
                </div>
                <div className="absolute top-0 left-0 w-full h-full min-h-9 rounded-[4px]"></div>
              </div>
            </span>
          </div>
          <div title="QuickButtons-10" className="grid grid-row-2">
            <span title="Card Games" className="col-span-1 px-[3px] py-[3px]">
              <div
                className="relative w-full active:scale-95 cursor-pointer bg-bg_SkeletonBgLoaderColor transition-all ease-in-out duration-150 shadow-quickAccessBtnBoxShadows min-h-9 bg-cover bg-center bg-no-repeat rounded-[4px] overflow-hidden undefined"
                style={{
                  backgroundImage:
                    "url('https://promotions-material.s3.ap-south-1.amazonaws.com/sportsButtons/cricket-1696348461938')",
                }}
              >
                <div className="flex justify-center w-full h-full min-h-9 relative z-10 items-center min-w-[175px] sm:min-w-[240px] md:min-w-[280px] pl-[5px] pt-[2px] pb-[2px] pr-1 opacity-100">
                  <img
                    src="https://promotions-material.s3.ap-south-1.amazonaws.com/quickButtons/CardGames-1705911853726?q=65&amp;w=600&amp;px=auto&amp;auto=format"
                    width="16"
                    height="16"
                    className="w-4 h-4 sm:w-5 sm:h-5 ml-1 autoAnimate"
                    alt="Card Games-image"
                    loading="lazy"
                    title="Card Games"
                  />
                  <span className="ml-1 autoAnimate text-text_Quaternary text-xs capitalize pr-[2px] md:text-sm text-nowrap w-full truncate font-lato-bold font-semibold md:font-semibold">
                    Card Games
                  </span>
                </div>
                <div className="absolute top-0 left-0 w-full h-full min-h-9 rounded-[4px]"></div>
              </div>{" "}
            </span>
            <span title="Slot Games" className="col-span-1 px-[3px] py-[3px]">
              <div
                className="relative w-full active:scale-95 cursor-pointer bg-bg_SkeletonBgLoaderColor transition-all ease-in-out duration-150 shadow-quickAccessBtnBoxShadows min-h-9 bg-cover bg-center bg-no-repeat rounded-[4px] overflow-hidden undefined"
                style={{
                  backgroundImage:
                    "url('https://promotions-material.s3.ap-south-1.amazonaws.com/sportsButtons/cricket-1696348461938')",
                }}
              >
                <div className="flex justify-center w-full h-full min-h-9 relative z-10 items-center min-w-[175px] sm:min-w-[240px] md:min-w-[280px] pl-[5px] pt-[2px] pb-[2px] pr-1 opacity-100">
                  <img
                    src="https://promotions-material.s3.ap-south-1.amazonaws.com/quickButtons/SlotGames-1705912015300?q=65&amp;w=600&amp;px=auto&amp;auto=format"
                    width="16"
                    height="16"
                    className="w-4 h-4 sm:w-5 sm:h-5 ml-1 autoAnimate"
                    alt="Slot Games-image"
                    loading="lazy"
                    title="Slot Games"
                  />
                  <span className="ml-1 autoAnimate text-text_Quaternary text-xs capitalize pr-[2px] md:text-sm text-nowrap w-full truncate font-lato-bold font-semibold md:font-semibold">
                    Slot Games
                  </span>
                </div>
                <div className="absolute top-0 left-0 w-full h-full min-h-9 rounded-[4px]"></div>
              </div>
            </span>
          </div>
          <div title="QuickButtons-12" className="grid grid-row-2">
            <span
              title="Multiplayer Games"
              className="col-span-1 px-[3px] py-[3px]"
            >
              <div
                className="relative w-full active:scale-95 cursor-pointer bg-bg_SkeletonBgLoaderColor transition-all ease-in-out duration-150 shadow-quickAccessBtnBoxShadows min-h-9 bg-cover bg-center bg-no-repeat rounded-[4px] overflow-hidden undefined"
                style={{
                  backgroundImage:
                    "url('https://promotions-material.s3.ap-south-1.amazonaws.com/sportsButtons/cricket-1696348461938')",
                }}
              >
                <div className="flex justify-center w-full h-full min-h-9 relative z-10 items-center min-w-[175px] sm:min-w-[240px] md:min-w-[280px] pl-[5px] pt-[2px] pb-[2px] pr-1 opacity-100">
                  <img
                    src="https://promotions-material.s3.ap-south-1.amazonaws.com/quickButtons/MultiplayerGames-1705912077489"
                    width="16"
                    height="16"
                    className="w-4 h-4 sm:w-5 sm:h-5 ml-1 autoAnimate"
                    alt="Multiplayer Games-image"
                    loading="lazy"
                    title="Multiplayer Games"
                  />
                  <span className="ml-1 autoAnimate text-text_Quaternary text-xs capitalize pr-[2px] md:text-sm text-nowrap w-full truncate font-lato-bold font-semibold md:font-semibold">
                    Multiplayer Games
                  </span>
                </div>
                <div className="absolute top-0 left-0 w-full h-full min-h-9 rounded-[4px]"></div>
              </div>{" "}
            </span>
            <span
              title="Fishing games"
              className="col-span-1 px-[3px] py-[3px]"
            >
              <div
                className="relative w-full active:scale-95 cursor-pointer bg-bg_SkeletonBgLoaderColor transition-all ease-in-out duration-150 shadow-quickAccessBtnBoxShadows min-h-9 bg-cover bg-center bg-no-repeat rounded-[4px] overflow-hidden undefined"
                style={{
                  backgroundImage:
                    "url('https://promotions-material.s3.ap-south-1.amazonaws.com/sportsButtons/cricket-1696348461938')",
                }}
              >
                <div className="flex justify-center w-full h-full min-h-9 relative z-10 items-center min-w-[175px] sm:min-w-[240px] md:min-w-[280px] pl-[5px] pt-[2px] pb-[2px] pr-1 opacity-100">
                  <img
                    src="https://promotions-material.s3.ap-south-1.amazonaws.com/quickButtons/Fishinggames-1705912252627"
                    width="16"
                    height="16"
                    className="w-4 h-4 sm:w-5 sm:h-5 ml-1 autoAnimate"
                    alt="Fishing games-image"
                    loading="lazy"
                    title="Fishing games"
                  />
                  <span className="ml-1 autoAnimate text-text_Quaternary text-xs capitalize pr-[2px] md:text-sm text-nowrap w-full truncate font-lato-bold font-semibold md:font-semibold">
                    Fishing games
                  </span>
                </div>
                <div className="absolute top-0 left-0 w-full h-full min-h-9 rounded-[4px]"></div>
              </div>
            </span>
          </div>
          <div title="QuickButtons-0" className="grid grid-row-2">
            <span title="Aviator" className="col-span-1 px-[3px] py-[3px]">
              <div
                className="relative w-full active:scale-95 cursor-pointer bg-bg_SkeletonBgLoaderColor transition-all ease-in-out duration-150 shadow-quickAccessBtnBoxShadows min-h-9 bg-cover bg-center bg-no-repeat rounded-[4px] overflow-hidden undefined"
                style={{
                  backgroundImage:
                    "url('https://promotions-material.s3.ap-south-1.amazonaws.com/sportsButtons/cricket-1696348461938')",
                }}
              >
                <div className="flex justify-center w-full h-full min-h-9 relative z-10 items-center min-w-[175px] sm:min-w-[240px] md:min-w-[280px] pl-[5px] pt-[2px] pb-[2px] pr-1 opacity-100">
                  <img
                    src="https://promotions-material.s3.ap-south-1.amazonaws.com/quickButtons/Aviator-1705911963125?q=65&amp;w=600&amp;px=auto&amp;auto=format"
                    width="16"
                    height="16"
                    className="w-4 h-4 sm:w-5 sm:h-5 ml-1 autoAnimate"
                    alt="Aviator-image"
                    loading="lazy"
                    title="Aviator"
                  />
                  <span className="ml-1 autoAnimate text-text_Quaternary text-xs capitalize pr-[2px] md:text-sm text-nowrap w-full truncate font-lato-bold font-semibold md:font-semibold">
                    Aviator
                  </span>
                </div>
                <div className="absolute top-0 left-0 w-full h-full min-h-9 rounded-[4px]"></div>
              </div>{" "}
            </span>
            <span title="Aura" className="col-span-1 px-[3px] py-[3px]">
              <div
                className="relative w-full active:scale-95 cursor-pointer bg-bg_SkeletonBgLoaderColor transition-all ease-in-out duration-150 shadow-quickAccessBtnBoxShadows min-h-9 bg-cover bg-center bg-no-repeat rounded-[4px] overflow-hidden undefined"
                style={{
                  backgroundImage:
                    "url('https://promotions-material.s3.ap-south-1.amazonaws.com/sportsButtons/cricket-1696348461938')",
                }}
              >
                <div className="flex justify-center w-full h-full min-h-9 relative z-10 items-center min-w-[175px] sm:min-w-[240px] md:min-w-[280px] pl-[5px] pt-[2px] pb-[2px] pr-1 opacity-100">
                  <img
                    src="https://promotions-material.s3.ap-south-1.amazonaws.com/quickButtons/Aura-1705912199647?q=65&amp;w=600&amp;px=auto&amp;auto=format"
                    width="16"
                    height="16"
                    className="w-4 h-4 sm:w-5 sm:h-5 ml-1 autoAnimate"
                    alt="Aura-image"
                    loading="lazy"
                    title="Aura"
                  />
                  <span className="ml-1 autoAnimate text-text_Quaternary text-xs capitalize pr-[2px] md:text-sm text-nowrap w-full truncate font-lato-bold font-semibold md:font-semibold">
                    Aura
                  </span>
                </div>
                <div className="absolute top-0 left-0 w-full h-full min-h-9 rounded-[4px]"></div>
              </div>
            </span>
          </div>
          <div title="QuickButtons-2" className="grid grid-row-2">
            <span title="Mines" className="col-span-1 px-[3px] py-[3px]">
              <div
                className="relative w-full active:scale-95 cursor-pointer bg-bg_SkeletonBgLoaderColor transition-all ease-in-out duration-150 shadow-quickAccessBtnBoxShadows min-h-9 bg-cover bg-center bg-no-repeat rounded-[4px] overflow-hidden undefined"
                style={{
                  backgroundImage:
                    "url('https://promotions-material.s3.ap-south-1.amazonaws.com/sportsButtons/cricket-1696348461938')",
                }}
              >
                <div className="flex justify-center w-full h-full min-h-9 relative z-10 items-center min-w-[175px] sm:min-w-[240px] md:min-w-[280px] pl-[5px] pt-[2px] pb-[2px] pr-1 opacity-100">
                  <img
                    src="https://promotions-material.s3.ap-south-1.amazonaws.com/quickButtons/diamond_icon.png?q=65&amp;w=600&amp;px=auto&amp;auto=format"
                    width="16"
                    height="16"
                    className="w-4 h-4 sm:w-5 sm:h-5 ml-1 autoAnimate"
                    alt="Mines-image"
                    loading="lazy"
                    title="Mines"
                  />
                  <span className="ml-1 autoAnimate text-text_Quaternary text-xs capitalize pr-[2px] md:text-sm text-nowrap w-full truncate font-lato-bold font-semibold md:font-semibold">
                    Mines
                  </span>
                </div>
                <div className="absolute top-0 left-0 w-full h-full min-h-9 rounded-[4px]"></div>
              </div>{" "}
            </span>
            <span title="Limbo" className="col-span-1 px-[3px] py-[3px]">
              <div
                className="relative w-full active:scale-95 cursor-pointer bg-bg_SkeletonBgLoaderColor transition-all ease-in-out duration-150 shadow-quickAccessBtnBoxShadows min-h-9 bg-cover bg-center bg-no-repeat rounded-[4px] overflow-hidden undefined"
                style={{
                  backgroundImage:
                    "url('https://promotions-material.s3.ap-south-1.amazonaws.com/sportsButtons/cricket-1696348461938')",
                }}
              >
                <div className="flex justify-center w-full h-full min-h-9 relative z-10 items-center min-w-[175px] sm:min-w-[240px] md:min-w-[280px] pl-[5px] pt-[2px] pb-[2px] pr-1 opacity-100">
                  <img
                    src="https://promotions-material.s3.ap-south-1.amazonaws.com/quickButtons/Aviator-1705911963125?q=65&amp;w=600&amp;px=auto&amp;auto=format"
                    width="16"
                    height="16"
                    className="w-4 h-4 sm:w-5 sm:h-5 ml-1 autoAnimate"
                    alt="Limbo-image"
                    loading="lazy"
                    title="Limbo"
                  />
                  <span className="ml-1 autoAnimate text-text_Quaternary text-xs capitalize pr-[2px] md:text-sm text-nowrap w-full truncate font-lato-bold font-semibold md:font-semibold">
                    Limbo
                  </span>
                </div>
                <div className="absolute top-0 left-0 w-full h-full min-h-9 rounded-[4px]"></div>
              </div>
            </span>
          </div>
          <div title="QuickButtons-4" className="grid grid-row-2">
            <span title="Color Game" className="col-span-1 px-[3px] py-[3px]">
              <div
                className="relative w-full active:scale-95 cursor-pointer bg-bg_SkeletonBgLoaderColor transition-all ease-in-out duration-150 shadow-quickAccessBtnBoxShadows min-h-9 bg-cover bg-center bg-no-repeat rounded-[4px] overflow-hidden undefined"
                style={{
                  backgroundImage:
                    "url('https://promotions-material.s3.ap-south-1.amazonaws.com/sportsButtons/cricket-1696348461938')",
                }}
              >
                <div className="flex justify-center w-full h-full min-h-9 relative z-10 items-center min-w-[175px] sm:min-w-[240px] md:min-w-[280px] pl-[5px] pt-[2px] pb-[2px] pr-1 opacity-100">
                  <img
                    src="https://promomaterial.imgix.net/quickButtons/ColorGame-1718191763431"
                    width="16"
                    height="16"
                    className="w-4 h-4 sm:w-5 sm:h-5 ml-1 autoAnimate"
                    alt="Color Game-image"
                    loading="lazy"
                    title="Color Game"
                  />
                  <span className="ml-1 autoAnimate text-text_Quaternary text-xs capitalize pr-[2px] md:text-sm text-nowrap w-full truncate font-lato-bold font-semibold md:font-semibold">
                    Color Game
                  </span>
                </div>
                <div className="absolute top-0 left-0 w-full h-full min-h-9 rounded-[4px]"></div>
              </div>{" "}
            </span>
            <span
              title="Tower Legends"
              className="col-span-1 px-[3px] py-[3px]"
            >
              <div
                className="relative w-full active:scale-95 cursor-pointer bg-bg_SkeletonBgLoaderColor transition-all ease-in-out duration-150 shadow-quickAccessBtnBoxShadows min-h-9 bg-cover bg-center bg-no-repeat rounded-[4px] overflow-hidden undefined"
                style={{
                  backgroundImage:
                    "url('https://promotions-material.s3.ap-south-1.amazonaws.com/sportsButtons/cricket-1696348461938')",
                }}
              >
                <div className="flex justify-center w-full h-full min-h-9 relative z-10 items-center min-w-[175px] sm:min-w-[240px] md:min-w-[280px] pl-[5px] pt-[2px] pb-[2px] pr-1 opacity-100">
                  <img
                    src="https://promomaterial.imgix.net/quickButtons/TowerLegends-1722000145474"
                    width="16"
                    height="16"
                    className="w-4 h-4 sm:w-5 sm:h-5 ml-1 autoAnimate"
                    alt="Tower Legends-image"
                    loading="lazy"
                    title="Tower Legends"
                  />
                  <span className="ml-1 autoAnimate text-text_Quaternary text-xs capitalize pr-[2px] md:text-sm text-nowrap w-full truncate font-lato-bold font-semibold md:font-semibold">
                    Tower Legends
                  </span>
                </div>
                <div className="absolute top-0 left-0 w-full h-full min-h-9 rounded-[4px]"></div>
              </div>
            </span>
          </div>
          <div title="QuickButtons-6" className="grid grid-row-2">
            <span title="Evolution" className="col-span-1 px-[3px] py-[3px]">
              <div
                className="relative w-full active:scale-95 cursor-pointer bg-bg_SkeletonBgLoaderColor transition-all ease-in-out duration-150 shadow-quickAccessBtnBoxShadows min-h-9 bg-cover bg-center bg-no-repeat rounded-[4px] overflow-hidden undefined"
                style={{
                  backgroundImage:
                    "url('https://promotions-material.s3.ap-south-1.amazonaws.com/sportsButtons/cricket-1696348461938')",
                }}
              >
                <div className="flex justify-center w-full h-full min-h-9 relative z-10 items-center min-w-[175px] sm:min-w-[240px] md:min-w-[280px] pl-[5px] pt-[2px] pb-[2px] pr-1 opacity-100">
                  <img
                    src="https://promotions-material.s3.ap-south-1.amazonaws.com/quickButtons/Evolution-1705911275817?q=65&amp;w=600&amp;px=auto&amp;auto=format"
                    width="16"
                    height="16"
                    className="w-4 h-4 sm:w-5 sm:h-5 ml-1 autoAnimate"
                    alt="Evolution-image"
                    loading="lazy"
                    title="Evolution"
                  />
                  <span className="ml-1 autoAnimate text-text_Quaternary text-xs capitalize pr-[2px] md:text-sm text-nowrap w-full truncate font-lato-bold font-semibold md:font-semibold">
                    Evolution
                  </span>
                </div>
                <div className="absolute top-0 left-0 w-full h-full min-h-9 rounded-[4px]"></div>
              </div>{" "}
            </span>
            <span title="Sportsbook" className="col-span-1 px-[3px] py-[3px]">
              <div
                className="relative w-full active:scale-95 cursor-pointer bg-bg_SkeletonBgLoaderColor transition-all ease-in-out duration-150 shadow-quickAccessBtnBoxShadows min-h-9 bg-cover bg-center bg-no-repeat rounded-[4px] overflow-hidden undefined"
                style={{
                  backgroundImage:
                    "url('https://promotions-material.s3.ap-south-1.amazonaws.com/sportsButtons/cricket-1696348461938')",
                }}
              >
                <div className="flex justify-center w-full h-full min-h-9 relative z-10 items-center min-w-[175px] sm:min-w-[240px] md:min-w-[280px] pl-[5px] pt-[2px] pb-[2px] pr-1 opacity-100">
                  <img
                    src="https://promotions-material.s3.ap-south-1.amazonaws.com/quickButtons/Sportsbook-1705911352029?q=65&amp;w=600&amp;px=auto&amp;auto=format"
                    width="16"
                    height="16"
                    className="w-4 h-4 sm:w-5 sm:h-5 ml-1 autoAnimate"
                    alt="Sportsbook-image"
                    loading="lazy"
                    title="Sportsbook"
                  />
                  <span className="ml-1 autoAnimate text-text_Quaternary text-xs capitalize pr-[2px] md:text-sm text-nowrap w-full truncate font-lato-bold font-semibold md:font-semibold">
                    Sportsbook
                  </span>
                </div>
                <div className="absolute top-0 left-0 w-full h-full min-h-9 rounded-[4px]"></div>
              </div>
            </span>
          </div>
          <div title="QuickButtons-8" className="grid grid-row-2">
            <span title="Live Casinos" className="col-span-1 px-[3px] py-[3px]">
              <div
                className="relative w-full active:scale-95 cursor-pointer bg-bg_SkeletonBgLoaderColor transition-all ease-in-out duration-150 shadow-quickAccessBtnBoxShadows min-h-9 bg-cover bg-center bg-no-repeat rounded-[4px] overflow-hidden undefined"
                style={{
                  backgroundImage:
                    "url('https://promotions-material.s3.ap-south-1.amazonaws.com/sportsButtons/cricket-1696348461938')",
                }}
              >
                <div className="flex justify-center w-full h-full min-h-9 relative z-10 items-center min-w-[175px] sm:min-w-[240px] md:min-w-[280px] pl-[5px] pt-[2px] pb-[2px] pr-1 opacity-100">
                  <img
                    src="https://promotions-material.s3.ap-south-1.amazonaws.com/quickButtons/LiveCasinos-1705911704279?q=65&amp;w=600&amp;px=auto&amp;auto=format"
                    width="16"
                    height="16"
                    className="w-4 h-4 sm:w-5 sm:h-5 ml-1 autoAnimate"
                    alt="Live Casinos-image"
                    loading="lazy"
                    title="Live Casinos"
                  />
                  <span className="ml-1 autoAnimate text-text_Quaternary text-xs capitalize pr-[2px] md:text-sm text-nowrap w-full truncate font-lato-bold font-semibold md:font-semibold">
                    Live Casinos
                  </span>
                </div>
                <div className="absolute top-0 left-0 w-full h-full min-h-9 rounded-[4px]"></div>
              </div>{" "}
            </span>
            <span title="e-Cricket" className="col-span-1 px-[3px] py-[3px]">
              <div
                className="relative w-full active:scale-95 cursor-pointer bg-bg_SkeletonBgLoaderColor transition-all ease-in-out duration-150 shadow-quickAccessBtnBoxShadows min-h-9 bg-cover bg-center bg-no-repeat rounded-[4px] overflow-hidden undefined"
                style={{
                  backgroundImage:
                    "url('https://promotions-material.s3.ap-south-1.amazonaws.com/sportsButtons/cricket-1696348461938')",
                }}
              >
                <div className="flex justify-center w-full h-full min-h-9 relative z-10 items-center min-w-[175px] sm:min-w-[240px] md:min-w-[280px] pl-[5px] pt-[2px] pb-[2px] pr-1 opacity-100">
                  <img
                    src="https://promotions-material.s3.ap-south-1.amazonaws.com/quickButtons/e-Cricket-1705911799122?q=65&amp;w=600&amp;px=auto&amp;auto=format"
                    width="16"
                    height="16"
                    className="w-4 h-4 sm:w-5 sm:h-5 ml-1 autoAnimate"
                    alt="e-Cricket-image"
                    loading="lazy"
                    title="e-Cricket"
                  />
                  <span className="ml-1 autoAnimate text-text_Quaternary text-xs capitalize pr-[2px] md:text-sm text-nowrap w-full truncate font-lato-bold font-semibold md:font-semibold">
                    e-Cricket
                  </span>
                </div>
                <div className="absolute top-0 left-0 w-full h-full min-h-9 rounded-[4px]"></div>
              </div>
            </span>
          </div>
          <div title="QuickButtons-10" className="grid grid-row-2">
            <span title="Card Games" className="col-span-1 px-[3px] py-[3px]">
              <div
                className="relative w-full active:scale-95 cursor-pointer bg-bg_SkeletonBgLoaderColor transition-all ease-in-out duration-150 shadow-quickAccessBtnBoxShadows min-h-9 bg-cover bg-center bg-no-repeat rounded-[4px] overflow-hidden undefined"
                style={{
                  backgroundImage:
                    "url('https://promotions-material.s3.ap-south-1.amazonaws.com/sportsButtons/cricket-1696348461938')",
                }}
              >
                <div className="flex justify-center w-full h-full min-h-9 relative z-10 items-center min-w-[175px] sm:min-w-[240px] md:min-w-[280px] pl-[5px] pt-[2px] pb-[2px] pr-1 opacity-100">
                  <img
                    src="https://promotions-material.s3.ap-south-1.amazonaws.com/quickButtons/CardGames-1705911853726?q=65&amp;w=600&amp;px=auto&amp;auto=format"
                    width="16"
                    height="16"
                    className="w-4 h-4 sm:w-5 sm:h-5 ml-1 autoAnimate"
                    alt="Card Games-image"
                    loading="lazy"
                    title="Card Games"
                  />
                  <span className="ml-1 autoAnimate text-text_Quaternary text-xs capitalize pr-[2px] md:text-sm text-nowrap w-full truncate font-lato-bold font-semibold md:font-semibold">
                    Card Games
                  </span>
                </div>
                <div className="absolute top-0 left-0 w-full h-full min-h-9 rounded-[4px]"></div>
              </div>{" "}
            </span>
            <span title="Slot Games" className="col-span-1 px-[3px] py-[3px]">
              <div
                className="relative w-full active:scale-95 cursor-pointer bg-bg_SkeletonBgLoaderColor transition-all ease-in-out duration-150 shadow-quickAccessBtnBoxShadows min-h-9 bg-cover bg-center bg-no-repeat rounded-[4px] overflow-hidden undefined"
                style={{
                  backgroundImage:
                    "url('https://promotions-material.s3.ap-south-1.amazonaws.com/sportsButtons/cricket-1696348461938')",
                }}
              >
                <div className="flex justify-center w-full h-full min-h-9 relative z-10 items-center min-w-[175px] sm:min-w-[240px] md:min-w-[280px] pl-[5px] pt-[2px] pb-[2px] pr-1 opacity-100">
                  <img
                    src="https://promotions-material.s3.ap-south-1.amazonaws.com/quickButtons/SlotGames-1705912015300?q=65&amp;w=600&amp;px=auto&amp;auto=format"
                    width="16"
                    height="16"
                    className="w-4 h-4 sm:w-5 sm:h-5 ml-1 autoAnimate"
                    alt="Slot Games-image"
                    loading="lazy"
                    title="Slot Games"
                  />
                  <span className="ml-1 autoAnimate text-text_Quaternary text-xs capitalize pr-[2px] md:text-sm text-nowrap w-full truncate font-lato-bold font-semibold md:font-semibold">
                    Slot Games
                  </span>
                </div>
                <div className="absolute top-0 left-0 w-full h-full min-h-9 rounded-[4px]"></div>
              </div>
            </span>
          </div>
          <div title="QuickButtons-12" className="grid grid-row-2">
            <span
              title="Multiplayer Games"
              className="col-span-1 px-[3px] py-[3px]"
            >
              <div
                className="relative w-full active:scale-95 cursor-pointer bg-bg_SkeletonBgLoaderColor transition-all ease-in-out duration-150 shadow-quickAccessBtnBoxShadows min-h-9 bg-cover bg-center bg-no-repeat rounded-[4px] overflow-hidden undefined"
                style={{
                  backgroundImage:
                    "url('https://promotions-material.s3.ap-south-1.amazonaws.com/sportsButtons/cricket-1696348461938')",
                }}
              >
                <div className="flex justify-center w-full h-full min-h-9 relative z-10 items-center min-w-[175px] sm:min-w-[240px] md:min-w-[280px] pl-[5px] pt-[2px] pb-[2px] pr-1 opacity-100">
                  <img
                    src="https://promotions-material.s3.ap-south-1.amazonaws.com/quickButtons/MultiplayerGames-1705912077489"
                    width="16"
                    height="16"
                    className="w-4 h-4 sm:w-5 sm:h-5 ml-1 autoAnimate"
                    alt="Multiplayer Games-image"
                    loading="lazy"
                    title="Multiplayer Games"
                  />
                  <span className="ml-1 autoAnimate text-text_Quaternary text-xs capitalize pr-[2px] md:text-sm text-nowrap w-full truncate font-lato-bold font-semibold md:font-semibold">
                    Multiplayer Games
                  </span>
                </div>
                <div className="absolute top-0 left-0 w-full h-full min-h-9 rounded-[4px]"></div>
              </div>{" "}
            </span>
            <span
              title="Fishing games"
              className="col-span-1 px-[3px] py-[3px]"
            >
              <div
                className="relative w-full active:scale-95 cursor-pointer bg-bg_SkeletonBgLoaderColor transition-all ease-in-out duration-150 shadow-quickAccessBtnBoxShadows min-h-9 bg-cover bg-center bg-no-repeat rounded-[4px] overflow-hidden undefined"
                style={{
                  backgroundImage:
                    "url('https://promotions-material.s3.ap-south-1.amazonaws.com/sportsButtons/cricket-1696348461938')",
                }}
              >
                <div className="flex justify-center w-full h-full min-h-9 relative z-10 items-center min-w-[175px] sm:min-w-[240px] md:min-w-[280px] pl-[5px] pt-[2px] pb-[2px] pr-1 opacity-100">
                  <img
                    src="https://promotions-material.s3.ap-south-1.amazonaws.com/quickButtons/Fishinggames-1705912252627"
                    width="16"
                    height="16"
                    className="w-4 h-4 sm:w-5 sm:h-5 ml-1 autoAnimate"
                    alt="Fishing games-image"
                    loading="lazy"
                    title="Fishing games"
                  />
                  <span className="ml-1 autoAnimate text-text_Quaternary text-xs capitalize pr-[2px] md:text-sm text-nowrap w-full truncate font-lato-bold font-semibold md:font-semibold">
                    Fishing games
                  </span>
                </div>
                <div className="absolute top-0 left-0 w-full h-full min-h-9 rounded-[4px]"></div>
              </div>
            </span>
          </div>
          <div title="QuickButtons-0" className="grid grid-row-2">
            <span title="Aviator" className="col-span-1 px-[3px] py-[3px]">
              <div
                className="relative w-full active:scale-95 cursor-pointer bg-bg_SkeletonBgLoaderColor transition-all ease-in-out duration-150 shadow-quickAccessBtnBoxShadows min-h-9 bg-cover bg-center bg-no-repeat rounded-[4px] overflow-hidden undefined"
                style={{
                  backgroundImage:
                    "url('https://promotions-material.s3.ap-south-1.amazonaws.com/sportsButtons/cricket-1696348461938')",
                }}
              >
                <div className="flex justify-center w-full h-full min-h-9 relative z-10 items-center min-w-[175px] sm:min-w-[240px] md:min-w-[280px] pl-[5px] pt-[2px] pb-[2px] pr-1 opacity-100">
                  <img
                    src="https://promotions-material.s3.ap-south-1.amazonaws.com/quickButtons/Aviator-1705911963125?q=65&amp;w=600&amp;px=auto&amp;auto=format"
                    width="16"
                    height="16"
                    className="w-4 h-4 sm:w-5 sm:h-5 ml-1 autoAnimate"
                    alt="Aviator-image"
                    loading="lazy"
                    title="Aviator"
                  />
                  <span className="ml-1 autoAnimate text-text_Quaternary text-xs capitalize pr-[2px] md:text-sm text-nowrap w-full truncate font-lato-bold font-semibold md:font-semibold">
                    Aviator
                  </span>
                </div>
                <div className="absolute top-0 left-0 w-full h-full min-h-9 rounded-[4px]"></div>
              </div>{" "}
            </span>
            <span title="Aura" className="col-span-1 px-[3px] py-[3px]">
              <div
                className="relative w-full active:scale-95 cursor-pointer bg-bg_SkeletonBgLoaderColor transition-all ease-in-out duration-150 shadow-quickAccessBtnBoxShadows min-h-9 bg-cover bg-center bg-no-repeat rounded-[4px] overflow-hidden undefined"
                style={{
                  backgroundImage:
                    "url('https://promotions-material.s3.ap-south-1.amazonaws.com/sportsButtons/cricket-1696348461938')",
                }}
              >
                <div className="flex justify-center w-full h-full min-h-9 relative z-10 items-center min-w-[175px] sm:min-w-[240px] md:min-w-[280px] pl-[5px] pt-[2px] pb-[2px] pr-1 opacity-100">
                  <img
                    src="https://promotions-material.s3.ap-south-1.amazonaws.com/quickButtons/Aura-1705912199647?q=65&amp;w=600&amp;px=auto&amp;auto=format"
                    width="16"
                    height="16"
                    className="w-4 h-4 sm:w-5 sm:h-5 ml-1 autoAnimate"
                    alt="Aura-image"
                    loading="lazy"
                    title="Aura"
                  />
                  <span className="ml-1 autoAnimate text-text_Quaternary text-xs capitalize pr-[2px] md:text-sm text-nowrap w-full truncate font-lato-bold font-semibold md:font-semibold">
                    Aura
                  </span>
                </div>
                <div className="absolute top-0 left-0 w-full h-full min-h-9 rounded-[4px]"></div>
              </div>
            </span>
          </div>
          <div title="QuickButtons-2" className="grid grid-row-2">
            <span title="Mines" className="col-span-1 px-[3px] py-[3px]">
              <div
                className="relative w-full active:scale-95 cursor-pointer bg-bg_SkeletonBgLoaderColor transition-all ease-in-out duration-150 shadow-quickAccessBtnBoxShadows min-h-9 bg-cover bg-center bg-no-repeat rounded-[4px] overflow-hidden undefined"
                style={{
                  backgroundImage:
                    "url('https://promotions-material.s3.ap-south-1.amazonaws.com/sportsButtons/cricket-1696348461938')",
                }}
              >
                <div className="flex justify-center w-full h-full min-h-9 relative z-10 items-center min-w-[175px] sm:min-w-[240px] md:min-w-[280px] pl-[5px] pt-[2px] pb-[2px] pr-1 opacity-100">
                  <img
                    src="https://promotions-material.s3.ap-south-1.amazonaws.com/quickButtons/diamond_icon.png?q=65&amp;w=600&amp;px=auto&amp;auto=format"
                    width="16"
                    height="16"
                    className="w-4 h-4 sm:w-5 sm:h-5 ml-1 autoAnimate"
                    alt="Mines-image"
                    loading="lazy"
                    title="Mines"
                  />
                  <span className="ml-1 autoAnimate text-text_Quaternary text-xs capitalize pr-[2px] md:text-sm text-nowrap w-full truncate font-lato-bold font-semibold md:font-semibold">
                    Mines
                  </span>
                </div>
                <div className="absolute top-0 left-0 w-full h-full min-h-9 rounded-[4px]"></div>
              </div>{" "}
            </span>
            <span title="Limbo" className="col-span-1 px-[3px] py-[3px]">
              <div
                className="relative w-full active:scale-95 cursor-pointer bg-bg_SkeletonBgLoaderColor transition-all ease-in-out duration-150 shadow-quickAccessBtnBoxShadows min-h-9 bg-cover bg-center bg-no-repeat rounded-[4px] overflow-hidden undefined"
                style={{
                  backgroundImage:
                    "url('https://promotions-material.s3.ap-south-1.amazonaws.com/sportsButtons/cricket-1696348461938')",
                }}
              >
                <div className="flex justify-center w-full h-full min-h-9 relative z-10 items-center min-w-[175px] sm:min-w-[240px] md:min-w-[280px] pl-[5px] pt-[2px] pb-[2px] pr-1 opacity-100">
                  <img
                    src="https://promotions-material.s3.ap-south-1.amazonaws.com/quickButtons/Aviator-1705911963125?q=65&amp;w=600&amp;px=auto&amp;auto=format"
                    width="16"
                    height="16"
                    className="w-4 h-4 sm:w-5 sm:h-5 ml-1 autoAnimate"
                    alt="Limbo-image"
                    loading="lazy"
                    title="Limbo"
                  />
                  <span className="ml-1 autoAnimate text-text_Quaternary text-xs capitalize pr-[2px] md:text-sm text-nowrap w-full truncate font-lato-bold font-semibold md:font-semibold">
                    Limbo
                  </span>
                </div>
                <div className="absolute top-0 left-0 w-full h-full min-h-9 rounded-[4px]"></div>
              </div>
            </span>
          </div>
          <div title="QuickButtons-4" className="grid grid-row-2">
            <span title="Color Game" className="col-span-1 px-[3px] py-[3px]">
              <div
                className="relative w-full active:scale-95 cursor-pointer bg-bg_SkeletonBgLoaderColor transition-all ease-in-out duration-150 shadow-quickAccessBtnBoxShadows min-h-9 bg-cover bg-center bg-no-repeat rounded-[4px] overflow-hidden undefined"
                style={{
                  backgroundImage:
                    "url('https://promotions-material.s3.ap-south-1.amazonaws.com/sportsButtons/cricket-1696348461938')",
                }}
              >
                <div className="flex justify-center w-full h-full min-h-9 relative z-10 items-center min-w-[175px] sm:min-w-[240px] md:min-w-[280px] pl-[5px] pt-[2px] pb-[2px] pr-1 opacity-100">
                  <img
                    src="https://promomaterial.imgix.net/quickButtons/ColorGame-1718191763431"
                    width="16"
                    height="16"
                    className="w-4 h-4 sm:w-5 sm:h-5 ml-1 autoAnimate"
                    alt="Color Game-image"
                    loading="lazy"
                    title="Color Game"
                  />
                  <span className="ml-1 autoAnimate text-text_Quaternary text-xs capitalize pr-[2px] md:text-sm text-nowrap w-full truncate font-lato-bold font-semibold md:font-semibold">
                    Color Game
                  </span>
                </div>
                <div className="absolute top-0 left-0 w-full h-full min-h-9 rounded-[4px]"></div>
              </div>{" "}
            </span>
            <span
              title="Tower Legends"
              className="col-span-1 px-[3px] py-[3px]"
            >
              <div
                className="relative w-full active:scale-95 cursor-pointer bg-bg_SkeletonBgLoaderColor transition-all ease-in-out duration-150 shadow-quickAccessBtnBoxShadows min-h-9 bg-cover bg-center bg-no-repeat rounded-[4px] overflow-hidden undefined"
                style={{
                  backgroundImage:
                    "url('https://promotions-material.s3.ap-south-1.amazonaws.com/sportsButtons/cricket-1696348461938')",
                }}
              >
                <div className="flex justify-center w-full h-full min-h-9 relative z-10 items-center min-w-[175px] sm:min-w-[240px] md:min-w-[280px] pl-[5px] pt-[2px] pb-[2px] pr-1 opacity-100">
                  <img
                    src="https://promomaterial.imgix.net/quickButtons/TowerLegends-1722000145474"
                    width="16"
                    height="16"
                    className="w-4 h-4 sm:w-5 sm:h-5 ml-1 autoAnimate"
                    alt="Tower Legends-image"
                    loading="lazy"
                    title="Tower Legends"
                  />
                  <span className="ml-1 autoAnimate text-text_Quaternary text-xs capitalize pr-[2px] md:text-sm text-nowrap w-full truncate font-lato-bold font-semibold md:font-semibold">
                    Tower Legends
                  </span>
                </div>
                <div className="absolute top-0 left-0 w-full h-full min-h-9 rounded-[4px]"></div>
              </div>
            </span>
          </div>
          <div title="QuickButtons-6" className="grid grid-row-2">
            <span title="Evolution" className="col-span-1 px-[3px] py-[3px]">
              <div
                className="relative w-full active:scale-95 cursor-pointer bg-bg_SkeletonBgLoaderColor transition-all ease-in-out duration-150 shadow-quickAccessBtnBoxShadows min-h-9 bg-cover bg-center bg-no-repeat rounded-[4px] overflow-hidden undefined"
                style={{
                  backgroundImage:
                    "url('https://promotions-material.s3.ap-south-1.amazonaws.com/sportsButtons/cricket-1696348461938')",
                }}
              >
                <div className="flex justify-center w-full h-full min-h-9 relative z-10 items-center min-w-[175px] sm:min-w-[240px] md:min-w-[280px] pl-[5px] pt-[2px] pb-[2px] pr-1 opacity-100">
                  <img
                    src="https://promotions-material.s3.ap-south-1.amazonaws.com/quickButtons/Evolution-1705911275817?q=65&amp;w=600&amp;px=auto&amp;auto=format"
                    width="16"
                    height="16"
                    className="w-4 h-4 sm:w-5 sm:h-5 ml-1 autoAnimate"
                    alt="Evolution-image"
                    loading="lazy"
                    title="Evolution"
                  />
                  <span className="ml-1 autoAnimate text-text_Quaternary text-xs capitalize pr-[2px] md:text-sm text-nowrap w-full truncate font-lato-bold font-semibold md:font-semibold">
                    Evolution
                  </span>
                </div>
                <div className="absolute top-0 left-0 w-full h-full min-h-9 rounded-[4px]"></div>
              </div>{" "}
            </span>
            <span title="Sportsbook" className="col-span-1 px-[3px] py-[3px]">
              <div
                className="relative w-full active:scale-95 cursor-pointer bg-bg_SkeletonBgLoaderColor transition-all ease-in-out duration-150 shadow-quickAccessBtnBoxShadows min-h-9 bg-cover bg-center bg-no-repeat rounded-[4px] overflow-hidden undefined"
                style={{
                  backgroundImage:
                    "url('https://promotions-material.s3.ap-south-1.amazonaws.com/sportsButtons/cricket-1696348461938')",
                }}
              >
                <div className="flex justify-center w-full h-full min-h-9 relative z-10 items-center min-w-[175px] sm:min-w-[240px] md:min-w-[280px] pl-[5px] pt-[2px] pb-[2px] pr-1 opacity-100">
                  <img
                    src="https://promotions-material.s3.ap-south-1.amazonaws.com/quickButtons/Sportsbook-1705911352029?q=65&amp;w=600&amp;px=auto&amp;auto=format"
                    width="16"
                    height="16"
                    className="w-4 h-4 sm:w-5 sm:h-5 ml-1 autoAnimate"
                    alt="Sportsbook-image"
                    loading="lazy"
                    title="Sportsbook"
                  />
                  <span className="ml-1 autoAnimate text-text_Quaternary text-xs capitalize pr-[2px] md:text-sm text-nowrap w-full truncate font-lato-bold font-semibold md:font-semibold">
                    Sportsbook
                  </span>
                </div>
                <div className="absolute top-0 left-0 w-full h-full min-h-9 rounded-[4px]"></div>
              </div>
            </span>
          </div>
          <div title="QuickButtons-8" className="grid grid-row-2">
            <span title="Live Casinos" className="col-span-1 px-[3px] py-[3px]">
              <div
                className="relative w-full active:scale-95 cursor-pointer bg-bg_SkeletonBgLoaderColor transition-all ease-in-out duration-150 shadow-quickAccessBtnBoxShadows min-h-9 bg-cover bg-center bg-no-repeat rounded-[4px] overflow-hidden undefined"
                style={{
                  backgroundImage:
                    "url('https://promotions-material.s3.ap-south-1.amazonaws.com/sportsButtons/cricket-1696348461938')",
                }}
              >
                <div className="flex justify-center w-full h-full min-h-9 relative z-10 items-center min-w-[175px] sm:min-w-[240px] md:min-w-[280px] pl-[5px] pt-[2px] pb-[2px] pr-1 opacity-100">
                  <img
                    src="https://promotions-material.s3.ap-south-1.amazonaws.com/quickButtons/LiveCasinos-1705911704279?q=65&amp;w=600&amp;px=auto&amp;auto=format"
                    width="16"
                    height="16"
                    className="w-4 h-4 sm:w-5 sm:h-5 ml-1 autoAnimate"
                    alt="Live Casinos-image"
                    loading="lazy"
                    title="Live Casinos"
                  />
                  <span className="ml-1 autoAnimate text-text_Quaternary text-xs capitalize pr-[2px] md:text-sm text-nowrap w-full truncate font-lato-bold font-semibold md:font-semibold">
                    Live Casinos
                  </span>
                </div>
                <div className="absolute top-0 left-0 w-full h-full min-h-9 rounded-[4px]"></div>
              </div>{" "}
            </span>
            <span title="e-Cricket" className="col-span-1 px-[3px] py-[3px]">
              <div
                className="relative w-full active:scale-95 cursor-pointer bg-bg_SkeletonBgLoaderColor transition-all ease-in-out duration-150 shadow-quickAccessBtnBoxShadows min-h-9 bg-cover bg-center bg-no-repeat rounded-[4px] overflow-hidden undefined"
                style={{
                  backgroundImage:
                    "url('https://promotions-material.s3.ap-south-1.amazonaws.com/sportsButtons/cricket-1696348461938')",
                }}
              >
                <div className="flex justify-center w-full h-full min-h-9 relative z-10 items-center min-w-[175px] sm:min-w-[240px] md:min-w-[280px] pl-[5px] pt-[2px] pb-[2px] pr-1 opacity-100">
                  <img
                    src="https://promotions-material.s3.ap-south-1.amazonaws.com/quickButtons/e-Cricket-1705911799122?q=65&amp;w=600&amp;px=auto&amp;auto=format"
                    width="16"
                    height="16"
                    className="w-4 h-4 sm:w-5 sm:h-5 ml-1 autoAnimate"
                    alt="e-Cricket-image"
                    loading="lazy"
                    title="e-Cricket"
                  />
                  <span className="ml-1 autoAnimate text-text_Quaternary text-xs capitalize pr-[2px] md:text-sm text-nowrap w-full truncate font-lato-bold font-semibold md:font-semibold">
                    e-Cricket
                  </span>
                </div>
                <div className="absolute top-0 left-0 w-full h-full min-h-9 rounded-[4px]"></div>
              </div>
            </span>
          </div>
          <div title="QuickButtons-10" className="grid grid-row-2">
            <span title="Card Games" className="col-span-1 px-[3px] py-[3px]">
              <div
                className="relative w-full active:scale-95 cursor-pointer bg-bg_SkeletonBgLoaderColor transition-all ease-in-out duration-150 shadow-quickAccessBtnBoxShadows min-h-9 bg-cover bg-center bg-no-repeat rounded-[4px] overflow-hidden undefined"
                style={{
                  backgroundImage:
                    "url('https://promotions-material.s3.ap-south-1.amazonaws.com/sportsButtons/cricket-1696348461938')",
                }}
              >
                <div className="flex justify-center w-full h-full min-h-9 relative z-10 items-center min-w-[175px] sm:min-w-[240px] md:min-w-[280px] pl-[5px] pt-[2px] pb-[2px] pr-1 opacity-100">
                  <img
                    src="https://promotions-material.s3.ap-south-1.amazonaws.com/quickButtons/CardGames-1705911853726?q=65&amp;w=600&amp;px=auto&amp;auto=format"
                    width="16"
                    height="16"
                    className="w-4 h-4 sm:w-5 sm:h-5 ml-1 autoAnimate"
                    alt="Card Games-image"
                    loading="lazy"
                    title="Card Games"
                  />
                  <span className="ml-1 autoAnimate text-text_Quaternary text-xs capitalize pr-[2px] md:text-sm text-nowrap w-full truncate font-lato-bold font-semibold md:font-semibold">
                    Card Games
                  </span>
                </div>
                <div className="absolute top-0 left-0 w-full h-full min-h-9 rounded-[4px]"></div>
              </div>{" "}
            </span>
            <span title="Slot Games" className="col-span-1 px-[3px] py-[3px]">
              <div
                className="relative w-full active:scale-95 cursor-pointer bg-bg_SkeletonBgLoaderColor transition-all ease-in-out duration-150 shadow-quickAccessBtnBoxShadows min-h-9 bg-cover bg-center bg-no-repeat rounded-[4px] overflow-hidden undefined"
                style={{
                  backgroundImage:
                    "url('https://promotions-material.s3.ap-south-1.amazonaws.com/sportsButtons/cricket-1696348461938')",
                }}
              >
                <div className="flex justify-center w-full h-full min-h-9 relative z-10 items-center min-w-[175px] sm:min-w-[240px] md:min-w-[280px] pl-[5px] pt-[2px] pb-[2px] pr-1 opacity-100">
                  <img
                    src="https://promotions-material.s3.ap-south-1.amazonaws.com/quickButtons/SlotGames-1705912015300?q=65&amp;w=600&amp;px=auto&amp;auto=format"
                    width="16"
                    height="16"
                    className="w-4 h-4 sm:w-5 sm:h-5 ml-1 autoAnimate"
                    alt="Slot Games-image"
                    loading="lazy"
                    title="Slot Games"
                  />
                  <span className="ml-1 autoAnimate text-text_Quaternary text-xs capitalize pr-[2px] md:text-sm text-nowrap w-full truncate font-lato-bold font-semibold md:font-semibold">
                    Slot Games
                  </span>
                </div>
                <div className="absolute top-0 left-0 w-full h-full min-h-9 rounded-[4px]"></div>
              </div>
            </span>
          </div>
          <div title="QuickButtons-12" className="grid grid-row-2">
            <span
              title="Multiplayer Games"
              className="col-span-1 px-[3px] py-[3px]"
            >
              <div
                className="relative w-full active:scale-95 cursor-pointer bg-bg_SkeletonBgLoaderColor transition-all ease-in-out duration-150 shadow-quickAccessBtnBoxShadows min-h-9 bg-cover bg-center bg-no-repeat rounded-[4px] overflow-hidden undefined"
                style={{
                  backgroundImage:
                    "url('https://promotions-material.s3.ap-south-1.amazonaws.com/sportsButtons/cricket-1696348461938')",
                }}
              >
                <div className="flex justify-center w-full h-full min-h-9 relative z-10 items-center min-w-[175px] sm:min-w-[240px] md:min-w-[280px] pl-[5px] pt-[2px] pb-[2px] pr-1 opacity-100">
                  <img
                    src="https://promotions-material.s3.ap-south-1.amazonaws.com/quickButtons/MultiplayerGames-1705912077489"
                    width="16"
                    height="16"
                    className="w-4 h-4 sm:w-5 sm:h-5 ml-1 autoAnimate"
                    alt="Multiplayer Games-image"
                    loading="lazy"
                    title="Multiplayer Games"
                  />
                  <span className="ml-1 autoAnimate text-text_Quaternary text-xs capitalize pr-[2px] md:text-sm text-nowrap w-full truncate font-lato-bold font-semibold md:font-semibold">
                    Multiplayer Games
                  </span>
                </div>
                <div className="absolute top-0 left-0 w-full h-full min-h-9 rounded-[4px]"></div>
              </div>{" "}
            </span>
            <span
              title="Fishing games"
              className="col-span-1 px-[3px] py-[3px]"
            >
              <div
                className="relative w-full active:scale-95 cursor-pointer bg-bg_SkeletonBgLoaderColor transition-all ease-in-out duration-150 shadow-quickAccessBtnBoxShadows min-h-9 bg-cover bg-center bg-no-repeat rounded-[4px] overflow-hidden undefined"
                style={{
                  backgroundImage:
                    "url('https://promotions-material.s3.ap-south-1.amazonaws.com/sportsButtons/cricket-1696348461938')",
                }}
              >
                <div className="flex justify-center w-full h-full min-h-9 relative z-10 items-center min-w-[175px] sm:min-w-[240px] md:min-w-[280px] pl-[5px] pt-[2px] pb-[2px] pr-1 opacity-100">
                  <img
                    src="https://promotions-material.s3.ap-south-1.amazonaws.com/quickButtons/Fishinggames-1705912252627"
                    width="16"
                    height="16"
                    className="w-4 h-4 sm:w-5 sm:h-5 ml-1 autoAnimate"
                    alt="Fishing games-image"
                    loading="lazy"
                    title="Fishing games"
                  />
                  <span className="ml-1 autoAnimate text-text_Quaternary text-xs capitalize pr-[2px] md:text-sm text-nowrap w-full truncate font-lato-bold font-semibold md:font-semibold">
                    Fishing games
                  </span>
                </div>
                <div className="absolute top-0 left-0 w-full h-full min-h-9 rounded-[4px]"></div>
              </div>
            </span>
          </div>
          <div title="QuickButtons-0" className="grid grid-row-2">
            <span title="Aviator" className="col-span-1 px-[3px] py-[3px]">
              <div
                className="relative w-full active:scale-95 cursor-pointer bg-bg_SkeletonBgLoaderColor transition-all ease-in-out duration-150 shadow-quickAccessBtnBoxShadows min-h-9 bg-cover bg-center bg-no-repeat rounded-[4px] overflow-hidden undefined"
                style={{
                  backgroundImage:
                    "url('https://promotions-material.s3.ap-south-1.amazonaws.com/sportsButtons/cricket-1696348461938')",
                }}
              >
                <div className="flex justify-center w-full h-full min-h-9 relative z-10 items-center min-w-[175px] sm:min-w-[240px] md:min-w-[280px] pl-[5px] pt-[2px] pb-[2px] pr-1 opacity-100">
                  <img
                    src="https://promotions-material.s3.ap-south-1.amazonaws.com/quickButtons/Aviator-1705911963125?q=65&amp;w=600&amp;px=auto&amp;auto=format"
                    width="16"
                    height="16"
                    className="w-4 h-4 sm:w-5 sm:h-5 ml-1 autoAnimate"
                    alt="Aviator-image"
                    loading="lazy"
                    title="Aviator"
                  />
                  <span className="ml-1 autoAnimate text-text_Quaternary text-xs capitalize pr-[2px] md:text-sm text-nowrap w-full truncate font-lato-bold font-semibold md:font-semibold">
                    Aviator
                  </span>
                </div>
                <div className="absolute top-0 left-0 w-full h-full min-h-9 rounded-[4px]"></div>
              </div>{" "}
            </span>
            <span title="Aura" className="col-span-1 px-[3px] py-[3px]">
              <div
                className="relative w-full active:scale-95 cursor-pointer bg-bg_SkeletonBgLoaderColor transition-all ease-in-out duration-150 shadow-quickAccessBtnBoxShadows min-h-9 bg-cover bg-center bg-no-repeat rounded-[4px] overflow-hidden undefined"
                style={{
                  backgroundImage:
                    "url('https://promotions-material.s3.ap-south-1.amazonaws.com/sportsButtons/cricket-1696348461938')",
                }}
              >
                <div className="flex justify-center w-full h-full min-h-9 relative z-10 items-center min-w-[175px] sm:min-w-[240px] md:min-w-[280px] pl-[5px] pt-[2px] pb-[2px] pr-1 opacity-100">
                  <img
                    src="https://promotions-material.s3.ap-south-1.amazonaws.com/quickButtons/Aura-1705912199647?q=65&amp;w=600&amp;px=auto&amp;auto=format"
                    width="16"
                    height="16"
                    className="w-4 h-4 sm:w-5 sm:h-5 ml-1 autoAnimate"
                    alt="Aura-image"
                    loading="lazy"
                    title="Aura"
                  />
                  <span className="ml-1 autoAnimate text-text_Quaternary text-xs capitalize pr-[2px] md:text-sm text-nowrap w-full truncate font-lato-bold font-semibold md:font-semibold">
                    Aura
                  </span>
                </div>
                <div className="absolute top-0 left-0 w-full h-full min-h-9 rounded-[4px]"></div>
              </div>
            </span>
          </div>
          <div title="QuickButtons-2" className="grid grid-row-2">
            <span title="Mines" className="col-span-1 px-[3px] py-[3px]">
              <div
                className="relative w-full active:scale-95 cursor-pointer bg-bg_SkeletonBgLoaderColor transition-all ease-in-out duration-150 shadow-quickAccessBtnBoxShadows min-h-9 bg-cover bg-center bg-no-repeat rounded-[4px] overflow-hidden undefined"
                style={{
                  backgroundImage:
                    "url('https://promotions-material.s3.ap-south-1.amazonaws.com/sportsButtons/cricket-1696348461938')",
                }}
              >
                <div className="flex justify-center w-full h-full min-h-9 relative z-10 items-center min-w-[175px] sm:min-w-[240px] md:min-w-[280px] pl-[5px] pt-[2px] pb-[2px] pr-1 opacity-100">
                  <img
                    src="https://promotions-material.s3.ap-south-1.amazonaws.com/quickButtons/diamond_icon.png?q=65&amp;w=600&amp;px=auto&amp;auto=format"
                    width="16"
                    height="16"
                    className="w-4 h-4 sm:w-5 sm:h-5 ml-1 autoAnimate"
                    alt="Mines-image"
                    loading="lazy"
                    title="Mines"
                  />
                  <span className="ml-1 autoAnimate text-text_Quaternary text-xs capitalize pr-[2px] md:text-sm text-nowrap w-full truncate font-lato-bold font-semibold md:font-semibold">
                    Mines
                  </span>
                </div>
                <div className="absolute top-0 left-0 w-full h-full min-h-9 rounded-[4px]"></div>
              </div>{" "}
            </span>
            <span title="Limbo" className="col-span-1 px-[3px] py-[3px]">
              <div
                className="relative w-full active:scale-95 cursor-pointer bg-bg_SkeletonBgLoaderColor transition-all ease-in-out duration-150 shadow-quickAccessBtnBoxShadows min-h-9 bg-cover bg-center bg-no-repeat rounded-[4px] overflow-hidden undefined"
                style={{
                  backgroundImage:
                    "url('https://promotions-material.s3.ap-south-1.amazonaws.com/sportsButtons/cricket-1696348461938')",
                }}
              >
                <div className="flex justify-center w-full h-full min-h-9 relative z-10 items-center min-w-[175px] sm:min-w-[240px] md:min-w-[280px] pl-[5px] pt-[2px] pb-[2px] pr-1 opacity-100">
                  <img
                    src="https://promotions-material.s3.ap-south-1.amazonaws.com/quickButtons/Aviator-1705911963125?q=65&amp;w=600&amp;px=auto&amp;auto=format"
                    width="16"
                    height="16"
                    className="w-4 h-4 sm:w-5 sm:h-5 ml-1 autoAnimate"
                    alt="Limbo-image"
                    loading="lazy"
                    title="Limbo"
                  />
                  <span className="ml-1 autoAnimate text-text_Quaternary text-xs capitalize pr-[2px] md:text-sm text-nowrap w-full truncate font-lato-bold font-semibold md:font-semibold">
                    Limbo
                  </span>
                </div>
                <div className="absolute top-0 left-0 w-full h-full min-h-9 rounded-[4px]"></div>
              </div>
            </span>
          </div>
          <div title="QuickButtons-4" className="grid grid-row-2">
            <span title="Color Game" className="col-span-1 px-[3px] py-[3px]">
              <div
                className="relative w-full active:scale-95 cursor-pointer bg-bg_SkeletonBgLoaderColor transition-all ease-in-out duration-150 shadow-quickAccessBtnBoxShadows min-h-9 bg-cover bg-center bg-no-repeat rounded-[4px] overflow-hidden undefined"
                style={{
                  backgroundImage:
                    "url('https://promotions-material.s3.ap-south-1.amazonaws.com/sportsButtons/cricket-1696348461938')",
                }}
              >
                <div className="flex justify-center w-full h-full min-h-9 relative z-10 items-center min-w-[175px] sm:min-w-[240px] md:min-w-[280px] pl-[5px] pt-[2px] pb-[2px] pr-1 opacity-100">
                  <img
                    src="https://promomaterial.imgix.net/quickButtons/ColorGame-1718191763431"
                    width="16"
                    height="16"
                    className="w-4 h-4 sm:w-5 sm:h-5 ml-1 autoAnimate"
                    alt="Color Game-image"
                    loading="lazy"
                    title="Color Game"
                  />
                  <span className="ml-1 autoAnimate text-text_Quaternary text-xs capitalize pr-[2px] md:text-sm text-nowrap w-full truncate font-lato-bold font-semibold md:font-semibold">
                    Color Game
                  </span>
                </div>
                <div className="absolute top-0 left-0 w-full h-full min-h-9 rounded-[4px]"></div>
              </div>{" "}
            </span>
            <span
              title="Tower Legends"
              className="col-span-1 px-[3px] py-[3px]"
            >
              <div
                className="relative w-full active:scale-95 cursor-pointer bg-bg_SkeletonBgLoaderColor transition-all ease-in-out duration-150 shadow-quickAccessBtnBoxShadows min-h-9 bg-cover bg-center bg-no-repeat rounded-[4px] overflow-hidden undefined"
                style={{
                  backgroundImage:
                    "url('https://promotions-material.s3.ap-south-1.amazonaws.com/sportsButtons/cricket-1696348461938')",
                }}
              >
                <div className="flex justify-center w-full h-full min-h-9 relative z-10 items-center min-w-[175px] sm:min-w-[240px] md:min-w-[280px] pl-[5px] pt-[2px] pb-[2px] pr-1 opacity-100">
                  <img
                    src="https://promomaterial.imgix.net/quickButtons/TowerLegends-1722000145474"
                    width="16"
                    height="16"
                    className="w-4 h-4 sm:w-5 sm:h-5 ml-1 autoAnimate"
                    alt="Tower Legends-image"
                    loading="lazy"
                    title="Tower Legends"
                  />
                  <span className="ml-1 autoAnimate text-text_Quaternary text-xs capitalize pr-[2px] md:text-sm text-nowrap w-full truncate font-lato-bold font-semibold md:font-semibold">
                    Tower Legends
                  </span>
                </div>
                <div className="absolute top-0 left-0 w-full h-full min-h-9 rounded-[4px]"></div>
              </div>
            </span>
          </div>
          <div title="QuickButtons-6" className="grid grid-row-2">
            <span title="Evolution" className="col-span-1 px-[3px] py-[3px]">
              <div
                className="relative w-full active:scale-95 cursor-pointer bg-bg_SkeletonBgLoaderColor transition-all ease-in-out duration-150 shadow-quickAccessBtnBoxShadows min-h-9 bg-cover bg-center bg-no-repeat rounded-[4px] overflow-hidden undefined"
                style={{
                  backgroundImage:
                    "url('https://promotions-material.s3.ap-south-1.amazonaws.com/sportsButtons/cricket-1696348461938')",
                }}
              >
                <div className="flex justify-center w-full h-full min-h-9 relative z-10 items-center min-w-[175px] sm:min-w-[240px] md:min-w-[280px] pl-[5px] pt-[2px] pb-[2px] pr-1 opacity-100">
                  <img
                    src="https://promotions-material.s3.ap-south-1.amazonaws.com/quickButtons/Evolution-1705911275817?q=65&amp;w=600&amp;px=auto&amp;auto=format"
                    width="16"
                    height="16"
                    className="w-4 h-4 sm:w-5 sm:h-5 ml-1 autoAnimate"
                    alt="Evolution-image"
                    loading="lazy"
                    title="Evolution"
                  />
                  <span className="ml-1 autoAnimate text-text_Quaternary text-xs capitalize pr-[2px] md:text-sm text-nowrap w-full truncate font-lato-bold font-semibold md:font-semibold">
                    Evolution
                  </span>
                </div>
                <div className="absolute top-0 left-0 w-full h-full min-h-9 rounded-[4px]"></div>
              </div>{" "}
            </span>
            <span title="Sportsbook" className="col-span-1 px-[3px] py-[3px]">
              <div
                className="relative w-full active:scale-95 cursor-pointer bg-bg_SkeletonBgLoaderColor transition-all ease-in-out duration-150 shadow-quickAccessBtnBoxShadows min-h-9 bg-cover bg-center bg-no-repeat rounded-[4px] overflow-hidden undefined"
                style={{
                  backgroundImage:
                    "url('https://promotions-material.s3.ap-south-1.amazonaws.com/sportsButtons/cricket-1696348461938')",
                }}
              >
                <div className="flex justify-center w-full h-full min-h-9 relative z-10 items-center min-w-[175px] sm:min-w-[240px] md:min-w-[280px] pl-[5px] pt-[2px] pb-[2px] pr-1 opacity-100">
                  <img
                    src="https://promotions-material.s3.ap-south-1.amazonaws.com/quickButtons/Sportsbook-1705911352029?q=65&amp;w=600&amp;px=auto&amp;auto=format"
                    width="16"
                    height="16"
                    className="w-4 h-4 sm:w-5 sm:h-5 ml-1 autoAnimate"
                    alt="Sportsbook-image"
                    loading="lazy"
                    title="Sportsbook"
                  />
                  <span className="ml-1 autoAnimate text-text_Quaternary text-xs capitalize pr-[2px] md:text-sm text-nowrap w-full truncate font-lato-bold font-semibold md:font-semibold">
                    Sportsbook
                  </span>
                </div>
                <div className="absolute top-0 left-0 w-full h-full min-h-9 rounded-[4px]"></div>
              </div>
            </span>
          </div>
          <div title="QuickButtons-8" className="grid grid-row-2">
            <span title="Live Casinos" className="col-span-1 px-[3px] py-[3px]">
              <div
                className="relative w-full active:scale-95 cursor-pointer bg-bg_SkeletonBgLoaderColor transition-all ease-in-out duration-150 shadow-quickAccessBtnBoxShadows min-h-9 bg-cover bg-center bg-no-repeat rounded-[4px] overflow-hidden undefined"
                style={{
                  backgroundImage:
                    "url('https://promotions-material.s3.ap-south-1.amazonaws.com/sportsButtons/cricket-1696348461938')",
                }}
              >
                <div className="flex justify-center w-full h-full min-h-9 relative z-10 items-center min-w-[175px] sm:min-w-[240px] md:min-w-[280px] pl-[5px] pt-[2px] pb-[2px] pr-1 opacity-100">
                  <img
                    src="https://promotions-material.s3.ap-south-1.amazonaws.com/quickButtons/LiveCasinos-1705911704279?q=65&amp;w=600&amp;px=auto&amp;auto=format"
                    width="16"
                    height="16"
                    className="w-4 h-4 sm:w-5 sm:h-5 ml-1 autoAnimate"
                    alt="Live Casinos-image"
                    loading="lazy"
                    title="Live Casinos"
                  />
                  <span className="ml-1 autoAnimate text-text_Quaternary text-xs capitalize pr-[2px] md:text-sm text-nowrap w-full truncate font-lato-bold font-semibold md:font-semibold">
                    Live Casinos
                  </span>
                </div>
                <div className="absolute top-0 left-0 w-full h-full min-h-9 rounded-[4px]"></div>
              </div>{" "}
            </span>
            <span title="e-Cricket" className="col-span-1 px-[3px] py-[3px]">
              <div
                className="relative w-full active:scale-95 cursor-pointer bg-bg_SkeletonBgLoaderColor transition-all ease-in-out duration-150 shadow-quickAccessBtnBoxShadows min-h-9 bg-cover bg-center bg-no-repeat rounded-[4px] overflow-hidden undefined"
                style={{
                  backgroundImage:
                    "url('https://promotions-material.s3.ap-south-1.amazonaws.com/sportsButtons/cricket-1696348461938')",
                }}
              >
                <div className="flex justify-center w-full h-full min-h-9 relative z-10 items-center min-w-[175px] sm:min-w-[240px] md:min-w-[280px] pl-[5px] pt-[2px] pb-[2px] pr-1 opacity-100">
                  <img
                    src="https://promotions-material.s3.ap-south-1.amazonaws.com/quickButtons/e-Cricket-1705911799122?q=65&amp;w=600&amp;px=auto&amp;auto=format"
                    width="16"
                    height="16"
                    className="w-4 h-4 sm:w-5 sm:h-5 ml-1 autoAnimate"
                    alt="e-Cricket-image"
                    loading="lazy"
                    title="e-Cricket"
                  />
                  <span className="ml-1 autoAnimate text-text_Quaternary text-xs capitalize pr-[2px] md:text-sm text-nowrap w-full truncate font-lato-bold font-semibold md:font-semibold">
                    e-Cricket
                  </span>
                </div>
                <div className="absolute top-0 left-0 w-full h-full min-h-9 rounded-[4px]"></div>
              </div>
            </span>
          </div>
          <div title="QuickButtons-10" className="grid grid-row-2">
            <span title="Card Games" className="col-span-1 px-[3px] py-[3px]">
              <div
                className="relative w-full active:scale-95 cursor-pointer bg-bg_SkeletonBgLoaderColor transition-all ease-in-out duration-150 shadow-quickAccessBtnBoxShadows min-h-9 bg-cover bg-center bg-no-repeat rounded-[4px] overflow-hidden undefined"
                style={{
                  backgroundImage:
                    "url('https://promotions-material.s3.ap-south-1.amazonaws.com/sportsButtons/cricket-1696348461938')",
                }}
              >
                <div className="flex justify-center w-full h-full min-h-9 relative z-10 items-center min-w-[175px] sm:min-w-[240px] md:min-w-[280px] pl-[5px] pt-[2px] pb-[2px] pr-1 opacity-100">
                  <img
                    src="https://promotions-material.s3.ap-south-1.amazonaws.com/quickButtons/CardGames-1705911853726?q=65&amp;w=600&amp;px=auto&amp;auto=format"
                    width="16"
                    height="16"
                    className="w-4 h-4 sm:w-5 sm:h-5 ml-1 autoAnimate"
                    alt="Card Games-image"
                    loading="lazy"
                    title="Card Games"
                  />
                  <span className="ml-1 autoAnimate text-text_Quaternary text-xs capitalize pr-[2px] md:text-sm text-nowrap w-full truncate font-lato-bold font-semibold md:font-semibold">
                    Card Games
                  </span>
                </div>
                <div className="absolute top-0 left-0 w-full h-full min-h-9 rounded-[4px]"></div>
              </div>{" "}
            </span>
            <span title="Slot Games" className="col-span-1 px-[3px] py-[3px]">
              <div
                className="relative w-full active:scale-95 cursor-pointer bg-bg_SkeletonBgLoaderColor transition-all ease-in-out duration-150 shadow-quickAccessBtnBoxShadows min-h-9 bg-cover bg-center bg-no-repeat rounded-[4px] overflow-hidden undefined"
                style={{
                  backgroundImage:
                    "url('https://promotions-material.s3.ap-south-1.amazonaws.com/sportsButtons/cricket-1696348461938')",
                }}
              >
                <div className="flex justify-center w-full h-full min-h-9 relative z-10 items-center min-w-[175px] sm:min-w-[240px] md:min-w-[280px] pl-[5px] pt-[2px] pb-[2px] pr-1 opacity-100">
                  <img
                    src="https://promotions-material.s3.ap-south-1.amazonaws.com/quickButtons/SlotGames-1705912015300?q=65&amp;w=600&amp;px=auto&amp;auto=format"
                    width="16"
                    height="16"
                    className="w-4 h-4 sm:w-5 sm:h-5 ml-1 autoAnimate"
                    alt="Slot Games-image"
                    loading="lazy"
                    title="Slot Games"
                  />
                  <span className="ml-1 autoAnimate text-text_Quaternary text-xs capitalize pr-[2px] md:text-sm text-nowrap w-full truncate font-lato-bold font-semibold md:font-semibold">
                    Slot Games
                  </span>
                </div>
                <div className="absolute top-0 left-0 w-full h-full min-h-9 rounded-[4px]"></div>
              </div>
            </span>
          </div>
          <div title="QuickButtons-12" className="grid grid-row-2">
            <span
              title="Multiplayer Games"
              className="col-span-1 px-[3px] py-[3px]"
            >
              <div
                className="relative w-full active:scale-95 cursor-pointer bg-bg_SkeletonBgLoaderColor transition-all ease-in-out duration-150 shadow-quickAccessBtnBoxShadows min-h-9 bg-cover bg-center bg-no-repeat rounded-[4px] overflow-hidden undefined"
                style={{
                  backgroundImage:
                    "url('https://promotions-material.s3.ap-south-1.amazonaws.com/sportsButtons/cricket-1696348461938')",
                }}
              >
                <div className="flex justify-center w-full h-full min-h-9 relative z-10 items-center min-w-[175px] sm:min-w-[240px] md:min-w-[280px] pl-[5px] pt-[2px] pb-[2px] pr-1 opacity-100">
                  <img
                    src="https://promotions-material.s3.ap-south-1.amazonaws.com/quickButtons/MultiplayerGames-1705912077489"
                    width="16"
                    height="16"
                    className="w-4 h-4 sm:w-5 sm:h-5 ml-1 autoAnimate"
                    alt="Multiplayer Games-image"
                    loading="lazy"
                    title="Multiplayer Games"
                  />
                  <span className="ml-1 autoAnimate text-text_Quaternary text-xs capitalize pr-[2px] md:text-sm text-nowrap w-full truncate font-lato-bold font-semibold md:font-semibold">
                    Multiplayer Games
                  </span>
                </div>
                <div className="absolute top-0 left-0 w-full h-full min-h-9 rounded-[4px]"></div>
              </div>{" "}
            </span>
            <span
              title="Fishing games"
              className="col-span-1 px-[3px] py-[3px]"
            >
              <div
                className="relative w-full active:scale-95 cursor-pointer bg-bg_SkeletonBgLoaderColor transition-all ease-in-out duration-150 shadow-quickAccessBtnBoxShadows min-h-9 bg-cover bg-center bg-no-repeat rounded-[4px] overflow-hidden undefined"
                style={{
                  backgroundImage:
                    "url('https://promotions-material.s3.ap-south-1.amazonaws.com/sportsButtons/cricket-1696348461938')",
                }}
              >
                <div className="flex justify-center w-full h-full min-h-9 relative z-10 items-center min-w-[175px] sm:min-w-[240px] md:min-w-[280px] pl-[5px] pt-[2px] pb-[2px] pr-1 opacity-100">
                  <img
                    src="https://promotions-material.s3.ap-south-1.amazonaws.com/quickButtons/Fishinggames-1705912252627"
                    width="16"
                    height="16"
                    className="w-4 h-4 sm:w-5 sm:h-5 ml-1 autoAnimate"
                    alt="Fishing games-image"
                    loading="lazy"
                    title="Fishing games"
                  />
                  <span className="ml-1 autoAnimate text-text_Quaternary text-xs capitalize pr-[2px] md:text-sm text-nowrap w-full truncate font-lato-bold font-semibold md:font-semibold">
                    Fishing games
                  </span>
                </div>
                <div className="absolute top-0 left-0 w-full h-full min-h-9 rounded-[4px]"></div>
              </div>
            </span>
          </div>
          <div title="QuickButtons-0" className="grid grid-row-2">
            <span title="Aviator" className="col-span-1 px-[3px] py-[3px]">
              <div
                className="relative w-full active:scale-95 cursor-pointer bg-bg_SkeletonBgLoaderColor transition-all ease-in-out duration-150 shadow-quickAccessBtnBoxShadows min-h-9 bg-cover bg-center bg-no-repeat rounded-[4px] overflow-hidden undefined"
                style={{
                  backgroundImage:
                    "url('https://promotions-material.s3.ap-south-1.amazonaws.com/sportsButtons/cricket-1696348461938')",
                }}
              >
                <div className="flex justify-center w-full h-full min-h-9 relative z-10 items-center min-w-[175px] sm:min-w-[240px] md:min-w-[280px] pl-[5px] pt-[2px] pb-[2px] pr-1 opacity-100">
                  <img
                    src="https://promotions-material.s3.ap-south-1.amazonaws.com/quickButtons/Aviator-1705911963125?q=65&amp;w=600&amp;px=auto&amp;auto=format"
                    width="16"
                    height="16"
                    className="w-4 h-4 sm:w-5 sm:h-5 ml-1 autoAnimate"
                    alt="Aviator-image"
                    loading="lazy"
                    title="Aviator"
                  />
                  <span className="ml-1 autoAnimate text-text_Quaternary text-xs capitalize pr-[2px] md:text-sm text-nowrap w-full truncate font-lato-bold font-semibold md:font-semibold">
                    Aviator
                  </span>
                </div>
                <div className="absolute top-0 left-0 w-full h-full min-h-9 rounded-[4px]"></div>
              </div>{" "}
            </span>
            <span title="Aura" className="col-span-1 px-[3px] py-[3px]">
              <div
                className="relative w-full active:scale-95 cursor-pointer bg-bg_SkeletonBgLoaderColor transition-all ease-in-out duration-150 shadow-quickAccessBtnBoxShadows min-h-9 bg-cover bg-center bg-no-repeat rounded-[4px] overflow-hidden undefined"
                style={{
                  backgroundImage:
                    "url('https://promotions-material.s3.ap-south-1.amazonaws.com/sportsButtons/cricket-1696348461938')",
                }}
              >
                <div className="flex justify-center w-full h-full min-h-9 relative z-10 items-center min-w-[175px] sm:min-w-[240px] md:min-w-[280px] pl-[5px] pt-[2px] pb-[2px] pr-1 opacity-100">
                  <img
                    src="https://promotions-material.s3.ap-south-1.amazonaws.com/quickButtons/Aura-1705912199647?q=65&amp;w=600&amp;px=auto&amp;auto=format"
                    width="16"
                    height="16"
                    className="w-4 h-4 sm:w-5 sm:h-5 ml-1 autoAnimate"
                    alt="Aura-image"
                    loading="lazy"
                    title="Aura"
                  />
                  <span className="ml-1 autoAnimate text-text_Quaternary text-xs capitalize pr-[2px] md:text-sm text-nowrap w-full truncate font-lato-bold font-semibold md:font-semibold">
                    Aura
                  </span>
                </div>
                <div className="absolute top-0 left-0 w-full h-full min-h-9 rounded-[4px]"></div>
              </div>
            </span>
          </div>
          <div title="QuickButtons-2" className="grid grid-row-2">
            <span title="Mines" className="col-span-1 px-[3px] py-[3px]">
              <div
                className="relative w-full active:scale-95 cursor-pointer bg-bg_SkeletonBgLoaderColor transition-all ease-in-out duration-150 shadow-quickAccessBtnBoxShadows min-h-9 bg-cover bg-center bg-no-repeat rounded-[4px] overflow-hidden undefined"
                style={{
                  backgroundImage:
                    "url('https://promotions-material.s3.ap-south-1.amazonaws.com/sportsButtons/cricket-1696348461938')",
                }}
              >
                <div className="flex justify-center w-full h-full min-h-9 relative z-10 items-center min-w-[175px] sm:min-w-[240px] md:min-w-[280px] pl-[5px] pt-[2px] pb-[2px] pr-1 opacity-100">
                  <img
                    src="https://promotions-material.s3.ap-south-1.amazonaws.com/quickButtons/diamond_icon.png?q=65&amp;w=600&amp;px=auto&amp;auto=format"
                    width="16"
                    height="16"
                    className="w-4 h-4 sm:w-5 sm:h-5 ml-1 autoAnimate"
                    alt="Mines-image"
                    loading="lazy"
                    title="Mines"
                  />
                  <span className="ml-1 autoAnimate text-text_Quaternary text-xs capitalize pr-[2px] md:text-sm text-nowrap w-full truncate font-lato-bold font-semibold md:font-semibold">
                    Mines
                  </span>
                </div>
                <div className="absolute top-0 left-0 w-full h-full min-h-9 rounded-[4px]"></div>
              </div>{" "}
            </span>
            <span title="Limbo" className="col-span-1 px-[3px] py-[3px]">
              <div
                className="relative w-full active:scale-95 cursor-pointer bg-bg_SkeletonBgLoaderColor transition-all ease-in-out duration-150 shadow-quickAccessBtnBoxShadows min-h-9 bg-cover bg-center bg-no-repeat rounded-[4px] overflow-hidden undefined"
                style={{
                  backgroundImage:
                    "url('https://promotions-material.s3.ap-south-1.amazonaws.com/sportsButtons/cricket-1696348461938')",
                }}
              >
                <div className="flex justify-center w-full h-full min-h-9 relative z-10 items-center min-w-[175px] sm:min-w-[240px] md:min-w-[280px] pl-[5px] pt-[2px] pb-[2px] pr-1 opacity-100">
                  <img
                    src="https://promotions-material.s3.ap-south-1.amazonaws.com/quickButtons/Aviator-1705911963125?q=65&amp;w=600&amp;px=auto&amp;auto=format"
                    width="16"
                    height="16"
                    className="w-4 h-4 sm:w-5 sm:h-5 ml-1 autoAnimate"
                    alt="Limbo-image"
                    loading="lazy"
                    title="Limbo"
                  />
                  <span className="ml-1 autoAnimate text-text_Quaternary text-xs capitalize pr-[2px] md:text-sm text-nowrap w-full truncate font-lato-bold font-semibold md:font-semibold">
                    Limbo
                  </span>
                </div>
                <div className="absolute top-0 left-0 w-full h-full min-h-9 rounded-[4px]"></div>
              </div>
            </span>
          </div>
          <div title="QuickButtons-4" className="grid grid-row-2">
            <span title="Color Game" className="col-span-1 px-[3px] py-[3px]">
              <div
                className="relative w-full active:scale-95 cursor-pointer bg-bg_SkeletonBgLoaderColor transition-all ease-in-out duration-150 shadow-quickAccessBtnBoxShadows min-h-9 bg-cover bg-center bg-no-repeat rounded-[4px] overflow-hidden undefined"
                style={{
                  backgroundImage:
                    "url('https://promotions-material.s3.ap-south-1.amazonaws.com/sportsButtons/cricket-1696348461938')",
                }}
              >
                <div className="flex justify-center w-full h-full min-h-9 relative z-10 items-center min-w-[175px] sm:min-w-[240px] md:min-w-[280px] pl-[5px] pt-[2px] pb-[2px] pr-1 opacity-100">
                  <img
                    src="https://promomaterial.imgix.net/quickButtons/ColorGame-1718191763431"
                    width="16"
                    height="16"
                    className="w-4 h-4 sm:w-5 sm:h-5 ml-1 autoAnimate"
                    alt="Color Game-image"
                    loading="lazy"
                    title="Color Game"
                  />
                  <span className="ml-1 autoAnimate text-text_Quaternary text-xs capitalize pr-[2px] md:text-sm text-nowrap w-full truncate font-lato-bold font-semibold md:font-semibold">
                    Color Game
                  </span>
                </div>
                <div className="absolute top-0 left-0 w-full h-full min-h-9 rounded-[4px]"></div>
              </div>{" "}
            </span>
            <span
              title="Tower Legends"
              className="col-span-1 px-[3px] py-[3px]"
            >
              <div
                className="relative w-full active:scale-95 cursor-pointer bg-bg_SkeletonBgLoaderColor transition-all ease-in-out duration-150 shadow-quickAccessBtnBoxShadows min-h-9 bg-cover bg-center bg-no-repeat rounded-[4px] overflow-hidden undefined"
                style={{
                  backgroundImage:
                    "url('https://promotions-material.s3.ap-south-1.amazonaws.com/sportsButtons/cricket-1696348461938')",
                }}
              >
                <div className="flex justify-center w-full h-full min-h-9 relative z-10 items-center min-w-[175px] sm:min-w-[240px] md:min-w-[280px] pl-[5px] pt-[2px] pb-[2px] pr-1 opacity-100">
                  <img
                    src="https://promomaterial.imgix.net/quickButtons/TowerLegends-1722000145474"
                    width="16"
                    height="16"
                    className="w-4 h-4 sm:w-5 sm:h-5 ml-1 autoAnimate"
                    alt="Tower Legends-image"
                    loading="lazy"
                    title="Tower Legends"
                  />
                  <span className="ml-1 autoAnimate text-text_Quaternary text-xs capitalize pr-[2px] md:text-sm text-nowrap w-full truncate font-lato-bold font-semibold md:font-semibold">
                    Tower Legends
                  </span>
                </div>
                <div className="absolute top-0 left-0 w-full h-full min-h-9 rounded-[4px]"></div>
              </div>
            </span>
          </div>
          <div title="QuickButtons-6" className="grid grid-row-2">
            <span title="Evolution" className="col-span-1 px-[3px] py-[3px]">
              <div
                className="relative w-full active:scale-95 cursor-pointer bg-bg_SkeletonBgLoaderColor transition-all ease-in-out duration-150 shadow-quickAccessBtnBoxShadows min-h-9 bg-cover bg-center bg-no-repeat rounded-[4px] overflow-hidden undefined"
                style={{
                  backgroundImage:
                    "url('https://promotions-material.s3.ap-south-1.amazonaws.com/sportsButtons/cricket-1696348461938')",
                }}
              >
                <div className="flex justify-center w-full h-full min-h-9 relative z-10 items-center min-w-[175px] sm:min-w-[240px] md:min-w-[280px] pl-[5px] pt-[2px] pb-[2px] pr-1 opacity-100">
                  <img
                    src="https://promotions-material.s3.ap-south-1.amazonaws.com/quickButtons/Evolution-1705911275817?q=65&amp;w=600&amp;px=auto&amp;auto=format"
                    width="16"
                    height="16"
                    className="w-4 h-4 sm:w-5 sm:h-5 ml-1 autoAnimate"
                    alt="Evolution-image"
                    loading="lazy"
                    title="Evolution"
                  />
                  <span className="ml-1 autoAnimate text-text_Quaternary text-xs capitalize pr-[2px] md:text-sm text-nowrap w-full truncate font-lato-bold font-semibold md:font-semibold">
                    Evolution
                  </span>
                </div>
                <div className="absolute top-0 left-0 w-full h-full min-h-9 rounded-[4px]"></div>
              </div>{" "}
            </span>
            <span title="Sportsbook" className="col-span-1 px-[3px] py-[3px]">
              <div
                className="relative w-full active:scale-95 cursor-pointer bg-bg_SkeletonBgLoaderColor transition-all ease-in-out duration-150 shadow-quickAccessBtnBoxShadows min-h-9 bg-cover bg-center bg-no-repeat rounded-[4px] overflow-hidden undefined"
                style={{
                  backgroundImage:
                    "url('https://promotions-material.s3.ap-south-1.amazonaws.com/sportsButtons/cricket-1696348461938')",
                }}
              >
                <div className="flex justify-center w-full h-full min-h-9 relative z-10 items-center min-w-[175px] sm:min-w-[240px] md:min-w-[280px] pl-[5px] pt-[2px] pb-[2px] pr-1 opacity-100">
                  <img
                    src="https://promotions-material.s3.ap-south-1.amazonaws.com/quickButtons/Sportsbook-1705911352029?q=65&amp;w=600&amp;px=auto&amp;auto=format"
                    width="16"
                    height="16"
                    className="w-4 h-4 sm:w-5 sm:h-5 ml-1 autoAnimate"
                    alt="Sportsbook-image"
                    loading="lazy"
                    title="Sportsbook"
                  />
                  <span className="ml-1 autoAnimate text-text_Quaternary text-xs capitalize pr-[2px] md:text-sm text-nowrap w-full truncate font-lato-bold font-semibold md:font-semibold">
                    Sportsbook
                  </span>
                </div>
                <div className="absolute top-0 left-0 w-full h-full min-h-9 rounded-[4px]"></div>
              </div>
            </span>
          </div>
          <div title="QuickButtons-8" className="grid grid-row-2">
            <span title="Live Casinos" className="col-span-1 px-[3px] py-[3px]">
              <div
                className="relative w-full active:scale-95 cursor-pointer bg-bg_SkeletonBgLoaderColor transition-all ease-in-out duration-150 shadow-quickAccessBtnBoxShadows min-h-9 bg-cover bg-center bg-no-repeat rounded-[4px] overflow-hidden undefined"
                style={{
                  backgroundImage:
                    "url('https://promotions-material.s3.ap-south-1.amazonaws.com/sportsButtons/cricket-1696348461938')",
                }}
              >
                <div className="flex justify-center w-full h-full min-h-9 relative z-10 items-center min-w-[175px] sm:min-w-[240px] md:min-w-[280px] pl-[5px] pt-[2px] pb-[2px] pr-1 opacity-100">
                  <img
                    src="https://promotions-material.s3.ap-south-1.amazonaws.com/quickButtons/LiveCasinos-1705911704279?q=65&amp;w=600&amp;px=auto&amp;auto=format"
                    width="16"
                    height="16"
                    className="w-4 h-4 sm:w-5 sm:h-5 ml-1 autoAnimate"
                    alt="Live Casinos-image"
                    loading="lazy"
                    title="Live Casinos"
                  />
                  <span className="ml-1 autoAnimate text-text_Quaternary text-xs capitalize pr-[2px] md:text-sm text-nowrap w-full truncate font-lato-bold font-semibold md:font-semibold">
                    Live Casinos
                  </span>
                </div>
                <div className="absolute top-0 left-0 w-full h-full min-h-9 rounded-[4px]"></div>
              </div>{" "}
            </span>
            <span title="e-Cricket" className="col-span-1 px-[3px] py-[3px]">
              <div
                className="relative w-full active:scale-95 cursor-pointer bg-bg_SkeletonBgLoaderColor transition-all ease-in-out duration-150 shadow-quickAccessBtnBoxShadows min-h-9 bg-cover bg-center bg-no-repeat rounded-[4px] overflow-hidden undefined"
                style={{
                  backgroundImage:
                    "url('https://promotions-material.s3.ap-south-1.amazonaws.com/sportsButtons/cricket-1696348461938')",
                }}
              >
                <div className="flex justify-center w-full h-full min-h-9 relative z-10 items-center min-w-[175px] sm:min-w-[240px] md:min-w-[280px] pl-[5px] pt-[2px] pb-[2px] pr-1 opacity-100">
                  <img
                    src="https://promotions-material.s3.ap-south-1.amazonaws.com/quickButtons/e-Cricket-1705911799122?q=65&amp;w=600&amp;px=auto&amp;auto=format"
                    width="16"
                    height="16"
                    className="w-4 h-4 sm:w-5 sm:h-5 ml-1 autoAnimate"
                    alt="e-Cricket-image"
                    loading="lazy"
                    title="e-Cricket"
                  />
                  <span className="ml-1 autoAnimate text-text_Quaternary text-xs capitalize pr-[2px] md:text-sm text-nowrap w-full truncate font-lato-bold font-semibold md:font-semibold">
                    e-Cricket
                  </span>
                </div>
                <div className="absolute top-0 left-0 w-full h-full min-h-9 rounded-[4px]"></div>
              </div>
            </span>
          </div>
          <div title="QuickButtons-10" className="grid grid-row-2">
            <span title="Card Games" className="col-span-1 px-[3px] py-[3px]">
              <div
                className="relative w-full active:scale-95 cursor-pointer bg-bg_SkeletonBgLoaderColor transition-all ease-in-out duration-150 shadow-quickAccessBtnBoxShadows min-h-9 bg-cover bg-center bg-no-repeat rounded-[4px] overflow-hidden undefined"
                style={{
                  backgroundImage:
                    "url('https://promotions-material.s3.ap-south-1.amazonaws.com/sportsButtons/cricket-1696348461938')",
                }}
              >
                <div className="flex justify-center w-full h-full min-h-9 relative z-10 items-center min-w-[175px] sm:min-w-[240px] md:min-w-[280px] pl-[5px] pt-[2px] pb-[2px] pr-1 opacity-100">
                  <img
                    src="https://promotions-material.s3.ap-south-1.amazonaws.com/quickButtons/CardGames-1705911853726?q=65&amp;w=600&amp;px=auto&amp;auto=format"
                    width="16"
                    height="16"
                    className="w-4 h-4 sm:w-5 sm:h-5 ml-1 autoAnimate"
                    alt="Card Games-image"
                    loading="lazy"
                    title="Card Games"
                  />
                  <span className="ml-1 autoAnimate text-text_Quaternary text-xs capitalize pr-[2px] md:text-sm text-nowrap w-full truncate font-lato-bold font-semibold md:font-semibold">
                    Card Games
                  </span>
                </div>
                <div className="absolute top-0 left-0 w-full h-full min-h-9 rounded-[4px]"></div>
              </div>{" "}
            </span>
            <span title="Slot Games" className="col-span-1 px-[3px] py-[3px]">
              <div
                className="relative w-full active:scale-95 cursor-pointer bg-bg_SkeletonBgLoaderColor transition-all ease-in-out duration-150 shadow-quickAccessBtnBoxShadows min-h-9 bg-cover bg-center bg-no-repeat rounded-[4px] overflow-hidden undefined"
                style={{
                  backgroundImage:
                    "url('https://promotions-material.s3.ap-south-1.amazonaws.com/sportsButtons/cricket-1696348461938')",
                }}
              >
                <div className="flex justify-center w-full h-full min-h-9 relative z-10 items-center min-w-[175px] sm:min-w-[240px] md:min-w-[280px] pl-[5px] pt-[2px] pb-[2px] pr-1 opacity-100">
                  <img
                    src="https://promotions-material.s3.ap-south-1.amazonaws.com/quickButtons/SlotGames-1705912015300?q=65&amp;w=600&amp;px=auto&amp;auto=format"
                    width="16"
                    height="16"
                    className="w-4 h-4 sm:w-5 sm:h-5 ml-1 autoAnimate"
                    alt="Slot Games-image"
                    loading="lazy"
                    title="Slot Games"
                  />
                  <span className="ml-1 autoAnimate text-text_Quaternary text-xs capitalize pr-[2px] md:text-sm text-nowrap w-full truncate font-lato-bold font-semibold md:font-semibold">
                    Slot Games
                  </span>
                </div>
                <div className="absolute top-0 left-0 w-full h-full min-h-9 rounded-[4px]"></div>
              </div>
            </span>
          </div>
          <div title="QuickButtons-12" className="grid grid-row-2">
            <span
              title="Multiplayer Games"
              className="col-span-1 px-[3px] py-[3px]"
            >
              <div
                className="relative w-full active:scale-95 cursor-pointer bg-bg_SkeletonBgLoaderColor transition-all ease-in-out duration-150 shadow-quickAccessBtnBoxShadows min-h-9 bg-cover bg-center bg-no-repeat rounded-[4px] overflow-hidden undefined"
                style={{
                  backgroundImage:
                    "url('https://promotions-material.s3.ap-south-1.amazonaws.com/sportsButtons/cricket-1696348461938')",
                }}
              >
                <div className="flex justify-center w-full h-full min-h-9 relative z-10 items-center min-w-[175px] sm:min-w-[240px] md:min-w-[280px] pl-[5px] pt-[2px] pb-[2px] pr-1 opacity-100">
                  <img
                    src="https://promotions-material.s3.ap-south-1.amazonaws.com/quickButtons/MultiplayerGames-1705912077489?q=65&amp;w=600&amp;px=auto&amp;auto=format"
                    width="16"
                    height="16"
                    className="w-4 h-4 sm:w-5 sm:h-5 ml-1 autoAnimate"
                    alt="Multiplayer Games-image"
                    loading="lazy"
                    title="Multiplayer Games"
                  />
                  <span className="ml-1 autoAnimate text-text_Quaternary text-xs capitalize pr-[2px] md:text-sm text-nowrap w-full truncate font-lato-bold font-semibold md:font-semibold">
                    Multiplayer Games
                  </span>
                </div>
                <div className="absolute top-0 left-0 w-full h-full min-h-9 rounded-[4px]"></div>
              </div>{" "}
            </span>
            <span
              title="Fishing games"
              className="col-span-1 px-[3px] py-[3px]"
            >
              <div
                className="relative w-full active:scale-95 cursor-pointer bg-bg_SkeletonBgLoaderColor transition-all ease-in-out duration-150 shadow-quickAccessBtnBoxShadows min-h-9 bg-cover bg-center bg-no-repeat rounded-[4px] overflow-hidden undefined"
                style={{
                  backgroundImage:
                    "url('https://promotions-material.s3.ap-south-1.amazonaws.com/sportsButtons/cricket-1696348461938')",
                }}
              >
                <div className="flex justify-center w-full h-full min-h-9 relative z-10 items-center min-w-[175px] sm:min-w-[240px] md:min-w-[280px] pl-[5px] pt-[2px] pb-[2px] pr-1 opacity-100">
                  <img
                    src="https://promotions-material.s3.ap-south-1.amazonaws.com/quickButtons/Fishinggames-1705912252627?q=65&amp;w=600&amp;px=auto&amp;auto=format"
                    width="16"
                    height="16"
                    className="w-4 h-4 sm:w-5 sm:h-5 ml-1 autoAnimate"
                    alt="Fishing games-image"
                    loading="lazy"
                    title="Fishing games"
                  />
                  <span className="ml-1 autoAnimate text-text_Quaternary text-xs capitalize pr-[2px] md:text-sm text-nowrap w-full truncate font-lato-bold font-semibold md:font-semibold">
                    Fishing games
                  </span>
                </div>
                <div className="absolute top-0 left-0 w-full h-full min-h-9 rounded-[4px]"></div>
              </div>
            </span>
          </div>
          <div title="QuickButtons-0" className="grid grid-row-2">
            <span title="Aviator" className="col-span-1 px-[3px] py-[3px]">
              <div
                className="relative w-full active:scale-95 cursor-pointer bg-bg_SkeletonBgLoaderColor transition-all ease-in-out duration-150 shadow-quickAccessBtnBoxShadows min-h-9 bg-cover bg-center bg-no-repeat rounded-[4px] overflow-hidden undefined"
                style={{
                  backgroundImage:
                    "url('https://promotions-material.s3.ap-south-1.amazonaws.com/sportsButtons/cricket-1696348461938')",
                }}
              >
                <div className="flex justify-center w-full h-full min-h-9 relative z-10 items-center min-w-[175px] sm:min-w-[240px] md:min-w-[280px] pl-[5px] pt-[2px] pb-[2px] pr-1 opacity-100">
                  <img
                    src="https://promotions-material.s3.ap-south-1.amazonaws.com/quickButtons/Aviator-1705911963125?q=65&amp;w=600&amp;px=auto&amp;auto=format"
                    width="16"
                    height="16"
                    className="w-4 h-4 sm:w-5 sm:h-5 ml-1 autoAnimate"
                    alt="Aviator-image"
                    loading="lazy"
                    title="Aviator"
                  />
                  <span className="ml-1 autoAnimate text-text_Quaternary text-xs capitalize pr-[2px] md:text-sm text-nowrap w-full truncate font-lato-bold font-semibold md:font-semibold">
                    Aviator
                  </span>
                </div>
                <div className="absolute top-0 left-0 w-full h-full min-h-9 rounded-[4px]"></div>
              </div>{" "}
            </span>
            <span title="Aura" className="col-span-1 px-[3px] py-[3px]">
              <div
                className="relative w-full active:scale-95 cursor-pointer bg-bg_SkeletonBgLoaderColor transition-all ease-in-out duration-150 shadow-quickAccessBtnBoxShadows min-h-9 bg-cover bg-center bg-no-repeat rounded-[4px] overflow-hidden undefined"
                style={{
                  backgroundImage:
                    "url('https://promotions-material.s3.ap-south-1.amazonaws.com/sportsButtons/cricket-1696348461938')",
                }}
              >
                <div className="flex justify-center w-full h-full min-h-9 relative z-10 items-center min-w-[175px] sm:min-w-[240px] md:min-w-[280px] pl-[5px] pt-[2px] pb-[2px] pr-1 opacity-100">
                  <img
                    src="https://promotions-material.s3.ap-south-1.amazonaws.com/quickButtons/Aura-1705912199647?q=65&amp;w=600&amp;px=auto&amp;auto=format"
                    width="16"
                    height="16"
                    className="w-4 h-4 sm:w-5 sm:h-5 ml-1 autoAnimate"
                    alt="Aura-image"
                    loading="lazy"
                    title="Aura"
                  />
                  <span className="ml-1 autoAnimate text-text_Quaternary text-xs capitalize pr-[2px] md:text-sm text-nowrap w-full truncate font-lato-bold font-semibold md:font-semibold">
                    Aura
                  </span>
                </div>
                <div className="absolute top-0 left-0 w-full h-full min-h-9 rounded-[4px]"></div>
              </div>
            </span>
          </div>
          <div title="QuickButtons-2" className="grid grid-row-2">
            <span title="Mines" className="col-span-1 px-[3px] py-[3px]">
              <div
                className="relative w-full active:scale-95 cursor-pointer bg-bg_SkeletonBgLoaderColor transition-all ease-in-out duration-150 shadow-quickAccessBtnBoxShadows min-h-9 bg-cover bg-center bg-no-repeat rounded-[4px] overflow-hidden undefined"
                style={{
                  backgroundImage:
                    "url('https://promotions-material.s3.ap-south-1.amazonaws.com/sportsButtons/cricket-1696348461938')",
                }}
              >
                <div className="flex justify-center w-full h-full min-h-9 relative z-10 items-center min-w-[175px] sm:min-w-[240px] md:min-w-[280px] pl-[5px] pt-[2px] pb-[2px] pr-1 opacity-100">
                  <img
                    src="https://promotions-material.s3.ap-south-1.amazonaws.com/quickButtons/diamond_icon.png?q=65&amp;w=600&amp;px=auto&amp;auto=format"
                    width="16"
                    height="16"
                    className="w-4 h-4 sm:w-5 sm:h-5 ml-1 autoAnimate"
                    alt="Mines-image"
                    loading="lazy"
                    title="Mines"
                  />
                  <span className="ml-1 autoAnimate text-text_Quaternary text-xs capitalize pr-[2px] md:text-sm text-nowrap w-full truncate font-lato-bold font-semibold md:font-semibold">
                    Mines
                  </span>
                </div>
                <div className="absolute top-0 left-0 w-full h-full min-h-9 rounded-[4px]"></div>
              </div>{" "}
            </span>
            <span title="Limbo" className="col-span-1 px-[3px] py-[3px]">
              <div
                className="relative w-full active:scale-95 cursor-pointer bg-bg_SkeletonBgLoaderColor transition-all ease-in-out duration-150 shadow-quickAccessBtnBoxShadows min-h-9 bg-cover bg-center bg-no-repeat rounded-[4px] overflow-hidden undefined"
                style={{
                  backgroundImage:
                    "url('https://promotions-material.s3.ap-south-1.amazonaws.com/sportsButtons/cricket-1696348461938')",
                }}
              >
                <div className="flex justify-center w-full h-full min-h-9 relative z-10 items-center min-w-[175px] sm:min-w-[240px] md:min-w-[280px] pl-[5px] pt-[2px] pb-[2px] pr-1 opacity-100">
                  <img
                    src="https://promotions-material.s3.ap-south-1.amazonaws.com/quickButtons/Aviator-1705911963125?q=65&amp;w=600&amp;px=auto&amp;auto=format"
                    width="16"
                    height="16"
                    className="w-4 h-4 sm:w-5 sm:h-5 ml-1 autoAnimate"
                    alt="Limbo-image"
                    loading="lazy"
                    title="Limbo"
                  />
                  <span className="ml-1 autoAnimate text-text_Quaternary text-xs capitalize pr-[2px] md:text-sm text-nowrap w-full truncate font-lato-bold font-semibold md:font-semibold">
                    Limbo
                  </span>
                </div>
                <div className="absolute top-0 left-0 w-full h-full min-h-9 rounded-[4px]"></div>
              </div>
            </span>
          </div>
          <div title="QuickButtons-4" className="grid grid-row-2">
            <span title="Color Game" className="col-span-1 px-[3px] py-[3px]">
              <div
                className="relative w-full active:scale-95 cursor-pointer bg-bg_SkeletonBgLoaderColor transition-all ease-in-out duration-150 shadow-quickAccessBtnBoxShadows min-h-9 bg-cover bg-center bg-no-repeat rounded-[4px] overflow-hidden undefined"
                style={{
                  backgroundImage:
                    "url('https://promotions-material.s3.ap-south-1.amazonaws.com/sportsButtons/cricket-1696348461938')",
                }}
              >
                <div className="flex justify-center w-full h-full min-h-9 relative z-10 items-center min-w-[175px] sm:min-w-[240px] md:min-w-[280px] pl-[5px] pt-[2px] pb-[2px] pr-1 opacity-100">
                  <img
                    src="https://promomaterial.imgix.net/quickButtons/ColorGame-1718191763431"
                    width="16"
                    height="16"
                    className="w-4 h-4 sm:w-5 sm:h-5 ml-1 autoAnimate"
                    alt="Color Game-image"
                    loading="lazy"
                    title="Color Game"
                  />
                  <span className="ml-1 autoAnimate text-text_Quaternary text-xs capitalize pr-[2px] md:text-sm text-nowrap w-full truncate font-lato-bold font-semibold md:font-semibold">
                    Color Game
                  </span>
                </div>
                <div className="absolute top-0 left-0 w-full h-full min-h-9 rounded-[4px]"></div>
              </div>{" "}
            </span>
            <span
              title="Tower Legends"
              className="col-span-1 px-[3px] py-[3px]"
            >
              <div
                className="relative w-full active:scale-95 cursor-pointer bg-bg_SkeletonBgLoaderColor transition-all ease-in-out duration-150 shadow-quickAccessBtnBoxShadows min-h-9 bg-cover bg-center bg-no-repeat rounded-[4px] overflow-hidden undefined"
                style={{
                  backgroundImage:
                    "url('https://promotions-material.s3.ap-south-1.amazonaws.com/sportsButtons/cricket-1696348461938')",
                }}
              >
                <div className="flex justify-center w-full h-full min-h-9 relative z-10 items-center min-w-[175px] sm:min-w-[240px] md:min-w-[280px] pl-[5px] pt-[2px] pb-[2px] pr-1 opacity-100">
                  <img
                    src="https://promomaterial.imgix.net/quickButtons/TowerLegends-1722000145474"
                    width="16"
                    height="16"
                    className="w-4 h-4 sm:w-5 sm:h-5 ml-1 autoAnimate"
                    alt="Tower Legends-image"
                    loading="lazy"
                    title="Tower Legends"
                  />
                  <span className="ml-1 autoAnimate text-text_Quaternary text-xs capitalize pr-[2px] md:text-sm text-nowrap w-full truncate font-lato-bold font-semibold md:font-semibold">
                    Tower Legends
                  </span>
                </div>
                <div className="absolute top-0 left-0 w-full h-full min-h-9 rounded-[4px]"></div>
              </div>
            </span>
          </div>
          <div title="QuickButtons-6" className="grid grid-row-2">
            <span title="Evolution" className="col-span-1 px-[3px] py-[3px]">
              <div
                className="relative w-full active:scale-95 cursor-pointer bg-bg_SkeletonBgLoaderColor transition-all ease-in-out duration-150 shadow-quickAccessBtnBoxShadows min-h-9 bg-cover bg-center bg-no-repeat rounded-[4px] overflow-hidden undefined"
                style={{
                  backgroundImage:
                    "url('https://promotions-material.s3.ap-south-1.amazonaws.com/sportsButtons/cricket-1696348461938')",
                }}
              >
                <div className="flex justify-center w-full h-full min-h-9 relative z-10 items-center min-w-[175px] sm:min-w-[240px] md:min-w-[280px] pl-[5px] pt-[2px] pb-[2px] pr-1 opacity-100">
                  <img
                    src="https://promotions-material.s3.ap-south-1.amazonaws.com/quickButtons/Evolution-1705911275817?q=65&amp;w=600&amp;px=auto&amp;auto=format"
                    width="16"
                    height="16"
                    className="w-4 h-4 sm:w-5 sm:h-5 ml-1 autoAnimate"
                    alt="Evolution-image"
                    loading="lazy"
                    title="Evolution"
                  />
                  <span className="ml-1 autoAnimate text-text_Quaternary text-xs capitalize pr-[2px] md:text-sm text-nowrap w-full truncate font-lato-bold font-semibold md:font-semibold">
                    Evolution
                  </span>
                </div>
                <div className="absolute top-0 left-0 w-full h-full min-h-9 rounded-[4px]"></div>
              </div>{" "}
            </span>
            <span title="Sportsbook" className="col-span-1 px-[3px] py-[3px]">
              <div
                className="relative w-full active:scale-95 cursor-pointer bg-bg_SkeletonBgLoaderColor transition-all ease-in-out duration-150 shadow-quickAccessBtnBoxShadows min-h-9 bg-cover bg-center bg-no-repeat rounded-[4px] overflow-hidden undefined"
                style={{
                  backgroundImage:
                    "url('https://promotions-material.s3.ap-south-1.amazonaws.com/sportsButtons/cricket-1696348461938')",
                }}
              >
                <div className="flex justify-center w-full h-full min-h-9 relative z-10 items-center min-w-[175px] sm:min-w-[240px] md:min-w-[280px] pl-[5px] pt-[2px] pb-[2px] pr-1 opacity-100">
                  <img
                    src="https://promotions-material.s3.ap-south-1.amazonaws.com/quickButtons/Sportsbook-1705911352029?q=65&amp;w=600&amp;px=auto&amp;auto=format"
                    width="16"
                    height="16"
                    className="w-4 h-4 sm:w-5 sm:h-5 ml-1 autoAnimate"
                    alt="Sportsbook-image"
                    loading="lazy"
                    title="Sportsbook"
                  />
                  <span className="ml-1 autoAnimate text-text_Quaternary text-xs capitalize pr-[2px] md:text-sm text-nowrap w-full truncate font-lato-bold font-semibold md:font-semibold">
                    Sportsbook
                  </span>
                </div>
                <div className="absolute top-0 left-0 w-full h-full min-h-9 rounded-[4px]"></div>
              </div>
            </span>
          </div>
          <div title="QuickButtons-8" className="grid grid-row-2">
            <span title="Live Casinos" className="col-span-1 px-[3px] py-[3px]">
              <div
                className="relative w-full active:scale-95 cursor-pointer bg-bg_SkeletonBgLoaderColor transition-all ease-in-out duration-150 shadow-quickAccessBtnBoxShadows min-h-9 bg-cover bg-center bg-no-repeat rounded-[4px] overflow-hidden undefined"
                style={{
                  backgroundImage:
                    "url('https://promotions-material.s3.ap-south-1.amazonaws.com/sportsButtons/cricket-1696348461938')",
                }}
              >
                <div className="flex justify-center w-full h-full min-h-9 relative z-10 items-center min-w-[175px] sm:min-w-[240px] md:min-w-[280px] pl-[5px] pt-[2px] pb-[2px] pr-1 opacity-100">
                  <img
                    src="https://promotions-material.s3.ap-south-1.amazonaws.com/quickButtons/LiveCasinos-1705911704279?q=65&amp;w=600&amp;px=auto&amp;auto=format"
                    width="16"
                    height="16"
                    className="w-4 h-4 sm:w-5 sm:h-5 ml-1 autoAnimate"
                    alt="Live Casinos-image"
                    loading="lazy"
                    title="Live Casinos"
                  />
                  <span className="ml-1 autoAnimate text-text_Quaternary text-xs capitalize pr-[2px] md:text-sm text-nowrap w-full truncate font-lato-bold font-semibold md:font-semibold">
                    Live Casinos
                  </span>
                </div>
                <div className="absolute top-0 left-0 w-full h-full min-h-9 rounded-[4px]"></div>
              </div>{" "}
            </span>
            <span title="e-Cricket" className="col-span-1 px-[3px] py-[3px]">
              <div
                className="relative w-full active:scale-95 cursor-pointer bg-bg_SkeletonBgLoaderColor transition-all ease-in-out duration-150 shadow-quickAccessBtnBoxShadows min-h-9 bg-cover bg-center bg-no-repeat rounded-[4px] overflow-hidden undefined"
                style={{
                  backgroundImage:
                    "url('https://promotions-material.s3.ap-south-1.amazonaws.com/sportsButtons/cricket-1696348461938')",
                }}
              >
                <div className="flex justify-center w-full h-full min-h-9 relative z-10 items-center min-w-[175px] sm:min-w-[240px] md:min-w-[280px] pl-[5px] pt-[2px] pb-[2px] pr-1 opacity-100">
                  <img
                    src="https://promotions-material.s3.ap-south-1.amazonaws.com/quickButtons/e-Cricket-1705911799122?q=65&amp;w=600&amp;px=auto&amp;auto=format"
                    width="16"
                    height="16"
                    className="w-4 h-4 sm:w-5 sm:h-5 ml-1 autoAnimate"
                    alt="e-Cricket-image"
                    loading="lazy"
                    title="e-Cricket"
                  />
                  <span className="ml-1 autoAnimate text-text_Quaternary text-xs capitalize pr-[2px] md:text-sm text-nowrap w-full truncate font-lato-bold font-semibold md:font-semibold">
                    e-Cricket
                  </span>
                </div>
                <div className="absolute top-0 left-0 w-full h-full min-h-9 rounded-[4px]"></div>
              </div>
            </span>
          </div>
          <div title="QuickButtons-10" className="grid grid-row-2">
            <span title="Card Games" className="col-span-1 px-[3px] py-[3px]">
              <div
                className="relative w-full active:scale-95 cursor-pointer bg-bg_SkeletonBgLoaderColor transition-all ease-in-out duration-150 shadow-quickAccessBtnBoxShadows min-h-9 bg-cover bg-center bg-no-repeat rounded-[4px] overflow-hidden undefined"
                style={{
                  backgroundImage:
                    "url('https://promotions-material.s3.ap-south-1.amazonaws.com/sportsButtons/cricket-1696348461938')",
                }}
              >
                <div className="flex justify-center w-full h-full min-h-9 relative z-10 items-center min-w-[175px] sm:min-w-[240px] md:min-w-[280px] pl-[5px] pt-[2px] pb-[2px] pr-1 opacity-100">
                  <img
                    src="https://promotions-material.s3.ap-south-1.amazonaws.com/quickButtons/CardGames-1705911853726?q=65&amp;w=600&amp;px=auto&amp;auto=format"
                    width="16"
                    height="16"
                    className="w-4 h-4 sm:w-5 sm:h-5 ml-1 autoAnimate"
                    alt="Card Games-image"
                    loading="lazy"
                    title="Card Games"
                  />
                  <span className="ml-1 autoAnimate text-text_Quaternary text-xs capitalize pr-[2px] md:text-sm text-nowrap w-full truncate font-lato-bold font-semibold md:font-semibold">
                    Card Games
                  </span>
                </div>
                <div className="absolute top-0 left-0 w-full h-full min-h-9 rounded-[4px]"></div>
              </div>{" "}
            </span>
            <span title="Slot Games" className="col-span-1 px-[3px] py-[3px]">
              <div
                className="relative w-full active:scale-95 cursor-pointer bg-bg_SkeletonBgLoaderColor transition-all ease-in-out duration-150 shadow-quickAccessBtnBoxShadows min-h-9 bg-cover bg-center bg-no-repeat rounded-[4px] overflow-hidden undefined"
                style={{
                  backgroundImage:
                    "url('https://promotions-material.s3.ap-south-1.amazonaws.com/sportsButtons/cricket-1696348461938')",
                }}
              >
                <div className="flex justify-center w-full h-full min-h-9 relative z-10 items-center min-w-[175px] sm:min-w-[240px] md:min-w-[280px] pl-[5px] pt-[2px] pb-[2px] pr-1 opacity-100">
                  <img
                    src="https://promotions-material.s3.ap-south-1.amazonaws.com/quickButtons/SlotGames-1705912015300?q=65&amp;w=600&amp;px=auto&amp;auto=format"
                    width="16"
                    height="16"
                    className="w-4 h-4 sm:w-5 sm:h-5 ml-1 autoAnimate"
                    alt="Slot Games-image"
                    loading="lazy"
                    title="Slot Games"
                  />
                  <span className="ml-1 autoAnimate text-text_Quaternary text-xs capitalize pr-[2px] md:text-sm text-nowrap w-full truncate font-lato-bold font-semibold md:font-semibold">
                    Slot Games
                  </span>
                </div>
                <div className="absolute top-0 left-0 w-full h-full min-h-9 rounded-[4px]"></div>
              </div>
            </span>
          </div>
          <div title="QuickButtons-12" className="grid grid-row-2">
            <span
              title="Multiplayer Games"
              className="col-span-1 px-[3px] py-[3px]"
            >
              <div
                className="relative w-full active:scale-95 cursor-pointer bg-bg_SkeletonBgLoaderColor transition-all ease-in-out duration-150 shadow-quickAccessBtnBoxShadows min-h-9 bg-cover bg-center bg-no-repeat rounded-[4px] overflow-hidden undefined"
                style={{
                  backgroundImage:
                    "url('https://promotions-material.s3.ap-south-1.amazonaws.com/sportsButtons/cricket-1696348461938')",
                }}
              >
                <div className="flex justify-center w-full h-full min-h-9 relative z-10 items-center min-w-[175px] sm:min-w-[240px] md:min-w-[280px] pl-[5px] pt-[2px] pb-[2px] pr-1 opacity-100">
                  <img
                    src="https://promotions-material.s3.ap-south-1.amazonaws.com/quickButtons/MultiplayerGames-1705912077489?q=65&amp;w=600&amp;px=auto&amp;auto=format"
                    width="16"
                    height="16"
                    className="w-4 h-4 sm:w-5 sm:h-5 ml-1 autoAnimate"
                    alt="Multiplayer Games-image"
                    loading="lazy"
                    title="Multiplayer Games"
                  />
                  <span className="ml-1 autoAnimate text-text_Quaternary text-xs capitalize pr-[2px] md:text-sm text-nowrap w-full truncate font-lato-bold font-semibold md:font-semibold">
                    Multiplayer Games
                  </span>
                </div>
                <div className="absolute top-0 left-0 w-full h-full min-h-9 rounded-[4px]"></div>
              </div>{" "}
            </span>
            <span
              title="Fishing games"
              className="col-span-1 px-[3px] py-[3px]"
            >
              <div
                className="relative w-full active:scale-95 cursor-pointer bg-bg_SkeletonBgLoaderColor transition-all ease-in-out duration-150 shadow-quickAccessBtnBoxShadows min-h-9 bg-cover bg-center bg-no-repeat rounded-[4px] overflow-hidden undefined"
                style={{
                  backgroundImage:
                    "url('https://promotions-material.s3.ap-south-1.amazonaws.com/sportsButtons/cricket-1696348461938')",
                }}
              >
                <div className="flex justify-center w-full h-full min-h-9 relative z-10 items-center min-w-[175px] sm:min-w-[240px] md:min-w-[280px] pl-[5px] pt-[2px] pb-[2px] pr-1 opacity-100">
                  <img
                    src="https://promotions-material.s3.ap-south-1.amazonaws.com/quickButtons/Fishinggames-1705912252627?q=65&amp;w=600&amp;px=auto&amp;auto=format"
                    width="16"
                    height="16"
                    className="w-4 h-4 sm:w-5 sm:h-5 ml-1 autoAnimate"
                    alt="Fishing games-image"
                    loading="lazy"
                    title="Fishing games"
                  />
                  <span className="ml-1 autoAnimate text-text_Quaternary text-xs capitalize pr-[2px] md:text-sm text-nowrap w-full truncate font-lato-bold font-semibold md:font-semibold">
                    Fishing games
                  </span>
                </div>
                <div className="absolute top-0 left-0 w-full h-full min-h-9 rounded-[4px]"></div>
              </div>
            </span>
          </div>
          <div title="QuickButtons-0" className="grid grid-row-2">
            <span title="Aviator" className="col-span-1 px-[3px] py-[3px]">
              <div
                className="relative w-full active:scale-95 cursor-pointer bg-bg_SkeletonBgLoaderColor transition-all ease-in-out duration-150 shadow-quickAccessBtnBoxShadows min-h-9 bg-cover bg-center bg-no-repeat rounded-[4px] overflow-hidden undefined"
                style={{
                  backgroundImage:
                    "url('https://promotions-material.s3.ap-south-1.amazonaws.com/sportsButtons/cricket-1696348461938')",
                }}
              >
                <div className="flex justify-center w-full h-full min-h-9 relative z-10 items-center min-w-[175px] sm:min-w-[240px] md:min-w-[280px] pl-[5px] pt-[2px] pb-[2px] pr-1 opacity-100">
                  <img
                    src="https://promotions-material.s3.ap-south-1.amazonaws.com/quickButtons/Aviator-1705911963125?q=65&amp;w=600&amp;px=auto&amp;auto=format"
                    width="16"
                    height="16"
                    className="w-4 h-4 sm:w-5 sm:h-5 ml-1 autoAnimate"
                    alt="Aviator-image"
                    loading="lazy"
                    title="Aviator"
                  />
                  <span className="ml-1 autoAnimate text-text_Quaternary text-xs capitalize pr-[2px] md:text-sm text-nowrap w-full truncate font-lato-bold font-semibold md:font-semibold">
                    Aviator
                  </span>
                </div>
                <div className="absolute top-0 left-0 w-full h-full min-h-9 rounded-[4px]"></div>
              </div>{" "}
            </span>
            <span title="Aura" className="col-span-1 px-[3px] py-[3px]">
              <div
                className="relative w-full active:scale-95 cursor-pointer bg-bg_SkeletonBgLoaderColor transition-all ease-in-out duration-150 shadow-quickAccessBtnBoxShadows min-h-9 bg-cover bg-center bg-no-repeat rounded-[4px] overflow-hidden undefined"
                style={{
                  backgroundImage:
                    "url('https://promotions-material.s3.ap-south-1.amazonaws.com/sportsButtons/cricket-1696348461938')",
                }}
              >
                <div className="flex justify-center w-full h-full min-h-9 relative z-10 items-center min-w-[175px] sm:min-w-[240px] md:min-w-[280px] pl-[5px] pt-[2px] pb-[2px] pr-1 opacity-100">
                  <img
                    src="https://promotions-material.s3.ap-south-1.amazonaws.com/quickButtons/Aura-1705912199647?q=65&amp;w=600&amp;px=auto&amp;auto=format"
                    width="16"
                    height="16"
                    className="w-4 h-4 sm:w-5 sm:h-5 ml-1 autoAnimate"
                    alt="Aura-image"
                    loading="lazy"
                    title="Aura"
                  />
                  <span className="ml-1 autoAnimate text-text_Quaternary text-xs capitalize pr-[2px] md:text-sm text-nowrap w-full truncate font-lato-bold font-semibold md:font-semibold">
                    Aura
                  </span>
                </div>
                <div className="absolute top-0 left-0 w-full h-full min-h-9 rounded-[4px]"></div>
              </div>
            </span>
          </div>
          <div title="QuickButtons-2" className="grid grid-row-2">
            <span title="Mines" className="col-span-1 px-[3px] py-[3px]">
              <div
                className="relative w-full active:scale-95 cursor-pointer bg-bg_SkeletonBgLoaderColor transition-all ease-in-out duration-150 shadow-quickAccessBtnBoxShadows min-h-9 bg-cover bg-center bg-no-repeat rounded-[4px] overflow-hidden undefined"
                style={{
                  backgroundImage:
                    "url('https://promotions-material.s3.ap-south-1.amazonaws.com/sportsButtons/cricket-1696348461938')",
                }}
              >
                <div className="flex justify-center w-full h-full min-h-9 relative z-10 items-center min-w-[175px] sm:min-w-[240px] md:min-w-[280px] pl-[5px] pt-[2px] pb-[2px] pr-1 opacity-100">
                  <img
                    src="https://promotions-material.s3.ap-south-1.amazonaws.com/quickButtons/diamond_icon.png?q=65&amp;w=600&amp;px=auto&amp;auto=format"
                    width="16"
                    height="16"
                    className="w-4 h-4 sm:w-5 sm:h-5 ml-1 autoAnimate"
                    alt="Mines-image"
                    loading="lazy"
                    title="Mines"
                  />
                  <span className="ml-1 autoAnimate text-text_Quaternary text-xs capitalize pr-[2px] md:text-sm text-nowrap w-full truncate font-lato-bold font-semibold md:font-semibold">
                    Mines
                  </span>
                </div>
                <div className="absolute top-0 left-0 w-full h-full min-h-9 rounded-[4px]"></div>
              </div>{" "}
            </span>
            <span title="Limbo" className="col-span-1 px-[3px] py-[3px]">
              <div
                className="relative w-full active:scale-95 cursor-pointer bg-bg_SkeletonBgLoaderColor transition-all ease-in-out duration-150 shadow-quickAccessBtnBoxShadows min-h-9 bg-cover bg-center bg-no-repeat rounded-[4px] overflow-hidden undefined"
                style={{
                  backgroundImage:
                    "url('https://promotions-material.s3.ap-south-1.amazonaws.com/sportsButtons/cricket-1696348461938')",
                }}
              >
                <div className="flex justify-center w-full h-full min-h-9 relative z-10 items-center min-w-[175px] sm:min-w-[240px] md:min-w-[280px] pl-[5px] pt-[2px] pb-[2px] pr-1 opacity-100">
                  <img
                    src="https://promotions-material.s3.ap-south-1.amazonaws.com/quickButtons/Aviator-1705911963125?q=65&amp;w=600&amp;px=auto&amp;auto=format"
                    width="16"
                    height="16"
                    className="w-4 h-4 sm:w-5 sm:h-5 ml-1 autoAnimate"
                    alt="Limbo-image"
                    loading="lazy"
                    title="Limbo"
                  />
                  <span className="ml-1 autoAnimate text-text_Quaternary text-xs capitalize pr-[2px] md:text-sm text-nowrap w-full truncate font-lato-bold font-semibold md:font-semibold">
                    Limbo
                  </span>
                </div>
                <div className="absolute top-0 left-0 w-full h-full min-h-9 rounded-[4px]"></div>
              </div>
            </span>
          </div>
          <div title="QuickButtons-4" className="grid grid-row-2">
            <span title="Color Game" className="col-span-1 px-[3px] py-[3px]">
              <div
                className="relative w-full active:scale-95 cursor-pointer bg-bg_SkeletonBgLoaderColor transition-all ease-in-out duration-150 shadow-quickAccessBtnBoxShadows min-h-9 bg-cover bg-center bg-no-repeat rounded-[4px] overflow-hidden undefined"
                style={{
                  backgroundImage:
                    "url('https://promotions-material.s3.ap-south-1.amazonaws.com/sportsButtons/cricket-1696348461938')",
                }}
              >
                <div className="flex justify-center w-full h-full min-h-9 relative z-10 items-center min-w-[175px] sm:min-w-[240px] md:min-w-[280px] pl-[5px] pt-[2px] pb-[2px] pr-1 opacity-100">
                  <img
                    src="https://promomaterial.imgix.net/quickButtons/ColorGame-1718191763431"
                    width="16"
                    height="16"
                    className="w-4 h-4 sm:w-5 sm:h-5 ml-1 autoAnimate"
                    alt="Color Game-image"
                    loading="lazy"
                    title="Color Game"
                  />
                  <span className="ml-1 autoAnimate text-text_Quaternary text-xs capitalize pr-[2px] md:text-sm text-nowrap w-full truncate font-lato-bold font-semibold md:font-semibold">
                    Color Game
                  </span>
                </div>
                <div className="absolute top-0 left-0 w-full h-full min-h-9 rounded-[4px]"></div>
              </div>{" "}
            </span>
            <span
              title="Tower Legends"
              className="col-span-1 px-[3px] py-[3px]"
            >
              <div
                className="relative w-full active:scale-95 cursor-pointer bg-bg_SkeletonBgLoaderColor transition-all ease-in-out duration-150 shadow-quickAccessBtnBoxShadows min-h-9 bg-cover bg-center bg-no-repeat rounded-[4px] overflow-hidden undefined"
                style={{
                  backgroundImage:
                    "url('https://promotions-material.s3.ap-south-1.amazonaws.com/sportsButtons/cricket-1696348461938')",
                }}
              >
                <div className="flex justify-center w-full h-full min-h-9 relative z-10 items-center min-w-[175px] sm:min-w-[240px] md:min-w-[280px] pl-[5px] pt-[2px] pb-[2px] pr-1 opacity-100">
                  <img
                    src="https://promomaterial.imgix.net/quickButtons/TowerLegends-1722000145474"
                    width="16"
                    height="16"
                    className="w-4 h-4 sm:w-5 sm:h-5 ml-1 autoAnimate"
                    alt="Tower Legends-image"
                    loading="lazy"
                    title="Tower Legends"
                  />
                  <span className="ml-1 autoAnimate text-text_Quaternary text-xs capitalize pr-[2px] md:text-sm text-nowrap w-full truncate font-lato-bold font-semibold md:font-semibold">
                    Tower Legends
                  </span>
                </div>
                <div className="absolute top-0 left-0 w-full h-full min-h-9 rounded-[4px]"></div>
              </div>
            </span>
          </div>
          <div title="QuickButtons-6" className="grid grid-row-2">
            <span title="Evolution" className="col-span-1 px-[3px] py-[3px]">
              <div
                className="relative w-full active:scale-95 cursor-pointer bg-bg_SkeletonBgLoaderColor transition-all ease-in-out duration-150 shadow-quickAccessBtnBoxShadows min-h-9 bg-cover bg-center bg-no-repeat rounded-[4px] overflow-hidden undefined"
                style={{
                  backgroundImage:
                    "url('https://promotions-material.s3.ap-south-1.amazonaws.com/sportsButtons/cricket-1696348461938')",
                }}
              >
                <div className="flex justify-center w-full h-full min-h-9 relative z-10 items-center min-w-[175px] sm:min-w-[240px] md:min-w-[280px] pl-[5px] pt-[2px] pb-[2px] pr-1 opacity-100">
                  <img
                    src="https://promotions-material.s3.ap-south-1.amazonaws.com/quickButtons/Evolution-1705911275817?q=65&amp;w=600&amp;px=auto&amp;auto=format"
                    width="16"
                    height="16"
                    className="w-4 h-4 sm:w-5 sm:h-5 ml-1 autoAnimate"
                    alt="Evolution-image"
                    loading="lazy"
                    title="Evolution"
                  />
                  <span className="ml-1 autoAnimate text-text_Quaternary text-xs capitalize pr-[2px] md:text-sm text-nowrap w-full truncate font-lato-bold font-semibold md:font-semibold">
                    Evolution
                  </span>
                </div>
                <div className="absolute top-0 left-0 w-full h-full min-h-9 rounded-[4px]"></div>
              </div>{" "}
            </span>
            <span title="Sportsbook" className="col-span-1 px-[3px] py-[3px]">
              <div
                className="relative w-full active:scale-95 cursor-pointer bg-bg_SkeletonBgLoaderColor transition-all ease-in-out duration-150 shadow-quickAccessBtnBoxShadows min-h-9 bg-cover bg-center bg-no-repeat rounded-[4px] overflow-hidden undefined"
                style={{
                  backgroundImage:
                    "url('https://promotions-material.s3.ap-south-1.amazonaws.com/sportsButtons/cricket-1696348461938')",
                }}
              >
                <div className="flex justify-center w-full h-full min-h-9 relative z-10 items-center min-w-[175px] sm:min-w-[240px] md:min-w-[280px] pl-[5px] pt-[2px] pb-[2px] pr-1 opacity-100">
                  <img
                    src="https://promotions-material.s3.ap-south-1.amazonaws.com/quickButtons/Sportsbook-1705911352029?q=65&amp;w=600&amp;px=auto&amp;auto=format"
                    width="16"
                    height="16"
                    className="w-4 h-4 sm:w-5 sm:h-5 ml-1 autoAnimate"
                    alt="Sportsbook-image"
                    loading="lazy"
                    title="Sportsbook"
                  />
                  <span className="ml-1 autoAnimate text-text_Quaternary text-xs capitalize pr-[2px] md:text-sm text-nowrap w-full truncate font-lato-bold font-semibold md:font-semibold">
                    Sportsbook
                  </span>
                </div>
                <div className="absolute top-0 left-0 w-full h-full min-h-9 rounded-[4px]"></div>
              </div>
            </span>
          </div>
          <div title="QuickButtons-8" className="grid grid-row-2">
            <span title="Live Casinos" className="col-span-1 px-[3px] py-[3px]">
              <div
                className="relative w-full active:scale-95 cursor-pointer bg-bg_SkeletonBgLoaderColor transition-all ease-in-out duration-150 shadow-quickAccessBtnBoxShadows min-h-9 bg-cover bg-center bg-no-repeat rounded-[4px] overflow-hidden undefined"
                style={{
                  backgroundImage:
                    "url('https://promotions-material.s3.ap-south-1.amazonaws.com/sportsButtons/cricket-1696348461938')",
                }}
              >
                <div className="flex justify-center w-full h-full min-h-9 relative z-10 items-center min-w-[175px] sm:min-w-[240px] md:min-w-[280px] pl-[5px] pt-[2px] pb-[2px] pr-1 opacity-100">
                  <img
                    src="https://promotions-material.s3.ap-south-1.amazonaws.com/quickButtons/LiveCasinos-1705911704279?q=65&amp;w=600&amp;px=auto&amp;auto=format"
                    width="16"
                    height="16"
                    className="w-4 h-4 sm:w-5 sm:h-5 ml-1 autoAnimate"
                    alt="Live Casinos-image"
                    loading="lazy"
                    title="Live Casinos"
                  />
                  <span className="ml-1 autoAnimate text-text_Quaternary text-xs capitalize pr-[2px] md:text-sm text-nowrap w-full truncate font-lato-bold font-semibold md:font-semibold">
                    Live Casinos
                  </span>
                </div>
                <div className="absolute top-0 left-0 w-full h-full min-h-9 rounded-[4px]"></div>
              </div>{" "}
            </span>
            <span title="e-Cricket" className="col-span-1 px-[3px] py-[3px]">
              <div
                className="relative w-full active:scale-95 cursor-pointer bg-bg_SkeletonBgLoaderColor transition-all ease-in-out duration-150 shadow-quickAccessBtnBoxShadows min-h-9 bg-cover bg-center bg-no-repeat rounded-[4px] overflow-hidden undefined"
                style={{
                  backgroundImage:
                    "url('https://promotions-material.s3.ap-south-1.amazonaws.com/sportsButtons/cricket-1696348461938')",
                }}
              >
                <div className="flex justify-center w-full h-full min-h-9 relative z-10 items-center min-w-[175px] sm:min-w-[240px] md:min-w-[280px] pl-[5px] pt-[2px] pb-[2px] pr-1 opacity-100">
                  <img
                    src="https://promotions-material.s3.ap-south-1.amazonaws.com/quickButtons/e-Cricket-1705911799122?q=65&amp;w=600&amp;px=auto&amp;auto=format"
                    width="16"
                    height="16"
                    className="w-4 h-4 sm:w-5 sm:h-5 ml-1 autoAnimate"
                    alt="e-Cricket-image"
                    loading="lazy"
                    title="e-Cricket"
                  />
                  <span className="ml-1 autoAnimate text-text_Quaternary text-xs capitalize pr-[2px] md:text-sm text-nowrap w-full truncate font-lato-bold font-semibold md:font-semibold">
                    e-Cricket
                  </span>
                </div>
                <div className="absolute top-0 left-0 w-full h-full min-h-9 rounded-[4px]"></div>
              </div>
            </span>
          </div>
          <div title="QuickButtons-10" className="grid grid-row-2">
            <span title="Card Games" className="col-span-1 px-[3px] py-[3px]">
              <div
                className="relative w-full active:scale-95 cursor-pointer bg-bg_SkeletonBgLoaderColor transition-all ease-in-out duration-150 shadow-quickAccessBtnBoxShadows min-h-9 bg-cover bg-center bg-no-repeat rounded-[4px] overflow-hidden undefined"
                style={{
                  backgroundImage:
                    "url('https://promotions-material.s3.ap-south-1.amazonaws.com/sportsButtons/cricket-1696348461938')",
                }}
              >
                <div className="flex justify-center w-full h-full min-h-9 relative z-10 items-center min-w-[175px] sm:min-w-[240px] md:min-w-[280px] pl-[5px] pt-[2px] pb-[2px] pr-1 opacity-100">
                  <img
                    src="https://promotions-material.s3.ap-south-1.amazonaws.com/quickButtons/CardGames-1705911853726?q=65&amp;w=600&amp;px=auto&amp;auto=format"
                    width="16"
                    height="16"
                    className="w-4 h-4 sm:w-5 sm:h-5 ml-1 autoAnimate"
                    alt="Card Games-image"
                    loading="lazy"
                    title="Card Games"
                  />
                  <span className="ml-1 autoAnimate text-text_Quaternary text-xs capitalize pr-[2px] md:text-sm text-nowrap w-full truncate font-lato-bold font-semibold md:font-semibold">
                    Card Games
                  </span>
                </div>
                <div className="absolute top-0 left-0 w-full h-full min-h-9 rounded-[4px]"></div>
              </div>{" "}
            </span>
            <span title="Slot Games" className="col-span-1 px-[3px] py-[3px]">
              <div
                className="relative w-full active:scale-95 cursor-pointer bg-bg_SkeletonBgLoaderColor transition-all ease-in-out duration-150 shadow-quickAccessBtnBoxShadows min-h-9 bg-cover bg-center bg-no-repeat rounded-[4px] overflow-hidden undefined"
                style={{
                  backgroundImage:
                    "url('https://promotions-material.s3.ap-south-1.amazonaws.com/sportsButtons/cricket-1696348461938')",
                }}
              >
                <div className="flex justify-center w-full h-full min-h-9 relative z-10 items-center min-w-[175px] sm:min-w-[240px] md:min-w-[280px] pl-[5px] pt-[2px] pb-[2px] pr-1 opacity-100">
                  <img
                    src="https://promotions-material.s3.ap-south-1.amazonaws.com/quickButtons/SlotGames-1705912015300?q=65&amp;w=600&amp;px=auto&amp;auto=format"
                    width="16"
                    height="16"
                    className="w-4 h-4 sm:w-5 sm:h-5 ml-1 autoAnimate"
                    alt="Slot Games-image"
                    loading="lazy"
                    title="Slot Games"
                  />
                  <span className="ml-1 autoAnimate text-text_Quaternary text-xs capitalize pr-[2px] md:text-sm text-nowrap w-full truncate font-lato-bold font-semibold md:font-semibold">
                    Slot Games
                  </span>
                </div>
                <div className="absolute top-0 left-0 w-full h-full min-h-9 rounded-[4px]"></div>
              </div>
            </span>
          </div>
          <div title="QuickButtons-12" className="grid grid-row-2">
            <span
              title="Multiplayer Games"
              className="col-span-1 px-[3px] py-[3px]"
            >
              <div
                className="relative w-full active:scale-95 cursor-pointer bg-bg_SkeletonBgLoaderColor transition-all ease-in-out duration-150 shadow-quickAccessBtnBoxShadows min-h-9 bg-cover bg-center bg-no-repeat rounded-[4px] overflow-hidden undefined"
                style={{
                  backgroundImage:
                    "url('https://promotions-material.s3.ap-south-1.amazonaws.com/sportsButtons/cricket-1696348461938')",
                }}
              >
                <div className="flex justify-center w-full h-full min-h-9 relative z-10 items-center min-w-[175px] sm:min-w-[240px] md:min-w-[280px] pl-[5px] pt-[2px] pb-[2px] pr-1 opacity-100">
                  <img
                    src="https://promotions-material.s3.ap-south-1.amazonaws.com/quickButtons/MultiplayerGames-1705912077489?q=65&amp;w=600&amp;px=auto&amp;auto=format"
                    width="16"
                    height="16"
                    className="w-4 h-4 sm:w-5 sm:h-5 ml-1 autoAnimate"
                    alt="Multiplayer Games-image"
                    loading="lazy"
                    title="Multiplayer Games"
                  />
                  <span className="ml-1 autoAnimate text-text_Quaternary text-xs capitalize pr-[2px] md:text-sm text-nowrap w-full truncate font-lato-bold font-semibold md:font-semibold">
                    Multiplayer Games
                  </span>
                </div>
                <div className="absolute top-0 left-0 w-full h-full min-h-9 rounded-[4px]"></div>
              </div>{" "}
            </span>
            <span
              title="Fishing games"
              className="col-span-1 px-[3px] py-[3px]"
            >
              <div
                className="relative w-full active:scale-95 cursor-pointer bg-bg_SkeletonBgLoaderColor transition-all ease-in-out duration-150 shadow-quickAccessBtnBoxShadows min-h-9 bg-cover bg-center bg-no-repeat rounded-[4px] overflow-hidden undefined"
                style={{
                  backgroundImage:
                    "url('https://promotions-material.s3.ap-south-1.amazonaws.com/sportsButtons/cricket-1696348461938')",
                }}
              >
                <div className="flex justify-center w-full h-full min-h-9 relative z-10 items-center min-w-[175px] sm:min-w-[240px] md:min-w-[280px] pl-[5px] pt-[2px] pb-[2px] pr-1 opacity-100">
                  <img
                    src="https://promotions-material.s3.ap-south-1.amazonaws.com/quickButtons/Fishinggames-1705912252627?q=65&amp;w=600&amp;px=auto&amp;auto=format"
                    width="16"
                    height="16"
                    className="w-4 h-4 sm:w-5 sm:h-5 ml-1 autoAnimate"
                    alt="Fishing games-image"
                    loading="lazy"
                    title="Fishing games"
                  />
                  <span className="ml-1 autoAnimate text-text_Quaternary text-xs capitalize pr-[2px] md:text-sm text-nowrap w-full truncate font-lato-bold font-semibold md:font-semibold">
                    Fishing games
                  </span>
                </div>
                <div className="absolute top-0 left-0 w-full h-full min-h-9 rounded-[4px]"></div>
              </div>
            </span>
          </div>
          <div title="QuickButtons-0" className="grid grid-row-2">
            <span title="Aviator" className="col-span-1 px-[3px] py-[3px]">
              <div
                className="relative w-full active:scale-95 cursor-pointer bg-bg_SkeletonBgLoaderColor transition-all ease-in-out duration-150 shadow-quickAccessBtnBoxShadows min-h-9 bg-cover bg-center bg-no-repeat rounded-[4px] overflow-hidden undefined"
                style={{
                  backgroundImage:
                    "url('https://promotions-material.s3.ap-south-1.amazonaws.com/sportsButtons/cricket-1696348461938')",
                }}
              >
                <div className="flex justify-center w-full h-full min-h-9 relative z-10 items-center min-w-[175px] sm:min-w-[240px] md:min-w-[280px] pl-[5px] pt-[2px] pb-[2px] pr-1 opacity-100">
                  <img
                    src="https://promotions-material.s3.ap-south-1.amazonaws.com/quickButtons/Aviator-1705911963125?q=65&amp;w=600&amp;px=auto&amp;auto=format"
                    width="16"
                    height="16"
                    className="w-4 h-4 sm:w-5 sm:h-5 ml-1 autoAnimate"
                    alt="Aviator-image"
                    loading="lazy"
                    title="Aviator"
                  />
                  <span className="ml-1 autoAnimate text-text_Quaternary text-xs capitalize pr-[2px] md:text-sm text-nowrap w-full truncate font-lato-bold font-semibold md:font-semibold">
                    Aviator
                  </span>
                </div>
                <div className="absolute top-0 left-0 w-full h-full min-h-9 rounded-[4px]"></div>
              </div>{" "}
            </span>
            <span title="Aura" className="col-span-1 px-[3px] py-[3px]">
              <div
                className="relative w-full active:scale-95 cursor-pointer bg-bg_SkeletonBgLoaderColor transition-all ease-in-out duration-150 shadow-quickAccessBtnBoxShadows min-h-9 bg-cover bg-center bg-no-repeat rounded-[4px] overflow-hidden undefined"
                style={{
                  backgroundImage:
                    "url('https://promotions-material.s3.ap-south-1.amazonaws.com/sportsButtons/cricket-1696348461938')",
                }}
              >
                <div className="flex justify-center w-full h-full min-h-9 relative z-10 items-center min-w-[175px] sm:min-w-[240px] md:min-w-[280px] pl-[5px] pt-[2px] pb-[2px] pr-1 opacity-100">
                  <img
                    src="https://promotions-material.s3.ap-south-1.amazonaws.com/quickButtons/Aura-1705912199647?q=65&amp;w=600&amp;px=auto&amp;auto=format"
                    width="16"
                    height="16"
                    className="w-4 h-4 sm:w-5 sm:h-5 ml-1 autoAnimate"
                    alt="Aura-image"
                    loading="lazy"
                    title="Aura"
                  />
                  <span className="ml-1 autoAnimate text-text_Quaternary text-xs capitalize pr-[2px] md:text-sm text-nowrap w-full truncate font-lato-bold font-semibold md:font-semibold">
                    Aura
                  </span>
                </div>
                <div className="absolute top-0 left-0 w-full h-full min-h-9 rounded-[4px]"></div>
              </div>
            </span>
          </div>
          <div title="QuickButtons-2" className="grid grid-row-2">
            <span title="Mines" className="col-span-1 px-[3px] py-[3px]">
              <div
                className="relative w-full active:scale-95 cursor-pointer bg-bg_SkeletonBgLoaderColor transition-all ease-in-out duration-150 shadow-quickAccessBtnBoxShadows min-h-9 bg-cover bg-center bg-no-repeat rounded-[4px] overflow-hidden undefined"
                style={{
                  backgroundImage:
                    "url('https://promotions-material.s3.ap-south-1.amazonaws.com/sportsButtons/cricket-1696348461938')",
                }}
              >
                <div className="flex justify-center w-full h-full min-h-9 relative z-10 items-center min-w-[175px] sm:min-w-[240px] md:min-w-[280px] pl-[5px] pt-[2px] pb-[2px] pr-1 opacity-100">
                  <img
                    src="https://promotions-material.s3.ap-south-1.amazonaws.com/quickButtons/diamond_icon.png?q=65&amp;w=600&amp;px=auto&amp;auto=format"
                    width="16"
                    height="16"
                    className="w-4 h-4 sm:w-5 sm:h-5 ml-1 autoAnimate"
                    alt="Mines-image"
                    loading="lazy"
                    title="Mines"
                  />
                  <span className="ml-1 autoAnimate text-text_Quaternary text-xs capitalize pr-[2px] md:text-sm text-nowrap w-full truncate font-lato-bold font-semibold md:font-semibold">
                    Mines
                  </span>
                </div>
                <div className="absolute top-0 left-0 w-full h-full min-h-9 rounded-[4px]"></div>
              </div>{" "}
            </span>
            <span title="Limbo" className="col-span-1 px-[3px] py-[3px]">
              <div
                className="relative w-full active:scale-95 cursor-pointer bg-bg_SkeletonBgLoaderColor transition-all ease-in-out duration-150 shadow-quickAccessBtnBoxShadows min-h-9 bg-cover bg-center bg-no-repeat rounded-[4px] overflow-hidden undefined"
                style={{
                  backgroundImage:
                    "url('https://promotions-material.s3.ap-south-1.amazonaws.com/sportsButtons/cricket-1696348461938')",
                }}
              >
                <div className="flex justify-center w-full h-full min-h-9 relative z-10 items-center min-w-[175px] sm:min-w-[240px] md:min-w-[280px] pl-[5px] pt-[2px] pb-[2px] pr-1 opacity-100">
                  <img
                    src="https://promotions-material.s3.ap-south-1.amazonaws.com/quickButtons/Aviator-1705911963125?q=65&amp;w=600&amp;px=auto&amp;auto=format"
                    width="16"
                    height="16"
                    className="w-4 h-4 sm:w-5 sm:h-5 ml-1 autoAnimate"
                    alt="Limbo-image"
                    loading="lazy"
                    title="Limbo"
                  />
                  <span className="ml-1 autoAnimate text-text_Quaternary text-xs capitalize pr-[2px] md:text-sm text-nowrap w-full truncate font-lato-bold font-semibold md:font-semibold">
                    Limbo
                  </span>
                </div>
                <div className="absolute top-0 left-0 w-full h-full min-h-9 rounded-[4px]"></div>
              </div>
            </span>
          </div>
          <div title="QuickButtons-4" className="grid grid-row-2">
            <span title="Color Game" className="col-span-1 px-[3px] py-[3px]">
              <div
                className="relative w-full active:scale-95 cursor-pointer bg-bg_SkeletonBgLoaderColor transition-all ease-in-out duration-150 shadow-quickAccessBtnBoxShadows min-h-9 bg-cover bg-center bg-no-repeat rounded-[4px] overflow-hidden undefined"
                style={{
                  backgroundImage:
                    "url('https://promotions-material.s3.ap-south-1.amazonaws.com/sportsButtons/cricket-1696348461938')",
                }}
              >
                <div className="flex justify-center w-full h-full min-h-9 relative z-10 items-center min-w-[175px] sm:min-w-[240px] md:min-w-[280px] pl-[5px] pt-[2px] pb-[2px] pr-1 opacity-100">
                  <img
                    src="https://promomaterial.imgix.net/quickButtons/ColorGame-1718191763431"
                    width="16"
                    height="16"
                    className="w-4 h-4 sm:w-5 sm:h-5 ml-1 autoAnimate"
                    alt="Color Game-image"
                    loading="lazy"
                    title="Color Game"
                  />
                  <span className="ml-1 autoAnimate text-text_Quaternary text-xs capitalize pr-[2px] md:text-sm text-nowrap w-full truncate font-lato-bold font-semibold md:font-semibold">
                    Color Game
                  </span>
                </div>
                <div className="absolute top-0 left-0 w-full h-full min-h-9 rounded-[4px]"></div>
              </div>{" "}
            </span>
            <span
              title="Tower Legends"
              className="col-span-1 px-[3px] py-[3px]"
            >
              <div
                className="relative w-full active:scale-95 cursor-pointer bg-bg_SkeletonBgLoaderColor transition-all ease-in-out duration-150 shadow-quickAccessBtnBoxShadows min-h-9 bg-cover bg-center bg-no-repeat rounded-[4px] overflow-hidden undefined"
                style={{
                  backgroundImage:
                    "url('https://promotions-material.s3.ap-south-1.amazonaws.com/sportsButtons/cricket-1696348461938')",
                }}
              >
                <div className="flex justify-center w-full h-full min-h-9 relative z-10 items-center min-w-[175px] sm:min-w-[240px] md:min-w-[280px] pl-[5px] pt-[2px] pb-[2px] pr-1 opacity-100">
                  <img
                    src="https://promomaterial.imgix.net/quickButtons/TowerLegends-1722000145474"
                    width="16"
                    height="16"
                    className="w-4 h-4 sm:w-5 sm:h-5 ml-1 autoAnimate"
                    alt="Tower Legends-image"
                    loading="lazy"
                    title="Tower Legends"
                  />
                  <span className="ml-1 autoAnimate text-text_Quaternary text-xs capitalize pr-[2px] md:text-sm text-nowrap w-full truncate font-lato-bold font-semibold md:font-semibold">
                    Tower Legends
                  </span>
                </div>
                <div className="absolute top-0 left-0 w-full h-full min-h-9 rounded-[4px]"></div>
              </div>
            </span>
          </div>
          <div title="QuickButtons-6" className="grid grid-row-2">
            <span title="Evolution" className="col-span-1 px-[3px] py-[3px]">
              <div
                className="relative w-full active:scale-95 cursor-pointer bg-bg_SkeletonBgLoaderColor transition-all ease-in-out duration-150 shadow-quickAccessBtnBoxShadows min-h-9 bg-cover bg-center bg-no-repeat rounded-[4px] overflow-hidden undefined"
                style={{
                  backgroundImage:
                    "url('https://promotions-material.s3.ap-south-1.amazonaws.com/sportsButtons/cricket-1696348461938')",
                }}
              >
                <div className="flex justify-center w-full h-full min-h-9 relative z-10 items-center min-w-[175px] sm:min-w-[240px] md:min-w-[280px] pl-[5px] pt-[2px] pb-[2px] pr-1 opacity-100">
                  <img
                    src="https://promotions-material.s3.ap-south-1.amazonaws.com/quickButtons/Evolution-1705911275817?q=65&amp;w=600&amp;px=auto&amp;auto=format"
                    width="16"
                    height="16"
                    className="w-4 h-4 sm:w-5 sm:h-5 ml-1 autoAnimate"
                    alt="Evolution-image"
                    loading="lazy"
                    title="Evolution"
                  />
                  <span className="ml-1 autoAnimate text-text_Quaternary text-xs capitalize pr-[2px] md:text-sm text-nowrap w-full truncate font-lato-bold font-semibold md:font-semibold">
                    Evolution
                  </span>
                </div>
                <div className="absolute top-0 left-0 w-full h-full min-h-9 rounded-[4px]"></div>
              </div>{" "}
            </span>
            <span title="Sportsbook" className="col-span-1 px-[3px] py-[3px]">
              <div
                className="relative w-full active:scale-95 cursor-pointer bg-bg_SkeletonBgLoaderColor transition-all ease-in-out duration-150 shadow-quickAccessBtnBoxShadows min-h-9 bg-cover bg-center bg-no-repeat rounded-[4px] overflow-hidden undefined"
                style={{
                  backgroundImage:
                    "url('https://promotions-material.s3.ap-south-1.amazonaws.com/sportsButtons/cricket-1696348461938')",
                }}
              >
                <div className="flex justify-center w-full h-full min-h-9 relative z-10 items-center min-w-[175px] sm:min-w-[240px] md:min-w-[280px] pl-[5px] pt-[2px] pb-[2px] pr-1 opacity-100">
                  <img
                    src="https://promotions-material.s3.ap-south-1.amazonaws.com/quickButtons/Sportsbook-1705911352029?q=65&amp;w=600&amp;px=auto&amp;auto=format"
                    width="16"
                    height="16"
                    className="w-4 h-4 sm:w-5 sm:h-5 ml-1 autoAnimate"
                    alt="Sportsbook-image"
                    loading="lazy"
                    title="Sportsbook"
                  />
                  <span className="ml-1 autoAnimate text-text_Quaternary text-xs capitalize pr-[2px] md:text-sm text-nowrap w-full truncate font-lato-bold font-semibold md:font-semibold">
                    Sportsbook
                  </span>
                </div>
                <div className="absolute top-0 left-0 w-full h-full min-h-9 rounded-[4px]"></div>
              </div>
            </span>
          </div>
          <div title="QuickButtons-8" className="grid grid-row-2">
            <span title="Live Casinos" className="col-span-1 px-[3px] py-[3px]">
              <div
                className="relative w-full active:scale-95 cursor-pointer bg-bg_SkeletonBgLoaderColor transition-all ease-in-out duration-150 shadow-quickAccessBtnBoxShadows min-h-9 bg-cover bg-center bg-no-repeat rounded-[4px] overflow-hidden undefined"
                style={{
                  backgroundImage:
                    "url('https://promotions-material.s3.ap-south-1.amazonaws.com/sportsButtons/cricket-1696348461938')",
                }}
              >
                <div className="flex justify-center w-full h-full min-h-9 relative z-10 items-center min-w-[175px] sm:min-w-[240px] md:min-w-[280px] pl-[5px] pt-[2px] pb-[2px] pr-1 opacity-100">
                  <img
                    src="https://promotions-material.s3.ap-south-1.amazonaws.com/quickButtons/LiveCasinos-1705911704279?q=65&amp;w=600&amp;px=auto&amp;auto=format"
                    width="16"
                    height="16"
                    className="w-4 h-4 sm:w-5 sm:h-5 ml-1 autoAnimate"
                    alt="Live Casinos-image"
                    loading="lazy"
                    title="Live Casinos"
                  />
                  <span className="ml-1 autoAnimate text-text_Quaternary text-xs capitalize pr-[2px] md:text-sm text-nowrap w-full truncate font-lato-bold font-semibold md:font-semibold">
                    Live Casinos
                  </span>
                </div>
                <div className="absolute top-0 left-0 w-full h-full min-h-9 rounded-[4px]"></div>
              </div>{" "}
            </span>
            <span title="e-Cricket" className="col-span-1 px-[3px] py-[3px]">
              <div
                className="relative w-full active:scale-95 cursor-pointer bg-bg_SkeletonBgLoaderColor transition-all ease-in-out duration-150 shadow-quickAccessBtnBoxShadows min-h-9 bg-cover bg-center bg-no-repeat rounded-[4px] overflow-hidden undefined"
                style={{
                  backgroundImage:
                    "url('https://promotions-material.s3.ap-south-1.amazonaws.com/sportsButtons/cricket-1696348461938')",
                }}
              >
                <div className="flex justify-center w-full h-full min-h-9 relative z-10 items-center min-w-[175px] sm:min-w-[240px] md:min-w-[280px] pl-[5px] pt-[2px] pb-[2px] pr-1 opacity-100">
                  <img
                    src="https://promotions-material.s3.ap-south-1.amazonaws.com/quickButtons/e-Cricket-1705911799122?q=65&amp;w=600&amp;px=auto&amp;auto=format"
                    width="16"
                    height="16"
                    className="w-4 h-4 sm:w-5 sm:h-5 ml-1 autoAnimate"
                    alt="e-Cricket-image"
                    loading="lazy"
                    title="e-Cricket"
                  />
                  <span className="ml-1 autoAnimate text-text_Quaternary text-xs capitalize pr-[2px] md:text-sm text-nowrap w-full truncate font-lato-bold font-semibold md:font-semibold">
                    e-Cricket
                  </span>
                </div>
                <div className="absolute top-0 left-0 w-full h-full min-h-9 rounded-[4px]"></div>
              </div>
            </span>
          </div>
          <div title="QuickButtons-10" className="grid grid-row-2">
            <span title="Card Games" className="col-span-1 px-[3px] py-[3px]">
              <div
                className="relative w-full active:scale-95 cursor-pointer bg-bg_SkeletonBgLoaderColor transition-all ease-in-out duration-150 shadow-quickAccessBtnBoxShadows min-h-9 bg-cover bg-center bg-no-repeat rounded-[4px] overflow-hidden undefined"
                style={{
                  backgroundImage:
                    "url('https://promotions-material.s3.ap-south-1.amazonaws.com/sportsButtons/cricket-1696348461938')",
                }}
              >
                <div className="flex justify-center w-full h-full min-h-9 relative z-10 items-center min-w-[175px] sm:min-w-[240px] md:min-w-[280px] pl-[5px] pt-[2px] pb-[2px] pr-1 opacity-100">
                  <img
                    src="https://promotions-material.s3.ap-south-1.amazonaws.com/quickButtons/CardGames-1705911853726?q=65&amp;w=600&amp;px=auto&amp;auto=format"
                    width="16"
                    height="16"
                    className="w-4 h-4 sm:w-5 sm:h-5 ml-1 autoAnimate"
                    alt="Card Games-image"
                    loading="lazy"
                    title="Card Games"
                  />
                  <span className="ml-1 autoAnimate text-text_Quaternary text-xs capitalize pr-[2px] md:text-sm text-nowrap w-full truncate font-lato-bold font-semibold md:font-semibold">
                    Card Games
                  </span>
                </div>
                <div className="absolute top-0 left-0 w-full h-full min-h-9 rounded-[4px]"></div>
              </div>{" "}
            </span>
            <span title="Slot Games" className="col-span-1 px-[3px] py-[3px]">
              <div
                className="relative w-full active:scale-95 cursor-pointer bg-bg_SkeletonBgLoaderColor transition-all ease-in-out duration-150 shadow-quickAccessBtnBoxShadows min-h-9 bg-cover bg-center bg-no-repeat rounded-[4px] overflow-hidden undefined"
                style={{
                  backgroundImage:
                    "url('https://promotions-material.s3.ap-south-1.amazonaws.com/sportsButtons/cricket-1696348461938')",
                }}
              >
                <div className="flex justify-center w-full h-full min-h-9 relative z-10 items-center min-w-[175px] sm:min-w-[240px] md:min-w-[280px] pl-[5px] pt-[2px] pb-[2px] pr-1 opacity-100">
                  <img
                    src="https://promotions-material.s3.ap-south-1.amazonaws.com/quickButtons/SlotGames-1705912015300?q=65&amp;w=600&amp;px=auto&amp;auto=format"
                    width="16"
                    height="16"
                    className="w-4 h-4 sm:w-5 sm:h-5 ml-1 autoAnimate"
                    alt="Slot Games-image"
                    loading="lazy"
                    title="Slot Games"
                  />
                  <span className="ml-1 autoAnimate text-text_Quaternary text-xs capitalize pr-[2px] md:text-sm text-nowrap w-full truncate font-lato-bold font-semibold md:font-semibold">
                    Slot Games
                  </span>
                </div>
                <div className="absolute top-0 left-0 w-full h-full min-h-9 rounded-[4px]"></div>
              </div>
            </span>
          </div>
          <div title="QuickButtons-12" className="grid grid-row-2">
            <span
              title="Multiplayer Games"
              className="col-span-1 px-[3px] py-[3px]"
            >
              <div
                className="relative w-full active:scale-95 cursor-pointer bg-bg_SkeletonBgLoaderColor transition-all ease-in-out duration-150 shadow-quickAccessBtnBoxShadows min-h-9 bg-cover bg-center bg-no-repeat rounded-[4px] overflow-hidden undefined"
                style={{
                  backgroundImage:
                    "url('https://promotions-material.s3.ap-south-1.amazonaws.com/sportsButtons/cricket-1696348461938')",
                }}
              >
                <div className="flex justify-center w-full h-full min-h-9 relative z-10 items-center min-w-[175px] sm:min-w-[240px] md:min-w-[280px] pl-[5px] pt-[2px] pb-[2px] pr-1 opacity-100">
                  <img
                    src="https://promotions-material.s3.ap-south-1.amazonaws.com/quickButtons/MultiplayerGames-1705912077489?q=65&amp;w=600&amp;px=auto&amp;auto=format"
                    width="16"
                    height="16"
                    className="w-4 h-4 sm:w-5 sm:h-5 ml-1 autoAnimate"
                    alt="Multiplayer Games-image"
                    loading="lazy"
                    title="Multiplayer Games"
                  />
                  <span className="ml-1 autoAnimate text-text_Quaternary text-xs capitalize pr-[2px] md:text-sm text-nowrap w-full truncate font-lato-bold font-semibold md:font-semibold">
                    Multiplayer Games
                  </span>
                </div>
                <div className="absolute top-0 left-0 w-full h-full min-h-9 rounded-[4px]"></div>
              </div>{" "}
            </span>
            <span
              title="Fishing games"
              className="col-span-1 px-[3px] py-[3px]"
            >
              <div
                className="relative w-full active:scale-95 cursor-pointer bg-bg_SkeletonBgLoaderColor transition-all ease-in-out duration-150 shadow-quickAccessBtnBoxShadows min-h-9 bg-cover bg-center bg-no-repeat rounded-[4px] overflow-hidden undefined"
                style={{
                  backgroundImage:
                    "url('https://promotions-material.s3.ap-south-1.amazonaws.com/sportsButtons/cricket-1696348461938')",
                }}
              >
                <div className="flex justify-center w-full h-full min-h-9 relative z-10 items-center min-w-[175px] sm:min-w-[240px] md:min-w-[280px] pl-[5px] pt-[2px] pb-[2px] pr-1 opacity-100">
                  <img
                    src="https://promotions-material.s3.ap-south-1.amazonaws.com/quickButtons/Fishinggames-1705912252627?q=65&amp;w=600&amp;px=auto&amp;auto=format"
                    width="16"
                    height="16"
                    className="w-4 h-4 sm:w-5 sm:h-5 ml-1 autoAnimate"
                    alt="Fishing games-image"
                    loading="lazy"
                    title="Fishing games"
                  />
                  <span className="ml-1 autoAnimate text-text_Quaternary text-xs capitalize pr-[2px] md:text-sm text-nowrap w-full truncate font-lato-bold font-semibold md:font-semibold">
                    Fishing games
                  </span>
                </div>
                <div className="absolute top-0 left-0 w-full h-full min-h-9 rounded-[4px]"></div>
              </div>
            </span>
          </div>
          <div title="QuickButtons-0" className="grid grid-row-2">
            <span title="Aviator" className="col-span-1 px-[3px] py-[3px]">
              <div
                className="relative w-full active:scale-95 cursor-pointer bg-bg_SkeletonBgLoaderColor transition-all ease-in-out duration-150 shadow-quickAccessBtnBoxShadows min-h-9 bg-cover bg-center bg-no-repeat rounded-[4px] overflow-hidden undefined"
                style={{
                  backgroundImage:
                    "url('https://promotions-material.s3.ap-south-1.amazonaws.com/sportsButtons/cricket-1696348461938')",
                }}
              >
                <div className="flex justify-center w-full h-full min-h-9 relative z-10 items-center min-w-[175px] sm:min-w-[240px] md:min-w-[280px] pl-[5px] pt-[2px] pb-[2px] pr-1 opacity-100">
                  <img
                    src="https://promotions-material.s3.ap-south-1.amazonaws.com/quickButtons/Aviator-1705911963125?q=65&amp;w=600&amp;px=auto&amp;auto=format"
                    width="16"
                    height="16"
                    className="w-4 h-4 sm:w-5 sm:h-5 ml-1 autoAnimate"
                    alt="Aviator-image"
                    loading="lazy"
                    title="Aviator"
                  />
                  <span className="ml-1 autoAnimate text-text_Quaternary text-xs capitalize pr-[2px] md:text-sm text-nowrap w-full truncate font-lato-bold font-semibold md:font-semibold">
                    Aviator
                  </span>
                </div>
                <div className="absolute top-0 left-0 w-full h-full min-h-9 rounded-[4px]"></div>
              </div>{" "}
            </span>
            <span title="Aura" className="col-span-1 px-[3px] py-[3px]">
              <div
                className="relative w-full active:scale-95 cursor-pointer bg-bg_SkeletonBgLoaderColor transition-all ease-in-out duration-150 shadow-quickAccessBtnBoxShadows min-h-9 bg-cover bg-center bg-no-repeat rounded-[4px] overflow-hidden undefined"
                style={{
                  backgroundImage:
                    "url('https://promotions-material.s3.ap-south-1.amazonaws.com/sportsButtons/cricket-1696348461938')",
                }}
              >
                <div className="flex justify-center w-full h-full min-h-9 relative z-10 items-center min-w-[175px] sm:min-w-[240px] md:min-w-[280px] pl-[5px] pt-[2px] pb-[2px] pr-1 opacity-100">
                  <img
                    src="https://promotions-material.s3.ap-south-1.amazonaws.com/quickButtons/Aura-1705912199647?q=65&amp;w=600&amp;px=auto&amp;auto=format"
                    width="16"
                    height="16"
                    className="w-4 h-4 sm:w-5 sm:h-5 ml-1 autoAnimate"
                    alt="Aura-image"
                    loading="lazy"
                    title="Aura"
                  />
                  <span className="ml-1 autoAnimate text-text_Quaternary text-xs capitalize pr-[2px] md:text-sm text-nowrap w-full truncate font-lato-bold font-semibold md:font-semibold">
                    Aura
                  </span>
                </div>
                <div className="absolute top-0 left-0 w-full h-full min-h-9 rounded-[4px]"></div>
              </div>
            </span>
          </div>
          <div title="QuickButtons-2" className="grid grid-row-2">
            <span title="Mines" className="col-span-1 px-[3px] py-[3px]">
              <div
                className="relative w-full active:scale-95 cursor-pointer bg-bg_SkeletonBgLoaderColor transition-all ease-in-out duration-150 shadow-quickAccessBtnBoxShadows min-h-9 bg-cover bg-center bg-no-repeat rounded-[4px] overflow-hidden undefined"
                style={{
                  backgroundImage:
                    "url('https://promotions-material.s3.ap-south-1.amazonaws.com/sportsButtons/cricket-1696348461938')",
                }}
              >
                <div className="flex justify-center w-full h-full min-h-9 relative z-10 items-center min-w-[175px] sm:min-w-[240px] md:min-w-[280px] pl-[5px] pt-[2px] pb-[2px] pr-1 opacity-100">
                  <img
                    src="https://promotions-material.s3.ap-south-1.amazonaws.com/quickButtons/diamond_icon.png?q=65&amp;w=600&amp;px=auto&amp;auto=format"
                    width="16"
                    height="16"
                    className="w-4 h-4 sm:w-5 sm:h-5 ml-1 autoAnimate"
                    alt="Mines-image"
                    loading="lazy"
                    title="Mines"
                  />
                  <span className="ml-1 autoAnimate text-text_Quaternary text-xs capitalize pr-[2px] md:text-sm text-nowrap w-full truncate font-lato-bold font-semibold md:font-semibold">
                    Mines
                  </span>
                </div>
                <div className="absolute top-0 left-0 w-full h-full min-h-9 rounded-[4px]"></div>
              </div>{" "}
            </span>
            <span title="Limbo" className="col-span-1 px-[3px] py-[3px]">
              <div
                className="relative w-full active:scale-95 cursor-pointer bg-bg_SkeletonBgLoaderColor transition-all ease-in-out duration-150 shadow-quickAccessBtnBoxShadows min-h-9 bg-cover bg-center bg-no-repeat rounded-[4px] overflow-hidden undefined"
                style={{
                  backgroundImage:
                    "url('https://promotions-material.s3.ap-south-1.amazonaws.com/sportsButtons/cricket-1696348461938')",
                }}
              >
                <div className="flex justify-center w-full h-full min-h-9 relative z-10 items-center min-w-[175px] sm:min-w-[240px] md:min-w-[280px] pl-[5px] pt-[2px] pb-[2px] pr-1 opacity-100">
                  <img
                    src="https://promotions-material.s3.ap-south-1.amazonaws.com/quickButtons/Aviator-1705911963125?q=65&amp;w=600&amp;px=auto&amp;auto=format"
                    width="16"
                    height="16"
                    className="w-4 h-4 sm:w-5 sm:h-5 ml-1 autoAnimate"
                    alt="Limbo-image"
                    loading="lazy"
                    title="Limbo"
                  />
                  <span className="ml-1 autoAnimate text-text_Quaternary text-xs capitalize pr-[2px] md:text-sm text-nowrap w-full truncate font-lato-bold font-semibold md:font-semibold">
                    Limbo
                  </span>
                </div>
                <div className="absolute top-0 left-0 w-full h-full min-h-9 rounded-[4px]"></div>
              </div>
            </span>
          </div>
          <div title="QuickButtons-4" className="grid grid-row-2">
            <span title="Color Game" className="col-span-1 px-[3px] py-[3px]">
              <div
                className="relative w-full active:scale-95 cursor-pointer bg-bg_SkeletonBgLoaderColor transition-all ease-in-out duration-150 shadow-quickAccessBtnBoxShadows min-h-9 bg-cover bg-center bg-no-repeat rounded-[4px] overflow-hidden undefined"
                style={{
                  backgroundImage:
                    "url('https://promotions-material.s3.ap-south-1.amazonaws.com/sportsButtons/cricket-1696348461938')",
                }}
              >
                <div className="flex justify-center w-full h-full min-h-9 relative z-10 items-center min-w-[175px] sm:min-w-[240px] md:min-w-[280px] pl-[5px] pt-[2px] pb-[2px] pr-1 opacity-100">
                  <img
                    src="https://promomaterial.imgix.net/quickButtons/ColorGame-1718191763431?q=65&amp;w=600&amp;px=auto&amp;auto=format"
                    width="16"
                    height="16"
                    className="w-4 h-4 sm:w-5 sm:h-5 ml-1 autoAnimate"
                    alt="Color Game-image"
                    loading="lazy"
                    title="Color Game"
                  />
                  <span className="ml-1 autoAnimate text-text_Quaternary text-xs capitalize pr-[2px] md:text-sm text-nowrap w-full truncate font-lato-bold font-semibold md:font-semibold">
                    Color Game
                  </span>
                </div>
                <div className="absolute top-0 left-0 w-full h-full min-h-9 rounded-[4px]"></div>
              </div>{" "}
            </span>
            <span
              title="Tower Legends"
              className="col-span-1 px-[3px] py-[3px]"
            >
              <div
                className="relative w-full active:scale-95 cursor-pointer bg-bg_SkeletonBgLoaderColor transition-all ease-in-out duration-150 shadow-quickAccessBtnBoxShadows min-h-9 bg-cover bg-center bg-no-repeat rounded-[4px] overflow-hidden undefined"
                style={{
                  backgroundImage:
                    "url('https://promotions-material.s3.ap-south-1.amazonaws.com/sportsButtons/cricket-1696348461938')",
                }}
              >
                <div className="flex justify-center w-full h-full min-h-9 relative z-10 items-center min-w-[175px] sm:min-w-[240px] md:min-w-[280px] pl-[5px] pt-[2px] pb-[2px] pr-1 opacity-100">
                  <img
                    src="https://promomaterial.imgix.net/quickButtons/TowerLegends-1722000145474?q=65&amp;w=600&amp;px=auto&amp;auto=format"
                    width="16"
                    height="16"
                    className="w-4 h-4 sm:w-5 sm:h-5 ml-1 autoAnimate"
                    alt="Tower Legends-image"
                    loading="lazy"
                    title="Tower Legends"
                  />
                  <span className="ml-1 autoAnimate text-text_Quaternary text-xs capitalize pr-[2px] md:text-sm text-nowrap w-full truncate font-lato-bold font-semibold md:font-semibold">
                    Tower Legends
                  </span>
                </div>
                <div className="absolute top-0 left-0 w-full h-full min-h-9 rounded-[4px]"></div>
              </div>
            </span>
          </div>
          <div title="QuickButtons-6" className="grid grid-row-2">
            <span title="Evolution" className="col-span-1 px-[3px] py-[3px]">
              <div
                className="relative w-full active:scale-95 cursor-pointer bg-bg_SkeletonBgLoaderColor transition-all ease-in-out duration-150 shadow-quickAccessBtnBoxShadows min-h-9 bg-cover bg-center bg-no-repeat rounded-[4px] overflow-hidden undefined"
                style={{
                  backgroundImage:
                    "url('https://promotions-material.s3.ap-south-1.amazonaws.com/sportsButtons/cricket-1696348461938')",
                }}
              >
                <div className="flex justify-center w-full h-full min-h-9 relative z-10 items-center min-w-[175px] sm:min-w-[240px] md:min-w-[280px] pl-[5px] pt-[2px] pb-[2px] pr-1 opacity-100">
                  <img
                    src="https://promotions-material.s3.ap-south-1.amazonaws.com/quickButtons/Evolution-1705911275817?q=65&amp;w=600&amp;px=auto&amp;auto=format"
                    width="16"
                    height="16"
                    className="w-4 h-4 sm:w-5 sm:h-5 ml-1 autoAnimate"
                    alt="Evolution-image"
                    loading="lazy"
                    title="Evolution"
                  />
                  <span className="ml-1 autoAnimate text-text_Quaternary text-xs capitalize pr-[2px] md:text-sm text-nowrap w-full truncate font-lato-bold font-semibold md:font-semibold">
                    Evolution
                  </span>
                </div>
                <div className="absolute top-0 left-0 w-full h-full min-h-9 rounded-[4px]"></div>
              </div>{" "}
            </span>
            <span title="Sportsbook" className="col-span-1 px-[3px] py-[3px]">
              <div
                className="relative w-full active:scale-95 cursor-pointer bg-bg_SkeletonBgLoaderColor transition-all ease-in-out duration-150 shadow-quickAccessBtnBoxShadows min-h-9 bg-cover bg-center bg-no-repeat rounded-[4px] overflow-hidden undefined"
                style={{
                  backgroundImage:
                    "url('https://promotions-material.s3.ap-south-1.amazonaws.com/sportsButtons/cricket-1696348461938')",
                }}
              >
                <div className="flex justify-center w-full h-full min-h-9 relative z-10 items-center min-w-[175px] sm:min-w-[240px] md:min-w-[280px] pl-[5px] pt-[2px] pb-[2px] pr-1 opacity-100">
                  <img
                    src="https://promotions-material.s3.ap-south-1.amazonaws.com/quickButtons/Sportsbook-1705911352029?q=65&amp;w=600&amp;px=auto&amp;auto=format"
                    width="16"
                    height="16"
                    className="w-4 h-4 sm:w-5 sm:h-5 ml-1 autoAnimate"
                    alt="Sportsbook-image"
                    loading="lazy"
                    title="Sportsbook"
                  />
                  <span className="ml-1 autoAnimate text-text_Quaternary text-xs capitalize pr-[2px] md:text-sm text-nowrap w-full truncate font-lato-bold font-semibold md:font-semibold">
                    Sportsbook
                  </span>
                </div>
                <div className="absolute top-0 left-0 w-full h-full min-h-9 rounded-[4px]"></div>
              </div>
            </span>
          </div>
          <div title="QuickButtons-8" className="grid grid-row-2">
            <span title="Live Casinos" className="col-span-1 px-[3px] py-[3px]">
              <div
                className="relative w-full active:scale-95 cursor-pointer bg-bg_SkeletonBgLoaderColor transition-all ease-in-out duration-150 shadow-quickAccessBtnBoxShadows min-h-9 bg-cover bg-center bg-no-repeat rounded-[4px] overflow-hidden undefined"
                style={{
                  backgroundImage:
                    "url('https://promotions-material.s3.ap-south-1.amazonaws.com/sportsButtons/cricket-1696348461938')",
                }}
              >
                <div className="flex justify-center w-full h-full min-h-9 relative z-10 items-center min-w-[175px] sm:min-w-[240px] md:min-w-[280px] pl-[5px] pt-[2px] pb-[2px] pr-1 opacity-100">
                  <img
                    src="https://promotions-material.s3.ap-south-1.amazonaws.com/quickButtons/LiveCasinos-1705911704279?q=65&amp;w=600&amp;px=auto&amp;auto=format"
                    width="16"
                    height="16"
                    className="w-4 h-4 sm:w-5 sm:h-5 ml-1 autoAnimate"
                    alt="Live Casinos-image"
                    loading="lazy"
                    title="Live Casinos"
                  />
                  <span className="ml-1 autoAnimate text-text_Quaternary text-xs capitalize pr-[2px] md:text-sm text-nowrap w-full truncate font-lato-bold font-semibold md:font-semibold">
                    Live Casinos
                  </span>
                </div>
                <div className="absolute top-0 left-0 w-full h-full min-h-9 rounded-[4px]"></div>
              </div>{" "}
            </span>
            <span title="e-Cricket" className="col-span-1 px-[3px] py-[3px]">
              <div
                className="relative w-full active:scale-95 cursor-pointer bg-bg_SkeletonBgLoaderColor transition-all ease-in-out duration-150 shadow-quickAccessBtnBoxShadows min-h-9 bg-cover bg-center bg-no-repeat rounded-[4px] overflow-hidden undefined"
                style={{
                  backgroundImage:
                    "url('https://promotions-material.s3.ap-south-1.amazonaws.com/sportsButtons/cricket-1696348461938')",
                }}
              >
                <div className="flex justify-center w-full h-full min-h-9 relative z-10 items-center min-w-[175px] sm:min-w-[240px] md:min-w-[280px] pl-[5px] pt-[2px] pb-[2px] pr-1 opacity-100">
                  <img
                    src="https://promotions-material.s3.ap-south-1.amazonaws.com/quickButtons/e-Cricket-1705911799122?q=65&amp;w=600&amp;px=auto&amp;auto=format"
                    width="16"
                    height="16"
                    className="w-4 h-4 sm:w-5 sm:h-5 ml-1 autoAnimate"
                    alt="e-Cricket-image"
                    loading="lazy"
                    title="e-Cricket"
                  />
                  <span className="ml-1 autoAnimate text-text_Quaternary text-xs capitalize pr-[2px] md:text-sm text-nowrap w-full truncate font-lato-bold font-semibold md:font-semibold">
                    e-Cricket
                  </span>
                </div>
                <div className="absolute top-0 left-0 w-full h-full min-h-9 rounded-[4px]"></div>
              </div>
            </span>
          </div>
          <div title="QuickButtons-10" className="grid grid-row-2">
            <span title="Card Games" className="col-span-1 px-[3px] py-[3px]">
              <div
                className="relative w-full active:scale-95 cursor-pointer bg-bg_SkeletonBgLoaderColor transition-all ease-in-out duration-150 shadow-quickAccessBtnBoxShadows min-h-9 bg-cover bg-center bg-no-repeat rounded-[4px] overflow-hidden undefined"
                style={{
                  backgroundImage:
                    "url('https://promotions-material.s3.ap-south-1.amazonaws.com/sportsButtons/cricket-1696348461938')",
                }}
              >
                <div className="flex justify-center w-full h-full min-h-9 relative z-10 items-center min-w-[175px] sm:min-w-[240px] md:min-w-[280px] pl-[5px] pt-[2px] pb-[2px] pr-1 opacity-100">
                  <img
                    src="https://promotions-material.s3.ap-south-1.amazonaws.com/quickButtons/CardGames-1705911853726?q=65&amp;w=600&amp;px=auto&amp;auto=format"
                    width="16"
                    height="16"
                    className="w-4 h-4 sm:w-5 sm:h-5 ml-1 autoAnimate"
                    alt="Card Games-image"
                    loading="lazy"
                    title="Card Games"
                  />
                  <span className="ml-1 autoAnimate text-text_Quaternary text-xs capitalize pr-[2px] md:text-sm text-nowrap w-full truncate font-lato-bold font-semibold md:font-semibold">
                    Card Games
                  </span>
                </div>
                <div className="absolute top-0 left-0 w-full h-full min-h-9 rounded-[4px]"></div>
              </div>{" "}
            </span>
            <span title="Slot Games" className="col-span-1 px-[3px] py-[3px]">
              <div
                className="relative w-full active:scale-95 cursor-pointer bg-bg_SkeletonBgLoaderColor transition-all ease-in-out duration-150 shadow-quickAccessBtnBoxShadows min-h-9 bg-cover bg-center bg-no-repeat rounded-[4px] overflow-hidden undefined"
                style={{
                  backgroundImage:
                    "url('https://promotions-material.s3.ap-south-1.amazonaws.com/sportsButtons/cricket-1696348461938')",
                }}
              >
                <div className="flex justify-center w-full h-full min-h-9 relative z-10 items-center min-w-[175px] sm:min-w-[240px] md:min-w-[280px] pl-[5px] pt-[2px] pb-[2px] pr-1 opacity-100">
                  <img
                    src="https://promotions-material.s3.ap-south-1.amazonaws.com/quickButtons/SlotGames-1705912015300?q=65&amp;w=600&amp;px=auto&amp;auto=format"
                    width="16"
                    height="16"
                    className="w-4 h-4 sm:w-5 sm:h-5 ml-1 autoAnimate"
                    alt="Slot Games-image"
                    loading="lazy"
                    title="Slot Games"
                  />
                  <span className="ml-1 autoAnimate text-text_Quaternary text-xs capitalize pr-[2px] md:text-sm text-nowrap w-full truncate font-lato-bold font-semibold md:font-semibold">
                    Slot Games
                  </span>
                </div>
                <div className="absolute top-0 left-0 w-full h-full min-h-9 rounded-[4px]"></div>
              </div>
            </span>
          </div>
          <div title="QuickButtons-12" className="grid grid-row-2">
            <span
              title="Multiplayer Games"
              className="col-span-1 px-[3px] py-[3px]"
            >
              <div
                className="relative w-full active:scale-95 cursor-pointer bg-bg_SkeletonBgLoaderColor transition-all ease-in-out duration-150 shadow-quickAccessBtnBoxShadows min-h-9 bg-cover bg-center bg-no-repeat rounded-[4px] overflow-hidden undefined"
                style={{
                  backgroundImage:
                    "url('https://promotions-material.s3.ap-south-1.amazonaws.com/sportsButtons/cricket-1696348461938')",
                }}
              >
                <div className="flex justify-center w-full h-full min-h-9 relative z-10 items-center min-w-[175px] sm:min-w-[240px] md:min-w-[280px] pl-[5px] pt-[2px] pb-[2px] pr-1 opacity-100">
                  <img
                    src="https://promotions-material.s3.ap-south-1.amazonaws.com/quickButtons/MultiplayerGames-1705912077489?q=65&amp;w=600&amp;px=auto&amp;auto=format"
                    width="16"
                    height="16"
                    className="w-4 h-4 sm:w-5 sm:h-5 ml-1 autoAnimate"
                    alt="Multiplayer Games-image"
                    loading="lazy"
                    title="Multiplayer Games"
                  />
                  <span className="ml-1 autoAnimate text-text_Quaternary text-xs capitalize pr-[2px] md:text-sm text-nowrap w-full truncate font-lato-bold font-semibold md:font-semibold">
                    Multiplayer Games
                  </span>
                </div>
                <div className="absolute top-0 left-0 w-full h-full min-h-9 rounded-[4px]"></div>
              </div>{" "}
            </span>
            <span
              title="Fishing games"
              className="col-span-1 px-[3px] py-[3px]"
            >
              <div
                className="relative w-full active:scale-95 cursor-pointer bg-bg_SkeletonBgLoaderColor transition-all ease-in-out duration-150 shadow-quickAccessBtnBoxShadows min-h-9 bg-cover bg-center bg-no-repeat rounded-[4px] overflow-hidden undefined"
                style={{
                  backgroundImage:
                    "url('https://promotions-material.s3.ap-south-1.amazonaws.com/sportsButtons/cricket-1696348461938')",
                }}
              >
                <div className="flex justify-center w-full h-full min-h-9 relative z-10 items-center min-w-[175px] sm:min-w-[240px] md:min-w-[280px] pl-[5px] pt-[2px] pb-[2px] pr-1 opacity-100">
                  <img
                    src="https://promotions-material.s3.ap-south-1.amazonaws.com/quickButtons/Fishinggames-1705912252627?q=65&amp;w=600&amp;px=auto&amp;auto=format"
                    width="16"
                    height="16"
                    className="w-4 h-4 sm:w-5 sm:h-5 ml-1 autoAnimate"
                    alt="Fishing games-image"
                    loading="lazy"
                    title="Fishing games"
                  />
                  <span className="ml-1 autoAnimate text-text_Quaternary text-xs capitalize pr-[2px] md:text-sm text-nowrap w-full truncate font-lato-bold font-semibold md:font-semibold">
                    Fishing games
                  </span>
                </div>
                <div className="absolute top-0 left-0 w-full h-full min-h-9 rounded-[4px]"></div>
              </div>
            </span>
          </div>
          <div title="QuickButtons-0" className="grid grid-row-2">
            <span title="Aviator" className="col-span-1 px-[3px] py-[3px]">
              <div
                className="relative w-full active:scale-95 cursor-pointer bg-bg_SkeletonBgLoaderColor transition-all ease-in-out duration-150 shadow-quickAccessBtnBoxShadows min-h-9 bg-cover bg-center bg-no-repeat rounded-[4px] overflow-hidden undefined"
                style={{
                  backgroundImage:
                    "url('https://promotions-material.s3.ap-south-1.amazonaws.com/sportsButtons/cricket-1696348461938')",
                }}
              >
                <div className="flex justify-center w-full h-full min-h-9 relative z-10 items-center min-w-[175px] sm:min-w-[240px] md:min-w-[280px] pl-[5px] pt-[2px] pb-[2px] pr-1 opacity-100">
                  <img
                    src="https://promotions-material.s3.ap-south-1.amazonaws.com/quickButtons/Aviator-1705911963125?q=65&amp;w=600&amp;px=auto&amp;auto=format"
                    width="16"
                    height="16"
                    className="w-4 h-4 sm:w-5 sm:h-5 ml-1 autoAnimate"
                    alt="Aviator-image"
                    loading="lazy"
                    title="Aviator"
                  />
                  <span className="ml-1 autoAnimate text-text_Quaternary text-xs capitalize pr-[2px] md:text-sm text-nowrap w-full truncate font-lato-bold font-semibold md:font-semibold">
                    Aviator
                  </span>
                </div>
                <div className="absolute top-0 left-0 w-full h-full min-h-9 rounded-[4px]"></div>
              </div>{" "}
            </span>
            <span title="Aura" className="col-span-1 px-[3px] py-[3px]">
              <div
                className="relative w-full active:scale-95 cursor-pointer bg-bg_SkeletonBgLoaderColor transition-all ease-in-out duration-150 shadow-quickAccessBtnBoxShadows min-h-9 bg-cover bg-center bg-no-repeat rounded-[4px] overflow-hidden undefined"
                style={{
                  backgroundImage:
                    "url('https://promotions-material.s3.ap-south-1.amazonaws.com/sportsButtons/cricket-1696348461938')",
                }}
              >
                <div className="flex justify-center w-full h-full min-h-9 relative z-10 items-center min-w-[175px] sm:min-w-[240px] md:min-w-[280px] pl-[5px] pt-[2px] pb-[2px] pr-1 opacity-100">
                  <img
                    src="https://promotions-material.s3.ap-south-1.amazonaws.com/quickButtons/Aura-1705912199647?q=65&amp;w=600&amp;px=auto&amp;auto=format"
                    width="16"
                    height="16"
                    className="w-4 h-4 sm:w-5 sm:h-5 ml-1 autoAnimate"
                    alt="Aura-image"
                    loading="lazy"
                    title="Aura"
                  />
                  <span className="ml-1 autoAnimate text-text_Quaternary text-xs capitalize pr-[2px] md:text-sm text-nowrap w-full truncate font-lato-bold font-semibold md:font-semibold">
                    Aura
                  </span>
                </div>
                <div className="absolute top-0 left-0 w-full h-full min-h-9 rounded-[4px]"></div>
              </div>
            </span>
          </div>
          <div title="QuickButtons-2" className="grid grid-row-2">
            <span title="Mines" className="col-span-1 px-[3px] py-[3px]">
              <div
                className="relative w-full active:scale-95 cursor-pointer bg-bg_SkeletonBgLoaderColor transition-all ease-in-out duration-150 shadow-quickAccessBtnBoxShadows min-h-9 bg-cover bg-center bg-no-repeat rounded-[4px] overflow-hidden undefined"
                style={{
                  backgroundImage:
                    "url('https://promotions-material.s3.ap-south-1.amazonaws.com/sportsButtons/cricket-1696348461938')",
                }}
              >
                <div className="flex justify-center w-full h-full min-h-9 relative z-10 items-center min-w-[175px] sm:min-w-[240px] md:min-w-[280px] pl-[5px] pt-[2px] pb-[2px] pr-1 opacity-100">
                  <img
                    src="https://promotions-material.s3.ap-south-1.amazonaws.com/quickButtons/diamond_icon.png?q=65&amp;w=600&amp;px=auto&amp;auto=format"
                    width="16"
                    height="16"
                    className="w-4 h-4 sm:w-5 sm:h-5 ml-1 autoAnimate"
                    alt="Mines-image"
                    loading="lazy"
                    title="Mines"
                  />
                  <span className="ml-1 autoAnimate text-text_Quaternary text-xs capitalize pr-[2px] md:text-sm text-nowrap w-full truncate font-lato-bold font-semibold md:font-semibold">
                    Mines
                  </span>
                </div>
                <div className="absolute top-0 left-0 w-full h-full min-h-9 rounded-[4px]"></div>
              </div>{" "}
            </span>
            <span title="Limbo" className="col-span-1 px-[3px] py-[3px]">
              <div
                className="relative w-full active:scale-95 cursor-pointer bg-bg_SkeletonBgLoaderColor transition-all ease-in-out duration-150 shadow-quickAccessBtnBoxShadows min-h-9 bg-cover bg-center bg-no-repeat rounded-[4px] overflow-hidden undefined"
                style={{
                  backgroundImage:
                    "url('https://promotions-material.s3.ap-south-1.amazonaws.com/sportsButtons/cricket-1696348461938')",
                }}
              >
                <div className="flex justify-center w-full h-full min-h-9 relative z-10 items-center min-w-[175px] sm:min-w-[240px] md:min-w-[280px] pl-[5px] pt-[2px] pb-[2px] pr-1 opacity-100">
                  <img
                    src="https://promotions-material.s3.ap-south-1.amazonaws.com/quickButtons/Aviator-1705911963125?q=65&amp;w=600&amp;px=auto&amp;auto=format"
                    width="16"
                    height="16"
                    className="w-4 h-4 sm:w-5 sm:h-5 ml-1 autoAnimate"
                    alt="Limbo-image"
                    loading="lazy"
                    title="Limbo"
                  />
                  <span className="ml-1 autoAnimate text-text_Quaternary text-xs capitalize pr-[2px] md:text-sm text-nowrap w-full truncate font-lato-bold font-semibold md:font-semibold">
                    Limbo
                  </span>
                </div>
                <div className="absolute top-0 left-0 w-full h-full min-h-9 rounded-[4px]"></div>
              </div>
            </span>
          </div>
          <div title="QuickButtons-4" className="grid grid-row-2">
            <span title="Color Game" className="col-span-1 px-[3px] py-[3px]">
              <div
                className="relative w-full active:scale-95 cursor-pointer bg-bg_SkeletonBgLoaderColor transition-all ease-in-out duration-150 shadow-quickAccessBtnBoxShadows min-h-9 bg-cover bg-center bg-no-repeat rounded-[4px] overflow-hidden undefined"
                style={{
                  backgroundImage:
                    "url('https://promotions-material.s3.ap-south-1.amazonaws.com/sportsButtons/cricket-1696348461938')",
                }}
              >
                <div className="flex justify-center w-full h-full min-h-9 relative z-10 items-center min-w-[175px] sm:min-w-[240px] md:min-w-[280px] pl-[5px] pt-[2px] pb-[2px] pr-1 opacity-100">
                  <img
                    src="https://promomaterial.imgix.net/quickButtons/ColorGame-1718191763431?q=65&amp;w=600&amp;px=auto&amp;auto=format"
                    width="16"
                    height="16"
                    className="w-4 h-4 sm:w-5 sm:h-5 ml-1 autoAnimate"
                    alt="Color Game-image"
                    loading="lazy"
                    title="Color Game"
                  />
                  <span className="ml-1 autoAnimate text-text_Quaternary text-xs capitalize pr-[2px] md:text-sm text-nowrap w-full truncate font-lato-bold font-semibold md:font-semibold">
                    Color Game
                  </span>
                </div>
                <div className="absolute top-0 left-0 w-full h-full min-h-9 rounded-[4px]"></div>
              </div>{" "}
            </span>
            <span
              title="Tower Legends"
              className="col-span-1 px-[3px] py-[3px]"
            >
              <div
                className="relative w-full active:scale-95 cursor-pointer bg-bg_SkeletonBgLoaderColor transition-all ease-in-out duration-150 shadow-quickAccessBtnBoxShadows min-h-9 bg-cover bg-center bg-no-repeat rounded-[4px] overflow-hidden undefined"
                style={{
                  backgroundImage:
                    "url('https://promotions-material.s3.ap-south-1.amazonaws.com/sportsButtons/cricket-1696348461938')",
                }}
              >
                <div className="flex justify-center w-full h-full min-h-9 relative z-10 items-center min-w-[175px] sm:min-w-[240px] md:min-w-[280px] pl-[5px] pt-[2px] pb-[2px] pr-1 opacity-100">
                  <img
                    src="https://promomaterial.imgix.net/quickButtons/TowerLegends-1722000145474?q=65&amp;w=600&amp;px=auto&amp;auto=format"
                    width="16"
                    height="16"
                    className="w-4 h-4 sm:w-5 sm:h-5 ml-1 autoAnimate"
                    alt="Tower Legends-image"
                    loading="lazy"
                    title="Tower Legends"
                  />
                  <span className="ml-1 autoAnimate text-text_Quaternary text-xs capitalize pr-[2px] md:text-sm text-nowrap w-full truncate font-lato-bold font-semibold md:font-semibold">
                    Tower Legends
                  </span>
                </div>
                <div className="absolute top-0 left-0 w-full h-full min-h-9 rounded-[4px]"></div>
              </div>
            </span>
          </div>
          <div title="QuickButtons-6" className="grid grid-row-2">
            <span title="Evolution" className="col-span-1 px-[3px] py-[3px]">
              <div
                className="relative w-full active:scale-95 cursor-pointer bg-bg_SkeletonBgLoaderColor transition-all ease-in-out duration-150 shadow-quickAccessBtnBoxShadows min-h-9 bg-cover bg-center bg-no-repeat rounded-[4px] overflow-hidden undefined"
                style={{
                  backgroundImage:
                    "url('https://promotions-material.s3.ap-south-1.amazonaws.com/sportsButtons/cricket-1696348461938')",
                }}
              >
                <div className="flex justify-center w-full h-full min-h-9 relative z-10 items-center min-w-[175px] sm:min-w-[240px] md:min-w-[280px] pl-[5px] pt-[2px] pb-[2px] pr-1 opacity-100">
                  <img
                    src="https://promotions-material.s3.ap-south-1.amazonaws.com/quickButtons/Evolution-1705911275817?q=65&amp;w=600&amp;px=auto&amp;auto=format"
                    width="16"
                    height="16"
                    className="w-4 h-4 sm:w-5 sm:h-5 ml-1 autoAnimate"
                    alt="Evolution-image"
                    loading="lazy"
                    title="Evolution"
                  />
                  <span className="ml-1 autoAnimate text-text_Quaternary text-xs capitalize pr-[2px] md:text-sm text-nowrap w-full truncate font-lato-bold font-semibold md:font-semibold">
                    Evolution
                  </span>
                </div>
                <div className="absolute top-0 left-0 w-full h-full min-h-9 rounded-[4px]"></div>
              </div>{" "}
            </span>
            <span title="Sportsbook" className="col-span-1 px-[3px] py-[3px]">
              <div
                className="relative w-full active:scale-95 cursor-pointer bg-bg_SkeletonBgLoaderColor transition-all ease-in-out duration-150 shadow-quickAccessBtnBoxShadows min-h-9 bg-cover bg-center bg-no-repeat rounded-[4px] overflow-hidden undefined"
                style={{
                  backgroundImage:
                    "url('https://promotions-material.s3.ap-south-1.amazonaws.com/sportsButtons/cricket-1696348461938')",
                }}
              >
                <div className="flex justify-center w-full h-full min-h-9 relative z-10 items-center min-w-[175px] sm:min-w-[240px] md:min-w-[280px] pl-[5px] pt-[2px] pb-[2px] pr-1 opacity-100">
                  <img
                    src="https://promotions-material.s3.ap-south-1.amazonaws.com/quickButtons/Sportsbook-1705911352029?q=65&amp;w=600&amp;px=auto&amp;auto=format"
                    width="16"
                    height="16"
                    className="w-4 h-4 sm:w-5 sm:h-5 ml-1 autoAnimate"
                    alt="Sportsbook-image"
                    loading="lazy"
                    title="Sportsbook"
                  />
                  <span className="ml-1 autoAnimate text-text_Quaternary text-xs capitalize pr-[2px] md:text-sm text-nowrap w-full truncate font-lato-bold font-semibold md:font-semibold">
                    Sportsbook
                  </span>
                </div>
                <div className="absolute top-0 left-0 w-full h-full min-h-9 rounded-[4px]"></div>
              </div>
            </span>
          </div>
          <div title="QuickButtons-8" className="grid grid-row-2">
            <span title="Live Casinos" className="col-span-1 px-[3px] py-[3px]">
              <div
                className="relative w-full active:scale-95 cursor-pointer bg-bg_SkeletonBgLoaderColor transition-all ease-in-out duration-150 shadow-quickAccessBtnBoxShadows min-h-9 bg-cover bg-center bg-no-repeat rounded-[4px] overflow-hidden undefined"
                style={{
                  backgroundImage:
                    "url('https://promotions-material.s3.ap-south-1.amazonaws.com/sportsButtons/cricket-1696348461938')",
                }}
              >
                <div className="flex justify-center w-full h-full min-h-9 relative z-10 items-center min-w-[175px] sm:min-w-[240px] md:min-w-[280px] pl-[5px] pt-[2px] pb-[2px] pr-1 opacity-100">
                  <img
                    src="https://promotions-material.s3.ap-south-1.amazonaws.com/quickButtons/LiveCasinos-1705911704279?q=65&amp;w=600&amp;px=auto&amp;auto=format"
                    width="16"
                    height="16"
                    className="w-4 h-4 sm:w-5 sm:h-5 ml-1 autoAnimate"
                    alt="Live Casinos-image"
                    loading="lazy"
                    title="Live Casinos"
                  />
                  <span className="ml-1 autoAnimate text-text_Quaternary text-xs capitalize pr-[2px] md:text-sm text-nowrap w-full truncate font-lato-bold font-semibold md:font-semibold">
                    Live Casinos
                  </span>
                </div>
                <div className="absolute top-0 left-0 w-full h-full min-h-9 rounded-[4px]"></div>
              </div>{" "}
            </span>
            <span title="e-Cricket" className="col-span-1 px-[3px] py-[3px]">
              <div
                className="relative w-full active:scale-95 cursor-pointer bg-bg_SkeletonBgLoaderColor transition-all ease-in-out duration-150 shadow-quickAccessBtnBoxShadows min-h-9 bg-cover bg-center bg-no-repeat rounded-[4px] overflow-hidden undefined"
                style={{
                  backgroundImage:
                    "url('https://promotions-material.s3.ap-south-1.amazonaws.com/sportsButtons/cricket-1696348461938')",
                }}
              >
                <div className="flex justify-center w-full h-full min-h-9 relative z-10 items-center min-w-[175px] sm:min-w-[240px] md:min-w-[280px] pl-[5px] pt-[2px] pb-[2px] pr-1 opacity-100">
                  <img
                    src="https://promotions-material.s3.ap-south-1.amazonaws.com/quickButtons/e-Cricket-1705911799122?q=65&amp;w=600&amp;px=auto&amp;auto=format"
                    width="16"
                    height="16"
                    className="w-4 h-4 sm:w-5 sm:h-5 ml-1 autoAnimate"
                    alt="e-Cricket-image"
                    loading="lazy"
                    title="e-Cricket"
                  />
                  <span className="ml-1 autoAnimate text-text_Quaternary text-xs capitalize pr-[2px] md:text-sm text-nowrap w-full truncate font-lato-bold font-semibold md:font-semibold">
                    e-Cricket
                  </span>
                </div>
                <div className="absolute top-0 left-0 w-full h-full min-h-9 rounded-[4px]"></div>
              </div>
            </span>
          </div>
          <div title="QuickButtons-10" className="grid grid-row-2">
            <span title="Card Games" className="col-span-1 px-[3px] py-[3px]">
              <div
                className="relative w-full active:scale-95 cursor-pointer bg-bg_SkeletonBgLoaderColor transition-all ease-in-out duration-150 shadow-quickAccessBtnBoxShadows min-h-9 bg-cover bg-center bg-no-repeat rounded-[4px] overflow-hidden undefined"
                style={{
                  backgroundImage:
                    "url('https://promotions-material.s3.ap-south-1.amazonaws.com/sportsButtons/cricket-1696348461938')",
                }}
              >
                <div className="flex justify-center w-full h-full min-h-9 relative z-10 items-center min-w-[175px] sm:min-w-[240px] md:min-w-[280px] pl-[5px] pt-[2px] pb-[2px] pr-1 opacity-100">
                  <img
                    src="https://promotions-material.s3.ap-south-1.amazonaws.com/quickButtons/CardGames-1705911853726?q=65&amp;w=600&amp;px=auto&amp;auto=format"
                    width="16"
                    height="16"
                    className="w-4 h-4 sm:w-5 sm:h-5 ml-1 autoAnimate"
                    alt="Card Games-image"
                    loading="lazy"
                    title="Card Games"
                  />
                  <span className="ml-1 autoAnimate text-text_Quaternary text-xs capitalize pr-[2px] md:text-sm text-nowrap w-full truncate font-lato-bold font-semibold md:font-semibold">
                    Card Games
                  </span>
                </div>
                <div className="absolute top-0 left-0 w-full h-full min-h-9 rounded-[4px]"></div>
              </div>{" "}
            </span>
            <span title="Slot Games" className="col-span-1 px-[3px] py-[3px]">
              <div
                className="relative w-full active:scale-95 cursor-pointer bg-bg_SkeletonBgLoaderColor transition-all ease-in-out duration-150 shadow-quickAccessBtnBoxShadows min-h-9 bg-cover bg-center bg-no-repeat rounded-[4px] overflow-hidden undefined"
                style={{
                  backgroundImage:
                    "url('https://promotions-material.s3.ap-south-1.amazonaws.com/sportsButtons/cricket-1696348461938')",
                }}
              >
                <div className="flex justify-center w-full h-full min-h-9 relative z-10 items-center min-w-[175px] sm:min-w-[240px] md:min-w-[280px] pl-[5px] pt-[2px] pb-[2px] pr-1 opacity-100">
                  <img
                    src="https://promotions-material.s3.ap-south-1.amazonaws.com/quickButtons/SlotGames-1705912015300?q=65&amp;w=600&amp;px=auto&amp;auto=format"
                    width="16"
                    height="16"
                    className="w-4 h-4 sm:w-5 sm:h-5 ml-1 autoAnimate"
                    alt="Slot Games-image"
                    loading="lazy"
                    title="Slot Games"
                  />
                  <span className="ml-1 autoAnimate text-text_Quaternary text-xs capitalize pr-[2px] md:text-sm text-nowrap w-full truncate font-lato-bold font-semibold md:font-semibold">
                    Slot Games
                  </span>
                </div>
                <div className="absolute top-0 left-0 w-full h-full min-h-9 rounded-[4px]"></div>
              </div>
            </span>
          </div>
          <div title="QuickButtons-12" className="grid grid-row-2">
            <span
              title="Multiplayer Games"
              className="col-span-1 px-[3px] py-[3px]"
            >
              <div
                className="relative w-full active:scale-95 cursor-pointer bg-bg_SkeletonBgLoaderColor transition-all ease-in-out duration-150 shadow-quickAccessBtnBoxShadows min-h-9 bg-cover bg-center bg-no-repeat rounded-[4px] overflow-hidden undefined"
                style={{
                  backgroundImage:
                    "url('https://promotions-material.s3.ap-south-1.amazonaws.com/sportsButtons/cricket-1696348461938')",
                }}
              >
                <div className="flex justify-center w-full h-full min-h-9 relative z-10 items-center min-w-[175px] sm:min-w-[240px] md:min-w-[280px] pl-[5px] pt-[2px] pb-[2px] pr-1 opacity-100">
                  <img
                    src="https://promotions-material.s3.ap-south-1.amazonaws.com/quickButtons/MultiplayerGames-1705912077489?q=65&amp;w=600&amp;px=auto&amp;auto=format"
                    width="16"
                    height="16"
                    className="w-4 h-4 sm:w-5 sm:h-5 ml-1 autoAnimate"
                    alt="Multiplayer Games-image"
                    loading="lazy"
                    title="Multiplayer Games"
                  />
                  <span className="ml-1 autoAnimate text-text_Quaternary text-xs capitalize pr-[2px] md:text-sm text-nowrap w-full truncate font-lato-bold font-semibold md:font-semibold">
                    Multiplayer Games
                  </span>
                </div>
                <div className="absolute top-0 left-0 w-full h-full min-h-9 rounded-[4px]"></div>
              </div>{" "}
            </span>
            <span
              title="Fishing games"
              className="col-span-1 px-[3px] py-[3px]"
            >
              <div
                className="relative w-full active:scale-95 cursor-pointer bg-bg_SkeletonBgLoaderColor transition-all ease-in-out duration-150 shadow-quickAccessBtnBoxShadows min-h-9 bg-cover bg-center bg-no-repeat rounded-[4px] overflow-hidden undefined"
                style={{
                  backgroundImage:
                    "url('https://promotions-material.s3.ap-south-1.amazonaws.com/sportsButtons/cricket-1696348461938')",
                }}
              >
                <div className="flex justify-center w-full h-full min-h-9 relative z-10 items-center min-w-[175px] sm:min-w-[240px] md:min-w-[280px] pl-[5px] pt-[2px] pb-[2px] pr-1 opacity-100">
                  <img
                    src="https://promotions-material.s3.ap-south-1.amazonaws.com/quickButtons/Fishinggames-1705912252627?q=65&amp;w=600&amp;px=auto&amp;auto=format"
                    width="16"
                    height="16"
                    className="w-4 h-4 sm:w-5 sm:h-5 ml-1 autoAnimate"
                    alt="Fishing games-image"
                    loading="lazy"
                    title="Fishing games"
                  />
                  <span className="ml-1 autoAnimate text-text_Quaternary text-xs capitalize pr-[2px] md:text-sm text-nowrap w-full truncate font-lato-bold font-semibold md:font-semibold">
                    Fishing games
                  </span>
                </div>
                <div className="absolute top-0 left-0 w-full h-full min-h-9 rounded-[4px]"></div>
              </div>
            </span>
          </div>
          <div title="QuickButtons-0" className="grid grid-row-2">
            <span title="Aviator" className="col-span-1 px-[3px] py-[3px]">
              <div
                className="relative w-full active:scale-95 cursor-pointer bg-bg_SkeletonBgLoaderColor transition-all ease-in-out duration-150 shadow-quickAccessBtnBoxShadows min-h-9 bg-cover bg-center bg-no-repeat rounded-[4px] overflow-hidden undefined"
                style={{
                  backgroundImage:
                    "url('https://promotions-material.s3.ap-south-1.amazonaws.com/sportsButtons/cricket-1696348461938')",
                }}
              >
                <div className="flex justify-center w-full h-full min-h-9 relative z-10 items-center min-w-[175px] sm:min-w-[240px] md:min-w-[280px] pl-[5px] pt-[2px] pb-[2px] pr-1 opacity-100">
                  <img
                    src="https://promotions-material.s3.ap-south-1.amazonaws.com/quickButtons/Aviator-1705911963125?q=65&amp;w=600&amp;px=auto&amp;auto=format"
                    width="16"
                    height="16"
                    className="w-4 h-4 sm:w-5 sm:h-5 ml-1 autoAnimate"
                    alt="Aviator-image"
                    loading="lazy"
                    title="Aviator"
                  />
                  <span className="ml-1 autoAnimate text-text_Quaternary text-xs capitalize pr-[2px] md:text-sm text-nowrap w-full truncate font-lato-bold font-semibold md:font-semibold">
                    Aviator
                  </span>
                </div>
                <div className="absolute top-0 left-0 w-full h-full min-h-9 rounded-[4px]"></div>
              </div>{" "}
            </span>
            <span title="Aura" className="col-span-1 px-[3px] py-[3px]">
              <div
                className="relative w-full active:scale-95 cursor-pointer bg-bg_SkeletonBgLoaderColor transition-all ease-in-out duration-150 shadow-quickAccessBtnBoxShadows min-h-9 bg-cover bg-center bg-no-repeat rounded-[4px] overflow-hidden undefined"
                style={{
                  backgroundImage:
                    "url('https://promotions-material.s3.ap-south-1.amazonaws.com/sportsButtons/cricket-1696348461938')",
                }}
              >
                <div className="flex justify-center w-full h-full min-h-9 relative z-10 items-center min-w-[175px] sm:min-w-[240px] md:min-w-[280px] pl-[5px] pt-[2px] pb-[2px] pr-1 opacity-100">
                  <img
                    src="https://promotions-material.s3.ap-south-1.amazonaws.com/quickButtons/Aura-1705912199647?q=65&amp;w=600&amp;px=auto&amp;auto=format"
                    width="16"
                    height="16"
                    className="w-4 h-4 sm:w-5 sm:h-5 ml-1 autoAnimate"
                    alt="Aura-image"
                    loading="lazy"
                    title="Aura"
                  />
                  <span className="ml-1 autoAnimate text-text_Quaternary text-xs capitalize pr-[2px] md:text-sm text-nowrap w-full truncate font-lato-bold font-semibold md:font-semibold">
                    Aura
                  </span>
                </div>
                <div className="absolute top-0 left-0 w-full h-full min-h-9 rounded-[4px]"></div>
              </div>
            </span>
          </div>
          <div title="QuickButtons-2" className="grid grid-row-2">
            <span title="Mines" className="col-span-1 px-[3px] py-[3px]">
              <div
                className="relative w-full active:scale-95 cursor-pointer bg-bg_SkeletonBgLoaderColor transition-all ease-in-out duration-150 shadow-quickAccessBtnBoxShadows min-h-9 bg-cover bg-center bg-no-repeat rounded-[4px] overflow-hidden undefined"
                style={{
                  backgroundImage:
                    "url('https://promotions-material.s3.ap-south-1.amazonaws.com/sportsButtons/cricket-1696348461938')",
                }}
              >
                <div className="flex justify-center w-full h-full min-h-9 relative z-10 items-center min-w-[175px] sm:min-w-[240px] md:min-w-[280px] pl-[5px] pt-[2px] pb-[2px] pr-1 opacity-100">
                  <img
                    src="https://promotions-material.s3.ap-south-1.amazonaws.com/quickButtons/diamond_icon.png?q=65&amp;w=600&amp;px=auto&amp;auto=format"
                    width="16"
                    height="16"
                    className="w-4 h-4 sm:w-5 sm:h-5 ml-1 autoAnimate"
                    alt="Mines-image"
                    loading="lazy"
                    title="Mines"
                  />
                  <span className="ml-1 autoAnimate text-text_Quaternary text-xs capitalize pr-[2px] md:text-sm text-nowrap w-full truncate font-lato-bold font-semibold md:font-semibold">
                    Mines
                  </span>
                </div>
                <div className="absolute top-0 left-0 w-full h-full min-h-9 rounded-[4px]"></div>
              </div>{" "}
            </span>
            <span title="Limbo" className="col-span-1 px-[3px] py-[3px]">
              <div
                className="relative w-full active:scale-95 cursor-pointer bg-bg_SkeletonBgLoaderColor transition-all ease-in-out duration-150 shadow-quickAccessBtnBoxShadows min-h-9 bg-cover bg-center bg-no-repeat rounded-[4px] overflow-hidden undefined"
                style={{
                  backgroundImage:
                    "url('https://promotions-material.s3.ap-south-1.amazonaws.com/sportsButtons/cricket-1696348461938')",
                }}
              >
                <div className="flex justify-center w-full h-full min-h-9 relative z-10 items-center min-w-[175px] sm:min-w-[240px] md:min-w-[280px] pl-[5px] pt-[2px] pb-[2px] pr-1 opacity-100">
                  <img
                    src="https://promotions-material.s3.ap-south-1.amazonaws.com/quickButtons/Aviator-1705911963125?q=65&amp;w=600&amp;px=auto&amp;auto=format"
                    width="16"
                    height="16"
                    className="w-4 h-4 sm:w-5 sm:h-5 ml-1 autoAnimate"
                    alt="Limbo-image"
                    loading="lazy"
                    title="Limbo"
                  />
                  <span className="ml-1 autoAnimate text-text_Quaternary text-xs capitalize pr-[2px] md:text-sm text-nowrap w-full truncate font-lato-bold font-semibold md:font-semibold">
                    Limbo
                  </span>
                </div>
                <div className="absolute top-0 left-0 w-full h-full min-h-9 rounded-[4px]"></div>
              </div>
            </span>
          </div>
          <div title="QuickButtons-4" className="grid grid-row-2">
            <span title="Color Game" className="col-span-1 px-[3px] py-[3px]">
              <div
                className="relative w-full active:scale-95 cursor-pointer bg-bg_SkeletonBgLoaderColor transition-all ease-in-out duration-150 shadow-quickAccessBtnBoxShadows min-h-9 bg-cover bg-center bg-no-repeat rounded-[4px] overflow-hidden undefined"
                style={{
                  backgroundImage:
                    "url('https://promotions-material.s3.ap-south-1.amazonaws.com/sportsButtons/cricket-1696348461938')",
                }}
              >
                <div className="flex justify-center w-full h-full min-h-9 relative z-10 items-center min-w-[175px] sm:min-w-[240px] md:min-w-[280px] pl-[5px] pt-[2px] pb-[2px] pr-1 opacity-100">
                  <img
                    src="https://promomaterial.imgix.net/quickButtons/ColorGame-1718191763431?q=65&amp;w=600&amp;px=auto&amp;auto=format"
                    width="16"
                    height="16"
                    className="w-4 h-4 sm:w-5 sm:h-5 ml-1 autoAnimate"
                    alt="Color Game-image"
                    loading="lazy"
                    title="Color Game"
                  />
                  <span className="ml-1 autoAnimate text-text_Quaternary text-xs capitalize pr-[2px] md:text-sm text-nowrap w-full truncate font-lato-bold font-semibold md:font-semibold">
                    Color Game
                  </span>
                </div>
                <div className="absolute top-0 left-0 w-full h-full min-h-9 rounded-[4px]"></div>
              </div>{" "}
            </span>
            <span
              title="Tower Legends"
              className="col-span-1 px-[3px] py-[3px]"
            >
              <div
                className="relative w-full active:scale-95 cursor-pointer bg-bg_SkeletonBgLoaderColor transition-all ease-in-out duration-150 shadow-quickAccessBtnBoxShadows min-h-9 bg-cover bg-center bg-no-repeat rounded-[4px] overflow-hidden undefined"
                style={{
                  backgroundImage:
                    "url('https://promotions-material.s3.ap-south-1.amazonaws.com/sportsButtons/cricket-1696348461938')",
                }}
              >
                <div className="flex justify-center w-full h-full min-h-9 relative z-10 items-center min-w-[175px] sm:min-w-[240px] md:min-w-[280px] pl-[5px] pt-[2px] pb-[2px] pr-1 opacity-100">
                  <img
                    src="https://promomaterial.imgix.net/quickButtons/TowerLegends-1722000145474?q=65&amp;w=600&amp;px=auto&amp;auto=format"
                    width="16"
                    height="16"
                    className="w-4 h-4 sm:w-5 sm:h-5 ml-1 autoAnimate"
                    alt="Tower Legends-image"
                    loading="lazy"
                    title="Tower Legends"
                  />
                  <span className="ml-1 autoAnimate text-text_Quaternary text-xs capitalize pr-[2px] md:text-sm text-nowrap w-full truncate font-lato-bold font-semibold md:font-semibold">
                    Tower Legends
                  </span>
                </div>
                <div className="absolute top-0 left-0 w-full h-full min-h-9 rounded-[4px]"></div>
              </div>
            </span>
          </div>
          <div title="QuickButtons-6" className="grid grid-row-2">
            <span title="Evolution" className="col-span-1 px-[3px] py-[3px]">
              <div
                className="relative w-full active:scale-95 cursor-pointer bg-bg_SkeletonBgLoaderColor transition-all ease-in-out duration-150 shadow-quickAccessBtnBoxShadows min-h-9 bg-cover bg-center bg-no-repeat rounded-[4px] overflow-hidden undefined"
                style={{
                  backgroundImage:
                    "url('https://promotions-material.s3.ap-south-1.amazonaws.com/sportsButtons/cricket-1696348461938')",
                }}
              >
                <div className="flex justify-center w-full h-full min-h-9 relative z-10 items-center min-w-[175px] sm:min-w-[240px] md:min-w-[280px] pl-[5px] pt-[2px] pb-[2px] pr-1 opacity-100">
                  <img
                    src="https://promotions-material.s3.ap-south-1.amazonaws.com/quickButtons/Evolution-1705911275817?q=65&amp;w=600&amp;px=auto&amp;auto=format"
                    width="16"
                    height="16"
                    className="w-4 h-4 sm:w-5 sm:h-5 ml-1 autoAnimate"
                    alt="Evolution-image"
                    loading="lazy"
                    title="Evolution"
                  />
                  <span className="ml-1 autoAnimate text-text_Quaternary text-xs capitalize pr-[2px] md:text-sm text-nowrap w-full truncate font-lato-bold font-semibold md:font-semibold">
                    Evolution
                  </span>
                </div>
                <div className="absolute top-0 left-0 w-full h-full min-h-9 rounded-[4px]"></div>
              </div>{" "}
            </span>
            <span title="Sportsbook" className="col-span-1 px-[3px] py-[3px]">
              <div
                className="relative w-full active:scale-95 cursor-pointer bg-bg_SkeletonBgLoaderColor transition-all ease-in-out duration-150 shadow-quickAccessBtnBoxShadows min-h-9 bg-cover bg-center bg-no-repeat rounded-[4px] overflow-hidden undefined"
                style={{
                  backgroundImage:
                    "url('https://promotions-material.s3.ap-south-1.amazonaws.com/sportsButtons/cricket-1696348461938')",
                }}
              >
                <div className="flex justify-center w-full h-full min-h-9 relative z-10 items-center min-w-[175px] sm:min-w-[240px] md:min-w-[280px] pl-[5px] pt-[2px] pb-[2px] pr-1 opacity-100">
                  <img
                    src="https://promotions-material.s3.ap-south-1.amazonaws.com/quickButtons/Sportsbook-1705911352029?q=65&amp;w=600&amp;px=auto&amp;auto=format"
                    width="16"
                    height="16"
                    className="w-4 h-4 sm:w-5 sm:h-5 ml-1 autoAnimate"
                    alt="Sportsbook-image"
                    loading="lazy"
                    title="Sportsbook"
                  />
                  <span className="ml-1 autoAnimate text-text_Quaternary text-xs capitalize pr-[2px] md:text-sm text-nowrap w-full truncate font-lato-bold font-semibold md:font-semibold">
                    Sportsbook
                  </span>
                </div>
                <div className="absolute top-0 left-0 w-full h-full min-h-9 rounded-[4px]"></div>
              </div>
            </span>
          </div>
          <div title="QuickButtons-8" className="grid grid-row-2">
            <span title="Live Casinos" className="col-span-1 px-[3px] py-[3px]">
              <div
                className="relative w-full active:scale-95 cursor-pointer bg-bg_SkeletonBgLoaderColor transition-all ease-in-out duration-150 shadow-quickAccessBtnBoxShadows min-h-9 bg-cover bg-center bg-no-repeat rounded-[4px] overflow-hidden undefined"
                style={{
                  backgroundImage:
                    "url('https://promotions-material.s3.ap-south-1.amazonaws.com/sportsButtons/cricket-1696348461938')",
                }}
              >
                <div className="flex justify-center w-full h-full min-h-9 relative z-10 items-center min-w-[175px] sm:min-w-[240px] md:min-w-[280px] pl-[5px] pt-[2px] pb-[2px] pr-1 opacity-100">
                  <img
                    src="https://promotions-material.s3.ap-south-1.amazonaws.com/quickButtons/LiveCasinos-1705911704279?q=65&amp;w=600&amp;px=auto&amp;auto=format"
                    width="16"
                    height="16"
                    className="w-4 h-4 sm:w-5 sm:h-5 ml-1 autoAnimate"
                    alt="Live Casinos-image"
                    loading="lazy"
                    title="Live Casinos"
                  />
                  <span className="ml-1 autoAnimate text-text_Quaternary text-xs capitalize pr-[2px] md:text-sm text-nowrap w-full truncate font-lato-bold font-semibold md:font-semibold">
                    Live Casinos
                  </span>
                </div>
                <div className="absolute top-0 left-0 w-full h-full min-h-9 rounded-[4px]"></div>
              </div>{" "}
            </span>
            <span title="e-Cricket" className="col-span-1 px-[3px] py-[3px]">
              <div
                className="relative w-full active:scale-95 cursor-pointer bg-bg_SkeletonBgLoaderColor transition-all ease-in-out duration-150 shadow-quickAccessBtnBoxShadows min-h-9 bg-cover bg-center bg-no-repeat rounded-[4px] overflow-hidden undefined"
                style={{
                  backgroundImage:
                    "url('https://promotions-material.s3.ap-south-1.amazonaws.com/sportsButtons/cricket-1696348461938')",
                }}
              >
                <div className="flex justify-center w-full h-full min-h-9 relative z-10 items-center min-w-[175px] sm:min-w-[240px] md:min-w-[280px] pl-[5px] pt-[2px] pb-[2px] pr-1 opacity-100">
                  <img
                    src="https://promotions-material.s3.ap-south-1.amazonaws.com/quickButtons/e-Cricket-1705911799122?q=65&amp;w=600&amp;px=auto&amp;auto=format"
                    width="16"
                    height="16"
                    className="w-4 h-4 sm:w-5 sm:h-5 ml-1 autoAnimate"
                    alt="e-Cricket-image"
                    loading="lazy"
                    title="e-Cricket"
                  />
                  <span className="ml-1 autoAnimate text-text_Quaternary text-xs capitalize pr-[2px] md:text-sm text-nowrap w-full truncate font-lato-bold font-semibold md:font-semibold">
                    e-Cricket
                  </span>
                </div>
                <div className="absolute top-0 left-0 w-full h-full min-h-9 rounded-[4px]"></div>
              </div>
            </span>
          </div>
          <div title="QuickButtons-10" className="grid grid-row-2">
            <span title="Card Games" className="col-span-1 px-[3px] py-[3px]">
              <div
                className="relative w-full active:scale-95 cursor-pointer bg-bg_SkeletonBgLoaderColor transition-all ease-in-out duration-150 shadow-quickAccessBtnBoxShadows min-h-9 bg-cover bg-center bg-no-repeat rounded-[4px] overflow-hidden undefined"
                style={{
                  backgroundImage:
                    "url('https://promotions-material.s3.ap-south-1.amazonaws.com/sportsButtons/cricket-1696348461938')",
                }}
              >
                <div className="flex justify-center w-full h-full min-h-9 relative z-10 items-center min-w-[175px] sm:min-w-[240px] md:min-w-[280px] pl-[5px] pt-[2px] pb-[2px] pr-1 opacity-100">
                  <img
                    src="https://promotions-material.s3.ap-south-1.amazonaws.com/quickButtons/CardGames-1705911853726?q=65&amp;w=600&amp;px=auto&amp;auto=format"
                    width="16"
                    height="16"
                    className="w-4 h-4 sm:w-5 sm:h-5 ml-1 autoAnimate"
                    alt="Card Games-image"
                    loading="lazy"
                    title="Card Games"
                  />
                  <span className="ml-1 autoAnimate text-text_Quaternary text-xs capitalize pr-[2px] md:text-sm text-nowrap w-full truncate font-lato-bold font-semibold md:font-semibold">
                    Card Games
                  </span>
                </div>
                <div className="absolute top-0 left-0 w-full h-full min-h-9 rounded-[4px]"></div>
              </div>{" "}
            </span>
            <span title="Slot Games" className="col-span-1 px-[3px] py-[3px]">
              <div
                className="relative w-full active:scale-95 cursor-pointer bg-bg_SkeletonBgLoaderColor transition-all ease-in-out duration-150 shadow-quickAccessBtnBoxShadows min-h-9 bg-cover bg-center bg-no-repeat rounded-[4px] overflow-hidden undefined"
                style={{
                  backgroundImage:
                    "url('https://promotions-material.s3.ap-south-1.amazonaws.com/sportsButtons/cricket-1696348461938')",
                }}
              >
                <div className="flex justify-center w-full h-full min-h-9 relative z-10 items-center min-w-[175px] sm:min-w-[240px] md:min-w-[280px] pl-[5px] pt-[2px] pb-[2px] pr-1 opacity-100">
                  <img
                    src="https://promotions-material.s3.ap-south-1.amazonaws.com/quickButtons/SlotGames-1705912015300?q=65&amp;w=600&amp;px=auto&amp;auto=format"
                    width="16"
                    height="16"
                    className="w-4 h-4 sm:w-5 sm:h-5 ml-1 autoAnimate"
                    alt="Slot Games-image"
                    loading="lazy"
                    title="Slot Games"
                  />
                  <span className="ml-1 autoAnimate text-text_Quaternary text-xs capitalize pr-[2px] md:text-sm text-nowrap w-full truncate font-lato-bold font-semibold md:font-semibold">
                    Slot Games
                  </span>
                </div>
                <div className="absolute top-0 left-0 w-full h-full min-h-9 rounded-[4px]"></div>
              </div>
            </span>
          </div>
          <div title="QuickButtons-12" className="grid grid-row-2">
            <span
              title="Multiplayer Games"
              className="col-span-1 px-[3px] py-[3px]"
            >
              <div
                className="relative w-full active:scale-95 cursor-pointer bg-bg_SkeletonBgLoaderColor transition-all ease-in-out duration-150 shadow-quickAccessBtnBoxShadows min-h-9 bg-cover bg-center bg-no-repeat rounded-[4px] overflow-hidden undefined"
                style={{
                  backgroundImage:
                    "url('https://promotions-material.s3.ap-south-1.amazonaws.com/sportsButtons/cricket-1696348461938')",
                }}
              >
                <div className="flex justify-center w-full h-full min-h-9 relative z-10 items-center min-w-[175px] sm:min-w-[240px] md:min-w-[280px] pl-[5px] pt-[2px] pb-[2px] pr-1 opacity-100">
                  <img
                    src="https://promotions-material.s3.ap-south-1.amazonaws.com/quickButtons/MultiplayerGames-1705912077489?q=20&amp;blur=2&amp;cs=tinysrgb&amp;w=400&amp;px=80&amp;auto=format"
                    width="16"
                    height="16"
                    className="w-4 h-4 sm:w-5 sm:h-5 ml-1 autoAnimate"
                    alt="Multiplayer Games-image"
                    loading="lazy"
                    title="Multiplayer Games"
                  />
                  <span className="ml-1 autoAnimate text-text_Quaternary text-xs capitalize pr-[2px] md:text-sm text-nowrap w-full truncate font-lato-bold font-semibold md:font-semibold">
                    Multiplayer Games
                  </span>
                </div>
                <div className="absolute top-0 left-0 w-full h-full min-h-9 rounded-[4px]"></div>
              </div>{" "}
            </span>
            <span
              title="Fishing games"
              className="col-span-1 px-[3px] py-[3px]"
            >
              <div
                className="relative w-full active:scale-95 cursor-pointer bg-bg_SkeletonBgLoaderColor transition-all ease-in-out duration-150 shadow-quickAccessBtnBoxShadows min-h-9 bg-cover bg-center bg-no-repeat rounded-[4px] overflow-hidden undefined"
                style={{
                  backgroundImage:
                    "url('https://promotions-material.s3.ap-south-1.amazonaws.com/sportsButtons/cricket-1696348461938')",
                }}
              >
                <div className="flex justify-center w-full h-full min-h-9 relative z-10 items-center min-w-[175px] sm:min-w-[240px] md:min-w-[280px] pl-[5px] pt-[2px] pb-[2px] pr-1 opacity-100">
                  <img
                    src="https://promotions-material.s3.ap-south-1.amazonaws.com/quickButtons/Fishinggames-1705912252627?q=20&amp;blur=2&amp;cs=tinysrgb&amp;w=400&amp;px=80&amp;auto=format"
                    width="16"
                    height="16"
                    className="w-4 h-4 sm:w-5 sm:h-5 ml-1 autoAnimate"
                    alt="Fishing games-image"
                    loading="lazy"
                    title="Fishing games"
                  />
                  <span className="ml-1 autoAnimate text-text_Quaternary text-xs capitalize pr-[2px] md:text-sm text-nowrap w-full truncate font-lato-bold font-semibold md:font-semibold">
                    Fishing games
                  </span>
                </div>
                <div className="absolute top-0 left-0 w-full h-full min-h-9 rounded-[4px]"></div>
              </div>
            </span>
          </div>
          <div title="QuickButtons-0" className="grid grid-row-2">
            <span title="Aviator" className="col-span-1 px-[3px] py-[3px]">
              <div
                className="relative w-full active:scale-95 cursor-pointer bg-bg_SkeletonBgLoaderColor transition-all ease-in-out duration-150 shadow-quickAccessBtnBoxShadows min-h-9 bg-cover bg-center bg-no-repeat rounded-[4px] overflow-hidden undefined"
                style={{
                  backgroundImage:
                    "url('https://promotions-material.s3.ap-south-1.amazonaws.com/sportsButtons/cricket-1696348461938')",
                }}
              >
                <div className="flex justify-center w-full h-full min-h-9 relative z-10 items-center min-w-[175px] sm:min-w-[240px] md:min-w-[280px] pl-[5px] pt-[2px] pb-[2px] pr-1 opacity-100">
                  <img
                    src="https://promotions-material.s3.ap-south-1.amazonaws.com/quickButtons/Aviator-1705911963125?q=20&amp;blur=2&amp;cs=tinysrgb&amp;w=400&amp;px=80&amp;auto=format"
                    width="16"
                    height="16"
                    className="w-4 h-4 sm:w-5 sm:h-5 ml-1 autoAnimate"
                    alt="Aviator-image"
                    loading="lazy"
                    title="Aviator"
                  />
                  <span className="ml-1 autoAnimate text-text_Quaternary text-xs capitalize pr-[2px] md:text-sm text-nowrap w-full truncate font-lato-bold font-semibold md:font-semibold">
                    Aviator
                  </span>
                </div>
                <div className="absolute top-0 left-0 w-full h-full min-h-9 rounded-[4px]"></div>
              </div>{" "}
            </span>
            <span title="Aura" className="col-span-1 px-[3px] py-[3px]">
              <div
                className="relative w-full active:scale-95 cursor-pointer bg-bg_SkeletonBgLoaderColor transition-all ease-in-out duration-150 shadow-quickAccessBtnBoxShadows min-h-9 bg-cover bg-center bg-no-repeat rounded-[4px] overflow-hidden undefined"
                style={{
                  backgroundImage:
                    "url('https://promotions-material.s3.ap-south-1.amazonaws.com/sportsButtons/cricket-1696348461938')",
                }}
              >
                <div className="flex justify-center w-full h-full min-h-9 relative z-10 items-center min-w-[175px] sm:min-w-[240px] md:min-w-[280px] pl-[5px] pt-[2px] pb-[2px] pr-1 opacity-100">
                  <img
                    src="https://promotions-material.s3.ap-south-1.amazonaws.com/quickButtons/Aura-1705912199647?q=20&amp;blur=2&amp;cs=tinysrgb&amp;w=400&amp;px=80&amp;auto=format"
                    width="16"
                    height="16"
                    className="w-4 h-4 sm:w-5 sm:h-5 ml-1 autoAnimate"
                    alt="Aura-image"
                    loading="lazy"
                    title="Aura"
                  />
                  <span className="ml-1 autoAnimate text-text_Quaternary text-xs capitalize pr-[2px] md:text-sm text-nowrap w-full truncate font-lato-bold font-semibold md:font-semibold">
                    Aura
                  </span>
                </div>
                <div className="absolute top-0 left-0 w-full h-full min-h-9 rounded-[4px]"></div>
              </div>
            </span>
          </div>
          <div title="QuickButtons-2" className="grid grid-row-2">
            <span title="Mines" className="col-span-1 px-[3px] py-[3px]">
              <div
                className="relative w-full active:scale-95 cursor-pointer bg-bg_SkeletonBgLoaderColor transition-all ease-in-out duration-150 shadow-quickAccessBtnBoxShadows min-h-9 bg-cover bg-center bg-no-repeat rounded-[4px] overflow-hidden undefined"
                style={{
                  backgroundImage:
                    "url('https://promotions-material.s3.ap-south-1.amazonaws.com/sportsButtons/cricket-1696348461938')",
                }}
              >
                <div className="flex justify-center w-full h-full min-h-9 relative z-10 items-center min-w-[175px] sm:min-w-[240px] md:min-w-[280px] pl-[5px] pt-[2px] pb-[2px] pr-1 opacity-100">
                  <img
                    src="https://promotions-material.s3.ap-south-1.amazonaws.com/quickButtons/diamond_icon.png?q=20&amp;blur=2&amp;cs=tinysrgb&amp;w=400&amp;px=80&amp;auto=format"
                    width="16"
                    height="16"
                    className="w-4 h-4 sm:w-5 sm:h-5 ml-1 autoAnimate"
                    alt="Mines-image"
                    loading="lazy"
                    title="Mines"
                  />
                  <span className="ml-1 autoAnimate text-text_Quaternary text-xs capitalize pr-[2px] md:text-sm text-nowrap w-full truncate font-lato-bold font-semibold md:font-semibold">
                    Mines
                  </span>
                </div>
                <div className="absolute top-0 left-0 w-full h-full min-h-9 rounded-[4px]"></div>
              </div>{" "}
            </span>
            <span title="Limbo" className="col-span-1 px-[3px] py-[3px]">
              <div
                className="relative w-full active:scale-95 cursor-pointer bg-bg_SkeletonBgLoaderColor transition-all ease-in-out duration-150 shadow-quickAccessBtnBoxShadows min-h-9 bg-cover bg-center bg-no-repeat rounded-[4px] overflow-hidden undefined"
                style={{
                  backgroundImage:
                    "url('https://promotions-material.s3.ap-south-1.amazonaws.com/sportsButtons/cricket-1696348461938')",
                }}
              >
                <div className="flex justify-center w-full h-full min-h-9 relative z-10 items-center min-w-[175px] sm:min-w-[240px] md:min-w-[280px] pl-[5px] pt-[2px] pb-[2px] pr-1 opacity-100">
                  <img
                    src="https://promotions-material.s3.ap-south-1.amazonaws.com/quickButtons/Aviator-1705911963125?q=20&amp;blur=2&amp;cs=tinysrgb&amp;w=400&amp;px=80&amp;auto=format"
                    width="16"
                    height="16"
                    className="w-4 h-4 sm:w-5 sm:h-5 ml-1 autoAnimate"
                    alt="Limbo-image"
                    loading="lazy"
                    title="Limbo"
                  />
                  <span className="ml-1 autoAnimate text-text_Quaternary text-xs capitalize pr-[2px] md:text-sm text-nowrap w-full truncate font-lato-bold font-semibold md:font-semibold">
                    Limbo
                  </span>
                </div>
                <div className="absolute top-0 left-0 w-full h-full min-h-9 rounded-[4px]"></div>
              </div>
            </span>
          </div>
          <div title="QuickButtons-4" className="grid grid-row-2">
            <span title="Color Game" className="col-span-1 px-[3px] py-[3px]">
              <div
                className="relative w-full active:scale-95 cursor-pointer bg-bg_SkeletonBgLoaderColor transition-all ease-in-out duration-150 shadow-quickAccessBtnBoxShadows min-h-9 bg-cover bg-center bg-no-repeat rounded-[4px] overflow-hidden undefined"
                style={{
                  backgroundImage:
                    "url('https://promotions-material.s3.ap-south-1.amazonaws.com/sportsButtons/cricket-1696348461938')",
                }}
              >
                <div className="flex justify-center w-full h-full min-h-9 relative z-10 items-center min-w-[175px] sm:min-w-[240px] md:min-w-[280px] pl-[5px] pt-[2px] pb-[2px] pr-1 opacity-100">
                  <img
                    src="https://promomaterial.imgix.net/quickButtons/ColorGame-1718191763431?q=20&amp;blur=2&amp;cs=tinysrgb&amp;w=400&amp;px=80&amp;auto=format"
                    width="16"
                    height="16"
                    className="w-4 h-4 sm:w-5 sm:h-5 ml-1 autoAnimate"
                    alt="Color Game-image"
                    loading="lazy"
                    title="Color Game"
                  />
                  <span className="ml-1 autoAnimate text-text_Quaternary text-xs capitalize pr-[2px] md:text-sm text-nowrap w-full truncate font-lato-bold font-semibold md:font-semibold">
                    Color Game
                  </span>
                </div>
                <div className="absolute top-0 left-0 w-full h-full min-h-9 rounded-[4px]"></div>
              </div>{" "}
            </span>
            <span
              title="Tower Legends"
              className="col-span-1 px-[3px] py-[3px]"
            >
              <div
                className="relative w-full active:scale-95 cursor-pointer bg-bg_SkeletonBgLoaderColor transition-all ease-in-out duration-150 shadow-quickAccessBtnBoxShadows min-h-9 bg-cover bg-center bg-no-repeat rounded-[4px] overflow-hidden undefined"
                style={{
                  backgroundImage:
                    "url('https://promotions-material.s3.ap-south-1.amazonaws.com/sportsButtons/cricket-1696348461938')",
                }}
              >
                <div className="flex justify-center w-full h-full min-h-9 relative z-10 items-center min-w-[175px] sm:min-w-[240px] md:min-w-[280px] pl-[5px] pt-[2px] pb-[2px] pr-1 opacity-100">
                  <img
                    src="https://promomaterial.imgix.net/quickButtons/TowerLegends-1722000145474?q=20&amp;blur=2&amp;cs=tinysrgb&amp;w=400&amp;px=80&amp;auto=format"
                    width="16"
                    height="16"
                    className="w-4 h-4 sm:w-5 sm:h-5 ml-1 autoAnimate"
                    alt="Tower Legends-image"
                    loading="lazy"
                    title="Tower Legends"
                  />
                  <span className="ml-1 autoAnimate text-text_Quaternary text-xs capitalize pr-[2px] md:text-sm text-nowrap w-full truncate font-lato-bold font-semibold md:font-semibold">
                    Tower Legends
                  </span>
                </div>
                <div className="absolute top-0 left-0 w-full h-full min-h-9 rounded-[4px]"></div>
              </div>
            </span>
          </div>
          <div title="QuickButtons-6" className="grid grid-row-2">
            <span title="Evolution" className="col-span-1 px-[3px] py-[3px]">
              <div
                className="relative w-full active:scale-95 cursor-pointer bg-bg_SkeletonBgLoaderColor transition-all ease-in-out duration-150 shadow-quickAccessBtnBoxShadows min-h-9 bg-cover bg-center bg-no-repeat rounded-[4px] overflow-hidden undefined"
                style={{
                  backgroundImage:
                    "url('https://promotions-material.s3.ap-south-1.amazonaws.com/sportsButtons/cricket-1696348461938')",
                }}
              >
                <div className="flex justify-center w-full h-full min-h-9 relative z-10 items-center min-w-[175px] sm:min-w-[240px] md:min-w-[280px] pl-[5px] pt-[2px] pb-[2px] pr-1 opacity-100">
                  <img
                    src="https://promotions-material.s3.ap-south-1.amazonaws.com/quickButtons/Evolution-1705911275817?q=20&amp;blur=2&amp;cs=tinysrgb&amp;w=400&amp;px=80&amp;auto=format"
                    width="16"
                    height="16"
                    className="w-4 h-4 sm:w-5 sm:h-5 ml-1 autoAnimate"
                    alt="Evolution-image"
                    loading="lazy"
                    title="Evolution"
                  />
                  <span className="ml-1 autoAnimate text-text_Quaternary text-xs capitalize pr-[2px] md:text-sm text-nowrap w-full truncate font-lato-bold font-semibold md:font-semibold">
                    Evolution
                  </span>
                </div>
                <div className="absolute top-0 left-0 w-full h-full min-h-9 rounded-[4px]"></div>
              </div>{" "}
            </span>
            <span title="Sportsbook" className="col-span-1 px-[3px] py-[3px]">
              <div
                className="relative w-full active:scale-95 cursor-pointer bg-bg_SkeletonBgLoaderColor transition-all ease-in-out duration-150 shadow-quickAccessBtnBoxShadows min-h-9 bg-cover bg-center bg-no-repeat rounded-[4px] overflow-hidden undefined"
                style={{
                  backgroundImage:
                    "url('https://promotions-material.s3.ap-south-1.amazonaws.com/sportsButtons/cricket-1696348461938')",
                }}
              >
                <div className="flex justify-center w-full h-full min-h-9 relative z-10 items-center min-w-[175px] sm:min-w-[240px] md:min-w-[280px] pl-[5px] pt-[2px] pb-[2px] pr-1 opacity-100">
                  <img
                    src="https://promotions-material.s3.ap-south-1.amazonaws.com/quickButtons/Sportsbook-1705911352029?q=20&amp;blur=2&amp;cs=tinysrgb&amp;w=400&amp;px=80&amp;auto=format"
                    width="16"
                    height="16"
                    className="w-4 h-4 sm:w-5 sm:h-5 ml-1 autoAnimate"
                    alt="Sportsbook-image"
                    loading="lazy"
                    title="Sportsbook"
                  />
                  <span className="ml-1 autoAnimate text-text_Quaternary text-xs capitalize pr-[2px] md:text-sm text-nowrap w-full truncate font-lato-bold font-semibold md:font-semibold">
                    Sportsbook
                  </span>
                </div>
                <div className="absolute top-0 left-0 w-full h-full min-h-9 rounded-[4px]"></div>
              </div>
            </span>
          </div>
          <div title="QuickButtons-8" className="grid grid-row-2">
            <span title="Live Casinos" className="col-span-1 px-[3px] py-[3px]">
              <div
                className="relative w-full active:scale-95 cursor-pointer bg-bg_SkeletonBgLoaderColor transition-all ease-in-out duration-150 shadow-quickAccessBtnBoxShadows min-h-9 bg-cover bg-center bg-no-repeat rounded-[4px] overflow-hidden undefined"
                style={{
                  backgroundImage:
                    "url('https://promotions-material.s3.ap-south-1.amazonaws.com/sportsButtons/cricket-1696348461938')",
                }}
              >
                <div className="flex justify-center w-full h-full min-h-9 relative z-10 items-center min-w-[175px] sm:min-w-[240px] md:min-w-[280px] pl-[5px] pt-[2px] pb-[2px] pr-1 opacity-100">
                  <img
                    src="https://promotions-material.s3.ap-south-1.amazonaws.com/quickButtons/LiveCasinos-1705911704279?q=20&amp;blur=2&amp;cs=tinysrgb&amp;w=400&amp;px=80&amp;auto=format"
                    width="16"
                    height="16"
                    className="w-4 h-4 sm:w-5 sm:h-5 ml-1 autoAnimate"
                    alt="Live Casinos-image"
                    loading="lazy"
                    title="Live Casinos"
                  />
                  <span className="ml-1 autoAnimate text-text_Quaternary text-xs capitalize pr-[2px] md:text-sm text-nowrap w-full truncate font-lato-bold font-semibold md:font-semibold">
                    Live Casinos
                  </span>
                </div>
                <div className="absolute top-0 left-0 w-full h-full min-h-9 rounded-[4px]"></div>
              </div>{" "}
            </span>
            <span title="e-Cricket" className="col-span-1 px-[3px] py-[3px]">
              <div
                className="relative w-full active:scale-95 cursor-pointer bg-bg_SkeletonBgLoaderColor transition-all ease-in-out duration-150 shadow-quickAccessBtnBoxShadows min-h-9 bg-cover bg-center bg-no-repeat rounded-[4px] overflow-hidden undefined"
                style={{
                  backgroundImage:
                    "url('https://promotions-material.s3.ap-south-1.amazonaws.com/sportsButtons/cricket-1696348461938')",
                }}
              >
                <div className="flex justify-center w-full h-full min-h-9 relative z-10 items-center min-w-[175px] sm:min-w-[240px] md:min-w-[280px] pl-[5px] pt-[2px] pb-[2px] pr-1 opacity-100">
                  <img
                    src="https://promotions-material.s3.ap-south-1.amazonaws.com/quickButtons/e-Cricket-1705911799122?q=20&amp;blur=2&amp;cs=tinysrgb&amp;w=400&amp;px=80&amp;auto=format"
                    width="16"
                    height="16"
                    className="w-4 h-4 sm:w-5 sm:h-5 ml-1 autoAnimate"
                    alt="e-Cricket-image"
                    loading="lazy"
                    title="e-Cricket"
                  />
                  <span className="ml-1 autoAnimate text-text_Quaternary text-xs capitalize pr-[2px] md:text-sm text-nowrap w-full truncate font-lato-bold font-semibold md:font-semibold">
                    e-Cricket
                  </span>
                </div>
                <div className="absolute top-0 left-0 w-full h-full min-h-9 rounded-[4px]"></div>
              </div>
            </span>
          </div>
          <div title="QuickButtons-10" className="grid grid-row-2">
            <span title="Card Games" className="col-span-1 px-[3px] py-[3px]">
              <div
                className="relative w-full active:scale-95 cursor-pointer bg-bg_SkeletonBgLoaderColor transition-all ease-in-out duration-150 shadow-quickAccessBtnBoxShadows min-h-9 bg-cover bg-center bg-no-repeat rounded-[4px] overflow-hidden undefined"
                style={{
                  backgroundImage:
                    "url('https://promotions-material.s3.ap-south-1.amazonaws.com/sportsButtons/cricket-1696348461938')",
                }}
              >
                <div className="flex justify-center w-full h-full min-h-9 relative z-10 items-center min-w-[175px] sm:min-w-[240px] md:min-w-[280px] pl-[5px] pt-[2px] pb-[2px] pr-1 opacity-100">
                  <img
                    src="https://promotions-material.s3.ap-south-1.amazonaws.com/quickButtons/CardGames-1705911853726?q=20&amp;blur=2&amp;cs=tinysrgb&amp;w=400&amp;px=80&amp;auto=format"
                    width="16"
                    height="16"
                    className="w-4 h-4 sm:w-5 sm:h-5 ml-1 autoAnimate"
                    alt="Card Games-image"
                    loading="lazy"
                    title="Card Games"
                  />
                  <span className="ml-1 autoAnimate text-text_Quaternary text-xs capitalize pr-[2px] md:text-sm text-nowrap w-full truncate font-lato-bold font-semibold md:font-semibold">
                    Card Games
                  </span>
                </div>
                <div className="absolute top-0 left-0 w-full h-full min-h-9 rounded-[4px]"></div>
              </div>{" "}
            </span>
            <span title="Slot Games" className="col-span-1 px-[3px] py-[3px]">
              <div
                className="relative w-full active:scale-95 cursor-pointer bg-bg_SkeletonBgLoaderColor transition-all ease-in-out duration-150 shadow-quickAccessBtnBoxShadows min-h-9 bg-cover bg-center bg-no-repeat rounded-[4px] overflow-hidden undefined"
                style={{
                  backgroundImage:
                    "url('https://promotions-material.s3.ap-south-1.amazonaws.com/sportsButtons/cricket-1696348461938')",
                }}
              >
                <div className="flex justify-center w-full h-full min-h-9 relative z-10 items-center min-w-[175px] sm:min-w-[240px] md:min-w-[280px] pl-[5px] pt-[2px] pb-[2px] pr-1 opacity-100">
                  <img
                    src="https://promotions-material.s3.ap-south-1.amazonaws.com/quickButtons/SlotGames-1705912015300?q=20&amp;blur=2&amp;cs=tinysrgb&amp;w=400&amp;px=80&amp;auto=format"
                    width="16"
                    height="16"
                    className="w-4 h-4 sm:w-5 sm:h-5 ml-1 autoAnimate"
                    alt="Slot Games-image"
                    loading="lazy"
                    title="Slot Games"
                  />
                  <span className="ml-1 autoAnimate text-text_Quaternary text-xs capitalize pr-[2px] md:text-sm text-nowrap w-full truncate font-lato-bold font-semibold md:font-semibold">
                    Slot Games
                  </span>
                </div>
                <div className="absolute top-0 left-0 w-full h-full min-h-9 rounded-[4px]"></div>
              </div>
            </span>
          </div>
          <div title="QuickButtons-12" className="grid grid-row-2">
            <span
              title="Multiplayer Games"
              className="col-span-1 px-[3px] py-[3px]"
            >
              <div
                className="relative w-full active:scale-95 cursor-pointer bg-bg_SkeletonBgLoaderColor transition-all ease-in-out duration-150 shadow-quickAccessBtnBoxShadows min-h-9 bg-cover bg-center bg-no-repeat rounded-[4px] overflow-hidden undefined"
                style={{
                  backgroundImage:
                    "url('https://promotions-material.s3.ap-south-1.amazonaws.com/sportsButtons/cricket-1696348461938')",
                }}
              >
                <div className="flex justify-center w-full h-full min-h-9 relative z-10 items-center min-w-[175px] sm:min-w-[240px] md:min-w-[280px] pl-[5px] pt-[2px] pb-[2px] pr-1 opacity-100">
                  <img
                    src="https://promotions-material.s3.ap-south-1.amazonaws.com/quickButtons/MultiplayerGames-1705912077489?q=20&amp;blur=2&amp;cs=tinysrgb&amp;w=400&amp;px=80&amp;auto=format"
                    width="16"
                    height="16"
                    className="w-4 h-4 sm:w-5 sm:h-5 ml-1 autoAnimate"
                    alt="Multiplayer Games-image"
                    loading="lazy"
                    title="Multiplayer Games"
                  />
                  <span className="ml-1 autoAnimate text-text_Quaternary text-xs capitalize pr-[2px] md:text-sm text-nowrap w-full truncate font-lato-bold font-semibold md:font-semibold">
                    Multiplayer Games
                  </span>
                </div>
                <div className="absolute top-0 left-0 w-full h-full min-h-9 rounded-[4px]"></div>
              </div>{" "}
            </span>
            <span
              title="Fishing games"
              className="col-span-1 px-[3px] py-[3px]"
            >
              <div
                className="relative w-full active:scale-95 cursor-pointer bg-bg_SkeletonBgLoaderColor transition-all ease-in-out duration-150 shadow-quickAccessBtnBoxShadows min-h-9 bg-cover bg-center bg-no-repeat rounded-[4px] overflow-hidden undefined"
                style={{
                  backgroundImage:
                    "url('https://promotions-material.s3.ap-south-1.amazonaws.com/sportsButtons/cricket-1696348461938')",
                }}
              >
                <div className="flex justify-center w-full h-full min-h-9 relative z-10 items-center min-w-[175px] sm:min-w-[240px] md:min-w-[280px] pl-[5px] pt-[2px] pb-[2px] pr-1 opacity-100">
                  <img
                    src="https://promotions-material.s3.ap-south-1.amazonaws.com/quickButtons/Fishinggames-1705912252627?q=20&amp;blur=2&amp;cs=tinysrgb&amp;w=400&amp;px=80&amp;auto=format"
                    width="16"
                    height="16"
                    className="w-4 h-4 sm:w-5 sm:h-5 ml-1 autoAnimate"
                    alt="Fishing games-image"
                    loading="lazy"
                    title="Fishing games"
                  />
                  <span className="ml-1 autoAnimate text-text_Quaternary text-xs capitalize pr-[2px] md:text-sm text-nowrap w-full truncate font-lato-bold font-semibold md:font-semibold">
                    Fishing games
                  </span>
                </div>
                <div className="absolute top-0 left-0 w-full h-full min-h-9 rounded-[4px]"></div>
              </div>
            </span>
          </div>
          <div title="QuickButtons-0" className="grid grid-row-2">
            <span title="Aviator" className="col-span-1 px-[3px] py-[3px]">
              <div
                className="relative w-full active:scale-95 cursor-pointer bg-bg_SkeletonBgLoaderColor transition-all ease-in-out duration-150 shadow-quickAccessBtnBoxShadows min-h-9 bg-cover bg-center bg-no-repeat rounded-[4px] overflow-hidden undefined"
                style={{
                  backgroundImage:
                    "url('https://promotions-material.s3.ap-south-1.amazonaws.com/sportsButtons/cricket-1696348461938')",
                }}
              >
                <div className="flex justify-center w-full h-full min-h-9 relative z-10 items-center min-w-[175px] sm:min-w-[240px] md:min-w-[280px] pl-[5px] pt-[2px] pb-[2px] pr-1 opacity-100">
                  <img
                    src="https://promotions-material.s3.ap-south-1.amazonaws.com/quickButtons/Aviator-1705911963125?q=20&amp;blur=2&amp;cs=tinysrgb&amp;w=400&amp;px=80&amp;auto=format"
                    width="16"
                    height="16"
                    className="w-4 h-4 sm:w-5 sm:h-5 ml-1 autoAnimate"
                    alt="Aviator-image"
                    loading="lazy"
                    title="Aviator"
                  />
                  <span className="ml-1 autoAnimate text-text_Quaternary text-xs capitalize pr-[2px] md:text-sm text-nowrap w-full truncate font-lato-bold font-semibold md:font-semibold">
                    Aviator
                  </span>
                </div>
                <div className="absolute top-0 left-0 w-full h-full min-h-9 rounded-[4px]"></div>
              </div>{" "}
            </span>
            <span title="Aura" className="col-span-1 px-[3px] py-[3px]">
              <div
                className="relative w-full active:scale-95 cursor-pointer bg-bg_SkeletonBgLoaderColor transition-all ease-in-out duration-150 shadow-quickAccessBtnBoxShadows min-h-9 bg-cover bg-center bg-no-repeat rounded-[4px] overflow-hidden undefined"
                style={{
                  backgroundImage:
                    "url('https://promotions-material.s3.ap-south-1.amazonaws.com/sportsButtons/cricket-1696348461938')",
                }}
              >
                <div className="flex justify-center w-full h-full min-h-9 relative z-10 items-center min-w-[175px] sm:min-w-[240px] md:min-w-[280px] pl-[5px] pt-[2px] pb-[2px] pr-1 opacity-100">
                  <img
                    src="https://promotions-material.s3.ap-south-1.amazonaws.com/quickButtons/Aura-1705912199647?q=20&amp;blur=2&amp;cs=tinysrgb&amp;w=400&amp;px=80&amp;auto=format"
                    width="16"
                    height="16"
                    className="w-4 h-4 sm:w-5 sm:h-5 ml-1 autoAnimate"
                    alt="Aura-image"
                    loading="lazy"
                    title="Aura"
                  />
                  <span className="ml-1 autoAnimate text-text_Quaternary text-xs capitalize pr-[2px] md:text-sm text-nowrap w-full truncate font-lato-bold font-semibold md:font-semibold">
                    Aura
                  </span>
                </div>
                <div className="absolute top-0 left-0 w-full h-full min-h-9 rounded-[4px]"></div>
              </div>
            </span>
          </div>
          <div title="QuickButtons-2" className="grid grid-row-2">
            <span title="Mines" className="col-span-1 px-[3px] py-[3px]">
              <div
                className="relative w-full active:scale-95 cursor-pointer bg-bg_SkeletonBgLoaderColor transition-all ease-in-out duration-150 shadow-quickAccessBtnBoxShadows min-h-9 bg-cover bg-center bg-no-repeat rounded-[4px] overflow-hidden undefined"
                style={{
                  backgroundImage:
                    "url('https://promotions-material.s3.ap-south-1.amazonaws.com/sportsButtons/cricket-1696348461938')",
                }}
              >
                <div className="flex justify-center w-full h-full min-h-9 relative z-10 items-center min-w-[175px] sm:min-w-[240px] md:min-w-[280px] pl-[5px] pt-[2px] pb-[2px] pr-1 opacity-100">
                  <img
                    src="https://promotions-material.s3.ap-south-1.amazonaws.com/quickButtons/diamond_icon.png?q=20&amp;blur=2&amp;cs=tinysrgb&amp;w=400&amp;px=80&amp;auto=format"
                    width="16"
                    height="16"
                    className="w-4 h-4 sm:w-5 sm:h-5 ml-1 autoAnimate"
                    alt="Mines-image"
                    loading="lazy"
                    title="Mines"
                  />
                  <span className="ml-1 autoAnimate text-text_Quaternary text-xs capitalize pr-[2px] md:text-sm text-nowrap w-full truncate font-lato-bold font-semibold md:font-semibold">
                    Mines
                  </span>
                </div>
                <div className="absolute top-0 left-0 w-full h-full min-h-9 rounded-[4px]"></div>
              </div>{" "}
            </span>
            <span title="Limbo" className="col-span-1 px-[3px] py-[3px]">
              <div
                className="relative w-full active:scale-95 cursor-pointer bg-bg_SkeletonBgLoaderColor transition-all ease-in-out duration-150 shadow-quickAccessBtnBoxShadows min-h-9 bg-cover bg-center bg-no-repeat rounded-[4px] overflow-hidden undefined"
                style={{
                  backgroundImage:
                    "url('https://promotions-material.s3.ap-south-1.amazonaws.com/sportsButtons/cricket-1696348461938')",
                }}
              >
                <div className="flex justify-center w-full h-full min-h-9 relative z-10 items-center min-w-[175px] sm:min-w-[240px] md:min-w-[280px] pl-[5px] pt-[2px] pb-[2px] pr-1 opacity-100">
                  <img
                    src="https://promotions-material.s3.ap-south-1.amazonaws.com/quickButtons/Aviator-1705911963125?q=20&amp;blur=2&amp;cs=tinysrgb&amp;w=400&amp;px=80&amp;auto=format"
                    width="16"
                    height="16"
                    className="w-4 h-4 sm:w-5 sm:h-5 ml-1 autoAnimate"
                    alt="Limbo-image"
                    loading="lazy"
                    title="Limbo"
                  />
                  <span className="ml-1 autoAnimate text-text_Quaternary text-xs capitalize pr-[2px] md:text-sm text-nowrap w-full truncate font-lato-bold font-semibold md:font-semibold">
                    Limbo
                  </span>
                </div>
                <div className="absolute top-0 left-0 w-full h-full min-h-9 rounded-[4px]"></div>
              </div>
            </span>
          </div>
          <div title="QuickButtons-4" className="grid grid-row-2">
            <span title="Color Game" className="col-span-1 px-[3px] py-[3px]">
              <div
                className="relative w-full active:scale-95 cursor-pointer bg-bg_SkeletonBgLoaderColor transition-all ease-in-out duration-150 shadow-quickAccessBtnBoxShadows min-h-9 bg-cover bg-center bg-no-repeat rounded-[4px] overflow-hidden undefined"
                style={{
                  backgroundImage:
                    "url('https://promotions-material.s3.ap-south-1.amazonaws.com/sportsButtons/cricket-1696348461938')",
                }}
              >
                <div className="flex justify-center w-full h-full min-h-9 relative z-10 items-center min-w-[175px] sm:min-w-[240px] md:min-w-[280px] pl-[5px] pt-[2px] pb-[2px] pr-1 opacity-100">
                  <img
                    src="https://promomaterial.imgix.net/quickButtons/ColorGame-1718191763431?q=20&amp;blur=2&amp;cs=tinysrgb&amp;w=400&amp;px=80&amp;auto=format"
                    width="16"
                    height="16"
                    className="w-4 h-4 sm:w-5 sm:h-5 ml-1 autoAnimate"
                    alt="Color Game-image"
                    loading="lazy"
                    title="Color Game"
                  />
                  <span className="ml-1 autoAnimate text-text_Quaternary text-xs capitalize pr-[2px] md:text-sm text-nowrap w-full truncate font-lato-bold font-semibold md:font-semibold">
                    Color Game
                  </span>
                </div>
                <div className="absolute top-0 left-0 w-full h-full min-h-9 rounded-[4px]"></div>
              </div>{" "}
            </span>
            <span
              title="Tower Legends"
              className="col-span-1 px-[3px] py-[3px]"
            >
              <div
                className="relative w-full active:scale-95 cursor-pointer bg-bg_SkeletonBgLoaderColor transition-all ease-in-out duration-150 shadow-quickAccessBtnBoxShadows min-h-9 bg-cover bg-center bg-no-repeat rounded-[4px] overflow-hidden undefined"
                style={{
                  backgroundImage:
                    "url('https://promotions-material.s3.ap-south-1.amazonaws.com/sportsButtons/cricket-1696348461938')",
                }}
              >
                <div className="flex justify-center w-full h-full min-h-9 relative z-10 items-center min-w-[175px] sm:min-w-[240px] md:min-w-[280px] pl-[5px] pt-[2px] pb-[2px] pr-1 opacity-100">
                  <img
                    src="https://promomaterial.imgix.net/quickButtons/TowerLegends-1722000145474?q=20&amp;blur=2&amp;cs=tinysrgb&amp;w=400&amp;px=80&amp;auto=format"
                    width="16"
                    height="16"
                    className="w-4 h-4 sm:w-5 sm:h-5 ml-1 autoAnimate"
                    alt="Tower Legends-image"
                    loading="lazy"
                    title="Tower Legends"
                  />
                  <span className="ml-1 autoAnimate text-text_Quaternary text-xs capitalize pr-[2px] md:text-sm text-nowrap w-full truncate font-lato-bold font-semibold md:font-semibold">
                    Tower Legends
                  </span>
                </div>
                <div className="absolute top-0 left-0 w-full h-full min-h-9 rounded-[4px]"></div>
              </div>
            </span>
          </div>
          <div title="QuickButtons-6" className="grid grid-row-2">
            <span title="Evolution" className="col-span-1 px-[3px] py-[3px]">
              <div
                className="relative w-full active:scale-95 cursor-pointer bg-bg_SkeletonBgLoaderColor transition-all ease-in-out duration-150 shadow-quickAccessBtnBoxShadows min-h-9 bg-cover bg-center bg-no-repeat rounded-[4px] overflow-hidden undefined"
                style={{
                  backgroundImage:
                    "url('https://promotions-material.s3.ap-south-1.amazonaws.com/sportsButtons/cricket-1696348461938')",
                }}
              >
                <div className="flex justify-center w-full h-full min-h-9 relative z-10 items-center min-w-[175px] sm:min-w-[240px] md:min-w-[280px] pl-[5px] pt-[2px] pb-[2px] pr-1 opacity-100">
                  <img
                    src="https://promotions-material.s3.ap-south-1.amazonaws.com/quickButtons/Evolution-1705911275817?q=20&amp;blur=2&amp;cs=tinysrgb&amp;w=400&amp;px=80&amp;auto=format"
                    width="16"
                    height="16"
                    className="w-4 h-4 sm:w-5 sm:h-5 ml-1 autoAnimate"
                    alt="Evolution-image"
                    loading="lazy"
                    title="Evolution"
                  />
                  <span className="ml-1 autoAnimate text-text_Quaternary text-xs capitalize pr-[2px] md:text-sm text-nowrap w-full truncate font-lato-bold font-semibold md:font-semibold">
                    Evolution
                  </span>
                </div>
                <div className="absolute top-0 left-0 w-full h-full min-h-9 rounded-[4px]"></div>
              </div>{" "}
            </span>
            <span title="Sportsbook" className="col-span-1 px-[3px] py-[3px]">
              <div
                className="relative w-full active:scale-95 cursor-pointer bg-bg_SkeletonBgLoaderColor transition-all ease-in-out duration-150 shadow-quickAccessBtnBoxShadows min-h-9 bg-cover bg-center bg-no-repeat rounded-[4px] overflow-hidden undefined"
                style={{
                  backgroundImage:
                    "url('https://promotions-material.s3.ap-south-1.amazonaws.com/sportsButtons/cricket-1696348461938')",
                }}
              >
                <div className="flex justify-center w-full h-full min-h-9 relative z-10 items-center min-w-[175px] sm:min-w-[240px] md:min-w-[280px] pl-[5px] pt-[2px] pb-[2px] pr-1 opacity-100">
                  <img
                    src="https://promotions-material.s3.ap-south-1.amazonaws.com/quickButtons/Sportsbook-1705911352029?q=20&amp;blur=2&amp;cs=tinysrgb&amp;w=400&amp;px=80&amp;auto=format"
                    width="16"
                    height="16"
                    className="w-4 h-4 sm:w-5 sm:h-5 ml-1 autoAnimate"
                    alt="Sportsbook-image"
                    loading="lazy"
                    title="Sportsbook"
                  />
                  <span className="ml-1 autoAnimate text-text_Quaternary text-xs capitalize pr-[2px] md:text-sm text-nowrap w-full truncate font-lato-bold font-semibold md:font-semibold">
                    Sportsbook
                  </span>
                </div>
                <div className="absolute top-0 left-0 w-full h-full min-h-9 rounded-[4px]"></div>
              </div>
            </span>
          </div>
          <div title="QuickButtons-8" className="grid grid-row-2">
            <span title="Live Casinos" className="col-span-1 px-[3px] py-[3px]">
              <div
                className="relative w-full active:scale-95 cursor-pointer bg-bg_SkeletonBgLoaderColor transition-all ease-in-out duration-150 shadow-quickAccessBtnBoxShadows min-h-9 bg-cover bg-center bg-no-repeat rounded-[4px] overflow-hidden undefined"
                style={{
                  backgroundImage:
                    "url('https://promotions-material.s3.ap-south-1.amazonaws.com/sportsButtons/cricket-1696348461938')",
                }}
              >
                <div className="flex justify-center w-full h-full min-h-9 relative z-10 items-center min-w-[175px] sm:min-w-[240px] md:min-w-[280px] pl-[5px] pt-[2px] pb-[2px] pr-1 opacity-100">
                  <img
                    src="https://promotions-material.s3.ap-south-1.amazonaws.com/quickButtons/LiveCasinos-1705911704279?q=20&amp;blur=2&amp;cs=tinysrgb&amp;w=400&amp;px=80&amp;auto=format"
                    width="16"
                    height="16"
                    className="w-4 h-4 sm:w-5 sm:h-5 ml-1 autoAnimate"
                    alt="Live Casinos-image"
                    loading="lazy"
                    title="Live Casinos"
                  />
                  <span className="ml-1 autoAnimate text-text_Quaternary text-xs capitalize pr-[2px] md:text-sm text-nowrap w-full truncate font-lato-bold font-semibold md:font-semibold">
                    Live Casinos
                  </span>
                </div>
                <div className="absolute top-0 left-0 w-full h-full min-h-9 rounded-[4px]"></div>
              </div>{" "}
            </span>
            <span title="e-Cricket" className="col-span-1 px-[3px] py-[3px]">
              <div
                className="relative w-full active:scale-95 cursor-pointer bg-bg_SkeletonBgLoaderColor transition-all ease-in-out duration-150 shadow-quickAccessBtnBoxShadows min-h-9 bg-cover bg-center bg-no-repeat rounded-[4px] overflow-hidden undefined"
                style={{
                  backgroundImage:
                    "url('https://promotions-material.s3.ap-south-1.amazonaws.com/sportsButtons/cricket-1696348461938')",
                }}
              >
                <div className="flex justify-center w-full h-full min-h-9 relative z-10 items-center min-w-[175px] sm:min-w-[240px] md:min-w-[280px] pl-[5px] pt-[2px] pb-[2px] pr-1 opacity-100">
                  <img
                    src="https://promotions-material.s3.ap-south-1.amazonaws.com/quickButtons/e-Cricket-1705911799122?q=20&amp;blur=2&amp;cs=tinysrgb&amp;w=400&amp;px=80&amp;auto=format"
                    width="16"
                    height="16"
                    className="w-4 h-4 sm:w-5 sm:h-5 ml-1 autoAnimate"
                    alt="e-Cricket-image"
                    loading="lazy"
                    title="e-Cricket"
                  />
                  <span className="ml-1 autoAnimate text-text_Quaternary text-xs capitalize pr-[2px] md:text-sm text-nowrap w-full truncate font-lato-bold font-semibold md:font-semibold">
                    e-Cricket
                  </span>
                </div>
                <div className="absolute top-0 left-0 w-full h-full min-h-9 rounded-[4px]"></div>
              </div>
            </span>
          </div>
          <div title="QuickButtons-10" className="grid grid-row-2">
            <span title="Card Games" className="col-span-1 px-[3px] py-[3px]">
              <div
                className="relative w-full active:scale-95 cursor-pointer bg-bg_SkeletonBgLoaderColor transition-all ease-in-out duration-150 shadow-quickAccessBtnBoxShadows min-h-9 bg-cover bg-center bg-no-repeat rounded-[4px] overflow-hidden undefined"
                style={{
                  backgroundImage:
                    "url('https://promotions-material.s3.ap-south-1.amazonaws.com/sportsButtons/cricket-1696348461938')",
                }}
              >
                <div className="flex justify-center w-full h-full min-h-9 relative z-10 items-center min-w-[175px] sm:min-w-[240px] md:min-w-[280px] pl-[5px] pt-[2px] pb-[2px] pr-1 opacity-100">
                  <img
                    src="https://promotions-material.s3.ap-south-1.amazonaws.com/quickButtons/CardGames-1705911853726?q=20&amp;blur=2&amp;cs=tinysrgb&amp;w=400&amp;px=80&amp;auto=format"
                    width="16"
                    height="16"
                    className="w-4 h-4 sm:w-5 sm:h-5 ml-1 autoAnimate"
                    alt="Card Games-image"
                    loading="lazy"
                    title="Card Games"
                  />
                  <span className="ml-1 autoAnimate text-text_Quaternary text-xs capitalize pr-[2px] md:text-sm text-nowrap w-full truncate font-lato-bold font-semibold md:font-semibold">
                    Card Games
                  </span>
                </div>
                <div className="absolute top-0 left-0 w-full h-full min-h-9 rounded-[4px]"></div>
              </div>{" "}
            </span>
            <span title="Slot Games" className="col-span-1 px-[3px] py-[3px]">
              <div
                className="relative w-full active:scale-95 cursor-pointer bg-bg_SkeletonBgLoaderColor transition-all ease-in-out duration-150 shadow-quickAccessBtnBoxShadows min-h-9 bg-cover bg-center bg-no-repeat rounded-[4px] overflow-hidden undefined"
                style={{
                  backgroundImage:
                    "url('https://promotions-material.s3.ap-south-1.amazonaws.com/sportsButtons/cricket-1696348461938')",
                }}
              >
                <div className="flex justify-center w-full h-full min-h-9 relative z-10 items-center min-w-[175px] sm:min-w-[240px] md:min-w-[280px] pl-[5px] pt-[2px] pb-[2px] pr-1 opacity-100">
                  <img
                    src="https://promotions-material.s3.ap-south-1.amazonaws.com/quickButtons/SlotGames-1705912015300?q=20&amp;blur=2&amp;cs=tinysrgb&amp;w=400&amp;px=80&amp;auto=format"
                    width="16"
                    height="16"
                    className="w-4 h-4 sm:w-5 sm:h-5 ml-1 autoAnimate"
                    alt="Slot Games-image"
                    loading="lazy"
                    title="Slot Games"
                  />
                  <span className="ml-1 autoAnimate text-text_Quaternary text-xs capitalize pr-[2px] md:text-sm text-nowrap w-full truncate font-lato-bold font-semibold md:font-semibold">
                    Slot Games
                  </span>
                </div>
                <div className="absolute top-0 left-0 w-full h-full min-h-9 rounded-[4px]"></div>
              </div>
            </span>
          </div>
          <div title="QuickButtons-12" className="grid grid-row-2">
            <span
              title="Multiplayer Games"
              className="col-span-1 px-[3px] py-[3px]"
            >
              <div
                className="relative w-full active:scale-95 cursor-pointer bg-bg_SkeletonBgLoaderColor transition-all ease-in-out duration-150 shadow-quickAccessBtnBoxShadows min-h-9 bg-cover bg-center bg-no-repeat rounded-[4px] overflow-hidden undefined"
                style={{
                  backgroundImage:
                    "url('https://promotions-material.s3.ap-south-1.amazonaws.com/sportsButtons/cricket-1696348461938')",
                }}
              >
                <div className="flex justify-center w-full h-full min-h-9 relative z-10 items-center min-w-[175px] sm:min-w-[240px] md:min-w-[280px] pl-[5px] pt-[2px] pb-[2px] pr-1 opacity-100">
                  <img
                    src="https://promotions-material.s3.ap-south-1.amazonaws.com/quickButtons/MultiplayerGames-1705912077489?q=20&amp;blur=2&amp;cs=tinysrgb&amp;w=400&amp;px=80&amp;auto=format"
                    width="16"
                    height="16"
                    className="w-4 h-4 sm:w-5 sm:h-5 ml-1 autoAnimate"
                    alt="Multiplayer Games-image"
                    loading="lazy"
                    title="Multiplayer Games"
                  />
                  <span className="ml-1 autoAnimate text-text_Quaternary text-xs capitalize pr-[2px] md:text-sm text-nowrap w-full truncate font-lato-bold font-semibold md:font-semibold">
                    Multiplayer Games
                  </span>
                </div>
                <div className="absolute top-0 left-0 w-full h-full min-h-9 rounded-[4px]"></div>
              </div>{" "}
            </span>
            <span
              title="Fishing games"
              className="col-span-1 px-[3px] py-[3px]"
            >
              <div
                className="relative w-full active:scale-95 cursor-pointer bg-bg_SkeletonBgLoaderColor transition-all ease-in-out duration-150 shadow-quickAccessBtnBoxShadows min-h-9 bg-cover bg-center bg-no-repeat rounded-[4px] overflow-hidden undefined"
                style={{
                  backgroundImage:
                    "url('https://promotions-material.s3.ap-south-1.amazonaws.com/sportsButtons/cricket-1696348461938')",
                }}
              >
                <div className="flex justify-center w-full h-full min-h-9 relative z-10 items-center min-w-[175px] sm:min-w-[240px] md:min-w-[280px] pl-[5px] pt-[2px] pb-[2px] pr-1 opacity-100">
                  <img
                    src="https://promotions-material.s3.ap-south-1.amazonaws.com/quickButtons/Fishinggames-1705912252627?q=20&amp;blur=2&amp;cs=tinysrgb&amp;w=400&amp;px=80&amp;auto=format"
                    width="16"
                    height="16"
                    className="w-4 h-4 sm:w-5 sm:h-5 ml-1 autoAnimate"
                    alt="Fishing games-image"
                    loading="lazy"
                    title="Fishing games"
                  />
                  <span className="ml-1 autoAnimate text-text_Quaternary text-xs capitalize pr-[2px] md:text-sm text-nowrap w-full truncate font-lato-bold font-semibold md:font-semibold">
                    Fishing games
                  </span>
                </div>
                <div className="absolute top-0 left-0 w-full h-full min-h-9 rounded-[4px]"></div>
              </div>
            </span>
          </div>
          <div title="QuickButtons-0" className="grid grid-row-2">
            <span title="Aviator" className="col-span-1 px-[3px] py-[3px]">
              <div
                className="relative w-full active:scale-95 cursor-pointer bg-bg_SkeletonBgLoaderColor transition-all ease-in-out duration-150 shadow-quickAccessBtnBoxShadows min-h-9 bg-cover bg-center bg-no-repeat rounded-[4px] overflow-hidden undefined"
                style={{
                  backgroundImage:
                    "url('https://promotions-material.s3.ap-south-1.amazonaws.com/sportsButtons/cricket-1696348461938')",
                }}
              >
                <div className="flex justify-center w-full h-full min-h-9 relative z-10 items-center min-w-[175px] sm:min-w-[240px] md:min-w-[280px] pl-[5px] pt-[2px] pb-[2px] pr-1 opacity-100">
                  <img
                    src="https://promotions-material.s3.ap-south-1.amazonaws.com/quickButtons/Aviator-1705911963125?q=20&amp;blur=2&amp;cs=tinysrgb&amp;w=400&amp;px=80&amp;auto=format"
                    width="16"
                    height="16"
                    className="w-4 h-4 sm:w-5 sm:h-5 ml-1 autoAnimate"
                    alt="Aviator-image"
                    loading="lazy"
                    title="Aviator"
                  />
                  <span className="ml-1 autoAnimate text-text_Quaternary text-xs capitalize pr-[2px] md:text-sm text-nowrap w-full truncate font-lato-bold font-semibold md:font-semibold">
                    Aviator
                  </span>
                </div>
                <div className="absolute top-0 left-0 w-full h-full min-h-9 rounded-[4px]"></div>
              </div>{" "}
            </span>
            <span title="Aura" className="col-span-1 px-[3px] py-[3px]">
              <div
                className="relative w-full active:scale-95 cursor-pointer bg-bg_SkeletonBgLoaderColor transition-all ease-in-out duration-150 shadow-quickAccessBtnBoxShadows min-h-9 bg-cover bg-center bg-no-repeat rounded-[4px] overflow-hidden undefined"
                style={{
                  backgroundImage:
                    "url('https://promotions-material.s3.ap-south-1.amazonaws.com/sportsButtons/cricket-1696348461938')",
                }}
              >
                <div className="flex justify-center w-full h-full min-h-9 relative z-10 items-center min-w-[175px] sm:min-w-[240px] md:min-w-[280px] pl-[5px] pt-[2px] pb-[2px] pr-1 opacity-100">
                  <img
                    src="https://promotions-material.s3.ap-south-1.amazonaws.com/quickButtons/Aura-1705912199647?q=20&amp;blur=2&amp;cs=tinysrgb&amp;w=400&amp;px=80&amp;auto=format"
                    width="16"
                    height="16"
                    className="w-4 h-4 sm:w-5 sm:h-5 ml-1 autoAnimate"
                    alt="Aura-image"
                    loading="lazy"
                    title="Aura"
                  />
                  <span className="ml-1 autoAnimate text-text_Quaternary text-xs capitalize pr-[2px] md:text-sm text-nowrap w-full truncate font-lato-bold font-semibold md:font-semibold">
                    Aura
                  </span>
                </div>
                <div className="absolute top-0 left-0 w-full h-full min-h-9 rounded-[4px]"></div>
              </div>
            </span>
          </div>
          <div title="QuickButtons-2" className="grid grid-row-2">
            <span title="Mines" className="col-span-1 px-[3px] py-[3px]">
              <div
                className="relative w-full active:scale-95 cursor-pointer bg-bg_SkeletonBgLoaderColor transition-all ease-in-out duration-150 shadow-quickAccessBtnBoxShadows min-h-9 bg-cover bg-center bg-no-repeat rounded-[4px] overflow-hidden undefined"
                style={{
                  backgroundImage:
                    "url('https://promotions-material.s3.ap-south-1.amazonaws.com/sportsButtons/cricket-1696348461938')",
                }}
              >
                <div className="flex justify-center w-full h-full min-h-9 relative z-10 items-center min-w-[175px] sm:min-w-[240px] md:min-w-[280px] pl-[5px] pt-[2px] pb-[2px] pr-1 opacity-100">
                  <img
                    src="https://promotions-material.s3.ap-south-1.amazonaws.com/quickButtons/diamond_icon.png?q=20&amp;blur=2&amp;cs=tinysrgb&amp;w=400&amp;px=80&amp;auto=format"
                    width="16"
                    height="16"
                    className="w-4 h-4 sm:w-5 sm:h-5 ml-1 autoAnimate"
                    alt="Mines-image"
                    loading="lazy"
                    title="Mines"
                  />
                  <span className="ml-1 autoAnimate text-text_Quaternary text-xs capitalize pr-[2px] md:text-sm text-nowrap w-full truncate font-lato-bold font-semibold md:font-semibold">
                    Mines
                  </span>
                </div>
                <div className="absolute top-0 left-0 w-full h-full min-h-9 rounded-[4px]"></div>
              </div>{" "}
            </span>
            <span title="Limbo" className="col-span-1 px-[3px] py-[3px]">
              <div
                className="relative w-full active:scale-95 cursor-pointer bg-bg_SkeletonBgLoaderColor transition-all ease-in-out duration-150 shadow-quickAccessBtnBoxShadows min-h-9 bg-cover bg-center bg-no-repeat rounded-[4px] overflow-hidden undefined"
                style={{
                  backgroundImage:
                    "url('https://promotions-material.s3.ap-south-1.amazonaws.com/sportsButtons/cricket-1696348461938')",
                }}
              >
                <div className="flex justify-center w-full h-full min-h-9 relative z-10 items-center min-w-[175px] sm:min-w-[240px] md:min-w-[280px] pl-[5px] pt-[2px] pb-[2px] pr-1 opacity-100">
                  <img
                    src="https://promotions-material.s3.ap-south-1.amazonaws.com/quickButtons/Aviator-1705911963125?q=20&amp;blur=2&amp;cs=tinysrgb&amp;w=400&amp;px=80&amp;auto=format"
                    width="16"
                    height="16"
                    className="w-4 h-4 sm:w-5 sm:h-5 ml-1 autoAnimate"
                    alt="Limbo-image"
                    loading="lazy"
                    title="Limbo"
                  />
                  <span className="ml-1 autoAnimate text-text_Quaternary text-xs capitalize pr-[2px] md:text-sm text-nowrap w-full truncate font-lato-bold font-semibold md:font-semibold">
                    Limbo
                  </span>
                </div>
                <div className="absolute top-0 left-0 w-full h-full min-h-9 rounded-[4px]"></div>
              </div>
            </span>
          </div>
          <div title="QuickButtons-4" className="grid grid-row-2">
            <span title="Color Game" className="col-span-1 px-[3px] py-[3px]">
              <div
                className="relative w-full active:scale-95 cursor-pointer bg-bg_SkeletonBgLoaderColor transition-all ease-in-out duration-150 shadow-quickAccessBtnBoxShadows min-h-9 bg-cover bg-center bg-no-repeat rounded-[4px] overflow-hidden undefined"
                style={{
                  backgroundImage:
                    "url('https://promotions-material.s3.ap-south-1.amazonaws.com/sportsButtons/cricket-1696348461938')",
                }}
              >
                <div className="flex justify-center w-full h-full min-h-9 relative z-10 items-center min-w-[175px] sm:min-w-[240px] md:min-w-[280px] pl-[5px] pt-[2px] pb-[2px] pr-1 opacity-100">
                  <img
                    src="https://promomaterial.imgix.net/quickButtons/ColorGame-1718191763431?q=20&amp;blur=2&amp;cs=tinysrgb&amp;w=400&amp;px=80&amp;auto=format"
                    width="16"
                    height="16"
                    className="w-4 h-4 sm:w-5 sm:h-5 ml-1 autoAnimate"
                    alt="Color Game-image"
                    loading="lazy"
                    title="Color Game"
                  />
                  <span className="ml-1 autoAnimate text-text_Quaternary text-xs capitalize pr-[2px] md:text-sm text-nowrap w-full truncate font-lato-bold font-semibold md:font-semibold">
                    Color Game
                  </span>
                </div>
                <div className="absolute top-0 left-0 w-full h-full min-h-9 rounded-[4px]"></div>
              </div>{" "}
            </span>
            <span
              title="Tower Legends"
              className="col-span-1 px-[3px] py-[3px]"
            >
              <div
                className="relative w-full active:scale-95 cursor-pointer bg-bg_SkeletonBgLoaderColor transition-all ease-in-out duration-150 shadow-quickAccessBtnBoxShadows min-h-9 bg-cover bg-center bg-no-repeat rounded-[4px] overflow-hidden undefined"
                style={{
                  backgroundImage:
                    "url('https://promotions-material.s3.ap-south-1.amazonaws.com/sportsButtons/cricket-1696348461938')",
                }}
              >
                <div className="flex justify-center w-full h-full min-h-9 relative z-10 items-center min-w-[175px] sm:min-w-[240px] md:min-w-[280px] pl-[5px] pt-[2px] pb-[2px] pr-1 opacity-100">
                  <img
                    src="https://promomaterial.imgix.net/quickButtons/TowerLegends-1722000145474?q=20&amp;blur=2&amp;cs=tinysrgb&amp;w=400&amp;px=80&amp;auto=format"
                    width="16"
                    height="16"
                    className="w-4 h-4 sm:w-5 sm:h-5 ml-1 autoAnimate"
                    alt="Tower Legends-image"
                    loading="lazy"
                    title="Tower Legends"
                  />
                  <span className="ml-1 autoAnimate text-text_Quaternary text-xs capitalize pr-[2px] md:text-sm text-nowrap w-full truncate font-lato-bold font-semibold md:font-semibold">
                    Tower Legends
                  </span>
                </div>
                <div className="absolute top-0 left-0 w-full h-full min-h-9 rounded-[4px]"></div>
              </div>
            </span>
          </div>
          <div title="QuickButtons-6" className="grid grid-row-2">
            <span title="Evolution" className="col-span-1 px-[3px] py-[3px]">
              <div
                className="relative w-full active:scale-95 cursor-pointer bg-bg_SkeletonBgLoaderColor transition-all ease-in-out duration-150 shadow-quickAccessBtnBoxShadows min-h-9 bg-cover bg-center bg-no-repeat rounded-[4px] overflow-hidden undefined"
                style={{
                  backgroundImage:
                    "url('https://promotions-material.s3.ap-south-1.amazonaws.com/sportsButtons/cricket-1696348461938')",
                }}
              >
                <div className="flex justify-center w-full h-full min-h-9 relative z-10 items-center min-w-[175px] sm:min-w-[240px] md:min-w-[280px] pl-[5px] pt-[2px] pb-[2px] pr-1 opacity-100">
                  <img
                    src="https://promotions-material.s3.ap-south-1.amazonaws.com/quickButtons/Evolution-1705911275817?q=20&amp;blur=2&amp;cs=tinysrgb&amp;w=400&amp;px=80&amp;auto=format"
                    width="16"
                    height="16"
                    className="w-4 h-4 sm:w-5 sm:h-5 ml-1 autoAnimate"
                    alt="Evolution-image"
                    loading="lazy"
                    title="Evolution"
                  />
                  <span className="ml-1 autoAnimate text-text_Quaternary text-xs capitalize pr-[2px] md:text-sm text-nowrap w-full truncate font-lato-bold font-semibold md:font-semibold">
                    Evolution
                  </span>
                </div>
                <div className="absolute top-0 left-0 w-full h-full min-h-9 rounded-[4px]"></div>
              </div>{" "}
            </span>
            <span title="Sportsbook" className="col-span-1 px-[3px] py-[3px]">
              <div
                className="relative w-full active:scale-95 cursor-pointer bg-bg_SkeletonBgLoaderColor transition-all ease-in-out duration-150 shadow-quickAccessBtnBoxShadows min-h-9 bg-cover bg-center bg-no-repeat rounded-[4px] overflow-hidden undefined"
                style={{
                  backgroundImage:
                    "url('https://promotions-material.s3.ap-south-1.amazonaws.com/sportsButtons/cricket-1696348461938')",
                }}
              >
                <div className="flex justify-center w-full h-full min-h-9 relative z-10 items-center min-w-[175px] sm:min-w-[240px] md:min-w-[280px] pl-[5px] pt-[2px] pb-[2px] pr-1 opacity-100">
                  <img
                    src="https://promotions-material.s3.ap-south-1.amazonaws.com/quickButtons/Sportsbook-1705911352029?q=20&amp;blur=2&amp;cs=tinysrgb&amp;w=400&amp;px=80&amp;auto=format"
                    width="16"
                    height="16"
                    className="w-4 h-4 sm:w-5 sm:h-5 ml-1 autoAnimate"
                    alt="Sportsbook-image"
                    loading="lazy"
                    title="Sportsbook"
                  />
                  <span className="ml-1 autoAnimate text-text_Quaternary text-xs capitalize pr-[2px] md:text-sm text-nowrap w-full truncate font-lato-bold font-semibold md:font-semibold">
                    Sportsbook
                  </span>
                </div>
                <div className="absolute top-0 left-0 w-full h-full min-h-9 rounded-[4px]"></div>
              </div>
            </span>
          </div>
          <div title="QuickButtons-8" className="grid grid-row-2">
            <span title="Live Casinos" className="col-span-1 px-[3px] py-[3px]">
              <div
                className="relative w-full active:scale-95 cursor-pointer bg-bg_SkeletonBgLoaderColor transition-all ease-in-out duration-150 shadow-quickAccessBtnBoxShadows min-h-9 bg-cover bg-center bg-no-repeat rounded-[4px] overflow-hidden undefined"
                style={{
                  backgroundImage:
                    "url('https://promotions-material.s3.ap-south-1.amazonaws.com/sportsButtons/cricket-1696348461938')",
                }}
              >
                <div className="flex justify-center w-full h-full min-h-9 relative z-10 items-center min-w-[175px] sm:min-w-[240px] md:min-w-[280px] pl-[5px] pt-[2px] pb-[2px] pr-1 opacity-100">
                  <img
                    src="https://promotions-material.s3.ap-south-1.amazonaws.com/quickButtons/LiveCasinos-1705911704279?q=20&amp;blur=2&amp;cs=tinysrgb&amp;w=400&amp;px=80&amp;auto=format"
                    width="16"
                    height="16"
                    className="w-4 h-4 sm:w-5 sm:h-5 ml-1 autoAnimate"
                    alt="Live Casinos-image"
                    loading="lazy"
                    title="Live Casinos"
                  />
                  <span className="ml-1 autoAnimate text-text_Quaternary text-xs capitalize pr-[2px] md:text-sm text-nowrap w-full truncate font-lato-bold font-semibold md:font-semibold">
                    Live Casinos
                  </span>
                </div>
                <div className="absolute top-0 left-0 w-full h-full min-h-9 rounded-[4px]"></div>
              </div>{" "}
            </span>
            <span title="e-Cricket" className="col-span-1 px-[3px] py-[3px]">
              <div
                className="relative w-full active:scale-95 cursor-pointer bg-bg_SkeletonBgLoaderColor transition-all ease-in-out duration-150 shadow-quickAccessBtnBoxShadows min-h-9 bg-cover bg-center bg-no-repeat rounded-[4px] overflow-hidden undefined"
                style={{
                  backgroundImage:
                    "url('https://promotions-material.s3.ap-south-1.amazonaws.com/sportsButtons/cricket-1696348461938')",
                }}
              >
                <div className="flex justify-center w-full h-full min-h-9 relative z-10 items-center min-w-[175px] sm:min-w-[240px] md:min-w-[280px] pl-[5px] pt-[2px] pb-[2px] pr-1 opacity-100">
                  <img
                    src="https://promotions-material.s3.ap-south-1.amazonaws.com/quickButtons/e-Cricket-1705911799122?q=20&amp;blur=2&amp;cs=tinysrgb&amp;w=400&amp;px=80&amp;auto=format"
                    width="16"
                    height="16"
                    className="w-4 h-4 sm:w-5 sm:h-5 ml-1 autoAnimate"
                    alt="e-Cricket-image"
                    loading="lazy"
                    title="e-Cricket"
                  />
                  <span className="ml-1 autoAnimate text-text_Quaternary text-xs capitalize pr-[2px] md:text-sm text-nowrap w-full truncate font-lato-bold font-semibold md:font-semibold">
                    e-Cricket
                  </span>
                </div>
                <div className="absolute top-0 left-0 w-full h-full min-h-9 rounded-[4px]"></div>
              </div>
            </span>
          </div>
          <div title="QuickButtons-10" className="grid grid-row-2">
            <span title="Card Games" className="col-span-1 px-[3px] py-[3px]">
              <div
                className="relative w-full active:scale-95 cursor-pointer bg-bg_SkeletonBgLoaderColor transition-all ease-in-out duration-150 shadow-quickAccessBtnBoxShadows min-h-9 bg-cover bg-center bg-no-repeat rounded-[4px] overflow-hidden undefined"
                style={{
                  backgroundImage:
                    "url('https://promotions-material.s3.ap-south-1.amazonaws.com/sportsButtons/cricket-1696348461938')",
                }}
              >
                <div className="flex justify-center w-full h-full min-h-9 relative z-10 items-center min-w-[175px] sm:min-w-[240px] md:min-w-[280px] pl-[5px] pt-[2px] pb-[2px] pr-1 opacity-100">
                  <img
                    src="https://promotions-material.s3.ap-south-1.amazonaws.com/quickButtons/CardGames-1705911853726?q=20&amp;blur=2&amp;cs=tinysrgb&amp;w=400&amp;px=80&amp;auto=format"
                    width="16"
                    height="16"
                    className="w-4 h-4 sm:w-5 sm:h-5 ml-1 autoAnimate"
                    alt="Card Games-image"
                    loading="lazy"
                    title="Card Games"
                  />
                  <span className="ml-1 autoAnimate text-text_Quaternary text-xs capitalize pr-[2px] md:text-sm text-nowrap w-full truncate font-lato-bold font-semibold md:font-semibold">
                    Card Games
                  </span>
                </div>
                <div className="absolute top-0 left-0 w-full h-full min-h-9 rounded-[4px]"></div>
              </div>{" "}
            </span>
            <span title="Slot Games" className="col-span-1 px-[3px] py-[3px]">
              <div
                className="relative w-full active:scale-95 cursor-pointer bg-bg_SkeletonBgLoaderColor transition-all ease-in-out duration-150 shadow-quickAccessBtnBoxShadows min-h-9 bg-cover bg-center bg-no-repeat rounded-[4px] overflow-hidden undefined"
                style={{
                  backgroundImage:
                    "url('https://promotions-material.s3.ap-south-1.amazonaws.com/sportsButtons/cricket-1696348461938')",
                }}
              >
                <div className="flex justify-center w-full h-full min-h-9 relative z-10 items-center min-w-[175px] sm:min-w-[240px] md:min-w-[280px] pl-[5px] pt-[2px] pb-[2px] pr-1 opacity-100">
                  <img
                    src="https://promotions-material.s3.ap-south-1.amazonaws.com/quickButtons/SlotGames-1705912015300?q=20&amp;blur=2&amp;cs=tinysrgb&amp;w=400&amp;px=80&amp;auto=format"
                    width="16"
                    height="16"
                    className="w-4 h-4 sm:w-5 sm:h-5 ml-1 autoAnimate"
                    alt="Slot Games-image"
                    loading="lazy"
                    title="Slot Games"
                  />
                  <span className="ml-1 autoAnimate text-text_Quaternary text-xs capitalize pr-[2px] md:text-sm text-nowrap w-full truncate font-lato-bold font-semibold md:font-semibold">
                    Slot Games
                  </span>
                </div>
                <div className="absolute top-0 left-0 w-full h-full min-h-9 rounded-[4px]"></div>
              </div>
            </span>
          </div>
          <div title="QuickButtons-12" className="grid grid-row-2">
            <span
              title="Multiplayer Games"
              className="col-span-1 px-[3px] py-[3px]"
            >
              <div
                className="relative w-full active:scale-95 cursor-pointer bg-bg_SkeletonBgLoaderColor transition-all ease-in-out duration-150 shadow-quickAccessBtnBoxShadows min-h-9 bg-cover bg-center bg-no-repeat rounded-[4px] overflow-hidden undefined"
                style={{
                  backgroundImage:
                    "url('https://promotions-material.s3.ap-south-1.amazonaws.com/sportsButtons/cricket-1696348461938')",
                }}
              >
                <div className="flex justify-center w-full h-full min-h-9 relative z-10 items-center min-w-[175px] sm:min-w-[240px] md:min-w-[280px] pl-[5px] pt-[2px] pb-[2px] pr-1 opacity-100">
                  <img
                    src="https://promotions-material.s3.ap-south-1.amazonaws.com/quickButtons/MultiplayerGames-1705912077489?q=20&amp;blur=2&amp;cs=tinysrgb&amp;w=400&amp;px=80&amp;auto=format"
                    width="16"
                    height="16"
                    className="w-4 h-4 sm:w-5 sm:h-5 ml-1 autoAnimate"
                    alt="Multiplayer Games-image"
                    loading="lazy"
                    title="Multiplayer Games"
                  />
                  <span className="ml-1 autoAnimate text-text_Quaternary text-xs capitalize pr-[2px] md:text-sm text-nowrap w-full truncate font-lato-bold font-semibold md:font-semibold">
                    Multiplayer Games
                  </span>
                </div>
                <div className="absolute top-0 left-0 w-full h-full min-h-9 rounded-[4px]"></div>
              </div>{" "}
            </span>
            <span
              title="Fishing games"
              className="col-span-1 px-[3px] py-[3px]"
            >
              <div
                className="relative w-full active:scale-95 cursor-pointer bg-bg_SkeletonBgLoaderColor transition-all ease-in-out duration-150 shadow-quickAccessBtnBoxShadows min-h-9 bg-cover bg-center bg-no-repeat rounded-[4px] overflow-hidden undefined"
                style={{
                  backgroundImage:
                    "url('https://promotions-material.s3.ap-south-1.amazonaws.com/sportsButtons/cricket-1696348461938')",
                }}
              >
                <div className="flex justify-center w-full h-full min-h-9 relative z-10 items-center min-w-[175px] sm:min-w-[240px] md:min-w-[280px] pl-[5px] pt-[2px] pb-[2px] pr-1 opacity-100">
                  <img
                    src="https://promotions-material.s3.ap-south-1.amazonaws.com/quickButtons/Fishinggames-1705912252627?q=20&amp;blur=2&amp;cs=tinysrgb&amp;w=400&amp;px=80&amp;auto=format"
                    width="16"
                    height="16"
                    className="w-4 h-4 sm:w-5 sm:h-5 ml-1 autoAnimate"
                    alt="Fishing games-image"
                    loading="lazy"
                    title="Fishing games"
                  />
                  <span className="ml-1 autoAnimate text-text_Quaternary text-xs capitalize pr-[2px] md:text-sm text-nowrap w-full truncate font-lato-bold font-semibold md:font-semibold">
                    Fishing games
                  </span>
                </div>
                <div className="absolute top-0 left-0 w-full h-full min-h-9 rounded-[4px]"></div>
              </div>
            </span>
          </div>
          <div title="QuickButtons-0" className="grid grid-row-2">
            <span title="Aviator" className="col-span-1 px-[3px] py-[3px]">
              <div
                className="relative w-full active:scale-95 cursor-pointer bg-bg_SkeletonBgLoaderColor transition-all ease-in-out duration-150 shadow-quickAccessBtnBoxShadows min-h-9 bg-cover bg-center bg-no-repeat rounded-[4px] overflow-hidden undefined"
                style={{
                  backgroundImage:
                    "url('https://promotions-material.s3.ap-south-1.amazonaws.com/sportsButtons/cricket-1696348461938')",
                }}
              >
                <div className="flex justify-center w-full h-full min-h-9 relative z-10 items-center min-w-[175px] sm:min-w-[240px] md:min-w-[280px] pl-[5px] pt-[2px] pb-[2px] pr-1 opacity-100">
                  <img
                    src="https://promotions-material.s3.ap-south-1.amazonaws.com/quickButtons/Aviator-1705911963125?q=20&amp;blur=2&amp;cs=tinysrgb&amp;w=400&amp;px=80&amp;auto=format"
                    width="16"
                    height="16"
                    className="w-4 h-4 sm:w-5 sm:h-5 ml-1 autoAnimate"
                    alt="Aviator-image"
                    loading="lazy"
                    title="Aviator"
                  />
                  <span className="ml-1 autoAnimate text-text_Quaternary text-xs capitalize pr-[2px] md:text-sm text-nowrap w-full truncate font-lato-bold font-semibold md:font-semibold">
                    Aviator
                  </span>
                </div>
                <div className="absolute top-0 left-0 w-full h-full min-h-9 rounded-[4px]"></div>
              </div>{" "}
            </span>
            <span title="Aura" className="col-span-1 px-[3px] py-[3px]">
              <div
                className="relative w-full active:scale-95 cursor-pointer bg-bg_SkeletonBgLoaderColor transition-all ease-in-out duration-150 shadow-quickAccessBtnBoxShadows min-h-9 bg-cover bg-center bg-no-repeat rounded-[4px] overflow-hidden undefined"
                style={{
                  backgroundImage:
                    "url('https://promotions-material.s3.ap-south-1.amazonaws.com/sportsButtons/cricket-1696348461938')",
                }}
              >
                <div className="flex justify-center w-full h-full min-h-9 relative z-10 items-center min-w-[175px] sm:min-w-[240px] md:min-w-[280px] pl-[5px] pt-[2px] pb-[2px] pr-1 opacity-100">
                  <img
                    src="https://promotions-material.s3.ap-south-1.amazonaws.com/quickButtons/Aura-1705912199647?q=20&amp;blur=2&amp;cs=tinysrgb&amp;w=400&amp;px=80&amp;auto=format"
                    width="16"
                    height="16"
                    className="w-4 h-4 sm:w-5 sm:h-5 ml-1 autoAnimate"
                    alt="Aura-image"
                    loading="lazy"
                    title="Aura"
                  />
                  <span className="ml-1 autoAnimate text-text_Quaternary text-xs capitalize pr-[2px] md:text-sm text-nowrap w-full truncate font-lato-bold font-semibold md:font-semibold">
                    Aura
                  </span>
                </div>
                <div className="absolute top-0 left-0 w-full h-full min-h-9 rounded-[4px]"></div>
              </div>
            </span>
          </div>
          <div title="QuickButtons-2" className="grid grid-row-2">
            <span title="Mines" className="col-span-1 px-[3px] py-[3px]">
              <div
                className="relative w-full active:scale-95 cursor-pointer bg-bg_SkeletonBgLoaderColor transition-all ease-in-out duration-150 shadow-quickAccessBtnBoxShadows min-h-9 bg-cover bg-center bg-no-repeat rounded-[4px] overflow-hidden undefined"
                style={{
                  backgroundImage:
                    "url('https://promotions-material.s3.ap-south-1.amazonaws.com/sportsButtons/cricket-1696348461938')",
                }}
              >
                <div className="flex justify-center w-full h-full min-h-9 relative z-10 items-center min-w-[175px] sm:min-w-[240px] md:min-w-[280px] pl-[5px] pt-[2px] pb-[2px] pr-1 opacity-100">
                  <img
                    src="https://promotions-material.s3.ap-south-1.amazonaws.com/quickButtons/diamond_icon.png?q=20&amp;blur=2&amp;cs=tinysrgb&amp;w=400&amp;px=80&amp;auto=format"
                    width="16"
                    height="16"
                    className="w-4 h-4 sm:w-5 sm:h-5 ml-1 autoAnimate"
                    alt="Mines-image"
                    loading="lazy"
                    title="Mines"
                  />
                  <span className="ml-1 autoAnimate text-text_Quaternary text-xs capitalize pr-[2px] md:text-sm text-nowrap w-full truncate font-lato-bold font-semibold md:font-semibold">
                    Mines
                  </span>
                </div>
                <div className="absolute top-0 left-0 w-full h-full min-h-9 rounded-[4px]"></div>
              </div>{" "}
            </span>
            <span title="Limbo" className="col-span-1 px-[3px] py-[3px]">
              <div
                className="relative w-full active:scale-95 cursor-pointer bg-bg_SkeletonBgLoaderColor transition-all ease-in-out duration-150 shadow-quickAccessBtnBoxShadows min-h-9 bg-cover bg-center bg-no-repeat rounded-[4px] overflow-hidden undefined"
                style={{
                  backgroundImage:
                    "url('https://promotions-material.s3.ap-south-1.amazonaws.com/sportsButtons/cricket-1696348461938')",
                }}
              >
                <div className="flex justify-center w-full h-full min-h-9 relative z-10 items-center min-w-[175px] sm:min-w-[240px] md:min-w-[280px] pl-[5px] pt-[2px] pb-[2px] pr-1 opacity-100">
                  <img
                    src="https://promotions-material.s3.ap-south-1.amazonaws.com/quickButtons/Aviator-1705911963125?q=20&amp;blur=2&amp;cs=tinysrgb&amp;w=400&amp;px=80&amp;auto=format"
                    width="16"
                    height="16"
                    className="w-4 h-4 sm:w-5 sm:h-5 ml-1 autoAnimate"
                    alt="Limbo-image"
                    loading="lazy"
                    title="Limbo"
                  />
                  <span className="ml-1 autoAnimate text-text_Quaternary text-xs capitalize pr-[2px] md:text-sm text-nowrap w-full truncate font-lato-bold font-semibold md:font-semibold">
                    Limbo
                  </span>
                </div>
                <div className="absolute top-0 left-0 w-full h-full min-h-9 rounded-[4px]"></div>
              </div>
            </span>
          </div>
          <div title="QuickButtons-4" className="grid grid-row-2">
            <span title="Color Game" className="col-span-1 px-[3px] py-[3px]">
              <div
                className="relative w-full active:scale-95 cursor-pointer bg-bg_SkeletonBgLoaderColor transition-all ease-in-out duration-150 shadow-quickAccessBtnBoxShadows min-h-9 bg-cover bg-center bg-no-repeat rounded-[4px] overflow-hidden undefined"
                style={{
                  backgroundImage:
                    "url('https://promotions-material.s3.ap-south-1.amazonaws.com/sportsButtons/cricket-1696348461938')",
                }}
              >
                <div className="flex justify-center w-full h-full min-h-9 relative z-10 items-center min-w-[175px] sm:min-w-[240px] md:min-w-[280px] pl-[5px] pt-[2px] pb-[2px] pr-1 opacity-100">
                  <img
                    src="https://promomaterial.imgix.net/quickButtons/ColorGame-1718191763431?q=20&amp;blur=2&amp;cs=tinysrgb&amp;w=400&amp;px=80&amp;auto=format"
                    width="16"
                    height="16"
                    className="w-4 h-4 sm:w-5 sm:h-5 ml-1 autoAnimate"
                    alt="Color Game-image"
                    loading="lazy"
                    title="Color Game"
                  />
                  <span className="ml-1 autoAnimate text-text_Quaternary text-xs capitalize pr-[2px] md:text-sm text-nowrap w-full truncate font-lato-bold font-semibold md:font-semibold">
                    Color Game
                  </span>
                </div>
                <div className="absolute top-0 left-0 w-full h-full min-h-9 rounded-[4px]"></div>
              </div>{" "}
            </span>
            <span
              title="Tower Legends"
              className="col-span-1 px-[3px] py-[3px]"
            >
              <div
                className="relative w-full active:scale-95 cursor-pointer bg-bg_SkeletonBgLoaderColor transition-all ease-in-out duration-150 shadow-quickAccessBtnBoxShadows min-h-9 bg-cover bg-center bg-no-repeat rounded-[4px] overflow-hidden undefined"
                style={{
                  backgroundImage:
                    "url('https://promotions-material.s3.ap-south-1.amazonaws.com/sportsButtons/cricket-1696348461938')",
                }}
              >
                <div className="flex justify-center w-full h-full min-h-9 relative z-10 items-center min-w-[175px] sm:min-w-[240px] md:min-w-[280px] pl-[5px] pt-[2px] pb-[2px] pr-1 opacity-100">
                  <img
                    src="https://promomaterial.imgix.net/quickButtons/TowerLegends-1722000145474?q=20&amp;blur=2&amp;cs=tinysrgb&amp;w=400&amp;px=80&amp;auto=format"
                    width="16"
                    height="16"
                    className="w-4 h-4 sm:w-5 sm:h-5 ml-1 autoAnimate"
                    alt="Tower Legends-image"
                    loading="lazy"
                    title="Tower Legends"
                  />
                  <span className="ml-1 autoAnimate text-text_Quaternary text-xs capitalize pr-[2px] md:text-sm text-nowrap w-full truncate font-lato-bold font-semibold md:font-semibold">
                    Tower Legends
                  </span>
                </div>
                <div className="absolute top-0 left-0 w-full h-full min-h-9 rounded-[4px]"></div>
              </div>
            </span>
          </div>
          <div title="QuickButtons-6" className="grid grid-row-2">
            <span title="Evolution" className="col-span-1 px-[3px] py-[3px]">
              <div
                className="relative w-full active:scale-95 cursor-pointer bg-bg_SkeletonBgLoaderColor transition-all ease-in-out duration-150 shadow-quickAccessBtnBoxShadows min-h-9 bg-cover bg-center bg-no-repeat rounded-[4px] overflow-hidden undefined"
                style={{
                  backgroundImage:
                    "url('https://promotions-material.s3.ap-south-1.amazonaws.com/sportsButtons/cricket-1696348461938')",
                }}
              >
                <div className="flex justify-center w-full h-full min-h-9 relative z-10 items-center min-w-[175px] sm:min-w-[240px] md:min-w-[280px] pl-[5px] pt-[2px] pb-[2px] pr-1 opacity-100">
                  <img
                    src="https://promotions-material.s3.ap-south-1.amazonaws.com/quickButtons/Evolution-1705911275817?q=20&amp;blur=2&amp;cs=tinysrgb&amp;w=400&amp;px=80&amp;auto=format"
                    width="16"
                    height="16"
                    className="w-4 h-4 sm:w-5 sm:h-5 ml-1 autoAnimate"
                    alt="Evolution-image"
                    loading="lazy"
                    title="Evolution"
                  />
                  <span className="ml-1 autoAnimate text-text_Quaternary text-xs capitalize pr-[2px] md:text-sm text-nowrap w-full truncate font-lato-bold font-semibold md:font-semibold">
                    Evolution
                  </span>
                </div>
                <div className="absolute top-0 left-0 w-full h-full min-h-9 rounded-[4px]"></div>
              </div>{" "}
            </span>
            <span title="Sportsbook" className="col-span-1 px-[3px] py-[3px]">
              <div
                className="relative w-full active:scale-95 cursor-pointer bg-bg_SkeletonBgLoaderColor transition-all ease-in-out duration-150 shadow-quickAccessBtnBoxShadows min-h-9 bg-cover bg-center bg-no-repeat rounded-[4px] overflow-hidden undefined"
                style={{
                  backgroundImage:
                    "url('https://promotions-material.s3.ap-south-1.amazonaws.com/sportsButtons/cricket-1696348461938')",
                }}
              >
                <div className="flex justify-center w-full h-full min-h-9 relative z-10 items-center min-w-[175px] sm:min-w-[240px] md:min-w-[280px] pl-[5px] pt-[2px] pb-[2px] pr-1 opacity-100">
                  <img
                    src="https://promotions-material.s3.ap-south-1.amazonaws.com/quickButtons/Sportsbook-1705911352029?q=20&amp;blur=2&amp;cs=tinysrgb&amp;w=400&amp;px=80&amp;auto=format"
                    width="16"
                    height="16"
                    className="w-4 h-4 sm:w-5 sm:h-5 ml-1 autoAnimate"
                    alt="Sportsbook-image"
                    loading="lazy"
                    title="Sportsbook"
                  />
                  <span className="ml-1 autoAnimate text-text_Quaternary text-xs capitalize pr-[2px] md:text-sm text-nowrap w-full truncate font-lato-bold font-semibold md:font-semibold">
                    Sportsbook
                  </span>
                </div>
                <div className="absolute top-0 left-0 w-full h-full min-h-9 rounded-[4px]"></div>
              </div>
            </span>
          </div>
          <div title="QuickButtons-8" className="grid grid-row-2">
            <span title="Live Casinos" className="col-span-1 px-[3px] py-[3px]">
              <div
                className="relative w-full active:scale-95 cursor-pointer bg-bg_SkeletonBgLoaderColor transition-all ease-in-out duration-150 shadow-quickAccessBtnBoxShadows min-h-9 bg-cover bg-center bg-no-repeat rounded-[4px] overflow-hidden undefined"
                style={{
                  backgroundImage:
                    "url('https://promotions-material.s3.ap-south-1.amazonaws.com/sportsButtons/cricket-1696348461938')",
                }}
              >
                <div className="flex justify-center w-full h-full min-h-9 relative z-10 items-center min-w-[175px] sm:min-w-[240px] md:min-w-[280px] pl-[5px] pt-[2px] pb-[2px] pr-1 opacity-100">
                  <img
                    src="https://promotions-material.s3.ap-south-1.amazonaws.com/quickButtons/LiveCasinos-1705911704279?q=20&amp;blur=2&amp;cs=tinysrgb&amp;w=400&amp;px=80&amp;auto=format"
                    width="16"
                    height="16"
                    className="w-4 h-4 sm:w-5 sm:h-5 ml-1 autoAnimate"
                    alt="Live Casinos-image"
                    loading="lazy"
                    title="Live Casinos"
                  />
                  <span className="ml-1 autoAnimate text-text_Quaternary text-xs capitalize pr-[2px] md:text-sm text-nowrap w-full truncate font-lato-bold font-semibold md:font-semibold">
                    Live Casinos
                  </span>
                </div>
                <div className="absolute top-0 left-0 w-full h-full min-h-9 rounded-[4px]"></div>
              </div>{" "}
            </span>
            <span title="e-Cricket" className="col-span-1 px-[3px] py-[3px]">
              <div
                className="relative w-full active:scale-95 cursor-pointer bg-bg_SkeletonBgLoaderColor transition-all ease-in-out duration-150 shadow-quickAccessBtnBoxShadows min-h-9 bg-cover bg-center bg-no-repeat rounded-[4px] overflow-hidden undefined"
                style={{
                  backgroundImage:
                    "url('https://promotions-material.s3.ap-south-1.amazonaws.com/sportsButtons/cricket-1696348461938')",
                }}
              >
                <div className="flex justify-center w-full h-full min-h-9 relative z-10 items-center min-w-[175px] sm:min-w-[240px] md:min-w-[280px] pl-[5px] pt-[2px] pb-[2px] pr-1 opacity-100">
                  <img
                    src="https://promotions-material.s3.ap-south-1.amazonaws.com/quickButtons/e-Cricket-1705911799122?q=20&amp;blur=2&amp;cs=tinysrgb&amp;w=400&amp;px=80&amp;auto=format"
                    width="16"
                    height="16"
                    className="w-4 h-4 sm:w-5 sm:h-5 ml-1 autoAnimate"
                    alt="e-Cricket-image"
                    loading="lazy"
                    title="e-Cricket"
                  />
                  <span className="ml-1 autoAnimate text-text_Quaternary text-xs capitalize pr-[2px] md:text-sm text-nowrap w-full truncate font-lato-bold font-semibold md:font-semibold">
                    e-Cricket
                  </span>
                </div>
                <div className="absolute top-0 left-0 w-full h-full min-h-9 rounded-[4px]"></div>
              </div>
            </span>
          </div>
          <div title="QuickButtons-10" className="grid grid-row-2">
            <span title="Card Games" className="col-span-1 px-[3px] py-[3px]">
              <div
                className="relative w-full active:scale-95 cursor-pointer bg-bg_SkeletonBgLoaderColor transition-all ease-in-out duration-150 shadow-quickAccessBtnBoxShadows min-h-9 bg-cover bg-center bg-no-repeat rounded-[4px] overflow-hidden undefined"
                style={{
                  backgroundImage:
                    "url('https://promotions-material.s3.ap-south-1.amazonaws.com/sportsButtons/cricket-1696348461938')",
                }}
              >
                <div className="flex justify-center w-full h-full min-h-9 relative z-10 items-center min-w-[175px] sm:min-w-[240px] md:min-w-[280px] pl-[5px] pt-[2px] pb-[2px] pr-1 opacity-100">
                  <img
                    src="https://promotions-material.s3.ap-south-1.amazonaws.com/quickButtons/CardGames-1705911853726?q=20&amp;blur=2&amp;cs=tinysrgb&amp;w=400&amp;px=80&amp;auto=format"
                    width="16"
                    height="16"
                    className="w-4 h-4 sm:w-5 sm:h-5 ml-1 autoAnimate"
                    alt="Card Games-image"
                    loading="lazy"
                    title="Card Games"
                  />
                  <span className="ml-1 autoAnimate text-text_Quaternary text-xs capitalize pr-[2px] md:text-sm text-nowrap w-full truncate font-lato-bold font-semibold md:font-semibold">
                    Card Games
                  </span>
                </div>
                <div className="absolute top-0 left-0 w-full h-full min-h-9 rounded-[4px]"></div>
              </div>{" "}
            </span>
            <span title="Slot Games" className="col-span-1 px-[3px] py-[3px]">
              <div
                className="relative w-full active:scale-95 cursor-pointer bg-bg_SkeletonBgLoaderColor transition-all ease-in-out duration-150 shadow-quickAccessBtnBoxShadows min-h-9 bg-cover bg-center bg-no-repeat rounded-[4px] overflow-hidden undefined"
                style={{
                  backgroundImage:
                    "url('https://promotions-material.s3.ap-south-1.amazonaws.com/sportsButtons/cricket-1696348461938')",
                }}
              >
                <div className="flex justify-center w-full h-full min-h-9 relative z-10 items-center min-w-[175px] sm:min-w-[240px] md:min-w-[280px] pl-[5px] pt-[2px] pb-[2px] pr-1 opacity-100">
                  <img
                    src="https://promotions-material.s3.ap-south-1.amazonaws.com/quickButtons/SlotGames-1705912015300?q=20&amp;blur=2&amp;cs=tinysrgb&amp;w=400&amp;px=80&amp;auto=format"
                    width="16"
                    height="16"
                    className="w-4 h-4 sm:w-5 sm:h-5 ml-1 autoAnimate"
                    alt="Slot Games-image"
                    loading="lazy"
                    title="Slot Games"
                  />
                  <span className="ml-1 autoAnimate text-text_Quaternary text-xs capitalize pr-[2px] md:text-sm text-nowrap w-full truncate font-lato-bold font-semibold md:font-semibold">
                    Slot Games
                  </span>
                </div>
                <div className="absolute top-0 left-0 w-full h-full min-h-9 rounded-[4px]"></div>
              </div>
            </span>
          </div>
          <div title="QuickButtons-12" className="grid grid-row-2">
            <span
              title="Multiplayer Games"
              className="col-span-1 px-[3px] py-[3px]"
            >
              <div
                className="relative w-full active:scale-95 cursor-pointer bg-bg_SkeletonBgLoaderColor transition-all ease-in-out duration-150 shadow-quickAccessBtnBoxShadows min-h-9 bg-cover bg-center bg-no-repeat rounded-[4px] overflow-hidden undefined"
                style={{
                  backgroundImage:
                    "url('https://promotions-material.s3.ap-south-1.amazonaws.com/sportsButtons/cricket-1696348461938')",
                }}
              >
                <div className="flex justify-center w-full h-full min-h-9 relative z-10 items-center min-w-[175px] sm:min-w-[240px] md:min-w-[280px] pl-[5px] pt-[2px] pb-[2px] pr-1 opacity-100">
                  <img
                    src="https://promotions-material.s3.ap-south-1.amazonaws.com/quickButtons/MultiplayerGames-1705912077489?q=20&amp;blur=2&amp;cs=tinysrgb&amp;w=400&amp;px=80&amp;auto=format"
                    width="16"
                    height="16"
                    className="w-4 h-4 sm:w-5 sm:h-5 ml-1 autoAnimate"
                    alt="Multiplayer Games-image"
                    loading="lazy"
                    title="Multiplayer Games"
                  />
                  <span className="ml-1 autoAnimate text-text_Quaternary text-xs capitalize pr-[2px] md:text-sm text-nowrap w-full truncate font-lato-bold font-semibold md:font-semibold">
                    Multiplayer Games
                  </span>
                </div>
                <div className="absolute top-0 left-0 w-full h-full min-h-9 rounded-[4px]"></div>
              </div>{" "}
            </span>
            <span
              title="Fishing games"
              className="col-span-1 px-[3px] py-[3px]"
            >
              <div
                className="relative w-full active:scale-95 cursor-pointer bg-bg_SkeletonBgLoaderColor transition-all ease-in-out duration-150 shadow-quickAccessBtnBoxShadows min-h-9 bg-cover bg-center bg-no-repeat rounded-[4px] overflow-hidden undefined"
                style={{
                  backgroundImage:
                    "url('https://promotions-material.s3.ap-south-1.amazonaws.com/sportsButtons/cricket-1696348461938')",
                }}
              >
                <div className="flex justify-center w-full h-full min-h-9 relative z-10 items-center min-w-[175px] sm:min-w-[240px] md:min-w-[280px] pl-[5px] pt-[2px] pb-[2px] pr-1 opacity-100">
                  <img
                    src="https://promotions-material.s3.ap-south-1.amazonaws.com/quickButtons/Fishinggames-1705912252627?q=20&amp;blur=2&amp;cs=tinysrgb&amp;w=400&amp;px=80&amp;auto=format"
                    width="16"
                    height="16"
                    className="w-4 h-4 sm:w-5 sm:h-5 ml-1 autoAnimate"
                    alt="Fishing games-image"
                    loading="lazy"
                    title="Fishing games"
                  />
                  <span className="ml-1 autoAnimate text-text_Quaternary text-xs capitalize pr-[2px] md:text-sm text-nowrap w-full truncate font-lato-bold font-semibold md:font-semibold">
                    Fishing games
                  </span>
                </div>
                <div className="absolute top-0 left-0 w-full h-full min-h-9 rounded-[4px]"></div>
              </div>
            </span>
          </div>
          <div title="QuickButtons-0" className="grid grid-row-2">
            <span title="Aviator" className="col-span-1 px-[3px] py-[3px]">
              <div
                className="relative w-full active:scale-95 cursor-pointer bg-bg_SkeletonBgLoaderColor transition-all ease-in-out duration-150 shadow-quickAccessBtnBoxShadows min-h-9 bg-cover bg-center bg-no-repeat rounded-[4px] overflow-hidden undefined"
                style={{
                  backgroundImage:
                    "url('https://promotions-material.s3.ap-south-1.amazonaws.com/sportsButtons/cricket-1696348461938')",
                }}
              >
                <div className="flex justify-center w-full h-full min-h-9 relative z-10 items-center min-w-[175px] sm:min-w-[240px] md:min-w-[280px] pl-[5px] pt-[2px] pb-[2px] pr-1 opacity-100">
                  <img
                    src="https://promotions-material.s3.ap-south-1.amazonaws.com/quickButtons/Aviator-1705911963125?q=20&amp;blur=2&amp;cs=tinysrgb&amp;w=400&amp;px=80&amp;auto=format"
                    width="16"
                    height="16"
                    className="w-4 h-4 sm:w-5 sm:h-5 ml-1 autoAnimate"
                    alt="Aviator-image"
                    loading="lazy"
                    title="Aviator"
                  />
                  <span className="ml-1 autoAnimate text-text_Quaternary text-xs capitalize pr-[2px] md:text-sm text-nowrap w-full truncate font-lato-bold font-semibold md:font-semibold">
                    Aviator
                  </span>
                </div>
                <div className="absolute top-0 left-0 w-full h-full min-h-9 rounded-[4px]"></div>
              </div>{" "}
            </span>
            <span title="Aura" className="col-span-1 px-[3px] py-[3px]">
              <div
                className="relative w-full active:scale-95 cursor-pointer bg-bg_SkeletonBgLoaderColor transition-all ease-in-out duration-150 shadow-quickAccessBtnBoxShadows min-h-9 bg-cover bg-center bg-no-repeat rounded-[4px] overflow-hidden undefined"
                style={{
                  backgroundImage:
                    "url('https://promotions-material.s3.ap-south-1.amazonaws.com/sportsButtons/cricket-1696348461938')",
                }}
              >
                <div className="flex justify-center w-full h-full min-h-9 relative z-10 items-center min-w-[175px] sm:min-w-[240px] md:min-w-[280px] pl-[5px] pt-[2px] pb-[2px] pr-1 opacity-100">
                  <img
                    src="https://promotions-material.s3.ap-south-1.amazonaws.com/quickButtons/Aura-1705912199647?q=20&amp;blur=2&amp;cs=tinysrgb&amp;w=400&amp;px=80&amp;auto=format"
                    width="16"
                    height="16"
                    className="w-4 h-4 sm:w-5 sm:h-5 ml-1 autoAnimate"
                    alt="Aura-image"
                    loading="lazy"
                    title="Aura"
                  />
                  <span className="ml-1 autoAnimate text-text_Quaternary text-xs capitalize pr-[2px] md:text-sm text-nowrap w-full truncate font-lato-bold font-semibold md:font-semibold">
                    Aura
                  </span>
                </div>
                <div className="absolute top-0 left-0 w-full h-full min-h-9 rounded-[4px]"></div>
              </div>
            </span>
          </div>
          <div title="QuickButtons-2" className="grid grid-row-2">
            <span title="Mines" className="col-span-1 px-[3px] py-[3px]">
              <div
                className="relative w-full active:scale-95 cursor-pointer bg-bg_SkeletonBgLoaderColor transition-all ease-in-out duration-150 shadow-quickAccessBtnBoxShadows min-h-9 bg-cover bg-center bg-no-repeat rounded-[4px] overflow-hidden undefined"
                style={{
                  backgroundImage:
                    "url('https://promotions-material.s3.ap-south-1.amazonaws.com/sportsButtons/cricket-1696348461938')",
                }}
              >
                <div className="flex justify-center w-full h-full min-h-9 relative z-10 items-center min-w-[175px] sm:min-w-[240px] md:min-w-[280px] pl-[5px] pt-[2px] pb-[2px] pr-1 opacity-100">
                  <img
                    src="https://promotions-material.s3.ap-south-1.amazonaws.com/quickButtons/diamond_icon.png?q=20&amp;blur=2&amp;cs=tinysrgb&amp;w=400&amp;px=80&amp;auto=format"
                    width="16"
                    height="16"
                    className="w-4 h-4 sm:w-5 sm:h-5 ml-1 autoAnimate"
                    alt="Mines-image"
                    loading="lazy"
                    title="Mines"
                  />
                  <span className="ml-1 autoAnimate text-text_Quaternary text-xs capitalize pr-[2px] md:text-sm text-nowrap w-full truncate font-lato-bold font-semibold md:font-semibold">
                    Mines
                  </span>
                </div>
                <div className="absolute top-0 left-0 w-full h-full min-h-9 rounded-[4px]"></div>
              </div>{" "}
            </span>
            <span title="Limbo" className="col-span-1 px-[3px] py-[3px]">
              <div
                className="relative w-full active:scale-95 cursor-pointer bg-bg_SkeletonBgLoaderColor transition-all ease-in-out duration-150 shadow-quickAccessBtnBoxShadows min-h-9 bg-cover bg-center bg-no-repeat rounded-[4px] overflow-hidden undefined"
                style={{
                  backgroundImage:
                    "url('https://promotions-material.s3.ap-south-1.amazonaws.com/sportsButtons/cricket-1696348461938')",
                }}
              >
                <div className="flex justify-center w-full h-full min-h-9 relative z-10 items-center min-w-[175px] sm:min-w-[240px] md:min-w-[280px] pl-[5px] pt-[2px] pb-[2px] pr-1 opacity-100">
                  <img
                    src="https://promotions-material.s3.ap-south-1.amazonaws.com/quickButtons/Aviator-1705911963125?q=20&amp;blur=2&amp;cs=tinysrgb&amp;w=400&amp;px=80&amp;auto=format"
                    width="16"
                    height="16"
                    className="w-4 h-4 sm:w-5 sm:h-5 ml-1 autoAnimate"
                    alt="Limbo-image"
                    loading="lazy"
                    title="Limbo"
                  />
                  <span className="ml-1 autoAnimate text-text_Quaternary text-xs capitalize pr-[2px] md:text-sm text-nowrap w-full truncate font-lato-bold font-semibold md:font-semibold">
                    Limbo
                  </span>
                </div>
                <div className="absolute top-0 left-0 w-full h-full min-h-9 rounded-[4px]"></div>
              </div>
            </span>
          </div>
          <div title="QuickButtons-4" className="grid grid-row-2">
            <span title="Color Game" className="col-span-1 px-[3px] py-[3px]">
              <div
                className="relative w-full active:scale-95 cursor-pointer bg-bg_SkeletonBgLoaderColor transition-all ease-in-out duration-150 shadow-quickAccessBtnBoxShadows min-h-9 bg-cover bg-center bg-no-repeat rounded-[4px] overflow-hidden undefined"
                style={{
                  backgroundImage:
                    "url('https://promotions-material.s3.ap-south-1.amazonaws.com/sportsButtons/cricket-1696348461938')",
                }}
              >
                <div className="flex justify-center w-full h-full min-h-9 relative z-10 items-center min-w-[175px] sm:min-w-[240px] md:min-w-[280px] pl-[5px] pt-[2px] pb-[2px] pr-1 opacity-100">
                  <img
                    src="https://promomaterial.imgix.net/quickButtons/ColorGame-1718191763431?q=20&amp;blur=2&amp;cs=tinysrgb&amp;w=400&amp;px=80&amp;auto=format"
                    width="16"
                    height="16"
                    className="w-4 h-4 sm:w-5 sm:h-5 ml-1 autoAnimate"
                    alt="Color Game-image"
                    loading="lazy"
                    title="Color Game"
                  />
                  <span className="ml-1 autoAnimate text-text_Quaternary text-xs capitalize pr-[2px] md:text-sm text-nowrap w-full truncate font-lato-bold font-semibold md:font-semibold">
                    Color Game
                  </span>
                </div>
                <div className="absolute top-0 left-0 w-full h-full min-h-9 rounded-[4px]"></div>
              </div>{" "}
            </span>
            <span
              title="Tower Legends"
              className="col-span-1 px-[3px] py-[3px]"
            >
              <div
                className="relative w-full active:scale-95 cursor-pointer bg-bg_SkeletonBgLoaderColor transition-all ease-in-out duration-150 shadow-quickAccessBtnBoxShadows min-h-9 bg-cover bg-center bg-no-repeat rounded-[4px] overflow-hidden undefined"
                style={{
                  backgroundImage:
                    "url('https://promotions-material.s3.ap-south-1.amazonaws.com/sportsButtons/cricket-1696348461938')",
                }}
              >
                <div className="flex justify-center w-full h-full min-h-9 relative z-10 items-center min-w-[175px] sm:min-w-[240px] md:min-w-[280px] pl-[5px] pt-[2px] pb-[2px] pr-1 opacity-100">
                  <img
                    src="https://promomaterial.imgix.net/quickButtons/TowerLegends-1722000145474?q=20&amp;blur=2&amp;cs=tinysrgb&amp;w=400&amp;px=80&amp;auto=format"
                    width="16"
                    height="16"
                    className="w-4 h-4 sm:w-5 sm:h-5 ml-1 autoAnimate"
                    alt="Tower Legends-image"
                    loading="lazy"
                    title="Tower Legends"
                  />
                  <span className="ml-1 autoAnimate text-text_Quaternary text-xs capitalize pr-[2px] md:text-sm text-nowrap w-full truncate font-lato-bold font-semibold md:font-semibold">
                    Tower Legends
                  </span>
                </div>
                <div className="absolute top-0 left-0 w-full h-full min-h-9 rounded-[4px]"></div>
              </div>
            </span>
          </div>
          <div title="QuickButtons-6" className="grid grid-row-2">
            <span title="Evolution" className="col-span-1 px-[3px] py-[3px]">
              <div
                className="relative w-full active:scale-95 cursor-pointer bg-bg_SkeletonBgLoaderColor transition-all ease-in-out duration-150 shadow-quickAccessBtnBoxShadows min-h-9 bg-cover bg-center bg-no-repeat rounded-[4px] overflow-hidden undefined"
                style={{
                  backgroundImage:
                    "url('https://promotions-material.s3.ap-south-1.amazonaws.com/sportsButtons/cricket-1696348461938')",
                }}
              >
                <div className="flex justify-center w-full h-full min-h-9 relative z-10 items-center min-w-[175px] sm:min-w-[240px] md:min-w-[280px] pl-[5px] pt-[2px] pb-[2px] pr-1 opacity-100">
                  <img
                    src="https://promotions-material.s3.ap-south-1.amazonaws.com/quickButtons/Evolution-1705911275817?q=20&amp;blur=2&amp;cs=tinysrgb&amp;w=400&amp;px=80&amp;auto=format"
                    width="16"
                    height="16"
                    className="w-4 h-4 sm:w-5 sm:h-5 ml-1 autoAnimate"
                    alt="Evolution-image"
                    loading="lazy"
                    title="Evolution"
                  />
                  <span className="ml-1 autoAnimate text-text_Quaternary text-xs capitalize pr-[2px] md:text-sm text-nowrap w-full truncate font-lato-bold font-semibold md:font-semibold">
                    Evolution
                  </span>
                </div>
                <div className="absolute top-0 left-0 w-full h-full min-h-9 rounded-[4px]"></div>
              </div>{" "}
            </span>
            <span title="Sportsbook" className="col-span-1 px-[3px] py-[3px]">
              <div
                className="relative w-full active:scale-95 cursor-pointer bg-bg_SkeletonBgLoaderColor transition-all ease-in-out duration-150 shadow-quickAccessBtnBoxShadows min-h-9 bg-cover bg-center bg-no-repeat rounded-[4px] overflow-hidden undefined"
                style={{
                  backgroundImage:
                    "url('https://promotions-material.s3.ap-south-1.amazonaws.com/sportsButtons/cricket-1696348461938')",
                }}
              >
                <div className="flex justify-center w-full h-full min-h-9 relative z-10 items-center min-w-[175px] sm:min-w-[240px] md:min-w-[280px] pl-[5px] pt-[2px] pb-[2px] pr-1 opacity-100">
                  <img
                    src="https://promotions-material.s3.ap-south-1.amazonaws.com/quickButtons/Sportsbook-1705911352029?q=20&amp;blur=2&amp;cs=tinysrgb&amp;w=400&amp;px=80&amp;auto=format"
                    width="16"
                    height="16"
                    className="w-4 h-4 sm:w-5 sm:h-5 ml-1 autoAnimate"
                    alt="Sportsbook-image"
                    loading="lazy"
                    title="Sportsbook"
                  />
                  <span className="ml-1 autoAnimate text-text_Quaternary text-xs capitalize pr-[2px] md:text-sm text-nowrap w-full truncate font-lato-bold font-semibold md:font-semibold">
                    Sportsbook
                  </span>
                </div>
                <div className="absolute top-0 left-0 w-full h-full min-h-9 rounded-[4px]"></div>
              </div>
            </span>
          </div>
          <div title="QuickButtons-8" className="grid grid-row-2">
            <span title="Live Casinos" className="col-span-1 px-[3px] py-[3px]">
              <div
                className="relative w-full active:scale-95 cursor-pointer bg-bg_SkeletonBgLoaderColor transition-all ease-in-out duration-150 shadow-quickAccessBtnBoxShadows min-h-9 bg-cover bg-center bg-no-repeat rounded-[4px] overflow-hidden undefined"
                style={{
                  backgroundImage:
                    "url('https://promotions-material.s3.ap-south-1.amazonaws.com/sportsButtons/cricket-1696348461938')",
                }}
              >
                <div className="flex justify-center w-full h-full min-h-9 relative z-10 items-center min-w-[175px] sm:min-w-[240px] md:min-w-[280px] pl-[5px] pt-[2px] pb-[2px] pr-1 opacity-100">
                  <img
                    src="https://promotions-material.s3.ap-south-1.amazonaws.com/quickButtons/LiveCasinos-1705911704279?q=20&amp;blur=2&amp;cs=tinysrgb&amp;w=400&amp;px=80&amp;auto=format"
                    width="16"
                    height="16"
                    className="w-4 h-4 sm:w-5 sm:h-5 ml-1 autoAnimate"
                    alt="Live Casinos-image"
                    loading="lazy"
                    title="Live Casinos"
                  />
                  <span className="ml-1 autoAnimate text-text_Quaternary text-xs capitalize pr-[2px] md:text-sm text-nowrap w-full truncate font-lato-bold font-semibold md:font-semibold">
                    Live Casinos
                  </span>
                </div>
                <div className="absolute top-0 left-0 w-full h-full min-h-9 rounded-[4px]"></div>
              </div>{" "}
            </span>
            <span title="e-Cricket" className="col-span-1 px-[3px] py-[3px]">
              <div
                className="relative w-full active:scale-95 cursor-pointer bg-bg_SkeletonBgLoaderColor transition-all ease-in-out duration-150 shadow-quickAccessBtnBoxShadows min-h-9 bg-cover bg-center bg-no-repeat rounded-[4px] overflow-hidden undefined"
                style={{
                  backgroundImage:
                    "url('https://promotions-material.s3.ap-south-1.amazonaws.com/sportsButtons/cricket-1696348461938')",
                }}
              >
                <div className="flex justify-center w-full h-full min-h-9 relative z-10 items-center min-w-[175px] sm:min-w-[240px] md:min-w-[280px] pl-[5px] pt-[2px] pb-[2px] pr-1 opacity-100">
                  <img
                    src="https://promotions-material.s3.ap-south-1.amazonaws.com/quickButtons/e-Cricket-1705911799122?q=20&amp;blur=2&amp;cs=tinysrgb&amp;w=400&amp;px=80&amp;auto=format"
                    width="16"
                    height="16"
                    className="w-4 h-4 sm:w-5 sm:h-5 ml-1 autoAnimate"
                    alt="e-Cricket-image"
                    loading="lazy"
                    title="e-Cricket"
                  />
                  <span className="ml-1 autoAnimate text-text_Quaternary text-xs capitalize pr-[2px] md:text-sm text-nowrap w-full truncate font-lato-bold font-semibold md:font-semibold">
                    e-Cricket
                  </span>
                </div>
                <div className="absolute top-0 left-0 w-full h-full min-h-9 rounded-[4px]"></div>
              </div>
            </span>
          </div>
          <div title="QuickButtons-10" className="grid grid-row-2">
            <span title="Card Games" className="col-span-1 px-[3px] py-[3px]">
              <div
                className="relative w-full active:scale-95 cursor-pointer bg-bg_SkeletonBgLoaderColor transition-all ease-in-out duration-150 shadow-quickAccessBtnBoxShadows min-h-9 bg-cover bg-center bg-no-repeat rounded-[4px] overflow-hidden undefined"
                style={{
                  backgroundImage:
                    "url('https://promotions-material.s3.ap-south-1.amazonaws.com/sportsButtons/cricket-1696348461938')",
                }}
              >
                <div className="flex justify-center w-full h-full min-h-9 relative z-10 items-center min-w-[175px] sm:min-w-[240px] md:min-w-[280px] pl-[5px] pt-[2px] pb-[2px] pr-1 opacity-100">
                  <img
                    src="https://promotions-material.s3.ap-south-1.amazonaws.com/quickButtons/CardGames-1705911853726?q=20&amp;blur=2&amp;cs=tinysrgb&amp;w=400&amp;px=80&amp;auto=format"
                    width="16"
                    height="16"
                    className="w-4 h-4 sm:w-5 sm:h-5 ml-1 autoAnimate"
                    alt="Card Games-image"
                    loading="lazy"
                    title="Card Games"
                  />
                  <span className="ml-1 autoAnimate text-text_Quaternary text-xs capitalize pr-[2px] md:text-sm text-nowrap w-full truncate font-lato-bold font-semibold md:font-semibold">
                    Card Games
                  </span>
                </div>
                <div className="absolute top-0 left-0 w-full h-full min-h-9 rounded-[4px]"></div>
              </div>{" "}
            </span>
            <span title="Slot Games" className="col-span-1 px-[3px] py-[3px]">
              <div
                className="relative w-full active:scale-95 cursor-pointer bg-bg_SkeletonBgLoaderColor transition-all ease-in-out duration-150 shadow-quickAccessBtnBoxShadows min-h-9 bg-cover bg-center bg-no-repeat rounded-[4px] overflow-hidden undefined"
                style={{
                  backgroundImage:
                    "url('https://promotions-material.s3.ap-south-1.amazonaws.com/sportsButtons/cricket-1696348461938')",
                }}
              >
                <div className="flex justify-center w-full h-full min-h-9 relative z-10 items-center min-w-[175px] sm:min-w-[240px] md:min-w-[280px] pl-[5px] pt-[2px] pb-[2px] pr-1 opacity-100">
                  <img
                    src="https://promotions-material.s3.ap-south-1.amazonaws.com/quickButtons/SlotGames-1705912015300?q=20&amp;blur=2&amp;cs=tinysrgb&amp;w=400&amp;px=80&amp;auto=format"
                    width="16"
                    height="16"
                    className="w-4 h-4 sm:w-5 sm:h-5 ml-1 autoAnimate"
                    alt="Slot Games-image"
                    loading="lazy"
                    title="Slot Games"
                  />
                  <span className="ml-1 autoAnimate text-text_Quaternary text-xs capitalize pr-[2px] md:text-sm text-nowrap w-full truncate font-lato-bold font-semibold md:font-semibold">
                    Slot Games
                  </span>
                </div>
                <div className="absolute top-0 left-0 w-full h-full min-h-9 rounded-[4px]"></div>
              </div>
            </span>
          </div>
          <div title="QuickButtons-12" className="grid grid-row-2">
            <span
              title="Multiplayer Games"
              className="col-span-1 px-[3px] py-[3px]"
            >
              <div
                className="relative w-full active:scale-95 cursor-pointer bg-bg_SkeletonBgLoaderColor transition-all ease-in-out duration-150 shadow-quickAccessBtnBoxShadows min-h-9 bg-cover bg-center bg-no-repeat rounded-[4px] overflow-hidden undefined"
                style={{
                  backgroundImage:
                    "url('https://promotions-material.s3.ap-south-1.amazonaws.com/sportsButtons/cricket-1696348461938')",
                }}
              >
                <div className="flex justify-center w-full h-full min-h-9 relative z-10 items-center min-w-[175px] sm:min-w-[240px] md:min-w-[280px] pl-[5px] pt-[2px] pb-[2px] pr-1 opacity-100">
                  <img
                    src="https://promotions-material.s3.ap-south-1.amazonaws.com/quickButtons/MultiplayerGames-1705912077489?q=20&amp;blur=2&amp;cs=tinysrgb&amp;w=400&amp;px=80&amp;auto=format"
                    width="16"
                    height="16"
                    className="w-4 h-4 sm:w-5 sm:h-5 ml-1 autoAnimate"
                    alt="Multiplayer Games-image"
                    loading="lazy"
                    title="Multiplayer Games"
                  />
                  <span className="ml-1 autoAnimate text-text_Quaternary text-xs capitalize pr-[2px] md:text-sm text-nowrap w-full truncate font-lato-bold font-semibold md:font-semibold">
                    Multiplayer Games
                  </span>
                </div>
                <div className="absolute top-0 left-0 w-full h-full min-h-9 rounded-[4px]"></div>
              </div>{" "}
            </span>
            <span
              title="Fishing games"
              className="col-span-1 px-[3px] py-[3px]"
            >
              <div
                className="relative w-full active:scale-95 cursor-pointer bg-bg_SkeletonBgLoaderColor transition-all ease-in-out duration-150 shadow-quickAccessBtnBoxShadows min-h-9 bg-cover bg-center bg-no-repeat rounded-[4px] overflow-hidden undefined"
                style={{
                  backgroundImage:
                    "url('https://promotions-material.s3.ap-south-1.amazonaws.com/sportsButtons/cricket-1696348461938')",
                }}
              >
                <div className="flex justify-center w-full h-full min-h-9 relative z-10 items-center min-w-[175px] sm:min-w-[240px] md:min-w-[280px] pl-[5px] pt-[2px] pb-[2px] pr-1 opacity-100">
                  <img
                    src="https://promotions-material.s3.ap-south-1.amazonaws.com/quickButtons/Fishinggames-1705912252627?q=20&amp;blur=2&amp;cs=tinysrgb&amp;w=400&amp;px=80&amp;auto=format"
                    width="16"
                    height="16"
                    className="w-4 h-4 sm:w-5 sm:h-5 ml-1 autoAnimate"
                    alt="Fishing games-image"
                    loading="lazy"
                    title="Fishing games"
                  />
                  <span className="ml-1 autoAnimate text-text_Quaternary text-xs capitalize pr-[2px] md:text-sm text-nowrap w-full truncate font-lato-bold font-semibold md:font-semibold">
                    Fishing games
                  </span>
                </div>
                <div className="absolute top-0 left-0 w-full h-full min-h-9 rounded-[4px]"></div>
              </div>
            </span>
          </div>
          <div title="QuickButtons-0" className="grid grid-row-2">
            <span title="Aviator" className="col-span-1 px-[3px] py-[3px]">
              <div
                className="relative w-full active:scale-95 cursor-pointer bg-bg_SkeletonBgLoaderColor transition-all ease-in-out duration-150 shadow-quickAccessBtnBoxShadows min-h-9 bg-cover bg-center bg-no-repeat rounded-[4px] overflow-hidden undefined"
                style={{
                  backgroundImage:
                    "url('https://promotions-material.s3.ap-south-1.amazonaws.com/sportsButtons/cricket-1696348461938')",
                }}
              >
                <div className="flex justify-center w-full h-full min-h-9 relative z-10 items-center min-w-[175px] sm:min-w-[240px] md:min-w-[280px] pl-[5px] pt-[2px] pb-[2px] pr-1 opacity-100">
                  <img
                    src="https://promotions-material.s3.ap-south-1.amazonaws.com/quickButtons/Aviator-1705911963125?q=20&amp;blur=2&amp;cs=tinysrgb&amp;w=400&amp;px=80&amp;auto=format"
                    width="16"
                    height="16"
                    className="w-4 h-4 sm:w-5 sm:h-5 ml-1 autoAnimate"
                    alt="Aviator-image"
                    loading="lazy"
                    title="Aviator"
                  />
                  <span className="ml-1 autoAnimate text-text_Quaternary text-xs capitalize pr-[2px] md:text-sm text-nowrap w-full truncate font-lato-bold font-semibold md:font-semibold">
                    Aviator
                  </span>
                </div>
                <div className="absolute top-0 left-0 w-full h-full min-h-9 rounded-[4px]"></div>
              </div>{" "}
            </span>
            <span title="Aura" className="col-span-1 px-[3px] py-[3px]">
              <div
                className="relative w-full active:scale-95 cursor-pointer bg-bg_SkeletonBgLoaderColor transition-all ease-in-out duration-150 shadow-quickAccessBtnBoxShadows min-h-9 bg-cover bg-center bg-no-repeat rounded-[4px] overflow-hidden undefined"
                style={{
                  backgroundImage:
                    "url('https://promotions-material.s3.ap-south-1.amazonaws.com/sportsButtons/cricket-1696348461938')",
                }}
              >
                <div className="flex justify-center w-full h-full min-h-9 relative z-10 items-center min-w-[175px] sm:min-w-[240px] md:min-w-[280px] pl-[5px] pt-[2px] pb-[2px] pr-1 opacity-100">
                  <img
                    src="https://promotions-material.s3.ap-south-1.amazonaws.com/quickButtons/Aura-1705912199647?q=20&amp;blur=2&amp;cs=tinysrgb&amp;w=400&amp;px=80&amp;auto=format"
                    width="16"
                    height="16"
                    className="w-4 h-4 sm:w-5 sm:h-5 ml-1 autoAnimate"
                    alt="Aura-image"
                    loading="lazy"
                    title="Aura"
                  />
                  <span className="ml-1 autoAnimate text-text_Quaternary text-xs capitalize pr-[2px] md:text-sm text-nowrap w-full truncate font-lato-bold font-semibold md:font-semibold">
                    Aura
                  </span>
                </div>
                <div className="absolute top-0 left-0 w-full h-full min-h-9 rounded-[4px]"></div>
              </div>
            </span>
          </div>
          <div title="QuickButtons-2" className="grid grid-row-2">
            <span title="Mines" className="col-span-1 px-[3px] py-[3px]">
              <div
                className="relative w-full active:scale-95 cursor-pointer bg-bg_SkeletonBgLoaderColor transition-all ease-in-out duration-150 shadow-quickAccessBtnBoxShadows min-h-9 bg-cover bg-center bg-no-repeat rounded-[4px] overflow-hidden undefined"
                style={{
                  backgroundImage:
                    "url('https://promotions-material.s3.ap-south-1.amazonaws.com/sportsButtons/cricket-1696348461938')",
                }}
              >
                <div className="flex justify-center w-full h-full min-h-9 relative z-10 items-center min-w-[175px] sm:min-w-[240px] md:min-w-[280px] pl-[5px] pt-[2px] pb-[2px] pr-1 opacity-100">
                  <img
                    src="https://promotions-material.s3.ap-south-1.amazonaws.com/quickButtons/diamond_icon.png?q=20&amp;blur=2&amp;cs=tinysrgb&amp;w=400&amp;px=80&amp;auto=format"
                    width="16"
                    height="16"
                    className="w-4 h-4 sm:w-5 sm:h-5 ml-1 autoAnimate"
                    alt="Mines-image"
                    loading="lazy"
                    title="Mines"
                  />
                  <span className="ml-1 autoAnimate text-text_Quaternary text-xs capitalize pr-[2px] md:text-sm text-nowrap w-full truncate font-lato-bold font-semibold md:font-semibold">
                    Mines
                  </span>
                </div>
                <div className="absolute top-0 left-0 w-full h-full min-h-9 rounded-[4px]"></div>
              </div>{" "}
            </span>
            <span title="Limbo" className="col-span-1 px-[3px] py-[3px]">
              <div
                className="relative w-full active:scale-95 cursor-pointer bg-bg_SkeletonBgLoaderColor transition-all ease-in-out duration-150 shadow-quickAccessBtnBoxShadows min-h-9 bg-cover bg-center bg-no-repeat rounded-[4px] overflow-hidden undefined"
                style={{
                  backgroundImage:
                    "url('https://promotions-material.s3.ap-south-1.amazonaws.com/sportsButtons/cricket-1696348461938')",
                }}
              >
                <div className="flex justify-center w-full h-full min-h-9 relative z-10 items-center min-w-[175px] sm:min-w-[240px] md:min-w-[280px] pl-[5px] pt-[2px] pb-[2px] pr-1 opacity-100">
                  <img
                    src="https://promotions-material.s3.ap-south-1.amazonaws.com/quickButtons/Aviator-1705911963125?q=20&amp;blur=2&amp;cs=tinysrgb&amp;w=400&amp;px=80&amp;auto=format"
                    width="16"
                    height="16"
                    className="w-4 h-4 sm:w-5 sm:h-5 ml-1 autoAnimate"
                    alt="Limbo-image"
                    loading="lazy"
                    title="Limbo"
                  />
                  <span className="ml-1 autoAnimate text-text_Quaternary text-xs capitalize pr-[2px] md:text-sm text-nowrap w-full truncate font-lato-bold font-semibold md:font-semibold">
                    Limbo
                  </span>
                </div>
                <div className="absolute top-0 left-0 w-full h-full min-h-9 rounded-[4px]"></div>
              </div>
            </span>
          </div>
          <div title="QuickButtons-4" className="grid grid-row-2">
            <span title="Color Game" className="col-span-1 px-[3px] py-[3px]">
              <div
                className="relative w-full active:scale-95 cursor-pointer bg-bg_SkeletonBgLoaderColor transition-all ease-in-out duration-150 shadow-quickAccessBtnBoxShadows min-h-9 bg-cover bg-center bg-no-repeat rounded-[4px] overflow-hidden undefined"
                style={{
                  backgroundImage:
                    "url('https://promotions-material.s3.ap-south-1.amazonaws.com/sportsButtons/cricket-1696348461938')",
                }}
              >
                <div className="flex justify-center w-full h-full min-h-9 relative z-10 items-center min-w-[175px] sm:min-w-[240px] md:min-w-[280px] pl-[5px] pt-[2px] pb-[2px] pr-1 opacity-100">
                  <img
                    src="https://promomaterial.imgix.net/quickButtons/ColorGame-1718191763431?q=20&amp;blur=2&amp;cs=tinysrgb&amp;w=400&amp;px=80&amp;auto=format"
                    width="16"
                    height="16"
                    className="w-4 h-4 sm:w-5 sm:h-5 ml-1 autoAnimate"
                    alt="Color Game-image"
                    loading="lazy"
                    title="Color Game"
                  />
                  <span className="ml-1 autoAnimate text-text_Quaternary text-xs capitalize pr-[2px] md:text-sm text-nowrap w-full truncate font-lato-bold font-semibold md:font-semibold">
                    Color Game
                  </span>
                </div>
                <div className="absolute top-0 left-0 w-full h-full min-h-9 rounded-[4px]"></div>
              </div>{" "}
            </span>
            <span
              title="Tower Legends"
              className="col-span-1 px-[3px] py-[3px]"
            >
              <div
                className="relative w-full active:scale-95 cursor-pointer bg-bg_SkeletonBgLoaderColor transition-all ease-in-out duration-150 shadow-quickAccessBtnBoxShadows min-h-9 bg-cover bg-center bg-no-repeat rounded-[4px] overflow-hidden undefined"
                style={{
                  backgroundImage:
                    "url('https://promotions-material.s3.ap-south-1.amazonaws.com/sportsButtons/cricket-1696348461938')",
                }}
              >
                <div className="flex justify-center w-full h-full min-h-9 relative z-10 items-center min-w-[175px] sm:min-w-[240px] md:min-w-[280px] pl-[5px] pt-[2px] pb-[2px] pr-1 opacity-100">
                  <img
                    src="https://promomaterial.imgix.net/quickButtons/TowerLegends-1722000145474?q=20&amp;blur=2&amp;cs=tinysrgb&amp;w=400&amp;px=80&amp;auto=format"
                    width="16"
                    height="16"
                    className="w-4 h-4 sm:w-5 sm:h-5 ml-1 autoAnimate"
                    alt="Tower Legends-image"
                    loading="lazy"
                    title="Tower Legends"
                  />
                  <span className="ml-1 autoAnimate text-text_Quaternary text-xs capitalize pr-[2px] md:text-sm text-nowrap w-full truncate font-lato-bold font-semibold md:font-semibold">
                    Tower Legends
                  </span>
                </div>
                <div className="absolute top-0 left-0 w-full h-full min-h-9 rounded-[4px]"></div>
              </div>
            </span>
          </div>
          <div title="QuickButtons-6" className="grid grid-row-2">
            <span title="Evolution" className="col-span-1 px-[3px] py-[3px]">
              <div
                className="relative w-full active:scale-95 cursor-pointer bg-bg_SkeletonBgLoaderColor transition-all ease-in-out duration-150 shadow-quickAccessBtnBoxShadows min-h-9 bg-cover bg-center bg-no-repeat rounded-[4px] overflow-hidden undefined"
                style={{
                  backgroundImage:
                    "url('https://promotions-material.s3.ap-south-1.amazonaws.com/sportsButtons/cricket-1696348461938')",
                }}
              >
                <div className="flex justify-center w-full h-full min-h-9 relative z-10 items-center min-w-[175px] sm:min-w-[240px] md:min-w-[280px] pl-[5px] pt-[2px] pb-[2px] pr-1 opacity-100">
                  <img
                    src="https://promotions-material.s3.ap-south-1.amazonaws.com/quickButtons/Evolution-1705911275817?q=20&amp;blur=2&amp;cs=tinysrgb&amp;w=400&amp;px=80&amp;auto=format"
                    width="16"
                    height="16"
                    className="w-4 h-4 sm:w-5 sm:h-5 ml-1 autoAnimate"
                    alt="Evolution-image"
                    loading="lazy"
                    title="Evolution"
                  />
                  <span className="ml-1 autoAnimate text-text_Quaternary text-xs capitalize pr-[2px] md:text-sm text-nowrap w-full truncate font-lato-bold font-semibold md:font-semibold">
                    Evolution
                  </span>
                </div>
                <div className="absolute top-0 left-0 w-full h-full min-h-9 rounded-[4px]"></div>
              </div>{" "}
            </span>
            <span title="Sportsbook" className="col-span-1 px-[3px] py-[3px]">
              <div
                className="relative w-full active:scale-95 cursor-pointer bg-bg_SkeletonBgLoaderColor transition-all ease-in-out duration-150 shadow-quickAccessBtnBoxShadows min-h-9 bg-cover bg-center bg-no-repeat rounded-[4px] overflow-hidden undefined"
                style={{
                  backgroundImage:
                    "url('https://promotions-material.s3.ap-south-1.amazonaws.com/sportsButtons/cricket-1696348461938')",
                }}
              >
                <div className="flex justify-center w-full h-full min-h-9 relative z-10 items-center min-w-[175px] sm:min-w-[240px] md:min-w-[280px] pl-[5px] pt-[2px] pb-[2px] pr-1 opacity-100">
                  <img
                    src="https://promotions-material.s3.ap-south-1.amazonaws.com/quickButtons/Sportsbook-1705911352029?q=20&amp;blur=2&amp;cs=tinysrgb&amp;w=400&amp;px=80&amp;auto=format"
                    width="16"
                    height="16"
                    className="w-4 h-4 sm:w-5 sm:h-5 ml-1 autoAnimate"
                    alt="Sportsbook-image"
                    loading="lazy"
                    title="Sportsbook"
                  />
                  <span className="ml-1 autoAnimate text-text_Quaternary text-xs capitalize pr-[2px] md:text-sm text-nowrap w-full truncate font-lato-bold font-semibold md:font-semibold">
                    Sportsbook
                  </span>
                </div>
                <div className="absolute top-0 left-0 w-full h-full min-h-9 rounded-[4px]"></div>
              </div>
            </span>
          </div>
          <div title="QuickButtons-8" className="grid grid-row-2">
            <span title="Live Casinos" className="col-span-1 px-[3px] py-[3px]">
              <div
                className="relative w-full active:scale-95 cursor-pointer bg-bg_SkeletonBgLoaderColor transition-all ease-in-out duration-150 shadow-quickAccessBtnBoxShadows min-h-9 bg-cover bg-center bg-no-repeat rounded-[4px] overflow-hidden undefined"
                style={{
                  backgroundImage:
                    "url('https://promotions-material.s3.ap-south-1.amazonaws.com/sportsButtons/cricket-1696348461938')",
                }}
              >
                <div className="flex justify-center w-full h-full min-h-9 relative z-10 items-center min-w-[175px] sm:min-w-[240px] md:min-w-[280px] pl-[5px] pt-[2px] pb-[2px] pr-1 opacity-100">
                  <img
                    src="https://promotions-material.s3.ap-south-1.amazonaws.com/quickButtons/LiveCasinos-1705911704279?q=20&amp;blur=2&amp;cs=tinysrgb&amp;w=400&amp;px=80&amp;auto=format"
                    width="16"
                    height="16"
                    className="w-4 h-4 sm:w-5 sm:h-5 ml-1 autoAnimate"
                    alt="Live Casinos-image"
                    loading="lazy"
                    title="Live Casinos"
                  />
                  <span className="ml-1 autoAnimate text-text_Quaternary text-xs capitalize pr-[2px] md:text-sm text-nowrap w-full truncate font-lato-bold font-semibold md:font-semibold">
                    Live Casinos
                  </span>
                </div>
                <div className="absolute top-0 left-0 w-full h-full min-h-9 rounded-[4px]"></div>
              </div>{" "}
            </span>
            <span title="e-Cricket" className="col-span-1 px-[3px] py-[3px]">
              <div
                className="relative w-full active:scale-95 cursor-pointer bg-bg_SkeletonBgLoaderColor transition-all ease-in-out duration-150 shadow-quickAccessBtnBoxShadows min-h-9 bg-cover bg-center bg-no-repeat rounded-[4px] overflow-hidden undefined"
                style={{
                  backgroundImage:
                    "url('https://promotions-material.s3.ap-south-1.amazonaws.com/sportsButtons/cricket-1696348461938')",
                }}
              >
                <div className="flex justify-center w-full h-full min-h-9 relative z-10 items-center min-w-[175px] sm:min-w-[240px] md:min-w-[280px] pl-[5px] pt-[2px] pb-[2px] pr-1 opacity-100">
                  <img
                    src="https://promotions-material.s3.ap-south-1.amazonaws.com/quickButtons/e-Cricket-1705911799122?q=20&amp;blur=2&amp;cs=tinysrgb&amp;w=400&amp;px=80&amp;auto=format"
                    width="16"
                    height="16"
                    className="w-4 h-4 sm:w-5 sm:h-5 ml-1 autoAnimate"
                    alt="e-Cricket-image"
                    loading="lazy"
                    title="e-Cricket"
                  />
                  <span className="ml-1 autoAnimate text-text_Quaternary text-xs capitalize pr-[2px] md:text-sm text-nowrap w-full truncate font-lato-bold font-semibold md:font-semibold">
                    e-Cricket
                  </span>
                </div>
                <div className="absolute top-0 left-0 w-full h-full min-h-9 rounded-[4px]"></div>
              </div>
            </span>
          </div>
          <div title="QuickButtons-10" className="grid grid-row-2">
            <span title="Card Games" className="col-span-1 px-[3px] py-[3px]">
              <div
                className="relative w-full active:scale-95 cursor-pointer bg-bg_SkeletonBgLoaderColor transition-all ease-in-out duration-150 shadow-quickAccessBtnBoxShadows min-h-9 bg-cover bg-center bg-no-repeat rounded-[4px] overflow-hidden undefined"
                style={{
                  backgroundImage:
                    "url('https://promotions-material.s3.ap-south-1.amazonaws.com/sportsButtons/cricket-1696348461938')",
                }}
              >
                <div className="flex justify-center w-full h-full min-h-9 relative z-10 items-center min-w-[175px] sm:min-w-[240px] md:min-w-[280px] pl-[5px] pt-[2px] pb-[2px] pr-1 opacity-100">
                  <img
                    src="https://promotions-material.s3.ap-south-1.amazonaws.com/quickButtons/CardGames-1705911853726?q=20&amp;blur=2&amp;cs=tinysrgb&amp;w=400&amp;px=80&amp;auto=format"
                    width="16"
                    height="16"
                    className="w-4 h-4 sm:w-5 sm:h-5 ml-1 autoAnimate"
                    alt="Card Games-image"
                    loading="lazy"
                    title="Card Games"
                  />
                  <span className="ml-1 autoAnimate text-text_Quaternary text-xs capitalize pr-[2px] md:text-sm text-nowrap w-full truncate font-lato-bold font-semibold md:font-semibold">
                    Card Games
                  </span>
                </div>
                <div className="absolute top-0 left-0 w-full h-full min-h-9 rounded-[4px]"></div>
              </div>{" "}
            </span>
            <span title="Slot Games" className="col-span-1 px-[3px] py-[3px]">
              <div
                className="relative w-full active:scale-95 cursor-pointer bg-bg_SkeletonBgLoaderColor transition-all ease-in-out duration-150 shadow-quickAccessBtnBoxShadows min-h-9 bg-cover bg-center bg-no-repeat rounded-[4px] overflow-hidden undefined"
                style={{
                  backgroundImage:
                    "url('https://promotions-material.s3.ap-south-1.amazonaws.com/sportsButtons/cricket-1696348461938')",
                }}
              >
                <div className="flex justify-center w-full h-full min-h-9 relative z-10 items-center min-w-[175px] sm:min-w-[240px] md:min-w-[280px] pl-[5px] pt-[2px] pb-[2px] pr-1 opacity-100">
                  <img
                    src="https://promotions-material.s3.ap-south-1.amazonaws.com/quickButtons/SlotGames-1705912015300?q=20&amp;blur=2&amp;cs=tinysrgb&amp;w=400&amp;px=80&amp;auto=format"
                    width="16"
                    height="16"
                    className="w-4 h-4 sm:w-5 sm:h-5 ml-1 autoAnimate"
                    alt="Slot Games-image"
                    loading="lazy"
                    title="Slot Games"
                  />
                  <span className="ml-1 autoAnimate text-text_Quaternary text-xs capitalize pr-[2px] md:text-sm text-nowrap w-full truncate font-lato-bold font-semibold md:font-semibold">
                    Slot Games
                  </span>
                </div>
                <div className="absolute top-0 left-0 w-full h-full min-h-9 rounded-[4px]"></div>
              </div>
            </span>
          </div>
          <div title="QuickButtons-12" className="grid grid-row-2">
            <span
              title="Multiplayer Games"
              className="col-span-1 px-[3px] py-[3px]"
            >
              <div
                className="relative w-full active:scale-95 cursor-pointer bg-bg_SkeletonBgLoaderColor transition-all ease-in-out duration-150 shadow-quickAccessBtnBoxShadows min-h-9 bg-cover bg-center bg-no-repeat rounded-[4px] overflow-hidden undefined"
                style={{
                  backgroundImage:
                    "url('https://promotions-material.s3.ap-south-1.amazonaws.com/sportsButtons/cricket-1696348461938')",
                }}
              >
                <div className="flex justify-center w-full h-full min-h-9 relative z-10 items-center min-w-[175px] sm:min-w-[240px] md:min-w-[280px] pl-[5px] pt-[2px] pb-[2px] pr-1 opacity-100">
                  <img
                    src="https://promotions-material.s3.ap-south-1.amazonaws.com/quickButtons/MultiplayerGames-1705912077489?q=20&amp;blur=2&amp;cs=tinysrgb&amp;w=400&amp;px=80&amp;auto=format"
                    width="16"
                    height="16"
                    className="w-4 h-4 sm:w-5 sm:h-5 ml-1 autoAnimate"
                    alt="Multiplayer Games-image"
                    loading="lazy"
                    title="Multiplayer Games"
                  />
                  <span className="ml-1 autoAnimate text-text_Quaternary text-xs capitalize pr-[2px] md:text-sm text-nowrap w-full truncate font-lato-bold font-semibold md:font-semibold">
                    Multiplayer Games
                  </span>
                </div>
                <div className="absolute top-0 left-0 w-full h-full min-h-9 rounded-[4px]"></div>
              </div>{" "}
            </span>
            <span
              title="Fishing games"
              className="col-span-1 px-[3px] py-[3px]"
            >
              <div
                className="relative w-full active:scale-95 cursor-pointer bg-bg_SkeletonBgLoaderColor transition-all ease-in-out duration-150 shadow-quickAccessBtnBoxShadows min-h-9 bg-cover bg-center bg-no-repeat rounded-[4px] overflow-hidden undefined"
                style={{
                  backgroundImage:
                    "url('https://promotions-material.s3.ap-south-1.amazonaws.com/sportsButtons/cricket-1696348461938')",
                }}
              >
                <div className="flex justify-center w-full h-full min-h-9 relative z-10 items-center min-w-[175px] sm:min-w-[240px] md:min-w-[280px] pl-[5px] pt-[2px] pb-[2px] pr-1 opacity-100">
                  <img
                    src="https://promotions-material.s3.ap-south-1.amazonaws.com/quickButtons/Fishinggames-1705912252627?q=20&amp;blur=2&amp;cs=tinysrgb&amp;w=400&amp;px=80&amp;auto=format"
                    width="16"
                    height="16"
                    className="w-4 h-4 sm:w-5 sm:h-5 ml-1 autoAnimate"
                    alt="Fishing games-image"
                    loading="lazy"
                    title="Fishing games"
                  />
                  <span className="ml-1 autoAnimate text-text_Quaternary text-xs capitalize pr-[2px] md:text-sm text-nowrap w-full truncate font-lato-bold font-semibold md:font-semibold">
                    Fishing games
                  </span>
                </div>
                <div className="absolute top-0 left-0 w-full h-full min-h-9 rounded-[4px]"></div>
              </div>
            </span>
          </div>
          <div title="QuickButtons-0" className="grid grid-row-2">
            <span title="Aviator" className="col-span-1 px-[3px] py-[3px]">
              <div
                className="relative w-full active:scale-95 cursor-pointer bg-bg_SkeletonBgLoaderColor transition-all ease-in-out duration-150 shadow-quickAccessBtnBoxShadows min-h-9 bg-cover bg-center bg-no-repeat rounded-[4px] overflow-hidden undefined"
                style={{
                  backgroundImage:
                    "url('https://promotions-material.s3.ap-south-1.amazonaws.com/sportsButtons/cricket-1696348461938')",
                }}
              >
                <div className="flex justify-center w-full h-full min-h-9 relative z-10 items-center min-w-[175px] sm:min-w-[240px] md:min-w-[280px] pl-[5px] pt-[2px] pb-[2px] pr-1 opacity-100">
                  <img
                    src="https://promotions-material.s3.ap-south-1.amazonaws.com/quickButtons/Aviator-1705911963125?q=20&amp;blur=2&amp;cs=tinysrgb&amp;w=400&amp;px=80&amp;auto=format"
                    width="16"
                    height="16"
                    className="w-4 h-4 sm:w-5 sm:h-5 ml-1 autoAnimate"
                    alt="Aviator-image"
                    loading="lazy"
                    title="Aviator"
                  />
                  <span className="ml-1 autoAnimate text-text_Quaternary text-xs capitalize pr-[2px] md:text-sm text-nowrap w-full truncate font-lato-bold font-semibold md:font-semibold">
                    Aviator
                  </span>
                </div>
                <div className="absolute top-0 left-0 w-full h-full min-h-9 rounded-[4px]"></div>
              </div>{" "}
            </span>
            <span title="Aura" className="col-span-1 px-[3px] py-[3px]">
              <div
                className="relative w-full active:scale-95 cursor-pointer bg-bg_SkeletonBgLoaderColor transition-all ease-in-out duration-150 shadow-quickAccessBtnBoxShadows min-h-9 bg-cover bg-center bg-no-repeat rounded-[4px] overflow-hidden undefined"
                style={{
                  backgroundImage:
                    "url('https://promotions-material.s3.ap-south-1.amazonaws.com/sportsButtons/cricket-1696348461938')",
                }}
              >
                <div className="flex justify-center w-full h-full min-h-9 relative z-10 items-center min-w-[175px] sm:min-w-[240px] md:min-w-[280px] pl-[5px] pt-[2px] pb-[2px] pr-1 opacity-100">
                  <img
                    src="https://promotions-material.s3.ap-south-1.amazonaws.com/quickButtons/Aura-1705912199647?q=20&amp;blur=2&amp;cs=tinysrgb&amp;w=400&amp;px=80&amp;auto=format"
                    width="16"
                    height="16"
                    className="w-4 h-4 sm:w-5 sm:h-5 ml-1 autoAnimate"
                    alt="Aura-image"
                    loading="lazy"
                    title="Aura"
                  />
                  <span className="ml-1 autoAnimate text-text_Quaternary text-xs capitalize pr-[2px] md:text-sm text-nowrap w-full truncate font-lato-bold font-semibold md:font-semibold">
                    Aura
                  </span>
                </div>
                <div className="absolute top-0 left-0 w-full h-full min-h-9 rounded-[4px]"></div>
              </div>
            </span>
          </div>
          <div title="QuickButtons-2" className="grid grid-row-2">
            <span title="Mines" className="col-span-1 px-[3px] py-[3px]">
              <div
                className="relative w-full active:scale-95 cursor-pointer bg-bg_SkeletonBgLoaderColor transition-all ease-in-out duration-150 shadow-quickAccessBtnBoxShadows min-h-9 bg-cover bg-center bg-no-repeat rounded-[4px] overflow-hidden undefined"
                style={{
                  backgroundImage:
                    "url('https://promotions-material.s3.ap-south-1.amazonaws.com/sportsButtons/cricket-1696348461938')",
                }}
              >
                <div className="flex justify-center w-full h-full min-h-9 relative z-10 items-center min-w-[175px] sm:min-w-[240px] md:min-w-[280px] pl-[5px] pt-[2px] pb-[2px] pr-1 opacity-100">
                  <img
                    src="https://promotions-material.s3.ap-south-1.amazonaws.com/quickButtons/diamond_icon.png?q=20&amp;blur=2&amp;cs=tinysrgb&amp;w=400&amp;px=80&amp;auto=format"
                    width="16"
                    height="16"
                    className="w-4 h-4 sm:w-5 sm:h-5 ml-1 autoAnimate"
                    alt="Mines-image"
                    loading="lazy"
                    title="Mines"
                  />
                  <span className="ml-1 autoAnimate text-text_Quaternary text-xs capitalize pr-[2px] md:text-sm text-nowrap w-full truncate font-lato-bold font-semibold md:font-semibold">
                    Mines
                  </span>
                </div>
                <div className="absolute top-0 left-0 w-full h-full min-h-9 rounded-[4px]"></div>
              </div>{" "}
            </span>
            <span title="Limbo" className="col-span-1 px-[3px] py-[3px]">
              <div
                className="relative w-full active:scale-95 cursor-pointer bg-bg_SkeletonBgLoaderColor transition-all ease-in-out duration-150 shadow-quickAccessBtnBoxShadows min-h-9 bg-cover bg-center bg-no-repeat rounded-[4px] overflow-hidden undefined"
                style={{
                  backgroundImage:
                    "url('https://promotions-material.s3.ap-south-1.amazonaws.com/sportsButtons/cricket-1696348461938')",
                }}
              >
                <div className="flex justify-center w-full h-full min-h-9 relative z-10 items-center min-w-[175px] sm:min-w-[240px] md:min-w-[280px] pl-[5px] pt-[2px] pb-[2px] pr-1 opacity-100">
                  <img
                    src="https://promotions-material.s3.ap-south-1.amazonaws.com/quickButtons/Aviator-1705911963125?q=20&amp;blur=2&amp;cs=tinysrgb&amp;w=400&amp;px=80&amp;auto=format"
                    width="16"
                    height="16"
                    className="w-4 h-4 sm:w-5 sm:h-5 ml-1 autoAnimate"
                    alt="Limbo-image"
                    loading="lazy"
                    title="Limbo"
                  />
                  <span className="ml-1 autoAnimate text-text_Quaternary text-xs capitalize pr-[2px] md:text-sm text-nowrap w-full truncate font-lato-bold font-semibold md:font-semibold">
                    Limbo
                  </span>
                </div>
                <div className="absolute top-0 left-0 w-full h-full min-h-9 rounded-[4px]"></div>
              </div>
            </span>
          </div>
          <div title="QuickButtons-4" className="grid grid-row-2">
            <span title="Color Game" className="col-span-1 px-[3px] py-[3px]">
              <div
                className="relative w-full active:scale-95 cursor-pointer bg-bg_SkeletonBgLoaderColor transition-all ease-in-out duration-150 shadow-quickAccessBtnBoxShadows min-h-9 bg-cover bg-center bg-no-repeat rounded-[4px] overflow-hidden undefined"
                style={{
                  backgroundImage:
                    "url('https://promotions-material.s3.ap-south-1.amazonaws.com/sportsButtons/cricket-1696348461938')",
                }}
              >
                <div className="flex justify-center w-full h-full min-h-9 relative z-10 items-center min-w-[175px] sm:min-w-[240px] md:min-w-[280px] pl-[5px] pt-[2px] pb-[2px] pr-1 opacity-100">
                  <img
                    src="https://promomaterial.imgix.net/quickButtons/ColorGame-1718191763431?q=20&amp;blur=2&amp;cs=tinysrgb&amp;w=400&amp;px=80&amp;auto=format"
                    width="16"
                    height="16"
                    className="w-4 h-4 sm:w-5 sm:h-5 ml-1 autoAnimate"
                    alt="Color Game-image"
                    loading="lazy"
                    title="Color Game"
                  />
                  <span className="ml-1 autoAnimate text-text_Quaternary text-xs capitalize pr-[2px] md:text-sm text-nowrap w-full truncate font-lato-bold font-semibold md:font-semibold">
                    Color Game
                  </span>
                </div>
                <div className="absolute top-0 left-0 w-full h-full min-h-9 rounded-[4px]"></div>
              </div>{" "}
            </span>
            <span
              title="Tower Legends"
              className="col-span-1 px-[3px] py-[3px]"
            >
              <div
                className="relative w-full active:scale-95 cursor-pointer bg-bg_SkeletonBgLoaderColor transition-all ease-in-out duration-150 shadow-quickAccessBtnBoxShadows min-h-9 bg-cover bg-center bg-no-repeat rounded-[4px] overflow-hidden undefined"
                style={{
                  backgroundImage:
                    "url('https://promotions-material.s3.ap-south-1.amazonaws.com/sportsButtons/cricket-1696348461938')",
                }}
              >
                <div className="flex justify-center w-full h-full min-h-9 relative z-10 items-center min-w-[175px] sm:min-w-[240px] md:min-w-[280px] pl-[5px] pt-[2px] pb-[2px] pr-1 opacity-100">
                  <img
                    src="https://promomaterial.imgix.net/quickButtons/TowerLegends-1722000145474?q=20&amp;blur=2&amp;cs=tinysrgb&amp;w=400&amp;px=80&amp;auto=format"
                    width="16"
                    height="16"
                    className="w-4 h-4 sm:w-5 sm:h-5 ml-1 autoAnimate"
                    alt="Tower Legends-image"
                    loading="lazy"
                    title="Tower Legends"
                  />
                  <span className="ml-1 autoAnimate text-text_Quaternary text-xs capitalize pr-[2px] md:text-sm text-nowrap w-full truncate font-lato-bold font-semibold md:font-semibold">
                    Tower Legends
                  </span>
                </div>
                <div className="absolute top-0 left-0 w-full h-full min-h-9 rounded-[4px]"></div>
              </div>
            </span>
          </div>
          <div title="QuickButtons-6" className="grid grid-row-2">
            <span title="Evolution" className="col-span-1 px-[3px] py-[3px]">
              <div
                className="relative w-full active:scale-95 cursor-pointer bg-bg_SkeletonBgLoaderColor transition-all ease-in-out duration-150 shadow-quickAccessBtnBoxShadows min-h-9 bg-cover bg-center bg-no-repeat rounded-[4px] overflow-hidden undefined"
                style={{
                  backgroundImage:
                    "url('https://promotions-material.s3.ap-south-1.amazonaws.com/sportsButtons/cricket-1696348461938')",
                }}
              >
                <div className="flex justify-center w-full h-full min-h-9 relative z-10 items-center min-w-[175px] sm:min-w-[240px] md:min-w-[280px] pl-[5px] pt-[2px] pb-[2px] pr-1 opacity-100">
                  <img
                    src="https://promotions-material.s3.ap-south-1.amazonaws.com/quickButtons/Evolution-1705911275817?q=20&amp;blur=2&amp;cs=tinysrgb&amp;w=400&amp;px=80&amp;auto=format"
                    width="16"
                    height="16"
                    className="w-4 h-4 sm:w-5 sm:h-5 ml-1 autoAnimate"
                    alt="Evolution-image"
                    loading="lazy"
                    title="Evolution"
                  />
                  <span className="ml-1 autoAnimate text-text_Quaternary text-xs capitalize pr-[2px] md:text-sm text-nowrap w-full truncate font-lato-bold font-semibold md:font-semibold">
                    Evolution
                  </span>
                </div>
                <div className="absolute top-0 left-0 w-full h-full min-h-9 rounded-[4px]"></div>
              </div>{" "}
            </span>
            <span title="Sportsbook" className="col-span-1 px-[3px] py-[3px]">
              <div
                className="relative w-full active:scale-95 cursor-pointer bg-bg_SkeletonBgLoaderColor transition-all ease-in-out duration-150 shadow-quickAccessBtnBoxShadows min-h-9 bg-cover bg-center bg-no-repeat rounded-[4px] overflow-hidden undefined"
                style={{
                  backgroundImage:
                    "url('https://promotions-material.s3.ap-south-1.amazonaws.com/sportsButtons/cricket-1696348461938')",
                }}
              >
                <div className="flex justify-center w-full h-full min-h-9 relative z-10 items-center min-w-[175px] sm:min-w-[240px] md:min-w-[280px] pl-[5px] pt-[2px] pb-[2px] pr-1 opacity-100">
                  <img
                    src="https://promotions-material.s3.ap-south-1.amazonaws.com/quickButtons/Sportsbook-1705911352029?q=20&amp;blur=2&amp;cs=tinysrgb&amp;w=400&amp;px=80&amp;auto=format"
                    width="16"
                    height="16"
                    className="w-4 h-4 sm:w-5 sm:h-5 ml-1 autoAnimate"
                    alt="Sportsbook-image"
                    loading="lazy"
                    title="Sportsbook"
                  />
                  <span className="ml-1 autoAnimate text-text_Quaternary text-xs capitalize pr-[2px] md:text-sm text-nowrap w-full truncate font-lato-bold font-semibold md:font-semibold">
                    Sportsbook
                  </span>
                </div>
                <div className="absolute top-0 left-0 w-full h-full min-h-9 rounded-[4px]"></div>
              </div>
            </span>
          </div>
          <div title="QuickButtons-8" className="grid grid-row-2">
            <span title="Live Casinos" className="col-span-1 px-[3px] py-[3px]">
              <div
                className="relative w-full active:scale-95 cursor-pointer bg-bg_SkeletonBgLoaderColor transition-all ease-in-out duration-150 shadow-quickAccessBtnBoxShadows min-h-9 bg-cover bg-center bg-no-repeat rounded-[4px] overflow-hidden undefined"
                style={{
                  backgroundImage:
                    "url('https://promotions-material.s3.ap-south-1.amazonaws.com/sportsButtons/cricket-1696348461938')",
                }}
              >
                <div className="flex justify-center w-full h-full min-h-9 relative z-10 items-center min-w-[175px] sm:min-w-[240px] md:min-w-[280px] pl-[5px] pt-[2px] pb-[2px] pr-1 opacity-100">
                  <img
                    src="https://promotions-material.s3.ap-south-1.amazonaws.com/quickButtons/LiveCasinos-1705911704279?q=20&amp;blur=2&amp;cs=tinysrgb&amp;w=400&amp;px=80&amp;auto=format"
                    width="16"
                    height="16"
                    className="w-4 h-4 sm:w-5 sm:h-5 ml-1 autoAnimate"
                    alt="Live Casinos-image"
                    loading="lazy"
                    title="Live Casinos"
                  />
                  <span className="ml-1 autoAnimate text-text_Quaternary text-xs capitalize pr-[2px] md:text-sm text-nowrap w-full truncate font-lato-bold font-semibold md:font-semibold">
                    Live Casinos
                  </span>
                </div>
                <div className="absolute top-0 left-0 w-full h-full min-h-9 rounded-[4px]"></div>
              </div>{" "}
            </span>
            <span title="e-Cricket" className="col-span-1 px-[3px] py-[3px]">
              <div
                className="relative w-full active:scale-95 cursor-pointer bg-bg_SkeletonBgLoaderColor transition-all ease-in-out duration-150 shadow-quickAccessBtnBoxShadows min-h-9 bg-cover bg-center bg-no-repeat rounded-[4px] overflow-hidden undefined"
                style={{
                  backgroundImage:
                    "url('https://promotions-material.s3.ap-south-1.amazonaws.com/sportsButtons/cricket-1696348461938')",
                }}
              >
                <div className="flex justify-center w-full h-full min-h-9 relative z-10 items-center min-w-[175px] sm:min-w-[240px] md:min-w-[280px] pl-[5px] pt-[2px] pb-[2px] pr-1 opacity-100">
                  <img
                    src="https://promotions-material.s3.ap-south-1.amazonaws.com/quickButtons/e-Cricket-1705911799122?q=20&amp;blur=2&amp;cs=tinysrgb&amp;w=400&amp;px=80&amp;auto=format"
                    width="16"
                    height="16"
                    className="w-4 h-4 sm:w-5 sm:h-5 ml-1 autoAnimate"
                    alt="e-Cricket-image"
                    loading="lazy"
                    title="e-Cricket"
                  />
                  <span className="ml-1 autoAnimate text-text_Quaternary text-xs capitalize pr-[2px] md:text-sm text-nowrap w-full truncate font-lato-bold font-semibold md:font-semibold">
                    e-Cricket
                  </span>
                </div>
                <div className="absolute top-0 left-0 w-full h-full min-h-9 rounded-[4px]"></div>
              </div>
            </span>
          </div>
          <div title="QuickButtons-10" className="grid grid-row-2">
            <span title="Card Games" className="col-span-1 px-[3px] py-[3px]">
              <div
                className="relative w-full active:scale-95 cursor-pointer bg-bg_SkeletonBgLoaderColor transition-all ease-in-out duration-150 shadow-quickAccessBtnBoxShadows min-h-9 bg-cover bg-center bg-no-repeat rounded-[4px] overflow-hidden undefined"
                style={{
                  backgroundImage:
                    "url('https://promotions-material.s3.ap-south-1.amazonaws.com/sportsButtons/cricket-1696348461938')",
                }}
              >
                <div className="flex justify-center w-full h-full min-h-9 relative z-10 items-center min-w-[175px] sm:min-w-[240px] md:min-w-[280px] pl-[5px] pt-[2px] pb-[2px] pr-1 opacity-100">
                  <img
                    src="https://promotions-material.s3.ap-south-1.amazonaws.com/quickButtons/CardGames-1705911853726?q=20&amp;blur=2&amp;cs=tinysrgb&amp;w=400&amp;px=80&amp;auto=format"
                    width="16"
                    height="16"
                    className="w-4 h-4 sm:w-5 sm:h-5 ml-1 autoAnimate"
                    alt="Card Games-image"
                    loading="lazy"
                    title="Card Games"
                  />
                  <span className="ml-1 autoAnimate text-text_Quaternary text-xs capitalize pr-[2px] md:text-sm text-nowrap w-full truncate font-lato-bold font-semibold md:font-semibold">
                    Card Games
                  </span>
                </div>
                <div className="absolute top-0 left-0 w-full h-full min-h-9 rounded-[4px]"></div>
              </div>{" "}
            </span>
            <span title="Slot Games" className="col-span-1 px-[3px] py-[3px]">
              <div
                className="relative w-full active:scale-95 cursor-pointer bg-bg_SkeletonBgLoaderColor transition-all ease-in-out duration-150 shadow-quickAccessBtnBoxShadows min-h-9 bg-cover bg-center bg-no-repeat rounded-[4px] overflow-hidden undefined"
                style={{
                  backgroundImage:
                    "url('https://promotions-material.s3.ap-south-1.amazonaws.com/sportsButtons/cricket-1696348461938')",
                }}
              >
                <div className="flex justify-center w-full h-full min-h-9 relative z-10 items-center min-w-[175px] sm:min-w-[240px] md:min-w-[280px] pl-[5px] pt-[2px] pb-[2px] pr-1 opacity-100">
                  <img
                    src="https://promotions-material.s3.ap-south-1.amazonaws.com/quickButtons/SlotGames-1705912015300?q=20&amp;blur=2&amp;cs=tinysrgb&amp;w=400&amp;px=80&amp;auto=format"
                    width="16"
                    height="16"
                    className="w-4 h-4 sm:w-5 sm:h-5 ml-1 autoAnimate"
                    alt="Slot Games-image"
                    loading="lazy"
                    title="Slot Games"
                  />
                  <span className="ml-1 autoAnimate text-text_Quaternary text-xs capitalize pr-[2px] md:text-sm text-nowrap w-full truncate font-lato-bold font-semibold md:font-semibold">
                    Slot Games
                  </span>
                </div>
                <div className="absolute top-0 left-0 w-full h-full min-h-9 rounded-[4px]"></div>
              </div>
            </span>
          </div>
          <div title="QuickButtons-12" className="grid grid-row-2">
            <span
              title="Multiplayer Games"
              className="col-span-1 px-[3px] py-[3px]"
            >
              <div
                className="relative w-full active:scale-95 cursor-pointer bg-bg_SkeletonBgLoaderColor transition-all ease-in-out duration-150 shadow-quickAccessBtnBoxShadows min-h-9 bg-cover bg-center bg-no-repeat rounded-[4px] overflow-hidden undefined"
                style={{
                  backgroundImage:
                    "url('https://promotions-material.s3.ap-south-1.amazonaws.com/sportsButtons/cricket-1696348461938')",
                }}
              >
                <div className="flex justify-center w-full h-full min-h-9 relative z-10 items-center min-w-[175px] sm:min-w-[240px] md:min-w-[280px] pl-[5px] pt-[2px] pb-[2px] pr-1 opacity-100">
                  <img
                    src="https://promotions-material.s3.ap-south-1.amazonaws.com/quickButtons/MultiplayerGames-1705912077489?q=20&amp;blur=2&amp;cs=tinysrgb&amp;w=400&amp;px=80&amp;auto=format"
                    width="16"
                    height="16"
                    className="w-4 h-4 sm:w-5 sm:h-5 ml-1 autoAnimate"
                    alt="Multiplayer Games-image"
                    loading="lazy"
                    title="Multiplayer Games"
                  />
                  <span className="ml-1 autoAnimate text-text_Quaternary text-xs capitalize pr-[2px] md:text-sm text-nowrap w-full truncate font-lato-bold font-semibold md:font-semibold">
                    Multiplayer Games
                  </span>
                </div>
                <div className="absolute top-0 left-0 w-full h-full min-h-9 rounded-[4px]"></div>
              </div>{" "}
            </span>
            <span
              title="Fishing games"
              className="col-span-1 px-[3px] py-[3px]"
            >
              <div
                className="relative w-full active:scale-95 cursor-pointer bg-bg_SkeletonBgLoaderColor transition-all ease-in-out duration-150 shadow-quickAccessBtnBoxShadows min-h-9 bg-cover bg-center bg-no-repeat rounded-[4px] overflow-hidden undefined"
                style={{
                  backgroundImage:
                    "url('https://promotions-material.s3.ap-south-1.amazonaws.com/sportsButtons/cricket-1696348461938')",
                }}
              >
                <div className="flex justify-center w-full h-full min-h-9 relative z-10 items-center min-w-[175px] sm:min-w-[240px] md:min-w-[280px] pl-[5px] pt-[2px] pb-[2px] pr-1 opacity-100">
                  <img
                    src="https://promotions-material.s3.ap-south-1.amazonaws.com/quickButtons/Fishinggames-1705912252627?q=20&amp;blur=2&amp;cs=tinysrgb&amp;w=400&amp;px=80&amp;auto=format"
                    width="16"
                    height="16"
                    className="w-4 h-4 sm:w-5 sm:h-5 ml-1 autoAnimate"
                    alt="Fishing games-image"
                    loading="lazy"
                    title="Fishing games"
                  />
                  <span className="ml-1 autoAnimate text-text_Quaternary text-xs capitalize pr-[2px] md:text-sm text-nowrap w-full truncate font-lato-bold font-semibold md:font-semibold">
                    Fishing games
                  </span>
                </div>
                <div className="absolute top-0 left-0 w-full h-full min-h-9 rounded-[4px]"></div>
              </div>
            </span>
          </div>
          <div title="QuickButtons-0" className="grid grid-row-2">
            <span title="Aviator" className="col-span-1 px-[3px] py-[3px]">
              <div
                className="relative w-full active:scale-95 cursor-pointer bg-bg_SkeletonBgLoaderColor transition-all ease-in-out duration-150 shadow-quickAccessBtnBoxShadows min-h-9 bg-cover bg-center bg-no-repeat rounded-[4px] overflow-hidden undefined"
                style={{
                  backgroundImage:
                    "url('https://promotions-material.s3.ap-south-1.amazonaws.com/sportsButtons/cricket-1696348461938')",
                }}
              >
                <div className="flex justify-center w-full h-full min-h-9 relative z-10 items-center min-w-[175px] sm:min-w-[240px] md:min-w-[280px] pl-[5px] pt-[2px] pb-[2px] pr-1 opacity-100">
                  <img
                    src="https://promotions-material.s3.ap-south-1.amazonaws.com/quickButtons/Aviator-1705911963125?q=20&amp;blur=2&amp;cs=tinysrgb&amp;w=400&amp;px=80&amp;auto=format"
                    width="16"
                    height="16"
                    className="w-4 h-4 sm:w-5 sm:h-5 ml-1 autoAnimate"
                    alt="Aviator-image"
                    loading="lazy"
                    title="Aviator"
                  />
                  <span className="ml-1 autoAnimate text-text_Quaternary text-xs capitalize pr-[2px] md:text-sm text-nowrap w-full truncate font-lato-bold font-semibold md:font-semibold">
                    Aviator
                  </span>
                </div>
                <div className="absolute top-0 left-0 w-full h-full min-h-9 rounded-[4px]"></div>
              </div>{" "}
            </span>
            <span title="Aura" className="col-span-1 px-[3px] py-[3px]">
              <div
                className="relative w-full active:scale-95 cursor-pointer bg-bg_SkeletonBgLoaderColor transition-all ease-in-out duration-150 shadow-quickAccessBtnBoxShadows min-h-9 bg-cover bg-center bg-no-repeat rounded-[4px] overflow-hidden undefined"
                style={{
                  backgroundImage:
                    "url('https://promotions-material.s3.ap-south-1.amazonaws.com/sportsButtons/cricket-1696348461938')",
                }}
              >
                <div className="flex justify-center w-full h-full min-h-9 relative z-10 items-center min-w-[175px] sm:min-w-[240px] md:min-w-[280px] pl-[5px] pt-[2px] pb-[2px] pr-1 opacity-100">
                  <img
                    src="https://promotions-material.s3.ap-south-1.amazonaws.com/quickButtons/Aura-1705912199647?q=20&amp;blur=2&amp;cs=tinysrgb&amp;w=400&amp;px=80&amp;auto=format"
                    width="16"
                    height="16"
                    className="w-4 h-4 sm:w-5 sm:h-5 ml-1 autoAnimate"
                    alt="Aura-image"
                    loading="lazy"
                    title="Aura"
                  />
                  <span className="ml-1 autoAnimate text-text_Quaternary text-xs capitalize pr-[2px] md:text-sm text-nowrap w-full truncate font-lato-bold font-semibold md:font-semibold">
                    Aura
                  </span>
                </div>
                <div className="absolute top-0 left-0 w-full h-full min-h-9 rounded-[4px]"></div>
              </div>
            </span>
          </div>
          <div title="QuickButtons-2" className="grid grid-row-2">
            <span title="Mines" className="col-span-1 px-[3px] py-[3px]">
              <div
                className="relative w-full active:scale-95 cursor-pointer bg-bg_SkeletonBgLoaderColor transition-all ease-in-out duration-150 shadow-quickAccessBtnBoxShadows min-h-9 bg-cover bg-center bg-no-repeat rounded-[4px] overflow-hidden undefined"
                style={{
                  backgroundImage:
                    "url('https://promotions-material.s3.ap-south-1.amazonaws.com/sportsButtons/cricket-1696348461938')",
                }}
              >
                <div className="flex justify-center w-full h-full min-h-9 relative z-10 items-center min-w-[175px] sm:min-w-[240px] md:min-w-[280px] pl-[5px] pt-[2px] pb-[2px] pr-1 opacity-100">
                  <img
                    src="https://promotions-material.s3.ap-south-1.amazonaws.com/quickButtons/diamond_icon.png?q=20&amp;blur=2&amp;cs=tinysrgb&amp;w=400&amp;px=80&amp;auto=format"
                    width="16"
                    height="16"
                    className="w-4 h-4 sm:w-5 sm:h-5 ml-1 autoAnimate"
                    alt="Mines-image"
                    loading="lazy"
                    title="Mines"
                  />
                  <span className="ml-1 autoAnimate text-text_Quaternary text-xs capitalize pr-[2px] md:text-sm text-nowrap w-full truncate font-lato-bold font-semibold md:font-semibold">
                    Mines
                  </span>
                </div>
                <div className="absolute top-0 left-0 w-full h-full min-h-9 rounded-[4px]"></div>
              </div>{" "}
            </span>
            <span title="Limbo" className="col-span-1 px-[3px] py-[3px]">
              <div
                className="relative w-full active:scale-95 cursor-pointer bg-bg_SkeletonBgLoaderColor transition-all ease-in-out duration-150 shadow-quickAccessBtnBoxShadows min-h-9 bg-cover bg-center bg-no-repeat rounded-[4px] overflow-hidden undefined"
                style={{
                  backgroundImage:
                    "url('https://promotions-material.s3.ap-south-1.amazonaws.com/sportsButtons/cricket-1696348461938')",
                }}
              >
                <div className="flex justify-center w-full h-full min-h-9 relative z-10 items-center min-w-[175px] sm:min-w-[240px] md:min-w-[280px] pl-[5px] pt-[2px] pb-[2px] pr-1 opacity-100">
                  <img
                    src="https://promotions-material.s3.ap-south-1.amazonaws.com/quickButtons/Aviator-1705911963125?q=20&amp;blur=2&amp;cs=tinysrgb&amp;w=400&amp;px=80&amp;auto=format"
                    width="16"
                    height="16"
                    className="w-4 h-4 sm:w-5 sm:h-5 ml-1 autoAnimate"
                    alt="Limbo-image"
                    loading="lazy"
                    title="Limbo"
                  />
                  <span className="ml-1 autoAnimate text-text_Quaternary text-xs capitalize pr-[2px] md:text-sm text-nowrap w-full truncate font-lato-bold font-semibold md:font-semibold">
                    Limbo
                  </span>
                </div>
                <div className="absolute top-0 left-0 w-full h-full min-h-9 rounded-[4px]"></div>
              </div>
            </span>
          </div>
          <div title="QuickButtons-4" className="grid grid-row-2">
            <span title="Color Game" className="col-span-1 px-[3px] py-[3px]">
              <div
                className="relative w-full active:scale-95 cursor-pointer bg-bg_SkeletonBgLoaderColor transition-all ease-in-out duration-150 shadow-quickAccessBtnBoxShadows min-h-9 bg-cover bg-center bg-no-repeat rounded-[4px] overflow-hidden undefined"
                style={{
                  backgroundImage:
                    "url('https://promotions-material.s3.ap-south-1.amazonaws.com/sportsButtons/cricket-1696348461938')",
                }}
              >
                <div className="flex justify-center w-full h-full min-h-9 relative z-10 items-center min-w-[175px] sm:min-w-[240px] md:min-w-[280px] pl-[5px] pt-[2px] pb-[2px] pr-1 opacity-100">
                  <img
                    src="https://promomaterial.imgix.net/quickButtons/ColorGame-1718191763431?q=20&amp;blur=2&amp;cs=tinysrgb&amp;w=400&amp;px=80&amp;auto=format"
                    width="16"
                    height="16"
                    className="w-4 h-4 sm:w-5 sm:h-5 ml-1 autoAnimate"
                    alt="Color Game-image"
                    loading="lazy"
                    title="Color Game"
                  />
                  <span className="ml-1 autoAnimate text-text_Quaternary text-xs capitalize pr-[2px] md:text-sm text-nowrap w-full truncate font-lato-bold font-semibold md:font-semibold">
                    Color Game
                  </span>
                </div>
                <div className="absolute top-0 left-0 w-full h-full min-h-9 rounded-[4px]"></div>
              </div>{" "}
            </span>
            <span
              title="Tower Legends"
              className="col-span-1 px-[3px] py-[3px]"
            >
              <div
                className="relative w-full active:scale-95 cursor-pointer bg-bg_SkeletonBgLoaderColor transition-all ease-in-out duration-150 shadow-quickAccessBtnBoxShadows min-h-9 bg-cover bg-center bg-no-repeat rounded-[4px] overflow-hidden undefined"
                style={{
                  backgroundImage:
                    "url('https://promotions-material.s3.ap-south-1.amazonaws.com/sportsButtons/cricket-1696348461938')",
                }}
              >
                <div className="flex justify-center w-full h-full min-h-9 relative z-10 items-center min-w-[175px] sm:min-w-[240px] md:min-w-[280px] pl-[5px] pt-[2px] pb-[2px] pr-1 opacity-100">
                  <img
                    src="https://promomaterial.imgix.net/quickButtons/TowerLegends-1722000145474?q=20&amp;blur=2&amp;cs=tinysrgb&amp;w=400&amp;px=80&amp;auto=format"
                    width="16"
                    height="16"
                    className="w-4 h-4 sm:w-5 sm:h-5 ml-1 autoAnimate"
                    alt="Tower Legends-image"
                    loading="lazy"
                    title="Tower Legends"
                  />
                  <span className="ml-1 autoAnimate text-text_Quaternary text-xs capitalize pr-[2px] md:text-sm text-nowrap w-full truncate font-lato-bold font-semibold md:font-semibold">
                    Tower Legends
                  </span>
                </div>
                <div className="absolute top-0 left-0 w-full h-full min-h-9 rounded-[4px]"></div>
              </div>
            </span>
          </div>
          <div title="QuickButtons-6" className="grid grid-row-2">
            <span title="Evolution" className="col-span-1 px-[3px] py-[3px]">
              <div
                className="relative w-full active:scale-95 cursor-pointer bg-bg_SkeletonBgLoaderColor transition-all ease-in-out duration-150 shadow-quickAccessBtnBoxShadows min-h-9 bg-cover bg-center bg-no-repeat rounded-[4px] overflow-hidden undefined"
                style={{
                  backgroundImage:
                    "url('https://promotions-material.s3.ap-south-1.amazonaws.com/sportsButtons/cricket-1696348461938')",
                }}
              >
                <div className="flex justify-center w-full h-full min-h-9 relative z-10 items-center min-w-[175px] sm:min-w-[240px] md:min-w-[280px] pl-[5px] pt-[2px] pb-[2px] pr-1 opacity-100">
                  <img
                    src="https://promotions-material.s3.ap-south-1.amazonaws.com/quickButtons/Evolution-1705911275817?q=20&amp;blur=2&amp;cs=tinysrgb&amp;w=400&amp;px=80&amp;auto=format"
                    width="16"
                    height="16"
                    className="w-4 h-4 sm:w-5 sm:h-5 ml-1 autoAnimate"
                    alt="Evolution-image"
                    loading="lazy"
                    title="Evolution"
                  />
                  <span className="ml-1 autoAnimate text-text_Quaternary text-xs capitalize pr-[2px] md:text-sm text-nowrap w-full truncate font-lato-bold font-semibold md:font-semibold">
                    Evolution
                  </span>
                </div>
                <div className="absolute top-0 left-0 w-full h-full min-h-9 rounded-[4px]"></div>
              </div>{" "}
            </span>
            <span title="Sportsbook" className="col-span-1 px-[3px] py-[3px]">
              <div
                className="relative w-full active:scale-95 cursor-pointer bg-bg_SkeletonBgLoaderColor transition-all ease-in-out duration-150 shadow-quickAccessBtnBoxShadows min-h-9 bg-cover bg-center bg-no-repeat rounded-[4px] overflow-hidden undefined"
                style={{
                  backgroundImage:
                    "url('https://promotions-material.s3.ap-south-1.amazonaws.com/sportsButtons/cricket-1696348461938')",
                }}
              >
                <div className="flex justify-center w-full h-full min-h-9 relative z-10 items-center min-w-[175px] sm:min-w-[240px] md:min-w-[280px] pl-[5px] pt-[2px] pb-[2px] pr-1 opacity-100">
                  <img
                    src="https://promotions-material.s3.ap-south-1.amazonaws.com/quickButtons/Sportsbook-1705911352029?q=20&amp;blur=2&amp;cs=tinysrgb&amp;w=400&amp;px=80&amp;auto=format"
                    width="16"
                    height="16"
                    className="w-4 h-4 sm:w-5 sm:h-5 ml-1 autoAnimate"
                    alt="Sportsbook-image"
                    loading="lazy"
                    title="Sportsbook"
                  />
                  <span className="ml-1 autoAnimate text-text_Quaternary text-xs capitalize pr-[2px] md:text-sm text-nowrap w-full truncate font-lato-bold font-semibold md:font-semibold">
                    Sportsbook
                  </span>
                </div>
                <div className="absolute top-0 left-0 w-full h-full min-h-9 rounded-[4px]"></div>
              </div>
            </span>
          </div>
          <div title="QuickButtons-8" className="grid grid-row-2">
            <span title="Live Casinos" className="col-span-1 px-[3px] py-[3px]">
              <div
                className="relative w-full active:scale-95 cursor-pointer bg-bg_SkeletonBgLoaderColor transition-all ease-in-out duration-150 shadow-quickAccessBtnBoxShadows min-h-9 bg-cover bg-center bg-no-repeat rounded-[4px] overflow-hidden undefined"
                style={{
                  backgroundImage:
                    "url('https://promotions-material.s3.ap-south-1.amazonaws.com/sportsButtons/cricket-1696348461938')",
                }}
              >
                <div className="flex justify-center w-full h-full min-h-9 relative z-10 items-center min-w-[175px] sm:min-w-[240px] md:min-w-[280px] pl-[5px] pt-[2px] pb-[2px] pr-1 opacity-100">
                  <img
                    src="https://promotions-material.s3.ap-south-1.amazonaws.com/quickButtons/LiveCasinos-1705911704279?q=20&amp;blur=2&amp;cs=tinysrgb&amp;w=400&amp;px=80&amp;auto=format"
                    width="16"
                    height="16"
                    className="w-4 h-4 sm:w-5 sm:h-5 ml-1 autoAnimate"
                    alt="Live Casinos-image"
                    loading="lazy"
                    title="Live Casinos"
                  />
                  <span className="ml-1 autoAnimate text-text_Quaternary text-xs capitalize pr-[2px] md:text-sm text-nowrap w-full truncate font-lato-bold font-semibold md:font-semibold">
                    Live Casinos
                  </span>
                </div>
                <div className="absolute top-0 left-0 w-full h-full min-h-9 rounded-[4px]"></div>
              </div>{" "}
            </span>
            <span title="e-Cricket" className="col-span-1 px-[3px] py-[3px]">
              <div
                className="relative w-full active:scale-95 cursor-pointer bg-bg_SkeletonBgLoaderColor transition-all ease-in-out duration-150 shadow-quickAccessBtnBoxShadows min-h-9 bg-cover bg-center bg-no-repeat rounded-[4px] overflow-hidden undefined"
                style={{
                  backgroundImage:
                    "url('https://promotions-material.s3.ap-south-1.amazonaws.com/sportsButtons/cricket-1696348461938')",
                }}
              >
                <div className="flex justify-center w-full h-full min-h-9 relative z-10 items-center min-w-[175px] sm:min-w-[240px] md:min-w-[280px] pl-[5px] pt-[2px] pb-[2px] pr-1 opacity-100">
                  <img
                    src="https://promotions-material.s3.ap-south-1.amazonaws.com/quickButtons/e-Cricket-1705911799122?q=20&amp;blur=2&amp;cs=tinysrgb&amp;w=400&amp;px=80&amp;auto=format"
                    width="16"
                    height="16"
                    className="w-4 h-4 sm:w-5 sm:h-5 ml-1 autoAnimate"
                    alt="e-Cricket-image"
                    loading="lazy"
                    title="e-Cricket"
                  />
                  <span className="ml-1 autoAnimate text-text_Quaternary text-xs capitalize pr-[2px] md:text-sm text-nowrap w-full truncate font-lato-bold font-semibold md:font-semibold">
                    e-Cricket
                  </span>
                </div>
                <div className="absolute top-0 left-0 w-full h-full min-h-9 rounded-[4px]"></div>
              </div>
            </span>
          </div>
          <div title="QuickButtons-10" className="grid grid-row-2">
            <span title="Card Games" className="col-span-1 px-[3px] py-[3px]">
              <div
                className="relative w-full active:scale-95 cursor-pointer bg-bg_SkeletonBgLoaderColor transition-all ease-in-out duration-150 shadow-quickAccessBtnBoxShadows min-h-9 bg-cover bg-center bg-no-repeat rounded-[4px] overflow-hidden undefined"
                style={{
                  backgroundImage:
                    "url('https://promotions-material.s3.ap-south-1.amazonaws.com/sportsButtons/cricket-1696348461938')",
                }}
              >
                <div className="flex justify-center w-full h-full min-h-9 relative z-10 items-center min-w-[175px] sm:min-w-[240px] md:min-w-[280px] pl-[5px] pt-[2px] pb-[2px] pr-1 opacity-100">
                  <img
                    src="https://promotions-material.s3.ap-south-1.amazonaws.com/quickButtons/CardGames-1705911853726?q=20&amp;blur=2&amp;cs=tinysrgb&amp;w=400&amp;px=80&amp;auto=format"
                    width="16"
                    height="16"
                    className="w-4 h-4 sm:w-5 sm:h-5 ml-1 autoAnimate"
                    alt="Card Games-image"
                    loading="lazy"
                    title="Card Games"
                  />
                  <span className="ml-1 autoAnimate text-text_Quaternary text-xs capitalize pr-[2px] md:text-sm text-nowrap w-full truncate font-lato-bold font-semibold md:font-semibold">
                    Card Games
                  </span>
                </div>
                <div className="absolute top-0 left-0 w-full h-full min-h-9 rounded-[4px]"></div>
              </div>{" "}
            </span>
            <span title="Slot Games" className="col-span-1 px-[3px] py-[3px]">
              <div
                className="relative w-full active:scale-95 cursor-pointer bg-bg_SkeletonBgLoaderColor transition-all ease-in-out duration-150 shadow-quickAccessBtnBoxShadows min-h-9 bg-cover bg-center bg-no-repeat rounded-[4px] overflow-hidden undefined"
                style={{
                  backgroundImage:
                    "url('https://promotions-material.s3.ap-south-1.amazonaws.com/sportsButtons/cricket-1696348461938')",
                }}
              >
                <div className="flex justify-center w-full h-full min-h-9 relative z-10 items-center min-w-[175px] sm:min-w-[240px] md:min-w-[280px] pl-[5px] pt-[2px] pb-[2px] pr-1 opacity-100">
                  <img
                    src="https://promotions-material.s3.ap-south-1.amazonaws.com/quickButtons/SlotGames-1705912015300?q=20&amp;blur=2&amp;cs=tinysrgb&amp;w=400&amp;px=80&amp;auto=format"
                    width="16"
                    height="16"
                    className="w-4 h-4 sm:w-5 sm:h-5 ml-1 autoAnimate"
                    alt="Slot Games-image"
                    loading="lazy"
                    title="Slot Games"
                  />
                  <span className="ml-1 autoAnimate text-text_Quaternary text-xs capitalize pr-[2px] md:text-sm text-nowrap w-full truncate font-lato-bold font-semibold md:font-semibold">
                    Slot Games
                  </span>
                </div>
                <div className="absolute top-0 left-0 w-full h-full min-h-9 rounded-[4px]"></div>
              </div>
            </span>
          </div>
          <div title="QuickButtons-12" className="grid grid-row-2">
            <span
              title="Multiplayer Games"
              className="col-span-1 px-[3px] py-[3px]"
            >
              <div
                className="relative w-full active:scale-95 cursor-pointer bg-bg_SkeletonBgLoaderColor transition-all ease-in-out duration-150 shadow-quickAccessBtnBoxShadows min-h-9 bg-cover bg-center bg-no-repeat rounded-[4px] overflow-hidden undefined"
                style={{
                  backgroundImage:
                    "url('https://promotions-material.s3.ap-south-1.amazonaws.com/sportsButtons/cricket-1696348461938')",
                }}
              >
                <div className="flex justify-center w-full h-full min-h-9 relative z-10 items-center min-w-[175px] sm:min-w-[240px] md:min-w-[280px] pl-[5px] pt-[2px] pb-[2px] pr-1 opacity-100">
                  <img
                    src="https://promotions-material.s3.ap-south-1.amazonaws.com/quickButtons/MultiplayerGames-1705912077489?q=20&amp;blur=2&amp;cs=tinysrgb&amp;w=400&amp;px=80&amp;auto=format"
                    width="16"
                    height="16"
                    className="w-4 h-4 sm:w-5 sm:h-5 ml-1 autoAnimate"
                    alt="Multiplayer Games-image"
                    loading="lazy"
                    title="Multiplayer Games"
                  />
                  <span className="ml-1 autoAnimate text-text_Quaternary text-xs capitalize pr-[2px] md:text-sm text-nowrap w-full truncate font-lato-bold font-semibold md:font-semibold">
                    Multiplayer Games
                  </span>
                </div>
                <div className="absolute top-0 left-0 w-full h-full min-h-9 rounded-[4px]"></div>
              </div>{" "}
            </span>
            <span
              title="Fishing games"
              className="col-span-1 px-[3px] py-[3px]"
            >
              <div
                className="relative w-full active:scale-95 cursor-pointer bg-bg_SkeletonBgLoaderColor transition-all ease-in-out duration-150 shadow-quickAccessBtnBoxShadows min-h-9 bg-cover bg-center bg-no-repeat rounded-[4px] overflow-hidden undefined"
                style={{
                  backgroundImage:
                    "url('https://promotions-material.s3.ap-south-1.amazonaws.com/sportsButtons/cricket-1696348461938')",
                }}
              >
                <div className="flex justify-center w-full h-full min-h-9 relative z-10 items-center min-w-[175px] sm:min-w-[240px] md:min-w-[280px] pl-[5px] pt-[2px] pb-[2px] pr-1 opacity-100">
                  <img
                    src="https://promotions-material.s3.ap-south-1.amazonaws.com/quickButtons/Fishinggames-1705912252627?q=20&amp;blur=2&amp;cs=tinysrgb&amp;w=400&amp;px=80&amp;auto=format"
                    width="16"
                    height="16"
                    className="w-4 h-4 sm:w-5 sm:h-5 ml-1 autoAnimate"
                    alt="Fishing games-image"
                    loading="lazy"
                    title="Fishing games"
                  />
                  <span className="ml-1 autoAnimate text-text_Quaternary text-xs capitalize pr-[2px] md:text-sm text-nowrap w-full truncate font-lato-bold font-semibold md:font-semibold">
                    Fishing games
                  </span>
                </div>
                <div className="absolute top-0 left-0 w-full h-full min-h-9 rounded-[4px]"></div>
              </div>
            </span>
          </div>
        </div>
      </div> */}
    </>
  );
};

export default Banner;
