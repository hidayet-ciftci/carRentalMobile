import { ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function NewCustomerScreen() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView style={styles.page} contentContainerStyle={styles.content}>
        <View style={styles.header}>
          <Text style={styles.headerLabel}>Musteri Modulu</Text>
          <Text style={styles.headerTitle}>Yeni Musteri Ekle</Text>
          <Text style={styles.headerSub}>
            Musteri bilgilerini doldurun, kayit islemi sonradan eklenecek.
          </Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.fieldLabel}>Ad Soyad</Text>
          <TextInput
            style={styles.input}
            placeholder="Ornek: Ali Celik"
            placeholderTextColor="#5E8C78"
          />

          <Text style={styles.fieldLabel}>Telefon</Text>
          <TextInput
            style={styles.input}
            placeholder="05xx xxx xx xx"
            placeholderTextColor="#5E8C78"
            keyboardType="phone-pad"
          />

          <Text style={styles.fieldLabel}>Email</Text>
          <TextInput
            style={styles.input}
            placeholder="ornek@mail.com"
            placeholderTextColor="#5E8C78"
            keyboardType="email-address"
            autoCapitalize="none"
          />

          <Text style={styles.fieldLabel}>Bagli Arac (Plaka)</Text>
          <TextInput
            style={styles.input}
            placeholder="Ornek: 34 ABC 123"
            placeholderTextColor="#5E8C78"
          />

          <Text style={styles.fieldLabel}>Adres</Text>
          <TextInput
            style={[styles.input, styles.inputMultiline]}
            placeholder="Musteri adresini yazin..."
            placeholderTextColor="#5E8C78"
            multiline
            numberOfLines={3}
            textAlignVertical="top"
          />

          <View style={styles.saveButton}>
            <Text style={styles.saveButtonText}>Kaydet</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: "#F4F8F2",
  },
  content: {
    padding: 16,
    gap: 14,
  },
  header: {
    backgroundColor: "#234F3F",
    borderRadius: 20,
    padding: 18,
    gap: 4,
  },
  headerLabel: {
    color: "#9AD8BE",
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
    color: "#D2EFE2",
    lineHeight: 20,
  },
  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    padding: 18,
    gap: 10,
    borderWidth: 1,
    borderColor: "#D8EAE1",
  },
  fieldLabel: {
    color: "#1E4434",
    fontWeight: "700",
  },
  input: {
    borderWidth: 1,
    borderColor: "#C8DDD4",
    borderRadius: 12,
    paddingHorizontal: 12,
    paddingVertical: 11,
    backgroundColor: "#FAFCFB",
    color: "#122E24",
  },
  inputMultiline: {
    minHeight: 80,
    paddingTop: 10,
  },
  saveButton: {
    marginTop: 6,
    backgroundColor: "#1E6A50",
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
