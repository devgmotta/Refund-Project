import foodSVG from "../assets/food.svg"
import othersSVG from "../assets/others.svg"
import servicesSVG from "../assets/services.svg"
import transportSVG from "../assets/transport.svg"
import accommodationSVG from "../assets/accommodation.svg"

export const CATEGORIES = {
  food: {
    name: "Alimentacao",
    icon: foodSVG,
  },

  others: {
    name: "Outros",
    icon: othersSVG,
  },  

  services: {
    name: "Servicos",
    icon: servicesSVG,
  },  

  transport: {
    name: "Transporte",
    icon: transportSVG,
  },  

  accommodation: {
    name: "Hospedagem",
    icon: accommodationSVG,
  },
}

export const CATEGORIES_KEYS = Object.keys(CATEGORIES) as Array<
  keyof typeof CATEGORIES
>