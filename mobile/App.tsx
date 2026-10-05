import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import ResourceCard from './src/components/ResourceCard';
import type { Resource } from './src/types';

const resource: Resource = {
  id: 1,
  title: 'Основи React Native Основи React Native',
  minutes: 35,
};

export default function App() {
  return (
    <View style={styles.container}>
      <ResourceCard resource={resource} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});