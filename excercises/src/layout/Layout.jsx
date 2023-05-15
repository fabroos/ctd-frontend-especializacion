import { Link, Outlet } from 'react-router-dom';

const Layout = ({ routes }: any) => {
  return (
    <div className="w-screen h-screen flex">
      <aside className="w-1/5 h-full bg-gray-200">
        <ul className='divide-y text-sans divide-black border-b border-black'>
          {routes.map((route: any) => (
            <li key={route.path} className='flex hover:bg-gray-300'>
              <Link className='w-full py-2 px-4' to={route.path}>{route.path}</Link>
            </li>
          ))}
        </ul>
      </aside>
      <main className="w-4/5 h-full bg-gray-100 overflow-auto">
        <Outlet/>
      </main>
    </div>
  )
}

export default Layout;