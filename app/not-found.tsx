'use client'

import { Button } from "@/components/ui/button";
import { FileX } from "lucide-react";
import { useRouter } from "next/navigation";



export default function NotFound() {
  let router = useRouter();

  return (
    <div className="mt-48 w-full">
      <div className="flex flex-col items-center w-full gap-12">
        <div className="flex flex-row items-center gap-4">
          <FileX size={64} strokeWidth={0.5} className="w-16 h-16 text-accent-foreground"/>
          <p className="font-semibold text-2xl">Page not found</p>
        </div>
        <Button onClick={() => router.push('/themes')} variant={'outline'} >Go to themes</Button>
      </div>
    </div>
  )
}