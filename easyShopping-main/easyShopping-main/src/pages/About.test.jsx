import { render, screen } from '@testing-library/react'
import About  from './About'

describe('about - page..', () => {
  it('renders the about page', () => {
    render(<About />)
    
    screen.debug(); // prints out the jsx in the App component unto the command line
  })
})