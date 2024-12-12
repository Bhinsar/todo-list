import React from 'react'

export default function Footer() {
  let footerstyle={
    position:'relative',
    bottom:0,
    width:"100%"
  }
  return (
    <footer className='bg-black text-light py-3'style={footerstyle}>
      <p className="text-center">Copyright &copy; ToDo-list.com</p>
    </footer>
  )
}
