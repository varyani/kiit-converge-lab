export default function Navbar() {
  return (
    <nav className="bg-white shadow-md p-4 fixed top-0 w-full z-10">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold text-blue-600">KIIT-Converge Lab</h1>
        <div className="space-x-4">
          <a href="#projects" className="hover:text-blue-600">Projects</a>
          <a href="#team" className="hover:text-blue-600">Team</a>
          <a href="#contact" className="hover:text-blue-600">Contact</a>
        </div>
      </div>
    </nav>
  );
}