import { FaHouseChimney, FaGithub } from 'react-icons/fa6';

export default function Header() {
  return (
    <header className="bg-bluewood-900 flex justify-between items-center px-6">
      <div className="bg-sundance-600 px-6">
        <h1 className="text-center text-white-blueish p-1 font-bold text-xs ">
          LISTA DE TAREFAS
        </h1>
      </div>
      <div className="flex gap-3 text-white-blueish">
        <a
          href="https://github.com/dennerrubio"
          target="_blank"
          rel="noreferrer"
          className="bg-sundance-600 hover:bg-sundance-700 p-1 px-2 transition-all"
        >
          <FaGithub className="scale-125" />
        </a>
        <a
          href="https://dennerrubio.github.io/portfolio/src/index.html"
          target="_blank"
          rel="noreferrer"
          className="bg-sundance-600 hover:bg-sundance-700 p-1 px-2 transition-all"
        >
          <FaHouseChimney className="scale-125" />
        </a>
      </div>
    </header>
  );
}
