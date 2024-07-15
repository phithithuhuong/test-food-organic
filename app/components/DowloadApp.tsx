const DownloadAppScreen: React.FC = () => {
  return (
    <div className="bg-green_50 relative w-full max-w-[1600px] items-center flex justify-center px-2.5">
      <div className=" pt-14 max-w-[1224px] w-full flex flex-col md:flex-row max-sm:p-10  items-center justify-center">
        <div className="max-w-[532px] w-full flex flex-col z-10">
          <span className="text-[32px] leading-[38px]">
            Download Organic App
          </span>
          <span className=" text-[20px] leading-[45px] text-gray_500">
            Online Orders made easy, fast and reliable
          </span>
          <div className="py-5 flex space-x-[14px]">
            <img src="/img-google-play.png" alt="" className="h-[61px]" />
            <img src="/img-app-store.png" alt="" className="h-[61px]" />
          </div>
        </div>
        <img
          src="/onlineapp.png"
          alt="onlineapp"
          className="lg:w-[600px] lg:h-[475px] max-sm:absolute max-sm:bottom-0 hidden md:block"
        />
      </div>
    </div>
  );
};

export default DownloadAppScreen;
