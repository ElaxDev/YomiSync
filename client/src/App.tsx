import { Outlet } from 'react-router';
import { io } from 'socket.io-client';
import { ThemeProvider } from './components/theme-provider';

io('ws://localhost:3000');

function App() {
  return (
    <>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <Outlet />
      </ThemeProvider>
    </>
  );
}

export default App;
