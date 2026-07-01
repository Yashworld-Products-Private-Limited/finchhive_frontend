import Loader from "@/components/Loader";

export default function CaseStudiesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Loader />
      {children}
    </>
  );
}
