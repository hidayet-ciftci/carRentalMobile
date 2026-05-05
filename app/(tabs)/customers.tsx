import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { Link, router } from "expo-router";
import React, { useState } from "react";
import { Pressable, ScrollView, StyleSheet, View } from "react-native";

const customers = [
  { name: "Esra Cetin", phone: "0501 222 33 44", car: "34 CRN 107" },
  { name: "Kemal Dogan", phone: "0532 771 88 29", car: "35 IZM 440" },
  { name: "Banu Sahin", phone: "0543 118 00 64", car: "06 ANK 221" },
];

export default function CustomersScreen() {
  const [deleteMode, setDeleteMode] = useState(false);
  const [selected, setSelected] = useState<number[]>([]);

  return (
    <ScrollView style={styles.page} contentContainerStyle={styles.content}>
      <ThemedView style={styles.headerCard}>
        <ThemedText style={styles.headerMini}>Musteri Paneli</ThemedText>
        <ThemedText style={styles.headerTitle}>Musteri Is Takibi</ThemedText>
        <ThemedText style={styles.headerText}>
          Musteri goruntuleme, ekleme ve cikarma islemleri icin arayuz taslagi.
        </ThemedText>
      </ThemedView>

      <View style={styles.actions}>
        <Link href="/new-customer" asChild>
          <Pressable style={styles.primaryAction}>
            <ThemedText style={styles.primaryText}>+ Musteri Ekle</ThemedText>
          </Pressable>
        </Link>
        <Pressable
          style={[
            styles.secondaryAction,
            deleteMode && styles.secondaryActionActive,
          ]}
          onPress={() => setDeleteMode((v) => !v)}
        >
          <ThemedText
            style={[
              styles.secondaryText,
              deleteMode && styles.secondaryTextActive,
            ]}
          >
            {deleteMode ? "Vazgec" : "- Musteri Cikar"}
          </ThemedText>
        </Pressable>
      </View>

      <ThemedText style={styles.listTitle}>Musteri Listesi</ThemedText>

      <View style={styles.statsRow}>
        <ThemedView style={styles.statCard}>
          <ThemedText style={styles.statLabel}>
            Toplam Müşteri: <ThemedText style={styles.statValue}>48</ThemedText>
          </ThemedText>
        </ThemedView>
      </View>
      {customers.map((customer, index) => (
        <Pressable
          key={customer.phone}
          style={styles.cardLink}
          onPress={() => {
            deleteMode
              ? !selected.includes(index) && setSelected([...selected, index])
              : router.push("/customer-admin-detail");
            console.log(selected);
          }}
        >
          <View
            style={[styles.customerCard, deleteMode && styles.customerCardRow]}
          >
            {deleteMode && (
              <ThemedView
                style={
                  selected.includes(index)
                    ? styles.selectedCircle
                    : styles.selectCircle
                }
              />
            )}
            <View style={deleteMode ? styles.cardContent : undefined}>
              <ThemedText style={styles.customerName}>
                {customer.name}
              </ThemedText>
              <ThemedText style={styles.customerMeta}>
                Telefon: {customer.phone}
              </ThemedText>
              <ThemedText style={styles.customerMeta}>
                Arac: {customer.car}
              </ThemedText>
              <ThemedText style={styles.detailText}>
                Detay ve Guncelle
              </ThemedText>
            </View>
          </View>
        </Pressable>
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
  secondaryActionActive: {
    borderColor: "#294639",
    backgroundColor: "#DFF0E8",
  },
  secondaryTextActive: {
    color: "#1A3127",
  },
  customerCardRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  selectCircle: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: "#294639",
    backgroundColor: "#FFFFFF",
  },
  selectedCircle: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: "#294639",
    backgroundColor: "#294639",
  },
  cardContent: {
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
    borderColor: "#DDE8E2",
    padding: 14,
  },
  statValue: {
    fontWeight: "800",
    color: "#2B2018",
  },
  statLabel: {
    marginTop: 4,
    color: "#2A654F",
  },
});
