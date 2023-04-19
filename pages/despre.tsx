import Image from "next/image";
import { useRouter } from "next/router";
import { roboto } from "utils/fonts";

export default function Despre() {
  const router = useRouter();

  return (
    <div className={""}>
      <div
        className={`text-white relative h-72 w-full bg-black p-4
      md:py-8 md:px-4
      lg:py-16 lg:px-32
      `}
      >
        <h1 className={`${roboto.className} text-3xl absolute z-10`}>
          Despre noi
        </h1>
        <h3 className={` text-xl w-[60%] mt-12 absolute z-10`}>
          Manichiura & pedichiura realizate cu drag
        </h3>
        <Image
          src="https://images.unsplash.com/photo-1632345031435-8727f6897d53?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
          fill
          alt="Poza cu manichiurista noastra executand o lucrare"
          className={"opacity-60 object-cover"}
        />
      </div>
      <div
        className={`
      flex flex-col gap-4 p-4 text-accent
      bg-gradient-to-t  from-primary to-white
      md:py-8 md:px-4
      lg:py-16 lg:px-32
      `}
      >
        <h3 className={`${roboto.className} text-3xl font-bold`}>
          Bun venit la Ally Nails
        </h3>
        <p className="text-lg font-bold lg:w-[80%] xl:w-[60%]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
          elementum, libero vitae venenatis hendrerit, orci quam mattis nibh, id
          sagittis enim ante at ex. Curabitur sit amet ligula congue, hendrerit
          ipsum quis, ultrices turpis. Vivamus pharetra commodo libero.
        </p>
        <p className="text-lg font-bold lg:w-[80%] xl:w-[60%]">
          Aliquam ac tellus a metus hendrerit egestas eget in dui. Proin in
          convallis arcu, a dictum turpis. Curabitur elementum pretium arcu sed
          condimentum. Morbi nibh dui, tempus eget nulla at, tempus ultricies
          purus.
        </p>
        <button
          onClick={() => router.push("/profile")}
          className={`bg-accent text-white p-4 rounded-md 
          my-4 text-2xl ${roboto.className} font-thin
          hover:opacity-90
          md:w-64
          lg:my-8
          `}
        >
          Programeaza-te
        </button>
      </div>
    </div>
  );
}
