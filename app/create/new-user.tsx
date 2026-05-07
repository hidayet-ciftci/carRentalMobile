import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { router } from "expo-router";
import {
  ScrollView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function NewUserScreen() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView style={styles.page} contentContainerStyle={styles.content}>
        <TouchableOpacity style={styles.backButton} onPress={router.back}>
          <ThemedText>Go Back</ThemedText>
        </TouchableOpacity>
        <ThemedView style={styles.header}>
          <ThemedText style={styles.headerLabel}>Yonetim Modulu</ThemedText>
          <ThemedText style={styles.headerTitle}>
            Yeni Kullanici Ekle
          </ThemedText>
          <ThemedText style={styles.headerSub}>
            Kullanici bilgilerini doldurun, kayit islemi sonradan eklenecek.
          </ThemedText>
        </ThemedView>

        <ThemedView style={styles.card}>
          <ThemedText style={styles.fieldLabel}>Ad Soyad</ThemedText>
          <TextInput
            style={styles.input}
            placeholder="Ornek: Ahmet Demir"
            placeholderTextColor="#7A90A8"
          />

          <ThemedText style={styles.fieldLabel}>Email</ThemedText>
          <TextInput
            style={styles.input}
            placeholder="ornek@carrental.com"
            placeholderTextColor="#7A90A8"
            keyboardType="email-address"
            autoCapitalize="none"
          />

          <ThemedText style={styles.fieldLabel}>Telefon</ThemedText>
          <TextInput
            style={styles.input}
            placeholder="05xx xxx xx xx"
            placeholderTextColor="#7A90A8"
            keyboardType="phone-pad"
          />

          <ThemedText style={styles.fieldLabel}>Rol</ThemedText>
          <TextInput
            style={styles.input}
            placeholder="Ornek: Yonetici / Operasyon / Satis"
            placeholderTextColor="#7A90A8"
          />

          <ThemedText style={styles.fieldLabel}>Sifre</ThemedText>
          <TextInput
            style={styles.input}
            placeholder="Guclu bir sifre girin"
            placeholderTextColor="#7A90A8"
            secureTextEntry
          />

          <ThemedView style={styles.saveButton}>
            <ThemedText style={styles.saveButtonText}>Kaydet</ThemedText>
          </ThemedView>
        </ThemedView>
      </ScrollView>
    </SafeAreaView>
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
  header: {
    backgroundColor: "#0E4A67",
    borderRadius: 20,
    padding: 18,
    gap: 4,
  },
  headerLabel: {
    color: "#9ED5EE",
    textTransform: "uppercase",
    letterSpacing: 1,
    fontSize: 12,
    fontWeight: "700",
  },
  headerTitle: {
    color: "#FFFFFF",
    fontSize: 24,
    fontWeight: "800",
  },
  headerSub: {
    color: "#D4E8F4",
    lineHeight: 20,
  },
  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    padding: 18,
    gap: 10,
    borderWidth: 1,
    borderColor: "#E7EDF5",
  },
  fieldLabel: {
    color: "#294259",
    fontWeight: "700",
  },
  input: {
    borderWidth: 1,
    borderColor: "#D6E1EE",
    borderRadius: 12,
    paddingHorizontal: 12,
    paddingVertical: 11,
    backgroundColor: "#FBFDFF",
    color: "#12243A",
  },
  saveButton: {
    marginTop: 6,
    backgroundColor: "#1D608A",
    borderRadius: 12,
    paddingVertical: 13,
    alignItems: "center",
  },
  saveButtonText: {
    color: "#FFFFFF",
    fontWeight: "700",
    fontSize: 15,
  },
  backButton: {
    borderRadius: 14,
    margin: 15,
    paddingVertical: 5,
    paddingHorizontal: 10,
    right: -275,
    top: 0,
    marginBlock: 0,
    position: "fixed",
  },
});
