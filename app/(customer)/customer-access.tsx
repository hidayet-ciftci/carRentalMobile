import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { router } from "expo-router";
import { useState } from "react";
import { StyleSheet, TextInput, TouchableOpacity } from "react-native";

import { RootState } from "@/store/store";
import { useDispatch, useSelector } from "react-redux";

export default function CustomerAccessScreen() {
  const [email, setEmail] = useState<string>("");

  const unLoginCustomerData = useSelector(
    (state: RootState) => state.unloginCustomerData.CustomerData,
  );
  const disPatch = useDispatch();

  const getCustomerDetail = async () => {
    const url =
      "http://192.168.1.101:7265/api/ServiceRecords/OneServiceDetails";
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(email),
      });
      const data = await response.json();
      console.log(data);
      return data;
    } catch (error) {
      console.log(error);
    }
  };

  /* const handleLoginCustomer = () => {
    const loginData = getCustomerDetail();
    if (loginData.success) disPatch(setData(data));
  };
  
  DİSPATCH ile veri global olarak set ediliyor.
  - amaç : api'den data.success true gelirse route.push yapıp veriyi çekme
  veya false gelirse uyarı yapmak
  
  */

  console.log(unLoginCustomerData);

  return (
    <ThemedView style={styles.page}>
      <TouchableOpacity style={styles.backButton} onPress={router.back}>
        <ThemedText>Go Back</ThemedText>
      </TouchableOpacity>

      <ThemedView style={styles.card}>
        <ThemedText style={styles.title}>Musteri Girisi</ThemedText>
        <ThemedText style={styles.subtitle}>
          Telefon numaranizi girerek arac ve servis kayitlarinizi
          goruntuleyebilirsiniz.
        </ThemedText>

        <ThemedText style={styles.label}>Telefon Numarasi</ThemedText>
        <TextInput
          placeholder="05xx xxx xx xx"
          value={email}
          onChangeText={setEmail}
          placeholderTextColor="#7A8B9C"
          style={styles.input}
        />

        <TouchableOpacity
          onPress={
            /* () => {
            router.push("/customer-details");
          } */ getCustomerDetail
          }
          style={styles.button}
        >
          <ThemedText style={styles.buttonText}>Detaylari Goruntule</ThemedText>
        </TouchableOpacity>
      </ThemedView>
    </ThemedView>
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
    borderRadius: 14,
    margin: 15,
    paddingVertical: 5,
    paddingHorizontal: 10,
    right: 5,
    top: 60,
    position: "absolute",
  },
});
