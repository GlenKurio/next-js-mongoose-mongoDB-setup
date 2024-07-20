"use client";

import { Button } from "@/components/ui/button";
import { createUser } from "@/lib/actions/createUser";
import { TUserDocument } from "@/lib/db/userSchema";
import Image from "next/image";

export default function Home() {
  const handleClick = async () => {
    const res = await createUser();
    const user: TUserDocument = JSON.parse(res);
    const ha = user.console.log("Response: ", res);
  };
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Button onClick={() => handleClick()}>Create user</Button>
    </main>
  );
}
