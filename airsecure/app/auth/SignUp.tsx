import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 },
  header: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
  input: { width: '100%', padding: 10, borderWidth: 1, borderColor: '#ccc', borderRadius: 5, marginBottom: 10 },
  signupButton: { backgroundColor: '#007BFF', padding: 10, borderRadius: 5, alignItems: 'center', marginBottom: 10 },
  loginButton: { backgroundColor: '#6c757d', padding: 10, borderRadius: 5, alignItems: 'center' },
  buttonText: { color: '#fff', fontWeight: 'bold' },
});

export default function SignupScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Signup</Text>
      <TextInput style={styles.input} placeholder="Email" keyboardType="email-address" />
      <TextInput style={styles.input} placeholder="Username" />
      <TextInput style={styles.input} placeholder="Password" secureTextEntry />

      {/* Signup Button */}
      <TouchableOpacity style={styles.signupButton}>
        <Text style={styles.buttonText}>Signup</Text>
      </TouchableOpacity>

      {/* Back to Login Button */}
      <TouchableOpacity style={styles.loginButton} onPress={() => router.push('/auth/login')}>
        <Text style={styles.buttonText}>Back to Login</Text>
      </TouchableOpacity>
    </View>
  );
}


