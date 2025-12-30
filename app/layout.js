import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "@/components/ui/sonner";
import Header from "@/components/Header";
import Image from "next/image";
import { checkUser } from "@/lib/checkUser";

export const metadata = {
  title: "BudgetIQ",
  description: "AI Finance Platform",
};

export default async function RootLayout({ children }) {
  await checkUser();
  return (
    <ClerkProvider>
      <html lang="en">
        <body>
          {/* Header */}
          <Header />
          <main className="min-h-screen ">{children}</main>
          <Toaster richColors />
          <footer className="bg-blue-50">
            <div className="flex flex-col items-center container mx-auto px-4 py-6 text-center text-gray-600">
              <p>Created by Laxman Katneni</p>
            </div>
          </footer>
        </body>
      </html>
    </ClerkProvider>
  );
}
