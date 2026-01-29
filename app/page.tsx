"use client";


import Link from "next/link"
import {Button} from "@/components/ui/button"
import Image from "next/image"
import logo from "@/assets/logo.svg"


import { signIn, signOut, useSession } from "next-auth/react";

export default function Home(){
  const {data: session} = useSession()


  return <section className="grid place-items-center h-screen items-center px-4">
    <div className="border grid gap-4 p-5 rounded text-center place-items-center shadow transition ">
      <h1 className="text-5xl font-bold tracking-wider uppercase">Welcome to my job app</h1>
      <h2 className="capitalize text-slate-700">you will find your dream job here</h2>
      {/* <Button asChild className="w-20" size="lg" variant="default" >
        <Link href="/login">Login</Link>
      </Button> */}
      {session ?  <>
       <img src={session.user?.image || ""} alt={session.user?.name || "User"} width={80} height={80} />
      <p>Signed in as {session.user?.name}</p>
        <p>Signed in as {session.user?.email}</p>
        <Button size="lg" variant="default" onClick={()=>signOut()}>Sign Out</Button>
      </> :  <Button size="lg" variant="default" onClick={()=>signIn()}>Sign In</Button>}
     
      <Image src={logo} alt="logo"/>
    </div>
  </section>
}

