import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { router } from "expo-router";
import { ScrollView, StyleSheet, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function CustomerDetailsScreen() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView style={styles.page} contentContainerStyle={styles.content}>
        <TouchableOpacity style={styles.backButton} onPress={router.back}>
          <ThemedText>Go Back</ThemedText>
        </TouchableOpacity>
        <ThemedView style={styles.hero}>
          <ThemedText style={styles.heroTitle}>Musteri Detaylari</ThemedText>
          <ThemedText style={styles.heroSub}>
            Bu alan telefon numarasi ile bulunan arac ve servis bilgilerini
            gosterir.
          </ThemedText>
        </ThemedView>

        <ThemedView style={styles.infoCard}>
          <ThemedText style={styles.heading}>Arac Bilgileri</ThemedText>
          <ThemedText style={styles.item}>Plaka: 34 CRN 107</ThemedText>
          <ThemedText style={styles.item}>Model: Renault Clio</ThemedText>
          <ThemedText style={styles.item}>Kira Bitis: 15.05.2026</ThemedText>
        </ThemedView>

        <ThemedView style={styles.infoCard}>
          <ThemedText style={styles.heading}>Servis Kaydi</ThemedText>
          <ThemedText style={styles.item}>Son Servis: 02.05.2026</ThemedText>
          <ThemedText style={styles.item}>Durum: Tamamlandi</ThemedText>
          <ThemedText style={styles.item}>
            Not: Periyodik bakim yapildi.
          </ThemedText>
        </ThemedView>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: "#F5FAF9",
  },
  content: {
    padding: 16,
    gap: 12,
  },
  hero: {
    backgroundColor: "#1F5E63",
    borderRadius: 20,
    padding: 18,
    gap: 4,
  },
  heroTitle: {
    color: "#FFFFFF",
    fontSize: 24,
    fontWeight: "800",
  },
  heroSub: {
    color: "#CFEBED",
    lineHeight: 20,
  },
  infoCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    borderWidth: 1,
    borderColor: "#D8E8E6",
    padding: 16,
    gap: 6,
  },
  heading: {
    fontWeight: "800",
    color: "#153B3E",
    fontSize: 16,
    marginBottom: 2,
  },
  item: {
    color: "#486E71",
  },
  backButton: {
    borderRadius: 14,
    margin: 15,
    paddingVertical: 5,
    paddingHorizontal: 10,
    right: -275,
    position: "fixed",
  },
});
