import PocketBase from "pocketbase";

export default defineEventHandler(async (event) => {
  const pb = new PocketBase("http://127.0.0.1:8090");
  const { email, password }: { email: string; password: string } =
    await readBody(event);

  try {
    const authData = await pb
      .collection("users")
      .authWithPassword(email, password);

    return { payload: { token: authData.token, error: "" } };
  } catch (e) {
    console.log("here");
    return { payload: { token: "", error: e } };
  }
});
