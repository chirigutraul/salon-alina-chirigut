import Image from "next/image";
import useSWR from "swr";

export default function Home() {
  const { data, error } = useSWR("/api/clients");

  if (!data) return "Loading...";

  if (error) return "Something went wrong";

  return (
    <div className={"text-white text-2xl p-4 bg-secondary bg-diamond"}>
      <p className="drop-shadow-md">
        Bun venit la Ally Nails, un salon de unghii modern și primitor, care
        și-a deschis porțile în 2022. Manichiurista noastră pricepută, Chirigut
        Alina, are peste 10 ani de experiență în domeniu, oferind servicii de
        îngrijire a unghiilor de cea mai înaltă calitate și atenție
        personalizată fiecărui client.
      </p>
      <p className={"mt-4 drop-shadow-md"}>
        La Ally Nails, ne mândrim cu faptul că oferim o atmosferă caldă și
        primitoare, în care vă puteți relaxa și sa lăsați experta noastră
        manichiuristă să vă ajute să obțineți cea mai bună manichiură sau
        pedichiură. Folosim numai produse și tehnici de cea mai înaltă calitate,
        asigurându-ne că unghiile dvs. arată și se simt absolut minunat.
      </p>
      <p className={"mt-4 drop-shadow-md"}>
        Indiferent dacă căutați o reîmprospătare rapidă sau un set complet de
        unghii acrilice, Ally Nails este locul perfect pentru a vă răsfăța
        puțin. Vizitați-ne astăzi și experimentați cea mai bună îngrijire a
        unghiilor!
      </p>
    </div>
  );
}
