"use client";

import { useEffect, useState } from "react";

// import AuthModal from "@/components/AuthModal";
// import SubscribeModal from "@/components/SubscribeModal";
// import UploadModal from "@/components/UploadModal";
import { ProductWithPrice } from "@/types";
import Modal from "@/components/Modal";
import AuthModal from "@/components/AuthModal";

interface ModalProviderProps {
  // products: ProductWithPrice[];
}

const ModalProvider: React.FC<ModalProviderProps> = () => {
  const [isMounted, setIsMounted] = useState(false);

  // truco para que los modals solo funcionen en modo client
  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <>
      <AuthModal />
      {/* <Modal
        title="Test Modal"
        description="test description"
        isOpen
        onChange={() => {}}
      >
        Test Children
      </Modal> */}
      {/* <AuthModal /> */}
      {/* <SubscribeModal products={products} /> */}
      {/* <UploadModal /> */}
    </>
  );
};

export default ModalProvider;
