import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import {FloatingButton, Popup, Button} from "./PopUp.style.js"

export default function WhatsappPopup({
    phone = "5583988560234", 
    message = "Olá! Gostaria de mais informações."
}) {
    const [showPopup, setShowPopup] = useState(false);

    const handleClick = () => {
        window.open(
            `https://wa.me/${phone}?text=${encodeURIComponent(message)}`,
            "_blank"
        );
    };

    return (
        <FloatingButton
            onMouseEnter={() => setShowPopup(true)}
            onMouseLeave={() => setShowPopup(false)}
        >
            {showPopup && (
                <Popup>
                    Fale conosco pelo WhatsApp!
                </Popup>
            )}
            <Button onClick={handleClick} aria-label="Abrir WhatsApp">
                <FaWhatsapp />
            </Button>
        </FloatingButton>
    );
}
