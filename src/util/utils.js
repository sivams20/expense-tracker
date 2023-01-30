import { format } from "date-fns";

export const formattedDate = (date) => format(new Date(date), "yyyy-MM-dd");
