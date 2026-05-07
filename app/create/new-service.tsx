import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { router } from "expo-router";
import {
  ScrollView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function NewServiceScreen() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView style={styles.page} contentContainerStyle={styles.content}>
        <TouchableOpacity style={styles.backButton} onPress={router.back}>
          <ThemedText>Go Back</ThemedText>
        </TouchableOpacity>
        <ThemedView style={styles.header}>
          <ThemedText style={styles.headerLabel}>Servis Modulu</ThemedText>
          <ThemedText style={styles.headerTitle}>Yeni Servis Kaydi</ThemedText>
          <ThemedText style={styles.headerSub}>
            Servis bilgilerini doldurun, kayit islemi sonradan eklenecek.
          </ThemedText>
        </ThemedView>

        <ThemedView style={styles.card}>
          <ThemedText style={styles.fieldLabel}>Plaka</ThemedText>
          <TextInput
            style={styles.input}
            placeholder="Ornek: 34 ABC 123"
            placeholderTextColor="#A090C0"
          />

          <ThemedText style={styles.fieldLabel}>Servis Turu</ThemedText>
          <TextInput
            style={styles.input}
            placeholder="Ornek: Periyodik Bakim"
            placeholderTextColor="#A090C0"
          />

          <ThemedText style={styles.fieldLabel}>Aciklama</ThemedText>
          <TextInput
            style={[styles.input, styles.inputMultiline]}
            placeholder="Servis detaylarini yazin..."
            placeholderTextColor="#A090C0"
            multiline
            numberOfLines={3}
            textAlignVertical="top"
          />

          <ThemedText style={styles.fieldLabel}>Tarih</ThemedText>
          <TextInput
            style={styles.input}
            placeholder="GG.AA.YYYY"
            placeholderTextColor="#A090C0"
          />

          <ThemedText style={styles.fieldLabel}>Teknisyen</ThemedText>
          <TextInput
            style={styles.input}
            placeholder="Ornek: Mehmet Usta"
            placeholderTextColor="#A090C0"
          />

          <ThemedView style={styles.saveButton}>
            <ThemedText style={styles.saveButtonText}>Kaydet</ThemedText>
          </ThemedView>
        </ThemedView>
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
  backButton: {
    borderRadius: 14,
    margin: 15,
    paddingVertical: 5,
    paddingHorizontal: 10,
    right: -275,
    top: 0,
    marginBlock: 0,
    position: "fixed",
  },
});
