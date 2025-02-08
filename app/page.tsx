'use client'

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";


export default function Home() {
  let router = useRouter();
  return (
    <div className="mt-48 w-full">
      <div className="flex flex-col items-center w-full">
        <Button onClick={() => router.push('/themes')} variant={'outline'} >Go to themes</Button>
      </div>
    </div>
  );
}
