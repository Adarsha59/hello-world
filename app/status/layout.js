export default function layout({ children, login, register }) {
  return (
    <section>
      {children}
      {login}
    </section>
  );
}
