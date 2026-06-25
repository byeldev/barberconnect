import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';

import {
    ScrollView,
    StyleSheet,
    Switch,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';

export default function Security() {
  const router = useRouter();

  const [biometric, setBiometric] = useState(true);
  const [twoFactor, setTwoFactor] = useState(false);

  return (
    <ScrollView
      style={styles.container}
      showsVerticalScrollIndicator={false}
    >
      {/* VOLTAR */}
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => router.back()}
      >
        <Ionicons
          name="arrow-back"
          size={22}
          color="#111"
        />
      </TouchableOpacity>

      {/* TÍTULO */}
      <Text style={styles.title}>
        Segurança
      </Text>

      <Text style={styles.subtitle}>
        Proteja sua conta e gerencie suas opções de segurança.
      </Text>

      {/* BIOMETRIA */}
      <View style={styles.card}>
        <View style={styles.leftContent}>
          <View style={styles.iconBox}>
            <Ionicons
              name="finger-print-outline"
              size={22}
              color="#d4af37"
            />
          </View>

          <View>
            <Text style={styles.cardTitle}>
              Login com biometria
            </Text>

            <Text style={styles.cardText}>
              Use impressão digital para acessar
            </Text>
          </View>
        </View>

        <Switch
          value={biometric}
          onValueChange={setBiometric}
        />
      </View>

      {/* 2FA */}
      <View style={styles.card}>
        <View style={styles.leftContent}>
          <View style={styles.iconBox}>
            <Ionicons
              name="shield-checkmark-outline"
              size={22}
              color="#d4af37"
            />
          </View>

          <View>
            <Text style={styles.cardTitle}>
              Autenticação em 2 etapas
            </Text>

            <Text style={styles.cardText}>
              Segurança extra para sua conta
            </Text>
          </View>
        </View>

        <Switch
          value={twoFactor}
          onValueChange={setTwoFactor}
        />
      </View>

      {/* ALTERAR SENHA */}
      <TouchableOpacity style={styles.optionCard}>
        <View style={styles.leftContent}>
          <View style={styles.iconBox}>
            <Ionicons
              name="lock-closed-outline"
              size={22}
              color="#d4af37"
            />
          </View>

          <View>
            <Text style={styles.cardTitle}>
              Alterar senha
            </Text>

            <Text style={styles.cardText}>
              Atualize sua senha regularmente
            </Text>
          </View>
        </View>

        <Ionicons
          name="chevron-forward"
          size={20}
          color="#777"
        />
      </TouchableOpacity>

      {/* DISPOSITIVOS */}
      <TouchableOpacity style={styles.optionCard}>
        <View style={styles.leftContent}>
          <View style={styles.iconBox}>
            <Ionicons
              name="phone-portrait-outline"
              size={22}
              color="#d4af37"
            />
          </View>

          <View>
            <Text style={styles.cardTitle}>
              Dispositivos conectados
            </Text>

            <Text style={styles.cardText}>
              Gerencie sessões ativas
            </Text>
          </View>
        </View>

        <Ionicons
          name="chevron-forward"
          size={20}
          color="#777"
        />
      </TouchableOpacity>

      {/* SAIR */}
      <TouchableOpacity style={styles.logoutCard}>
        <Ionicons
          name="log-out-outline"
          size={22}
          color="#ff4d4d"
        />

        <Text style={styles.logoutText}>
          Sair da conta
        </Text>
      </TouchableOpacity>

      {/* EXCLUIR */}
      <TouchableOpacity style={styles.deleteCard}>
        <Ionicons
          name="trash-outline"
          size={22}
          color="#ff4d4d"
        />

        <Text style={styles.deleteText}>
          Excluir conta
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0b0b0b',
    padding: 20,
    paddingTop: 50,
  },

  backButton: {
    width: 44,
    height: 44,
    backgroundColor: '#d4af37',
    borderRadius: 14,
    justifyContent: 'center',
    alignItems: 'center',
  },

  title: {
    color: '#d4af37',
    fontSize: 30,
    fontWeight: '800',
    marginTop: 22,
  },

  subtitle: {
    color: '#aaa',
    marginTop: 8,
    marginBottom: 28,
    lineHeight: 20,
  },

  card: {
    backgroundColor: '#151515',
    borderRadius: 18,
    padding: 16,
    marginBottom: 16,

    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',

    borderWidth: 1,
    borderColor: '#2a2a2a',
  },

  optionCard: {
    backgroundColor: '#151515',
    borderRadius: 18,
    padding: 16,
    marginBottom: 16,

    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',

    borderWidth: 1,
    borderColor: '#2a2a2a',
  },

  leftContent: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 14,
  },

  iconBox: {
    width: 48,
    height: 48,
    borderRadius: 14,
    backgroundColor: '#202020',
    justifyContent: 'center',
    alignItems: 'center',
  },

  cardTitle: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '700',
  },

  cardText: {
    color: '#aaa',
    fontSize: 13,
    marginTop: 4,
  },

  logoutCard: {
    backgroundColor: '#151515',
    borderRadius: 18,
    padding: 18,
    marginTop: 10,

    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,

    borderWidth: 1,
    borderColor: '#3a1f1f',
  },

  logoutText: {
    color: '#ff4d4d',
    fontSize: 16,
    fontWeight: '700',
  },

  deleteCard: {
    backgroundColor: '#1a1010',
    borderRadius: 18,
    padding: 18,
    marginTop: 14,
    marginBottom: 40,

    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,

    borderWidth: 1,
    borderColor: '#5a1f1f',
  },

  deleteText: {
    color: '#ff4d4d',
    fontSize: 16,
    fontWeight: '700',
  },
});