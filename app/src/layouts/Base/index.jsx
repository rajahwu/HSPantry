import PropTypes from 'prop-types';

export default function BaseLayout({ children }) {
  return (
    <div className="bg-blue-50 min-h-screen grid grid-rows-[auto_1fr_auto] grid-cols-[1fr_3fr] gap-4">
      <header className="bg-blue-500 text-white p-4 col-span-2">
        <h1 className="text-2xl font-bold">My App</h1>
      </header>
      <div className="flex">
        <aside className="bg-blue-200 p-4">
          <nav>
            <ul>
              <li><a href="#" className="text-blue-600">Pantry 1</a></li>
              <li><a href="#" className="text-blue-600">Pantry 2</a></li>
            </ul>
          </nav>
        </aside>
        <main className="p-4 col-span-2">
          {children}
        </main>
      </div>
      <footer className="bg-blue-500 text-white p-4 col-span-2">
        <p>&copy; 2021</p>
      </footer>
    </div>
  );
}

BaseLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
