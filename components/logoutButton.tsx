import { useAuth } from "@/hooks/useAuth";
import { Button } from "react-native";

export const LogoutButton = () => {
  const { logOut } = useAuth();

  return <Button title="Çıkış" onPress={logOut} />;
};
