import { useParams } from "react-router-dom";
import LeftDeskSidebar from "../../components/shared/desktop/LeftDeskSidebar/LeftDeskSidebar";
import RightDeskSidebar from "../../components/shared/desktop/RightDeskSidebar/RightDeskSidebar";
import useSingleProfitLoss from "../../hooks/useSingleProfitLoss";
import { useEffect, useState } from "react";

const SingleProfitLoss = () => {
  const [backTotal, setBackTotal] = useState(0);
  const [layTotal, setLayTotal] = useState(0);
  const { marketId } = useParams();
  const { singlePassbook } = useSingleProfitLoss(marketId);

  useEffect(() => {
    if (singlePassbook?.length > 0) {
      const back = singlePassbook?.filter((item) => item?.betType === "Back");
      let backTotal = 0;
      for (const item of back) {
        backTotal = backTotal + item.win;
      }
      const lay = singlePassbook?.filter((item) => item?.betType === "Lay");
      let layTotal = 0;
      for (const item of lay) {
        layTotal = layTotal + item.win;
      }

      setBackTotal(backTotal);
      setLayTotal(layTotal);
    }
  }, [singlePassbook]);

  if (!singlePassbook) {
    return;
  }
  let total = 0;
  for (const item of singlePassbook) {
    total = total + item.win;
  }

  return (
    <div className="flex flex-col transition-all lg:pt-[110px] ease-in-out duration-100 pt-[54px]">
      <div className="flex items-start justify-start w-full lg:px-12 xl:px-20 xlg:px-24">
        <LeftDeskSidebar />
        <div
          className="w-full md:mt-[0px] lg:overflow-auto lg:w-[54%]"
          style={{ minHeight: "calc(-110px + 100dvh)" }}
        >
          <div className="pb-2">
            <div className="w-full h-full flex flex-col gap-2 p-2 text-text_Ternary font-manrope-regular text-sm">
              <div className="flex flex-col bg-bg_Quaternary rounded-md overflow-hidden shadow-lg">
                <div className="bg-titleGrd py-2 px-4 text-text_Quaternary font-semibold">
                  {singlePassbook?.[0]?.eventName}
                </div>
                <div className="flex flex-col divide-y">
                  {singlePassbook?.map((item, i) => {
                    return (
                      <div
                        key={i}
                        className="w-full overflow-hidden flex flex-col gap-2"
                      >
                        <div className="flex px-4 pt-2 justify-between">
                          <span>Selection</span>
                          <span className="capitalize">
                            {/* 1st Wicket SL */}
                            {item?.marketName}
                          </span>
                        </div>
                        <div
                          className={`flex px-4 py-2 border mx-4 rounded justify-between  ${
                            item?.win > 0
                              ? "bg-bg_AccountStatementBg1"
                              : "bg-bg_AccountStatementBg2"
                          }`}
                        >
                          <div>
                            P&amp;L:
                            <span
                              className={`font-semibold ${
                                item?.win > 0
                                  ? "text-text_Profit"
                                  : "text-text_Loss"
                              }`}
                            >
                              ₹ {item?.win}
                            </span>
                          </div>
                          <div>
                            <span
                              className={`font-semibold capitalize  ${
                                item?.win > 0
                                  ? "text-text_Profit"
                                  : "text-text_Loss"
                              }`}
                            >
                              {item?.win > 0 ? "  WON" : "  LOSS"}
                            </span>
                          </div>
                        </div>
                        <div className="flex justify-between px-4">
                          <div>Bet ID</div>
                          <div>{item?.betId}</div>
                        </div>
                        <div className="flex justify-between px-4">
                          <div>Placed Date</div>
                          <div>{item?.placeDate}</div>
                        </div>
                        <div className="px-4 py-4 text-center text-sm">
                          <div className="overflow-hidden rounded-lg border">
                            <table className="w-full border-collapse">
                              <thead>
                                <tr className="bg-bg_TableHeaderBg">
                                  <th className="border-r px-3 py-1 first:rounded-tl-lg last:rounded-tr-lg">
                                    Type
                                  </th>
                                  <th className="border-r px-3 py-1">Odds</th>
                                  <th className="border-b px-3 py-1 first:rounded-tr-lg">
                                    Stake
                                  </th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td className="border-r border-t px-3 py-1">
                                    {item?.betType}
                                  </td>
                                  <td className="border border-b-0 px-3 py-1">
                                    {item?.userRate}
                                  </td>
                                  <td className="px-3 py-1">{item?.amount}</td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="bg-bg_Quaternary py-2 px-4 rounded-md flex flex-col gap-2 shadow-lg">
                <div className="flex justify-between border-dashed">
                  <div>Back Subtotal</div>
                  <div
                    className={`font-bold  ${
                      backTotal > 0 ? "text-text_Profit" : "text-text_Loss"
                    }`}
                  >
                    ₹ {backTotal}
                  </div>
                </div>
                <div className="flex justify-between border-dashed">
                  <div>Lay subtotal</div>
                  <div
                    className={`font-bold  ${
                      layTotal > 0 ? "text-text_Profit" : "text-text_Loss"
                    }`}
                  >
                    ₹ {layTotal}
                  </div>
                </div>
                <div className="flex justify-between border-dashed">
                  <div>Market Subtotal</div>
                  <div className="font-bold text-text_Profit">₹ 0</div>
                </div>
                <div className="flex justify-between border-dashed">
                  <div>Commission</div>
                  <div className="font-bold">₹ 0.0</div>
                </div>
                <div className="flex justify-between border-t border-dashed">
                  <div className="relative top-[3px]">Net Market Total</div>
                  <div
                    className={`font-bold relative top-[3px]  ${
                      total > 0 ? "text-text_Profit" : "text-text_Loss"
                    }`}
                  >
                    ₹ {total}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <RightDeskSidebar />
      </div>
    </div>
  );
};

export default SingleProfitLoss;