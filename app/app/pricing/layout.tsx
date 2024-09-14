import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Pricing | MusMotion",
  description: "MusMotion - Pricing",
};
export default function PricingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <section>{children}</section>;
}
