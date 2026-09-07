import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "دروس الأولى باكالوريا",
  description:
    "النسخة الثانية من دروس الأولى باكالوريا في مادة الاجتماعيات (التاريخ والجغرافيا): أهداف ومحاور ومفاهيم أساسية مع رابط مباشر لكل درس.",
};

export default function LessonsV2Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
