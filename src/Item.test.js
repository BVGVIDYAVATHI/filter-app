import React from 'react';
import { render, screen } from '@testing-library/react';
import Item from '../src/components/Item';

describe('Item Component', () => {
  it('should render item correctly', () => {
    const { getByText } = render(<Item item="Apple" />);
    expect(getByText('Apple')).toBeInTheDocument();
  });

  it('should not re-render unnecessarily', () => {
    const spy = jest.fn();
    const MemoizedItem = React.memo(({ item }) => {
      spy();
      return <div>{item}</div>;
    });

    const { rerender } = render(<MemoizedItem item="Apple" />);
    expect(spy).toHaveBeenCalledTimes(1);

    rerender(<MemoizedItem item="Apple" />);
    expect(spy).toHaveBeenCalledTimes(1); 

    rerender(<MemoizedItem item="Banana" />);
    expect(spy).toHaveBeenCalledTimes(2); 
  });
});
