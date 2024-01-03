import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import Language from '../../enum/language';
import { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { DataContextProvider } from '../../DataContext/DataContextProvider';
import { vi } from 'vitest';
import Endpoint from './Endpoint';
import { Provider } from 'react-redux';
import { store } from '../../store/store';

const switchLanguage = vi.fn(() => 'En');

const TestComponent = () => {
  const [language] = useState(Language.En);

  return (
    <BrowserRouter>
      <DataContextProvider
        value={{
          language,
          setLanguage: switchLanguage,
        }}
      >
        <Provider store={store}>
          <Endpoint />
        </Provider>
      </DataContextProvider>
    </BrowserRouter>
  );
};

describe('Loading Schema', () => {
  afterEach(() => vi.clearAllMocks());

  test('renders button DOCS after click update schema', async () => {
    render(<TestComponent />);

    const submitButton = screen.getByRole('submitButton');
    expect(submitButton).toBeInTheDocument();

    fireEvent.click(submitButton);

    await waitFor(() => {
      const docsButton = screen.getByText('DOCS');
      expect(docsButton).toBeInTheDocument();
    });
  });
});
