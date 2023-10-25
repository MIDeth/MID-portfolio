export default function Projects() {
  return (
    <>
      <div>
        <div className="my-4">
          <h1 className="text-3xl font-second text-[#FFC0D3]">Projects 💪🏻</h1>
        </div>
        <div className="w-[35rem] max-md:w-[10rem] grid grid-cols-3 max-md:grid-cols-1 max-md:gap-x-0 gap-x-36 gap-y-7 font-main mb-14">
          {/* start */}
          <div className="w-[14rem] h-[12rem]  flex flex-col mx-4 relative">
            <div className="flex items-center justify-center w-full h-4/6">
              <img
                src="projects/NFTs-gallery.png"
                className="object-contain w-full h-full"
              />
            </div>
            <div className="w-full pt-3 pl-2 text-xs leading-4 h-2/6 font-mainME">
              check NFTs of wallet address or collection
            </div>
            <div className="text-[.3rem] absolute bottom-0 right-0 text-gray-700 font-main">
              <a
                href="https://mid-nft-gallery.vercel.app/"
                target="_blank"
                rel="noreferrer"
              >
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
