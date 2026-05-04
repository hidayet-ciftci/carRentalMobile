import { router } from "expo-router";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function ServiceDetailScreen() {
  return (
    <View style={styles.page}>
      <TouchableOpacity style={styles.backButton} onPress={router.back}>
        <Text>Go Back</Text>
      </TouchableOpacity>
      <View style={styles.card}>
        <Text style={styles.title}>Servis Detayi</Text>
        <Text style={styles.subtitle}>
          Secilen servis kaydinin detaylari ve guncelleme alanlari.
        </Text>

        <Text style={styles.label}>Kayit No</Text>
        <TextInput style={styles.input} value="SRV-2401" editable={false} />

        <Text style={styles.label}>Plaka</Text>
        <TextInput style={styles.input} defaultValue="34 CRN 107" />

        <Text style={styles.label}>Servis Notu</Text>
        <TextInput style={styles.input} defaultValue="Periyodik bakim" />

        <Text style={styles.label}>Tarih</Text>
        <TextInput style={styles.input} defaultValue="02.05.2026" />

        <View style={styles.button}>
          <Text style={styles.buttonText}>Guncelle</Text>
        </View>
      </View>
    </View>
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
