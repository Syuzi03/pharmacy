import { useState } from "react"
import { Stars } from "./Stars"

export const MedList = () => {
    const [text, setText] = useState("");
    const [medicines, setMedicines] = useState([
        { id: 1, name: "Analgin", image: "https://cdn.eapteka.ru/upload/offer_photo/351/36/resized/450_450_1_a99f19561de401621c204bf35133cf46.png?t=1634118883&_cvc=1724825556", rating: 0 },
        { id: 2, name: "Vitamin D", image: "https://www.jamiesonvitamins.com/cdn/shop/files/c04368a6ac291f8018fa6611da04638f49c30ab8d2ab5f38104a432a150e26d7.png?v=1690982438", rating: 0 },
        { id: 3, name: "Spazmalgon", image: "https://cdn.eapteka.ru/upload/offer_photo/110/665/3_ef1a30f54b1417a964561b54cf95471c.png?t=1688553333&_cvc=1725430717", rating: 0 }
    ])


    const updateRating = (id, newRating) => {
        setMedicines((prevMed) =>
            prevMed.map((med) =>
                med.id == id ? { ...med, rating: newRating } : med
            )
        )
    }


    const filteredMed = medicines.filter((med) =>
        med.name.toLowerCase().includes(text.toLowerCase())
    )

    return (
        <div className="board">
            <input
                type="text"
                placeholder="Find medicine you want..."
                value={text}
                onChange={(e) => setText(e.target.value)}
            />

            {filteredMed.map((med) => (
                <div className="items" key={med.id}>
                    <img src={med.image} />
                    <div className="text-section">
                        <span className="medicine-name">{med.name}</span>

                        <Stars
                            rating={med.rating}
                            onRate={(newRating) => updateRating(med.id, newRating)}
                        />
                    </div>
                </div>
            ))}
        </div>
    )
}
