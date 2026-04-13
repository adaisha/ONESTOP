import { useRouter } from 'expo-router';
import { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native';
export default function Index() {
  const router = useRouter();
  const [selectedRole, setSelectedRole] = useState<'CP' | 'NCP' | ''>('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>OneStop</Text>
        <Text style={styles.subtitle}>Shared scheduling for CP and NCP</Text>

        <Text style={styles.label}>Select Role</Text>
        <View style={styles.roleRow}>
          <TouchableOpacity
            style={[
              styles.roleButton,
              selectedRole === 'CP' && styles.roleButtonSelected,
            ]}
            onPress={() => setSelectedRole('CP')}
          >
            <Text
              style={[
                styles.roleButtonText,
                selectedRole === 'CP' && styles.roleButtonTextSelected,
              ]}
            >
              CP
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.roleButton,
              selectedRole === 'NCP' && styles.roleButtonSelected,
            ]}
            onPress={() => setSelectedRole('NCP')}
          >
            <Text
              style={[
                styles.roleButtonText,
                selectedRole === 'NCP' && styles.roleButtonTextSelected,
              ]}
            >
              NCP
            </Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.label}>Email</Text>
        <TextInput
          value={email}
          onChangeText={setEmail}
          placeholder="Enter email"
          style={styles.input}
          autoCapitalize="none"
        />

        <Text style={styles.label}>Password</Text>
        <TextInput
          value={password}
          onChangeText={setPassword}
          placeholder="Enter password"
          style={styles.input}
          secureTextEntry
        />

        <TouchableOpacity
  style={styles.primaryButton}
  onPress={() => router.push('/child')}
>
  <Text style={styles.primaryButtonText}>Sign In</Text>
</TouchableOpacity>

        <TouchableOpacity style={styles.secondaryButton}>
          <Text style={styles.secondaryButtonText}>Create Account</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F7F7',
    justifyContent: 'center',
    padding: 20,
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    padding: 20,
    elevation: 3,
  },
  title: {
    fontSize: 32,
    fontWeight: '700',
    textAlign: 'center',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 15,
    color: '#666',
    textAlign: 'center',
    marginBottom: 24,
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 8,
    marginTop: 10,
  },
  roleRow: {
    flexDirection: 'row',
    gap: 12,
  },
  roleButton: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#CCC',
    borderRadius: 12,
    paddingVertical: 14,
    alignItems: 'center',
  },
  roleButtonSelected: {
    backgroundColor: '#E8F0FE',
    borderColor: '#4A90E2',
  },
  roleButtonText: {
    fontSize: 16,
    fontWeight: '600',
  },
  roleButtonTextSelected: {
    color: '#1E5AA8',
  },
  input: {
    borderWidth: 1,
    borderColor: '#D8D8D8',
    borderRadius: 12,
    padding: 14,
    marginBottom: 10,
  },
  primaryButton: {
    marginTop: 20,
    backgroundColor: '#4A90E2',
    borderRadius: 12,
    padding: 16,
    alignItems: 'center',
  },
  primaryButtonText: {
    color: '#FFF',
    fontWeight: '700',
  },
  secondaryButton: {
    marginTop: 10,
    borderWidth: 1,
    borderColor: '#CCC',
    borderRadius: 12,
    padding: 16,
    alignItems: 'center',
  },
  secondaryButtonText: {
    fontWeight: '600',
  },
});