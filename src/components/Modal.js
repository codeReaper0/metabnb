import React from "react";
const Modal = () => {
  function closeModal() {
    const modal = document.getElementById("modal");
    if (modal.style.display === "block") {
      modal.style.display = "none";
    }
  }
  return (
    <div
      className="transition-all ease-in-out duration-200 absolute inset-0 w-screen h-screen hidden"
      id="modal"
    >
      <div className="absolute inset-0 w-screen h-screen bg-[#4040404D] z-10" />
      <div className=" absolute inset -0 flex items-center justify-center w-full h-full z-20">
        <div className="bg-white rounded-2xl w-[600px]">
          <div className="p-6 flex items-center justify-between">
            <h3 className="font-bold text-2xl text-[#333333]">
              Connect Wallet
            </h3>
            <button onClick={closeModal}>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18 6L6 18"
                  stroke="#1A1A1A"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M6 6L18 18"
                  stroke="#1A1A1A"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
          </div>

          <div className="w-full h-[1px] bg-[#CFD8DC]" />

          <div className="p-8">
            <p className="text-[#333333] mb-4">Choose your preferred wallet:</p>
            <button className="bg-[#f8f9fa] px-4 py-3 rounded-xl flex items-center justify-between w-full mb-4">
              <div className="flex items-center gap-4">
                <img src="/meta.png" alt="metamask" />
                <p className="text-lg font-semibold">Metamask</p>
              </div>
              <div>
                <svg
                  width="10"
                  height="16"
                  viewBox="0 0 10 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.38381 8.00009C9.38381 8.26892 9.28117 8.53771 9.07631 8.74267L2.62657 15.1923C2.21628 15.6026 1.55108 15.6026 1.14096 15.1923C0.730845 14.7822 0.730845 14.1172 1.14096 13.7068L6.84805 8.00009L1.14116 2.2933C0.731043 1.88301 0.731043 1.21801 1.14116 0.807924C1.55128 0.397442 2.21648 0.397442 2.62677 0.807924L9.07651 7.2575C9.2814 7.46256 9.38381 7.73135 9.38381 8.00009Z"
                    fill="#959DA6"
                  />
                </svg>
              </div>
            </button>

            <button className="border border-[#cfd8dc] px-4 py-3 rounded-xl flex items-center justify-between w-full">
              <div className="flex items-center gap-4">
                <img src="/wallet.png" alt="metamask" />
                <p className="text-lg font-semibold">WalletConnext</p>
              </div>
              <div>
                <svg
                  width="10"
                  height="16"
                  viewBox="0 0 10 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.38381 8.00009C9.38381 8.26892 9.28117 8.53771 9.07631 8.74267L2.62657 15.1923C2.21628 15.6026 1.55108 15.6026 1.14096 15.1923C0.730845 14.7822 0.730845 14.1172 1.14096 13.7068L6.84805 8.00009L1.14116 2.2933C0.731043 1.88301 0.731043 1.21801 1.14116 0.807924C1.55128 0.397442 2.21648 0.397442 2.62677 0.807924L9.07651 7.2575C9.2814 7.46256 9.38381 7.73135 9.38381 8.00009Z"
                    fill="#959DA6"
                  />
                </svg>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
