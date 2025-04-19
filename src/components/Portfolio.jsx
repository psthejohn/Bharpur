import blackFriday from "../assets/emails/black-friday.png";
import summerSale from "../assets/emails/summer-sale.png";
import holidayGiftGuide from "../assets/emails/Holiday-Gift-Guide.png";
export default function Portfolio() {
  const emails = [
    { id: 1, image: blackFriday, title: "Black Friday Promo" },
    { id: 2, image: summerSale, title: "Summer Sale" },
    { id: 3, image: holidayGiftGuide, title: "Newsletter" },
  ];

  return (
    <section className="py-12">
      <h2 className="text-3xl font-bold mb-6">My Portfolio</h2>
      <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-6">
        {emails.map(email => (
          <div key={email.id} className="shadow rounded overflow-hidden">
            <img
              src={email.image}
              alt={email.title}
              className="w-full h-auto object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold">{email.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
