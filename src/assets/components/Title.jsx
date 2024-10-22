const Title = ({ title, color = "text-pink" }) => {
  return (
    <section>
      <h1 className={`text-[2rem] font-manuscript text-center ${color}`}>
        {title}
      </h1>
    </section>
  );
};
export default Title;
