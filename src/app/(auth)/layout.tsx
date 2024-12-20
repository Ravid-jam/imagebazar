export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <h1>Auth Heading</h1>
      <div>{children}</div>
    </>
  );
}
