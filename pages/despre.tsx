import Image from "next/image";
import useSWR from "swr";

export default function Home() {
  const { data, error } = useSWR("/api/clients");

  if (!data) return "Loading...";

  if (error) return "Something went wrong";

  return <div className={"text-white text-2xl p-4"}></div>;
}
