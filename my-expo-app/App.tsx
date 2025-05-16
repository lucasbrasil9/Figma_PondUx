import { ScreenContent } from 'components/ScreenContent';
import { StatusBar } from 'expo-status-bar';
import './global.css';
import NotificationScreen from 'components/NotificationsScreen';

export default function App() {
  return (
    <>
      {/* <ScreenContent title="Home" path="App.tsx"></ScreenContent> */}
      <NotificationScreen />
      {/* <StatusBar style="auto" /> */}
    </>
  );
}
