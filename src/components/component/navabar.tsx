import Link from 'next/link';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-gray-100 p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        {/* ... */}
        <div className="flex items-center">
          {/* ... */}
          <Link href="/" className="text-gray-600 mr-4">
            Home
          </Link>
          <Link href="/courses" className="text-gray-600 mr-4">
            Cursos
          </Link>
          <Link href="/postgraduate" className="text-gray-600 mr-4">
            Pós-graduação
          </Link>
          <Link href="/contact" className="text-gray-600 mr-4">
            Fale conosco
          </Link>
          <button className="bg-green-500 text-white px-4 py-2 rounded">Inscreva-se</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
