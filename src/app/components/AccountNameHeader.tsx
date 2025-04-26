import { useSearchParams } from "next/navigation";

export const AccountNameHeader = () => {
  const searchParams = useSearchParams();
  const title = searchParams.keys().next().value || "Posts";

  return <h1 className="text-3xl font-bold mb-8 text-center">{title}</h1>;
};
