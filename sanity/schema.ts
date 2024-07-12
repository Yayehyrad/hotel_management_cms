import { type SchemaTypeDefinition } from "sanity";
import user from "./schemas/user";
import account from "./schemas/account";
import booking from "./schemas/booking";
import hotelRoom from "./schemas/hotelRoom";
import review from "./schemas/review";
import verificationToken from "./schemas/verificationToken";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [user, account, booking, hotelRoom, review, verificationToken],
};
