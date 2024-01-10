import styled from 'styled-components'
import logo from '../assets/logo.webp'

const Flex = styled.div `
    display: flex;
`
const Image = styled.img `
    width: 60px;
`
const NavBar = () => {
  return (
    <Flex>
       <Image src={logo} />
       <h4>Navbar</h4>
    </Flex>
  )
}

export default NavBar