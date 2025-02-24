"use client";
import { Poppins } from "next/font/google";
import { useState } from "react";
import "./globals.css";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Head } from "next/head";
import { Link } from 'next/link'


const poppins = Poppins({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
  display: 'swap',
});


export default function RootLayout({ children }) {
  const [modeNuit, setModeNuit] = useState(false);

  const toggleModeNuit = () => {
    setModeNuit(!modeNuit);
  };

  return (
    <html lang="en" className={poppins.className}>
      <body className={`grid grid-cols-12 min-h-screen w-full ${modeNuit ? 'bg-darkbg text-darktext' : 'bg-white text-black'}`}>
        <div className="col-span-12 flex justify-between items-center p-4">
          <div div className="flex items-center space-x-2" >
            <Switch id="mode-nuit" checked={modeNuit} onCheckedChange={toggleModeNuit} />
            <Label htmlFor="mode-nuit">Mode sombre</Label>
          </div >
        </div >

        {children}
      </body >
    </html >
  );
}
