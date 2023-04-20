import { getVolumes } from "../../lib/server/db";

export async function load({ params }) {
  let volumes = await getVolumes();

  return { volumes };
}
