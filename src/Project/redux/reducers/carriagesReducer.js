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
import BugabooButterfly from '../../images/Bugaboo Butterfly.png'
import BugabooDonkey from '../../images/Bugaboo Donkey 5 brothers.jpg'
import CybexPriam4Capsule from '../../images/cybex Priam 4 Capsule.jpg'
import CityMiniDouble from '../../images/City Mini® 2 Double.jpeg'
import InfantiCITYGO from '../../images/Infanti CITY GO.jpeg'
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
    { id: "121212", name: "Bugaboo Butterfly Stroller", qty: 50, qtyInCart: 0, img: BugabooButterfly, price: 2590, description: "Ultra compact, folds in seconds: a small stroller for big adventuresGet the Bugbo Butterfly - an ultra compact baby stroller, super comfortable, extra safe and easy to travel like a butterfly. The stroller is easy to maneuver and folds in one second and with one hand, will provide you with wonderful family adventures around the city and all over the world" },
    { id: "131313131", name: "Bugaboo Donkey 5 brothers ", qty: 32, qtyInCart: 0, img: BugabooDonkey, price: 8050, description: "Bugaboo Donkey 5: Wherever life takes you...Meet the Bugaboo Donkey 5 stroller that conquers the sidewalks, paths and alleys of the city, as well as thousands of happy parents and babies from all over the world. Bugaboo Donkey 5 adapts itself to exactly what the family needs, and like all Bugaboo strollers, provides a dreamy and smooth ride, with plenty of innovative improvements, exceptional performance and a winning unique style. When the family grows, Bugaboo Donkey 5 also joins the new family composition, when in 3 simple clicks, it turns a single stroller into a sibling stroller or a twin stroller. Donkey 5 is the ultimate modular family stroller available today. It excels in a variety of advanced features, and offers the highest level of comfort and safety for babies, who can sit side by side, and enjoy together fun trips, playful laughter, and the beautiful sights that the outside world offers" },
    { id: "454545454", name: "City Mini® 2 Double", qty: 18, qtyInCart: 0, img: CityMiniDouble, price: 2290, description: "The City Mini® 2 Double stroller has a sleek and smooth design that makes it incredibly agile and suitable for an adventure with 2 children! The stroller is easy to maneuver and can be passed through the streets just like the single stroller, is easy to fold and fits easily in the trunk. The stroller is ideal for trips in the city and on unpaved roads thanks to the rotating wheels that can be locked and thus gives a sense of stability. The City Mini® 2 Double stroller from the iconic City Mini® Double series in the new version with the favorite features and new upgrades: the design and the stroller fabrics are upgraded and innovative and the maneuvering is easy and smooth - a light and compact design with wheels made of rubber, stable and durable. The front wheels rotate and can be locked and enable a safe ride even on curvy roads.A light basket or a reclining basket - everything is possible from the first day, all the options that are convenient for you to carry the little ones in the stroller: you can attach a light basket and a reclining basket / two reclining baskets or just one of each to the stroller and the second seat can be used as a stroller for the big brother (the adapters are sold separately), thus the stroller allows For you to carry your baby easily and safely for every adventure starting from his first day! Thanks to the adjustable footrest, it is most comfortable to sleep in the stroller - the adjustable footrest allows your child to take a nap in the stroller and enjoy maximum comfort in the lying position. The stroller is suitable from birth to a weight of 15 kg (per seat)" },
    { id: "3232323", name: "Infanti CITY GO ", qty: 38, qtyInCart: 0, img: InfantiCITYGO, price: 599, description: "A modern stroller from Infanti. Suitable from birth to 22 kg, mini folding for an extra small size, easy to fold, leather-like handle, adjustable footrest, large canopy with peep hole, opening bumper, storage basket, wheel lock, weight 6.7 kg "},
    { id: "78787878", name: "cybex Priam 4 Capsule ", qty: 45, qtyInCart: 0, img: CybexPriam4Capsule, price: 5400, description: "The Priam 4 Capsule baby stroller in the SPRING BLOSSOM design with a bright design, the next generation of the Cybex series of designed luxury strollers, is a stroller that has won design awards at leading exhibitions in the world, continues the success of Priam and brings with it groundbreaking upgrades." },
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