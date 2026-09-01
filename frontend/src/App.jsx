import { useState } from 'react';
import logo from './assets/icons/Logo.png';
import CardMessage from './components/cardMessage';
import Login from './components/Login';

function App() {
  const [user, setUser] = useState(null);
  const allMessages = [
    {
      id: 1,
      user: 'jogumelo',
      message: 'hello world!',
    },
    {
      id: 2,
      user: 'giovanni',
      message: 'hello world?',
    },
    {
      id: 3,
      user: 'guilherme',
      message: 'yes, hello world!',
    },
    {
      id: 4,
      user: 'jogumelo',
      message: 'alguém vai entrar na call?',
    },
    {
      id: 5,
      user: 'giovanni',
      message: 'em cinco minutos estou lá',
    },
    {
      id: 6,
      user: 'guilherme',
      message: 'combinado. deixo o link aqui',
    },
    {
      id: 7,
      user: 'jogumelo',
      message: 'obrigado!',
    },
    {
      id: 8,
      user: 'giovanni',
      message: 'pode mandar o horário também?',
    },
    {
      id: 9,
      user: 'guilherme',
      message: '21h. sem pressa.',
    },
  ];

  if (!user) {
    return <Login onEnter={setUser} />;
  }

  return (
    <div className="ambient flex h-dvh max-h-dvh flex-col overflow-hidden text-white">
      <header className="glass shrink-0">
        <div className="mx-auto flex w-full max-w-3xl items-center justify-between px-5 py-3.5">
          <div className="flex items-center gap-2">
            <img className="h-12 w-14 object-contain" src={logo} alt="Concord" />
            <div>
              <h1 className="text-lg font-semibold leading-none tracking-tight">Concord</h1>
              <p className="mt-1 text-xs text-violet-300/70">Sala geral</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <span className="hidden rounded-full border border-violet-400/20 bg-indigo-950/40 px-3 py-1.5 text-xs text-violet-200/90 sm:inline">
              {user}
            </span>
            <button
              type="button"
              onClick={() => setUser(null)}
              className="rounded-xl border border-violet-400/25 px-4 py-2 text-sm font-medium text-violet-100 transition hover:border-violet-300/50 hover:bg-violet-500/10"
            >
              Sair
            </button>
          </div>
        </div>
      </header>

      <main className="mx-auto flex min-h-0 w-full max-w-3xl flex-1 flex-col overflow-hidden">
        <div className="scroll-chat min-h-0 flex-1 overflow-y-auto px-4 py-5 sm:px-6">
          <p className="mb-6 text-center">
            <span className="rounded-full border border-violet-400/15 bg-indigo-950/30 px-3 py-1 text-[11px] uppercase tracking-[0.16em] text-violet-300/50">
              Hoje
            </span>
          </p>
          <div className="flex flex-col">
            {allMessages.map((message) => (
              <CardMessage
                key={message.id}
                message={message.message}
                userMsg={message.user}
                user={user}
              />
            ))}
          </div>
        </div>

        <form
          className="glass mx-4 mb-4 flex shrink-0 items-center gap-3 rounded-2xl px-3 py-2 sm:mx-6"
          action="."
          onSubmit={(event) => event.preventDefault()}
        >
          <input
            className="w-full bg-transparent px-3 py-2.5 text-sm text-white outline-none placeholder:text-violet-300/40"
            type="text"
            name="message"
            id="message"
            placeholder="Escreva uma mensagem"
          />
          <button
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 to-violet-600 text-white transition hover:brightness-110"
            type="submit"
            aria-label="Enviar"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
              <path
                d="M5 12h14M13 6l6 6-6 6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </form>
      </main>
    </div>
  );
}

export default App;
