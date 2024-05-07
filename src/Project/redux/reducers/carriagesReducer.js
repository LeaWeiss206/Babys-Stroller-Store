import Fox5 from '../../images/bugaboo-fox-5-midnight-black.jpg'
import B6 from '../../images/b6.jpg'
import babyBoss from '../../images/babyBoss.jpg'
import doona from '../../images/doona.jpeg'
import UppababyVista from '../../images/Uppababy Vista.jpg'
import GracoModes from '../../images/Graco Modes Click Connect Travel System.jpg'
import BabyJogger from '../../images/Baby Jogger .jpg'
import ChiccoBravo from '../../images/chicco-bravo-travel-system-rainfall-241.jpg'
import BugabooCameleon3 from '../../images/Bugaboo Cameleon 3.jpg'
import BabyzenYOYO2 from '../../images/Babyzen_Yoyo_2_.jpg'
const carriages = [
    { id: "11111", name: "boogabo Fox5", qty: 10, qtyInCart: 0, img: Fox5, price: 5000, description: "A stroller that is easy to carry and for environmental use, protects the baby, contains a comfortable mattress that develops the baby's neck muscles, also includes a rain cover" },
    { id: "33333", name: "babyBoss", qty: 30, qtyInCart: 0, img: babyBoss, price: 1700, description: "A particularly strong and high-quality stroller protects the baby and is easy to carry, includes two parts, bargain price" },
    { id: "44444", name: "doona", qty: 15, qtyInCart: 0, img: doona, price: 4000, description: "A car seat that opens into a stroller, easy to travel and carry, especially comfortable for a baby, disassembles and builds easily" },
    { id: "55555", name: "Uppababy Vista", qty: 3, qtyInCart: 0, img: UppababyVista, price: 4200, description: "The Uppababy Vista is known for its versatility and style. It's designed to grow with your family, accommodating multiple configurations with its expandable options. It offers a smooth ride with its suspension system and large wheels, making it suitable for both urban and suburban use" },
    { id: "66666", name: "Graco Modes Click Connect Travel System", qty: 12, qtyInCart: 0, img: GracoModes, price: 1000, description: "This travel system includes a stroller and a car seat, providing convenience for parents on the go. The stroller offers multiple riding positions, including forward-facing, parent-facing, and car seat compatibility. It's equipped with a large canopy and storage basket, making it suitable for everyday outings" },
    { id: "11110", name: "Babyzen YOYO2 ", qty: 45, qtyInCart: 0, img: BabyzenYOYO2, price: 1800, description: "Lightweight and compact stroller, perfect for travel" },
    { id: "22222", name: "boogabo B6", qty: 40, qtyInCart: 0, img: B6, price: 3500, description: "A compact and easy-to-carry poplar stroller that folds easily, a weight basket, and a selection of colors to choose from" },
    { id: "88888", name: "Chicco Bravo Trio Travel System", qty: 28, qtyInCart: 0, img: ChiccoBravo, price: 1500, description: "This travel system includes a stroller, car seat, and base. The stroller features a one-hand fold and stands on its own when folded, making storage and transport easy. It has a multi-position reclining seat and adjustable canopy to ensure your baby's comfort. The car seat easily clicks into the stroller for seamless transitions between car and stroller" },
    { id: "99999", name: "Bugaboo Cameleon 3", qty: 50, qtyInCart: 0, img: BugabooCameleon3, price: 4000, description: "The Bugaboo Cameleon 3 is known for its sleek design and customizable options. It offers a reversible seat and adjustable handlebar, allowing you to easily adapt it to your preferences. The large, swiveling wheels provide excellent maneuverability, while the adjustable suspension ensures a smooth ride for your little one" },
    { id: "77777", name: "Baby Jogger City Mini GT2", qty: 25, qtyInCart: 0, img: BabyJogger, price: 1200, description: "The City Mini GT2 is designed for urban terrain, featuring all-terrain wheels and a rugged suspension system for a smooth ride. It's compact and easy to fold with one hand, making it convenient for city dwellers. The adjustable handlebar and hand-operated parking brake add to its ease of use" },
  
]

const carriagesReducer = (state = carriages, action) => {

    switch (action.type) {
        case "DECREASE_QTY":
            {
                const newCarriages = [...state];
                newCarriages.find((carriage) => carriage.id === action.id).qty -= 1;
                newCarriages.find((carriage) => carriage.id === action.id).qtyInCart += 1
                return newCarriages;
            }


        case "ADD_QTY":
            {
                const newCarriages = [...state];
                newCarriages.find((carriage) => carriage.id === action.id).qty += 1;
                newCarriages.find((carriage) => carriage.id === action.id).qtyInCart -= 1
                return newCarriages;
            }
        case "ADD_SUM_QTY":
        {
            const newCarriages = [...state];
            newCarriages.find((carriage) => carriage.id === action.id).qty +=  newCarriages.find((carriage) => carriage.id === action.id).qtyInCart;
            newCarriages.find((carriage) => carriage.id === action.id).qtyInCart = 0
            return newCarriages; 
        }

        default:
            return state
    }
}

export default carriagesReducer