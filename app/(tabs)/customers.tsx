import { Link } from "expo-router";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";

const customers = [
  { name: "Esra Cetin", phone: "0501 222 33 44", car: "34 CRN 107" },
  { name: "Kemal Dogan", phone: "0532 771 88 29", car: "35 IZM 440" },
  { name: "Banu Sahin", phone: "0543 118 00 64", car: "06 ANK 221" },
];

export default function CustomersScreen() {
  return (
    <ScrollView style={styles.page} contentContainerStyle={styles.content}>
      <View style={styles.headerCard}>
        <Text style={styles.headerMini}>Musteri Paneli</Text>
        <Text style={styles.headerTitle}>Musteri Is Takibi</Text>
        <Text style={styles.headerText}>
          Musteri goruntuleme, ekleme ve cikarma islemleri icin arayuz taslagi.
        </Text>
      </View>

      <View style={styles.actions}>
        <View style={styles.primaryAction}>
          <Text style={styles.primaryText}>+ Musteri Ekle</Text>
        </View>
        <View style={styles.secondaryAction}>
          <Text style={styles.secondaryText}>- Musteri Cikar</Text>
        </View>
      </View>

      <Text style={styles.listTitle}>Musteri Listesi</Text>
      {customers.map((customer) => (
        <Link key={customer.phone} href="/customer-admin-detail" asChild>
          <Pressable style={styles.cardLink}>
            <View style={styles.customerCard}>
              <Text style={styles.customerName}>{customer.name}</Text>
              <Text style={styles.customerMeta}>Telefon: {customer.phone}</Text>
              <Text style={styles.customerMeta}>Arac: {customer.car}</Text>
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
    backgroundColor: "#F4F8F2",
  },
  content: {
    padding: 16,
    gap: 12,
  },
  headerCard: {
    backgroundColor: "#234F3F",
    borderRadius: 20,
    padding: 18,
    gap: 4,
  },
  headerMini: {
    color: "#A4DFCA",
    textTransform: "uppercase",
    letterSpacing: 1,
    fontSize: 12,
    fontWeight: "700",
  },
  headerTitle: {
    color: "#FFFFFF",
    fontSize: 23,
    fontWeight: "800",
  },
  headerText: {
    color: "#D9F1E8",
    lineHeight: 20,
  },
  actions: {
    flexDirection: "row",
    gap: 10,
  },
  primaryAction: {
    flex: 1,
    borderRadius: 14,
    backgroundColor: "#0D9A6E",
    paddingVertical: 12,
    alignItems: "center",
  },
  secondaryAction: {
    flex: 1,
    borderRadius: 14,
    backgroundColor: "#E9F0EC",
    paddingVertical: 12,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#D2DCD7",
  },
  primaryText: {
    color: "#FFFFFF",
    fontWeight: "700",
  },
  secondaryText: {
    color: "#294639",
    fontWeight: "700",
  },
  listTitle: {
    marginTop: 4,
    fontSize: 16,
    fontWeight: "700",
    color: "#1D392E",
  },
  customerCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    borderWidth: 1,
    borderColor: "#DDE8E2",
    padding: 14,
    gap: 4,
  },
  cardLink: {
    borderRadius: 16,
    width: "100%",
  },
  customerName: {
    fontSize: 16,
    fontWeight: "700",
    color: "#1A3127",
  },
  customerMeta: {
    color: "#5D7C6F",
  },
  detailText: {
    marginTop: 4,
    color: "#2A654F",
    fontSize: 12,
    fontWeight: "700",
  },
});
