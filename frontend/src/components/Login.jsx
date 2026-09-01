import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/icons/Logo.png';

function Login() {
  const name = useRef(null);
  const [inputValue, setInputValue] = useState('');
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    const username = inputValue.trim();
    if (username) {
      localStorage.setItem('username', username);
      navigate('/chat');
    }
  }

  return (
    <div className="ambient flex min-h-screen items-center justify-center px-4 py-10">
      <section className="glass grid w-full max-w-5xl overflow-hidden rounded-3xl shadow-[0_24px_80px_rgba(76,29,149,0.28)] lg:grid-cols-[1.05fr_0.95fr]">
        <aside className="relative hidden min-h-[420px] flex-col justify-between overflow-hidden p-10 lg:flex">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(99,102,241,0.35),transparent_42%),radial-gradient(circle_at_80%_80%,rgba(168,85,247,0.28),transparent_46%)]"
          />
          <div className="relative">
            <div className="flex items-center gap-2">
              <img src={logo} alt="" className="h-14 w-14 object-contain" />
              <span className="text-xl font-semibold tracking-tight text-white">Concord</span>
            </div>
            <p className="mt-10 max-w-xs text-3xl font-semibold leading-tight tracking-tight text-white">
              Um espaço calmo para conversar.
            </p>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-violet-200/80">
              Entre com o seu nome. Sem ruído, sem excesso — só a conversa.
            </p>
          </div>
          <div className="relative mt-12 h-40 rounded-2xl border border-dashed border-violet-400/25 bg-indigo-950/30">
            <span className="absolute inset-0 flex items-center justify-center text-xs tracking-wide text-violet-300/50">
              Espaço para imagem
            </span>
          </div>
        </aside>

        <div className="flex flex-col justify-center px-8 py-12 sm:px-12">
          <div className="mb-8 flex items-center gap-2 lg:hidden">
            <img src={logo} alt="" className="h-12 w-14 object-contain" />
            <span className="text-lg font-semibold text-white">Concord</span>
          </div>

          <h1 className="text-2xl font-semibold tracking-tight text-white">Bem-vindo</h1>
          <p className="mt-2 text-sm text-violet-200/70">Como devemos te chamar?</p>

          <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            <label className="block">
              <span className="mb-2 block text-xs font-medium uppercase tracking-[0.14em] text-violet-300/80">
                Nome
              </span>
              <input
                ref={name}
                autoFocus
                autoComplete="nickname"
                name="username"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Seu nome"
                className="w-full rounded-2xl border border-violet-400/20 bg-indigo-950/50 px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-violet-300/35 focus:border-violet-400/60 focus:ring-4 focus:ring-violet-500/15"
              />
            </label>

            <button
              type="submit"
              disabled={!inputValue.trim()}
              className="w-full rounded-2xl bg-linear-to-r from-indigo-500 via-violet-500 to-purple-500 py-3.5 text-sm font-semibold text-white shadow-[0_10px_30px_rgba(124,58,237,0.35)] transition hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-40"
            >
              Entrar
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}

export default Login;
