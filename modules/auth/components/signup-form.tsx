'use client'

import { cn } from "cn"

import { Button } from "@/components/ui/button"
import {
  Field,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import Image from "next/image"
import Link from "next/link"
import { assets } from "@/assets"
import PasswordField from "./password-field"
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { SIGNUP_VALIDATION_SCHEMA } from '../auth.validation'
import { useAuthStore } from "../auth.store"

export function SignupForm({
  className,
  ...props
}: React.ComponentProps<"div">) {

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: zodResolver(SIGNUP_VALIDATION_SCHEMA),
    defaultValues: {
      email: "",
      password: ""
    }
  });

  const { loading, onSignupSubmit } = useAuthStore();

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <form onSubmit={handleSubmit(onSignupSubmit)}>
        <FieldGroup>
          <div className="flex flex-col items-center gap-2 text-center">
            <Link
              href="#"
              className="flex flex-col items-center gap-2 font-medium"
            >
              <Image
                src={assets.logo.symbol}
                alt="logo"
                height={720}
                width={1080}
                className="h-8 w-auto"
              />
            </Link>
            <h1 className="text-xl font-bold">Welcome to <span className="text-primary">FloorFlow</span>.</h1>
            <FieldDescription>
              Already have an account? <Link href="#">Sign in</Link>
            </FieldDescription>
          </div>
          <Field>
            <FieldLabel htmlFor="email">Email</FieldLabel>
            <Input
              id="email"
              type="email"
              placeholder="user@floorflow.com"
              {...register('email')}
            />
            {errors.email?.message && <FieldError className="text-sm">{errors.email.message}</FieldError>}
          </Field>
          <Field>
            <FieldLabel htmlFor="email">Password</FieldLabel>
            <PasswordField
              id="password"
              placeholder='*****'
              {...register('password')}
            />
            {errors.password?.message && <FieldError className="text-sm">{errors.password.message}</FieldError>}
          </Field>
          <Field>
            <Button type="submit" loading={loading}>Create Account</Button>
          </Field>
        </FieldGroup>
      </form>
      <FieldDescription className="px-6 text-center">
        By clicking continue, you agree to our <Link href="#">Terms of Service</Link>{" "}
        and <Link href="#">Privacy Policy</Link>.
      </FieldDescription>
    </div>
  )
}
