import '@testing-library/jest-dom';
import { createRoot } from 'react-dom/client';

// import { unmountComponentAtNode } from 'react-dom';

let container: Element | null;
beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  if (container) {
    // unmountComponentAtNode(container);
    const root = createRoot(container);
    root.unmount();
    container.remove();
    container = null;
  }
});
