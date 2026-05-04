import { ScrollView, StyleSheet, Text, View } from "react-native";

const staffCards = [
  { name: "Ahmet Demir", role: "Yonetici", status: "Aktif" },
  { name: "Zeynep Kaya", role: "Operasyon", status: "Izinli" },
  { name: "Murat Aydin", role: "Satis", status: "Aktif" },
];

export default function ManagementScreen() {
  return (
    <ScrollView style={styles.page} contentContainerStyle={styles.content}>
      <View style={styles.banner}>
        <Text style={styles.bannerLabel}>Yonetim Merkezi</Text>
        <Text style={styles.bannerTitle}>Kullanici Islemleri</Text>
        <Text style={styles.bannerSubtitle}>
          Kullanici goruntuleme, ekleme, duzenleme ve kaldirma islemleri icin
          tasarim alani.
        </Text>
      </View>

      <View style={styles.quickActions}>
        <View style={styles.actionButton}>
          <Text style={styles.actionText}>+ Kullanici Ekle</Text>
        </View>
        <View style={styles.actionButtonMuted}>
          <Text style={styles.actionTextMuted}>- Kullanici Cikar</Text>
        </View>
      </View>

      <Text style={styles.sectionTitle}>Kullanici Listesi</Text>
      {staffCards.map((item) => (
        <View key={item.name} style={styles.card}>
          <View>
            <Text style={styles.cardTitle}>{item.name}</Text>
            <Text style={styles.cardSub}>{item.role}</Text>
          </View>
          <Text style={styles.status}>{item.status}</Text>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: "#F3F6FB",
  },
  content: {
    padding: 16,
    gap: 14,
  },
  banner: {
    backgroundColor: "#0E4A67",
    borderRadius: 22,
    padding: 20,
    gap: 6,
  },
  bannerLabel: {
    color: "#9ED5EE",
    fontSize: 12,
    letterSpacing: 1,
    textTransform: "uppercase",
    fontWeight: "700",
  },
  bannerTitle: {
    color: "#FFFFFF",
    fontSize: 24,
    fontWeight: "800",
  },
  bannerSubtitle: {
    color: "#D4E8F4",
    lineHeight: 20,
  },
  quickActions: {
    flexDirection: "row",
    gap: 10,
  },
  actionButton: {
    flex: 1,
    backgroundColor: "#0FA47A",
    borderRadius: 14,
    paddingVertical: 12,
    alignItems: "center",
  },
  actionButtonMuted: {
    flex: 1,
    backgroundColor: "#EEF2F8",
    borderRadius: 14,
    paddingVertical: 12,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#D7DFEA",
  },
  actionText: {
    color: "#FFFFFF",
    fontWeight: "700",
  },
  actionTextMuted: {
    color: "#1B2F42",
    fontWeight: "700",
  },
  sectionTitle: {
    marginTop: 8,
    fontSize: 17,
    fontWeight: "700",
    color: "#18293D",
  },
  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    padding: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#E7EDF5",
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: "700",
    color: "#12243A",
  },
  cardSub: {
    marginTop: 4,
    color: "#60758C",
  },
  status: {
    color: "#0A7C5A",
    backgroundColor: "#DDF9EE",
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 4,
    fontSize: 12,
    fontWeight: "700",
  },
});
