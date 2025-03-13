import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "sonner";
import { ExitModal } from "@/components/modals/exit-modal";
import { HeartsModal } from "@/components/modals/hearts-modal";

const font = Nunito({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Triolingo",
  description: "A duolingo clone languange learning app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider afterSignOutUrl="/">
      <html lang="en">
        <body className={`${font.className}`}>
          <Toaster/>
          <ExitModal/>
          <HeartsModal/>
          {children}
          </body>
      </html>
    </ClerkProvider>
  );
}
