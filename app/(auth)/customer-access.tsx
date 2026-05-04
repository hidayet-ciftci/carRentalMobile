import { Link, router } from "expo-router";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function CustomerAccessScreen() {
  return (
    <View style={styles.page}>
      <TouchableOpacity style={styles.backButton} onPress={router.back}>
        <Text>Go Back</Text>
      </TouchableOpacity>
      <View style={styles.card}>
        <Text style={styles.title}>Musteri Girisi</Text>
        <Text style={styles.subtitle}>
          Telefon numaranizi girerek arac ve servis kayitlarinizi
          goruntuleyebilirsiniz.
        </Text>

        <Text style={styles.label}>Telefon Numarasi</Text>
        <TextInput
          placeholder="05xx xxx xx xx"
          placeholderTextColor="#7A8B9C"
          style={styles.input}
        />

        <Link href="/customer-details" style={styles.button}>
          <Text style={styles.buttonText}>Detaylari Goruntule</Text>
        </Link>
      </View>
    </View>
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
