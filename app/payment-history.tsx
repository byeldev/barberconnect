import { FontAwesome5, Ionicons, MaterialIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function PaymentHistory() {
  const router = useRouter();

  const payments = [
    {
      id: 1,
      barber: 'Barbearia Gonzaga',
      service: 'Cabelo & Barba Premium',
      date: '15 Abril 2026',
      price: 'R$85,00',
      status: 'Pago',
      method: 'PIX',
    },
    {
      id: 2,
      barber: 'Elite Barber',
      service: 'Corte Degradê',
      date: '02 Abril 2026',
      price: 'R$55,00',
      status: 'Pago',
      method: 'Cartão',
    },
    {
      id: 3,
      barber: 'Black Style',
      service: 'Tratamento Premium',
      date: '28 Março 2026',
      price: 'R$120,00',
      status: 'Pago',
      method: 'PIX',
    },
  ];

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>

      <View style={styles.headerTop}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => router.back()}
        >
          <Ionicons name="arrow-back" size={22} color="#111" />
        </TouchableOpacity>

        <Text style={styles.headerTitle}>
          Histórico de Pagamentos
        </Text>

        <View style={styles.fakeButton} />
      </View>

      <View style={styles.totalBox}>
        <Text style={styles.totalLabel}>Total gasto</Text>
        <Text style={styles.totalValue}>R$420,00</Text>
      </View>

      {payments.map((item) => (
        <TouchableOpacity key={item.id} style={styles.card}>

          <View style={styles.topRow}>
            <View style={styles.iconBox}>
              <FontAwesome5
                name="money-check-alt"
                size={18}
                color="#d4af37"
              />
            </View>

            <View style={{ flex: 1 }}>
              <Text style={styles.barberName}>
                {item.barber}
              </Text>

              <Text style={styles.service}>
                {item.service}
              </Text>
            </View>

            <View style={styles.statusBox}>
              <Text style={styles.statusText}>
                {item.status}
              </Text>
            </View>
          </View>

          <View style={styles.line} />

          <View style={styles.bottomRow}>

            <View style={styles.infoItem}>
              <Ionicons
                name="calendar-outline"
                size={15}
                color="#aaa"
              />

              <Text style={styles.infoText}>
                {item.date}
              </Text>
            </View>

            <View style={styles.infoItem}>
              <MaterialIcons
                name="payments"
                size={15}
                color="#aaa"
              />

              <Text style={styles.infoText}>
                {item.method}
              </Text>
            </View>

            <Text style={styles.price}>
              {item.price}
            </Text>
          </View>
        </TouchableOpacity>
      ))}

      <View style={styles.summaryBox}>
        <Text style={styles.summaryTitle}>
          Resumo financeiro
        </Text>

        <View style={styles.summaryRow}>
          <Text style={styles.summaryLabel}>
            Pagamentos realizados
          </Text>

          <Text style={styles.summaryValue}>
            12
          </Text>
        </View>

        <View style={styles.summaryRow}>
          <Text style={styles.summaryLabel}>
            Valor total gasto
          </Text>

          <Text style={styles.summaryValue}>
            R$420,00
          </Text>
        </View>

        <View style={styles.summaryRow}>
          <Text style={styles.summaryLabel}>
            Método favorito
          </Text>

          <Text style={styles.summaryValue}>
            PIX
          </Text>
        </View>
      </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0b0b0b',
    paddingHorizontal: 16,
    paddingTop: 40,
  },

  headerTop: {
    backgroundColor: '#e2c98b',
    height: 58,
    borderRadius: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 14,
    marginBottom: 18,
  },

  backButton: {
    width: 38,
    height: 38,
    borderRadius: 12,
    backgroundColor: 'rgba(0,0,0,0.12)',
    justifyContent: 'center',
    alignItems: 'center',
  },

  fakeButton: {
    width: 38,
    height: 38,
  },

  headerTitle: {
    color: '#111',
    fontSize: 18,
    fontWeight: '800',
  },

  totalBox: {
    marginBottom: 24,
    backgroundColor: '#151515',
    borderRadius: 16,
    padding: 18,
    borderWidth: 1,
    borderColor: '#2a2a2a',
  },

  totalLabel: {
    color: '#aaa',
    fontSize: 14,
  },

  totalValue: {
    color: '#d4af37',
    fontSize: 28,
    fontWeight: '800',
    marginTop: 4,
  },

  card: {
    backgroundColor: '#151515',
    borderRadius: 18,
    padding: 16,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#2a2a2a',
  },

  topRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  iconBox: {
    width: 50,
    height: 50,
    borderRadius: 14,
    backgroundColor: '#1d1d1d',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 14,
  },

  barberName: {
    color: '#fff',
    fontSize: 17,
    fontWeight: '700',
  },

  service: {
    color: '#aaa',
    marginTop: 4,
    fontSize: 13,
  },

  statusBox: {
    backgroundColor: '#16361f',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 10,
  },

  statusText: {
    color: '#4caf50',
    fontWeight: '700',
    fontSize: 12,
  },

  line: {
    height: 1,
    backgroundColor: '#222',
    marginVertical: 16,
  },

  bottomRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    gap: 10,
  },

  infoItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },

  infoText: {
    color: '#aaa',
    fontSize: 12,
  },

  price: {
    color: '#d4af37',
    fontSize: 20,
    fontWeight: '800',
  },

  summaryBox: {
    backgroundColor: '#151515',
    borderRadius: 18,
    padding: 18,
    marginTop: 10,
    marginBottom: 40,
    borderWidth: 1,
    borderColor: '#2a2a2a',
  },

  summaryTitle: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 18,
  },

  summaryRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 14,
  },

  summaryLabel: {
    color: '#aaa',
    fontSize: 14,
  },

  summaryValue: {
    color: '#d4af37',
    fontWeight: '700',
    fontSize: 15,
  },
});