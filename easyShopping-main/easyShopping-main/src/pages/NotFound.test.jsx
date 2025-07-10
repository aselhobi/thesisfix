import { render, screen } from '@testing-library/react'
import NotFound from './NotFound'
import { MemoryRouter,BrowserRouter } from 'react-router-dom'

describe('Home', () => {
  it('renders the Home component', () => {
    render(
      <MemoryRouter><NotFound /></MemoryRouter>
  )
    
    screen.debug(); // prints out the jsx in the App component unto the command line
  })
  it('navigates to the home when links are clicked', async () => {
    render(
      <BrowserRouter>
        <NotFound />
      </BrowserRouter>
    );

    const about = screen.getByText('HOMEPAGE');

    about.click();
    expect(window.location.pathname).toBe('/');
  });
})