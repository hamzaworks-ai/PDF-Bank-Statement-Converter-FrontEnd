import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "StatementFlow - Convert Bank Statements into Excel in Seconds",
  description: "Upload your PDF bank statement and instantly convert it into clean Excel or CSV files. No manual data entry. Perfect for accountants, bookkeepers, and finance teams.",
  keywords: ["bank statement converter", "PDF to Excel", "bank statement to CSV", "accounting software", "finance automation"],
  authors: [{ name: "StatementFlow" }],
  openGraph: {
    title: "StatementFlow - Convert Bank Statements into Excel in Seconds",
    description: "Upload your PDF bank statement and instantly convert it into clean Excel or CSV files.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
