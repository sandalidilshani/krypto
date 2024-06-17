import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col justify-center bg-gradient-to-br from-blue-900 to-black text-white">
      <Head>
        <title>Discover And Collect Rare NFTs</title>
        <meta
          name="description"
          content="The most secure marketplace for buying and selling unique crypto assets."
        />
      </Head>

      <header className="absolute top-0 w-full p-6 px-12 lg:px-28 flex justify-between items-center max-md:flex-col ">
        <div className="text-lg font-bold ">KKYPTO</div>
        <nav className="space-x-8 md:space-x-8">
          <a href="#" className="hover:underline">
            about
          </a>
          <a href="#" className="hover:underline">
            pricing
          </a>
          <a href="#" className="hover:underline">
            contact
          </a>
          <a href="#" className="hover:underline">
            buy nfts
          </a>
        </nav>
      </header>

      <div className="text-left mt-20 mx-15 md:mx-20 lg:mx-60 flex flex-col md:flex-row sm:flex-col-reverse justify-between">
        <div className="flex flex-col m-4 md:mr-8">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-4 md:mb-6">
            Discover
            <br /> And
            <br /> Collect <br />
            Rare NFTs
          </h1>

          <p className="mb-6 md:mb-12 text-base md:text-lg">
            The most secure marketplace for buying <br />
            and selling unique crypto assets.
          </p>
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 justify-center">
            <button className="px-6 py-3 bg-purple-600 rounded-full text-white font-bold hover:bg-purple-700 transition">
              BUY NFTs
            </button>
            <button className="px-6 py-3 mt-4 md:mt-0 border-2 border-white rounded-full text-white font-bold hover:bg-white hover:text-black transition">
              SELL NFTs
            </button>
          </div>
        </div>

        <div className="relative px-12 mt-8 md:mt-0 flex w-full max-w-[400px] md:max-w-[488px] lg:max-w-[578px]">
          <Image
            src="/image/main.png"
            alt="NFT Illustration"
            layout="responsive"
            width={488}
            height={578}
            objectFit="contain"
          />
        </div>
      </div>
    </div>
  );
}
