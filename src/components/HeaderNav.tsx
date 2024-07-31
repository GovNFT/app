import NavLink from "#/components/NavLink";

export default function HeaderNav() {
  return (
    <>
      <NavLink size="sm" color="light" href="/dash">
        <div className="h-10 border border-gray-200 hover:border-gray-300 dark:border-gray-700/40 hover:dark:border-gray-700/80 px-4 rounded-xl flex items-center justify-center">
          <div className="uppercase font-bold tracking-widest text-[11px]">Dashboard</div>
        </div>
      </NavLink>
      <NavLink size="sm" color="light" href="/create">
        <div className="h-10 border border-gray-200 hover:border-gray-300 dark:border-gray-700/40 hover:dark:border-gray-700/80 px-4 rounded-xl flex items-center justify-center">
          <div className="uppercase font-bold tracking-widest text-[11px]">Create</div>
        </div>
      </NavLink>
    </>
  );
}
