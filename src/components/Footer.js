import { FaArrowTurnDown, FaMarker, FaTrash } from 'react-icons/fa6';

export default function Footer() {
  return (
    <footer>
      <div className="mx-auto sm:ml-6 mb-6 w-72 sm:w-96">
        <p className="bg-bluewood-900 py-2 px-6 uppercase text-xs font-bold text-white-blueish shadow-lg">
          Use o botão <FaArrowTurnDown className="inline" /> para registrar sua
          tarefa. <br />
          Após registrar a sua tarefa, use os botões <br />
          <FaMarker className="inline" /> para editar e{' '}
          <FaTrash className="inline" /> para deletar.
        </p>
      </div>
      <div className="bg-bluewood-900 flex justify-center sm:justify-end px-6">
        <div className="text-white-blueish bg-sundance-600 py-1 px-6">
          <p className="text-right text-xs uppercase font-bold">
            Criado por Denner Rubio, 2023.
          </p>
        </div>
      </div>
    </footer>
  );
}
