import type { Metadata } from "next";

// Minimal layout for the embeddable calculator page
// This prevents the main header/footer from rendering

export const metadata: Metadata = {
  title: "Paraguay Tax Calculator",
  description: "Calculate potential tax savings with Paraguayan residency.",
};

export default function CalculatorLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
} 