import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet } from 'react-native';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import { Header } from '@components/layout/header';
import Menu from '@components/menu';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ModalProvider } from '@hooks/useModal';
import { MenuItemModal } from '@components/menu/menuItemModal';
import 'react-native-gesture-handler'

export default function App() {
  const [fontsLoaded] = useFonts({
    'Linik-Black': require('./assets/fonts/LinikSans-Black.ttf'),
    'Linik-Bold': require('./assets/fonts/LinikSans-Bold.ttf'),
    'Linik-Regular': require('./assets/fonts/LinikSans-Regular.ttf'),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  const queryClient = new QueryClient();

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <Header />
      <ModalProvider>
        <QueryClientProvider client={queryClient}>
          <>
            <Menu />
            <MenuItemModal />
          </>
        </QueryClientProvider>
      </ModalProvider>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
