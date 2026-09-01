import logo from './assets/icons/Logo.png';
import enviar from './assets/icons/enviar.png'

function App() {
  const allMessages = [
    {
      'id': 1,
      'user': 'jogumelo',
      'message': 'hello world!'
    },
    {
      'id': 2,
      'user': 'giovanni',
      'message': 'hello world?'
    },
    {
      'id': 3,
      'user': 'guilherme',
      'message': 'yes, hello world!'
    }
  ]
  return (
    <div className='flex flex-col items-center w-screen h-screen'>
      <header className='flex justify-between items-center w-full bg-indigo-900 p-5'>
        <div className='flex items-center justify-center'>
          <img className='w-24 -ml-5' src={logo} alt="logo" />
          <h1 className='font-bold text-gray-100 text-2xl -ml-3.75 mb-2' >Concord</h1>
        </div>
        <button className='bg-[#FF000080] w-15 h-10 text-gray-100 border-red-500 border-2 rounded-md'>Sair</button>
      </header>
      <main className='bg-indigo-950 w-full h-full flex flex-col justify-between'>
        <div className=''></div>
        <form className='p-5 flex justify-between' action=".">
          <input className='w-full mr-5 bg-violet-500' type="text" name="message" id="message" />
          <button className='bg-violet-800 rounded-md w-15 h-10 flex justify-center items-center cursor-pointer' type="submit">
            <img src={enviar} alt="enviar" />
          </button>
        </form>
      </main>
    </div>
  );
}

export default App;