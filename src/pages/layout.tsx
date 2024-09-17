import Navebar from "./navbar/nave";

export default function RootLayaot({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <header className="sticky top-0 z-40">
        <Navebar />.
      </header>
      {children}
    </>
  );
}
