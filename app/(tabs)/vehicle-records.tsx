import { Link } from "expo-router";
import React, { useState } from "react";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";

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
  const [deleteMode, setDeleteMode] = useState(false);

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
        <Link href="/new-service" asChild>
          <Pressable style={styles.primaryAction}>
            <Text style={styles.primaryActionText}>+ Yeni Servis</Text>
          </Pressable>
        </Link>
        <Pressable
          style={[
            styles.secondaryAction,
            deleteMode && styles.secondaryActionActive,
          ]}
          onPress={() => setDeleteMode((v) => !v)}
        >
          <Text
            style={[
              styles.secondaryActionText,
              deleteMode && styles.secondaryActionTextActive,
            ]}
          >
            {deleteMode ? "Vazgec" : "- Servis Sil"}
          </Text>
        </Pressable>
      </View>

      {records.map((record) => (
        <Link key={record.id} href="/service-detail" asChild>
          <Pressable style={styles.cardLink}>
            <View
              style={[styles.recordCard, deleteMode && styles.recordCardRow]}
            >
              {deleteMode && <View style={styles.selectCircle} />}
              <View style={deleteMode ? styles.cardContent : undefined}>
                <View style={styles.recordHeader}>
                  <Text style={styles.recordId}>{record.id}</Text>
                  <Text style={styles.recordDate}>{record.date}</Text>
                </View>
                <Text style={styles.recordPlate}>{record.plate}</Text>
                <Text style={styles.recordNote}>{record.note}</Text>
                <Text style={styles.detailText}>Detay ve Guncelle</Text>
              </View>
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
    gap: 10,
  },
  primaryAction: {
    flex: 1,
    borderRadius: 14,
    backgroundColor: "#1F9468",
    paddingVertical: 12,
    alignItems: "center",
  },
  secondaryAction: {
    flex: 1,
    borderRadius: 14,
    backgroundColor: "#EEE8F8",
    paddingVertical: 12,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#D7C9EE",
  },
  primaryActionText: {
    color: "#FFFFFF",
    fontWeight: "700",
  },
  secondaryActionText: {
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
  cardLink: {
    borderRadius: 16,
    width: "100%",
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
  detailText: {
    marginTop: 4,
    color: "#5D4D9A",
    fontSize: 12,
    fontWeight: "700",
  },
  secondaryActionActive: {
    borderColor: "#B04545",
    backgroundColor: "#F9F0F8",
  },
  secondaryActionTextActive: {
    color: "#B04545",
  },
  recordCardRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  selectCircle: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: "#B04545",
    backgroundColor: "#FFFFFF",
  },
  cardContent: {
    flex: 1,
  },
});
