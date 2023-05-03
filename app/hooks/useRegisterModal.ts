import { create } from "zustand";

interface RegesterModalStore {
  isOpen: boolean;
  onClose: () => void;
  onOpen: () => void;
}

const useRegisterModal = create<RegesterModalStore>((set) => ({
  isOpen: false,
  onClose: () => set({ isOpen: false }),
  onOpen: () => set({ isOpen: true }),
}));

export default useRegisterModal;
