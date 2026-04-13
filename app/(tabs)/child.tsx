import { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function Child() {
  const [child1, setChild1] = useState('');
  const [child2, setChild2] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>Add Children</Text>
        <Text style={styles.subtitle}>Keep names private and simple</Text>

        <View style={styles.inputGroup}>
          <View style={styles.iconBadge}>
            <Text style={styles.iconText}>1</Text>
          </View>
          <View style={styles.inputWrap}>
            <Text style={styles.label}>Child 1</Text>
            <TextInput
              value={child1}
              onChangeText={setChild1}
              placeholder="Child 1 - P."
              placeholderTextColor="#8A8A8A"
              style={styles.input}
            />
          </View>
        </View>

        <View style={styles.inputGroup}>
          <View style={styles.iconBadge}>
            <Text style={styles.iconText}>2</Text>
          </View>
          <View style={styles.inputWrap}>
            <Text style={styles.label}>Child 2</Text>
            <TextInput
              value={child2}
              onChangeText={setChild2}
              placeholder="Child 2 - P."
              placeholderTextColor="#8A8A8A"
              style={styles.input}
            />
          </View>
        </View>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Continue</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#E8F3EC',
  },
  card: {
    backgroundColor: '#FFFDF8',
    padding: 22,
    borderRadius: 22,
    elevation: 3,
  },
  title: {
    fontSize: 26,
    fontWeight: '700',
    textAlign: 'center',
    color: '#2F4F4F',
    marginBottom: 6,
  },
  subtitle: {
    fontSize: 14,
    textAlign: 'center',
    color: '#6B7280',
    marginBottom: 24,
  },
  inputGroup: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 18,
  },
  iconBadge: {
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: '#D8E7D0',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
    borderWidth: 1,
    borderColor: '#C9D9C0',
  },
  iconText: {
    fontSize: 18,
    fontWeight: '700',
    color: '#5C6F68',
  },
  inputWrap: {
    flex: 1,
  },
  label: {
    marginBottom: 6,
    fontWeight: '600',
    color: '#5B5B5B',
  },
  input: {
    borderWidth: 1,
    borderColor: '#CFE0F5',
    backgroundColor: '#F9FBFD',
    borderRadius: 12,
    padding: 13,
    color: '#1F2937',
  },
  button: {
    marginTop: 10,
    backgroundColor: '#7FA7C9',
    paddingVertical: 15,
    borderRadius: 12,
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontWeight: '700',
    fontSize: 16,
  },
});