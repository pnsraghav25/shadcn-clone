import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card'
import { Button } from './ui/button'
import { Github } from 'lucide-react'
import { Separator } from './ui/separator'
import { Input } from './ui/input'
import { Label } from './ui/label'

const Createacc = () => {
    return (
        <Card>
            <CardHeader>
                <CardTitle className='text-2xl'>Create an account</CardTitle>
                <CardDescription>Enter your email below to create your account</CardDescription>
            </CardHeader>
            <CardContent className='flex flex-col gap-4'>
                <div className='flex justify-between'>
                    <Button variant={'outline'} className='px-10'><Github /> Github</Button>
                    <Button variant={'outline'} className='px-10'>
                        <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill='hsl(var(--foreground))'>
                            <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z" />
                        </svg>
                        Google
                    </Button>
                </div>
                <div className='flex flex-row items-center gap-2 justify-between'>
                    <Separator className='shrink' />
                    <p className='uppercase font-normal text-xs text-muted-foreground shrink-0'>Or continue with</p>
                    <Separator className='shrink' />
                </div>
                <div className='flex flex-col gap-2'>
                    <Label htmlFor="email">Email</Label>
                    <Input type="email" id="email" placeholder="Email" />
                </div>
                <div className='flex flex-col gap-2'>
                    <Label htmlFor="password">Password</Label>
                    <Input type="password" id="text" />
                </div>
                <Button variant={'default'} className='mt-2'>Create Account</Button>
            </CardContent>
        </Card>
    )
}

export default Createacc