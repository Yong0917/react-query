import Modal from 'react-modal';
import style from "@/app/(default)/_component/baseLoading.module.css";
import {useState} from "react";
import {useRouter} from "next/navigation";

export default function PlanModal({message} : any) {
    const router = useRouter()
    const [modalOpen, setModalOpen] = useState(true);

    const handleClickBtn = () => {
        setModalOpen(false)
        router.replace('/planshop')
    }

    return (
        <Modal
            isOpen={modalOpen}
            onRequestClose={() => handleClickBtn()}
            className={style.container}
            ariaHideApp={false}
            contentLabel="Pop up Message"
            shouldCloseOnOverlayClick={false}
        >
            {message}
        </Modal>
    )
}

