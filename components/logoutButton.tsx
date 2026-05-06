import { useAuth } from "@/hooks/useAuth";
import { Button } from "react-native";

export const LogoutButton = () => {
  const { logOut } = useAuth(); // veya redux

  return <Button title="Çıkış" onPress={logOut} />;
};
