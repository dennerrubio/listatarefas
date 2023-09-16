import React from 'react';
import { FaArrowTurnDown, FaMarker, FaTrash } from 'react-icons/fa6';

export default class Main extends React.Component {
  state = {
    inputText: '',
    tarefas: [
      'Acordar',
      'Tomar café',
      'Dar carinho no gato antes de ir trabalhar se não ele fica triste',
    ],
  };

  handleValor = (e) => {
    this.setState({ inputText: e.target.value });
  };

  handleClick = () => {
    const { tarefas } = this.state;
    let { inputText } = this.state;
    if (inputText.length !== 0) {
      inputText = inputText.trim();
      this.setState({ tarefas: [...tarefas, inputText] });
      this.setState({ inputText: '' });
    } else {
      alert('Não é possível criar uma tarefa sem texto.');
    }
  };

  handleRemove(e) {
    const { tarefas } = this.state;
  }

  render() {
    const { tarefas, inputText } = this.state;

    return (
      <main className="bg-white max-w-2xl container shadow-xl mt-28 mx-auto px-4 py-8">
        <div className="flex justify-center py-2">
          <input
            onChange={this.handleValor}
            type="text"
            value={inputText}
            className="text-bluewood-900 font-semibold indent-2 max-w-xl w-full border-2 border-bluewood-800 outline-none mr-2"
          />
          <button
            onClick={this.handleClick}
            className="bg-sundance-600 hover:bg-sundance-700 border-2 border-sundance-600 hover:border-sundance-700 px-5 text-white transition-all"
          >
            <FaArrowTurnDown />
          </button>
        </div>
        <ul className="max-w-2xl mx-auto">
          {tarefas.map((e) => (
            <li
              key={e}
              className="flex justify-between text-white bg-bluewood-800 hover:bg-sundance-600 my-3 px-2 py-1 transition-all"
            >
              {e}{' '}
              <div className="flex items-center gap-2 pl-3 align-middle">
                <FaMarker className="hover:text-sundance-200 cursor-pointer" />
                <FaTrash
                  className="hover:text-sundance-200 cursor-pointer"
                  onClick={this.handleRemove}
                />
              </div>
            </li>
          ))}
        </ul>
      </main>
    );
  }
}
