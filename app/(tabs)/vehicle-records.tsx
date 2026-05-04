import { ScrollView, StyleSheet, Text, View } from "react-native";

const records = [
  {
    id: "SRV-2401",
    plate: "34 CRN 107",
    note: "Periyodik bakim",
    date: "02.05.2026",
  },
  {
    id: "SRV-2402",
    plate: "35 IZM 440",
    note: "Lastik degisimi",
    date: "28.04.2026",
  },
  {
    id: "SRV-2403",
    plate: "06 ANK 221",
    note: "Yikama ve detay",
    date: "24.04.2026",
  },
];

export default function VehicleRecordsScreen() {
  return (
    <ScrollView style={styles.page} contentContainerStyle={styles.content}>
      <View style={styles.topCard}>
        <Text style={styles.topLabel}>Arac Kayit Modulu</Text>
        <Text style={styles.topTitle}>Servis Kayitlari</Text>
        <Text style={styles.topDesc}>
          Arac kayitlarini goruntuleme, ekleme ve silme is akisi icin tasarim
          alani.
        </Text>
      </View>

      <View style={styles.rowActions}>
        <Text style={styles.add}>+ Kayit Ekle</Text>
        <Text style={styles.remove}>- Kayit Sil</Text>
      </View>

      {records.map((record) => (
        <View key={record.id} style={styles.recordCard}>
          <View style={styles.recordHeader}>
            <Text style={styles.recordId}>{record.id}</Text>
            <Text style={styles.recordDate}>{record.date}</Text>
          </View>
          <Text style={styles.recordPlate}>{record.plate}</Text>
          <Text style={styles.recordNote}>{record.note}</Text>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: "#F6F4FB",
  },
  content: {
    padding: 16,
    gap: 12,
  },
  topCard: {
    backgroundColor: "#3C2C74",
    borderRadius: 20,
    padding: 18,
    gap: 4,
  },
  topLabel: {
    color: "#CABEFF",
    textTransform: "uppercase",
    letterSpacing: 1,
    fontWeight: "700",
    fontSize: 12,
  },
  topTitle: {
    color: "#FFFFFF",
    fontWeight: "800",
    fontSize: 23,
  },
  topDesc: {
    color: "#E6DFFC",
    lineHeight: 20,
  },
  rowActions: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 4,
  },
  add: {
    color: "#1F9468",
    fontWeight: "700",
  },
  remove: {
    color: "#B04545",
    fontWeight: "700",
  },
  recordCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    padding: 14,
    borderWidth: 1,
    borderColor: "#E4DCF5",
    gap: 4,
  },
  recordHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  recordId: {
    color: "#5A4A8A",
    fontWeight: "700",
  },
  recordDate: {
    color: "#8072A6",
    fontSize: 12,
  },
  recordPlate: {
    fontWeight: "700",
    color: "#241E39",
    fontSize: 16,
  },
  recordNote: {
    color: "#6B6285",
  },
});
