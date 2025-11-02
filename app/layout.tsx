import "./globals.css";
import { Gothic_A1 } from "next/font/google";

const gothic = Gothic_A1({
  subsets: ["latin"],
  weight: ["400","500","600","700","800","900"],
  variable: "--font-gothic",
});

export const metadata = {
  title: "AxisTrade — South African Mining Marketplace",
  description: "Trusted ecommerce marketplace for mining supplies in South Africa.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={gothic.variable}>
      <body>{children}</body>
    </html>
  );
}
