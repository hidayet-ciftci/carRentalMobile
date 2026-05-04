import { Link } from "expo-router";
import { StyleSheet, Text, TextInput, View } from "react-native";

export default function AdminLoginScreen() {
  return (
    <View style={styles.page}>
      <View style={styles.panel}>
        <Text style={styles.panelTitle}>Kullanici Girisi</Text>
        <Text style={styles.panelSub}>
          Email ve password ile yonetim ekranina gecis yapin.
        </Text>

        <Text style={styles.label}>Email</Text>
        <TextInput
          placeholder="ornek@carrental.com"
          placeholderTextColor="#8EA2B4"
          style={styles.input}
        />

        <Text style={styles.label}>Password</Text>
        <TextInput
          placeholder="********"
          placeholderTextColor="#8EA2B4"
          secureTextEntry
          style={styles.input}
        />

        <Link href="/(tabs)" style={styles.loginButton}>
          <Text style={styles.loginText}>Panele Giris Yap</Text>
        </Link>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: "#101C2A",
    justifyContent: "center",
    padding: 20,
  },
  panel: {
    backgroundColor: "#F6F9FC",
    borderRadius: 24,
    padding: 20,
    gap: 10,
  },
  panelTitle: {
    fontSize: 26,
    fontWeight: "800",
    color: "#102336",
  },
  panelSub: {
    color: "#5B738A",
    lineHeight: 20,
    marginBottom: 4,
  },
  label: {
    fontWeight: "700",
    color: "#1B3650",
  },
  input: {
    borderWidth: 1,
    borderColor: "#CFDCE8",
    borderRadius: 14,
    paddingHorizontal: 14,
    paddingVertical: 12,
    color: "#102336",
    backgroundColor: "#FFFFFF",
  },
  loginButton: {
    marginTop: 10,
    backgroundColor: "#0B6E4F",
    borderRadius: 14,
    paddingVertical: 13,
    paddingLeft: 15,
    alignItems: "center",
  },
  loginText: {
    color: "#FFFFFF",
    fontWeight: "700",
    fontSize: 15,
  },
});
