import { Alert, Platform } from "react-native";

export const deleteButton = (deleteFunc: () => void) => {
  if (Platform.OS == "web") {
    confirm("emin misin?") ? deleteFunc() : alert("iptal edildi");
  } else {
    Alert.alert("Silme Onayı", "Seçilen kullanıcıları silmek istiyor musun?", [
      {
        text: "İptal",
        style: "cancel",
      },
      {
        text: "Sil",
        style: "destructive",
        onPress: deleteFunc,
      },
    ]);
  }
};
