import { router } from "expo-router";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function CustomerDetailsScreen() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView style={styles.page} contentContainerStyle={styles.content}>
        <TouchableOpacity style={styles.backButton} onPress={router.back}>
          <Text>Go Back</Text>
        </TouchableOpacity>
        <View style={styles.hero}>
          <Text style={styles.heroTitle}>Musteri Detaylari</Text>
          <Text style={styles.heroSub}>
            Bu alan telefon numarasi ile bulunan arac ve servis bilgilerini
            gosterir.
          </Text>
        </View>

        <View style={styles.infoCard}>
          <Text style={styles.heading}>Arac Bilgileri</Text>
          <Text style={styles.item}>Plaka: 34 CRN 107</Text>
          <Text style={styles.item}>Model: Renault Clio</Text>
          <Text style={styles.item}>Kira Bitis: 15.05.2026</Text>
        </View>

        <View style={styles.infoCard}>
          <Text style={styles.heading}>Servis Kaydi</Text>
          <Text style={styles.item}>Son Servis: 02.05.2026</Text>
          <Text style={styles.item}>Durum: Tamamlandi</Text>
          <Text style={styles.item}>Not: Periyodik bakim yapildi.</Text>
        </View>
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
    backgroundColor: "white",
    borderRadius: 14,
    width: 75,
    margin: 15,
    paddingVertical: 5,
    paddingHorizontal: 10,
    right: -275,
    position: "fixed",
  },
});
