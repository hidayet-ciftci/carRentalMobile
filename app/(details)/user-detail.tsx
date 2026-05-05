import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { router } from "expo-router";
import { StyleSheet, TextInput, TouchableOpacity } from "react-native";

export default function UserDetailScreen() {
  return (
    <ThemedView style={styles.page}>
      <TouchableOpacity style={styles.backButton} onPress={router.back}>
        <ThemedText>Go Back</ThemedText>
      </TouchableOpacity>
      <ThemedView style={styles.card}>
        <ThemedText style={styles.title}>Kullanici Detayi</ThemedText>
        <ThemedText style={styles.subtitle}>
          Secilen kullanicinin bilgilerinin guncellenebilecegi tasarim ekrani.
        </ThemedText>

        <ThemedText style={styles.label}>Ad Soyad</ThemedText>
        <TextInput style={styles.input} defaultValue="Ahmet Demir" />

        <ThemedText style={styles.label}>Rol</ThemedText>
        <TextInput style={styles.input} defaultValue="Yonetici" />

        <ThemedText style={styles.label}>Email</ThemedText>
        <TextInput style={styles.input} defaultValue="ahmet@carrental.com" />

        <ThemedText style={styles.label}>Durum</ThemedText>
        <TextInput style={styles.input} defaultValue="Aktif" />

        <ThemedView style={styles.button}>
          <ThemedText style={styles.buttonText}>Guncelle</ThemedText>
        </ThemedView>
      </ThemedView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: "#F3F6FB",
    justifyContent: "center",
    padding: 16,
  },
  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    padding: 18,
    gap: 10,
    borderWidth: 1,
    borderColor: "#E7EDF5",
  },
  title: {
    fontSize: 24,
    fontWeight: "800",
    color: "#12243A",
  },
  subtitle: {
    color: "#60758C",
    lineHeight: 20,
    marginBottom: 4,
  },
  label: {
    color: "#294259",
    fontWeight: "700",
  },
  input: {
    borderWidth: 1,
    borderColor: "#D6E1EE",
    borderRadius: 12,
    paddingHorizontal: 12,
    paddingVertical: 10,
    backgroundColor: "#FBFDFF",
    color: "#12243A",
  },
  button: {
    marginTop: 8,
    backgroundColor: "#1D608A",
    borderRadius: 12,
    paddingVertical: 12,
    alignItems: "center",
  },
  buttonText: {
    color: "#FFFFFF",
    fontWeight: "700",
  },
  backButton: {
    borderRadius: 14,
    margin: 15,
    paddingVertical: 5,
    paddingHorizontal: 10,
    right: 5,
    top: 60,
    position: "absolute",
  },
});
