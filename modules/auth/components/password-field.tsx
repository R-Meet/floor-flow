'use client'

import { cn } from '@/lib/utils'
import { useState } from 'react'
import { FaEye, FaEyeSlash } from 'react-icons/fa'
import { Input, InputProps } from '@/components/ui/input'

const PasswordField = ({
  className,
  ...props
}: InputProps) => {
  const [showPassword, setShowPassword] = useState(false)
  return (
    <div className="relative">
      <Input
        type={showPassword ? "text" : "password"}
        className={cn("pr-10", className)}
        {...props}
      />
      <button
        type="button"
        onClick={() => setShowPassword(!showPassword)}
        className="cursor-pointer absolute inset-y-0 right-0 flex items-center px-3 text-muted-foreground"
      >
        {showPassword ? <FaEyeSlash /> : <FaEye />}
      </button>
    </div>
  )
}

export default PasswordField