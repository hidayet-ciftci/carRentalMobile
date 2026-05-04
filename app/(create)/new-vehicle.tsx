import { ScrollView, StyleSheet, Text, TextInput, View } from "react-native";

export default function NewVehicleScreen() {
  return (
    <ScrollView style={styles.page} contentContainerStyle={styles.content}>
      <View style={styles.header}>
        <Text style={styles.headerLabel}>Arac Modulu</Text>
        <Text style={styles.headerTitle}>Yeni Arac Ekle</Text>
        <Text style={styles.headerSub}>
          Araca ait bilgileri doldurun, kayit islemi sonradan eklenecek.
        </Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.fieldLabel}>Plaka</Text>
        <TextInput
          style={styles.input}
          placeholder="Ornek: 34 ABC 123"
          placeholderTextColor="#9E8C7A"
        />

        <Text style={styles.fieldLabel}>Marka</Text>
        <TextInput
          style={styles.input}
          placeholder="Ornek: Renault"
          placeholderTextColor="#9E8C7A"
        />

        <Text style={styles.fieldLabel}>Model</Text>
        <TextInput
          style={styles.input}
          placeholder="Ornek: Clio"
          placeholderTextColor="#9E8C7A"
        />

        <Text style={styles.fieldLabel}>Yil</Text>
        <TextInput
          style={styles.input}
          placeholder="Ornek: 2022"
          placeholderTextColor="#9E8C7A"
          keyboardType="numeric"
        />

        <Text style={styles.fieldLabel}>Kilometre</Text>
        <TextInput
          style={styles.input}
          placeholder="Ornek: 45000"
          placeholderTextColor="#9E8C7A"
          keyboardType="numeric"
        />

        <Text style={styles.fieldLabel}>Durum</Text>
        <TextInput
          style={styles.input}
          placeholder="Ornek: Musait / Kirada"
          placeholderTextColor="#9E8C7A"
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
    backgroundColor: "#F8F5F2",
  },
  content: {
    padding: 16,
    gap: 14,
  },
  header: {
    backgroundColor: "#3F2D20",
    borderRadius: 20,
    padding: 18,
    gap: 4,
  },
  headerLabel: {
    color: "#F6CF98",
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
    color: "#F5E2CB",
    lineHeight: 20,
  },
  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    padding: 18,
    gap: 10,
    borderWidth: 1,
    borderColor: "#E8DDD2",
  },
  fieldLabel: {
    color: "#4A3D30",
    fontWeight: "700",
  },
  input: {
    borderWidth: 1,
    borderColor: "#DCCFBE",
    borderRadius: 12,
    paddingHorizontal: 12,
    paddingVertical: 11,
    backgroundColor: "#FFFCF8",
    color: "#2B2018",
  },
  saveButton: {
    marginTop: 6,
    backgroundColor: "#8B5A35",
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
