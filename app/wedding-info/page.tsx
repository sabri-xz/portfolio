import { redirect } from "next/navigation";

const weddingWebsiteLink = "https://withjoy.com/sabrina-and-owen";

export default async function Home() {
  redirect(weddingWebsiteLink);
}
