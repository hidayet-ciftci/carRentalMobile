import { Link } from "expo-router";
import React, { useState } from "react";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";

const staffCards = [
  { name: "Ahmet Demir", role: "Yonetici", status: "Aktif" },
  { name: "Zeynep Kaya", role: "Operasyon", status: "Izinli" },
  { name: "Murat Aydin", role: "Satis", status: "Aktif" },
];

export default function ManagementScreen() {
  const [deleteMode, setDeleteMode] = useState(false);

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
        <Link href="/new-user" asChild>
          <Pressable style={styles.actionButton}>
            <Text style={styles.actionText}>+ Kullanici Ekle</Text>
          </Pressable>
        </Link>
        <Pressable
          style={[
            styles.actionButtonMuted,
            deleteMode && styles.actionButtonMutedActive,
          ]}
          onPress={() => setDeleteMode((v) => !v)}
        >
          <Text
            style={[
              styles.actionTextMuted,
              deleteMode && styles.actionTextMutedActive,
            ]}
          >
            {deleteMode ? "Vazgec" : "- Kullanici Cikar"}
          </Text>
        </Pressable>
      </View>

      <Text style={styles.sectionTitle}>Kullanici Listesi</Text>
      {staffCards.map((item) => (
        <Link key={item.name} href="/user-detail" asChild>
          <Pressable style={styles.cardLink}>
            <View style={styles.card}>
              {deleteMode && <View style={styles.selectCircle} />}
              <View style={styles.cardLeft}>
                <Text style={styles.cardTitle}>{item.name}</Text>
                <Text style={styles.cardSub}>{item.role}</Text>
              </View>
              <View style={styles.cardRight}>
                <Text style={styles.status}>{item.status}</Text>
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
    gap: 15,
  },
  cardLink: {
    borderRadius: 16,
    width: "100%",
  },
  cardRight: {
    alignItems: "flex-end",
    gap: 6,
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
  detailText: {
    color: "#2B5678",
    fontSize: 12,
    fontWeight: "700",
  },
  actionButtonMutedActive: {
    borderColor: "#1B2F42",
    backgroundColor: "#E2E9F3",
  },
  actionTextMutedActive: {
    color: "#1B2F42",
  },
  selectCircle: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: "#1B2F42",
    backgroundColor: "#FFFFFF",
  },
  cardLeft: {
    flex: 1,
  },
});
