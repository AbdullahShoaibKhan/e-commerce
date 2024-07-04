
import Form from "./_components/form";
import Link from "next/link";
import { getServerAuthSession } from "@/lib/auth";
import { redirect } from "next/navigation";

const page = async () => {
  const session = await getServerAuthSession();

  if (session) {
    console.log("REDIRECT FROM SIGN IN");
    redirect("/Home");
  }
  return (
    <div className="w-full space-y-4 sm:space-y-8">

      <Form />

    </div>
  );
};

export default page;
