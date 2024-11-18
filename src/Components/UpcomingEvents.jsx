
const UpcomingEvents = () => {
  return (
    <section className="bg-white p-8 rounded-2xl border-2 border-blue-200 mt-8">
      <h2 className="text-4xl font-bold mb-6 text-center text-blue-600">
        Upcoming Events
      </h2>
      <div className="space-y-6">
        <div className="p-6 bg-gray-100 rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold text-blue-600">
            Winter Donation Drive in Dhaka
          </h3>
          <p className="text-gray-800 leading-relaxed mt-2">
            Date: December 10, 2024
            <br />
            Location: 123 Charity Lane, Dhaka
            <br />
            Join us for our annual winter donation drive in Dhaka. Bring your
            donations and help us sort and distribute warm clothing to those in
            need.
          </p>
        </div>
        <div className="p-6 bg-gray-100 rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold text-blue-600">
            Volunteer Meetup in Chittagong
          </h3>
          <p className="text-gray-800 leading-relaxed mt-2">
            Date: November 25, 2024
            <br />
            Location: 456 Kindness Street, Chittagong
            <br />
            Meet fellow volunteers and learn more about our upcoming campaigns.
            Let&apos;s work together to make a difference this winter.
          </p>
        </div>
      </div>
    </section>
  );
};

export default UpcomingEvents;
