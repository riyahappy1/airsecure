import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';

export default function SignupScreen() {
  const router = useRouter(); // Use router for navigation

  return (
    <View style={styles.container}>
      <Text style={styles.header}>AirSecure - Admin Panel</Text>

      <View style={styles.signupBox}>
        <Text style={styles.signupTitle}>Signup</Text>

        <View style={styles.row}>
          <TextInput style={[styles.input, styles.halfInput]} placeholder="First Name" />
          <TextInput style={[styles.input, styles.halfInput]} placeholder="Last Name" />
        </View>
        <TextInput style={styles.input} placeholder="Corporate ID" />
        <TextInput style={styles.input} placeholder="Email" keyboardType="email-address" />
        <TextInput style={styles.input} placeholder="Username" />
        <TextInput style={styles.input} placeholder="Password" secureTextEntry />

        <TouchableOpacity style={styles.signupButton}>
          <Text style={styles.buttonText}>Signup</Text>
        </TouchableOpacity>

        {/* Navigate back to Login */}
        <TouchableOpacity style={styles.loginButton} onPress={() => router.push('/auth/login')}>
          <Text style={styles.buttonText}>Back to Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default SignupScreen;
