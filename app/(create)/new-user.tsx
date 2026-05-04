import { ScrollView, StyleSheet, Text, TextInput, View } from "react-native";

export default function NewUserScreen() {
  return (
    <ScrollView style={styles.page} contentContainerStyle={styles.content}>
      <View style={styles.header}>
        <Text style={styles.headerLabel}>Yonetim Modulu</Text>
        <Text style={styles.headerTitle}>Yeni Kullanici Ekle</Text>
        <Text style={styles.headerSub}>
          Kullanici bilgilerini doldurun, kayit islemi sonradan eklenecek.
        </Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.fieldLabel}>Ad Soyad</Text>
        <TextInput
          style={styles.input}
          placeholder="Ornek: Ahmet Demir"
          placeholderTextColor="#7A90A8"
        />

        <Text style={styles.fieldLabel}>Email</Text>
        <TextInput
          style={styles.input}
          placeholder="ornek@carrental.com"
          placeholderTextColor="#7A90A8"
          keyboardType="email-address"
          autoCapitalize="none"
        />

        <Text style={styles.fieldLabel}>Telefon</Text>
        <TextInput
          style={styles.input}
          placeholder="05xx xxx xx xx"
          placeholderTextColor="#7A90A8"
          keyboardType="phone-pad"
        />

        <Text style={styles.fieldLabel}>Rol</Text>
        <TextInput
          style={styles.input}
          placeholder="Ornek: Yonetici / Operasyon / Satis"
          placeholderTextColor="#7A90A8"
        />

        <Text style={styles.fieldLabel}>Sifre</Text>
        <TextInput
          style={styles.input}
          placeholder="Guclu bir sifre girin"
          placeholderTextColor="#7A90A8"
          secureTextEntry
        />

        <View style={styles.saveButton}>
          <Text style={styles.saveButtonText}>Kaydet</Text>
        </View>
      </View>
    </ScrollView>
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
});
