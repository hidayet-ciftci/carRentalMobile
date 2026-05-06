export const getCustomerDetail = async (email: string) => {
  const url = process.env.EXPO_PUBLIC_API_URL as string;
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
    return data;
  } catch (error) {
    console.log(error);
  }
};
