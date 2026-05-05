import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { router } from "expo-router";
import { StyleSheet, TextInput, TouchableOpacity } from "react-native";

export default function ServiceDetailScreen() {
  return (
    <ThemedView style={styles.page}>
      <TouchableOpacity style={styles.backButton} onPress={router.back}>
        <ThemedText>Go Back</ThemedText>
      </TouchableOpacity>
      <ThemedView style={styles.card}>
        <ThemedText style={styles.title}>Servis Detayi</ThemedText>
        <ThemedText style={styles.subtitle}>
          Secilen servis kaydinin detaylari ve guncelleme alanlari.
        </ThemedText>

        <ThemedText style={styles.label}>Kayit No</ThemedText>
        <TextInput style={styles.input} value="SRV-2401" editable={false} />

        <ThemedText style={styles.label}>Plaka</ThemedText>
        <TextInput style={styles.input} defaultValue="34 CRN 107" />

        <ThemedText style={styles.label}>Servis Notu</ThemedText>
        <TextInput style={styles.input} defaultValue="Periyodik bakim" />

        <ThemedText style={styles.label}>Tarih</ThemedText>
        <TextInput style={styles.input} defaultValue="02.05.2026" />

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
    backgroundColor: "#F6F4FB",
    justifyContent: "center",
    padding: 16,
  },
  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    padding: 18,
    gap: 10,
    borderWidth: 1,
    borderColor: "#E4DCF5",
  },
  title: {
    fontSize: 24,
    fontWeight: "800",
    color: "#241E39",
  },
  subtitle: {
    color: "#6B6285",
    lineHeight: 20,
    marginBottom: 4,
  },
  label: {
    color: "#4A3F70",
    fontWeight: "700",
  },
  input: {
    borderWidth: 1,
    borderColor: "#D5C9ED",
    borderRadius: 12,
    paddingHorizontal: 12,
    paddingVertical: 10,
    backgroundColor: "#FCFAFF",
    color: "#241E39",
  },
  button: {
    marginTop: 8,
    backgroundColor: "#5841A8",
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
