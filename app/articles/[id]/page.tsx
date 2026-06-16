import type { Metadata } from "next";
import ArticleRedirectClient from "./ArticleRedirectClient";

export const metadata: Metadata = { title: "تحويل" };

export function generateStaticParams() {
  return [
    { id: "1" }, { id: "2" }, { id: "3" }, { id: "4" },
    { id: "5" }, { id: "6" }, { id: "7" }, { id: "8" },
  ];
}

export default function Page() {
  return <ArticleRedirectClient />;
}
