import {
    Box,
    Flex,
    Text,
    IconButton,
    Button,
    Stack,
    Collapse,
    Icon,
    Popover,
    PopoverTrigger,
    PopoverContent,
    useColorModeValue,
    useBreakpointValue,
    useDisclosure,
  } from '@chakra-ui/react';
  import {
    HamburgerIcon,
    CloseIcon,
    ChevronDownIcon,
    ChevronRightIcon,
  } from '@chakra-ui/icons';

// import Logo from '../Logo';
import {Link,  useNavigate} from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useLoader } from '../../Hooks/useLoader';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { useLogoutMutation } from '../../Redux/UserApi/User';
import { setLogoutAuth } from '../../Redux/Slices/userSlice';
// import Loader from './Loader';

  
  export default function Navbar() {
const dispatch =useDispatch();
const navigate =useNavigate();
let [logout , state] = useLogoutMutation();
useLoader(state , {loading : 'Logging Out Please Wait' , success : 'Logged Out Sucess'} ,()=>{
  dispatch(setLogoutAuth() );
  navigate('/sign-in')
});
    function logoutUser(){
      logout('logout');
      
    }

 
    

    const { isOpen, onToggle } = useDisclosure();
    const user = useSelector((state)=>state.userState)
    return (
      
   <>
   {/* {
    state.isLoading && <Loader></Loader>
   } */}
      <Box zIndex={'3'} position='relative'>
        <Flex
          bg={useColorModeValue('white', 'gray.800')}
          color={useColorModeValue('gray.600', 'white')}
          minH={'60px'}
          py={{ base: 2 }}
          px={{ base: 4 }}
          borderBottom={1}
          borderStyle={'solid'}
          borderColor={useColorModeValue('gray.200', 'gray.900')}
          align={'center'}>
          <Flex
            flex={{ base: 1, md: 'auto' }}
            ml={{ base: -2 }}
            display={{ base: 'flex', md: 'none' }}>
            <IconButton
              onClick={onToggle}
              icon={
                isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
              }
              variant={'ghost'}
              aria-label={'Toggle Navigation'}
            />
          </Flex>
          <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }}>
            <Box
         display='flex'
         alignItems={'center'}


              textAlign={useBreakpointValue({ base: 'center', md: 'left' })}
              fontFamily={'heading'}
              color={useColorModeValue('gray.800', 'white')}>
              //logo
            </Box>
  
            <Flex display={{ base: 'none', md: 'flex' }} ml={10}>
              <DesktopNav />
            </Flex>
          </Flex>
  
          <Stack
            flex={{ base: 1, md: 0 }}
            justify={'flex-end'}
            direction={'row'}
            spacing={6}>
         
            {
              !user.isAuthenticated && <>
              <Box
              display='flex'
              alignItems={'center'}
         >
         <Link to='/sign-in'>
                   <Button
                       as={'a'}
                       fontSize={'sm'}
                       fontWeight={400}
                       variant={'link'}
                       href={'#'}>
                       Sign In
                     </Button>
                   </Link>
         </Box>
                  
                    <Link to='/sign-up'>
                    <Button
                    
                    fontSize={'sm'}
                    fontWeight={600}
                    color={'white'}
                    bg={'green.400'}
                    _hover={{
                      bg: 'green.300',
                    }}>
                    Sign Up
                  </Button></Link></>
            }
{
  user.isAuthenticated &&  <Button
                    onClick={logoutUser}
  fontSize={'sm'}
  fontWeight={600}
  color={'white'}
  bg={'green.400'}
  _hover={{
    bg: 'green.300',
  }}>
 Log out
</Button>
}
          </Stack>
        </Flex>
  
        <Collapse in={isOpen} animateOpacity>
          <MobileNav />
        </Collapse>
      </Box>
   </>
    );
  }
  
  const DesktopNav = () => {
    const linkColor = useColorModeValue('gray.600', 'gray.200');
    const linkHoverColor = useColorModeValue('gray.800', 'white');
    const popoverContentBgColor = useColorModeValue('white', 'gray.800');
  
    return (
      <Stack direction={'row'} spacing={4}>
        {NAV_ITEMS.map((navItem) => (
          <Box key={navItem.label}>
            <Popover trigger={'hover'} placement={'bottom-start'}>
              <PopoverTrigger>
               <Link to={navItem.href}>
               <Text
                  p={2}
                  fontSize={'sm'}
                  fontWeight={500}
                  color={linkColor}
                  _hover={{
                    textDecoration: 'none',
                    color: linkHoverColor,
                  }}>
                  {navItem.label}
                </Text>
               </Link>
              </PopoverTrigger>
  
       
            </Popover>
          </Box>
        ))}
      </Stack>
    );
  };
  
  const DesktopSubNav = ({ label, href }) => {
    return (
      <Text
     
        role={'group'}
        display={'block'}
        p={2}
        rounded={'md'}
        _hover={{ bg: useColorModeValue('pink.50', 'gray.900') }}>
        <Stack direction={'row'} align={'center'}>
          <Box>
            <Text
              transition={'all .3s ease'}
              _groupHover={{ color: 'pink.400' }}
              fontWeight={500}>
              {label}
            </Text>
           
          </Box>
          <Flex
            transition={'all .3s ease'}
            transform={'translateX(-10px)'}
            opacity={0}
            _groupHover={{ opacity: '100%', transform: 'translateX(0)' }}
            justify={'flex-end'}
            align={'center'}
            flex={1}>
            <Icon color={'pink.400'} w={5} h={5} as={ChevronRightIcon} />
          </Flex>
        </Stack>
      </Text>
    );
  };
  
  const MobileNav = () => {
    return (
      <Stack
        bg={useColorModeValue('white', 'gray.800')}
        p={4}
        display={{ md: 'none' }}>
        {NAV_ITEMS.map((navItem) => (
          <MobileNavItem key={navItem.label} {...navItem} />
        ))}
      </Stack>
    );
  };
  
  const MobileNavItem = ({ label, href }) => {
    const { isOpen, onToggle } = useDisclosure();
  
    return (
      <Stack spacing={4} onClick={onToggle}>
        <Flex
          py={2}
          as={'div'}
          justify={'space-between'}
          align={'center'}
          _hover={{
            textDecoration: 'none',
          }}>
        <Link to={href}>
        <Text
            fontWeight={600}
            color={useColorModeValue('gray.600', 'gray.200')}>
            {label}
          </Text>
        </Link>

        </Flex>
  
        
      </Stack>
    );
  };

  
  const NAV_ITEMS = [
    
    {
      label: 'Home',
      href: '/',
    },
    {
      label: 'My Resumes',
      href: '/my-resumes',
    },
  ];