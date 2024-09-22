import React, { useMemo, useState } from 'react';
import Item from './Item';
import { useFilteredItems } from './useFilteredItems';

const ItemList = React.memo(() => {
    const itemsPerPage = 5;

    const [currentPage, setCurrentPage] = useState(1);

    const filteredItems = useFilteredItems();

    const paginatedItems = useMemo(() => {
        const start = (currentPage - 1) * itemsPerPage;
        const end = start + itemsPerPage;
        return filteredItems.slice(start, end);
    }, [filteredItems, currentPage]);

    const totalPages = Math.ceil(filteredItems.length / itemsPerPage);

    const goToNextPage = () => {
        if (currentPage < totalPages) setCurrentPage(currentPage + 1);
    };

    const goToPrevPage = () => {
        if (currentPage > 1) setCurrentPage(currentPage - 1);
    };


    return (
        <div>
            <table style={{ width: '100%', border: '1px solid black', marginTop: 20 }}>
                <thead>
                    <tr>
                        <th style={{ border: '1px solid black', padding: '8px' }}>Item Id</th>

                        <th style={{ border: '1px solid black', padding: '8px' }}>Item Name</th>

                    </tr>
                </thead>
                <tbody>
                    {paginatedItems.map((item, index) => (
                        <tr key={index}>
                            <td style={{ border: '1px solid black', padding: '8px' }}>

                                {item.id}
                            </td>
                            <td style={{ border: '1px solid black', padding: '8px' }}>
                                <Item item={item.name} />
                            </td>

                        </tr>
                    ))}
                </tbody>
            </table>
            <button onClick={goToPrevPage} disabled={currentPage === 1} style={{ cursor: 'pointer', marginTop: 30, marginRight: 10 }}>
                Prev
            </button>
            <button onClick={goToNextPage} disabled={currentPage === totalPages} style={{ cursor: 'pointer', marginTop: 30 }}>
                Next
            </button>
        </div>
    );
});

export default ItemList;
