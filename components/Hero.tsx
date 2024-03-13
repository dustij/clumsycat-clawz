import Image from "next/image"

const Hero = () => {
  return (
    <div className="h-full w-full bg-gradient-to-b from-transparent via-violet-100 to-violet-300">
      <section
        id="home"
        className="md:bg-hero md:bg-md lg:bg-lg mt-[70px] h-[calc(100vh-70px)] bg-none bg-center bg-no-repeat lg:h-[912px]"
        // className="to-background_light via-background_light h-[80vh] bg-gradient-to-t from-violet-300 lg:h-[912px]"
      >
        <div className="container mx-auto h-full">
          <div className="flex h-full flex-col justify-between pt-12 sm:flex-row sm:pt-48">
            <div className="h-ful flex flex-col">
              <div className="mb-8">
                <h1 className="h1 text-violet-900">
                  CLUMSY
                  <span className="h1 hidden text-violet-500 sm:inline-block">
                    CAT
                  </span>
                </h1>
                <h1 className="h1 text-violet-500 sm:hidden">CAT</h1>
              </div>
              {/* Description */}
              <div className="md:w-[50%] lg:pl-2">
                <p className=" md:h5 lg:h4 font- text-lg text-violet-900">
                  Embrace the whimsy of innovation with ClumsyCat Token—where
                  Fluffy&apos;s fumbles fuel your fortune
                </p>
              </div>
              {/* Buttons */}
            </div>
            <Image
              className="mb-7 md:hidden"
              src="/img/hero/fluffy-transparent.png"
              width={600}
              height={600}
              alt="Hero"
            />
          </div>
        </div>
      </section>
    </div>
  )
}

export default Hero
