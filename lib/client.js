import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = createClient({
  projectId: "l0w01o15",
  dataset: "production",
  apiVersion: "2023-03-03",
  useCdn: true,
  token:
    "skQsQ5oXaegwsac6q4u4F9a7z3UVcI2MPlp2FI04hi9Ri3MJQXlwuoTkCC90zNnpG8920koQ6YLN6lcg0ZFsRgoChF8hejAX6AfWfZWXdrrC4ksHCQDyJZT59drGDrfA993tB4KOej6cQ6qkFfwMfag6mLgj6g3aIwOV21QfsK8k9CSTWIE0",
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source)