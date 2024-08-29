import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import handleRandomToken from "../../../../utils/handleRandomToken";
import handleEncryptData from "../../../../utils/handleEncryptData";
import { settings } from "../../../../api";
import { useOrderMutation } from "../../../../redux/features/events/events";
import useExposer from "../../../../hooks/useExposure";
import { useParams } from "react-router-dom";
import useBalance from "../../../../hooks/useBalance";
import toast from "react-hot-toast";
import BetLoading from "./BetLoading";
import {
  setPredictOdd,
  setPrice,
  setStake,
} from "../../../../redux/features/events/eventSlice";

const BetSlip = ({ setRunnerId }) => {
  const dispatch = useDispatch();
  const { eventId } = useParams();
  const { refetchBalance } = useBalance();
  const { refetchExposure } = useExposer(eventId);
  const { placeBetValues, price, stake } = useSelector((state) => state?.event);
  const [createOrder] = useOrderMutation();
  const buttonValues = localStorage.getItem("buttonValue");
  let parseButtonValues = [];
  if (buttonValues) {
    parseButtonValues = JSON.parse(buttonValues);
  }

  const [betDelay, setBetDelay] = useState("");

  useEffect(() => {
    dispatch(setPrice(placeBetValues?.price));
    dispatch(setStake(placeBetValues?.totalSize?.toFixed(2)));
  }, [placeBetValues, dispatch]);

  let payload = {};
  if (price) {
    if (placeBetValues?.btype === "SPORTSBOOK") {
      payload = {
        price: price,
        side: placeBetValues?.side,
        selectionId: placeBetValues?.selectionId,
        btype: placeBetValues?.btype,
        placeName: placeBetValues?.placeName,
        eventTypeId: placeBetValues?.eventTypeId,
        betDelay: placeBetValues?.betDelay,
        marketId: placeBetValues?.marketId,
        maxLiabilityPerMarket: placeBetValues?.maxLiabilityPerMarket,
        maxLiabilityPerBet: placeBetValues?.maxLiabilityPerBet,
        totalSize: stake,
        isBettable: placeBetValues?.isBettable,
        eventId: placeBetValues?.eventId,
      };
    } else {
      payload = {
        betDelay: placeBetValues?.betDelay,
        btype: placeBetValues?.btype,
        eventTypeId: placeBetValues?.eventTypeId,
        marketId: placeBetValues?.marketId,
        price: price,
        selectionId: placeBetValues?.selectionId,
        side: placeBetValues?.side,
        totalSize: stake,
        maxLiabilityPerMarket: placeBetValues?.maxLiabilityPerMarket,
        isBettable: placeBetValues?.isBettable,
        maxLiabilityPerBet: placeBetValues?.maxLiabilityPerBet,
        eventId: placeBetValues?.eventId,
      };
    }
  }

  /* Handle bets */
  const handleOrderBets = async () => {
    const generatedToken = handleRandomToken();
    const encryptedData = handleEncryptData([
      {
        ...payload,
        token: generatedToken,
        site: settings.siteUrl,
      },
    ]);
    setBetDelay(placeBetValues?.betDelay);
    const res = await createOrder(encryptedData).unwrap();

    if (res?.success) {
      refetchExposure();
      refetchBalance();
      // refetchCurrentBets();
      setBetDelay("");
      toast.success(res?.result?.result?.placed?.[0]?.message);
    } else {
      toast.error(
        res?.error?.status?.[0]?.description || res?.error?.errorMessage
      );
      setBetDelay("");
      setBetDelay(false);
      refetchExposure();
      refetchBalance();
      // refetchCurrentBets();
    }
  };

  return (
    <>
      {betDelay > 0 && (
        <BetLoading betDelay={betDelay} setBetDelay={setBetDelay} />
      )}
      <div className="col-span-12 h-max">
        <span className="col-span-12 h-max w-full">
          <div
            title="Bet Slip"
            className={`w-full bg-bg_BetSlipBgColor text-selection-none border-[2px] border-b-[5px] font-lato origin-top transition-all ease-in-out p-2 rounded-sm scaleVerticalOpen ${
              placeBetValues?.back ? "border-backBtn" : "border-layBtn"
            }`}
          >
            <div
              id="topPartOfBetSlip"
              title="Bet Slip Top Part"
              className="grid grid-cols-12 pt-[2px] gap-x-[15px]"
            >
              <span className="col-span-6 text-[10px] text-text_Ternary font-normal">
                ODDS
              </span>
              <div className="col-span-6 w-full flex items-center justify-between">
                <span className="text-[10px] text-text_Ternary font-normal text-start pl-1">
                  STAKE
                </span>
                <span className="text-[10px] float-right capitalize text-text_Ternary 5 font-normal text-center">
                  Max Mkt : {placeBetValues?.maxLiabilityPerMarket}
                </span>
              </div>
              <span title="Odds" className="col-span-6 pt-1.5 w-full">
                <div className="grid grid-cols-12 min-h-[35px]">
                  <span className="col-span-12 h-full pr-1 overflow-hidden">
                    <input
                      onChange={(e) => dispatch(setPrice(e.target.value))}
                      id="oddInput"
                      className="focus:outline-none text-sm w-full h-full text-center py-1 flex items-center justify-center border-[0.25px] text-text_Ternary border-oddInputBorder focus:border-oddInputBorderActive active:border-oddInputBorderActive"
                      type="number"
                      value={price}
                    />
                  </span>
                </div>{" "}
              </span>
              <span
                title="Stakes"
                className="col-span-6 pt-1.5 w-full px-[1px] overflow-hidden"
              >
                <input
                  id="stakeInput"
                  className=" focus:outline-none text-md w-full h-full text-center bg-bg_Quaternary flex items-center justify-center border-[0.75px] text-text_Ternary placeholder:text-text_Ternary 5 rounded-sm text-text_Ternary 5 focus:border-oddInputBorderActive active:border-oddInputBorderActive"
                  placeholder="Max : 1,00,000"
                  pattern="d*"
                  type="number"
                  value={stake}
                />
              </span>
            </div>
            <div className="mt-[15px] p-2.5 rounded-md border border-borderColorOfMarket bg-bg_InActivePlaceBtnColor">
              <div className="grid grid-cols-12 gap-x-1 gap-y-1">
                {parseButtonValues?.map((button, i) => {
                  return (
                    <button
                      onClick={() => dispatch(setStake(button?.value))}
                      key={i}
                      className="inline-block leading-normal relative  transition duration-150 ease-in-out col-span-4 w-full overflow-hidden border border-primary text-[12px] font-semibold rounded-[4px] bg-bg_Primary text-text_Quaternary text-center py-1.5 cursor-pointer"
                      type="button"
                    >
                      <span>+{button?.value}</span>
                    </button>
                  );
                })}
              </div>
              <div className="grid grid-cols-12 gap-x-1 gap-y-1 pt-[15px]">
                <button
                  onClick={() => dispatch(setStake(100))}
                  className="inline-block leading-normal relative overflow-hidden transition duration-150 ease-in-out col-span-3 w-full text-[10px] min-h-[26px] font-semibold rounded-[4px] bg-minBtnGrd text-text_Quaternary py-2 cursor-pointer"
                  type="button"
                >
                  MIN
                </button>
                <button
                  onClick={() =>
                    dispatch(
                      setStake(
                        parseButtonValues[parseButtonValues?.length - 1]?.value
                      )
                    )
                  }
                  className="inline-block leading-normal relative overflow-hidden transition duration-150 ease-in-out col-span-3 w-full text-[10px] font-semibold rounded-[4px] bg-maxBtnGrd text-text_Quaternary py-2 cursor-pointer"
                  type="button"
                >
                  MAX
                </button>
                <button
                  className="inline-block leading-normal relative overflow-hidden transition duration-150 ease-in-out col-span-3 w-full text-[10px] font-semibold rounded-[4px] text-text_Quaternary py-2 bg-editStakesGrd cursor-pointer"
                  type="button"
                >
                  EDIT STAKES
                </button>
                <button
                  onClick={() => dispatch(setStake(null))}
                  className="inline-block  relative overflow-hidden transition duration-150 ease-in-out col-span-3 w-full text-[10px] font-semibold rounded-[4px] bg-clearBtnGrd text-text_Quaternary leading-4 py-2 cursor-pointer"
                  id="clearBtn"
                  type="button"
                >
                  CLEAR
                </button>
              </div>
            </div>
            <div className="flex items-center justify-center gap-x-[13px] pt-3.5 w-full">
              <button
                onClick={() => {
                  dispatch(setPredictOdd([]));
                  setRunnerId("");
                }}
                type="button"
                className="leading-normal relative overflow-hidden transition duration-150 ease-in-out px-5 py-2.5 w-[50%] max-w-[156px] flex items-center justify-center min-h-[46px] text-sm bg-transparent text-text_BetSlipCancelBtnColor font-medium border border-danger rounded-md cursor-pointer"
              >
                <span className="text-text_Primary font-bold text-xs leading-5">
                  Cancel Bet
                </span>
              </button>
              <div className="w-[50%] max-w-[156px] h-max">
                <button
                  onClick={handleOrderBets}
                  disabled={!stake || betDelay > 0}
                
                  type="button"
                  className={` leading-normal relative overflow-hidden  transition duration-150 ease-in-out py-1 w-full flex  min-h-[46px] px-2.5 rounded-md  font-medium border  flex-row items-center justify-between  
                   text-text_Ternary 5     text-text_Quaternary  
               cursor-pointer ${
        !stake || betDelay > 0
          ? " bg-bg_InActivePlaceBtnColor border-inActivePlaceBtnColor cursor-not-allowed"
          : "bg-placeBetBtnGrd border-primary cursor-pointer"
      }`}
                >
                  <div className=" flex items-start justify-start flex-col">
                    <span className="  font-bold text-xs sm:text-sm">
                      Place Bet
                    </span>
                    <span className="font-semibold text-[10px] sm:text-xs">
                      <div></div>
                    </span>
                  </div>
                  <span className="text-[10px] flex items-center justify-center gap-x-[1px]">
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                      >
                        <g clipPath="url(#clip0_2144_3162)">
                          <path
                            d="M9.91095 3.68857L10.3814 3.21808C10.5643 3.03525 10.5643 2.7388 10.3814 2.55606C10.1986 2.37323 9.90225 2.37323 9.71942 2.55606L9.24893 3.02655C8.45956 2.36884 7.50037 1.9715 6.47717 1.87848V0.93631H6.92972C7.18826 0.93631 7.39783 0.726654 7.39783 0.468109C7.39783 0.209564 7.18826 0 6.92972 0H5.08832C4.82977 0 4.62021 0.209564 4.62021 0.468109C4.62021 0.726654 4.82977 0.93631 5.08832 0.93631H5.54086V1.87848C2.97958 2.11139 0.9375 4.26306 0.9375 6.92844C0.9375 9.73141 3.20572 12 6.00906 12C8.81195 12 11.0805 9.73178 11.0805 6.92844C11.0805 5.73111 10.6682 4.59723 9.91095 3.68857ZM6.00897 11.0637C3.72885 11.0637 1.87372 9.20865 1.87372 6.92844C1.87372 4.64832 3.72885 2.79327 6.00897 2.79327C8.28918 2.79327 10.1442 4.64832 10.1442 6.92844C10.1442 9.20865 8.28918 11.0637 6.00897 11.0637ZM8.1785 4.759C8.36133 4.94183 8.36133 5.23828 8.1785 5.42102L6.34003 7.25949C6.1572 7.44232 5.86075 7.44232 5.67801 7.25949C5.49518 7.07666 5.49518 6.78021 5.67801 6.59747L7.51639 4.759C7.69922 4.57617 7.99567 4.57617 8.1785 4.759Z"
                            fill={`${
                              !stake || betDelay > 0
                                ? "var(--color-betSlipStopWatchIconColor)"
                                : "var(--color-quaternary)"
                            } `}
                          ></path>
                        </g>
                        <defs>
                          <clipPath id="clip0_2144_3162">
                            <rect width="12" height="12" fill="white"></rect>
                          </clipPath>
                        </defs>
                      </svg>
                    </span>
                    <span
                      className={`font-normal ${
                        !stake || betDelay > 0 ? "" : "text-text_Quaternary"
                      }  `}
                    >
                      {placeBetValues?.betDelay}ss
                    </span>
                  </span>
                </button>
              </div>
            </div>
          </div>
        </span>
      </div>
    </>
  );
};

export default BetSlip;