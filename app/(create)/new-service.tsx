import { ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function NewServiceScreen() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView style={styles.page} contentContainerStyle={styles.content}>
        <View style={styles.header}>
          <Text style={styles.headerLabel}>Servis Modulu</Text>
          <Text style={styles.headerTitle}>Yeni Servis Kaydi</Text>
          <Text style={styles.headerSub}>
            Servis bilgilerini doldurun, kayit islemi sonradan eklenecek.
          </Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.fieldLabel}>Plaka</Text>
          <TextInput
            style={styles.input}
            placeholder="Ornek: 34 ABC 123"
            placeholderTextColor="#A090C0"
          />

          <Text style={styles.fieldLabel}>Servis Turu</Text>
          <TextInput
            style={styles.input}
            placeholder="Ornek: Periyodik Bakim"
            placeholderTextColor="#A090C0"
          />

          <Text style={styles.fieldLabel}>Aciklama</Text>
          <TextInput
            style={[styles.input, styles.inputMultiline]}
            placeholder="Servis detaylarini yazin..."
            placeholderTextColor="#A090C0"
            multiline
            numberOfLines={3}
            textAlignVertical="top"
          />

          <Text style={styles.fieldLabel}>Tarih</Text>
          <TextInput
            style={styles.input}
            placeholder="GG.AA.YYYY"
            placeholderTextColor="#A090C0"
          />

          <Text style={styles.fieldLabel}>Teknisyen</Text>
          <TextInput
            style={styles.input}
            placeholder="Ornek: Mehmet Usta"
            placeholderTextColor="#A090C0"
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
    backgroundColor: "#F6F4FB",
  },
  content: {
    padding: 16,
    gap: 14,
  },
  header: {
    backgroundColor: "#3C2C74",
    borderRadius: 20,
    padding: 18,
    gap: 4,
  },
  headerLabel: {
    color: "#CABEFF",
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
    color: "#E6DFFC",
    lineHeight: 20,
  },
  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    padding: 18,
    gap: 10,
    borderWidth: 1,
    borderColor: "#E4DCF5",
  },
  fieldLabel: {
    color: "#4A3F70",
    fontWeight: "700",
  },
  input: {
    borderWidth: 1,
    borderColor: "#D5C9ED",
    borderRadius: 12,
    paddingHorizontal: 12,
    paddingVertical: 11,
    backgroundColor: "#FCFAFF",
    color: "#241E39",
  },
  inputMultiline: {
    minHeight: 80,
    paddingTop: 10,
  },
  saveButton: {
    marginTop: 6,
    backgroundColor: "#5841A8",
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
