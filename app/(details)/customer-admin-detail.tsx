import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { router } from "expo-router";
import { StyleSheet, TextInput, TouchableOpacity } from "react-native";

export default function CustomerAdminDetailScreen() {
  return (
    <ThemedView style={styles.page}>
      <TouchableOpacity style={styles.backButton} onPress={router.back}>
        <ThemedText>Go Back</ThemedText>
      </TouchableOpacity>
      <ThemedView style={styles.card}>
        <ThemedText style={styles.title}>Musteri Detayi</ThemedText>
        <ThemedText style={styles.subtitle}>
          Secilen musterinin bilgilerinin guncellenebilecegi tasarim ekrani.
        </ThemedText>

        <ThemedText style={styles.label}>Ad Soyad</ThemedText>
        <TextInput style={styles.input} defaultValue="Esra Cetin" />

        <ThemedText style={styles.label}>Telefon</ThemedText>
        <TextInput style={styles.input} defaultValue="0501 222 33 44" />

        <ThemedText style={styles.label}>Bagli Arac</ThemedText>
        <TextInput style={styles.input} defaultValue="34 CRN 107" />

        <ThemedText style={styles.label}>Adres</ThemedText>
        <TextInput style={styles.input} defaultValue="Istanbul" />

        <ThemedView style={styles.button}>
          <ThemedText style={styles.buttonText}>Guncelle</ThemedText>
        </ThemedView>
      </ThemedView>
    </ThemedView>
  );
}

export const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: "#F4F8F2",
    justifyContent: "center",
    padding: 16,
  },
  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    padding: 18,
    gap: 10,
    borderWidth: 1,
    borderColor: "#DDE8E2",
  },
  title: {
    fontSize: 24,
    fontWeight: "800",
    color: "#1A3127",
  },
  subtitle: {
    color: "#5D7C6F",
    lineHeight: 20,
    marginBottom: 4,
  },
  label: {
    color: "#2E4C40",
    fontWeight: "700",
  },
  input: {
    borderWidth: 1,
    borderColor: "#CCDDD5",
    borderRadius: 12,
    paddingHorizontal: 12,
    paddingVertical: 10,
    backgroundColor: "#FCFFFD",
    color: "#1A3127",
  },
  button: {
    marginTop: 8,
    backgroundColor: "#2B7A5C",
    borderRadius: 12,
    paddingVertical: 12,
    alignItems: "center",
  },
  buttonText: {
    color: "#FFFFFF",
    fontWeight: "700",
  },
  backButton: {
    backgroundColor: "white",
    borderRadius: 14,
    width: 75,
    margin: 15,
    paddingVertical: 5,
    paddingHorizontal: 10,
    right: 5,
    top: 60,
    position: "absolute",
  },
});
