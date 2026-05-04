import { router } from "expo-router";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function UserDetailScreen() {
  return (
    <View style={styles.page}>
      <TouchableOpacity style={styles.backButton} onPress={router.back}>
        <Text>Go Back</Text>
      </TouchableOpacity>
      <View style={styles.card}>
        <Text style={styles.title}>Kullanici Detayi</Text>
        <Text style={styles.subtitle}>
          Secilen kullanicinin bilgilerinin guncellenebilecegi tasarim ekrani.
        </Text>

        <Text style={styles.label}>Ad Soyad</Text>
        <TextInput style={styles.input} defaultValue="Ahmet Demir" />

        <Text style={styles.label}>Rol</Text>
        <TextInput style={styles.input} defaultValue="Yonetici" />

        <Text style={styles.label}>Email</Text>
        <TextInput style={styles.input} defaultValue="ahmet@carrental.com" />

        <Text style={styles.label}>Durum</Text>
        <TextInput style={styles.input} defaultValue="Aktif" />

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
