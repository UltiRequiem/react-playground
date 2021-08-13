const Wrapper = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  padding: '50px',
  color: '#444',
  border: '1px solid #1890ff',
}

const Button = {
  padding: '10px 20px',
  border: 'none',
  borderRadius: '4px',
  background: '#1890ff',
  color: '#fff',
  fontSize: '14px',
  cursor: 'pointer',
  transition: '.3s background',
  '&:hover': {
    background: '#40a9ff',
  },
}

export { Wrapper, Button }
