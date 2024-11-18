
const SuccessStories = () => {
  return (
    <section className="bg-white p-8 rounded-2xl border-2 border-blue-200 mt-8">
      <h2 className="text-4xl font-bold mb-6 text-center text-blue-600">
        Success Stories
      </h2>
      <div className="space-y-6">
        <div className="p-6 bg-gray-100 rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold text-blue-600">
            A Warm Winter for Rajshahi
          </h3>
          <p className="text-gray-800 leading-relaxed mt-2">
            Thanks to our donors and volunteers, over 500 families in Rajshahi
            received warm clothing last winter. One recipient, Amina Begum,
            shared, &quot;I am so grateful for the warm clothes. My children can now
            go to school comfortably even on the coldest days.&quot;
          </p>
        </div>
        <div className="p-6 bg-gray-100 rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold text-blue-600">
            Bringing Smiles to Sylhet
          </h3>
          <p className="text-gray-800 leading-relaxed mt-2">
            Our Sylhet campaign successfully distributed blankets and jackets to
            over 300 individuals. Volunteer Ahmed Khan said, &quot;Seeing the
            smiles on their faces when they received the donations was the best
            reward. It made all our efforts worth it.&quot;
          </p>
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;
