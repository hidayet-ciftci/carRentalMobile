import { Link } from "expo-router";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";

const vehicleCards = [
  { plate: "34 CRN 107", model: "Renault Clio", km: "83.200 km" },
  { plate: "06 ANK 221", model: "Fiat Egea", km: "51.780 km" },
  { plate: "35 IZM 440", model: "Toyota Corolla", km: "67.440 km" },
];

export default function VehiclesScreen() {
  return (
    <ScrollView style={styles.page} contentContainerStyle={styles.content}>
      <View style={styles.hero}>
        <Text style={styles.heroSmall}>Arac Modulu</Text>
        <Text style={styles.heroTitle}>Filo Durumu</Text>
        <Text style={styles.heroSub}>
          Arac goruntuleme, ekleme ve cikarma alanlarinin taslak ekrani.
        </Text>
      </View>

      <View style={styles.statsRow}>
        <View style={styles.statCard}>
          <Text style={styles.statValue}>48</Text>
          <Text style={styles.statLabel}>Toplam Arac</Text>
        </View>
        <View style={styles.statCard}>
          <Text style={styles.statValue}>12</Text>
          <Text style={styles.statLabel}>Kiradaki</Text>
        </View>
      </View>

      <View style={styles.controls}>
        <View style={styles.primaryAction}>
          <Text style={styles.primaryActionText}>+ Yeni Arac</Text>
        </View>
        <View style={styles.secondaryAction}>
          <Text style={styles.secondaryActionText}>- Arac Sil</Text>
        </View>
      </View>

      {vehicleCards.map((vehicle) => (
        <Link key={vehicle.plate} href="/vehicle-detail" asChild>
          <Pressable style={styles.cardLink}>
            <View style={styles.vehicleCard}>
              <Text style={styles.plate}>{vehicle.plate}</Text>
              <Text style={styles.model}>{vehicle.model}</Text>
              <Text style={styles.km}>{vehicle.km}</Text>
              <Text style={styles.detailText}>Detay ve Guncelle</Text>
            </View>
          </Pressable>
        </Link>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: "#F8F5F2",
  },
  content: {
    padding: 16,
    gap: 12,
  },
  hero: {
    backgroundColor: "#3F2D20",
    borderRadius: 22,
    padding: 20,
    gap: 5,
  },
  heroSmall: {
    color: "#F6CF98",
    textTransform: "uppercase",
    letterSpacing: 1,
    fontSize: 12,
    fontWeight: "700",
  },
  heroTitle: {
    color: "#FFFFFF",
    fontSize: 24,
    fontWeight: "800",
  },
  heroSub: {
    color: "#F5E2CB",
    lineHeight: 20,
  },
  statsRow: {
    flexDirection: "row",
    gap: 10,
  },
  statCard: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    borderWidth: 1,
    borderColor: "#E8DDD2",
    padding: 14,
  },
  statValue: {
    fontSize: 26,
    fontWeight: "800",
    color: "#2B2018",
  },
  statLabel: {
    marginTop: 4,
    color: "#7A6859",
  },
  controls: {
    flexDirection: "row",
    gap: 10,
  },
  primaryAction: {
    flex: 1,
    borderRadius: 14,
    backgroundColor: "#0C8E69",
    paddingVertical: 12,
    alignItems: "center",
  },
  secondaryAction: {
    flex: 1,
    borderRadius: 14,
    backgroundColor: "#EFE7DE",
    paddingVertical: 12,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#DECFBF",
  },
  primaryActionText: {
    color: "#FFFFFF",
    fontWeight: "700",
  },
  secondaryActionText: {
    color: "#B0412E",
    fontWeight: "700",
  },
  vehicleCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    borderWidth: 1,
    borderColor: "#ECE2D8",
    padding: 10,
    paddingLeft: 15,
    gap: 3,
  },
  cardLink: {
    borderRadius: 16,
    width: "100%",
  },
  plate: {
    fontSize: 13,
    color: "#5D5145",
    letterSpacing: 1,
    fontWeight: "700",
  },
  model: {
    fontSize: 17,
    fontWeight: "700",
    color: "#1D140D",
  },
  km: {
    color: "#7D6C5E",
  },
  detailText: {
    marginTop: 2,
    color: "#845D3F",
    fontSize: 12,
    fontWeight: "700",
  },
});
