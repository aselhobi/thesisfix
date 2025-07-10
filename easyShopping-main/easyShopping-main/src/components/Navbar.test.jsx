import { render, screen } from '@testing-library/react'
import Navbar from './Navbar'
import { BrowserRouter, MemoryRouter } from 'react-router-dom'

describe('Navbar', () => {
  it('renders the navbar component', () => {
    render(
      <MemoryRouter>    <Navbar /></MemoryRouter>

  )
    
    screen.debug(); // prints out the jsx in the App component unto the command line
  })
    it('navigates to the home route when links are clicked', async () => {
    render(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    );

    const home = screen.getByText('Home');

    home.click();
    expect(window.location.pathname).toBe('/');

  });

  it('navigates to the correct contact when links are clicked', async () => {
    render(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    );

    const contact = screen.getByText('Contact Us');


    contact.click();
    expect(window.location.pathname).toBe('/contactus');

  });

  it('navigates to the correct about when links are clicked', async () => {
    render(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    );

    const about = screen.getByText('About');

    about.click();
    expect(window.location.pathname).toBe('/about');
  });
  it('navigates to home when the icon is clicked', async () => {
    render(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    );

    const about = screen.getByText('SHOPPE');

    about.click();
    expect(window.location.pathname).toBe('/');
  });
})