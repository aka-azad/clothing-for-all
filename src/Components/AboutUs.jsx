const AboutUs = () => {
  return (
    <section className="bg-white p-8 rounded-2xl border-2 mt-7">
      <h2 className="text-4xl font-bold mb-6 text-center text-blue-600">
        About Us
      </h2>
      <hr />
      <p className="text-gray-800 my-6 leading-relaxed">
        Welcome to
        <span className="font-bold text-blue-600"> Clothing for All</span>, your
        warm-hearted platform dedicated to helping those in need during the
        chilly winter months across Bangladesh. Our mission is to connect
        generous donors with dedicated volunteers, making it easy for you to
        donate winter clothing and bring warmth to the most vulnerable
        communities.
      </p>
      <h3 className="text-3xl font-semibold mb-4 text-blue-600">Our Mission</h3>
      <hr />
      <p className="text-gray-800 my-6 leading-relaxed">
        As the temperatures drop, thousands of people, especially in rural and
        low-income areas, struggle to stay warm due to a lack of proper winter
        clothing. Winter Donation was created to bridge this gap and ensure that
        everyone has the means to stay warm and healthy during the cold season.
      </p>
      <h3 className="text-3xl font-semibold mb-4 text-blue-600">What We Do</h3>
      <hr />
      <ul className="list-disc list-inside text-gray-800 my-6 leading-relaxed space-y-2">
        <li>
          <strong>Donation Campaigns:</strong> We organize and manage donation
          campaigns targeting specific regions across Bangladesh.
        </li>
        <li>
          <strong>Connecting Donors and Volunteers:</strong> Our platform
          facilitates the connection between donors and volunteers, ensuring
          that donations are efficiently collected and distributed.
        </li>
        <li>
          <strong>Transparency and Trust:</strong> We provide clear and detailed
          information about each campaign, allowing donors to see the impact of
          their contributions.
        </li>
      </ul>
      <h3 className="text-3xl font-semibold mb-4 text-blue-600">
        How You Can Help
      </h3>
      <hr />
      <ul className="list-disc list-inside text-gray-800 my-6 leading-relaxed space-y-2">
        <li>
          <strong>Donate:</strong> Browse our active campaigns and donate winter
          clothing to those in need.
        </li>
        <li>
          <strong>Volunteer:</strong> Join our network of volunteers to help
          collect, sort, and distribute donations.
        </li>
        <li>
          <strong>Spread the Word:</strong> Share our mission with your friends
          and family to help us reach more people in need.
        </li>
      </ul>
      <p className="text-gray-800 leading-relaxed text-xl font-bold">
        Together, we can make a significant difference and bring warmth to those
        who need it most. Thank you for your generosity and support!
      </p>
    </section>
  );
};

export default AboutUs;
