import { useRouter } from 'expo-router';
import { useState } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from 'react-native';

export default function Child() {
  const router = useRouter();
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
              placeholderTextColor="gray"
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
              placeholderTextColor="gray"
              style={styles.input}
            />
          </View>
        </View>

        <TouchableOpacity
          style={styles.button}
          onPress={() => router.push('/parenting-time')}
        >
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
    backgroundColor: 'rgb(232, 243, 236)',
  },
  card: {
    backgroundColor: 'rgb(255, 253, 248)',
    padding: 22,
    borderRadius: 22,
    elevation: 3,
  },
  title: {
    fontSize: 26,
    fontWeight: '700',
    textAlign: 'center',
    color: 'rgb(47, 79, 79)',
    marginBottom: 6,
  },
  subtitle: {
    fontSize: 14,
    textAlign: 'center',
    color: 'rgb(107, 114, 128)',
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
    backgroundColor: 'rgb(216, 231, 208)',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
    borderWidth: 1,
    borderColor: 'black',
  },
  iconText: {
    fontSize: 18,
    fontWeight: '700',
    color: 'rgb(92, 111, 104)',
  },
  inputWrap: {
    flex: 1,
  },
  label: {
    marginBottom: 6,
    fontWeight: '600',
    color: 'rgb(91, 91, 91)',
  },
  input: {
    borderWidth: 1,
    borderColor: 'rgb(207, 224, 245)',
    backgroundColor: 'rgb(249, 251, 253)',
    borderRadius: 12,
    padding: 13,
    color: 'rgb(31, 41, 55)',
  },
  button: {
    marginTop: 10,
    backgroundColor: 'rgb(127, 167, 201)',
    paddingVertical: 15,
    borderRadius: 12,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: '700',
    fontSize: 16,
  },
});