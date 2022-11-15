import Card from "./Card";
const Adventure = () => {
  return (
    <section className="max-w-[1240px] mx-auto py-10">
      <h2 className="text-5xl font-bold text-center mb-10">
        Inspiration for your next adventure
      </h2>
      <div className="grid grid-cols-4 gap-6">
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
