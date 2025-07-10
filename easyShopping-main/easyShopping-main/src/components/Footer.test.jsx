import { render, screen } from '@testing-library/react'
import Footer from './Footer'
import { MemoryRouter } from 'react-router-dom'

describe('Footer', () => {
  it('renders the Footer component', () => {
    render(
      <MemoryRouter><Footer /></MemoryRouter>
  )
    
    screen.debug(); // prints out the jsx in the App component unto the command line
  })
})