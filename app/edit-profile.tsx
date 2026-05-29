import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function EditProfile() {
  const router = useRouter();

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={22} color="#111" />
        </TouchableOpacity>

        <Text style={styles.headerTitle}>Editar perfil</Text>

        <View style={styles.headerIcon}>
          <Ionicons name="shield-checkmark" size={20} color="#111" />
        </View>
      </View>

      <View style={styles.profileCard}>
        <View style={styles.avatar}>
          <Ionicons name="person" size={52} color="#d4af37" />
        </View>

        <Text style={styles.name}>Ítalo Gabriel</Text>
        <Text style={styles.email}>italogabriel@gmail.com</Text>

        <TouchableOpacity style={styles.photoButton}>
          <Ionicons name="camera-outline" size={18} color="#111" />
          <Text style={styles.photoButtonText}>Alterar foto</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.sectionTitle}>Informações pessoais</Text>

      <View style={styles.formCard}>
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Nome completo</Text>
          <View style={styles.inputBox}>
            <Ionicons name="person-outline" size={20} color="#d4af37" />
            <TextInput
              style={styles.input}
              placeholder="Ítalo Gabriel"
              placeholderTextColor="#777"
            />
          </View>
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>E-mail</Text>
          <View style={styles.inputBox}>
            <MaterialIcons name="alternate-email" size={20} color="#d4af37" />
            <TextInput
              style={styles.input}
              placeholder="italogabriel@gmail.com"
              placeholderTextColor="#777"
            />
          </View>
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Telefone</Text>
          <View style={styles.inputBox}>
            <Ionicons name="call-outline" size={20} color="#d4af37" />
            <TextInput
              style={styles.input}
              placeholder="(83) 99999-9999"
              placeholderTextColor="#777"
            />
          </View>
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Endereço</Text>
          <View style={styles.inputBox}>
            <Ionicons name="location-outline" size={20} color="#d4af37" />
            <TextInput
              style={styles.input}
              placeholder="João Pessoa - PB"
              placeholderTextColor="#777"
            />
          </View>
        </View>
      </View>

      <Text style={styles.sectionTitle}>Preferências da conta</Text>

      <View style={styles.optionsCard}>
        <View style={styles.optionRow}>
          <View style={styles.optionLeft}>
            <View style={styles.optionIcon}>
              <Ionicons name="notifications-outline" size={20} color="#d4af37" />
            </View>
            <View>
              <Text style={styles.optionTitle}>Notificações</Text>
              <Text style={styles.optionText}>Lembretes de agendamento ativos</Text>
            </View>
          </View>

          <Ionicons name="chevron-forward" size={18} color="#777" />
        </View>

        <View style={styles.divider} />

        <View style={styles.optionRow}>
          <View style={styles.optionLeft}>
            <View style={styles.optionIcon}>
              <Ionicons name="lock-closed-outline" size={20} color="#d4af37" />
            </View>
            <View>
              <Text style={styles.optionTitle}>Segurança</Text>
              <Text style={styles.optionText}>Conta protegida e dados seguros</Text>
            </View>
          </View>

          <Ionicons name="chevron-forward" size={18} color="#777" />
        </View>
      </View>

      <View style={styles.securityBox}>
        <Ionicons name="shield-checkmark" size={22} color="#00d084" />
        <Text style={styles.securityText}>
          Suas informações são usadas apenas para melhorar sua experiência no BarberConnect.
        </Text>
      </View>

      <TouchableOpacity style={styles.saveButton} onPress={() => router.back()}>
        <Text style={styles.saveButtonText}>Salvar alterações</Text>
        <Ionicons name="checkmark-circle" size={20} color="#111" />
      </TouchableOpacity>

      <TouchableOpacity style={styles.cancelButton} onPress={() => router.back()}>
        <Text style={styles.cancelText}>Cancelar</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#070707',
    paddingHorizontal: 16,
    paddingTop: 42,
  },
  header: {
    height: 58,
    backgroundColor: '#d4af37',
    borderRadius: 18,
    paddingHorizontal: 14,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 22,
  },
  backButton: {
    width: 38,
    height: 38,
    borderRadius: 12,
    backgroundColor: 'rgba(0,0,0,0.12)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerTitle: {
    color: '#111',
    fontSize: 18,
    fontWeight: '900',
    textTransform: 'uppercase',
  },
  headerIcon: {
    width: 38,
    height: 38,
    borderRadius: 12,
    backgroundColor: 'rgba(0,0,0,0.12)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileCard: {
    backgroundColor: '#151515',
    borderRadius: 24,
    padding: 22,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#2b2b2b',
    marginBottom: 24,
  },
  avatar: {
    width: 118,
    height: 118,
    borderRadius: 59,
    backgroundColor: '#202020',
    borderWidth: 3,
    borderColor: '#d4af37',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 14,
  },
  name: {
    color: '#fff',
    fontSize: 22,
    fontWeight: '900',
  },
  email: {
    color: '#999',
    fontSize: 13,
    marginTop: 4,
  },
  photoButton: {
    marginTop: 16,
    backgroundColor: '#d4af37',
    paddingHorizontal: 18,
    paddingVertical: 10,
    borderRadius: 14,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  photoButtonText: {
    color: '#111',
    fontWeight: '900',
  },
  sectionTitle: {
    color: '#d4af37',
    fontSize: 21,
    fontWeight: '900',
    marginBottom: 14,
  },
  formCard: {
    backgroundColor: '#151515',
    borderRadius: 22,
    padding: 16,
    borderWidth: 1,
    borderColor: '#2b2b2b',
    marginBottom: 24,
  },
  inputGroup: {
    marginBottom: 15,
  },
  label: {
    color: '#bfbfbf',
    fontSize: 13,
    fontWeight: '700',
    marginBottom: 8,
  },
  inputBox: {
    height: 54,
    backgroundColor: '#202020',
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#333',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 14,
    gap: 10,
  },
  input: {
    flex: 1,
    color: '#fff',
    fontSize: 15,
  },
  optionsCard: {
    backgroundColor: '#151515',
    borderRadius: 22,
    padding: 16,
    borderWidth: 1,
    borderColor: '#2b2b2b',
  },
  optionRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  optionLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    flex: 1,
  },
  optionIcon: {
    width: 44,
    height: 44,
    borderRadius: 14,
    backgroundColor: '#202020',
    justifyContent: 'center',
    alignItems: 'center',
  },
  optionTitle: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '900',
  },
  optionText: {
    color: '#999',
    fontSize: 12,
    marginTop: 3,
  },
  divider: {
    height: 1,
    backgroundColor: '#2b2b2b',
    marginVertical: 16,
  },
  securityBox: {
    marginTop: 18,
    backgroundColor: '#102018',
    borderRadius: 18,
    padding: 14,
    borderWidth: 1,
    borderColor: '#1e5c3a',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  securityText: {
    color: '#c8f7dc',
    flex: 1,
    fontSize: 13,
    lineHeight: 18,
  },
  saveButton: {
    marginTop: 24,
    height: 58,
    backgroundColor: '#d4af37',
    borderRadius: 18,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    gap: 8,
  },
  saveButtonText: {
    color: '#111',
    fontSize: 16,
    fontWeight: '900',
  },
  cancelButton: {
    alignItems: 'center',
    marginTop: 18,
    marginBottom: 40,
  },
  cancelText: {
    color: '#999',
    fontSize: 14,
    fontWeight: '800',
  },
});