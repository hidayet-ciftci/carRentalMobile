import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { Link, router } from "expo-router";
import { StyleSheet, TextInput, TouchableOpacity } from "react-native";

export default function CustomerAccessScreen() {
  return (
    <ThemedView style={styles.page}>
      <TouchableOpacity style={styles.backButton} onPress={router.back}>
        <ThemedText>Go Back</ThemedText>
      </TouchableOpacity>
      <ThemedView style={styles.card}>
        <ThemedText style={styles.title}>Musteri Girisi</ThemedText>
        <ThemedText style={styles.subtitle}>
          Telefon numaranizi girerek arac ve servis kayitlarinizi
          goruntuleyebilirsiniz.
        </ThemedText>

        <ThemedText style={styles.label}>Telefon Numarasi</ThemedText>
        <TextInput
          placeholder="05xx xxx xx xx"
          placeholderTextColor="#7A8B9C"
          style={styles.input}
        />

        <Link href="/customer-details" style={styles.button}>
          <ThemedText style={styles.buttonText}>Detaylari Goruntule</ThemedText>
        </Link>
      </ThemedView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: "#EDF5FF",
    justifyContent: "center",
    padding: 20,
  },
  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 24,
    padding: 20,
    gap: 10,
    borderWidth: 1,
    borderColor: "#D6E4F3",
  },
  title: {
    fontSize: 24,
    color: "#132A42",
    fontWeight: "800",
  },
  subtitle: {
    color: "#5A738C",
    lineHeight: 20,
    marginBottom: 6,
  },
  label: {
    fontWeight: "700",
    color: "#213D59",
  },
  input: {
    borderWidth: 1,
    borderColor: "#C9D8E8",
    borderRadius: 14,
    paddingHorizontal: 14,
    paddingVertical: 12,
    color: "#132A42",
    backgroundColor: "#FAFCFF",
  },
  button: {
    marginTop: 6,
    backgroundColor: "#0B5FA4",
    borderRadius: 14,
    paddingVertical: 13,
    paddingLeft: 15,
    alignItems: "center",
  },
  buttonText: {
    color: "#FFFFFF",
    fontWeight: "700",
    fontSize: 15,
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
