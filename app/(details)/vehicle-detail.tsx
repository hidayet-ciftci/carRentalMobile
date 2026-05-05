import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { router } from "expo-router";
import { StyleSheet, TextInput, TouchableOpacity } from "react-native";

export default function VehicleDetailScreen() {
  return (
    <ThemedView style={styles.page}>
      <TouchableOpacity style={styles.backButton} onPress={router.back}>
        <ThemedText>Go Back</ThemedText>
      </TouchableOpacity>
      <ThemedView style={styles.card}>
        <ThemedText style={styles.title}>Arac Detayi</ThemedText>
        <ThemedText style={styles.subtitle}>
          Secilen aracin bilgilerini guncellemek icin tasarim alani.
        </ThemedText>

        <ThemedText style={styles.label}>Plaka</ThemedText>
        <TextInput style={styles.input} value="34 CRN 107" editable={false} />

        <ThemedText style={styles.label}>Model</ThemedText>
        <TextInput style={styles.input} defaultValue="Renault Clio" />

        <ThemedText style={styles.label}>Kilometre</ThemedText>
        <TextInput style={styles.input} defaultValue="83.200" />

        <ThemedText style={styles.label}>Durum</ThemedText>
        <TextInput style={styles.input} defaultValue="Kirada" />

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
    backgroundColor: "#F8F5F2",
    justifyContent: "center",
    padding: 16,
  },
  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    padding: 18,
    gap: 10,
    borderWidth: 1,
    borderColor: "#E8DDD2",
  },
  title: {
    fontSize: 24,
    fontWeight: "800",
    color: "#2B2018",
  },
  subtitle: {
    color: "#7A6859",
    lineHeight: 20,
    marginBottom: 4,
  },
  label: {
    color: "#4A3D30",
    fontWeight: "700",
  },
  input: {
    borderWidth: 1,
    borderColor: "#DCCFBE",
    borderRadius: 12,
    paddingHorizontal: 12,
    paddingVertical: 10,
    backgroundColor: "#FFFCF8",
    color: "#2B2018",
  },
  button: {
    marginTop: 8,
    backgroundColor: "#8B5A35",
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
