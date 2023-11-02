import { ApedCliff } from "../components/ApedCliff";
import { VinesLeft } from "../components/VinesLeft";
import { VinesRight } from "../components/VinesRight";

const DetailView = () => {
  return (
    <div className="relative">
      <div className="flex justify-center z-20 absolute top-0 left-0 right-0">
        <div className="w-full absolute top-0 overflow-hidden">
          <ApedCliff className="w-[max(1440px,100%)]" />
        </div>

        <p className="text-[48px] font-[700] text-white leading-[34px] relative z-[111] pt-[50px]">
          APED PROTOCOL
        </p>
      </div>

      <div className="bg-white flex xl:justify-around h-[170vh] xl:h-screen bg-[url('./assets/BondingCurve/PricingNetwork.svg')] bg-cover flex-col xl:flex-row items-center xl:items-start">
        <div className="w-96 flex flex-col relative">
          <div className="z-10 text-center pt-72 xl:pt-80 relative">
            <div className="relative -z-10">
              <p className="uppercase font-bold text-black text-[45px] leading-[34px]">
                BONDING CURVE
              </p>

              <p className="w-[365px] mt-[40px] font-medium text-[20px] leading-[34px] h-[187px]">
                Self-regulating mechanism for autonomous vault rebalancing to
                ensure price stability. Adjusts token supply in response to
                changes in protocol demand to accurately reflect token utility.
              </p>

              <span
                // href="#"
                className="bg-[#1A1A1A] w-[105px] rounded-[15px] leading-[34px] text-[12px] text-center uppercase text-white mx-auto flex justify-center font-bold items-center mt-[4px]"
              >
                COMING SOON
              </span>
            </div>
          </div>
          <div className="absolute top-0 w-full h-full justify-center hidden xl:flex">
            <VinesLeft className="scale-125 origin-top relative shrink-0 max-w-[100vw]" />
          </div>
        </div>

        <div className="w-96 flex flex-col relative">
          <div className="z-10 text-center pt-8 xl:pt-80 relative">
            <p className="uppercase font-bold text-black text-[45px] leading-[34px]">
              PRICING NETWORK
            </p>
            <p className="w-[365px] mt-[41px] font-medium text-[20px] leading-[34px] h-[120px]">
              Node operators creating consensus for on-chain pricing data for
              use by the community.
            </p>
            <span
              // href="#"
              className="bg-[#1A1A1A] w-[105px] rounded-[15px] leading-[34px] text-[12px] text-center uppercase text-white mx-auto flex justify-center mt-[12px] font-bold items-center"
            >
              COMING SOON
            </span>
          </div>

          <div className="absolute top-0 w-full h-full justify-center hidden xl:flex">
            <VinesRight className="scale-125 origin-top relative shrink-0 right-14 max-w-[100vw]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailView;
