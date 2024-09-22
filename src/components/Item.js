import React from 'react';

const Item = React.memo(({ item }) => {
    console.log('Rendering item:', item);
    return (
        <div>
            {item}
        </div>

    )

});

export default Item;
