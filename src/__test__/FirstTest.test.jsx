import { render, screen } from '@testing-library/react'
import FirstTest from '../component/FirstTest';

test("Example 1 renders successfully", () => {
    render(<FirstTest/>);

    const element = screen.getByText(/First test/i);

    expect(element).toBeInTheDocument();
})