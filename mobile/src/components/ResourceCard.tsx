import React, { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import type { Resource } from '../types';

type ResourceCardProps = {
  resource: Resource;
};

export default function ResourceCard(props: ResourceCardProps) {

  const [isFavorite, setIsFavorite] = useState<boolean>(false);

  function handleToggle() {
    setIsFavorite(previous => !previous);
  }

  return (
    <View style={styles.card}>
      <Text style={styles.title}>{props.resource.title}</Text>
      <Text style={styles.meta}>{props.resource.minutes} хв</Text>

      <Text style={styles.statusText}>
        Статус: {isFavorite ? 'В обраному' : 'Не в обраному'}
      </Text>

      <View style={styles.buttonContainer}>

        <Button
          title={isFavorite ? 'Прибрати з обраного' : 'Додати в обране'}
          onPress={handleToggle}
          color={isFavorite ? '#dc2626' : '#2563eb'}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: { backgroundColor: '#ffffff', padding: 16, borderRadius: 12, borderWidth: 1, borderColor: '#e5e7eb' },
  title: { fontSize: 20, fontWeight: '600', marginBottom: 6 },
  meta: { fontSize: 16, color: '#6b7280', marginBottom: 6 },
  statusText: { fontSize: 15, fontWeight: '500', color: '#374151', marginBottom: 8 },
  buttonContainer: { marginTop: 8 },
});