import Card from "./Card";
const Adventure = () => {
  return (
    <section className="max-w-[1240px] mx-auto py-10 px-5 sm:px-10 xl:px-0">
      <h2 className="text-3xl xl:text-5xl font-bold text-center mb-10">
        Inspiration for your next adventure
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card img="/adv1.png" />
        <Card img="/adv2.png" />
        <Card img="/adv3.png" />
        <Card img="/adv4.png" />
        <Card img="/adv5.png" />
        <Card img="/adv6.png" />
        <Card img="/adv7.png" />
        <Card img="/adv8.png" />
      </div>
    </section>
  );
};

export default Adventure;
