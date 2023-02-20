import { useContext } from "react"
import { FiltersContext } from "../components/FiltersContext.jsx";

export const useFilters = () => {
    const {filters, setFilters} = useContext(FiltersContext)

    const filterItems = (items) => {
        const filtered = items.filter((item) => {
            return (
                (filters.category === null || item.subcategory_id === filters.category) &&
                (filters.search === null || item.name.toLowerCase().includes(filters.search))
            )
        })
        if(filters.order === 'priceDesc'){
            return(
                filtered.sort((a,b) => (a.price > b.price) ? -1 : 1)
            )
        }
        if(filters.order === 'priceAsc'){
            return(
                filtered.sort((a,b) => (a.price > b.price) ? 1 : -1)
            )
        }
        return filtered
    }

    return { filters, setFilters, filterItems}
}