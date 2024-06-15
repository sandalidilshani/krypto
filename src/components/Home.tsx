import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen  flex flex-col  justify-center bg-gradient-to-br from-blue-900 to-black text-white">
      <Head>
        <title>Discover And Collect Rare NFTs</title>
        <meta
          name="description"
          content="The most secure marketplace for buying and selling unique crypto assets."
        />
      </Head>

      <header className="absolute  top-0 w-full p-6 px-60 flex justify-between items-center max-lg:p-4">
        <div className="text-lg font-bold">KKYPTO</div>
        <nav className="space-x-8">
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

      <div className="text-left mt-20 mx-10 md:mx-20 lg:mx-60 flex flex-row h-579 w-1040">
        <div className="flex flex-col m-16 md:mr-8">
          <h1 className="text-6xl font-extrabold mb-6  text-87px">
            Discover
            <br /> And
            <br /> Collect <br />
            Rare NFTs
          </h1>

          <p className="mb-12 text-lg">
            The most secure marketplace for buying <br />
            and selling unique crypto assets.
          </p>
          <div className="flex space-x-4 justify-center">
            <button className="px-6 py-3 bg-purple-600 rounded-full text-white font-bold hover:bg-purple-700 transition">
              BUY NFTs
            </button>
            <button className="px-6 py-3 border-2 border-white rounded-full text-white font-bold hover:bg-white hover:text-black transition">
              SELL NFTs
            </button>
          </div>
        </div>

        <div className=" relative md: m-10 flex  w-[488px] h-[578px] max-md:w-[400px] ">
          <Image
            src="/image/main.png"
            alt="NFT Illustration"
            fill
            objectFit="contain"
          />
        </div>
      </div>
    </div>
  );
}
