export default function About() {
  return (
    <>
      <div className="w-[50rem] max-md:w-[18rem] font-main max-md:ml-20 ml-80 h-[80vh]">
        <div className="flex justify-between max-md:flex-col max-md:justify-center">
          <div className="flex items-center ">
            <div className="mr-3">
              <div className="text-xl font-vogue ">MID</div>
              <img src="logo/logo.svg" className="h-40 " />
            </div>
            <div>
              <div className="font-mainME">MALE</div>
              <div className="font-mainME">19yo</div>
            </div>
          </div>
          <div className="border-2 w-[34rem] ml-2 mt-10 max-md:w-full">
            <div className="flex items-center justify-center h-10 border-2">
              <div className="font-mainME">MID blurb</div>
            </div>
            <div className="p-2">
              <p className="font-main">
                Hey! What’s up? My name is MID. I am a Frontend and Blockchain
                developer with 3 years of developer experience. Skilled in
                develop beautiful frontend work that effectively conveys brand
                messaging and drives customer engagement.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
