const HowItWorks = () => {
  return (
    <section className="bg-gray-100 p-8 rounded-2xl my-8">
      <h2 className="text-4xl font-bold mb-6 text-center text-blue-600">
        How It Works
      </h2>
      <hr />
      <div className="my-6">
        <h3 className="text-2xl font-semibold mb-4 text-blue-600">
          Instructions for Donation
        </h3>
        <ol className="list-decimal list-inside text-gray-800 leading-relaxed space-y-2">
          <li>
            Sign Up/Login: Create an account or log in to your existing account.
          </li>
          <li>
            Browse Campaigns: Explore the active donation campaigns and select
            one that you want to support.
          </li>
          <li>
            Donate: Fill out the donation form with details of the items you
            wish to donate and submit it.
          </li>
          <li>
            Confirmation: You will receive a confirmation email with details of
            your donation and instructions for the next steps.
          </li>
        </ol>
      </div>
      <div className="mb-6">
        <h3 className="text-2xl font-semibold mb-4 text-blue-600">
          Collection Points
        </h3>
        <hr />
        <p className="text-gray-800 leading-relaxed my-4">
          Our collection points are strategically located to ensure that your
          donations reach those in need as quickly and efficiently as possible.
          Here are some of our major collection points:
        </p>
        <ul className="list-disc list-inside text-gray-800 leading-relaxed space-y-2">
          <li>Dhaka: 123 Charity Lane, Dhaka</li>
          <li>Chittagong: 456 Kindness Street, Chittagong</li>
          <li>Sylhet: 789 Warmth Avenue, Sylhet</li>
          <li>Rajshahi: 101 Care Road, Rajshahi</li>
          <li>Comilla: 202 Compassion Drive, Comilla</li>
          <li>Barisal: 303 Generosity Boulevard, Barisal</li>
        </ul>
      </div>
      <div>
        <h3 className="text-2xl font-semibold mb-4 text-blue-600">
          Supported Divisions
        </h3>
        <hr />
        <p className="text-gray-800 leading-relaxed my-4">
          We support donation campaigns across various divisions in Bangladesh
          to ensure that help reaches every corner. Here are the divisions we
          currently support:
        </p>
        <ul className="list-disc list-inside text-gray-800 leading-relaxed space-y-2">
          <li>Dhaka</li>
          <li>Chittagong</li>
          <li>Sylhet</li>
          <li>Rajshahi</li>
          <li>Comilla</li>
          <li>Barisal</li>
        </ul>
      </div>
    </section>
  );
};

export default HowItWorks;
