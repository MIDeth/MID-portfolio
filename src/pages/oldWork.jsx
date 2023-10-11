export default function OldWork() {
  return (
    <>
      <div>
        <div className="my-4">
          <h1 className="text-3xl font-second text-[#FFC0D3]">Old Work ⚡️</h1>
        </div>
        <div className="w-[35rem] grid grid-cols-3 gap-x-36 gap-y-7 font-main">
          {/* start */}
          <div className="w-[14rem] h-[12rem]  flex flex-col mx-4 relative">
            <div className="flex items-center justify-center w-full h-4/6">
              <img
                src="work/veleno.png"
                className="object-contain w-full h-full"
              />
            </div>
            <div className="w-full pt-3 pl-2 text-xs leading-4 h-2/6 font-mainME">
              VELENO moraccan artist article
            </div>
            <div className="text-[.3rem] absolute bottom-0 right-0 text-gray-700 font-main">
              <a
                href="https://veleno.netlify.app/"
                target="_blank"
                rel="noreferrer"
              >
                live demo
              </a>
            </div>
          </div>
          {/* finish */}
          {/* start */}
          <div className="w-[14rem] h-[12rem]  flex flex-col mx-4 relative">
            <div className="flex items-center justify-center w-full h-4/6">
              <img
                src="work/celer.network.png"
                className="object-contain w-full h-full"
              />
            </div>
            <div className="w-full pt-3 pl-2 text-xs leading-4 h-2/6 font-mainME">
              Blockchain Connected{" "}
            </div>
            <div className="text-[.3rem] absolute bottom-0 right-0 text-gray-700 font-main">
              <a href="https://celer.network/" target="_blank" rel="noreferrer">
                live demo
              </a>
            </div>
          </div>
          {/* finish */}
        </div>
      </div>
    </>
  );
}
