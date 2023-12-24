import { ModalStore } from '@/util/definations';
import { create } from 'zustand';

const useModal = create<ModalStore>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false })
}));
export default useModal;