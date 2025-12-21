import { create } from "zustand";
import { format } from "date-fns";

interface APPSTORE {
  formattedDate: string;
  formattedTime: string;
  updateFormattedDate: () => void;
}
export const appStore = create<APPSTORE>((set) => ({
  formattedDate: "",
  formattedTime: "",
  updateFormattedDate() {
    const now = new Date();
    set(() => ({
      formattedDate: format(now, "EEEE, MMMM do"),
      formattedTime: format(now, "h:mm a"),
    }));
  },
}));
