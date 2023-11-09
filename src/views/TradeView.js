import apedBetaLogo from "../assets/beta.png";

const TradeView = () => {
  return (
    <div className="tradeview h-screen md:h-fit relative">
      <div className="h-screen flex justify-center items-center relative opacity-100">
        <div className="absolute inset-0 bg-cover bg-center bg-[url('./assets/main_bg.svg')] opacity-25" />
        <div className="absolute top-6 left-6">
          <img className="w-[12vh]" src={apedBetaLogo} alt="" />
        </div>
        <div className="flex justify-center !flex-col items-center">
          <p className="border-[#AEAEAE] border-opacity-80 mb-7 rounded-[10px] text-white font-bold text-4xl md:text-[85px] leading-[55px] drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)] uppercase">
            APED BOT
          </p>
          <h2 className="text-white text-2xl md:text-[35px] opacity-80">
            TRADE PERPETUAL FUTURES
          </h2>
          <a
            href="https://t.me/ApedTrade"
            rel="noreferrer"
            target="_blank"
            className="border-4 bg-black z-10 border-[#cecdcf] text-2xl md:text-[35px] border-opacity-80 rounded-[10px] text-white p-9 leading-[34px] uppercase mt-[80px]"
          >
            LAUNCH BETA
          </a>
        </div>

        {/* <div className="absolute bottom-[0px] left-0 h-[80px] right-0 trasparent">
          <LogoView></LogoView>
        </div> */}
      </div>
    </div>
  );
};

export default TradeView;
