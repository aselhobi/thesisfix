import { render, screen } from '@testing-library/react'
import ForgotPassword  from './ForgotPassword'

describe('Forgot Password', () => {
  it('renders the Forgot Password page', () => {
    render(<ForgotPassword />)
    
    screen.debug(); 
})