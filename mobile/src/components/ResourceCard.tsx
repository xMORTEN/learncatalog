import { Pressable, StyleSheet, Text, View } from 'react-native';
import type { Resource } from '../types';

type ResourceCardProps = {
  resource: Resource;
};

export default function ResourceCard(props: ResourceCardProps) {
  function handlePress() {
    console.log('Натискання перевірено');
  }

  return (
    <View style={styles.card}>
      <Text style={styles.title}>{props.resource.title}</Text>
      <Text style={styles.meta}>{props.resource.minutes} хв</Text>

      <Pressable
        onPress={handlePress}
        style={styles.button}
        accessibilityRole="button"
      >
        <Text style={styles.buttonText}>Перевірити кнопку</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  card: { backgroundColor: '#ffffff', padding: 16, borderRadius: 12, borderWidth: 1, borderColor: '#e5e7eb' },
  title: { fontSize: 20, fontWeight: '600', marginBottom: 6 },
  meta: { fontSize: 16, color: '#6b7280' },
  button: { backgroundColor: '#2563eb', padding: 12, borderRadius: 8, minHeight: 48, marginTop: 12, justifyContent: 'center', alignItems: 'center' },
  buttonText: { color: '#ffffff', fontSize: 16, fontWeight: '500' },
});