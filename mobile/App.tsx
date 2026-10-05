import { Image, StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import ResourceCard from './src/components/ResourceCard';
import type { Resource } from './src/types';

const resource: Resource = {
  id: 1,
  title: 'Мережеві протоколи',
  minutes: 35,
};

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.screen}>
        <Text style={styles.heading}>Мій каталог навчання</Text>

        <View style={styles.row}>
          <Image source={require('./assets/icon.png')} style={styles.image} />
          <View style={{ flex: 1 }}>
            <ResourceCard resource={resource} />
          </View>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, padding: 20, backgroundColor: '#f3f4f6' },
  heading: { fontSize: 26, fontWeight: '700', marginBottom: 20 },
  row: { flexDirection: 'row', alignItems: 'center', gap: 12 },
  image: { width: 64, height: 64 },
});