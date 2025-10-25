import React from 'react'

const Footer = () => {
  const year = new Date().getFullYear()
  return (
    <footer className="text-white mt-8">
      <div className="max-w-5xl mx-auto px-4 py-4 flex flex-col sm:flex-row items-center justify-between gap-2">
        <span className="text-sm">&copy; {year} MOVIX. All rights reserved.</span>
        <span className="text-sm">Made by Puneet Khandelwal.</span>
      </div>
    </footer>
  )
}

export default Footer