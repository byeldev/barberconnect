import { FontAwesome5, Ionicons, MaterialIcons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function Checkout() {
  const router = useRouter();
  const { barbearia, servico, data, hora, valor } = useLocalSearchParams();

  async function finalizar() {
    const novoAgendamento = {
      id: Date.now(),
      barbearia: String(barbearia || 'Barbearia Gonzaga'),
      servico: String(servico || 'Cabelo & Barba Premium'),
      data: String(data || '15 Abr'),
      hora: String(hora || '09:00'),
      valor: String(valor || '85,00'),
      status: 'Confirmado',
    };

    const dados = await AsyncStorage.getItem('agendamentos');
    const lista = dados ? JSON.parse(dados) : [];

    await AsyncStorage.setItem(
      'agendamentos',
      JSON.stringify([...lista, novoAgendamento])
    );

    alert('Pagamento realizado com sucesso!');
    router.replace('/appointments');
  }

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={24} color="#111" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>CHECKOUT SEGURO</Text>
        <Ionicons name="lock-closed" size={22} color="#111" />
      </View>

      <Text style={styles.title}>Confirme seu agendamento</Text>
      <Text style={styles.subtitle}>
        Revise os dados antes de finalizar o pagamento.
      </Text>

      <View style={styles.card}>
        <View style={styles.cardHeader}>
          <View style={styles.iconBox}>
            <FontAwesome5 name="cut" size={22} color="#d4af37" />
          </View>

          <View style={{ flex: 1 }}>
            <Text style={styles.barbearia}>
              {String(barbearia || 'Barbearia Gonzaga')}
            </Text>
            <Text style={styles.servico}>
              {String(servico || 'Cabelo & Barba Premium')}
            </Text>
          </View>
        </View>

        <View style={styles.infoBox}>
          <View style={styles.infoRow}>
            <MaterialIcons name="date-range" size={18} color="#d4af37" />
            <Text style={styles.infoText}>{String(data || '15 Abr')}</Text>
          </View>

          <View style={styles.infoRow}>
            <Ionicons name="time-outline" size={18} color="#d4af37" />
            <Text style={styles.infoText}>{String(hora || '09:00')}</Text>
          </View>
        </View>

        <View style={styles.totalRow}>
          <Text style={styles.totalLabel}>Total</Text>
          <Text style={styles.totalValue}>R${String(valor || '85,00')}</Text>
        </View>
      </View>

      <Text style={styles.sectionTitle}>Forma de pagamento</Text>

      <View style={styles.paymentCard}>
        <View style={styles.paymentHeader}>
          <View style={styles.pixIcon}>
            <Ionicons name="qr-code-outline" size={24} color="#111" />
          </View>

          <View>
            <Text style={styles.paymentTitle}>PIX</Text>
            <Text style={styles.paymentSubtitle}>Pagamento rápido e seguro</Text>
          </View>

          <View style={styles.selectedBadge}>
            <Ionicons name="checkmark" size={16} color="#111" />
          </View>
        </View>

        <View style={styles.qrBox}>
          <Image
            source={{
              uri: 'https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=BarberConnectPIX',
            }}
            style={styles.qr}
          />
        </View>

        <Text style={styles.pixText}>
          Escaneie o QR Code para simular o pagamento.
        </Text>
      </View>

      <View style={styles.securityBox}>
        <Ionicons name="shield-checkmark" size={20} color="#00d084" />
        <Text style={styles.securityText}>
          Seus dados estão protegidos com checkout seguro.
        </Text>
      </View>

      <TouchableOpacity style={styles.button} onPress={finalizar}>
        <Text style={styles.buttonText}>Finalizar pagamento</Text>
        <Ionicons name="arrow-forward" size={20} color="#111" />
      </TouchableOpacity>

      <TouchableOpacity style={styles.cancelButton} onPress={() => router.back()}>
        <Text style={styles.cancelText}>Voltar e alterar agendamento</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#080808',
    paddingHorizontal: 18,
    paddingTop: 42,
  },
  header: {
    height: 58,
    backgroundColor: '#e2c98b',
    borderRadius: 18,
    paddingHorizontal: 14,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 24,
  },
  headerTitle: {
    color: '#111',
    fontSize: 16,
    fontWeight: '900',
  },
  title: {
    color: '#d4af37',
    fontSize: 28,
    fontWeight: '900',
  },
  subtitle: {
    color: '#aaa',
    fontSize: 14,
    marginTop: 6,
    marginBottom: 22,
  },
  card: {
    backgroundColor: '#151515',
    borderRadius: 22,
    padding: 18,
    borderWidth: 1,
    borderColor: '#2a2a2a',
    marginBottom: 24,
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 14,
  },
  iconBox: {
    width: 58,
    height: 58,
    borderRadius: 16,
    backgroundColor: '#222',
    alignItems: 'center',
    justifyContent: 'center',
  },
  barbearia: {
    color: '#fff',
    fontSize: 19,
    fontWeight: '900',
  },
  servico: {
    color: '#aaa',
    marginTop: 4,
    fontSize: 14,
  },
  infoBox: {
    marginTop: 18,
    gap: 12,
  },
  infoRow: {
    backgroundColor: '#1f1f1f',
    borderRadius: 14,
    padding: 12,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  infoText: {
    color: '#fff',
    fontSize: 15,
    fontWeight: '700',
  },
  totalRow: {
    marginTop: 18,
    borderTopWidth: 1,
    borderTopColor: '#2a2a2a',
    paddingTop: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  totalLabel: {
    color: '#aaa',
    fontSize: 16,
  },
  totalValue: {
    color: '#d4af37',
    fontSize: 24,
    fontWeight: '900',
  },
  sectionTitle: {
    color: '#d4af37',
    fontSize: 20,
    fontWeight: '900',
    marginBottom: 12,
  },
  paymentCard: {
    backgroundColor: '#151515',
    borderRadius: 22,
    padding: 18,
    borderWidth: 1,
    borderColor: '#2a2a2a',
  },
  paymentHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  pixIcon: {
    width: 48,
    height: 48,
    borderRadius: 14,
    backgroundColor: '#d4af37',
    justifyContent: 'center',
    alignItems: 'center',
  },
  paymentTitle: {
    color: '#fff',
    fontSize: 17,
    fontWeight: '900',
  },
  paymentSubtitle: {
    color: '#aaa',
    fontSize: 13,
    marginTop: 3,
  },
  selectedBadge: {
    marginLeft: 'auto',
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: '#d4af37',
    justifyContent: 'center',
    alignItems: 'center',
  },
  qrBox: {
    backgroundColor: '#fff',
    alignSelf: 'center',
    padding: 14,
    borderRadius: 18,
    marginTop: 22,
  },
  qr: {
    width: 170,
    height: 170,
  },
  pixText: {
    color: '#aaa',
    textAlign: 'center',
    marginTop: 12,
    fontSize: 13,
  },
  securityBox: {
    marginTop: 18,
    backgroundColor: '#102018',
    borderRadius: 16,
    padding: 14,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    borderWidth: 1,
    borderColor: '#1e5c3a',
  },
  securityText: {
    color: '#c8f7dc',
    flex: 1,
    fontSize: 13,
  },
  button: {
    marginTop: 24,
    backgroundColor: '#d4af37',
    borderRadius: 18,
    height: 58,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    gap: 8,
  },
  buttonText: {
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
    color: '#aaa',
    fontWeight: '700',
  },
});