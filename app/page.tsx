
import Link from "next/link"
import {Button} from "@/components/ui/button"
import Image from "next/image"
import logo from "@/assets/logo.svg"

export default function Home(){
  return <section className="grid place-items-center h-screen items-center px-4">
    <div className="border grid gap-4 p-5 rounded text-center place-items-center shadow transition ">
      <h1 className="text-5xl font-bold tracking-wider uppercase">Welcome to my job app</h1>
      <h2 className="capitalize text-slate-700">you will find your dream job here</h2>
      <Button asChild className="w-20" size="lg" variant="default" >
        <Link href="/login">Login</Link>
      </Button>
      <Image src={logo} alt="logo"/>
    </div>
  </section>
}

