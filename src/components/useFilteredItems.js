import { useMemo } from 'react';
import { useSelector } from 'react-redux';

export const useFilteredItems = () => {
    const items = useSelector((state) => state.items.items);
    const searchTerm = useSelector((state) => state.items.searchTerm);

    const filteredItems = useMemo(() => {
        return items.filter((item) =>
            item.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
    }, [items, searchTerm]);

    return filteredItems;
};
