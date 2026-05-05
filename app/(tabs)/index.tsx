import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { Link } from "expo-router";
import React, { useState } from "react";
import { Pressable, ScrollView, StyleSheet, View } from "react-native";

const staffCards = [
  { name: "Ahmet Demir", role: "Yonetici", status: "Aktif" },
  { name: "Zeynep Kaya", role: "Operasyon", status: "Izinli" },
  { name: "Murat Aydin", role: "Satis", status: "Aktif" },
];

export default function ManagementScreen() {
  const [deleteMode, setDeleteMode] = useState(false);

  return (
    <ScrollView style={styles.page} contentContainerStyle={styles.content}>
      <ThemedView style={styles.banner}>
        <ThemedText style={styles.bannerLabel}>Yonetim Merkezi</ThemedText>
        <ThemedText style={styles.bannerTitle}>Kullanici Islemleri</ThemedText>
        <ThemedText style={styles.bannerSubtitle}>
          Kullanici goruntuleme, ekleme, duzenleme ve kaldirma islemleri icin
          tasarim alani.
        </ThemedText>
      </ThemedView>

      <View style={styles.quickActions}>
        <Link href="/new-user" asChild>
          <Pressable style={styles.actionButton}>
            <ThemedText style={styles.actionText}>+ Kullanici Ekle</ThemedText>
          </Pressable>
        </Link>
        <Pressable
          style={[
            styles.actionButtonMuted,
            deleteMode && styles.actionButtonMutedActive,
          ]}
          onPress={() => setDeleteMode((v) => !v)}
        >
          <ThemedText
            style={[
              styles.actionTextMuted,
              deleteMode && styles.actionTextMutedActive,
            ]}
          >
            {deleteMode ? "Vazgec" : "- Kullanici Cikar"}
          </ThemedText>
        </Pressable>
      </View>

      <ThemedText style={styles.sectionTitle}>Kullanici Listesi</ThemedText>
      <View style={styles.statsRow}>
        <ThemedView style={styles.statCard}>
          <ThemedText style={styles.statLabel}>
            Toplam Servis elemanı:{" "}
            <ThemedText style={styles.statValue}>15</ThemedText>
          </ThemedText>
          <ThemedText style={styles.statLabel}>
            Toplam Müşteri hizmetleri:{" "}
            <ThemedText style={styles.statValue}>5</ThemedText>
          </ThemedText>
          <ThemedText style={styles.statLabel}>
            Toplam Yönetici: <ThemedText style={styles.statValue}>3</ThemedText>
          </ThemedText>
          <ThemedText style={styles.statLabel}>
            Toplam Çalışan: <ThemedText style={styles.statValue}>23</ThemedText>
          </ThemedText>
        </ThemedView>
      </View>
      {staffCards.map((item) => (
        <Link
          key={item.name}
          disabled={deleteMode ?? true}
          href="/user-detail"
          asChild
        >
          <Pressable style={styles.cardLink}>
            <View style={styles.card}>
              {deleteMode && <ThemedView style={styles.selectCircle} />}
              <View style={styles.cardLeft}>
                <ThemedText style={styles.cardTitle}>{item.name}</ThemedText>
                <ThemedText style={styles.cardSub}>{item.role}</ThemedText>
              </View>
              <View style={styles.cardRight}>
                <ThemedText style={styles.status}>{item.status}</ThemedText>
                <ThemedText style={styles.detailText}>
                  Detay ve Guncelle
                </ThemedText>
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
  statsRow: {
    flexDirection: "row",
    gap: 10,
  },
  statCard: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    borderWidth: 1,
    borderColor: "#E7EDF5",
    padding: 14,
  },
  statValue: {
    fontWeight: "800",
    color: "#12243A",
  },
  statLabel: {
    marginTop: 4,
    color: "#60758C",
  },
});
