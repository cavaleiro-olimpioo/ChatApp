function CardMessage({ message, userMsg, user }) {
  const isOwn = userMsg === user;

  if (isOwn) {
    return (
      <article className="mt-3 flex max-w-[78%] flex-col items-end self-end">
        <div className="rounded-2xl rounded-br-md bg-linear-to-br from-indigo-500 via-violet-500 to-purple-600 px-4 py-3 shadow-[0_8px_24px_rgba(76,29,149,0.28)]">
          <p className="text-[0.9375rem] leading-relaxed text-white">{message}</p>
        </div>
      </article>
    );
  }

  return (
    <article className="mt-3 flex max-w-[78%] flex-col items-start self-start">
      <span className="mb-1.5 ml-1 text-[11px] font-medium uppercase tracking-[0.12em] text-violet-300/70">
        {userMsg}
      </span>
      <div className="rounded-2xl rounded-bl-md border border-violet-300/20 bg-indigo-800/55 px-4 py-3">
        <p className="text-[0.9375rem] leading-relaxed text-indigo-50">{message}</p>
      </div>
    </article>
  );
}

export default CardMessage;
