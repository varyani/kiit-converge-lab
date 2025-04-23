export default function Team() {
  return (
    <section id="team" className="py-12">
      <div className="max-w-5xl mx-auto text-center">
        <h3 className="text-3xl font-bold mb-6">Meet the Team</h3>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white p-4 rounded-xl shadow-md">
            <h4 className="font-bold">Dr. XYZ</h4>
            <p>Faculty Advisor</p>
          </div>
          <div className="bg-white p-4 rounded-xl shadow-md">
            <h4 className="font-bold">Alice</h4>
            <p>Computer Vision Lead</p>
          </div>
          <div className="bg-white p-4 rounded-xl shadow-md">
            <h4 className="font-bold">Bob</h4>
            <p>Network Systems Researcher</p>
          </div>
        </div>
      </div>
    </section>
  );
}