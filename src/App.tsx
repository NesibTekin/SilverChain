import { Chain } from './components/Chain';
import { CheckInButton } from './components/CheckInButton';
import { Stats } from './components/Stats';
import { LoginForm } from './components/LoginForm';
import { Header } from './components/Header';
import { useAuth } from './hooks/useAuth';
import { useStreak } from './hooks/useStreak';

function App() {
  const { username, login, logout } = useAuth();

  // useStreak her zaman çalışacak, ancak username yoksa boş bir değer dönecek
  const streakData = useStreak(username || ""); 
  
  if (!username) {
    return <LoginForm onLogin={login} />;
  }
  
  const { streak, handleCheckIn, isCheckInDisabled } = streakData;
  const totalSilver = streak * 3; // 3 grams per day

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-4 py-12">
        <Header username={username} onLogout={logout} />
        <Stats streak={streak} totalSilver={totalSilver} />
        
        <div className="my-12">
          <CheckInButton onCheckIn={handleCheckIn} disabled={isCheckInDisabled()} />
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8 mb-12 overflow-hidden">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
            Your Silver Chain
          </h2>
          <Chain streak={streak} />
        </div>
      </div>
    </div>
  );
}

export default App;