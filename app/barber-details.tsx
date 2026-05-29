import { FontAwesome, FontAwesome5, Ionicons, MaterialIcons } from '@expo/vector-icons';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function BarberDetails() {
  const router = useRouter();
  const { nome, imagem, distancia, tempo, nota, avaliacoes } = useLocalSearchParams();

  const nomeBarbearia = (nome as string) || 'Barber Shop Gonzaga';
  const imagemBarbearia =
    (imagem as string) ||
    'https://images.unsplash.com/photo-1622287162716-f311baa1a2b8?w=1200';
  const distanciaBarbearia = (distancia as string) || '300 m';
  const tempoBarbearia = (tempo as string) || '15 min';
  const notaBarbearia = (nota as string) || '4.8';
  const avaliacoesBarbearia = (avaliacoes as string) || '845 Reviews';

  function irParaAgendamento(servico: string, valor: string, tempoServico: string, barbeiro = 'João Gonzaga') {
    router.push({
      pathname: '/schedule',
      params: {
        barbearia: nomeBarbearia,
        barbeiro,
        servico,
        valor,
        tempoServico,
      },
    });
  }

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.replace('/home')}>
          <Ionicons name="arrow-back" size={22} color="#111" />
        </TouchableOpacity>

        <Text style={styles.headerTitle}>DETALHES DA BARBEARIA</Text>
      </View>

      <Image source={{ uri: imagemBarbearia }} style={styles.topImage} />

      <View style={styles.infoBox}>
        <View style={styles.rowBetween}>
          <Text style={styles.shopName}>{nomeBarbearia}</Text>

          <View style={styles.ratingBox}>
            <FontAwesome name="star" size={14} color="#f5c451" />
            <Text style={styles.ratingText}>{notaBarbearia}</Text>
          </View>
        </View>

        <Text style={styles.openText}>● Aberto agora</Text>
        <Text style={styles.addressText}>Av. Principal, 123 - Centro</Text>

        <Text style={styles.description}>
          Barbearia moderna com profissionais experientes. Especializada em cortes
          masculinos, barba e atendimento premium.
        </Text>

        <View style={styles.reviewRow}>
          <View style={styles.starsRow}>
            <FontAwesome name="star" size={12} color="#f5c451" />
            <FontAwesome name="star" size={12} color="#f5c451" />
            <FontAwesome name="star" size={12} color="#f5c451" />
            <FontAwesome name="star" size={12} color="#f5c451" />
            <FontAwesome name="star-half-full" size={12} color="#f5c451" />
          </View>

          <Text style={styles.reviewText}>({avaliacoesBarbearia})</Text>
        </View>

        <View style={styles.locationRow}>
          <View style={styles.infoItem}>
            <Ionicons name="location-outline" size={15} color="#bbb" />
            <Text style={styles.infoText}>{distanciaBarbearia}</Text>
          </View>

          <View style={styles.infoItem}>
            <Ionicons name="time-outline" size={15} color="#bbb" />
            <Text style={styles.infoText}>{tempoBarbearia}</Text>
          </View>
        </View>
      </View>

      <Text style={styles.professionalTitle}>PROFISSIONAIS DISPONÍVEIS</Text>

      <View style={styles.professionalsContainer}>
        <View style={styles.professionalCard}>
          <Image
            source={{ uri: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500' }}
            style={styles.professionalImage}
          />

          <View style={{ flex: 1 }}>
            <Text style={styles.professionalName}>João Gonzaga</Text>
            <Text style={styles.professionalRole}>Especialista em Fade & Degradê</Text>

            <View style={styles.professionalInfoRow}>
              <Ionicons name="star" size={14} color="#f5c451" />
              <Text style={styles.professionalInfo}>4.9</Text>
              <Text style={styles.professionalInfo}>• 238 cortes</Text>
            </View>

            <Text style={styles.availableText}>Disponível hoje</Text>
          </View>

          <TouchableOpacity
            style={styles.selectButton}
            onPress={() =>
              irParaAgendamento('Cabelo & Barba Premium', '85,00', '70 min', 'João Gonzaga')
            }
          >
            <Text style={styles.selectButtonText}>Escolher</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.professionalCard}>
          <Image
            source={{ uri: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=500' }}
            style={styles.professionalImage}
          />

          <View style={{ flex: 1 }}>
            <Text style={styles.professionalName}>Lucas Emanuel</Text>
            <Text style={styles.professionalRole}>Especialista em Barba Premium</Text>

            <View style={styles.professionalInfoRow}>
              <Ionicons name="star" size={14} color="#f5c451" />
              <Text style={styles.professionalInfo}>5.0</Text>
              <Text style={styles.professionalInfo}>• 412 cortes</Text>
            </View>

            <Text style={styles.availableText}>Últimos horários</Text>
          </View>

          <TouchableOpacity
            style={styles.selectButton}
            onPress={() =>
              irParaAgendamento('Cabelo & Barba Premium', '85,00', '70 min', 'Carlos Mendes')
            }
          >
            <Text style={styles.selectButtonText}>Escolher</Text>
          </TouchableOpacity>
        </View>
      </View>

      <Text style={styles.mainTitle}>SELECIONE O SERVIÇO</Text>

      <View style={styles.sectionHeader}>
        <View style={styles.sectionLeft}>
          <FontAwesome5 name="cut" size={16} color="#d4af37" />
          <Text style={styles.sectionTitle}>Cabelo</Text>
        </View>
        <Ionicons name="chevron-down" size={18} color="#d4af37" />
      </View>

      <View style={styles.cardsRow}>
        <TouchableOpacity
          style={styles.serviceCard}
          onPress={() => irParaAgendamento('Corte Clássico', '55,00', '30 min')}
        >
          <Ionicons name="person-outline" size={34} color="#d4af37" />
          <Text style={styles.serviceName}>Corte Clássico</Text>
          <Text style={styles.servicePrice}>R$55,00</Text>
          <View style={styles.timeRow}>
            <Ionicons name="time-outline" size={13} color="#aaa" />
            <Text style={styles.timeText}>30 min</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.serviceCard}
          onPress={() => irParaAgendamento('Corte & Fade', '65,00', '45 min')}
        >
          <Ionicons name="person-outline" size={34} color="#d4af37" />
          <Text style={styles.serviceName}>Corte & Fade</Text>
          <Text style={styles.servicePrice}>R$65,00</Text>
          <View style={styles.timeRow}>
            <Ionicons name="time-outline" size={13} color="#aaa" />
            <Text style={styles.timeText}>45 min</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.serviceCard}
          onPress={() => irParaAgendamento('Styling Completo', '90,00', '60 min')}
        >
          <Ionicons name="person-outline" size={34} color="#d4af37" />
          <Text style={styles.serviceName}>Styling Completo</Text>
          <Text style={styles.servicePrice}>R$90,00</Text>
          <View style={styles.timeRow}>
            <Ionicons name="time-outline" size={13} color="#aaa" />
            <Text style={styles.timeText}>60 min</Text>
          </View>
        </TouchableOpacity>
      </View>

      <View style={styles.sectionHeader}>
        <View style={styles.sectionLeft}>
          <FontAwesome5 name="user-alt" size={16} color="#d4af37" />
          <Text style={styles.sectionTitle}>Barba</Text>
        </View>
        <Ionicons name="chevron-down" size={18} color="#d4af37" />
      </View>

      <View style={styles.cardsRow}>
        <TouchableOpacity
          style={styles.serviceCard}
          onPress={() => irParaAgendamento('Estilização de Barba', '40,00', '20 min')}
        >
          <Ionicons name="flame-outline" size={30} color="#d4af37" />
          <Text style={styles.serviceName}>Estilização de Barba</Text>
          <Text style={styles.servicePrice}>R$40,00</Text>
          <View style={styles.timeRow}>
            <Ionicons name="time-outline" size={13} color="#aaa" />
            <Text style={styles.timeText}>20 min</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.serviceCard}
          onPress={() => irParaAgendamento('Cuidado Premium', '60,00', '40 min')}
        >
          <Ionicons name="shield-checkmark-outline" size={30} color="#d4af37" />
          <Text style={styles.serviceName}>Cuidado Premium</Text>
          <Text style={styles.servicePrice}>R$60,00</Text>
          <View style={styles.timeRow}>
            <Ionicons name="time-outline" size={13} color="#aaa" />
            <Text style={styles.timeText}>40 min</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.serviceCard}
          onPress={() => irParaAgendamento('Tratamento Vapor', '100,00', '60 min')}
        >
          <Ionicons name="water-outline" size={30} color="#d4af37" />
          <Text style={styles.serviceName}>Tratamento Vapor</Text>
          <Text style={styles.servicePrice}>R$100,00</Text>
          <View style={styles.timeRow}>
            <Ionicons name="time-outline" size={13} color="#aaa" />
            <Text style={styles.timeText}>60 min</Text>
          </View>
        </TouchableOpacity>
      </View>

      <View style={styles.sectionHeader}>
        <View style={styles.sectionLeft}>
          <MaterialIcons name="card-giftcard" size={18} color="#d4af37" />
          <Text style={styles.sectionTitle}>Pacotes</Text>
        </View>
        <Ionicons name="chevron-down" size={18} color="#d4af37" />
      </View>

      <View style={styles.cardsRow}>
        <TouchableOpacity
          style={styles.serviceCard}
          onPress={() => irParaAgendamento('Cabelo & Barba Premium', '85,00', '70 min')}
        >
          <Ionicons name="star-outline" size={30} color="#d4af37" />
          <Text style={styles.serviceName}>Cabelo & Barba Premium</Text>
          <Text style={styles.servicePrice}>R$85,00</Text>
          <View style={styles.timeRow}>
            <Ionicons name="time-outline" size={13} color="#aaa" />
            <Text style={styles.timeText}>70 min</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.serviceCard}
          onPress={() => irParaAgendamento('Dia do Noivo', '250,00', '120 min')}
        >
          <Ionicons name="diamond-outline" size={30} color="#d4af37" />
          <Text style={styles.serviceName}>Dia do Noivo</Text>
          <Text style={styles.servicePrice}>R$250,00</Text>
          <View style={styles.timeRow}>
            <Ionicons name="time-outline" size={13} color="#aaa" />
            <Text style={styles.timeText}>120 min</Text>
          </View>
        </TouchableOpacity>
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
  header: {
    backgroundColor: '#e2c98b',
    height: 56,
    borderRadius: 14,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 14,
    gap: 10,
  },
  headerTitle: {
    color: '#111',
    fontWeight: '700',
    fontSize: 16,
  },
  topImage: {
    width: '100%',
    height: 180,
    borderRadius: 18,
    marginTop: 18,
  },
  infoBox: {
    backgroundColor: '#151515',
    borderRadius: 16,
    padding: 14,
    marginTop: 14,
    borderWidth: 1,
    borderColor: '#222',
  },
  rowBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  shopName: {
    color: '#fff',
    fontSize: 24,
    fontWeight: '700',
    flex: 1,
    marginRight: 10,
  },
  ratingBox: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  ratingText: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 18,
  },
  openText: {
    color: '#4caf50',
    fontWeight: 'bold',
    marginTop: 10,
  },
  addressText: {
    color: '#aaa',
    marginTop: 4,
  },
  description: {
    color: '#aaa',
    marginTop: 14,
    lineHeight: 18,
  },
  reviewRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
  },
  starsRow: {
    flexDirection: 'row',
    gap: 2,
  },
  reviewText: {
    color: '#8c8c8c',
    marginLeft: 8,
    fontSize: 12,
  },
  locationRow: {
    marginTop: 12,
    flexDirection: 'row',
    gap: 20,
  },
  infoItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  infoText: {
    color: '#bbb',
    fontSize: 13,
  },
  professionalTitle: {
    color: '#d4af37',
    fontSize: 22,
    fontWeight: '800',
    marginTop: 26,
    marginBottom: 16,
  },
  professionalsContainer: {
    gap: 14,
    marginBottom: 10,
  },
  professionalCard: {
    backgroundColor: '#151515',
    borderRadius: 18,
    padding: 14,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#2a2a2a',
  },
  professionalImage: {
    width: 72,
    height: 72,
    borderRadius: 18,
    marginRight: 14,
  },
  professionalName: {
    color: '#fff',
    fontSize: 17,
    fontWeight: '800',
  },
  professionalRole: {
    color: '#aaa',
    marginTop: 4,
    fontSize: 13,
  },
  professionalInfoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    marginTop: 8,
  },
  professionalInfo: {
    color: '#ddd',
    fontSize: 12,
  },
  availableText: {
    color: '#4caf50',
    fontWeight: '700',
    marginTop: 6,
    fontSize: 12,
  },
  selectButton: {
    backgroundColor: '#d4af37',
    paddingHorizontal: 14,
    paddingVertical: 10,
    borderRadius: 12,
  },
  selectButtonText: {
    color: '#111',
    fontWeight: '800',
  },
  mainTitle: {
    color: '#d4af37',
    fontSize: 28,
    fontWeight: '800',
    marginTop: 22,
    marginBottom: 20,
  },
  sectionHeader: {
    marginBottom: 10,
    marginTop: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  sectionLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  sectionTitle: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  cardsRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
    marginBottom: 16,
  },
  serviceCard: {
    width: '31%',
    minHeight: 150,
    backgroundColor: '#151515',
    borderRadius: 14,
    borderWidth: 1,
    borderColor: '#7a6938',
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  serviceName: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 14,
    marginTop: 10,
    minHeight: 40,
  },
  servicePrice: {
    color: '#d4af37',
    fontWeight: '700',
    marginTop: 6,
    fontSize: 16,
  },
  timeRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    marginTop: 6,
  },
  timeText: {
    color: '#aaa',
    fontSize: 12,
  },
});