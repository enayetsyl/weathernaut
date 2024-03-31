import { Home, Navbar } from "./constant";
import { Stack, CircularProgress, backgroundImage } from "./constant";
import { useSharedContext } from "./context/SharedContext";

function App() {
  const { isLoading } = useSharedContext()
   return (
    <main>
      {
        isLoading ? (
          <div className="min-h-screen justify-center items-center flex" style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <Stack sx={{ color: 'grey.500' }} spacing={2} direction="row">
      <CircularProgress color="secondary" />
      <CircularProgress color="success" />
      <CircularProgress color="inherit" />
      <CircularProgress color="secondary" />
      <CircularProgress color="success" />
      <CircularProgress color="inherit" />
      <CircularProgress color="secondary" />
      <CircularProgress color="success" />
      <CircularProgress color="inherit" />
    </Stack>
          </div>

        ) : (
          <>
          <Navbar  />
          <Home/>
          </>
        )
      }
    </main>
  );
}

export default App;
