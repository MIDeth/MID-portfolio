export default function About() {
  return (
    <>
      <div className="w-[50rem] font-main ml-80">
        <div className="flex justify-between">
          <div className="flex items-center ">
            <div className="mr-3">
              <div className="text-xl font-vogue ">MID</div>
              <img src="me.jpeg" className="h-40 rounded-full " />
            </div>
            <div>
              <div className="font-mainME">MALE</div>
              <div className="font-mainME">19yo</div>
            </div>
          </div>
          <div className="border-2 w-[34rem] ml-2 mt-10">
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
