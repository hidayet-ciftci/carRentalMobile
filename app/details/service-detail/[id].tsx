import { DateInputView } from "@/components/Date-Input";
import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { getSCById, updateServiceRecord } from "@/constants/serviceRecordApi";
import { SCDataType } from "@/constants/types";
import { router, useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import {
  ActivityIndicator,
  ScrollView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import Toast from "react-native-toast-message";

export default function ServiceDetailScreen() {
  const [serviceRecord, setserviceRecord] = useState<SCDataType>({
    id: 0,
    vehicleId: 0,
    userId: 0,
    description: "",
    state: "",
    plannedEndDate: "",
    endDate: "",
    price: 0,
    createdTime: new Date().toISOString(),
  });
  const { id } = useLocalSearchParams();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleGetDetail = async () => {
    const SCData = await getSCById(id);
    setserviceRecord(SCData.data);
    setIsLoading(false);
  };

  const updateSCById = async () => {
    const updatedSCData = await updateServiceRecord(serviceRecord);
    if (updatedSCData?.success) {
      Toast.show({ type: "success", text1: updatedSCData?.message });
      router.back();
    } else {
      Toast.show({ type: "error", text1: updatedSCData?.message });
    }
  };

  useEffect(() => {
    setIsLoading(true);
    handleGetDetail();
  }, []);

  if (isLoading) {
    return (
      <ActivityIndicator size={"large"} style={{ flex: 1 }}></ActivityIndicator>
    );
  }

  return (
    <ScrollView style={{ flex: 1 }}>
      <ThemedView style={styles.page}>
        <TouchableOpacity style={styles.backButton} onPress={router.back}>
          <ThemedText>Go Back</ThemedText>
        </TouchableOpacity>
        <ThemedView style={styles.card}>
          <ThemedText style={styles.title}>Servis Detayi</ThemedText>
          <ThemedText style={styles.subtitle}>
            Secilen servis kaydinin detaylari ve guncelleme alanlari.
          </ThemedText>

          <ThemedText style={styles.label}>Müşteri</ThemedText>
          <TextInput
            style={styles.input}
            value={
              Number.isNaN(serviceRecord.vehicleId)
                ? "0"
                : serviceRecord.vehicleId.toString()
            }
            onChangeText={(text) =>
              setserviceRecord((prev) => ({
                ...prev,
                vehicleId: parseInt(text),
              }))
            }
          />
          <ThemedText style={styles.label}>Tamirci</ThemedText>
          <TextInput
            style={styles.input}
            value={
              Number.isNaN(serviceRecord.userId)
                ? "0"
                : serviceRecord.userId.toString()
            }
            onChangeText={(text) =>
              setserviceRecord((prev) => ({
                ...prev,
                userId: parseInt(text),
              }))
            }
          />

          <ThemedText style={styles.label}>Açıklama</ThemedText>
          <TextInput
            style={styles.input}
            value={serviceRecord.description ?? ""}
            onChangeText={(text) =>
              setserviceRecord((prev) => ({
                ...prev,
                description: text,
              }))
            }
          />

          <ThemedText style={styles.label}>Servis Durumu</ThemedText>
          <TextInput
            style={styles.input}
            value={serviceRecord.state ?? ""}
            onChangeText={(text) =>
              setserviceRecord((prev) => ({
                ...prev,
                state: text,
              }))
            }
          />
          <ThemedText style={styles.label}>Ücret</ThemedText>
          <TextInput
            style={styles.input}
            value={
              Number.isNaN(serviceRecord.price)
                ? "0"
                : (serviceRecord?.price?.toString() ?? "0")
            }
            onChangeText={(text) =>
              setserviceRecord((prev) => ({
                ...prev,
                price: parseInt(text),
              }))
            }
          />
          <ThemedText style={styles.label}>Planlanan Bitiş Tarihi</ThemedText>
          <DateInputView
            value={
              serviceRecord.plannedEndDate
                ? new Date(serviceRecord.plannedEndDate)
                : undefined
            }
            onChange={(date) =>
              setserviceRecord((prev) => ({
                ...prev,
                plannedEndDate: date ? date.toISOString() : null,
              }))
            }
          />
          <ThemedText style={styles.label}>Bitiş Tarihi</ThemedText>
          <DateInputView
            value={
              serviceRecord.plannedEndDate
                ? new Date(serviceRecord.plannedEndDate)
                : undefined
            }
            onChange={(date) =>
              setserviceRecord((prev) => ({
                ...prev,
                plannedEndDate: date ? date.toISOString() : null,
              }))
            }
          />
          <ThemedText style={styles.label}>Olusturulma Tarihi</ThemedText>
          <TextInput
            style={styles.input}
            value={serviceRecord?.createdTime}
            editable={false}
          />

          <TouchableOpacity style={styles.button} onPress={updateSCById}>
            <ThemedText style={styles.buttonText}>Guncelle</ThemedText>
          </TouchableOpacity>
        </ThemedView>
      </ThemedView>
    </ScrollView>
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
    borderRadius: 14,
    margin: 15,
    paddingVertical: 5,
    paddingHorizontal: 10,
    right: 5,
    top: 60,
    position: "absolute",
  },
});
